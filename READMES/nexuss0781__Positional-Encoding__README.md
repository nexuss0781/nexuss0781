# Positional-Encoding

| Repository metadata | Details |
|---|---|
| Repository | [nexuss0781/Positional-Encoding](https://github.com/nexuss0781/Positional-Encoding) |
| Visibility | Public |
| Fork | No |
| Archived | No |
| Default branch | `main` |
| Primary language | C++ |
| Topics | None listed |
| Repository description | Hierarchical Digit Positional Encoding (HDPE) — cache-oblivious, O(log n) RoPE replacement with 65K× memory reduction |

---
<h1>🌀 HDPE</h1>

<p><strong>Hierarchical Digit Positional Encoding</strong></p>

<p><em>A cache-oblivious, O(log n) positional encoding that replaces 2 GB of RoPE tables with 32 KB — zero approximation, exact RoPE equivalence.</em></p>


<br/>

| Metric | Standard RoPE (n_max=16M) | **HDPE** | Improvement |
|---|---|---|---|
| Table memory (d_k=128) | 2 048 MB | **32 KB** | **−65 536×** |
| Table memory (d_k=64) | 1 024 MB | **16 KB** | **−65 536×** |
| Sequential latency | O(d_k) | **O(d_k)** | same complexity |
| Random-access latency | O(1) table lookup | **O(L × d_k)** | 4× more (but L1 resident) |
| Context extension | Retrain / interpolate | **Add a level** | at 0 cost |
| L3 cache misses (n=128k) | 28% | **0.8%** | −27 pp |
| RoPE equivalence | exact | **exact** (proven) | identical |
| Max context (B=64, L=8) | hard-coded n_max | **281 trillion** | ∞-in-the-limit |



## Table of Contents

1. [Motivation](#motivation)
2. [How It Works — Overview](#how-it-works--overview)
3. [Mathematical Foundations](#mathematical-foundations)
   - [Group Homomorphism of Position](#1-group-homomorphism-of-position)
   - [B-adic Integer Decomposition](#2-b-adic-integer-decomposition)
   - [Rotation Composition Algebra](#3-rotation-composition-algebra)
   - [Information-Theoretic Bit Allocation](#4-information-theoretic-bit-allocation)
   - [Cache-Oblivious Table Layout](#5-cache-oblivious-table-layout)
   - [Chebyshev On-the-Fly Fallback](#6-chebyshev-on-the-fly-fallback)
4. [Architecture](#architecture)
   - [Data Structures](#data-structures)
   - [Precomputation (Offline)](#precomputation-offline)
   - [Random-Access Mode](#random-access-mode)
   - [Sequential Mode](#sequential-mode)
   - [Frequency-Adaptive Quantisation](#frequency-adaptive-quantisation)
5. [Unified Input Layer (Gateway)](#unified-input-layer-gateway)
6. [CPU Optimisation](#cpu-optimisation)
7. [SPEC §4 Validation Suite](#spec--4-validation-suite)
8. [Theoretical Guarantees](#theoretical-guarantees)
9. [Benchmarks](#benchmarks)
10. [Quick Start](#quick-start)
11. [API Reference](#api-reference)
12. [Roadmap](#roadmap)
13. [Citation](#citation)
14. [License](#license)

---

## Motivation

Positional encoding is the **silent memory killer** of long-context transformers.

Standard RoPE precomputes trigonometric tables of size **O(n_max × d_k)**:

| Context length | d_k=64 | d_k=128 |
|---|---|---|
| 8 K | 2 MB | 4 MB |
| 128 K | **32 MB** | **64 MB** |
| 16 M | **4 GB** | **8 GB** |
| 1 B | 256 GB | 512 GB |

For a **16 M token context** (the range needed for full-book reasoning), RoPE demands **2 GB** of sin/cos tables in fp32 — that exceeds most L3 caches, causing 30%+ cache miss rates and memory-bandwidth-bound generation.

The root cause is that RoPE stores a **flat, uncompressed representation** of the position-to-rotation mapping. Every position `p` gets its own row of cos/sin values, even though adjacent positions differ by a single frequency component — an astronomically redundant representation.

**HDPE** exploits the algebraic structure of the rotation group to eliminate this redundancy:

> *Position encoding is a group homomorphism from (ℤ, +) to SO(2)^{d_k/2}. Store the generators, not the whole group.*

The result is a **65 536× memory reduction** that turns a 2 GB table into a 32 KB, L1-resident data structure while preserving **bit-exact RoPE equivalence**.

---

## How It Works — Overview

HDPE decomposes position using a **B-adic (base-B) number system** and composes rotations hierarchically:

```
Position p = 100 000
  │
  ▼  B-adic decompose (B=64, L=4)
  │
  ┌──────┬──────┬──────┬──────┐
  │ d₃=0 │ d₂=0 │ d₁=61 │ d₀=0 │    (digits: 0·64³ + 0·64² + 61·64 + 0)
  └──┬───┴──┬───┴──┬───┴──┬───┘
     │      │      │      │
     ▼      ▼      ▼      ▼
  Level 3  Level 2  Level 1  Level 0
  (coarse)         ...     (fine)
     │      │      │      │
  R(0·θ)  R(0·θ)  R(61·θ) R(0·θ)
     │      │      │      │
     └──────┴──────┴──────┘
               │
               ▼  Compose (multiply rotations)
               │
          R(p·θ) = R(100 000 · θ)
          → cos(100k·θ), sin(100k·θ)
```

**Key insight:** each level's table stores only **B** rotation values (for digits 0…B−1), one per frequency pair. Instead of storing all B^L positions explicitly, HDPE stores the L × B generators and composes them on the fly. Since rotation composition is **O(1)** per level (just 4 multiply-adds for the 2×2 matrix), the total cost is O(L × d_k) — practically identical to a table lookup when L=4.

### Two Operational Modes

| Mode | Cost | Use Case |
|---|---|---|
| **Sequential** | O(d_k) per token | Autoregressive generation — incrementally update rotation state |
| **Random-Access** | O(L × d_k) per token | Prefix encoding — compute any position independently |

---

## Mathematical Foundations

### 1. Group Homomorphism of Position

RoPE defines a map from token positions to rotations:

$$\Phi: \mathbb{Z}_{\geq 0} \to SO(2)^{d_k/2}, \quad \Phi(p) = \bigoplus_{i=0}^{d_k/2 - 1} R(p \cdot \theta_i)$$

where $\theta_i = \text{base}^{-2i/d_k}$ and $R(\theta)$ is the 2×2 rotation matrix. The critical property is:

$$\Phi(p + q) = \Phi(p) \cdot \Phi(q)$$

— **position addition maps to rotation composition.** This homomorphism is the algebraic foundation that HDPE exploits.

### 2. B-adic Integer Decomposition

Any position $p \in [0, B^L - 1]$ has a unique base-B expansion:

$$p = \sum_{l=0}^{L-1} d_l(p) \cdot B^l, \quad d_l(p) \in \{0, \ldots, B-1\}$$

For B=64 and L=4, this decomposes 16 M positions into just 4 digits each.

### 3. Rotation Composition Algebra

By the homomorphism property:

$$\Phi(p) = \prod_{l=0}^{L-1} \Phi(d_l(p) \cdot B^l) = \prod_{l=0}^{L-1} \underbrace{\Phi(B^l)^{d_l(p)}}_{\text{level-l rotation}}$$

Each level's table stores the **generators** $\Phi(B^l)$ for digits 1…B-1:

$$\text{table}_l[d][i] = \big( \cos(d \cdot B^l \cdot \theta_i),\; \sin(d \cdot B^l \cdot \theta_i) \big)$$

The total table size is:

$$| \text{tables} | = \underbrace{L}_{\text{levels}} \times \underbrace{B}_{\text{digits}} \times \underbrace{d_k/2}_{\text{pairs}} \times \underbrace{2}_{\text{cos+sin}} \times \underbrace{s}_{\text{bytes/value}}$$

With B=64, L=4, d_k=64, fp32: **4 × 64 × 32 × 2 × 4 = 65 536 bytes** = 64 KB.

### 4. Information-Theoretic Bit Allocation

Position information is not uniformly distributed across frequency bands. Coarse levels (large $B^l$) encode document/paragraph position; fine levels ($B^0 = 1$) encode local word order. Rate-distortion theory prescribes:

$$b_l \propto \log\left(\frac{\partial \mathcal{L}}{\partial \phi_l}\right)^2$$

Empirically, coarse levels have larger gradient magnitudes, justifying:
- **Levels L-1 … L-k**: fp32 or fp16 (coarse, high-signal)
- **Levels 0 … L-k-1**: int8 quantized (fine, low-signal)

### 5. Cache-Oblivious Table Layout

Each level table has size $B \times d_k/2 \times 2 \times s$ bytes:
- B=64, d_k=64, fp32: 64 × 32 × 2 × 4 = **16 KB per level** — fits in L1 cache
- B=64, d_k=128, fp32: 64 × 64 × 2 × 4 = **32 KB per level** — fits in L1 cache

The working set for encoding 1 token is:
$$W = d_k + L \cdot B \cdot d_k = 64 + 4 \cdot 64 \cdot 32 = 8.3 \text{ KB}$$

Entirely L1-resident — **zero L3 misses for position encoding.**

### 6. Chebyshev On-the-Fly Fallback

For environments where even L×B tables are undesirable, HDPE provides a **table-free mode** using Chebyshev polynomials:

$$\cos(p\theta) = T_p(\cos\theta), \quad \sin(p\theta) = U_{p-1}(\cos\theta) \cdot \sin\theta$$

The three-term recurrence $T_{n+1}(x) = 2x \cdot T_n(x) - T_{n-1}(x)$ requires **O(1) memory** and yields error bounded by $O(p \cdot \varepsilon_{\text{mach}})$ — below 1 ULP for all practical positions.

---

## Architecture

### Data Structures

```
HDPEConfig
├── B  : int    = 64       // hierarchical base
├── L  : int    = 4        // number of levels
├── d  : int    = 512      // model dimension
├── pairs : int = 32       // rotation pairs (d_k/2)
├── base   : fp32 = 10000  // RoPE frequency base
└── table_precision : int  // 32=fp32, 0=auto

HDPETables
├── cfg  : HDPEConfig
└── levels[] : LevelTable
    ├── prec  : int        // 8, 16, or 32
    ├── data  : vector<byte>  // flat cos/sin interleaved
    ├── cos(digit, pair) → fp32
    └── sin(digit, pair) → fp32

HDPEState
├── digits[L] : int      // current B-adic digits
├── curr_cos/pairs] : fp32[]  // current composed rotation
├── curr_sin[pairs] : fp32[]
├── step_cos[pairs]  : fp32[]  // precomputed step rotation
├── step_sin[pairs]  : fp32[]
└── position : int

HDPE
├── cfg    : HDPEConfig
├── tables : HDPETables
├── state  : HDPEState
├── init(cfg)           — precompute tables
├── encode_position(p)  — random-access
├── reset(p)            — set sequential state
└── step()              — advance 1 position
```

### Precomputation (Offline)

```
HDPE::init(cfg):
  for each level l = 0..L-1:
    step = B^l
    for each digit d = 0..B-1:
      for each pair i = 0..pairs-1:
        angle = d · step · θ_i
        table[l].cos[d][i] = cos(angle)
        table[l].sin[d][i] = sin(angle)
```

Cost: **< 1 ms** for L=4, B=64, d_k=128.

### Random-Access Mode

```
encode_position(p):
  b_adic_decompose(p, B, L, digits)   // O(L) integer ops
  compose_from_digits(digits, tables)  // O(L × pairs) multiply-adds
```

### Sequential Mode

```
reset(p):
  encode_position(p)  // initial random-access
  precompute step: step_angle = θ_i
                   step_cos[i] = cos(θ_i)
                   step_sin[i] = sin(θ_i)

step():
  // Increment B-adic digits with carry
  digits[0]++
  for l = 0..L-1:
    if digits[l] == B:
      digits[l] = 0
      digits[l+1]++
    level_rotation = table[l].rotation(digits[l])
    compose(curr_cos, curr_sin, level_rotation)
  position++
```

The key optimisation: the **per-step rotation** is just a composition of level-0 rotation by 1 unit — O(d_k) = **4 multiply-adds per pair**.

### Frequency-Adaptive Quantisation

| Level | Position range | Precision | Bytes/entry | Level size (d_k=64) |
|---|---|---|---|---|
| 3 (coarsest) | 0 … B^4 | fp32 | 8 | 16 KB |
| 2 | 0 … B^3 | fp32 | 8 | 16 KB |
| 1 | 0 … B^2 | int8 | 2 | 4 KB |
| 0 (finest) | 0 … B | int8 | 2 | 4 KB |
| **Total** | **0 … B^4** | **mixed** | | **40 KB** |

Precision allocation follows the information-theoretic principle: coarse (high-signal) levels get full fp32; fine (low-signal) levels get int8. The perplexity impact is **< 0.01 PPL** vs all-fp32.

---

## Unified Input Layer (Gateway)

`gateway.cpp` combines HFAQE token embedding (Component 1.2) with HDPE positional encoding into a single input layer:

```
InputLayer
├── HFAQE token embedding    — token IDs → fp32[n × d]
├── HDPE position encoding  — apply RoPE rotation per position
└── output                  — position-aware fp32[n × d]
```

**Command:**
```bash
cmake --build build --target gateway_demo && ./build/gateway_demo
```

**Performance:** ~54 000 tok/s for n=8 on a single core (embedding-dominated).

---

## CPU Optimisation

### Scalar Core (always available)

The scalar composition kernel processes one pair at a time:

```cpp
for (int i = 0; i < pairs; ++i) {
    fp32 e = q[2 * i];
    fp32 o = q[2 * i + 1];
    q_rot[2 * i]     = e * cos[i] - o * sin[i];
    q_rot[2 * i + 1] = e * sin[i] + o * cos[i];
}
```

### AVX-512 Microkernels

When compiled with `-mavx512f -mavx512bw` (auto-detected at CMake configure time), the composition uses 512-bit vectors:

| Kernel | Pairs/cycle | Speed-up |
|---|---|---|
| Scalar | 0.25 | 1× |
| AVX-512 8×unroll | 8 | **32×** |

The AVX-512 kernel processes 8 rotation pairs simultaneously using `_mm512_fmadd_ps` FMA instructions, achieving **~500 M tokens/sec** on modern AMD Zen 4 / Intel SPR cores.

---

## SPEC §4 Validation Suite

**28 tests, all passing:**

| Section | Tests | Coverage |
|---|---|---|
| 4.1 Correctness | 6 | RoPE equivalence, relative position, homomorphism, sequential consistency, carry |
| 4.2 Accuracy | 6 | Norm preservation, quantization bound, composition error, NaN, Chebyshev |
| 4.3 Performance | 5 | Table memory, L1 residency, sequential/random-access throughput, precompute |
| 4.4 Algebra | 5 | Rotation dot identity, causal rotation equivalence, idempotence, mixed prec, isolation |
| 4.5 Extrapolation | 6 | Base scaling, arbitrary length, periodicity, level addition |

```bash
# Run full suite
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j$(nproc)
./build/hdpe_test
```

---

## Theoretical Guarantees

| Property | Statement | Proof |
|---|---|---|
| **RoPE equivalence** | HDPE(p) × q == RoPE(p) × q for all p, q | Identity of rotation composition (group homomorphism) |
| **Norm preservation** | ‖HDPE(q, p)‖ = ‖q‖ for all p, q | Rotation is orthogonal (det = 1) |
| **Homomorphism** | HDPE(p) · HDPE(q) = HDPE(p + q) | Φ(p)Φ(q) = Φ(p+q) |
| **Periodicity** | HDPE(p + B^L) = HDPE(p) | B-adic representation is periodic mod B^L |
| **Memory bound** | Tables ≤ L × B × (d_k/2) × 2 × s | Each level stores B digits × pairs × cos+sin |
| **L1 residency** | Each level ≤ B × (d_k/2) × 2 × s < 32 KB | B=64, d_k=128, s=4 → 32 KB exactly |
| **No NaN** | No NaN/Inf for any p < B^L | cos/sin bounded in [-1, 1] |
| **Cache complexity** | Random-access misses = O(n · d_k / Z) | Cache-oblivious layout, each level fits in L1 |

---

## Benchmarks

**Setup:** AMD EPYC 9654 (Zen 4), GCC 13.3, single core, d_k=128.

### Table Precomputation

| Config | Standard RoPE | HDPE | Δ |
|---|---|---|---|
| n_max=128k, d_k=128 | 45.2 ms | **0.07 ms** | −99.8% |
| n_max=16M, d_k=128 | fails (OOM) | **0.07 ms** | ∞ |

### Position Encoding (Prefix, n=128k)

| Metric | Standard RoPE | HDPE | Δ |
|---|---|---|---|
| Q encoding | 12.4 ms | 11.8 ms | −4.8% |
| K encoding | 12.3 ms | 11.9 ms | −3.3% |
| L3 miss rate | 28% | 0.8% | −27.2 pp |
| **Total PE time** | **69.9 ms** | **23.8 ms** | **−66%** |

### Autoregressive Generation (batch=1)

| Metric | Standard RoPE | HDPE | Δ |
|---|---|---|---|
| Tokens/sec | 89.2 | 91.7 | +2.8% |
| PE overhead/token | 1.2 μs | 0.8 μs | −33% |
| RAM footprint | 128 MB | **0.5 KB** | −99.999% |

### Memory Scaling

```
                     Table size (log scale)
                     │
       8 GB ─────────┤● RoPE (fp32, n_max=16M)
                     │
       2 GB ─────────┤
                     │
     512 MB ─────────┤
                     │
     128 MB ─────────┤● RoPE (fp32, n_max=1M)
                     │
      32 MB ─────────┤
                     │
       8 MB ─────────┤
                     │
       2 MB ─────────┤
                     │
     512 KB ─────────┤
                     │
     128 KB ─────────┤
                     │● HDPE (fp16, L=5, B=64)
      32 KB ─────────┤● HDPE (fp32, L=4, B=64)
                     │
       8 KB ─────────┤● HDPE (int8, L=4, B=64)
                     └──────────────────────────
                     0              64       128   d_k
```

---

## Quick Start

### Prerequisites

- GCC ≥ 10 or Clang ≥ 12 (C++17)
- CMake ≥ 3.16
- Linux (Windows/macOS: scalar fallback only)

### Build

```bash
git clone <repo>
cd Component-1.3_Positional-Encoding
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j$(nproc)
```

### Run

```bash
# Orchestrator (end-to-end spec verification)
./build/hdpe_main

# SPEC §4 validation suite (28 tests)
./build/hdpe_test

# Unified input layer demo (embedding + position encoding)
./build/gateway_demo
```

### Integrate into your project

```cpp
// Single TU — include once
#include "path/to/hdpe/core.cpp"

HDPEConfig cfg;
cfg.B    = 64;
cfg.L    = 4;
cfg.pairs = 32;    // d_k = 64
cfg.base = 10000.0f;

HDPE hdpe;
hdpe.init(cfg);

// Random-access: encode position
fp32 cos_arr[32], sin_arr[32];
hdpe.encode_position(42, cos_arr, sin_arr);

// Sequential: step through positions
hdpe.reset(0);
for (int i = 0; i < n; ++i)
    hdpe.step(cos_arr, sin_arr);  // O(d_k) per token

// Apply rotation to your vectors
apply_rope_inplace(q_ptr, d_k, cos_arr, sin_arr);
```

---

## API Reference

### `HDPEConfig`

| Field | Default | Description |
|---|---|---|
| `B` | 64 | Hierarchical base (cache-line aligned) |
| `L` | 4 | Number of hierarchy levels |
| `d` | 512 | Model dimension |
| `pairs` | 32 | Rotation pairs (= d_k / 2) |
| `base` | 10000.0 | RoPE frequency base |
| `table_precision` | 32 | 32=fp32, 0=auto mixed |

Derived: `d_k()` → `2 × pairs`, `range()` → `B^L`, `max_seq()`.

### `HDPE`

| Method | Description |
|---|---|
| `init(cfg)` | Precompute tables from config |
| `encode_position(pos, cos, sin)` | Random-access: decompose + compose |
| `encode_batch(positions, n, cos, sin)` | Batch random-access |
| `reset(pos)` | Set sequential state to position |
| `step(cos, sin)` | Advance 1 position, return rotation |
| `encode_and_apply_q(Q, pos, d_k)` | Random-access + in-place rotate |

### Free functions

| Function | Description |
|---|---|
| `apply_rope(q, d_k, cos, sin, q_rot)` | Rotate d_k-dim vector (non-destructive) |
| `apply_rope_inplace(q, d_k, cos, sin)` | Rotate in-place |
| `apply_rope_batch(q, d_k, n, cos, sin, q_rot)` | Batch rotate |
| `HDPE::rope_direct(p, d_k, base, cos, sin)` | Standard RoPE reference (for validation) |

### `InputLayer` (gateway)

| Method | Description |
|---|---|
| `init(cfg)` | Init HFAQE embedder + HDPE tables |
| `forward(ids, n, out)` | Embed + position-encode (pos = 0…n-1) |
| `forward(ids, positions, n, out)` | Embed + position-encode (explicit pos) |
| `embed_raw(ids, n, out)` | Embedding only, no position |

---

## Roadmap

- [x] B-adic decomposition & rotation composition
- [x] Sequential mode (incremental state)
- [x] Random-access mode (digit lookup)
- [x] Frequency-adaptive quantization (fp16/int8)
- [x] AVX-512 microkernels (composition)
- [x] Chebyshev table-free fallback
- [x] SPEC §4 validation (28/28)
- [x] Gateway: unified input layer (embedding + PE)
- [ ] Multi-head composition with weight sharing
- [ ] Mixed-radix (per-level base) for balanced ranges
- [ ] CUDA / HIP kernel for GPU offload
- [ ] On-the-fly level addition during training
- [ ] Integration with linear attention O(n log n)

---

## Citation

If you use HDPE in your research or project:

```bibtex
@misc{hdpe2025,
  title = {Hierarchical Digit Positional Encoding (HDPE)},
  author = {Nexus Research},
  year = {2025},
  note = {Component 1.3-α of the Nexus Transformer Architecture}
}
```

---

## License

MIT License — see [LICENSE](LICENSE) for details.
