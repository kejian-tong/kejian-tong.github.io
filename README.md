# Kejian Tong — Personal Site

This is my personal site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. It’s exported as a fully static site and deployed automatically to GitHub Pages.

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
npm install
npm run dev
# open http://localhost:3000
```

## Build and static export

This repo is configured for static export (GitHub Pages):

```bash
npm run build      # next build
npx next export    # outputs static site into ./out
```

## Deployment (GitHub Pages)

- A GitHub Actions workflow lives at `.github/workflows/deploy.yml`.
- On every push to `main`, it will build and export the site, then publish to GitHub Pages.
- In the repo’s GitHub Settings → Pages, set “Build and deployment” → Source: GitHub Actions.

After the workflow completes, the site is live at: <https://kejian-tong.github.io/>

## Customizing content

Edit the data files under `src/utils/data/`:

- `personal-data.ts` — name, email, location, summary, social links, technical focus
- `contacts-data.ts` — contact/social links
- `projects-data.ts` — project cards (title, summary, tags, slug, image). The card links to `/projects/[slug]`.
- `educations.ts` — education timeline

## Notes

- Experience (employers/professional roles) has been removed by design. Only personal summary, projects, and education are shown.
- Images are served unoptimized to support static export (`images.unoptimized = true`).
- The contact section uses a `mailto:` link (no EmailJS or server code required).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build (static export compatible)
- `npm run start` — serve built app (not needed for GitHub Pages)

## License

MIT
