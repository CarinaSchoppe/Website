# Carina Sophie Schoppe Portfolio

Static bilingual portfolio site for **carinaschoppe.com**. The site presents Carina Sophie Schoppe as a person: projects, skills, credentials, professional timeline, blog articles and contact options.

Business training, consulting, offers and pricing are intentionally routed to **Luminovia Training & Consulting** at <https://luminovia.org>.

## Positioning

- `carinaschoppe.com`: personal portfolio, CV, projects, writing and public profile.
- `luminovia.org`: company website for training, consulting, project support, pricing and business enquiries.
- Legacy business URLs such as `/training`, `/offers`, `/consulting` and `/pricing` render a Luminovia handoff page instead of direct offers.

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
npm install
npm run dev
npm run lint
npm test -- --run
npm run build
```

## Quality Gates

- Vitest coverage threshold: `99%` line coverage.
- Main route tests verify that sitemap routes render in German and English.
- Static identity tests verify `CNAME`, favicon files, sitemap and Luminovia logo assets.
- Legacy business-route tests verify handoff to Luminovia.

## Static Hosting

The project is GitHub Pages compatible:

- Vite builds to `dist/`.
- `public/CNAME` contains `carinaschoppe.com`.
- `public/sitemap.xml` lists only portfolio routes, not business offer routes.
- `public/_headers` and `public/.htaccess` provide cache hints for hosts that support them.

## Brand Notes

The Carina site may share some visual DNA with Luminovia, but the role is different. Carina should feel like a personal portfolio with a clear company reference. Luminovia should remain the stronger business and conversion site. If one site gets a full design overhaul, prioritize **carinaschoppe.com** so the two brands separate more clearly.
