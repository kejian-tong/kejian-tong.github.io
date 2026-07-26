# Kejian Tong Portfolio

This repository powers my personal portfolio site at
<https://kejian-tong.github.io/>. It is a statically exported Next.js App
Router application built with TypeScript and Tailwind CSS, then deployed to
GitHub Pages from the `main` branch.

The site is intentionally content-driven: shared identity, profile links,
projects, publications, education, experience, skills, and contact details live
in typed data/config modules instead of being duplicated across pages.

## Live Site

- Homepage: <https://kejian-tong.github.io/>
- Canonical person/entity page: <https://kejian-tong.github.io/kejian-tong>
- Releases: <https://github.com/kejian-tong/kejian-tong.github.io/releases>

## Current Features

- Responsive homepage with hero, about, projects, skills, education,
  publications, optional blog, and contact sections.
- Canonical `/kejian-tong` profile page with structured personal, education,
  publication, project, and privacy-first work experience details.
- Typed project case studies served from the static `/projects/[slug]` route.
- Shared navbar and footer rendered through the App Router root layout.
- Dark/light theme support through `next-themes`.
- Subtle Framer Motion animations with reduced-motion coverage.
- Optional EmailJS contact form integration with a `mailto:` fallback.
- Static sitemap, robots, canonical metadata, Open Graph metadata, and
  JSON-LD structured data.
- GitHub Pages-compatible static export through `next build`.
- Playwright smoke tests covering routes, metadata, layout overflow,
  reduced-motion behavior, and shared footer identity.

## Tech Stack

- Next.js 15 App Router with `output: "export"`
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- EmailJS browser SDK
- Playwright
- GitHub Actions and GitHub Pages

## Project Structure

```text
src/
  app/
    layout.tsx              # App shell, metadata, JSON-LD, shared layout
    page.tsx                # Home page composition
    not-found.tsx           # Static 404 page
    kejian-tong/
      page.tsx              # Canonical person/entity page
    projects/
      [slug]/
        page.tsx            # Typed dynamic project case studies
    robots.ts               # Static robots metadata route
    sitemap.ts              # Static sitemap metadata route
  components/
    layout/                 # Navbar and Footer
    sections/               # Home page sections
    ui/                     # Small reusable UI primitives
  config/
    site.ts                 # Canonical site metadata, identity, URLs, profiles
  content/
    contacts.ts             # Derived contact/profile data
    educations.ts           # Education timeline data
    experience.ts           # Work experience data
    navigation.ts           # Navigation items
    personal.ts             # Summary, highlights, social links, blog flag
    projects.ts             # Project cards and case-study content
    publications.ts         # Publication entries
    skills.ts               # Skill categories and items
  domain/
    content.ts              # Shared content interfaces
  styles/
    globals.css             # Tailwind and global styles
tests/
  e2e/                      # Playwright smoke tests
public/
  image/                    # Static images served from /image/*
docs/
  ARCHITECTURE.md           # Static export and source ownership contract
  CHANGELOG.md              # Versioned project changelog
  codex/                    # Agentic maintenance guidance and project state
```

