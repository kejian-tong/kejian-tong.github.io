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

## Codex Maintenance

- `AGENTS.md` stays short and points to detailed docs in `docs/codex/`.
- `.agents/skills/static-portfolio-maintenance/SKILL.md` stores the repeatable workflow.
- `.codex/config.toml` scopes OpenAI Docs MCP to this trusted repository.
- Hooks and custom subagents are intentionally not enabled until they solve a recurring, validated problem.
