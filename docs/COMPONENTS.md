# Components

A reference for the reusable building blocks in `src/components/`.

| Component       | Purpose                                                                 |
| ---------------- | ------------------------------------------------------------------------ |
| `Button`          | Shared CTA button, renders as `<button>` or `<a>` via the `as` prop.     |
| `Tag`             | Small pill for a skill or technology, with an optional Devicon icon.    |
| `SectionHeading`  | Numbered section header (`01 · About`) with title + optional description. |
| `StatCard`        | Metric card used in the About section's achievement grid.               |
| `TimelineItem`    | Single entry in the Education timeline.                                 |
| `ProjectCard`     | Expandable project card with features, architecture, and challenges.    |
| `SocialLinks`     | Row of social icon links (GitHub, LinkedIn, Instagram, Email).          |
| `Navbar`          | Sticky top navigation with scroll-spy active states and theme toggle.   |
| `ThemeToggle`     | Light/dark mode switch, backed by `useTheme`.                            |
| `Footer`          | Page footer with the current year.                                       |
| `SEO`             | Sets `document.title` and the meta description on mount.                |
| `Icons`           | Hand-rolled GitHub / LinkedIn / Instagram SVG icons.                     |

## Sections (`src/sections/`)

Each section is a self-contained folder with a component and an
`index.ts` barrel export:

- **Hero** — animated typing effect, gradient/grid background, CTAs.
- **About** — bio + achievement stat grid.
- **Skills** — categorized skill tags (Languages, Frontend, Backend,
  Database, AI & Data Science, Tools).
- **Projects** — detailed cards for TurfItUp and Feedback Collector.
- **Experience** — placeholder for future internship/work history.
- **Education** — timeline of academic background.
- **Contact** — validated contact form + social links + resume download.

## Conventions

- Components are presentation-focused; data comes from `src/data/`.
- Styling uses Tailwind utility classes, composed with the `cn()`
  helper (`src/utils/cn.ts`) when conditional classes are needed.
- Animations use shared variants from `src/animations/variants.ts`
  rather than ad-hoc Framer Motion configs.
