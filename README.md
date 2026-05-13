This is my personal site built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. It is statically exported and deployed automatically to GitHub Pages.

## Tech stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion (subtle animations)
- next-themes (dark/light theme)

## Project structure

```text
src/
  app/
    layout.tsx         # App shell
    page.tsx           # Home page composition
    not-found.tsx      # 404 page
    projects/
      [slug]/
        page.tsx       # Typed dynamic case studies
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, About, Projects, Skills, Education, Blog, Contact
    ui/                # Small UI primitives (section heading, theme toggle)
  config/              # Site-level canonical config and URL helpers
  content/             # Typed content (personal, contacts, projects, education)
  domain/              # Shared content interfaces
  styles/globals.css   # Global styles (Tailwind)
public/
  image/               # Static images served from /image/*
```

For the full architecture contract, see [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).

## Local development

```bash
nvm use
npm install
npm run test:e2e:install   # one-time browser install if you want to run Playwright locally
npm run dev
# open http://localhost:3000
```

Use Node 20.19 or newer. The repo's GitHub Pages workflow builds with Node 20, and current lint tooling expects a recent Node 20 runtime.

## Build and preview the static export

This repo uses `output: "export"`, so `next build` writes the deployable site directly to `out/`.
`npm run type-check` is intentionally source-only so it works on a clean checkout without generated `.next/types`; `npm run build` is the step that validates the full Next.js generated type surface.

```bash
npm run type-check
npm run lint
npm run build      # outputs the static site into ./out
npm run validate   # type-check + lint + build
npm run preview    # serves ./out locally
npm run test:e2e:install   # one-time local Playwright browser install
npm run test:e2e   # builds and runs Playwright smoke tests
npm run test:e2e:built # runs Playwright against an existing ./out build
```

## Deployment (GitHub Pages)

- A GitHub Actions workflow lives at `.github/workflows/deploy.yml`.
- On every push to `main`, it will build and export the site, then publish to GitHub Pages.
- In the repo’s GitHub Settings → Pages, set “Build and deployment” → Source: GitHub Actions.

After the workflow completes, the site is live at: <https://kejian-tong.github.io/>

## Customizing content

Edit content under `src/content/` and shared site config under `src/config/`:

- `src/config/site.ts` — canonical site URL, shared metadata, contact identity, and primary profiles
- `personal.ts` — homepage summary, highlights, technical focus, and blog flag
- `contacts.ts` — derived contact/social values used by the UI
- `projects.ts` — project cards and typed case-study content. Cards link to `/projects/[slug]`.
- `educations.ts` — education timeline

Blog posts are fetched from DEV using your `devUsername` in `personal.ts`. If you don’t want the blog section, set `showBlog` to `false`.

## Notes

- Images are served unoptimized to support static export (`images.unoptimized = true`).
- The contact section supports EmailJS when the `NEXT_PUBLIC_EMAILJS_*` variables are provided at build time, and falls back to `mailto:` when they are not.
- `npm run start` and `npm run preview` both serve the generated `out/` folder for local verification.
- Follow [`AGENTS.md`](./AGENTS.md) and [`docs/codex/guidance.md`](./docs/codex/guidance.md) for all future agentic edits.

## Scripts

- `npm run dev` — start dev server
- `npm run type-check` — run TypeScript checks without requiring a prior build
- `npm run build` — create the static export in `out/`
- `npm run preview` — serve the generated `out/` folder locally
- `npm run start` — alias for `npm run preview`
- `npm run test:e2e:install` — install the local Chromium binary for Playwright
- `npm run test:e2e:built` — run Playwright against an existing `out/` build
- `npm run test:e2e` — build and run Playwright smoke tests
- `npm run validate` — run TypeScript, ESLint, and production build checks

## License

MIT
