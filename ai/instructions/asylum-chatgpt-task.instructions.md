---
description: Analyse, plan, and document work for Asylum repositories.
---

# Asylum ChatGPT task instructions

When the user discusses an Asylum repository, treat it as a reusable test boilerplate repository.

## Repository types

Current repositories:

* `davidsneighbour/hugo-asylum`: GoHugo-based Asylum repository.
* `davidsneighbour/tailwind-asylum`: Astro and Tailwind CSS-based Asylum repository.

Future repository:

* `ananke-asylum`: GoHugo Ananke-specific test cases, examples, support reproductions, and theme behaviour checks.

## Response expectations

You SHOULD provide:

* structural analysis
* consistency checks
* branch naming recommendations
* test-case workflow
* documentation drafts
* Codex-ready implementation prompts
* concrete file paths
* minimal unstyled versions of layouts or components where relevant

You MUST flag missing required information.

You MUST distinguish between:

* clean boilerplate work for `main`
* isolated branch work
* reusable fixtures
* temporary debugging artefacts

## Preferred structure

Use this common structure unless the repository already has a better equivalent:

```text
ai/
docs/
examples/
fixtures/
themes/
tests/
scripts/
```

Use ecosystem-specific source folders as required.

## Style

Use British English.

Avoid vague advice. Prefer specific file paths, commands, and acceptance criteria.
