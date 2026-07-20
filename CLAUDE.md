# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint (flat config: eslint-config-next core-web-vitals + typescript)
npx tsc --noEmit # type-check (no dedicated script exists yet)
```

There is no test suite configured in this project.

To add a new shadcn/ui primitive: `npx shadcn add <component>` — it reads `components.json` and writes into `components/ui/`.

## Architecture

Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4.

- **Path alias**: `@/*` maps to the repo root (`tsconfig.json`), e.g. `@/components/Hero`.
- **Tailwind v4 is CSS-first** — there is no `tailwind.config.ts`. All configuration lives in `app/globals.css`: `@import "tailwindcss"`, `@import "shadcn/tailwind.css"`, and a `@theme inline` block that maps CSS custom properties (oklch color tokens, radii, fonts) to Tailwind utilities.
- **Fonts**: registered in `app/layout.tsx` via `next/font/google` — Geist (`--font-geist-sans`), Geist Mono (`--font-geist-mono`), and Playfair Display (`--font-serif`). In `globals.css`, `--font-heading` is wired to `--font-serif`, so the `font-heading` utility renders the display serif; plain text uses the default sans. Use `font-heading` for headings/quotes/wordmarks, default sans for nav/UI text.
- **shadcn/ui**: configured via `components.json` (style `base-nova`, base color `neutral`, CSS variables on, no class prefix). Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`. `lib/utils.ts` exports the standard `cn()` (clsx + tailwind-merge).
- **Brand palette**: marketing sections use a warm ivory background (`#f7f3ec`) with `amber-600`/`amber-300` gold accents and `stone-900`/`stone-600` text — applied ad hoc via Tailwind arbitrary/utility values, not part of the shadcn theme tokens. Keep new marketing sections visually consistent with this palette.
- **Root layout composition** (`app/layout.tsx`) is order-sensitive:
  1. `<body>` is `relative` — it's the positioning context for the header overlay.
  2. `<LoadingScreen />` — fixed full-screen overlay, animates out with GSAP (`useGSAP`) on mount and unmounts itself (not just hides).
  3. `<LenisProvider>` — wraps everything below it, drives smooth scroll and syncs Lenis's raf with `gsap.ticker`.
  4. `<Header />` inside the provider — a client component (`components/layout/Header.tsx`) positioned `fixed inset-x-0 top-0`, transparent over hero imagery until scrolled, then it switches to the ivory `#f7f3ec` background with dark text via a `window.scrollY` listener.
- **Component layout**: `components/layout/` holds structural chrome (`Header`); `components/ui/` holds shadcn primitives; top-level `components/` holds page sections (`Hero`, `Collections`, `Philosophy`, …) composed directly into `app/page.tsx`.
- **Images**: marketing imagery lives in `app/assets/` (not `public/`) and is imported directly into the component that uses it, so Next.js can statically optimize it. The established pattern is a `relative`/`min-h-screen` (or `aspect-*`) wrapper with `next/image` using `fill` + `object-cover`.
- **Metadata**: root layout sets the default `title.template`/`description`; per the stack conventions below, every route should export its own `metadata` (or `generateMetadata` for dynamic routes).

## Stack conventions (apply by default)

From the existing project instructions — use these without being asked:

| Concern | Library |
|---|---|
| HTTP client | `axios` (not yet installed — install before first API call) |
| Server state / mutations | `@tanstack/react-query` |
| Smooth scroll | `lenis` (already wired via `components/LenisProvider.tsx`) |
| Icons | `lucide-react`, exclusively |
| Animations | `gsap` + `@gsap/react` (`useGSAP` hook, cleanup handled automatically) |
| Styling | Tailwind CSS v4 only — no inline styles, no CSS modules |

Other conventions in effect: mobile-first responsive design (test at 375/768/1440px), skeleton loading components for async content, error states surfaced to the user (never silent failures), `"use client"` only where browser APIs/hooks/GSAP/Lenis are needed (Server Components by default).
