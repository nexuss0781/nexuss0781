# Nexuss Portfolio

This is a standalone React, TypeScript, and Vite portfolio, prepared for static deployment on Vercel. It has no platform-specific runtime, analytics injection, storage proxy, or managed asset dependency.

All visual assets are bundled in `client/public/assets/`, including the circular Nexuss mark, Thinking Engine hero, research visuals, and field evidence image.

## Run locally

```bash
pnpm install
pnpm dev
```

## Validate and build

```bash
pnpm check
pnpm build
```

## Deploy to Vercel

Import `nexuss0781/nexuss0781` in Vercel and set the **Root Directory** to `portfolio`.

| Vercel setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Install Command | `pnpm install` |
| Build Command | `pnpm build` |
| Output Directory | `dist` |

The included `vercel.json` preserves single-page navigation by rewriting routes to `index.html`.
