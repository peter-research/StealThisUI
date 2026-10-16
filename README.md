# StealThisUI

Copy-ready UI components for modern web projects — buttons, cards, effects, backgrounds, widgets, and more.

- 🎨 100+ TypeScript/React components
- 📦 No package install — copy the file you need
- ♿ Accessible patterns (keyboard + ARIA-friendly)
- 🎞️ Motion-ready (respects `prefers-reduced-motion`)

## Quick start

1. Clone or browse: `github.com/peter-research/StealThisUI`
2. Open a component in `components/` and read its exports/props.
3. Copy the file (and `lib/cn.ts`) into your app.
4. Adapt styling to your design system.

## Metadata

- Language: TypeScript + React
- Styling: Tailwind-friendly (`cn` helper in `lib/cn.ts`)
- Icons: `lucide-react` (most components)

## Component catalog

See `components/` — one folder per category:
`alerts, avatars, badges, buttons, cards, effects, forms, layout, marquee, navigation, text, widgets, backgrounds…`

## Development

```bash
npm run dev        # preview demo app
npm run storybook  # component explorer (if configured)
npm run typecheck  # tsc --noEmit
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Improvements welcome: a11y, responsiveness, docs, examples.

## License

MIT — see [LICENSE](./LICENSE).