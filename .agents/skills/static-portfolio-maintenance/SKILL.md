---
name: static-portfolio-maintenance
description: Maintain the kejian-tong.github.io static Next.js portfolio. Use for this repo's content updates, SEO metadata, structured data, GitHub Pages static export, CI workflows, Playwright checks, dependency hygiene, project state docs, AGENTS.md, MCP, or Codex guidance.
---

# Static Portfolio Maintenance

## Core Workflow

1. Read `AGENTS.md`, `docs/codex/guidance.md`, `docs/codex/PROJECT_STATE.md`, `docs/codex/PROJECT_MEMORY.md`, and `docs/codex/SKILLS_PLUGINS.md` before substantial edits.
2. Inspect the relevant route, component, data, workflow, or documentation files before changing behavior.
3. Keep portfolio content in `src/content/` when possible. Use page files only for route-specific case study copy or metadata.
4. Preserve static export and GitHub Pages compatibility.
5. Update docs in the same change when routing, deployment, validation, Codex guidance, or public configuration changes.
6. Run the smallest complete validation set for the change and report anything that could not be run.

## Static Export Rules

- Keep `next.config.js` compatible with `output: "export"`.
- Do not add API routes, server actions, middleware, runtime image optimization, or dynamic server behavior.
- Use public assets under `public/` and keep `images.unoptimized = true`.
- Treat EmailJS as optional build-time public configuration. The contact form must still work through `mailto:` without EmailJS variables.

## Content And SEO

- `src/config/site.ts` is the canonical source for URL, title, description, email, location, DEV username, and primary social links.
- Keep home metadata, `/kejian-tong` entity metadata, sitemap, robots, and JSON-LD consistent.
- Keep `/kejian-tong` as the single canonical Person JSON-LD entity page.
- When adding a project, update `src/content/projects.ts`, verify `/projects/[slug]`, update tests when needed, and confirm sitemap inclusion.

## Codex Tooling

- Use OpenAI Docs MCP for OpenAI/Codex docs lookups.
- Use Browser verification for meaningful UI changes.
- Do not add hooks, plugins, MCP servers, or custom agents unless they solve a concrete recurring problem.
- Do not spawn subagents unless the user explicitly asks for parallel/subagent work.

## Validation

Default validation for code changes:

```bash
nvm use
npm run type-check
npm run lint
npm run build
```

Run `npm run test:e2e` when changing routes, metadata, page composition, navigation, contact behavior, or other interactive UI.

After UI changes, start a local preview and verify the page in Browser at desktop and mobile widths.
