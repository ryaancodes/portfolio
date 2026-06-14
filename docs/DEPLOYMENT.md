# Deployment

This project is a static site after build — it can be hosted on any
static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

## Build

```bash
npm install
npm run build
```

This produces a production build in `dist/`. Preview it locally with:

```bash
npm run preview
```

## Environment variables

Copy `.env.example` to `.env` and configure:

```
VITE_CONTACT_FORM_ENDPOINT=https://your-form-endpoint.example.com
```

If left blank, the contact form falls back to opening a pre-filled
`mailto:` link — no backend required.

## GitHub Pages (via GitHub Actions)

The included workflow at `.github/workflows/deploy.yml`:

1. Installs dependencies with `npm ci`.
2. Runs `npm run lint`, `npm run test`, and `npm run build`.
3. Uploads `dist/` as a Pages artifact and deploys it via
   `actions/deploy-pages`.

To enable it:

1. In your repository, go to **Settings → Pages** and set the source
   to **GitHub Actions**.
2. If deploying to `https://<user>.github.io/<repo>/`, set Vite's
   `base` option in `vite.config.ts` to `'/<repo>/'`.
3. Push to `main` — the workflow runs automatically.

## Netlify / Vercel

Both platforms auto-detect Vite projects:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Add any environment variables (e.g. `VITE_CONTACT_FORM_ENDPOINT`) in
the platform's dashboard before the first deploy.

## Custom domain

Update the following with your actual domain before going live:

- `index.html` — `<link rel="canonical">`, Open Graph / Twitter
  `og:url`, `og:image`.
- `src/constants/index.ts` — `SITE.url`.
- `public/robots.txt` — `Sitemap:` URL.
- `public/sitemap.xml` — `<loc>`.
