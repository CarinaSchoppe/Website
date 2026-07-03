# Luminovia Training & Consulting Website

Static bilingual website for **Luminovia Training & Consulting**, led by CEO and founder **Carina Sophie Schoppe**. The site presents bookable training, consulting, offers, former client proof, projects, pricing, credentials and contact options in German and English.

Production repository: https://github.com/Luminovia-Training-Consulting/Website.git

## Purpose

The website is designed to answer these visitor questions quickly:

- What does Luminovia Training & Consulting offer?
- Which training, consulting and project formats can be booked?
- Who is the CEO/founder and why is she credible?
- Which former client and education partner contexts support the profile?
- How can a company, academy, university or partner request a booking?

The site is static. There is no backend, no server-side rendering, no form endpoint and no production `.env` requirement.

## Core Features

- German and English language switch.
- Dark mode and light mode.
- Logo-based Luminovia visual system using navy, blue, cyan and gold.
- Static React/Vite app with React Router routes.
- GitHub Pages compatible custom-domain build for `https://carinaschoppe.com/`.
- Production build optimized through Preact compatibility mode.
- Direct contact model through email, phone and Google Calendar booking.
- Google Analytics consent banner.
- SEO metadata, canonical links, sitemap, robots file and JSON-LD structured data.
- GitHub Pages deployment workflow that builds Vite into `dist`.

## Main Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage with hero, offers preview, customer proof, FAQ, CEO section and contact CTA. |
| `/training` | Detailed training topics, service cards, formats, audiences and downloadable assets. |
| `/offers` | Concrete bookable packages for training, consulting, curriculum, keynotes and larger programmes. |
| `/consulting` | Consulting portfolio for AI, IT, business, curriculum, roadmaps and digital enablement. |
| `/clients` | Former clients, education partners and anonymized testimonial patterns. |
| `/projects` | Project portfolio and publications connected to training and consulting practice. |
| `/pricing` | Net starting rates and consulting/project pricing on request. |
| `/about` | CEO/founder profile for Carina Sophie Schoppe. |
| `/contact` | Direct contact, appointment scheduler, email and phone links. |
| `/skills` | Capability and skill map. |
| `/keynotes` | Talks, guest lectures and expert sessions. |
| `/credentials` | Qualifications, certificates and teaching proof. |
| `/blog` | Long-form articles on AI, education, project management and automation risk. |
| `/imprint` | Legal notice. |
| `/privacy` | Privacy policy. |

Training detail pages live under `/training/:slug` and are generated from `src/data/trainingDetails.js`.

## Project Structure

```text
.
├── .github/workflows/
│   ├── node.js.yml          # CI: install, lint, build, test
│   └── static.yml           # GitHub Pages deployment from dist
├── public/
│   ├── images/              # Carina images and Luminovia logo assets
│   ├── publications/        # PDF publication downloads
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/          # Reusable UI components
│   ├── data/                # Profile, localized content, training details, SEO data
│   ├── pages/               # Route-level pages
│   ├── test/                # Vitest setup and render helpers
│   ├── App.jsx              # Router, theme, layout shell
│   ├── i18n.jsx             # German/English language provider
│   └── index.css            # Tailwind import, theme, animation and brand styling
├── vite.config.js           # Build, test and prerender route configuration
└── package.json
```

## Technology

- Vite
- React API for development and tests
- Preact compatibility for production browser build
- React Router
- Tailwind CSS via `@tailwindcss/vite`
- Vitest
- Testing Library
- jsdom
- ESLint flat config

The required Node version is declared in `package.json` as `>=24.0.0`; CI currently uses Node 26.

## Local Development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Default local URL:

