# AGENTS.md

## Repository Contract

This is Kejian Tong's personal portfolio site. It is a statically exported Next.js App Router application deployed to GitHub Pages.

Read these files before non-trivial work:

- `guidance.md` for existing engineering rules.
- `PROJECT_STATE.md` for the current project snapshot and validation status.
- `PROJECT_MEMORY.md` for durable project decisions that should survive future sessions.
- `SKILLS_PLUGINS.md` for the repo's Codex skills, MCP, plugin, hook, and subagent policy.

## Layout

- `src/app/` contains routes, metadata, layout, and UI composition.
- `src/app/components/` contains layout, section, and small UI components.
- `src/utils/data/` is the source of truth for portfolio content.
- `src/utils/data/site-config.ts` owns canonical URLs, metadata identity, contact identity, and primary profile links.
- `tests/e2e/` contains Playwright smoke tests for routes, metadata, and static export behavior.
- `.agents/skills/` contains repo-local Codex skills.
- `.codex/config.toml` contains repo-scoped Codex configuration for trusted local work.

## Commands

Use Node 20 via `nvm use` before running local commands.

```bash
npm ci
npm run type-check
npm run lint
npm run build
npm run test:e2e
```

Use `npm run test:e2e:built` only after `npm run build` has already generated `out/`.

## Constraints

- Preserve GitHub Pages compatibility and `output: "export"`.
- Do not add API routes, server actions, middleware, dynamic runtime-only features, or image optimization requirements that break static export.
- Prefer typed data updates under `src/utils/data/` over hard-coded content inside components.
- Keep metadata, canonical URLs, sitemap, robots, and structured data consistent with `siteConfig`.
- Do not commit generated output such as `.next/`, `out/`, `playwright-report/`, `test-results/`, or `*.tsbuildinfo`.
- Keep public documentation free of secrets. Only `NEXT_PUBLIC_*` build-time EmailJS values may be documented.

## Codex Workflow

- Use `$static-portfolio-maintenance` for portfolio content, SEO, metadata, CI, routing, deployment, and project-state updates.
- Use the OpenAI Docs MCP server for OpenAI/Codex docs questions.
- Use the Browser plugin for local visual/browser verification after UI changes.
- Use the GitHub plugin only for PR, issue, workflow, or remote CI work.
- Do not use Gmail, Documents, Spreadsheets, Presentations, Chrome, or Computer Use for ordinary code changes in this repo unless the task explicitly requires them.
- Do not spawn subagents unless the user explicitly asks for parallel/subagent work or asks for an independent multi-agent review.
- Hooks are intentionally not enabled for this repo right now; CI and local validation are the deterministic quality gates.

## Done Means

For code changes, finish with:

1. `npm run type-check`
2. `npm run lint`
3. `npm run build`
4. `npm run test:e2e` for routing, metadata, page composition, or interactive UI changes

For UI changes, also inspect the generated site in a browser at desktop and mobile widths before final handoff.
