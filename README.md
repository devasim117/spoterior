# Spoterior — Company Website

A production-ready marketing site for **Spoterior**, a luxury interior design studio.
Built with **Next.js (App Router)** and **JavaScript**, with a full technical-SEO layer.

Originally a Create React App single-page site, migrated to Next.js without changing the
design, content, or functionality.

---

## Tech Stack

| Area      | Choice                                            |
| --------- | ------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack)                |
| Language  | JavaScript (no TypeScript)                        |
| UI        | React 19, Server Components by default            |
| Styling   | Plain CSS (`app/globals.css` + `app/app.css`)     |
| Icons     | `lucide-react`, `react-icons`                     |
| Fonts     | `next/font/google` — Inter + Playfair Display     |
| Images    | `next/image` (AVIF / WebP)                        |

---

## Requirements

- Node.js **18.18+** (developed on Node 26)
- npm 9+

---

## Getting Started

```bash
# 1. install dependencies
npm install

# 2. create your local env file
copy .env.local.example .env.local   # Windows
# cp .env.local.example .env.local   # macOS / Linux

# 3. start the dev server
npm run dev
```

Open <http://localhost:3000>.

### Scripts

| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload            |
| `npm run build` | Create an optimised production build            |
| `npm start`     | Serve the production build locally              |

---

## Environment Variables

| Variable               | Required | Description                                                                 |
| ---------------------- | -------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Public origin of the site, **no trailing slash**. Used for canonical URLs, Open Graph URLs, `sitemap.xml`, `robots.txt` and JSON-LD. Falls back to `https://example.com` if unset. |

Example:

```
NEXT_PUBLIC_SITE_URL=https://aureliainteriors.com
```

> Set this in your hosting provider's environment settings before going live —
> otherwise search engines will be pointed at the placeholder domain.

---

## Project Structure

```
app/
  layout.js            # Root layout: fonts, global metadata, JSON-LD, viewport
  page.js              # Landing page (Server Component)
  globals.css          # Design tokens + global styles
  app.css              # Section/component styles (carried over from the CRA app)
  sitemap.js           # Dynamic sitemap.xml
  robots.js            # Dynamic robots.txt
  manifest.js          # Web app manifest
  not-found.js         # 404 page
  error.js             # Runtime error boundary
components/
  common/              # Reveal, BackToTop, SectionHeading
  layout/              # Navbar, Footer
  sections/            # Hero, Marquee, Features, Stats, Gallery,
                       # Showcase, Testimonials, CTA
lib/
  site.js              # Site URL / SEO constants
  siteContent.js       # Single source of truth for all page copy + assets
public/
  images/              # Hero, brand logo
  images_company/      # Portfolio photography
  images_brand_company/normalized/  # Normalised partner logos
  icons/, favicon.ico, logo192.png, logo512.png
```

### Where to edit content

Almost all copy, navigation links, service entries, stats, gallery items,
testimonials and footer text live in a single file:

```
lib/siteContent.js
```

Components stay presentational, so content updates are a one-file change.

### Server vs. Client Components

- **Server Components (default):** `app/page.js`, `layout.js`, Hero, Marquee,
  Features, Stats, Gallery, Testimonials, CTA, SectionHeading — so all headings
  and copy are present in the initial HTML for crawlers.
- **Client Components (`"use client"`):** Navbar, Footer, Showcase, Reveal,
  BackToTop, `error.js` — only where scroll state, browser APIs or hooks are needed.

---

## SEO

- Unique `<title>`, meta description, keywords, canonical, Open Graph and
  Twitter Card tags (see `app/layout.js`, driven by `lib/site.js`).
- `metadataBase` + `viewport` exports.
- JSON-LD structured data: `InteriorDesignFirm` (Organization) and `WebSite`.
- Dynamic `/sitemap.xml` (`app/sitemap.js`) and `/robots.txt` (`app/robots.js`).
- `/manifest.webmanifest` with icons.
- Semantic HTML5 landmarks (`header` / `main` / `section` / `footer`),
  a single `<h1>` with a clean `h2`/`h3` hierarchy, a skip link, and
  descriptive `alt` text on every meaningful image.
- Custom 404 (`app/not-found.js`) and error (`app/error.js`) pages, both excluded
  from indexing where appropriate.

> Routing is intentionally **single-page**: navigation links are in-page anchors
> (`#services`, `#portfolio`, …) on `/`, matching the original site. Add new
> routes as `app/<slug>/page.js` and export a `metadata` object per page.

---

## Performance

- `next/font` self-hosts Inter + Playfair Display — no render-blocking Google Fonts request.
- `next/image` serves AVIF/WebP with responsive `sizes`; the hero image is `priority`
  (LCP), everything else lazy-loads.
- Server Components keep client JavaScript minimal.
- `compress`, `reactStrictMode` and `poweredByHeader: false` set in `next.config.js`.

---

## Deployment (Vercel)

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **New Project → Import** the repository. The Next.js preset is detected
   automatically — no build settings need changing.
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` = your production origin.
4. Deploy.

Any Node-compatible host works too:

```bash
npm run build
npm start        # serves on PORT (default 3000)
```

For a static export, `next.config.js` can be switched to `output: 'export'`,
though the dynamic `sitemap.xml` / `robots.txt` routes are then emitted at build time.
