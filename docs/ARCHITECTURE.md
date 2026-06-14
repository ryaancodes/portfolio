# Architecture

This document describes how the portfolio is structured and the
reasoning behind the main architectural decisions.

## Overview

The site is a single-page application built with **React 18**,
**TypeScript**, and **Vite**. Styling is handled entirely with
**Tailwind CSS**, and **Framer Motion** drives entrance/scroll
animations. There is no backend — content is data-driven from
plain TypeScript modules under `src/data/`, and the contact form
either posts to an external endpoint or falls back to a `mailto:` link.

## Directory layout

```
src/
├── animations/   # Framer Motion variants shared across sections
├── components/   # Small, reusable, presentation-only components
├── constants/    # Site-wide constants (metadata, nav links)
├── data/         # Content: profile, projects, skills, education, social
├── hooks/        # Reusable hooks (theme, typing effect, scroll spy)
├── layouts/       # Page-level layout shells (navbar + footer wrapper)
├── pages/        # Route-level compositions of sections
├── sections/     # One folder per landing-page section
├── services/     # External-facing logic (contact form submission)
├── styles/       # Reserved for additional global styles
├── types/        # Shared TypeScript types
└── utils/        # Small framework-agnostic helpers (e.g. `cn`)
```

## Data flow

1. **Data modules** (`src/data/*.ts`) hold all editable content —
   profile bio, project details, skills, education, and social links.
   Changing the site's content should, in almost all cases, only
   require editing these files.
2. **Section components** (`src/sections/*`) import the relevant data
   module and render it using shared components from
   `src/components/`.
3. **`src/pages/Home.tsx`** composes all sections in order for the
   single-page layout.
4. **`src/App.tsx`** wraps the page in `MainLayout` (navbar + footer)
   and sets document-level SEO metadata via the `SEO` component.

## Styling approach

- Tailwind's `darkMode: 'class'` strategy is used; the `useTheme` hook
  toggles a `dark` class on `<html>` and persists the preference to
  `localStorage`.
- Custom design tokens (colors, fonts, animation keyframes) live in
  `tailwind.config.ts` and mirror the original static design's CSS
  variables (`--bg`, `--ink`, `--accent`, `--teal`, etc.).
- Shared utility classes (`.btn-primary`, `.btn-secondary`, `.tag`,
  `.section-container`) are defined once in `src/index.css` under
  `@layer components` to avoid repeating long class lists.

## Animations

All scroll/entrance animations are defined as reusable Framer Motion
`Variants` objects in `src/animations/variants.ts`
(`fadeInUp`, `fadeIn`, `staggerContainer`, `scaleIn`). Sections wrap
their content in `motion.*` components using `whileInView` so
animations replay only once per element, improving performance on
longer pages.

## Performance & code splitting

- `vite.config.ts` defines manual chunks separating React and Framer
  Motion from the rest of the app bundle, so vendor code can be
  cached independently of content updates.
- Section components are colocated with their own `index.ts` barrel
  files, making it straightforward to convert any section to
  `React.lazy` + `Suspense` if the bundle grows.

## Testing

Vitest + React Testing Library are configured (`vite.config.ts` →
`test`, `tests/setup.ts`). Tests live under `tests/`, mirroring the
`src/` structure (`tests/components`, `tests/hooks`, `tests/utils`).
