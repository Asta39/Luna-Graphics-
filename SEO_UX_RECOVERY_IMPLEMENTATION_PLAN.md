# Luna Graphics SEO & UX Recovery Implementation Plan

## Objective

Make Luna Graphics a fully working, crawlable, fast website that Google can index reliably. The immediate target is to move from roughly 3 to 5 indexed pages to 50+ indexed pages within 60 days after deployment, while improving user experience and Core Web Vitals.

## Current diagnosis

The site is a Vite React single-page app with many pages, products, blog posts, services, and static assets. Vite compilation succeeds, but the full production build currently fails during prerender because Puppeteer Chrome is missing and the Google Places API key is invalid. The project also has SEO blockers: broken internal links, root route confusion, SPA fallback soft 404s, missing/fragile prerendering, huge JS/data bundles, and unoptimized images.

## Success criteria

- `npm run build` succeeds locally and in deployment.
- `/` is the primary homepage, `/shop` is the shop.
- No internal links point to dead routes such as `/contact-page`, `/gallery-page`, `/service-detail-page`, or `/homepage`.
- Sitemap includes homepage, static pages, blog posts, products, and services.
- Prerender generates static HTML for all indexable pages.
- Missing dynamic content renders a noindex 404 page instead of redirecting client-side.
- Initial JS bundle is split into route chunks.
- Largest images are compressed and lazy-loaded where appropriate.
- Google Search Console validates sitemap and begins indexing key pages.

---

## Phase 0: Project safety and baseline, half day

### Tasks

1. Initialize or restore Git tracking if this folder is meant to be the project root.
2. Keep the generated `package-lock.json` and commit it.
3. Add baseline scripts to `package.json`:
   - `build:vite`: `vite build --sourcemap`
   - `prerender`: existing prerender command
   - `build`: `npm run fetch-reviews && npm run build:vite && npm run prerender`
   - `validate:links`: new script to detect dead route strings
   - `validate:seo`: new script to inspect sitemap/prerender output
4. Create `.env.example` and remove real secrets from committed files.
5. Rotate any exposed API keys, especially OpenAI, Anthropic, Gemini, Perplexity, Google Places, Supabase, Stripe, and EmailJS keys.

### Acceptance checks

- `git status` shows intentional tracked files only.
- `.env` is ignored.
- `.env.example` contains variable names but no real values.
- `package-lock.json` exists.

---

## Phase 1: Emergency indexing fixes, week 1

### 1.1 Fix homepage routing

File: `src/Routes.jsx`

Change root route to homepage and keep shop on `/shop`.

```jsx
<Route path="/" element={<Homepage />} />
<Route path="/shop" element={<Shop />} />
```

Recommended compatibility route:

```jsx
<Route path="/homepage" element={<Navigate to="/" replace />} />
```

This preserves old links while making `/` canonical.

### 1.2 Fix broken internal links

Search for these route strings and replace them:

- `/contact-page` -> `/contact`
- `/gallery-page` -> `/gallery`
- `/homepage` -> `/`
- `/service-detail-page` -> correct concrete route, usually `/services/large-format`, `/services/uv-printing`, `/services/cnc-cutting`, `/services/laser-cutting`, `/services/t-shirt-printing`, or `/corporate-services`

Files called out by prior crawl findings:

- `src/pages/homepage/components/GoogleReviews.jsx`
- `src/pages/homepage/components/ServicesGrid.jsx`
- `src/pages/homepage/components/MachineShowcase.jsx`
- `src/pages/t-shirt-printing/index.jsx`
- `src/pages/cnc-cutting/index.jsx`
- `src/pages/uv-printing/index.jsx`
- `src/pages/plotting/index.jsx`
- `src/pages/gallery/index.jsx`
- `src/pages/large-format/index.jsx`

Also run a repo-wide check for string literals and `to="..."` links, not only `navigate(...)`.

### 1.3 Fix obvious runtime/maintenance defects

- Rename `src/components/ui/CookieSettingsButton,.jsx` to `src/components/ui/CookieSettingsButton.jsx` and update imports.
- Confirm/fix `src/components/ErrorBoundary.jsx` typo if present: `cl assName` -> `className`.
- Confirm/fix `src/data/products.js` typo if present: `turnaround: '1 day`'` -> `turnaround: '1 day'`.
- Remove production `console.log` calls from shop and EmailJS flows.

### 1.4 Fix dev server exposure

File: `vite.config.mjs`

Use localhost by default:

```js
server: {
  port: 4028,
  host: '127.0.0.1',
  strictPort: true,
}
```

If external device testing is needed, expose it intentionally through an env flag.

