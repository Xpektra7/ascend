# Ascend 2026

A landing page for Ascend 2026 — a fictional design & technology conference in Lagos, Nigeria. Built with [TanStack Start](https://tanstack.com/start) + [Tailwind CSS v4](https://tailwindcss.com).

## Stack

- **Framework:** TanStack Start (React, Router, SSR)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- **Bundler:** Vite + Nitro (Vercel serverless)
- **Linting:** Biome

## Getting started

```bash
bun install
bun --bun run dev
```

## Build

```bash
bun --bun run build
```

## Lint / format

```bash
bun --bun run lint
bun --bun run format
```

## Project structure

```
src/
├── components/     # Page sections (hero, speakers, schedule, etc.)
├── data/           # Single source of truth for all content
├── routes/         # File-based routing (TanStack Router)
│   ├── __root.tsx  # Root layout
│   ├── index.tsx   # Home page
│   ├── session.$slug.tsx  # Session detail page
│   ├── privacy.tsx
│   └── terms.tsx
├── styles.css      # Global styles & design tokens
├── vite.config.ts  # Vite + Nitro config for Vercel
└── vercel.json     # Vercel deployment config
public/images/      # WebP images (hero, speakers, sessions, themes, brand SVGs)
```

## Data

All content lives in `src/data/` as typed exports:

- `brands.ts` — Partner logos
- `days.ts` — Schedule, themes, sessions per day
- `details.ts` — Utility bar info
- `faq.ts` — FAQ accordion content
- `pricing.ts` — Tier pricing & features
- `privacy.ts` — Privacy policy & terms text
- `routes.ts` — Transit directions
- `sessions.ts` — Session lookup & prev/next navigation
- `speakers.ts` — Speaker bios & portrait paths

## Images

Images are stored as WebP in `public/images/` subdirectories. Brand logos are white SVGs from [Simple Icons](https://simpleicons.org/).

## Deploy

```bash
vercel --prod
```

The Nitro plugin in `vite.config.ts` ensures proper Vercel serverless output.
