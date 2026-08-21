<p align="center">
  <img src="https://img.shields.io/badge/Language-C%2B%2B17-blue?logo=cplusplus" alt="C++17">
  <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20macOS%20%7C%20Windows-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/Dependencies-Eigen3%20%7C%20stb-lightgrey" alt="Dependencies">
  <img src="https://img.shields.io/badge/Status-Active%20Development-brightgreen" alt="Status">
</p>

<h1 align="center">Nexuss Vision</h1>

<p align="center">
  <strong>A lightweight, from-scratch OCR engine built on classical image processing<br>and a custom neural recognizer — no heavyweight frameworks, no cloud offload.</strong>
</p>

<p align="center">
  Designed to extract text from images and scanned documents on-device,<br>from phones to low-end laptops, without requiring a GPU.
</p>

---

## What is Nexuss Vision?

Nexuss Vision is a purpose-built OCR system that takes a fundamentally different approach from conventional solutions. Instead of adapting large pre-trained vision-language models, it builds **everything from low-level primitives** — every algorithm, from pixel traversal to sequence decoding, is implemented directly in C++.

The system is structured as a **two-stage pipeline** that deliberately separates what classical image processing can resolve from what requires learned recognition:

```
                         Input Images
                              │
                              ▼
              ┌───────────────────────────┐
              │   Stage 1: Image Engine    │
              │   Quality scoring          │
              │   Adaptive enhancement     │
              │   Binarization & cleanup   │
              │   Region detection         │
              │   Confidence routing       │
              └───────────────────────────┘
                      │               │
                 Resolved          Unresolved
                 (direct)          (escalated)
                      │               │
                      ▼               ▼
              ┌──────────┐   ┌──────────────────────┐
              │  Output   │   │  Stage 2: Recognition │
              │  (Stage 1)│   │  Feature encoder      │
              │           │   │  Sequence model       │
              │           │   │  CTC decoder          │
              └──────────┘   └──────────────────────┘
                      │               │
                      └───────┬───────┘
                              ▼
                     Extracted Text Corpus
```

**Stage 1** handles the heavy lifting — scoring image quality, enhancing contrast, binarizing, detecting text regions, and determining which regions are clean enough for direct extraction. Only the regions it **cannot** confidently resolve are passed to Stage 2.

**Stage 2** is a small, custom-built neural recognizer — a depthwise-separable convolutional backbone feeding into a bidirectional GRU sequence encoder with CTC decoding. It handles the genuinely hard cases: degraded scans, unusual scripts, damaged documents.

This design keeps the learned component **small and focused** because it only needs to solve the residual problem, not the entire OCR task.

---

## Key Design Principles

| Principle | What it means |
|---|---|
| **Built from scratch** | Every domain algorithm — filtering, morphology, connected components, convolution, GRU, CTC — is implemented directly. No OpenCV, no PyTorch, no TensorFlow. |
| **Runs anywhere** | Designed for constrained hardware — mobile devices, low-end laptops, embedded systems. No GPU required. |
| **Throughput-first** | Batch processing is a first-class citizen. Hundreds of images processed in minutes, not hours. |
| **Linear complexity** | Every operation in the recognition core is O(n) or O(n log n). No quadratic bottlenecks. |
| **Extensible languages** | Adding a new script means registering its character set — not retraining the whole system. |
| **Explainable routing** | The confidence-based handoff between stages is transparent — you know exactly why a region was resolved or escalated. |

---

## How It Works

### Stage 1: The Image Engine

The classical processing layer runs a sequence of deterministic operations, each operating in **O(WH)** time:

**Quality Scoring** — Before any heavy processing, each image is scored on four signals: sharpness (Laplacian variance), local contrast distribution, noise level (median absolute deviation), and text-region density. Images below a quality threshold are discarded early to avoid wasting compute.

**Adaptive Enhancement** — Text-targeted CLAHE (Contrast Limited Adaptive Histogram Equalization) boosts contrast specifically in text-bearing regions. For lower-quality images, adaptive sharpening via unsharp masking is applied with strength proportional to the quality deficit.

**Binarization** — Niblack's adaptive thresholding, accelerated via integral images, converts the enhanced grayscale to clean binary. Morphological cleanup (opening + closing) removes noise and fills small stroke gaps.