### 1.5 Dependency triage

Upgrade security-sensitive dependencies first:

- `vite` to a patched v5 version or newer after testing.
- `react-router-dom` to `6.30.4+`.
- `postcss` to `8.5.15+`.

Then remove unused dependencies only after verifying imports:

- likely removable: `redux`, `@reduxjs/toolkit`, `react-helmet`
- investigate before removing: `d3`, `recharts`, `@tailwindcss/line-clamp`, `@dhiwise/component-tagger`

Important: `@dhiwise/component-tagger` appears to pull in `next`. It should probably be development-only and disabled in production.

### Acceptance checks

- `npm audit` has no high vulnerabilities and preferably no production vulnerabilities.
- `npm run build:vite` succeeds.
- Link scan finds zero known-bad internal route strings.
- `/` renders homepage content.
- `/shop` renders shop content.

---

## Phase 2: Crawlability and static HTML, week 2

### 2.1 Make prerender reliable

Current problem: Vite build succeeds, but full build fails because Puppeteer Chrome is missing. Fix deployment setup first.

Recommended package scripts:

```json
{
  "scripts": {
    "postinstall": "node scripts/fetch-reviews.js || true",
    "puppeteer:install": "npx puppeteer browsers install chrome",
    "build:vite": "vite build --sourcemap",
    "build": "npm run fetch-reviews && npm run build:vite && npm run prerender"
  }
}
```

In CI/deploy, run:

```bash
npm ci
npm run puppeteer:install
npm run build
```

Also fix Google Places config. If the API fails, the build should warn and use existing cached review data, not silently generate fake data every time.

### 2.2 Generate a canonical route manifest

Create `src/data/routes.js` or `scripts/route-manifest.js` as the single source of truth for indexable routes.

It should include:

- static routes: `/`, `/shop`, `/contact`, `/gallery`, `/about`, `/team`, `/faq`, legal pages
- service routes: `/services/large-format`, etc.
- dynamic blog routes: `/blog/:slug`
- dynamic product routes: `/shop/product/:productId`
- dynamic service detail routes: `/service/:serviceId`, only if those pages are real and distinct from `/services/...`

Both sitemap generation and prerendering should consume this same manifest. This prevents sitemap/prerender drift.

### 2.3 Fix sitemap generation

`scripts/generate-sitemap.js` should:

- include `/` with priority `1.0`
- exclude `/homepage`
- include all published blog posts
- include all indexable products
- include all service pages
- include accurate `lastmod` where possible
- write `public/sitemap.xml` and chunk files referenced by the sitemap index

Acceptance checks:

- `public/sitemap.xml` exists.
- No `<loc>` contains `/homepage`, `/contact-page`, `/gallery-page`, or placeholder routes.
- Product and blog URLs are present.
- XML validates.

### 2.4 Improve prerender script

Update `scripts/prerender.js` to:

- read the same route manifest as the sitemap
- prerender every URL in that manifest
- produce `build/prerender-manifest.json`
- exit non-zero if critical pages fail
- optionally continue on non-critical route failures but report them clearly
- close browser/server reliably

Do not rely only on existing sitemap files as the route source. Generate routes from data first, then use that list for both sitemap and prerender.

### 2.5 Replace client-side redirects for missing dynamic content

Files:

- `src/pages/BlogPost.jsx`
- `src/pages/shop/ProductDetail.jsx`
- any `ServiceDetail` page

Instead of redirecting missing content to `/blog` or `/shop`, render:

- `NotFound`
- `SEO` with `robots="noindex, nofollow"`

This reduces soft-404 confusion.

### 2.6 Hosting and 404 behavior

If staying on Apache:

- keep SPA fallback for known app routes
- cache static assets aggressively
- ensure prerendered static HTML files are uploaded
- make `/404.html` available if host supports it

Recommended longer-term hosting: Cloudflare Pages, Netlify, or Vercel. Static hosts with edge rules make correct 404 behavior, headers, compression, and caching easier.

### Acceptance checks

- `npm run build` succeeds end-to-end.
- `build/prerender-manifest.json` contains expected route count.
- `build/blog/<slug>/index.html` exists for blog posts.
- `build/shop/product/<id>/index.html` exists for products.
- Opening random prerendered HTML files shows real page content, not only an empty root div.
- `robots.txt` and sitemap are present in `build/`.

---

## Phase 3: Performance and UX, week 3

### 3.1 Add route-level code splitting

Update `src/Routes.jsx` to use `React.lazy` and `Suspense` for page components. Keep global providers outside lazy routes.

Prioritize splitting these heavy pages:

