# Design QA

- Source visual truth: `C:/Users/Carina/.codex/generated_images/019f305c-9d6b-71f0-b616-cf6bf8156520/exec-bc77ca95-69ac-41e6-ad00-9e8ac83484c5.png`
- Desktop implementation: `X:/Privat/Website/qa-editorial-desktop.png`
- Mobile implementation: `X:/Privat/Website/qa-editorial-mobile.png`
- Desktop viewport: 1440 x 1024
- Mobile viewport: 390 x 844
- State: German, dark theme; light theme and English copy checked separately
- Route: `/`

## Full-view comparison evidence

The source and implementation were opened together at the same 1440 x 1024 desktop viewport. The implementation preserves the selected hybrid direction: compact sticky navigation, split portrait-led hero, two primary portfolio actions, tertiary Luminovia link, a compact selected-project index, qualifications rail and writing section. The final desktop hero is 515 px high, with the project section beginning at 580 px and project rows visible in the first viewport. This closely matches the source hierarchy without reproducing mock-only credentials or project claims.

## Focused region comparison evidence

The hero and navigation were checked at desktop and mobile sizes because portrait crop, title wrapping and header persistence are the most fidelity-sensitive areas. At 1440 px, the name uses the intended two-line wrap and the portrait fills the right half without masking or empty space. At 390 px, the hero is 740 px high, both CTAs remain visible, the portrait is naturally cropped and the next section begins inside the first viewport. The document width is 375 px at the 390 px browser viewport, with no horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: the implementation uses the existing system sans stack with the source's strong technical hierarchy, normal letter spacing, two-line desktop and mobile name wrapping, readable 14-16 px body copy and compact metadata. No truncation or clipped German/English text was observed.
- Spacing and layout rhythm: the desktop uses equal hero columns, a 515 px hero, thin section rules and compact project rows. Mobile collapses to one column with two equal CTA controls and a 320 px portrait area. Radii remain at 6 px or below and there are no nested cards.
- Colors and visual tokens: near-black/navy surfaces, cyan and restrained magenta accents, muted slate copy and thin neutral dividers match the source. Light mode remaps the same tokens to white, graphite and accessible cyan/magenta values.
- Image quality and asset fidelity: the real supplied Carina portrait is used through responsive WebP sources, with a large edge-to-edge crop and explicit dimensions. The Luminovia mark uses the supplied SVG asset. UI icons use one consistent Lucide stroke family; no placeholder art or handcrafted SVG substitutes remain.
- Copy and content: all visible project and credential details come from the existing portfolio data. German uses proper umlauts and natural wording; English switching updates the complete homepage and navigation. Luminovia remains a tertiary business redirect.
- Accessibility and behavior: semantic headings, labelled theme/language controls, alt text, reduced-motion support and visible mobile navigation are present. Sticky header top position measured 0 on all checked routes.

## Comparison history

1. P1: the previous dashboard composition did not match the selected editorial hierarchy. Fixed by rebuilding the homepage around a split hero, project index, qualification rail and writing section.
2. P1: the old fixed static homepage preview remained in the DOM and could visibly overlay the new React page. Fixed by deleting the preview markup and its complete legacy visual system from `index.html`; browser verification reports zero `.static-home-shell` elements.
3. P2: legacy theme rules added tinted backgrounds and shadows to the new header controls. Fixed with scoped editorial header tokens and a final cascade lock; navigation is now visually neutral with a two-colour active underline.
4. P2: the desktop name wrapped to three lines and the hero delayed project content. Fixed by balancing the hero columns, reducing the display maximum to 5rem and reducing desktop hero height from about 700 px to 515 px.
5. P2: the first mobile pass placed the next section below the initial viewport. Fixed by compacting mobile typography, placing CTAs in two columns and reducing the portrait area; the next section now begins at about 805 px.

## Primary interactions tested

- Sticky header on homepage, projects and blog routes
- Mobile menu open and close
- Dark-to-light theme switch from the mobile menu
- German-to-English language switch from the mobile menu
- `/projects` route content and absence of legacy sales wording
- Mobile blog category rail: 375 px client width, 1387 px scroll width, `overflow-x: auto`, no wrapping
- Browser console errors and warnings: none

## Findings

No actionable P0, P1 or P2 differences remain. The implementation uses the real portfolio content rather than the illustrative project and credential text in the generated mock; this is intentional and improves accuracy.

## Follow-up polish

- P3: article imagery could be introduced later if Carina adds a consistent set of original editorial thumbnails.

final result: passed