For the full architecture contract, see
[`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).

## Local Development

Use Node 20.19 or newer. The repository's `.nvmrc` points to Node 20, and the
GitHub Actions workflows use Node 20. Newer Node versions that satisfy
`package.json`'s `>=20.19.0` engine are also acceptable for local validation.

```bash
nvm use
npm ci
npm run test:e2e:install   # one-time Playwright browser install
npm run dev
```

Open <http://localhost:3000> for the development server.

If `nvm use` reports that Node 20 is not installed:

```bash
nvm install 20
nvm use
```

## Build, Validate, And Preview

This site uses `output: "export"`, so `next build` writes the deployable static
site to `out/`. The `npm run type-check` command intentionally avoids requiring
generated `.next/types`; `npm run build` validates the full Next.js generated
type surface.

```bash
npm run type-check       # TypeScript checks without requiring a prior build
npm run lint             # ESLint over source, tests, and config entrypoints
npm run build            # Production static export into ./out
npm run validate         # type-check + lint + build
npm run preview          # Serve ./out locally
npm run test:e2e         # Build and run Playwright smoke tests
npm run test:e2e:built   # Run Playwright against an existing ./out build
```

Run `npm run test:e2e` after changes to routing, metadata, shared layout,
navigation, contact behavior, page composition, or responsive UI.

## Deployment

Deployment is handled by GitHub Actions:

- `.github/workflows/deploy.yml` builds and publishes the static site to GitHub
  Pages on pushes to `main`.
- `.github/workflows/quality.yml` runs local-quality equivalents for pull
  requests and branch updates.
- GitHub Pages should be configured with
  **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.

After the deploy workflow completes, the production site is available at
<https://kejian-tong.github.io/>.

## Customizing Content

Prefer data/config edits over hard-coded page edits:

- `src/config/site.ts` owns canonical URL, shared metadata, email, current
  location policy, DEV username, and primary profile links.
- `src/content/personal.ts` owns homepage summary, highlights, technical focus,
  social links derived from `siteConfig`, and the blog visibility flag.
- `src/content/contacts.ts` derives contact values used by UI components.
- `src/content/navigation.ts` owns navbar route and section links.
- `src/content/projects.ts` owns project cards and case-study pages for
  `/projects/[slug]`.
- `src/content/publications.ts` owns publication entries.
- `src/content/educations.ts` owns historical education entries.
- `src/content/experience.ts` owns historical and current work experience
  entries.
- `src/content/skills.ts` owns grouped skill taxonomy.

The footer and shared metadata intentionally use `siteConfig` and derived
content modules. Do not reintroduce duplicated current-location strings in page
markup.

### Current Location Policy

The shared footer should not present a current location unless `siteConfig`
explicitly contains a current, intended value. Historical location references,
such as education or prior internships in Seattle, should remain in the relevant
education or experience data.

## Metadata And SEO

- Root site metadata is defined in `src/app/layout.tsx` and `src/config/site.ts`.
- `/kejian-tong` is the canonical Person entity page and should remain the only
  page that emits Person JSON-LD.
- `src/app/sitemap.ts` and `src/app/robots.ts` must stay static-export
  compatible.
- Project pages should use content-driven metadata from `src/content/projects.ts`
  rather than route-local copies.

## Contact Form

The contact section supports optional EmailJS public build-time variables:

```text
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

When those variables are absent or sending fails, the UI falls back to `mailto:`
using the configured email address. Do not commit private API keys or secrets.

## Release Workflow

The repository uses semantic version tags and GitHub Releases.

Typical release flow:

```bash
git checkout main
git pull --ff-only origin main
npm run validate
npm run test:e2e
gh release create vX.Y.Z --target main --title vX.Y.Z --notes-file /path/to/notes.md
```

Release notes should follow the existing sectioned style:

- `Added`
- `Changed`
- `Fixed`
- `Validation`
- `Notes`

Keep `docs/CHANGELOG.md` aligned when a change is notable enough to document for
future maintainers.

## Agentic Maintenance

This repository includes local guidance for AI-assisted maintenance:

- [`AGENTS.md`](./AGENTS.md) is the repository contract for coding agents.
- [`.agents/skills/static-portfolio-maintenance/SKILL.md`](./.agents/skills/static-portfolio-maintenance/SKILL.md)
  captures the repeatable portfolio maintenance workflow.
- [`docs/codex/guidance.md`](./docs/codex/guidance.md) contains day-to-day
  operating rules.
- [`docs/codex/PROJECT_STATE.md`](./docs/codex/PROJECT_STATE.md) records the
  current project snapshot and validation expectations.
- [`docs/codex/PROJECT_MEMORY.md`](./docs/codex/PROJECT_MEMORY.md) records
  durable decisions.

Follow these docs for future code, content, SEO, CI, or release changes.

## Generated Artifacts

Do not commit generated local artifacts:

- `.next/`
- `out/`
- `playwright-report/`
- `test-results/`
- `*.tsbuildinfo`

## License

MIT
