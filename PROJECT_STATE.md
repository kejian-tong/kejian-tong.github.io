# Project State

Last updated: 2026-05-13

## Current Shape

- Framework: Next.js App Router with static export.
- Deployment target: GitHub Pages.
- Package manager: npm with `package-lock.json`.
- Runtime expectation: Node 20.19 or newer via `.nvmrc`.
- Primary validation: TypeScript, ESLint, Next build, Playwright smoke tests.

## Current Codex Context

- Global `~/.codex/AGENTS.md` exists but is empty.
- This repo now has project-level `AGENTS.md`.
- This repo now has project memory in `PROJECT_MEMORY.md`.
- This repo now has project state in `PROJECT_STATE.md`.
- This repo now has repo-local skill guidance at `.agents/skills/static-portfolio-maintenance/SKILL.md`.
- This repo now has project-scoped OpenAI Docs MCP config in `.codex/config.toml`.
- No repo-local hooks are enabled.
- No repo-specific custom subagents are configured.

## Validation Contract

Run these before shipping code changes:

```bash
nvm use
npm run type-check
npm run lint
npm run build
npm run test:e2e
```

For changes that only touch Markdown guidance, `npm run type-check`, `npm run lint`, and `npm run build` are usually enough. For routing, metadata, page composition, contact form, or navigation changes, run Playwright as well.

## Latest Validation

Completed on 2026-05-13 with Node v20.20.1:

- `npm run validate`
- `npm run test:e2e:built`
- `npm audit --audit-level=moderate`
- `quick_validate.py .agents/skills/static-portfolio-maintenance`
- Desktop and mobile Playwright browser smoke checks against `http://127.0.0.1:3000`

## Known Watch Items

- Keep dependency audits clean where upstream packages provide a stable fix. If `npm audit` reports only a nested framework dependency with no stable fixed release, document it in the final handoff instead of using a risky force downgrade.
- Keep GitHub Actions workflows singular and intentional. Disabled historical Pages workflows should not accumulate.
- Keep content updates centralized in `src/utils/data/` unless a page-specific case study genuinely needs custom copy.
