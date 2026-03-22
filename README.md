This is my personal site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. It is statically exported and deployed automatically to GitHub Pages.

## Tech stack

- Next.js 14 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion (subtle animations)
- next-themes (dark/light theme)

## Project structure

```text
src/
  app/
    components/
      layout/          # Navbar, Footer
      sections/        # Hero, About, Projects, Skills, Education, Blog, Contact
      ui/              # Small UI primitives (section heading, theme toggle)
    css/globals.css    # Global styles (Tailwind)
    layout.tsx         # App shell
    page.tsx           # Home page composition
    not-found.tsx      # 404 page
    projects/
      twinder/
        page.tsx       # Case study
      job-board/
        page.tsx       # Case study
  utils/
    data/              # Typed content (personal, contacts, projects, education)
    types/             # Shared interfaces
public/
  image/               # Static images served from /image/*
```

## Local development

```bash
nvm use
npm install
npm run dev
# open http://localhost:3000
```

Use Node 20 LTS. The repo's GitHub Pages workflow already builds with Node 20, and newer lint tooling emits engine warnings on Node 19.

## Build and preview the static export

This repo uses `output: "export"`, so `next build` writes the deployable site directly to `out/`.

```bash
npm run type-check
npm run lint
npm run build      # outputs the static site into ./out
npm run preview    # serves ./out locally
npm run test:e2e   # builds and runs Playwright smoke tests
```

## Deployment (GitHub Pages)

- A GitHub Actions workflow lives at `.github/workflows/deploy.yml`.
- On every push to `main`, it will build and export the site, then publish to GitHub Pages.
- In the repo’s GitHub Settings → Pages, set “Build and deployment” → Source: GitHub Actions.

After the workflow completes, the site is live at: <https://kejian-tong.github.io/>

## Customizing content

Edit the data files under `src/utils/data/`:

- `site-config.ts` — canonical site URL, shared metadata, contact identity, and primary profiles
- `personal-data.ts` — homepage summary, highlights, technical focus, and blog flag
- `contacts-data.ts` — derived contact/social values used by the UI
- `projects-data.ts` — project cards (title, summary, tags, slug, image). The card links to `/projects/[slug]`.
- `educations.ts` — education timeline

Blog posts are fetched from DEV using your `devUsername` in `personal-data.ts`. If you don’t want the blog section, remove the `BlogSection` from `src/app/page.tsx`.

## Notes

- Images are served unoptimized to support static export (`images.unoptimized = true`).
- The contact section supports EmailJS when the `NEXT_PUBLIC_EMAILJS_*` variables are provided at build time, and falls back to `mailto:` when they are not.
- `npm run start` and `npm run preview` both serve the generated `out/` folder for local verification.
- Follow [`guidance.md`](./guidance.md) for all future agentic edits.

## Scripts

- `npm run dev` — start dev server
- `npm run type-check` — run TypeScript checks without requiring a prior build
- `npm run build` — create the static export in `out/`
- `npm run preview` — serve the generated `out/` folder locally
- `npm run start` — alias for `npm run preview`
- `npm run test:e2e` — build and run Playwright smoke tests

## License

MIT
