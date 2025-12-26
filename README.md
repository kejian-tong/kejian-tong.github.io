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

## Publications

Selected recent publications and preprints are showcased on the site under the "Publications" section. Below are the latest entries included in this repository:

- Enhancing Document-Level Question Answering via Multi-Hop Retrieval-Augmented Generation with LLaMA 3 — arXiv 2025 — [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JUGvC_oAAAAJ&authuser=8&citation_for_view=JUGvC_oAAAAJ:_Qo2XoVZTnwC)
- Finstack-net: Hierarchical feature crossing and stacked ensemble learning for financial fraud detection — ACM Proc. (2025) — [ACM DL](https://dl.acm.org/doi/full/10.1145/3762249.3762318)
- An Integrated Machine Learning and Deep Learning Framework for Credit Card Approval Prediction — IEEE (2024) — [IEEE Xplore](https://ieeexplore.ieee.org/document/10795883)
- An Intelligent-Aware Transformer with Domain Adaptation and Contextual Reasoning for Question Answering — IEEE (2025) — [IEEE Xplore](https://ieeexplore.ieee.org/document/11035860)
- Tool-Augmented Hybrid Ensemble Reasoning with Distillation for Bilingual Mathematical Problem Solving — arXiv 2025 — [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JUGvC_oAAAAJ&citation_for_view=JUGvC_oAAAAJ:bEWYMUwI8FkC)
- Memory-Augmented Knowledge Fusion with Safety-Aware Decoding for Domain-Adaptive Question Answering — IEEE (2025) — [Google Scholar](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=JUGvC_oAAAAJ&citation_for_view=JUGvC_oAAAAJ:iH-uZ7U-co4C)

Blog posts are fetched from DEV using your `devUsername` in `personal-data.ts`. If you don’t want the blog section, remove the `BlogSection` from `src/app/page.tsx`.

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
