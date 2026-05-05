# Branch workflow

## Create a new test branch

Use this naming pattern:

```text
<prefix>/<id-or-topic>
```

Examples:

```text
bug/gh-123-renderhook-images
discourse/52831-taxonomy-output
support/customer-theme-switcher
howto/tailwind-typography
component/tabs-keyboard-navigation
design/card-grid-spacing
theme/minimal-dark
```

## Workflow

1. Update `main`.
2. Create the new branch from `main`.
3. Add only the files required for the case.
4. Add or update the case documentation.
5. Run the verification commands.
6. Keep notes in the branch or linked issue.
7. Open a PR only when something should return to `main`.

## Merge rule

Only merge reusable work into `main`.

A messy reproduction branch can stay unmerged if it is still valuable as a historical debugging branch.
