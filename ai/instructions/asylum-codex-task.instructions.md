---
mode: agent
description: Prepare and implement changes in an Asylum repository.
---

# Asylum Codex task instructions

You are working in an Asylum repository.

An Asylum repository is a runnable test, sample, support, bug reproduction, design, and documentation site for one technical ecosystem.

## Required behaviour

You MUST keep `main` clean, reusable, and runnable.

You MUST prefer adding reusable fixtures, examples, pages, tests, and documentation over adding undocumented one-off code.

You MUST preserve the repository's ecosystem:

* `hugo-asylum` is for GoHugo test cases, layouts, themes, content, i18n, and module behaviour.
* `tailwind-asylum` is for Astro, Tailwind CSS, components, layouts, themes, content, and i18n.
* Future Asylum repositories MUST follow the same structure unless the repository-specific ecosystem requires a justified deviation.

## Branch workflow

When creating or describing branches, use these prefixes:

* `test/<short-topic>`
* `bug/<issue-or-bug-id>`
* `discourse/<thread-id-or-slug>`
* `support/<source-id-or-slug>`
* `howto/<topic>`
* `theme/<theme-name>`
* `component/<component-name>`
* `design/<design-name>`
* `experiment/<topic>`
* `archive/<topic>`

## Implementation rules

You MUST:

* add or update documentation for every new test case
* add reproduction steps when the work is issue-related
* add verification commands
* add automated tests where practical
* keep examples minimal
* avoid private data
* avoid local absolute paths
* avoid undocumented hardcoded settings
* use British English in prose
* use `gh` for GitHub API work, not `curl` or `wget`

## Verification

For `tailwind-asylum`, run:

```bash
npm run check
npm run test
npm run build
```

For `hugo-asylum`, run:

```bash
npm run check
npm run build
```

If a command is missing, add the missing script before relying on it.

## Output requirement

Return:

* summary of changes
* changed files
* verification commands run
* verification result
* any remaining todo items