**Region Detection** — Two-pass connected-component labeling with union-find identifies individual text regions. Geometric features (aspect ratio, fill ratio, projection variance) classify each component as text or noise. Glyph grouping segments text lines into individual characters or word groups.

**Confidence Routing** — Each region receives a composite confidence score from three signals: stroke consistency (via distance transform), glyph separation, and uniformity. Regions above the confidence threshold are **resolved** — their text can be extracted deterministically. Regions below are **escalated** to Stage 2 with their enhanced pixel data.

### Stage 2: The Recognition Core

The learned model processes only the unresolved residue:

**Feature Encoder** — Three depthwise-separable convolutional layers with batch normalization and ReLU extract spatial features from 32px-high text patches. This architecture achieves a significant parameter reduction compared to standard convolutions while maintaining discriminative power.

**Sequence Encoder** — The 2D feature map is collapsed along the height dimension, passed through a 1D convolution for local context, then through a bidirectional GRU that captures full-sequence dependencies. A linear projection maps to log-probabilities over the character vocabulary.

**CTC Decoder** — Connectionist Temporal Classification decodes the sequence without requiring explicit character alignment. Supports both greedy decoding (fast) and prefix beam search (higher accuracy).

**Script Detection** — The decoder identifies the writing system (Latin, Cyrillic, Arabic, etc.) by aggregating probability mass across script-specific sub-alphabets.

---

## Performance Targets

| Metric | Target |
|---|---|
| Batch throughput | ~300 images (640x480) in under 2 minutes |
| Hardware requirement | Runs on mobile devices, no GPU needed |
| Model size | ~0.4 MB quantized, ~1.5 MB FP32 |
| Peak RAM (single image) | ~3 MB |
| Language onboarding | Add new script via character-set registration |

---

## Quick Start

### Prerequisites

- C++17 compiler (GCC 7+, Clang 6+, MSVC 2017+)
- CMake 3.16+
- Eigen 3 (header-only linear algebra library)

On Debian/Ubuntu:

```bash
sudo apt-get install cmake g++ libeigen3-dev
```

### Build

```bash
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build -j$(nproc)
```

### Run

Point the CLI at a directory of images:

```bash
./build/nxv_cli /path/to/images/ output.json
```

The pipeline will:
1. Discover all image files (PNG, JPEG, BMP, TIFF) in the directory
2. Run the full Stage 1 + Stage 2 pipeline on each
3. Output structured JSON with extracted text, confidence scores, bounding boxes, and timing stats

### Output Format

```json
{
  "images": [
    {
      "index": 0,
      "regions": [
        {
          "text": "Hello World",
          "confidence": 0.94,
          "script": "Latn",
          "bbox": [12, 8, 200, 32],
          "source": "model"
        }
      ]
    }
  ],
  "stats": {
    "total_images": 1,
    "resolved": 3,
    "unresolved": 1,
    "discarded": 0,
    "total_time_ms": 42.5
  }
}
```

Each region includes:
- **text** — the extracted string
- **confidence** — recognition confidence score
- **script** — detected writing system (e.g., `Latn`, `Cyrl`, `Arab`)
- **bbox** — bounding box `[x, y, width, height]` in the original image
- **source** — whether the text was extracted deterministically (`det`) or by the neural recognizer (`model`)

---

## Architecture Deep Dive

### The Complexity Invariant

Every operation in the recognition core is provably **linear**:

| Component | Complexity |
|---|---|
| Feature encoder (depthwise-separable conv) | O(hp \u00b7 wp) per region |
| Height collapse | O(hp \u00b7 wp) per region |
| 1D convolution | O(T) per region |
| Bidirectional GRU | O(T) per region |
| Output projection | O(T \u00b7 |\u03a3|) per region |
| CTC greedy decode | O(T) per region |
| **Stage 1 total** | **O(W \u00b7 H) per image** |
| **Stage 2 total** | **O(B \u00b7 (np + T)) per batch** |

Where T is sequence length, hp\u00d7wp is patch area, B is batch size, and |\u03a3| is vocabulary size (a constant).

### Model Size

The entire recognition model fits in approximately **0.4 MB** when quantized to INT8 — small enough to embed in a mobile application without impacting install size.

