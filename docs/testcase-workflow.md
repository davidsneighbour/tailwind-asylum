# Test case workflow

## Minimal test case page

Each case SHOULD have a page with this structure:

```md
---
title: Example title
description: Short description of the case.
date: 2026-05-05T12:00:00Z
tags:
  - test-case
  - bug
source:
  type: support
  id: "customer-theme-switcher"
  url: "https://example.com/source"
status: active
---

## Context

Explain why this case exists.

## Expected behaviour

Explain what should happen.

## Actual behaviour

Explain what happens instead.

## Reproduction steps

* Step one.
* Step two.
* Step three.

## Verification

Run `npm run check`.

## Notes

Add implementation notes, related links, or follow-up tasks.
```

## Status values

Use these values consistently:

* `draft`
* `active`
* `fixed`
* `archived`
