# Project Memory

Durable facts for future work on this repository.

- The site is a static Next.js portfolio for GitHub Pages at `https://kejian-tong.github.io`.
- `src/utils/data/site-config.ts` is the canonical source for site URL, title, description, email, location, DEV username, and social links.
- Keep `personal-data.ts` and `contacts-data.ts` derived from `site-config.ts` instead of duplicating identity fields.
- The deployed site must stay compatible with static export. Avoid runtime-only Next.js features.
- The contact form uses optional EmailJS `NEXT_PUBLIC_EMAILJS_*` variables and must fall back to `mailto:` when they are absent.
- The canonical person/entity page is `/kejian-tong`; avoid duplicating Person JSON-LD on the home layout.
- The repo uses Playwright smoke tests to protect route, metadata, robots, sitemap, and homepage behavior.
- Project-level Codex guidance lives in `AGENTS.md`; repo-local reusable workflow guidance lives in `.agents/skills/static-portfolio-maintenance/SKILL.md`.
- OpenAI/Codex documentation lookup should use the project-scoped OpenAI Docs MCP server configured in `.codex/config.toml`.
- Hooks are not enabled because the current repo is small enough for explicit CI and local validation. Reconsider hooks only if repeated missed validation becomes a real pattern.
