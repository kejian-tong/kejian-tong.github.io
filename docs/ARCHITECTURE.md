# Architecture

This repository is a static portfolio site. The architecture optimizes for stable URLs, simple content updates, GitHub Pages deployment, and reliable agent-assisted maintenance.

## Layers

- `src/app/`: Next.js App Router routes, metadata routes, layout, providers, and static route generation.
- `src/components/`: reusable UI and page-section components.
- `src/content/`: typed portfolio content that can change without touching rendering logic.
- `src/config/`: canonical site configuration, URL helpers, and profile identity helpers.
- `src/domain/`: shared content interfaces and domain shapes.
- `src/styles/`: global Tailwind and theme CSS.
- `tests/e2e/`: Playwright checks for routes, metadata, sitemap, and high-level layout behavior.

## Static Export Contract

- The site uses `output: "export"` and deploys to GitHub Pages.
- Project detail pages are generated through `/projects/[slug]` with `generateStaticParams`, preserving the existing public URLs.
- `robots.ts` and `sitemap.ts` are explicitly static.
- Images remain unoptimized in Next config because GitHub Pages has no Next image optimizer runtime.

## Content Model

`src/content/projects.ts` is the single source for project cards and case studies. Adding a project requires:

1. Add the project data and `caseStudy` object.
2. Confirm `/projects/[slug]` renders.
3. Confirm sitemap includes the new URL.
4. Update Playwright route expectations when the project should be part of the smoke suite.

## Root File Policy

The repository keeps only tool entrypoints and public project entrypoints at the root. This is intentional:

- `package.json` and `package-lock.json` are npm's project and lockfile entrypoints.
- ESLint config lives in `package.json` as `eslintConfig` to avoid a separate root `.eslintrc` file while preserving the same `next/core-web-vitals` behavior.
- `next.config.js`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, and `playwright.config.ts` stay at the root because Next.js, TypeScript, Tailwind, PostCSS, Playwright, editors, and CI discover them there by default.
- `tsconfig.typecheck.json` exists so local type-checking can avoid relying on generated `.next/types`; `npm run build` still validates Next's generated type surface.
- `next-env.d.ts` is generated and maintained by Next.js; do not move or edit it manually.
- `.github/`, `.gitignore`, `.nvmrc`, `LICENSE`, `README.md`, `public/`, `src/`, `tests/`, and `docs/` follow standard GitHub, Node, and static-site conventions.
- `AGENTS.md`, `.agents/`, and `.codex/` are Codex maintenance entrypoints. They are not part of the deployed website bundle.

Avoid moving root-level tool configs into a custom `config/` folder unless a tool natively supports that layout without extra command flags. Hiding standard configs behind custom paths makes the repository look cleaner on GitHub, but it increases maintenance risk for editors, CI, and future agents.

## Codex Maintenance

- `AGENTS.md` stays short and points to detailed docs in `docs/codex/`.
- `.agents/skills/static-portfolio-maintenance/SKILL.md` stores the repeatable workflow.
- `.codex/config.toml` is intentionally minimal. It only scopes the OpenAI Docs MCP server to this trusted repository, so future Codex sessions can check official OpenAI/Codex guidance without adding personal model, sandbox, or approval settings to the repo.
- Hooks and custom subagents are intentionally not enabled until they solve a recurring, validated problem.

This matches the official Codex guidance:

- `AGENTS.md` is the automatic repository instruction file for reusable guidance: https://developers.openai.com/codex/guides/agents-md
- Repo skills belong under `.agents/skills`: https://developers.openai.com/codex/skills
- Project-scoped MCP settings can live in `.codex/config.toml` for trusted projects: https://developers.openai.com/codex/mcp
- Hooks and subagents should be added for concrete workflow value, not as decorative scaffolding: https://developers.openai.com/codex/learn/best-practices