| Component | Parameters |
|---|---|
| Feature encoder (3 DSC layers) | ~4,900 |
| BatchNorm layers | ~896 |
| Sequence encoder (collapse + conv + GRU + projection) | ~348,000 |
| **Total** | **~354,000** |

### The Confidence-Based Handoff

The key insight of the two-stage design: most text regions in a typical document are **easy**. Clean printed text, good scan quality, high contrast — Stage 1 handles these with deterministic extraction at near-zero cost. Only the genuinely difficult regions (degraded scans, unusual fonts, noise-corrupted text) need the neural recognizer.

This means:
- **Fast path** (Stage 1 resolved): Direct character segmentation via vertical projection. O(WH) total.
- **Slow path** (Stage 2 recognition): Neural inference on a small number of regions. Amortized cost is low because most regions take the fast path.

---

## Extending Language Support

Nexuss Vision supports multi-script recognition through a character-set registry architecture. Adding a new writing system:

1. **Define the character set** — Register the glyphs for the target script
2. **Extend the output layer** — The model's output projection grows to accommodate new characters
3. **Fine-tune (optional)** — If parallel data is available, a brief fine-tuning pass adapts the model

The convolutional encoder learns **script-agnostic** visual features (strokes, edges, spacing patterns), so the core model does not need to be retrained from scratch for each new language.

---

## Project Structure

```
.
├── include/nxv/          Public headers — clean API surface
├── src/                  Implementation modules (one per pipeline phase)
├── apps/                 CLI application
├── tests/                Per-phase gate tests and integration tests
├── SPEC/                 Full engineering specification
│   ├── Design.md         System design document
│   ├── Architecture.md   Engineering architecture
│   ├── Phase.md          Implementation phases and contracts
│   ├── Test.md           Test strategies and gate criteria
│   └── TODO.md           Atomic task breakdown
└── third_party/          Vendored single-header libraries (stb_image)
```

---

## Technical Highlights

- **No heavyweight dependencies** — Only Eigen (header-only linear algebra) and stb_image (single-header image I/O). Total third-party footprint: ~200 KB.
- **Self-contained test harness** — No external test framework required. Each phase has its own test suite with gate criteria that must pass before the next phase begins.
- **Deterministic initialization** — Model weights are seeded for reproducibility. The same input always produces the same output.
- **Pixel budget enforcement** — Oversized images are automatically downscaled to fit within a configurable pixel budget while preserving aspect ratio.
- **Corrupt file handling** — Invalid images are gracefully skipped with error reporting, never crashing the pipeline.

---

## Design Documentation

The full engineering specification lives under `SPEC/`:

| Document | Purpose |
|---|---|
| **Design.md** | System design — what Nexuss Vision is and why it exists |
| **Architecture.md** | Engineering architecture — formal algorithms, complexity proofs, performance models |
| **Phase.md** | Implementation phases with strict interface contracts |
| **Test.md** | Gate criteria — mandatory pass/fail conditions between phases |
| **TODO.md** | Atomic task breakdown — every implementation task tracked to completion |

---

## Roadmap

- [x] Stage 1: Complete image processing engine (quality scoring, enhancement, binarization, region detection, confidence routing)
- [x] Stage 2: Neural recognizer (feature encoder, sequence model, CTC decoder)
- [x] End-to-end CLI pipeline with JSON output
- [x] Per-phase timing instrumentation
- [ ] Training pipeline with CTC loss
- [ ] Self-reinforcement loop for unsupervised improvement
- [ ] INT8 quantization for mobile deployment
- [ ] Multi-script fine-tuning pipeline
- [ ] Benchmark suite against ICDAR / DIBCO datasets
- [ ] Android / iOS integration examples

---

## Contributing

Nexuss Vision follows a spec-driven development process. Every phase is defined by strict interface contracts and must pass mandatory gate criteria before the next phase begins. If you'd like to contribute:

1. Read the design documents under `SPEC/`
2. Check `TODO.md` for open tasks
3. Ensure your changes compile cleanly and pass all existing tests
4. Follow the existing code conventions (no comments unless requested, C++17, no high-level ML libraries)

---

## License

This project is under active development. License information will be added upon public release.

---

<p align="center">
  <sub>Built with C++17 \u2022 No frameworks \u2022 No cloud \u2022 Runs anywhere</sub>
</p>
