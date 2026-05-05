# Asylum system

This repository is an Asylum repository: a runnable test, sample, support, bug reproduction, design, and documentation site for one technical ecosystem.

## Purpose

The repository MUST provide a fast way to test an idea, reproduce an issue, document behaviour, create a sample theme, or turn a support or Discourse conversation into a stable test case.

The `main` branch MUST remain a clean runnable boilerplate. It MUST NOT contain unfinished one-off investigations unless they have been turned into reusable fixtures, examples, tests, or documentation.

## Branch model

Use the following branch prefixes:

* `test/<short-topic>` for isolated test cases.
* `bug/<issue-or-bug-id>` for bug reproductions.
* `discourse/<thread-id-or-slug>` for forum cases.
* `support/<source-id-or-slug>` for support cases.
* `howto/<topic>` for reusable instructional examples.
* `theme/<theme-name>` for theme experiments.
* `component/<component-name>` for component experiments.
* `design/<design-name>` for visual design tests.
* `experiment/<topic>` for exploratory work that might not survive.
* `archive/<topic>` for frozen historical cases.

## Test case lifecycle

1. Start from `main`.
2. Create a branch with the correct prefix.
3. Add the smallest possible reproduction.
4. Add a page explaining the case.
5. Add source links or issue references when available.
6. Add verification steps.
7. Add automated checks where practical.
8. Keep the branch open while the case is active.
9. Merge only reusable parts back into `main`.

## Required metadata

Every test case SHOULD document:

* title
* short description
* source type
* source URL or ID, when available
* expected behaviour
* actual behaviour, for bugs
* reproduction steps
* verification command
* status
* related files

## Main branch policy

The `main` branch SHOULD contain:

* reusable layouts
* reusable components
* reusable themes
* fixtures
* example content
* documented workflows
* test helpers
* issue templates
* AI instructions and prompts

The `main` branch SHOULD NOT contain:

* temporary debugging output
* local machine paths
* unfinished support reproductions
* hardcoded private customer information
* test cases without documentation
