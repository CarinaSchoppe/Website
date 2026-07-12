# Design QA

- Source visual truth: `C:/Users/Carina/AppData/Local/Temp/codex-clipboard-f796875c-2c8d-4a66-9064-124d63f60416.png`
- Additional issue reference: `C:/Users/Carina/AppData/Local/Temp/codex-clipboard-368c4a4a-e4bd-4a5a-a183-0437b18017c9.png`
- Desktop implementation: `X:/Privat/Website/qa-home-desktop-final.png`
- Mobile implementation: `X:/Privat/Website/qa-home-mobile.png`
- Blog implementation: `X:/Privat/Website/qa-blog-mobile.png`
- Full-view comparison: `X:/Privat/Website/qa-home-comparison.png`
- Viewports: 1212 x 800 desktop; 390 x 844 mobile
- States: German, dark and light themes, homepage and blog routes

## Full-view comparison evidence

The side-by-side comparison shows the revised hero using the same portrait-led direction while removing the block/grid decoration, reducing the section height and enlarging the portrait. The result closes the empty gap between copy and portrait and brings the proof strip into the first desktop viewport.

## Focused region evidence

The mobile homepage and blog were checked separately because the reported issues were responsive. At 390 px, both routes report a 375 px document width with no headings, paragraphs, buttons or links extending beyond the viewport. The blog category rail has a 375 px client width and a 1347 px scroll width. Touch scrolling is enabled and ArrowRight moved it from 0 to 224 px in browser verification.

## Required fidelity surfaces

- Fonts and typography: hierarchy remains consistent with the existing display type. Mobile hero and blog headings were reduced, letter spacing normalised and long German text allowed to wrap safely.
- Spacing and layout rhythm: hero height reduced; CTA buttons share one mobile row; portrait and location label are balanced without overlap; the next homepage section is visible in the first mobile viewport.
- Colors and visual tokens: dark and light themes were checked in-browser. Light mode uses dark headings and readable slate body copy; dark mode retains the cyan, violet and rose accent system.
- Image quality and asset fidelity: the supplied Carina portrait remains the primary asset, uses the circular mask correctly and keeps the face centred at desktop and mobile sizes.
- Copy and content: blog heading shortened, article arrows standardised to `→`, and unused legacy business/sales language removed from the runtime dictionary.

## Comparison history

1. P1: hero had excessive unused space and weak copy-to-portrait balance. Fixed by reducing the hero height, tightening columns, enlarging and centring the portrait, and removing decorative grid/skyline effects.
2. P1: mobile category chips appeared clipped without an obvious usable rail. Fixed with a full-width native horizontal scroller, visible scrollbar, touch momentum, scroll snapping and keyboard scrolling.
3. P2: mobile hero consumed nearly the full first viewport. Fixed by placing both primary CTAs in one row and reducing the portrait area; measured hero height fell from 753 px to 672 px.
4. P2: long mobile blog heading exceeded its content box. Fixed with shorter copy, responsive type and safe wrapping; no horizontal document overflow remains.

## Interaction and technical checks

- Primary navigation and sticky header present.
- Theme switch tested from the mobile menu.
- Blog category ArrowLeft and ArrowRight behavior tested.
- Browser console errors and warnings: none.
- Automated lint, 65 tests and production build pass.

## Findings

No actionable P0, P1 or P2 issues remain in the reviewed homepage hero and mobile blog category flow.

## Follow-up polish

The analytics consent panel remains intentionally prominent until a choice is made. It is functional and readable in both themes, but could be made more compact in a separate consent UX iteration.

final result: passed
