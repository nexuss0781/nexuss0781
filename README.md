# Nexuss0781 — Research, Systems, and Applied Intelligence

> **A personal research portfolio at the intersection of intelligent systems, efficient computation, developer infrastructure, and human-facing software.**
>
> This profile is not a catalogue of isolated experiments. It is a record of a continuing attempt to understand how intelligent software can be represented, trained, deployed, observed, secured, and made useful under real computational constraints.

[![Repositories](https://img.shields.io/badge/repositories-60-1f6feb?style=flat-square)](CATAGORY.md) [![Research](https://img.shields.io/badge/focus-intelligent%20systems-6f42c1?style=flat-square)](https://github.com/nexuss0781) [![Systems](https://img.shields.io/badge/orientation-CPU%20%7C%20cloud%20%7C%20edge-0a7b5c?style=flat-square)](CATAGORY.md)

## Research Position

My work is organized around a single engineering question: **how can ambitious intelligence become more efficient, inspectable, resilient, and accessible?** The answer is explored at several layers. At the model layer, the portfolio studies alternative attention, tokenization, embedding, positional encoding, uncertainty, and cognition architectures. At the systems layer, it examines operating environments, persistent data, secure browser control, remote execution, authentication, monitoring, and storage. At the application layer, it translates those ideas into education, finance, communication, productivity, media, and institutional software.

The resulting body of work is intentionally heterogeneous. Some repositories are formal research artifacts with mathematical specifications and validation suites. Others are operational prototypes, product studies, infrastructure components, or concise experiments. Their common thread is not a single framework; it is a preference for **first-principles construction, explicit resource budgets, reproducibility, and the willingness to distinguish an implemented result from a future hypothesis**.

## Portfolio Map

| Research area | Repositories | Primary question |
|---|---:|---|
| High-Level Research & Cutting-Edge Architectures | 15 | What alternative structures can support efficient cognition and sequence modeling? |
| LLM Training, Transformers & Tokenization | 7 | How can language systems be trained, represented, and adapted with greater control? |
| Agent Systems & AI Development Environments | 4 | How should agents interact with tools, workspaces, and the web? |
| Computer Vision, OCR & Audio Processing | 4 | How can perceptual input become structured computational substrate? |
| Developer Tools, Programming Languages & Reverse Engineering | 4 | How can software be made more extensible, sovereign, and inspectable? |
| DevOps, Remote Execution & Monitoring | 5 | How can distributed execution remain observable, controllable, and safe? |
| Systems, Platforms, Networking & Data | 4 | What foundations allow software to persist, synchronize, and operate near the machine? |
| Web Applications, Education, Productivity & Media | 10 | How can complex capabilities become useful in everyday workflows? |
| Bots, Messaging & Notifications | 2 | How can asynchronous events become actionable communication? |
| Identity, Security & Secret Management | 2 | How should trust, credentials, and authorization be centralized? |
| Finance, Marketing & Business Applications | 3 | How can software improve transactional clarity and operational decision-making? |
| **Total** | **60** | **One connected portfolio of research and implementation.** |

The authoritative repository taxonomy is maintained in [`CATAGORY.md`](CATAGORY.md). The entries below are a research-oriented synthesis of the complete project READMEs, with fuller treatment reserved for projects that contain distinctive architectures, formal claims, or unusually informative implementation detail.

---

# I. High-Level Research & Cutting-Edge Architectures

## 1. [`Walia`](https://github.com/nexuss0781/Walia)

**Walia** is the portfolio’s most expansive language-and-runtime proposition: a sovereign fifth-generation programming language designed around orthogonal persistence, a register-based virtual machine, dimensional typing, vector-native computation, integrated SQL/NoSQL data, and explicit systems access. Its central philosophical move is to treat state as a first-class resident of the language rather than an object that must repeatedly be serialized into external storage.

The project combines a persistent memory-mapped substrate, NaN-boxed 64-bit values, SIMD-oriented vector operations, HNSW search, quantization, an integrated Sovereign Query Engine, compile-time dimensional checks, executable documentation contracts, and an explicit `unsafe` mode for pointers, allocation, assembly, and system calls. The 97-module curriculum is equally important: it turns the language from a compiler exercise into a proposed learning path from basic persistence through data sovereignty, neural engineering, hardware control, and autonomous-agent convergence.

Walia is persuasive because it unifies abstractions that are commonly separated—language, database, vector engine, operating environment, and documentation—while still acknowledging an unfinished systems frontier. Its roadmap explicitly distinguishes completed foundations from ongoing MMIO, graphics, distributed consensus, WebAssembly, GPU, and formal-verification work.

## 2. [`Attention`](https://github.com/nexuss0781/Attention)

**Attention** is a C++20 research kernel concerned with the geometry beneath attention rather than with reproducing a complete transformer stack. It explores metric-aware attention, positive-definite learned transformations, whitening operators, streaming causal aggregation, and configuration validation.

Its significance within the portfolio is methodological. The project treats attention as a numerical and geometric object: the choice of metric changes what similarity means, while the streaming formulation asks how causal computation can be performed without materializing a full sequence-by-sequence score structure. This makes it a compact laboratory for studying the assumptions that standard attention often leaves implicit.

## 3. [`CDI`](https://github.com/nexuss0781/CDI)

**CDI** presents a bounded, evidence-gated causal language engine built around the `cdi.v3` specification. It connects EthioBBPE tokenization with sparse cohomodynamic recurrent state-space modeling, graph-Laplacian correction, and a chain of decisions inherited from the broader CCT research line.

The project’s strongest characteristic is its refusal to confuse architectural ambition with empirical proof. Its `REDESIGN_BEFORE_SCALE` posture, separation of legacy paths from admissible evidence, and insistence on explicit gates make CDI valuable as a research governance artifact as much as a modeling experiment. It asks not only whether a model can be made larger, but whether its claims are bounded, testable, and reproducible before scale is introduced.

## 4. [`CCT`](https://github.com/nexuss0781/CCT)

**CCT — Chrono-Causal Tapestry** is one of the portfolio’s most fully articulated research systems. It describes an adaptive spectral engine in native C++ across a sequence of evidence-gated stages, including data governance, tokenizer and training controls, retrieval, serving, rollback, observability, and pilot-release discipline.

The project is distinctive because it treats a model as a socio-technical system rather than as a single forward pass. Mathematical components are accompanied by operational boundaries, reproducibility gates, and explicit non-claims about general intelligence. This creates a useful bridge between speculative architecture and professional research engineering: every proposed capability is placed inside a lifecycle that can be inspected, validated, limited, or rejected.

## 5. [`Intellectual-Cortex-Architecture`](https://github.com/nexuss0781/Intellectual-Cortex-Architecture)

This project proposes a biologically inspired cognitive architecture built on a **Universal Intellectual Neuron** and a RAM-budget meta-cognitive controller. It defines six neuron classes—core integrator, attractor sustainer, precision modulator, prediction unit, binding gate, and executive controller—and six typed synaptic pathways for feedforward, recurrent, top-down, inhibitory, precision, and binding behavior.

The architecture is designed around strict resource accounting. A fixed memory budget determines how many neurons and synapses can be supported; utilization thresholds trigger growth, rebalancing, or shrinkage. Alongside leaky integrate-and-fire dynamics, STDP, metabolic gating, thalamic filtering, cortical lateral inhibition, and dual cortex/hippocampus learning, the project makes a serious attempt to connect cognitive vocabulary with executable data structures and measurable system limits.

## 6. [`QKV-Projection`](https://github.com/nexuss0781/QKV-Projection)

**SQFP — Sub-Quadratic Factorized Projection** rethinks the dense Q, K, V, and output projections that precede and follow attention. Each matrix is represented as a diagonal term, a low-rank interaction, and a structured butterfly residual:

```text
W = D + U·Vᵀ + ε·B
```

This design targets CPU-native inference by replacing dense quadratic memory access with diagonal operations, low-rank matrix-vector products, and FFT-like butterfly multiplication. The repository also includes GQA expansion, adaptive precision paths, RoPE pre-structure, KV-cache interfaces, a unified input bridge, dense reconstruction for validation, and a 49-test end-to-end pipeline.

The research value is in preserving downstream contracts while changing the internal representation. The consumer still receives Q, K, and V with expected shapes, but the projection layer is treated as a structured approximation problem whose spectral decay, cache behavior, and precision path can be independently studied.

## 7. [`Multi-Head-Attention`](https://github.com/nexuss0781/Multi-Head-Attention)

**TMHA-CRUS** proposes a replacement for independent standard attention heads. It combines CP-factorized shared latent projections, per-cluster reconstruction, cross-head recurrent state, uncertainty-adaptive top-k routing, low-rank output fusion, grouped-query constraints, and the SGRK-UQAD attention primitive.

The conceptual contribution is architectural communication. Standard heads are usually concatenated only after operating independently; TMHA-CRUS allows active clusters to refine later queries through a recurrent state. At the same time, routing makes compute conditional on token uncertainty rather than uniformly activating every head. The README develops this proposal through definitions, propositions, forward algorithms, parameter comparisons, theoretical guarantees, and a 36-test C++17 suite.

## 8. [`Nexuss_Embedding`](https://github.com/nexuss0781/Nexuss_Embedding)

**HFAQE — Hierarchical Frequency-Adaptive Quantized Embedding** treats embedding capacity as an allocation problem. High-frequency or high-gradient tokens receive an exact, block-wise int8 representation in a hot tier; the long tail is represented through low-rank coefficients over a shared basis. Tier membership can migrate as observed frequency and gradient pressure change.

The system includes a master latent matrix, straight-through training, orthogonal basis maintenance, a composite loss, a quantized LM head, a memory-mappable `.nex` checkpoint format, and C++/Python interfaces. The repository’s technical argument is built from rate-distortion reasoning, Zipfian frequency structure, Eckart–Young–Mirsky approximation, cache-aware layout, and SIMD dequantization.

Its most compelling quality is that it makes efficiency explicit at several levels simultaneously: memory footprint, LM-head multiply-accumulates, cache residency, dynamic vocabulary expansion, checkpoint structure, and geometry evaluation. The reported benchmark narrative should be read as the project’s stated research result, while the implementation itself provides the experimental surface for verifying those claims.

## 9. [`alien-intelligence`](https://github.com/nexuss0781/alien-intelligence)

**AI² — Alien Intelligence** is a research artifact exploring a language-modeling architecture beyond full attention. Its six-part pipeline combines sparse learned indexing, streaming positional state, latent subspace compression, random-feature attention, spectral-topological reasoning, uncertainty quantification, adaptive task-aware attention, and sparse expert output generation.

The project is particularly valuable because the README records a negative result with unusual clarity. The implementation trained only the output projection while leaving much of the upstream pipeline fixed and random. It produced tokens from the correct marginal vocabulary distribution but lacked sequential coherence. Rather than hiding this outcome, the project turns it into a research agenda: learn upstream state parameters, improve graph construction, train sparse experts, and study whether fixed random hierarchies can ever preserve task-relevant conditional structure.

With 277 assertions across eight test executables, CUDA support, and explicit open problems, AI² functions as both an architecture proposal and a case study in how empirical failure can sharpen a design.

## 10. [`Scaled-Dot-Product-Attention`](https://github.com/nexuss0781/Scaled-Dot-Product-Attention)

**SGRK-UQAD — Spectrally-Gated Recurrent Kernel Attention** addresses the quadratic score matrix through a deterministic finite-rank feature map, online causal accumulation, a bounded local exact buffer, a spectral gate, and an optional recurrent adaptive-depth extension called RSA-UQ-ACD.

The global branch uses positive feature representations and running numerator/denominator aggregates; the local branch retains exact attention over a fixed window; the gate decides how much each branch contributes. The recurrent extension adds halting probabilities, trajectory-based epistemic uncertainty, and differentiable ponder cost. This provides a principled answer to a difficult systems question: how can approximation be used for scale without making approximation the only available behavior?

The repository’s theoretical language is unusually complete, covering convexity, exact causality, denominator positivity, constant auxiliary memory, adaptive depth, uncertainty floors, and downstream contracts. It is best understood as a research kernel intended to be composed with the factorized projection and input-layer components.

## 11. [`Positional-Encoding`](https://github.com/nexuss0781/Positional-Encoding)

**HDPE — Hierarchical Digit Positional Encoding** exploits the group structure of RoPE. Instead of storing a flat trigonometric row for every possible position, it decomposes positions into base-64 digits and stores compact level tables whose rotations are composed on demand.

The result is a cache-oblivious positional layer with random-access and sequential modes, mixed-precision tables, a Chebyshev fallback, a unified input gateway with HFAQE, AVX-512 kernels, and a 28-test validation suite. The design is attractive because it changes representation without changing semantics: rotation composition preserves RoPE equivalence, norm preservation, periodicity, and exact causal integration while bringing the working set into cache.

## 12. [`Nexuss-Neural-Cognition`](https://github.com/nexuss0781/Nexuss-Neural-Cognition)

This biologically plausible spiking neural network simulator operationalizes the cognitive line through leaky integrate-and-fire dynamics, conductance-based synapses, STDP, metabolic constraints, sensory spike encoding, thalamic novelty gating, cortical lateral inhibition, hippocampal attractor behavior, and neuromodulatory signals.

Its unusual systems contribution is the RAM-budget meta-cognitive controller. Rather than fixing a network size in advance, the controller monitors utilization and chooses among growth, neuron preference, synapse preference, balance, and inactive-resource shrinkage. The README reports benchmark series from 50 MB to 500 MB budgets, with real-time factors and resource efficiency used as first-class metrics. The repository therefore treats cognition not only as a question of representation, but also as a question of resource stewardship.

## 13. [`Addis-Neuron-Genesis`](https://github.com/nexuss0781/Addis-Neuron-Genesis)

**Addis-Neuron-Genesis** frames a biologically inspired AGI architecture as a “Genesis Trinity” of Logos, Psyche, and Soma. The README describes symbolic 5D representations, streaming neurogenesis, subconscious wave-like dynamics, global-workspace consciousness selection, volition, dopamine, and an embodied progression from foundational substrate to higher cognition.

Within the portfolio, it represents the conceptual and philosophical branch of the cognition program: the attempt to describe intelligence as an interaction among symbolic structure, subjective selection, and embodied regulation rather than as a single prediction objective.

## 14. [`Addis-Neural-Cognition`](https://github.com/nexuss0781/Addis-Neural-Cognition)

This repository is retained as a distinct entry in the research lineage. Its public README is intentionally concise, so the strongest defensible interpretation is that it represents an early or reserved branch of the Addis cognitive program rather than a fully documented standalone system.

That restraint is part of the portfolio record. A research catalogue should preserve unfinished and lightly documented directions without inventing capabilities that the source material does not establish.

## 15. [`Addis-Neural-Genesis`](https://github.com/nexuss0781/Addis-Neural-Genesis)

This repository is the private counterpart in the Addis neural-genesis family. Its README provides minimal public detail, and it is therefore presented as a reserved research branch rather than expanded into unsupported claims.

Together with `Addis-Neuron-Genesis` and `Addis-Neural-Cognition`, it documents the evolution of a long-horizon cognitive research theme across public and private stages.

---

# II. LLM Training, Transformers & Tokenization

## 16. [`small-transformer`](https://github.com/nexuss0781/small-transformer)

A deliberately compact deployment study centered on **SmolLM2-135M-Instruct**. The application packages a locally built Q6_K GGUF model and llama.cpp inside a CPU-only Docker image, removing Python and PyTorch from the runtime image. Its terminal-style interface exposes readiness, resident memory, peak inference RAM, and system-memory use—an excellent example of making resource behavior visible rather than implicit.

## 17. [`Text-tokenizer`](https://github.com/nexuss0781/Text-tokenizer)

A CPU-first C++ BPE tokenizer that replaces heap-based merge scheduling with a deterministic FST, hash-map vocabulary lookup with a LOUDS trie, and string-heavy decoding with CHD minimal perfect hashing plus a concatenated buffer. It also defines merge-independent boundaries for safe parallel encoding, byte-level fallback, streaming operation, arena allocation, SIMD validation, and entropy-weighted BPE training.

The project’s identity is not merely “a tokenizer,” but a study in how data structures, cache locality, determinism, and mathematical guarantees can change the operating envelope of language infrastructure.

## 18. [`Input-Trio`](https://github.com/nexuss0781/Input-Trio)

A systems-oriented tokenizer and input substrate focused on entropy-weighted BPE, deterministic finite-state encoding, succinct vocabulary lookup, and parallel-safe chunking. Its role in the wider portfolio is architectural: it supplies a low-level language-input foundation that can feed later embedding, positional, projection, and attention components.

## 19. [`Ethio_BBPE`](https://github.com/nexuss0781/Ethio_BBPE)

A byte-pair encoding tokenizer designed for Amharic, Ge'ez, and biblical text. It treats Ethiopian script support as a first-class language-engineering problem, including script-aware vocabulary construction, compressed storage, batch interfaces, Hugging Face distribution, and reconstruction fidelity for culturally specific punctuation and orthography.

## 20. [`HOLY-AI`](https://github.com/nexuss0781/HOLY-AI)

A practical GPT-2 training utility centered on data loading, Parquet ingestion, mixed precision, checkpointing, and straightforward training commands. It represents the operational side of language research: a compact environment for moving from data preparation to an executable training run without hiding the mechanics behind a large platform.

## 21. [`Nexuss-Transformer`](https://github.com/nexuss0781/Nexuss-Transformer)

**NTF** is a modular decoder-only transformer framework that spans blank-slate pre-training, full fine-tuning, LoRA/PEFT, reward modeling, PPO/DPO alignment, continual learning, distributed execution, checkpoint recovery, and model versioning. It integrates EthioBBPE for Ethiopian-language support and offers architectural presets from nano through xl.

The framework is persuasive as a lifecycle design. It does not stop at model definition; it addresses data registration, training stages, catastrophic-forgetting controls, evaluation, export, registry management, and deployment.

## 22. [`Nexuss-AI`](https://github.com/nexuss0781/Nexuss-AI)

An enterprise-style LLM lifecycle framework for training from scratch, supervised fine-tuning, alignment, continual learning, and production export. Its major themes are parameter-efficient adaptation, multi-format datasets, checkpoint and version management, replay-based knowledge retention, progressive freezing, observability, and conversion to ONNX, GGUF, and vLLM-oriented formats.

Where NTF emphasizes a custom transformer stack, Nexuss-AI emphasizes the broader training and release workflow around models.

---

# III. Agent Systems & AI Development Environments

## 23. [`browser-kit`](https://github.com/nexuss0781/browser-kit)

A server-side browser execution and evidence layer for AI agents. Browser Kit combines isolated remote Chromium sessions, a TypeScript SDK, JSON-schema agent tools, REST and WebSocket APIs, live browser views, artifact capture, React integration, origin and network policies, session limits, canonical error codes, and explicit confirmation boundaries for consequential actions.

Its central design principle is operational separation: the browser executes and reports; the agent remains responsible for source selection, reasoning, extraction, citation, policy, and user confirmation. The project therefore treats browsing as a controlled capability with evidence and failure recovery rather than as an opaque automation shortcut.

## 24. [`Ardi-Agents`](https://github.com/nexuss0781/Ardi-Agents)

A multi-agent orchestration platform with specialist agents, dynamic workflow synthesis, session isolation, resilience controls, and cross-functional execution. It is positioned less as a chat interface and more as an organizational model for coordinating specialized autonomous roles around complex tasks.

## 25. [`Nexuss-Studio`](https://github.com/nexuss0781/Nexuss-Studio)

A dual-window AI development environment that combines chat with a study workspace and a coding workspace. Study mode provides PDF reading, extraction, and AI analysis; coding mode provides file and folder CRUD, diffs, syntax-aware editing, and project management. Multi-model support, persistent histories, automatic backups, and three-level caching make it an integrated workbench rather than a single-purpose assistant.

## 26. [`Ardi_agent`](https://github.com/nexuss0781/Ardi_agent)

A focused autonomous development workflow built around phased planning, implementation, session history, and Gemini-powered assistance. It is intentionally narrower than `Ardi-Agents`, functioning as a compact experiment in how an agent can move from task interpretation to structured software work.

---

# IV. Computer Vision, OCR & Audio Processing

## 27. [`Image-text`](https://github.com/nexuss0781/Image-text)

A hybrid image-analysis engine with a Python-facing interface, C++ backend, pybind11 bindings, and an atomic-context processing pipeline. The project seeks to make image-to-text and image-to-mathematical transformation efficient enough for experimentation while retaining modularity and benchmark visibility.

## 28. [`Dot-NXV`](https://github.com/nexuss0781/Dot-NXV)

A from-scratch OCR engine that deliberately avoids OpenCV, PyTorch, and TensorFlow. It combines classical image processing for straightforward regions with a compact neural residual recognizer using depthwise-separable convolution, BiGRU, and CTC. Its design demonstrates how a small specialized recognizer can complement deterministic preprocessing rather than replace it.

## 29. [`NASS`](https://github.com/nexuss0781/NASS)

**Nexuss Audio Substrate System** turns audio into structured mathematical representation through STFT and returns it through iSTFT. Its engineering focus includes COLA-compliant reconstruction, Float16 waveform handling, Complex64 tensors, shared-memory multiprocessing, chunked processing, lookahead padding, FFmpeg interoperability, and mathematical identity verification.

The project positions audio not merely as a media file but as a substrate suitable for downstream AI experimentation.

## 30. [`AGI-Substrates`](https://github.com/nexuss0781/AGI-Substrates)

An image-to-mathematics-to-image substrate centered on decomposing visual input into RGB, luminance-energy, and gradient-flow layers. Its synthesis modes—reconstruction, flow visualization, energy amplification, and inverse-style transformations—make it a compact laboratory for asking how perceptual structure can be represented without committing immediately to a large end-to-end model.

---

# V. Developer Tools, Programming Languages & Reverse Engineering

## 31. [`Web-kit`](https://github.com/nexuss0781/Web-kit)

A Rust/Axum search and page-fetching service for Nexus agents. It offers provider abstraction, SearXNG integration, fan-out and fallback modes, canonical URL deduplication, fused ranking, bounded streaming downloads, normalized HTML-to-Markdown extraction, bearer authentication, Docker deployment, and DNS-aware SSRF protection.

Its strongest professional quality is safety-by-default. Redirects are validated manually, private and reserved destinations are blocked after DNS resolution, body sizes and redirect counts are bounded, and browser rendering is kept outside the base image. Web-Kit treats retrieval as a security-sensitive infrastructure problem rather than a convenience wrapper around HTTP.

## 32. [`Nexuss-IDE`](https://github.com/nexuss0781/Nexuss-IDE)

A self-hosted, mobile-first browser IDE built with Monaco, Flask, SQLite, autosave, folder upload, authentication, and a Flask Blueprint plugin architecture. The project’s distinctive promise is extensibility: the IDE can become a personal cloud workspace for Markdown preview, database inspection, API testing, project dashboards, and other server-side tools.

## 33. [`NexussREV`](https://github.com/nexuss0781/NexussREV)

A C++ reverse-engineering and binary-decompilation framework using Capstone and LIEF. It aims to recover functions, control flow, symbols, and data types from diverse binaries while exposing loss metrics for code, symbol, and data fidelity.

The project is notable for framing decompilation as a measurable reconstruction problem. Its stated goal of zero-loss recovery is ambitious, but the inclusion of explicit metrics creates a basis for evaluating how close a reconstruction actually comes to the original artifact.

## 34. [`GOOGOLPLEX`](https://github.com/nexuss0781/GOOGOLPLEX)

A concise conceptual repository described as a revolutionary object system. Its documentation is intentionally minimal, so it is preserved here as a conceptual systems direction rather than expanded into claims unsupported by the available README.

---

# VI. DevOps, Remote Execution & Monitoring

## 35. [`Terminal-kit`](https://github.com/nexuss0781/Terminal-kit)

The backend control plane for agentic terminal environments. It registers remote instances, enrolls agents, routes commands, accepts interactive stdin, streams output, records history, and balances work across online instances. Its separation between controller API and generated remote-instance protocol gives distributed terminal operations a clear control boundary.

## 36. [`terminalkit-docker`](https://github.com/nexuss0781/terminalkit-docker)

The self-enrolling Docker-side agent for Terminal-Kit. It identifies an instance, reports availability and resource status, receives terminal work, streams execution output, and supports interactive input. The repository intentionally contains only the client agent; orchestration and control remain in `Terminal-kit`.

## 37. [`Nexuss-Monitor`](https://github.com/nexuss0781/Nexuss-Monitor)

A command-line uptime monitor designed for both human operators and AI agents. It supports login, monitor creation, JSON-first non-interactive operation, status and history inspection, updates, removal, and scheduled checks against Nexuss-Cronjob.

Its importance lies in the interface contract: operational monitoring is made scriptable, composable, and legible to autonomous systems.

## 38. [`Nexuss-Cronjob`](https://github.com/nexuss0781/Nexuss-Cronjob)

A React, TypeScript, and Vercel-based uptime monitoring platform for APIs, websites, and services. It tracks HTTP status, response time, uptime percentage, check history, configurable intervals, custom headers and bodies, JWT-authenticated users, and dashboard-level health summaries.

Together with `Nexuss-Monitor`, it forms a complete monitoring pair: a hosted control surface and a CLI designed for automation.

## 39. [`Nexuss-Bash`](https://github.com/nexuss0781/Nexuss-Bash)

A containerized remote execution and development sandbox service exposed through a CLI, web dashboard, and REST API. It supports sequential command chains, interactive PTY sessions, YAML DAG pipelines, multi-language jobs, runtime package management, resource monitoring, rate limits, process isolation, encrypted persistence, and optional Paradox-DB synchronization.

This is infrastructure designed around the realities of agent execution: commands need lifecycle state, files need controlled movement, sessions need limits, and results need durable auditability.

---

# VII. Systems, Platforms, Networking & Data

## 40. [`FTP-Client`](https://github.com/nexuss0781/FTP-Client)

A C++ FTPS client library with Python bindings and a deliberately honest M0 baseline. The README separates the frozen C ABI and current development scope from planned resilience, observability, and production transfer features. That distinction makes it a useful example of status-aware systems documentation.

## 41. [`YOB-OS`](https://github.com/nexuss0781/YOB-OS)

A cloud-synchronized personal operating-system experience built around a wallpaper-based launcher, a versioned Play Store for standalone HTML applications, publisher lifecycle controls, a web client, and an Expo Android client. The design treats uploaded HTML as untrusted code and isolates it through restrictive iframe and WebView boundaries.

YOB-OS is particularly distinctive in its combination of product experience and security model: immutable app versions, deliberate updates, first-party sessions, object storage, cloud-synchronized preferences, and explicit restrictions on navigation, device bridges, storage, and credentials.

## 42. [`NexussOS`](https://github.com/nexuss0781/NexussOS)

A bare-metal bootloader and minimal kernel project written in C. It initializes a framebuffer, generates a bootable ISO through GRUB, and follows a kexec-like philosophy in which the initial operating environment can prepare to hand control to another kernel.

It represents the lowest layer of the portfolio’s systems interest: before application software, there is boot, memory, display, and control transfer.

## 43. [`Paradox-DB`](https://github.com/nexuss0781/Paradox-DB)

A local-first encrypted SQLite database with background cloud synchronization, version history, backups, project management, a Python SDK, and a 33-command CLI. Its architecture keeps ordinary queries local while using a gateway and Telegram-backed snapshots for synchronization and durability.

The system emphasizes user-held encryption keys, API-key authentication, conflict recovery, Redis locking, rollback, deployment examples, and explicit behavior for local-only and cloud-synced modes. Paradox-DB is therefore both a database package and a study in how persistence can be made portable across laptops, containers, serverless functions, and personal infrastructure.

---

# VIII. Web Applications, Education, Productivity & Media

## 44. [`Digital-Edu`](https://github.com/nexuss0781/Digital-Edu)

A competency-based learning platform whose distinctive premise is that the filesystem is the curriculum. Markdown and YAML define lessons, assessments, workshops, practical validations, badges, certificates, and progression rules. The project includes locking mechanics, contribution tracking, structured content types, and a reported end-to-end test matrix of 745 passing tests.

Digital-Edu treats education as a content-and-evidence system rather than merely a collection of pages. A learner’s progression is represented through authored artifacts, assessment outcomes, practical demonstrations, and visible competency history.

## 45. [`ACCX`](https://github.com/nexuss0781/ACCX)

A polished credential-vault application built with React, TypeScript, Tailwind CSS, Zustand, and Recharts. It organizes accounts through folders and categories, supports custom key-value fields, and presents favorites, activity, and chart-based summaries through a carefully structured dashboard.

## 46. [`Calisthenics`](https://github.com/nexuss0781/Calisthenics)

A front-end fitness dashboard prototype with a dark visual system and planned modules for calendar, health, goals, tournament, motivation, and video. It is best read as an interaction and product-design exploration: a broad information architecture prepared for future data and service integration.

## 47. [`Nexuss-Education`](https://github.com/nexuss0781/Nexuss-Education)

An AI study assistant for PDF-based learning. It combines PDF.js rendering, context-aware chat, subject categories, model capability detection, vision-model routing, OpenRouter key rotation, retry and backoff logic, quota monitoring, caching, input validation, and storage isolation.

Its distinguishing contribution is operational resilience around multimodal AI. The application does not assume that one provider, one key, or one model will always be available; it treats failure recovery and capability-aware routing as part of the educational experience.

## 48. [`Nexuss-Chat`](https://github.com/nexuss0781/Nexuss-Chat)

A PHP and MySQL real-time chat application developed through a waterfall-style lifecycle: requirements, design, implementation, testing, deployment, and maintenance. It includes authentication, presence, one-to-one and group messaging, read receipts, attachments, reactions, moderation, encryption-oriented controls, and InfinityFree deployment guidance.

## 49. [`Nexuss-Notes`](https://github.com/nexuss0781/Nexuss-Notes)

A note-taking application with rich text, folders, tags, full-text search, pinning, autosave, offline/PWA behavior, Markdown and PDF export, and SQLite WAL persistence. Its cultural and geographic distinctiveness comes from dual calendar and timezone support, including the Ethiopian calendar and East African time presentation.

## 50. [`Nexuss-Playground`](https://github.com/nexuss0781/Nexuss-Playground)

A zero-backend AI chat and tools application powered by Puter. It supports switching among major model families, privacy-oriented web search, IndexedDB chat persistence, syntax highlighting, Markdown, LaTeX, drag-and-drop code attachments, responsive glassmorphism, and a minimal PHP proxy.

The project explores a local-first interface philosophy: maintain a sophisticated user experience while keeping server-side state and credential responsibility deliberately small.

## 51. [`NPMS-platform`](https://github.com/nexuss0781/NPMS-platform)

A comprehensive school operating platform connecting students, teachers, parents, administrators, and institutional workflows. Its feature set includes nine role profiles, marks and attendance, schedules, library assets, multi-tier request approval, task assignment, inventory, real-time chat, channels, notifications, and a democratic Talent Club ecosystem with elected leadership and moderation.

## 52. [`Nexus-School-Management`](https://github.com/nexuss0781/Nexus-School-Management)

An earlier school-management application in the same institutional-software lineage. It shares the mature Nexus system’s vision of combining academic management, administrative workflows, inventory, communication, notifications, and extracurricular governance, while its metadata identifies it as an early web application and a fork.

Its place in this portfolio is historical as well as functional: it records the movement from an initial web application toward a broader, role-aware institutional platform.

## 53. [`Nexuss-Media`](https://github.com/nexuss0781/Nexuss-Media)

A media asset package containing 2,251 emoji images derived from Unicode 13.1 sequences and supplemental composites, rendered through Apple Color Emoji. The accompanying generator workflow addresses browser rendering, previewing, bulk download, manual unsupported-glyph review, and compression.

# IX. Bots, Messaging & Notifications

## 54. [`PDF-BOT`](https://github.com/nexuss0781/PDF-BOT)

A Telegram PDF classifier with a Vercel webhook layer, an optional isolated Render worker, Telegram-side `copyMessage` forwarding, Paradox-DB persistence, and hierarchical inspection. Small files are sampled with PDF.js; larger files use range-based inspection; ambiguous, encrypted, malformed, or very large files are returned as **Needs inspection** rather than forcing an unsafe full download.

This project is a strong example of bounded automation. It combines practical bot behavior with explicit bandwidth, security, and uncertainty controls, preserving operational honesty when the system cannot safely determine a document’s state.

## 55. [`Open-hand-Bot`](https://github.com/nexuss0781/Open-hand-Bot)

A compact Python and Flask Telegram notification service for reporting the completion of OpenHands tasks. It is deployed as a Vercel webhook and accepts a message plus an optional chat identifier, demonstrating how a small integration can turn asynchronous agent work into an immediate human notification.

---

# X. Identity, Security & Secret Management

## 56. [`nexuss-auth`](https://github.com/nexuss0781/nexuss-auth)

A reusable centralized Google and GitHub authentication service with a TypeScript SDK, project registration, PostgreSQL or Paradox-backed persistence, exact redirect allowlists, server-side provider secrets, HTTP-only sessions, one-time OAuth state, and a secure cross-site handoff flow.

The project’s strongest design decision is the separation between identity authority and application integration. Client applications initiate redirects and read user state; OAuth secrets, state hashes, sessions, administrative tokens, and provider callbacks remain under server control. The security model is explicit about HTTPS, cleanup, rate limiting, structured logging, secret injection, and fail-closed behavior when a remote database snapshot cannot be loaded.

## 57. [`Secret-Management`](https://github.com/nexuss0781/Secret-Management)

A private secret-management service represented publicly by a concise deployment reference to `secret-management.onrender.com`. It is preserved as a distinct entry because credential handling is a separate concern in the portfolio, even when its implementation details are not publicly documented.

---

# XI. Finance, Marketing & Business Applications

## 58. [`ZeinthFinance`](https://github.com/nexuss0781/ZeinthFinance)

A personal finance dashboard built with React, Flask, PostgreSQL, SQLAlchemy, JWT authentication, Material UI, Recharts, Axios, and React Router. It provides transaction management, custom categories, income and expense reporting, monthly comparisons, and visual summaries of financial health.

## 59. [`C9-Marketing`](https://github.com/nexuss0781/C9-Marketing)

A full-stack e-commerce platform combining React and TypeScript with a Flask backend, SQLite, Tailwind, JWT authentication, seller-linked listings, multiple product images, and consumer marketplace workflows. It represents the portfolio’s applied-business layer: the translation of identity, catalog, transaction, and presentation concerns into a coherent product surface.

## 60. [`Trusted-Pay`](https://github.com/nexuss0781/Trusted-Pay)

A secure wallet and account-management platform integrating Telebirr receipt verification with a Telegram bot, administrative dashboard, deposits, withdrawals, disputes, protected group deals, and audit trails. Its four-layer verification model combines HTML-structure regex checks, DOM fingerprint comparison, numeric field extraction, and transaction-status enforcement before administrative approval.

Trusted-Pay is notable for treating financial workflow as a state machine. Deal buttons are party-checked, state-guarded, chat-bound, and audited; staff roles and limits are explicit; and snapshots, fee configuration, moderation, and dispute resolution are part of the operational design rather than afterthoughts.

---

# Closing Perspective

Taken together, these sixty repositories describe a personal laboratory for **efficient intelligence and sovereign systems**. The research projects ask how cognition, attention, embeddings, positional structure, uncertainty, and sequence processing might be redesigned for constrained hardware. The infrastructure projects ask how agents can browse, execute, persist, authenticate, synchronize, and recover without surrendering control. The application projects ask whether those capabilities can become useful in education, communication, finance, productivity, and institutional life.

The portfolio is intentionally honest about maturity. Some projects offer formal architectures, benchmarks, and validation suites. Some are prototypes. Some preserve a concise or private research direction. The distinction matters: credible engineering is not the elimination of unfinished work; it is the disciplined presentation of what exists, what is claimed, what is measured, and what remains to be investigated.

> **The long-term objective is not to build one impressive repository. It is to develop a coherent, inspectable stack in which representation, reasoning, execution, persistence, and human use can reinforce one another.**

For the complete category source, see [`CATAGORY.md`](CATAGORY.md). For the project-by-project research corpus used to prepare this document, see the [`READMES/`](READMES/) directory.

---

## Selected Entry Points

| Purpose | Start here |
|---|---|
| Cognitive architecture | [`Walia`](https://github.com/nexuss0781/Walia), [`Nexuss-Neural-Cognition`](https://github.com/nexuss0781/Nexuss-Neural-Cognition), [`CCT`](https://github.com/nexuss0781/CCT) |
| Efficient transformer research | [`Nexuss_Embedding`](https://github.com/nexuss0781/Nexuss_Embedding), [`QKV-Projection`](https://github.com/nexuss0781/QKV-Projection), [`Scaled-Dot-Product-Attention`](https://github.com/nexuss0781/Scaled-Dot-Product-Attention), [`Positional-Encoding`](https://github.com/nexuss0781/Positional-Encoding) |
| Language infrastructure | [`Text-tokenizer`](https://github.com/nexuss0781/Text-tokenizer), [`Ethio_BBPE`](https://github.com/nexuss0781/Ethio_BBPE), [`Nexuss-Transformer`](https://github.com/nexuss0781/Nexuss-Transformer) |
| Agent infrastructure | [`browser-kit`](https://github.com/nexuss0781/browser-kit), [`Web-kit`](https://github.com/nexuss0781/Web-kit), [`Terminal-kit`](https://github.com/nexuss0781/Terminal-kit), [`Paradox-DB`](https://github.com/nexuss0781/Paradox-DB) |
| Human-facing applications | [`Digital-Edu`](https://github.com/nexuss0781/Digital-Edu), [`Nexuss-Education`](https://github.com/nexuss0781/Nexuss-Education), [`NPMS-platform`](https://github.com/nexuss0781/NPMS-platform), [`Trusted-Pay`](https://github.com/nexuss0781/Trusted-Pay) |

*Personal research portfolio of Nexuss0781 — built through persistent experimentation, systems thinking, and a commitment to making ambitious ideas executable.*

## References & Source Corpus

[1] [`CATAGORY.md`](CATAGORY.md) — authoritative taxonomy of the 60 selected repositories.

[2] [`READMES/`](READMES/) — complete project README corpus reviewed for this synthesis.

[3] [Nexuss0781 on GitHub](https://github.com/nexuss0781) — repository-level source links and ongoing project history.

---

*Prepared as a personal research index for Nexuss0781. Project claims remain attributable to the documentation of their respective repositories and should be experimentally verified before being treated as production guarantees.*
