# GitHub Copilot Code Review Instructions

Review this Next.js 15 static portfolio site for regressions before merge.

## Priorities

1. Static export and GitHub Pages compatibility: no API routes, server actions, middleware, or image optimization requirements.
2. SEO integrity: canonical URLs, sitemap, robots, Open Graph/Twitter metadata, and `/kejian-tong` Person JSON-LD must stay consistent with `src/config/site.ts`.
3. Routing integrity: project URLs under `/projects/[slug]` must remain stable and covered by Playwright tests.
4. Type and data boundaries: portfolio content should stay in `src/content/`, shared types in `src/domain/`, and URL/config helpers in `src/config/`.
5. Accessibility and UX: semantic headings, keyboard-accessible controls, visible focus states, responsive layout, and no horizontal overflow.
6. Security: no secrets in client code; external links should use `rel="noopener noreferrer"`.

## Required Checks

- `npm run type-check`
- `npm run lint`
- `npm run build`
- `npm run test:e2e` for route, metadata, page composition, navigation, or interaction changes

Lead with blocking issues, then important improvements, then optional suggestions.
