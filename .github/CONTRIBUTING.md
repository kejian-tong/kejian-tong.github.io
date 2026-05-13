## Contributing

Thank you for your interest in contributing. This file provides a general, project-agnostic contribution guide tailored to this repository's workflow and best practices.

If you'd like to propose an addition or change to this guide, open a PR or an issue.

### Code of Conduct

Be respectful and professional. Treat maintainers and contributors with courtesy. If you encounter abusive behavior, open an issue or contact a repo owner directly.

### How to contribute

- Report bugs or request features by opening an issue with a clear title, description, and steps to reproduce (if applicable).
- For small fixes or documentation updates, open a PR directly from a branch named `fix/...` or `docs/...`.
- For larger features, open an issue first to discuss scope, then create a `feature/...` branch.

### Development setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

Common scripts

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run lint` — linting
- `npm run type-check` — static type checks

### Branching & commits

- Use descriptive branch names: `feature/`, `fix/`, `chore/`, `docs/`.
- Follow conventional commits where practical, e.g. `feat:`, `fix:`, `chore:`.
- Keep commits small and focused.

### Pull Request process

- Push your branch and open a PR against `main` (or the target branch).
- In the PR description, explain the change, include screenshots if UI is affected, and list any remaining tasks.
- Link the issue (if any).

PR checklist (fill before requesting review):

- [ ] Code builds successfully (`npm run build`)
- [ ] Lint checks pass (`npm run lint`)
- [ ] Type checks pass (`npm run type-check`)
- [ ] Tests (if present) pass
- [ ] Documentation updated if behavior changed

### Testing & quality

- Add unit or integration tests where appropriate. Keep tests deterministic and fast.
- If adding new features, include tests and update relevant docs.

### Documentation

- Keep README and in-repo docs up to date. Add examples and usage instructions for new features.

### Localization & accessibility

- Prefer clear, simple English in user-facing docs.
- Follow accessibility best practices for UI changes (semantic HTML, ARIA where needed, keyboard nav).

### Security

- Do not expose secrets or credentials in source code or PRs.
- If you find a security issue, avoid public disclosure; instead contact the repository owners privately.

### Releases & changelog

- Use the repository's release process (if any) or create a changelog entry for significant changes.

### Project-specific notes

This repository uses Next.js with the App Router. A few repo-specific items to be aware of:

- Metadata and structured data live in `src/app/layout.tsx`.
- The project uses an app-generated sitemap and robots (`src/app/sitemap.ts` and `src/app/robots.ts`). Keep canonical URLs consistent (no trailing slashes) and update `projects-data` when adding new project pages.

### Getting help

- If you need assistance, open an issue, mention the maintainers in a PR, or start a discussion.

Thank you for contributing!
