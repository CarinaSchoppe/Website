# Carina Sophie Schoppe Portfolio

Static bilingual portfolio site for **carinaschoppe.com**. The site presents Carina Sophie Schoppe as a person: projects, skills, credentials, professional timeline, blog articles and contact options.

Business training, consulting, offers and pricing are intentionally routed to **Luminovia Training & Consulting** at <https://luminovia.org>.

## Positioning

- `carinaschoppe.com`: personal portfolio, CV, projects, writing and public profile.
- `luminovia.org`: company website for training, consulting, project support, pricing and business enquiries.
- Retired business URLs such as `/training`, `/offers`, `/consulting` and `/pricing` show the portfolio’s 404 page. Business enquiries from the portfolio route to Luminovia.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Personal portfolio homepage with Luminovia brand reference. |
| `/projects` and `/software` | Software and technical project portfolio. |
| `/portfolio` | Alias to the project portfolio. |
| `/skills` | Portfolio skill map and publications. |
| `/credentials` | Academic, AI, cybersecurity, language and TAE40122 credentials. |
| `/my-way` | Professional timeline, including Cert IV TAE40122 completed in June 2026. |
| `/about` | Personal background and profile. |
| `/blog` and `/blog/:slug` | Articles on AI, digital education, governance and modern work. |
| `/contact` | Personal contact page plus Luminovia routing for business enquiries. |
| `/imprint` and `/privacy` | Legal and privacy pages. |

## Development

```bash
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

## Quality Gates

- Vitest coverage threshold: `99%` line coverage.
- Main route tests verify that sitemap routes render in German and English.
- Static identity tests verify `CNAME`, favicon files, sitemap and Luminovia logo assets.
- Route tests verify that the retired business pages return the portfolio’s 404 view and that contact still links to Luminovia.

## Static Hosting

The project is GitHub Pages compatible:

- Vite builds to `dist/`.
- `public/CNAME` contains `carinaschoppe.com`.
- `public/sitemap.xml` lists only portfolio routes, not business offer routes.
- `public/_headers` and `public/.htaccess` provide cache hints for hosts that support them.

## Design and media

- The personal portfolio uses a neutral palette with colour accents and the locally served Manrope typeface. Its OFL notice is in `public/fonts/`.
- The home page and biography use the original portraits in `public/images/`, with responsive WebP variants. The homepage illustrations follow the documented PRISMA and Automatic Mail Sender workflows. The OpenXLR screenshot is credited on the project page.
- The updated `Colorful CS Monogram.png` is used for the header and browser/touch icons. Browser/touch icon URLs include the source image version to refresh cached artwork. `public/images/carina-educator-consultant-ai-researcher.jpg` is a compressed 1200 × 630 share preview from the supplied `Carina_Schoppe_Banner_Consultant.png`; the crop removes only background at the top and bottom. Static and client-rendered Open Graph and Twitter metadata use this preview with the current Educator, Consultant and AI Researcher positioning. The Person schema retains the original portrait.
- The default is the light palette. Visitors can save a different appearance and switch between German and English.
- Luminovia uses the supplied compact icon on Home and Contact. The About page uses the supplied full logo as a 416 px WebP, displayed at 208 px with reserved dimensions and lazy loading.
- GitHub Pages deploys automatically when changes reach `main`. Review branches and draft pull requests leave the live site unchanged.
