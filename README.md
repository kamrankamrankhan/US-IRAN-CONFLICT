# US Iran Conflict

News and analysis site covering the US–Iran war, Middle East tensions, oil markets, and related geopolitics. Built with Next.js App Router, Keystatic CMS, and SEO-focused static generation.

**Live site:** [usiranconflict.com](https://usiranconflict.com)

## Features

- Homepage with **Latest · Recent** hero and rolling **Last 14 days** sidebar
- Blog articles at `/blog/[slug]` (static catalog + Keystatic `.mdoc` posts)
- Topic guides, featured analysis, breaking news feed, and live YouTube coverage
- Keystatic admin at `/keystatic` for publishing without editing code
- SEO: metadata, JSON-LD, sitemap, RSS, Google News feed, canonical URLs
- Google AdSense (standard site script in root layout — not AMP)
- Contact form via EmailJS
- Vercel Analytics and Speed Insights
- Lenis smooth scrolling (lazy-loaded on the client)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, TypeScript, Tailwind CSS 3 |
| CMS | Keystatic (local `.mdoc` files in repo) |
| Content | Markdoc for Keystatic bodies; static posts in `src/content/blogs.ts` |
| Animation | GSAP, Lenis (client-only, dynamic import) |
| Deploy | Vercel |

## Quick Start

```bash
# Install dependencies
npm install

# Copy env template and fill in optional keys
cp env.example .env.local

# Development (http://localhost:3000)
npm run dev

# Clean cache + dev (use after dependency or config changes)
npm run dev:fresh

# Production build
npm run build

# Run production server locally
npm start

# Lint
npm run lint
```

If port 3000 is in use:

```bash
fuser -k 3000/tcp
npm run dev
```

## Environment Variables

Copy `env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT` | AdSense publisher ID (`ca-pub-…`). Leave empty to disable ads locally. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification (optional) |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key for contact form |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |

## Publishing Blog Posts

### Option A — Keystatic (recommended)

1. Run `npm run dev`
2. Open [http://localhost:3000/keystatic](http://localhost:3000/keystatic)
3. Create or edit a post (title, excerpt, publish date, hero image, Markdoc body)
4. Commit the new `.mdoc` file under `src/content/keystatic-posts/`
5. Push and deploy

New Keystatic posts are merged with the static catalog in `getAllBlogsMerged()`. The **newest post** (by publish date, or file mtime when the date is backdated) appears in the homepage **Latest · Recent** hero until a newer post is published.

### Option B — Static catalog

Add or edit entries in `src/content/blogs.ts`. Keystatic posts with the same slug override static entries.

### Hero image URLs

- **Local images:** paths under `public/`, e.g. `/gallery-6.jpg`
- **Remote images:** hostnames must be listed in `src/lib/image-remote-hosts.ts` for `next/image`, or the `CoverImage` component falls back to a native `<img>` tag

## Configuration

| File | What to edit |
|------|----------------|
| `src/config.ts` | Site title, URL, contact, hero nav, topic pages, footer links |
| `keystatic.config.ts` | Keystatic collection schema |
| `src/content/blogs.ts` | Legacy/static blog posts |
| `src/content/keystatic-posts/*.mdoc` | CMS-authored posts |
| `src/lib/image-remote-hosts.ts` | Allowed remote image hostnames for optimization |
| `next.config.ts` | Images, headers, Keystatic serverless bundle paths |

Homepage ISR revalidates every **2 minutes** (`src/app/page.tsx`) so new posts appear soon after deploy.

## Project Structure

```
US-IRAN-CONFLICT/
├── src/
│   ├── app/                    # Next.js routes (pages, API, sitemap, RSS)
│   │   ├── page.tsx            # Homepage (server; loads merged blogs)
│   │   ├── blog/[slug]/        # Article pages
│   │   ├── blogs/              # All articles listing
│   │   ├── keystatic/          # CMS admin UI
│   │   └── layout.tsx          # Root layout, AdSense, Providers
│   ├── views/                  # Page-level client/server views
│   ├── sections/               # Header, Hero, Content, Footer
│   ├── components/             # Shared UI (CoverImage, JSON-LD, forms)
│   ├── content/
│   │   ├── blogs.ts            # Static blog catalog
│   │   └── keystatic-posts/    # Keystatic .mdoc files
│   ├── lib/
│   │   ├── get-all-blogs.ts    # Merges static + Keystatic posts
│   │   ├── blog-sort.ts        # Date / sortTimeMs ordering
│   │   ├── seo.ts              # Server SEO helpers
│   │   ├── seo-client.ts       # Lightweight client SEO (layout)
│   │   └── seo-blog.ts         # Per-post SEO without blogs catalog import
│   └── config.ts               # Site-wide content config
├── public/                     # Static assets (images, favicon, manifest)
├── keystatic.config.ts
├── next.config.ts
└── env.example
```

## Deployment (Vercel)

1. Connect the GitHub repo to Vercel (framework preset: **Next.js**)
2. Set environment variables in the Vercel project settings
3. Deploy — Keystatic `.mdoc` files are included in serverless bundles via `outputFileTracingIncludes` in `next.config.ts`

After publishing a new post, push to `main` (or your production branch). The homepage updates within the revalidate window without a full redeploy, but **new `.mdoc` files must be committed and deployed** so they exist on the server.

## SEO & Feeds

- `/sitemap.xml` — dynamic sitemap (blogs + topics)
- `/rss.xml` — RSS feed
- `/google-news.xml` — Google News sitemap
- `/robots.txt` — crawl rules

Structured data (Organization, WebSite, FAQ, NewsArticle) is rendered via JSON-LD components.

## AdSense

This is a **standard HTML site**, not AMP. Only the global AdSense script in `src/app/layout.tsx` is required. Enable **Auto ads** or create display units in the [AdSense dashboard](https://www.google.com/adsense); do not add `amp-auto-ads` markup.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run dev:fresh` | Remove `.next` cache, then start dev |
| `npm run build` | Production build |
| `npm start` | Serve production build (runs `prestart` check) |
| `npm run clean` | Delete `.next` and webpack cache |
| `npm run lint` | ESLint |

## License

Private project. All rights reserved.
