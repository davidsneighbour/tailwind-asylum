---
mode: agent
model: GPT-5.1-Codex-Max
tools: ['codebase', 'editFiles', 'runCommands', 'search']
description: Review an Asylum repository and make it cleaner, more reusable, and better documented.
---

# Review this Asylum repository

Review this repository as an Asylum repository.

An Asylum repository is a reusable, runnable boilerplate for test cases, bug reproductions, support cases, design experiments, component tests, theme tests, and how-to pages.

## Goals

1. Keep `main` clean and runnable.
2. Make it easy to create a branch for a new test case.
3. Make it easy to turn an issue, support chat, or Discourse thread into a reproducible case.
4. Improve documentation.
5. Fix obvious broken scripts, invalid config, naming mismatches, and missing verification commands.

## Required checks

Check for:

* missing README usage instructions
* missing `ASYLUM.md`
* missing branch workflow documentation
* invalid config files
* missing npm scripts referenced by documentation
* local absolute paths
* hardcoded private environment settings
* inconsistent naming between routes, collections, and docs
* undocumented test cases
* obsolete sample content
* missing verification commands
* missing issue or support templates

## Implementation requirements

Fix safe issues directly.

Do not remove potentially useful examples unless you are certain they are unused and obsolete.

When uncertain, add the item to `ToDo.md` with:

* title
* affected files
* reason
* suggested action
* confidence level

## Verification

Run the relevant commands.

For Astro/Tailwind repositories:

```bash
npm run check
npm run test
npm run build
```

For GoHugo repositories:

```bash
npm run check
npm run build
```

If a command does not exist, add it or document why it cannot be added yet.

## Result

Return:

* summary
* changed files
* verification results
* remaining `ToDo.md` items
