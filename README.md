# StealThisUI

A growing collection of copy-ready UI components, interactions, backgrounds, and interface patterns for modern web projects.

**Build faster. Borrow ideas. Make them yours.**

## What's inside

- **Buttons and controls** — expressive CTAs, toggles, segmented controls, and action buttons.
- **Backgrounds and patterns** — gradients, textures, grids, and decorative surfaces.
- **Cards and layouts** — product cards, profiles, dashboards, galleries, and content blocks.
- **Forms and inputs** — sign-in flows, text fields, selectors, and validation-friendly patterns.
- **Navigation and overlays** — menus, docks, notifications, and utility UI.
- **Widgets and effects** — clocks, progress indicators, loaders, and interactive details.

## Quick start

Browse `components/`, choose a component, and copy the file into your project. Components are organized by category.

Most components use React and TypeScript with utility-first CSS. Check each file for its imports and requirements before using it; some components may need dependencies such as `lucide-react` or a class-name helper.

Example:

```tsx
import { SoftPillButton } from "./components/buttons/soft-pill-button";

export function Example() {
  return (
    <main className="p-8">
      <SoftPillButton>Get started</SoftPillButton>
    </main>
  );
}
```

> Import paths and exported names vary by component. Use the actual export declared in the file you copy.

## Project structure

```text
components/
  background-gradient/
  background-pattern/
  buttons/
```

New components should be placed in the closest matching category. Keep them focused, responsive, accessible, and easy to adapt.

## Adding components

When contributing a component:

1. Use a descriptive, kebab-case filename.
2. Keep the implementation self-contained where practical.
3. Support keyboard interaction and visible focus states for interactive elements.
4. Avoid adding dependencies unless they provide clear value.
5. Document any required packages, fonts, or assets.
6. Preserve the original license and attribution when adapting third-party code.

## Licensing

The repository's license applies to original project content. Third-party components may have separate license and attribution requirements; check the relevant source and the notices in the repository before redistributing or using them commercially.

## Contributing

Useful contributions include new components, accessibility improvements, responsive fixes, examples, and concise documentation. Prefer tested, working implementations over placeholder files.

---

*An evolving toolbox for building better interfaces, one component at a time.*