- blog pages, because `blogData.js` is very large
- product pages/shop, because product data and images are large
- gallery
- service pages

Use a lightweight skeleton fallback instead of a full-screen spinner where possible.

### 3.2 Split large data modules

Current problem: `blogData.js` and `products.js` are very large and likely contribute heavily to the JS bundle.

Short-term:

- lazy-load blog/product data only on routes that need it
- split product data by category
- split blog data by slug/category or generate JSON files in `public/data`

Better medium-term:

- move content to static JSON fetched per route
- or use a CMS/headless content source
- or migrate to SSR/SSG framework if the site keeps growing

### 3.3 Image optimization

Priority images:

- `public/images/shop-hero.png`
- `src/assets/homepage-hero (2).png`
- large product images
- large blog images

Tasks:

1. Convert large PNG/JPEG/JFIF images to WebP or AVIF.
2. Keep original fallback only where needed.
3. Add `loading="lazy"` to below-the-fold images.
4. Add width/height or fixed aspect-ratio containers to reduce CLS.
5. Use `fetchpriority="high"` only on the actual hero image for each page.
6. Avoid duplicating the same image in both `src/assets` and `public` unless required.

### 3.4 Bundle analysis

Install visualizer:

```bash
npm install -D rollup-plugin-visualizer
```

Use it locally to identify large modules, but do not open reports automatically in CI.

Target:

- initial JS gzip below 300 to 500 KB if possible
- route chunks loaded only when needed
- no unnecessary charting/CMS/dev dependencies in main bundle

### Acceptance checks

- Vite no longer emits a massive single 7 MB JS bundle.
- Lighthouse mobile LCP improves toward <2.5s.
- CLS is <0.1 on key pages.
- Shop, product, service, and blog pages load visibly faster on mobile throttling.

---

## Phase 4: Content, internal links, and structured data, week 4

### 4.1 Internal linking

Add or verify:

- breadcrumbs on all service, product, and blog pages
- related products on product pages
- related services on service pages
- related blog posts on blog and service pages
- HTML sitemap page at `/sitemap`

All internal navigation should use real `<a>`/React Router `<Link>` elements so crawlers can discover routes.

### 4.2 Schema markup

Ensure JSON-LD coverage:

- Homepage: `Organization`, `LocalBusiness`, `WebSite`
- Product page: `Product`, `Offer`, optional `AggregateRating`
- Blog post: `Article`, `BreadcrumbList`
- Service page: `Service`, `BreadcrumbList`, `LocalBusiness`
- Contact page: `ContactPage`, `LocalBusiness`
- About page: `AboutPage`, `Organization`

### 4.3 Metadata and canonicals

Every indexable page should have:

- unique title
- unique meta description
- canonical URL
- Open Graph image
- no accidental `noindex`

Every non-indexable or missing page should have:

- `robots="noindex, nofollow"`

### Acceptance checks

- Inspect 10 random pages and confirm unique title/description/canonical.
- Rich Results Test passes for product, blog, and service examples.
- No canonical points to `/homepage`.

---

## Phase 5: Search Console launch procedure

After deployment:

1. Submit `https://lunagraphics.co.ke/sitemap.xml` in Google Search Console.
2. Inspect live URLs:
   - `/`
   - `/shop`
   - `/services/large-format`
   - one product page
   - one blog post
3. Request indexing for priority URLs.
4. In Page Indexing report, validate fixes for:
   - Soft 404
   - Crawled, currently not indexed
   - Discovered, currently not indexed
5. Monitor Core Web Vitals weekly.
6. Check server logs or analytics for Googlebot crawling the prerendered pages.

---

## 60-day target metrics

| Metric | Current | Target |
| --- | --- | --- |
| Indexed pages | 3 to 5 | 50+ |
| Valid sitemap URLs | unclear | 100+ if content quality supports it |
| Build success | failing at prerender | passing consistently |
| Initial JS bundle | ~1.57 MB gzip single bundle | route-split, materially lower initial payload |
| Mobile LCP | likely poor | <2.5s on key pages |
| CLS | unknown | <0.1 |
| Internal broken links | many suspected | zero known broken internal routes |

---

## Recommended execution order

1. Secrets/env cleanup and lockfile.
2. Homepage routing and broken links.
3. Build/prerender reliability.
4. Sitemap and route manifest.
5. Missing-content 404 handling.
6. Route code splitting.
7. Image optimization.
8. Schema/internal linking.
9. Search Console submission and monitoring.

This order matters because Google cannot rank pages that are broken, missing from sitemap, or not rendered. Performance and schema matter more after the crawlability foundation is fixed.
