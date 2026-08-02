# Repository Guidelines

## Project Structure & Module Organization

`tailwind-asylum` is an Asylum repository: a runnable Astro, Tailwind CSS, and React site for examples, support cases, bug reproductions, design tests, and documentation. It is boilerplate, not a product. `main` MUST stay clean, reusable, and runnable; use other branches only when explicitly instructed.

- `src/pages/` contains Astro routes, including `/asylum/` and the dynamic case route.
- `src/content/blog/` contains Markdown/MDX case content. Directory-based cases may include sibling `*.html`, `*.css`, and `*.js` playground files.
- `src/components/`, `src/layouts/`, `src/utils/`, `src/config/`, and `src/styles/` hold shared UI, layout, helpers, site constants, and global Tailwind styles.
- `public/` stores static assets such as fonts and icons.
- `docs/` documents branch and test-case workflows; `ai/` stores prompts and instructions for agent-assisted work.

Read [ASYLUM.md](ASYLUM.md) before structural changes.

## Build, Test, and Development Commands

Run commands from the repository root:

- `npm install` installs dependencies.
- `npm run dev` starts Astro locally at `localhost:4321` with verbose output.
- `npm run check` runs `astro check` for TypeScript and `.astro` validation.
- `npm run test` runs Vitest once.
- `npm run test:watch` runs Vitest in watch mode.
- `npm run build` builds production output to `dist/`.
- `npm run preview` previews the production build.
- `npm run astro -- <args>` runs Astro CLI commands, such as `npm run astro -- add`.

Before handing off code changes, run:

```bash
npm run check
npm run test
npm run build
```

## Coding Style & Naming Conventions

Use TypeScript’s strictest Astro config. Prefer path aliases from `tsconfig.json` such as `@components/*`, `@layouts/*`, `@utils/*`, and `@config/*` over long relative imports. Follow existing Astro, React, and MDX formatting: two-space indentation, descriptive component names in `PascalCase`, utilities/helpers in `camelCase`, and content slugs in lowercase kebab-case.

Tailwind CSS 4 is configured through `@tailwindcss/vite` and `src/styles/global.css`; do not add `tailwind.config.js` unless the project explicitly needs one. Global styles import Tailwind and `@tailwindcss/typography`; prose content uses `prose prose-mist` with `dark:prose-invert`.

## Architecture Notes

Content is loaded from `src/content/blog/` through the Astro content collection in `src/content.config.ts`. Entries may be flat files or directory `index.mdx` files. Directory entries produce ids ending in `/index`, so use `normalizeBlogId` from `src/utils/blog.ts` when building `/asylum/*` links.

Interactive Tailwind examples use `@components/TailwindPlaygroundFromFiles.astro`, which wraps `@components/TailwindPlayground.tsx` and Sandpack. The wrapper resolves raw `*.html`, `*.css`, and `*.js` files under `src/content/blog/`; the HTML file is required. Check the real file path before assuming `baseDir` matches the content directory name.

`src/layouts/BlogPost.astro` is currently used by the asylum listing and detail pages. `src/layouts/Site.astro` exists but is not currently referenced; verify before treating either layout as canonical or dead code.

## Testing Guidelines

Vitest looks for `src/**/*.{test,spec}.{js,ts,mjs,mts,jsx,tsx}` in a Node environment. Name tests after the unit or behaviour under test, for example `src/utils/blog.test.ts`. To run one test file, use `npx vitest run path/to/file.test.ts`.

For content test cases, follow [docs/testcase-workflow.md](docs/testcase-workflow.md): include context, expected behaviour, actual behaviour for bugs, reproduction steps, verification commands, and a valid status (`draft`, `active`, `fixed`, or `archived`).

## Branch, Commit & Pull Request Guidelines

Use branch prefixes from [docs/branch-workflow.md](docs/branch-workflow.md): `test/`, `bug/`, `discourse/`, `support/`, `howto/`, `theme/`, `component/`, `design/`, `experiment/`, or `archive/`. Examples: `bug/gh-123-renderhook-images`, `support/customer-theme-switcher`, `component/tabs-keyboard-navigation`.

Agents MUST work on `main` unless the user explicitly instructs otherwise. Merge completed work only with squash or rebase merges; do not create merge commits.

Every activity and change MUST be committed to the repository with a clear, descriptive commit message. Every commit MUST reference one or more repository issues. If the task already names or clearly originates from an issue, use that issue. If no issue is already known at commit time, create a new issue for the completed task, reference it in the commit message, and close it with the commit or immediately after the commit. Do not search GitHub Issues merely to attach unrelated work to an existing issue.

When opening or updating GitHub issues, inspect and apply suitable existing repository labels. Do not create or update repository labels unless the user explicitly confirms the label provisioning work.

Use Conventional Commits and conventional changelog formatting for commit messages. Common types include `feat`, `fix`, `docs`, `style`, `refactor`, `test`, and `chore`; use `content` for case/content updates. Examples: `fix: normalise asylum index links`, `content: add tabs playground case`.

When a task is done, include a closing notice such as `Closes #123` in the commit message so the issue closes when the commit is pushed to `main`.

Pull requests should explain the case or reusable change, link issues or source threads when available, list verification commands run, and include screenshots for visible UI changes. Merge only reusable work back to `main`; messy but useful reproductions can remain unmerged on their branch.

## Agent-Specific Instructions

Treat this file as the main instructions reference for all agents. Keep tool-specific overlays, such as `CLAUDE.md`, short and focused on tool behaviour only. Do not duplicate repository rules across agent files; update this file when shared guidance changes.

The instructions in `ai/instructions/` and `ai/prompts/` describe the same Asylum conventions for other tools. Treat them as supporting references, not replacements for this file.
