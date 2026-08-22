# Nexuss Portfolio Source

This directory contains the source for the published Nexuss portfolio.

The site is a React, TypeScript, and Vite frontend. Its current design uses a black, white, and grey dossier system, with the supplied circular Nexuss mark as the primary colour signal. Portrait and project assets are referenced through managed project storage paths so the live portfolio remains self-contained in its hosted environment.

## Local development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm check
pnpm build
```

## Source map

| Path | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Portfolio content and layout |
| `client/src/index.css` | Dossier visual system and responsive rules |
| `ideas.md` | Design decisions and brand direction |
| `portfolio-copy-evidence.md` | Documentation evidence for portfolio claims |
| `todo.md` | Completed revision record |
