# Prototype Kit

Boilerplate for throwaway UI prototypes: Vite + React 19 + Tailwind v4, shadcn/ui on **Base UI**, styled with Nav's **Wayfinder** tokens. Optimize for speed of iteration over production hardening. Scripts live in `package.json`; token tables and the shadcn ↔ Wayfinder mapping live in `README.md`. Read the README before styling anything.

## Starting a prototype

`src/App.tsx` is a token/component showcase. When building a real prototype, replace `App.tsx` and delete `src/showcase/`. `main.tsx` already mounts `<TooltipProvider>` and `<Toaster>`, so call `toast()` from `sonner` directly.

## Components

- Reuse `src/components/ui/` first. Add missing ones with `pnpm ui:add <name>`, never by hand-writing a shadcn component from memory.
- These are the **Base UI** flavor (`base-nova`), not Radix. Compose triggers with the `render` prop: `<DialogTrigger render={<Button variant="outline" />}>Open</DialogTrigger>`. `asChild` does not exist here.
- Treat `src/components/ui/` as vendored. To change how all shadcn components look, edit `src/styles/shadcn-bridge.css`; for one-off tweaks pass `className`.
- Icons come from `lucide-react`.

## Styling

- In your own code, use Wayfinder keys: color roles (`bg-surfaceContainerLow`, `text-onSurfaceVariant`, `border-outlineVariant`), spacing (`p-200`, `gap-300`), radius (`rounded-300`), shadows (`shadow-elevation2`), and typography utilities (`title2-emphasized`, `body2`) that set size, weight, line height, and family together. Tailwind's default scales (`p-4`, `text-sm`, `bg-zinc-500`) exist only so shadcn components run unmodified.
- Wayfinder color roles already switch under `.dark`, so color with tokens and leave out `dark:` variants. Toggle the theme with `useTheme()` from `@/lib/theme`.
- `src/styles/wayfinder.css` is a port of an upstream file; change it only when syncing (see README).
- Import `cn` from `@/lib/utils`.

## Before handing back

Run `pnpm typecheck` and `pnpm lint` until both are clean, then `pnpm format`. For visual changes, run `pnpm dev` and check the page in both light and dark mode.
