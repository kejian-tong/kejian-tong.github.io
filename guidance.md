# Agent Guidance

Follow this guidance on every task in this repository.

## Operating rules

1. Treat this as a statically exported Next.js 14 App Router site. Do not introduce features that require a Node.js runtime on the deployed site.
2. Use `src/utils/data/site-config.ts` as the single source of truth for canonical URLs, shared metadata, core identity fields, and primary social profiles.
3. Keep `src/utils/data/personal-data.ts` and `src/utils/data/contacts-data.ts` aligned with `site-config.ts`. Do not reintroduce duplicated hard-coded contact values in multiple files.
4. Preserve GitHub Pages compatibility. Do not reintroduce `next export`, `next start`, API routes, server actions that depend on runtime execution, or image optimization features that break static export.
5. Prefer updating typed data files under `src/utils/data/` over scattering content strings across components.
6. Keep metadata consistent across pages: canonical URLs should use the production domain and shared helpers.
7. Use Node 20 LTS for local work. The workflow already builds with Node 20, and some lint dependencies warn on Node 19.

## Validation checklist

Run these checks after changes unless the task makes one impossible:

```bash
npm run type-check
npm run lint
npm run build
```

Use `npm run preview` when you need to verify the generated static output locally.
Run `npm run test:e2e` when a task changes routing, metadata, page composition, or interactive UI behavior.

## Editing expectations

1. Make the smallest coherent change that fixes the root cause.
2. Do not leave generated artifacts in git. Files like `*.tsbuildinfo`, `.next/`, and `out/` must stay untracked.
3. Remove dead config and unused dependencies when they are clearly not part of the current code path.
4. If you add a new external service or build-time env var, document it in `README.md`.
5. If you change routing, metadata, or deployment behavior, update both code and documentation in the same task.