```text
http://127.0.0.1:5173/
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Test Strategy

The project has unit, integration and full-route smoke coverage.

Important test files:

| File | Coverage |
| --- | --- |
| `src/App.test.jsx` | Language defaults, route rendering, contact links, pricing language switch. |
| `src/pages/PagesSmoke.test.jsx` | Main static routes render in English. |
| `src/pages/FullSiteRoutes.test.jsx` | Reads `public/sitemap.xml` and renders every internal app route. |
| `src/data/trainingDetails.test.js` | Every training topic, service chip and sitemap training detail page is connected. |
| `src/data/localizationQuality.test.js` | German localization text avoids common encoding/mojibake markers. |
| `src/pages/BlogPage.test.jsx` | Blog overview, carousel controls, drag/keyboard behavior and language switch. |
| `src/pages/BlogPostPage.test.jsx` | Full article rendering, German version and unknown slug redirect. |
| `src/components/AnalyticsConsent.test.jsx` | Consent decline/accept behavior and Google tag script loading. |
| `src/components/ClientProofSection.test.jsx` | Client proof and testimonial card rendering. |
| `src/utils/browser.test.js` | Storage wrappers and stale chunk error detection. |

Run all tests:

```bash
npm test
```

The enforced coverage threshold in `vite.config.js` is:

```text
lines: 99%
```

Vitest still reports statements, branches and functions so weaker areas remain visible in CI output, but the hard quality gate is 99% line coverage across application source files.

## Full-Site Test Code

`src/pages/FullSiteRoutes.test.jsx` is the broadest route-level safety net. It:

- reads every URL from `public/sitemap.xml`,
- keeps only internal app routes,
- excludes PDF/download assets,
- renders each route through `App`,
- verifies that a `<main>` and level-one heading exist,
- fails if the rendered page or browser title is a 404,
- checks that primary navigation exposes Training, Consulting, Offers, Clients, Projects, CEO and Contact.

This test is meant to catch broken routes whenever the sitemap, router or navigation changes.

## SEO and Static Route Generation

SEO is handled in two places:

- `src/components/Seo.jsx` updates runtime metadata and JSON-LD.
- `vite.config.js` emits static `index.html` files for important routes during build.

Production builds use the Vite base path `/` for the custom domain `carinaschoppe.com`, so generated assets, public files and internal routes work on the live root domain.

When adding a major page, update:

1. `src/App.jsx`
2. `src/data/profile.js` if it belongs in navigation
3. `src/i18n.jsx` navigation labels
4. `src/components/Seo.jsx`
5. `vite.config.js` `prerenderRoutes`
6. `public/sitemap.xml`
7. tests, especially `FullSiteRoutes.test.jsx` if route filtering changes

## Deployment

The target remote is:

```text
https://github.com/Luminovia-Training-Consulting/Website.git
```

Deployment runs through `.github/workflows/static.yml`:

1. checkout repository,
2. setup Node.js 26,
3. `npm ci`,
4. `npm run build`,
5. upload `./dist`,
6. deploy to GitHub Pages.

CI runs through `.github/workflows/node.js.yml`:

1. `npm ci`,
2. `npm run lint --if-present`,
3. `npm run build --if-present`,
4. `npm test --if-present`.

## Assets

Luminovia logo assets:

- `public/images/luminovia-logo-full.png`
- `public/images/luminovia-logo-mark.png`

Carina profile images remain in `public/images/` and are used for the CEO/about sections.

Downloadable public assets include:

- `public/lecturer.zip`
- `public/carina-sophie-schoppe-lecturer-profile.html`
- `public/carina-sophie-schoppe-training-portfolio.html`
- `public/carina-sophie-schoppe-ai-it-training-catalogue.html`
- PDFs in `public/publications/`

## Content Maintenance

Most business content is data-driven:

- `src/data/profile.js`: company profile, contact links, image paths and navigation.
- `src/data/content.js`: English base content.
- `src/data/localizedContent.js`: German localized content and localized mappings.
- `src/data/homeContent.js`: homepage trust stats, service offerings and FAQ content.
- `src/data/trainingDetails.js`: detailed training pages and topic link mapping.
- `src/data/publications.js`: publication cards and PDF links.
- `src/i18n.jsx`: UI labels, homepage strings and contact copy.

Prefer editing these data files before hardcoding copy into components.

## Known Build Note

Vite may print this warning during build:

```text
[INEFFECTIVE_DYNAMIC_IMPORT] src/data/localizedContent.js is dynamically imported by src/components/Seo.jsx but also statically imported ...
```

The build still succeeds. The warning means the module cannot be split into a separate lazy chunk because it is also imported statically elsewhere.

## Pre-Push Checklist

Before pushing changes:

```bash
npm test
npm run build
git status -sb
```

For rendered UI changes, also verify at least:

- desktop dark mode,
- desktop light mode,
- mobile dark mode,
- language switch,
- contact links,
- no horizontal overflow,
- no framework error overlay.

## License

The repository includes the license files committed in the project. Website copy, imagery and brand assets belong to their respective owners and should not be reused outside the Luminovia project without permission.
