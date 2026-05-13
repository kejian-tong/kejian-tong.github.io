# Skills, MCP, Plugins, Hooks, and Agents

Last reviewed: 2026-05-13

## Added For This Repo

- `AGENTS.md`: project-level instructions that Codex reads automatically.
- `.agents/skills/static-portfolio-maintenance/SKILL.md`: repo-local skill for portfolio content, SEO, routing, CI, and GitHub Pages-safe maintenance.
- `.agents/skills/static-portfolio-maintenance/agents/openai.yaml`: lightweight agent profile bundled with the repo-local skill.
- `.codex/config.toml`: project-scoped OpenAI Docs MCP server configuration.
- `docs/codex/PROJECT_MEMORY.md`: durable project decisions.
- `docs/codex/PROJECT_STATE.md`: current status, validation contract, and watch items.

## Official Codex Basis

- Official Codex best practices recommend keeping reusable workflow guidance in `AGENTS.md`, keeping the root file practical, and moving specialized details into referenced docs when it grows.
- Official Codex MCP docs support project-scoped `.codex/config.toml` in trusted repositories.
- Official Codex skills docs support repo-scoped skills under `.agents/skills`.
- Official Codex best practices recommend adding tools only when they unlock a real workflow. This repo therefore keeps OpenAI Docs MCP and the static portfolio skill, but does not add Figma, browser, database, hooks, or custom subagents without a concrete recurring need.

## Recommended Skills

- Use `$static-portfolio-maintenance` for normal work in this repo.
- Use `openai-docs` when tasks involve OpenAI, Codex, MCP, skills, plugins, hooks, or subagents.
- Use `browser-use:browser` after meaningful frontend changes to verify the local preview.
- Use `github:*` skills only for PR, issue, CI, or GitHub remote work.

## MCP

- `openaiDeveloperDocs` is configured in `.codex/config.toml` because OpenAI/Codex guidance changes over time and official docs should be the source of truth.
- `.codex/config.toml` is complete by design even though it only has one MCP server entry. Personal defaults such as model choice, sandboxing, or approval policy belong in a user's global Codex config, not in this public portfolio repository.
- No Figma MCP is configured because this repo currently has no Figma-driven design workflow.
- No custom content/CMS MCP is configured because the site content is local typed data.
- No database MCP is configured because the deployed site is static and has no runtime database.

## Plugins

- Browser: useful for local visual verification.
- GitHub: useful for PR review, CI inspection, and publishing tasks.
- Chrome: only needed for authenticated remote browser work; not needed for ordinary local portfolio edits.
- Gmail: not needed for this repo; do not send mail as part of site maintenance.
- Computer Use: not needed unless a task explicitly requires a desktop app.
- Documents, Spreadsheets, Presentations: not relevant to normal portfolio code changes.

## Hooks

Hooks are not enabled for this repo. The current deterministic gates are GitHub Actions plus local `type-check`, `lint`, `build`, and Playwright tests.

Add hooks only if repeated misses justify them, for example:

- A Stop hook that reminds agents to run validation.
- A PreToolUse hook that blocks committing generated `out/` or `.next/` artifacts.

Do not add hooks just for completeness; lifecycle hooks add maintenance surface and can surprise future agents.

## Subagents And Custom Agents

No standalone repo-specific subagents are configured. The repo-local skill includes a lightweight agent profile, but ordinary work should still be handled by a single main agent.

Use subagents only when the user explicitly asks for parallel work or when a broad review is split into independent tracks such as accessibility, dependency security, SEO, and CI.
