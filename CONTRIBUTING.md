# Contributing to StealThisUI

Thanks for helping make StealThisUI more useful. Contributions should be practical, accessible, maintainable, and easy to verify.

## What to contribute

- Original, reusable UI components
- Bug fixes and edge-case handling
- Accessibility and keyboard-navigation improvements
- Responsive layout and styling fixes
- Clear examples and documentation
- Dependency or compatibility fixes with a clear reason

## Before you start

1. Check existing files to avoid duplicating a component.
2. Look for the closest category under `components/`.
3. For changes based on another project, verify its license and preserve required attribution.
4. Keep the scope focused and explain the problem your change solves.

## Component guidelines

- Use descriptive, kebab-case filenames, for example `components/cards/profile-card.tsx`.
- Export a clearly named component.
- Keep props typed when using TypeScript.
- Prefer semantic HTML and accessible labels.
- Interactive controls should support keyboard use and visible focus states.
- Make layouts work at narrow and wide viewport sizes.
- Handle invalid or missing values where relevant.
- Avoid unnecessary dependencies; document any that are required.
- Follow the conventions of nearby files where practical.
- Do not submit placeholders, copied code without attribution, or claims of testing that was not performed.

## Validation checklist

Before opening a pull request, check what applies to your change:

- [ ] The component has a clear name and belongs in the right category.
- [ ] Imports and exports are correct.
- [ ] Props and edge cases are handled.
- [ ] Keyboard interaction, labels, and focus states are considered.
- [ ] The layout is usable on mobile and desktop.
- [ ] Required dependencies and usage notes are documented.
- [ ] Existing project checks or tests pass, or any limitation is clearly reported.
- [ ] Third-party license and attribution requirements are preserved.

## Pull requests

Use a concise title describing the change. In the description, include:

- **What changed:** the component or behavior added or fixed.
- **Why:** the user problem or use case.
- **Validation:** checks actually run and their results.
- **Notes:** dependencies, screenshots, or known limitations where useful.

Keep each pull request focused on one coherent improvement. Avoid bundling unrelated components into a single change just to increase the file count.

## Commit messages

Use short, descriptive messages such as:

- `Add accessible progress bar`
- `Fix card layout on small screens`
- `Document copy button usage`

## Licensing

By contributing, ensure you have the right to submit the code. Do not remove existing copyright notices or third-party license information. Refer to the repository's license and any component-specific notices.
