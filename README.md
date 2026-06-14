# Ryaan Devnani — Portfolio

Personal portfolio of **Ryaan Devnani** — Software Developer and
third-year B.Tech (AI & Data Science) student. Built with React,
TypeScript, Vite, and Tailwind CSS.

🔗 **Live site:** https://ryaandevnani.dev _(replace with your deployed URL)_

## ✨ Features

- Animated hero with a typewriter-style role rotator and a
  code/data-inspired background (gradient orbs + network graph)
- Smooth scroll-triggered entrance animations via **Framer Motion**
- Light / dark mode with persisted preference
- Fully responsive, accessible (semantic landmarks, focus states,
  `aria-*` attributes) layout
- Categorized skills section with technology icons (Devicon)
- Detailed, expandable project cards (features, architecture,
  challenges solved, live demo links)
- Functional, validated contact form with optional email-service
  integration and a `mailto:` fallback
- SEO: meta description, Open Graph / Twitter cards, JSON-LD
  structured data, `robots.txt`, `sitemap.xml`
- Type-safe content layer (`src/data/`) — update the site by editing
  data files, not components

## 🧱 Tech Stack

| Layer        | Tooling                                |
| ------------- | ---------------------------------------- |
| Framework     | React 18 + TypeScript                  |
| Build tool    | Vite                                    |
| Styling       | Tailwind CSS                           |
| Animation     | Framer Motion                          |
| Icons         | lucide-react + Devicon (tech logos)    |
| Linting       | ESLint (flat config) + typescript-eslint |
| Formatting    | Prettier + prettier-plugin-tailwindcss |
| Testing       | Vitest + React Testing Library         |
| CI/CD         | GitHub Actions → GitHub Pages          |

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── resume/        # Downloadable resume PDF
│   ├── images/        # Static images / screenshots
│   ├── icons/         # Misc icon assets
│   └── favicon/       # Favicon + web manifest
├── src/
│   ├── animations/     # Shared Framer Motion variants
│   ├── components/     # Reusable UI components
│   ├── constants/      # Site metadata, navigation links
│   ├── data/           # Content: profile, projects, skills, education, social
│   ├── hooks/          # useTheme, useTypingEffect, useScrollSpy
│   ├── layouts/        # MainLayout (navbar + footer wrapper)
│   ├── pages/          # Home page composition
│   ├── sections/       # Hero, About, Skills, Projects, Experience,
│   │                    # Education, Contact
│   ├── services/       # contactService (form submission / mailto fallback)
│   ├── types/          # Shared TypeScript types
│   └── utils/          # cn() class-name helper
├── tests/              # Vitest + RTL tests, mirroring src/
├── docs/               # Architecture, deployment, components, contributing
└── .github/workflows/  # CI/CD (lint, test, build, deploy)
```

See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for a deeper
explanation of how the pieces fit together.

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check + production build
npm run build

# preview the production build
npm run preview
```

### Available scripts

| Script               | Description                                |
| --------------------- | --------------------------------------------- |
| `npm run dev`         | Start the Vite dev server                  |
| `npm run build`       | Type-check and build for production        |
| `npm run preview`     | Preview the production build locally       |
| `npm run lint`        | Run ESLint                                  |
| `npm run lint:fix`    | Run ESLint with `--fix`                     |
| `npm run format`      | Format the codebase with Prettier           |
| `npm run format:check`| Check formatting without writing changes    |
| `npm run test`        | Run the Vitest test suite                   |
| `npm run test:watch`  | Run tests in watch mode                     |
| `npm run test:coverage` | Run tests with coverage report            |

## ⚙️ Configuration

Copy `.env.example` to `.env` to optionally configure a contact-form
endpoint:

```bash
cp .env.example .env
```

```
VITE_CONTACT_FORM_ENDPOINT=https://your-form-endpoint.example.com
```

If unset, the contact form falls back to opening a pre-filled
`mailto:` link — the site works fully without a backend.

## 📦 Content

All editable content lives in `src/data/`:

- `profile.ts` — name, roles, bio, resume path
- `projects.ts` — TurfItUp & Feedback Collector project details
- `skills.ts` — categorized skills (Languages, Frontend, Backend,
  Database, AI & Data Science, Tools)
- `education.ts` — education timeline + achievement stats
- `social.ts` — GitHub / LinkedIn / Instagram / email links

## 🧪 Testing

```bash
npm run test
```

Tests cover shared components (`Button`, `SocialLinks`,
`ProjectCard`), hooks (`useTypingEffect`), and utilities (`cn`).

## 🚢 Deployment

See [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md). A ready-to-use
GitHub Actions workflow (`.github/workflows/deploy.yml`) lints, tests,
builds, and deploys to GitHub Pages on every push to `main`.

## 📄 Documentation

- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — project structure & data flow
- [`docs/COMPONENTS.md`](./docs/COMPONENTS.md) — component reference
- [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) — hosting & CI/CD
- [`docs/CONTRIBUTING.md`](./docs/CONTRIBUTING.md) — local setup & conventions
- [`SECURITY.md`](./SECURITY.md) — security policy

## 📜 License

Source code is licensed under the [MIT License](./LICENSE). Personal
content (resume, bio, project descriptions) is © Ryaan Devnani.

## 👤 Contact

- Email: ryaandevnani@gmail.com
- GitHub: [@ryaancodes](https://github.com/ryaancodes)
- LinkedIn: [ryaandevnani13](https://www.linkedin.com/in/ryaandevnani13)
# portfolio
