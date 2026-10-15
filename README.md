# Prototype Kit

A Vite + React 19 + TypeScript + Tailwind v4 boilerplate for prototypes. It uses [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com) primitives and Nav's **Wayfinder** design tokens (palette, type ramp, spacing, radii, elevation, breakpoints, and Inter/Manrope fonts).

```sh
pnpm install
pnpm dev         # showcase at http://localhost:5173
pnpm build       # typecheck + production build
pnpm lint        # oxlint
pnpm format      # prettier (sorts Tailwind classes)
pnpm ui:add accordion   # add more shadcn components
```

`src/App.tsx` is a token and component showcase. Replace it, or delete `src/showcase/`, when you start a prototype.

## Styling layout

```
src/index.css               entry: tailwind → tw-animate → shadcn → wayfinder → bridge
src/styles/wayfinder.css    Wayfinder tokens (ported from base-react-components/src/wayfinder/theme.css)
src/styles/shadcn-bridge.css  maps shadcn vars (--card, --muted, --ring, ...) to Wayfinder tokens
```

### Using tokens

| What       | Examples                                                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Color      | `bg-primaryContainer text-onPrimaryContainer`, `bg-surfaceContainerLow`, `border-outlineVariant`, `text-error`                    |
| Typography | `display1`, `title2-emphasized`, `headline`, `body2`, `caption1-uppercase` (sets size, line height, tracking, weight, and family) |
| Spacing    | `p-100` (8px), `gap-200` (16px), `mt-400` (32px), `px-25` (2px)                                                                   |
| Radius     | `rounded-100` (4px) … `rounded-700` (24px)                                                                                        |
| Shadow     | `shadow-elevation1` … `shadow-elevation4`, `shadow-buttonActive`                                                                  |
| Fonts      | `font-primary` (Inter, default), `font-secondary` (Manrope)                                                                       |
| Breakpoint | `sm`/`tablet` 768, `md`/`laptop` 1024, `lg`/`desktop` 1280                                                                        |

Unlike pipsqueak, Tailwind's default scales are **kept**. `p-2`, `h-9`, `rounded-md`, and `bg-zinc-500` still work, so shadcn components run unmodified. Use the Wayfinder keys in your own code.

### shadcn ↔ Wayfinder mapping

| shadcn                      | Wayfinder                                  |
| --------------------------- | ------------------------------------------ |
| `background` / `foreground` | `background` / `onSurface`                 |
| `card`, `popover`           | `surfaceContainer`, `surfaceContainerHigh` |
| `primary` / `-foreground`   | `primary` / `onPrimary`                    |
| `secondary`, `muted`        | `surfaceContainerLow`                      |
| `muted-foreground`          | `onSurfaceVariant`                         |
| `accent` / `-foreground`    | `primarySurface` / `onPrimaryContainer`    |
| `destructive`               | `error`                                    |
| `border` / `input` / `ring` | `outlineVariant` / `outline` / `primary`   |
| `chart-1…5`                 | primary, info, success, warn, super        |
| `--radius`                  | 8px (`rounded-lg`)                         |

Edit `shadcn-bridge.css` to retune how shadcn components look.

### Dark mode

Dark mode is class-based: add `.dark` to `<html>`. `useTheme()` in `src/lib/theme.ts` toggles the class and saves the choice to localStorage. An inline script in `index.html` applies the saved choice (or the system preference) before first paint.

## Syncing tokens

The source of truth is `packages/base-react-components/src/wayfinder/theme.css` in `nav-inc/typescript`. If it changes, copy the `@theme`, `@theme static`, `.dark`, and `@utility` blocks into `src/styles/wayfinder.css`. Leave out the `--*: initial` resets.

## Notes

- shadcn components import `cn` from the `cn` package. `@/lib/utils` re-exports it for your own code.
- Base UI triggers compose through `render`: `<DialogTrigger render={<Button variant="outline" />}>Open</DialogTrigger>`.
- Fonts load from `design-assets.nav.com`, so you need network access for Inter and Manrope.
