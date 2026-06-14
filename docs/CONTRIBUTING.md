# Contributing

This is a personal portfolio, but it follows standard open-source
project conventions so it's easy to maintain and extend.

## Getting started

```bash
npm install
npm run dev
```

## Before committing

```bash
npm run lint        # ESLint
npm run format      # Prettier
npm run test        # Vitest
```

## Adding or editing content

Most content changes don't require touching components at all:

- **Profile / bio** → `src/data/profile.ts`
- **Projects** → `src/data/projects.ts`
- **Skills** → `src/data/skills.ts`
- **Education / achievements** → `src/data/education.ts`
- **Social links** → `src/data/social.ts`

## Adding a new section

1. Create `src/sections/<Name>/<Name>.tsx` and an `index.ts` barrel
   export.
2. Add any new content to `src/data/`.
3. Import and render the section from `src/pages/Home.tsx`.
4. If it should appear in the navbar, add it to
   `src/constants/navigation.ts`.

## Code style

- TypeScript `strict` mode is enabled — avoid `any`.
- Prefer small, focused components over large ones.
- Use the `cn()` helper instead of string-concatenating class names.
- Co-locate tests under `tests/`, mirroring the `src/` path.
