# Design QA

- Source visual truth: `C:/Users/Carina/AppData/Local/Temp/codex-clipboard-edada34d-da84-407e-875d-5f8fd01e3c8c.png`
- Additional issue reference: `C:/Users/Carina/AppData/Local/Temp/codex-clipboard-4236b4a7-e263-4b0f-a024-8f7c32ef2a8f.png`
- Desktop implementation: `X:/Privat/Website/qa-hero-final-1247.png`
- Mobile implementation: `X:/Privat/Website/qa-hero-final-390.png`
- Blog implementation: `X:/Privat/Website/qa-blog-mobile.png`
- Full-view comparison: `X:/Privat/Website/qa-hero-comparison.png`
- Viewports: 1247 x 517 desktop comparison; 390 x 844 mobile
- States: German, dark and light themes, homepage and blog routes

## Full-view comparison evidence

The side-by-side comparison shows the portrait growing from roughly 275 px to 440 px while the hero remains about 500 px tall. The tighter grid closes the empty gap between copy and portrait. The location label remains attached to the portrait and the proof strip follows immediately below.

## Focused region evidence

The mobile homepage and blog were checked separately because the reported issues were responsive. At 390 px, both routes report a 375 px document width with no headings, paragraphs, buttons or links extending beyond the viewport. The blog category rail has a 375 px client width and a 1347 px scroll width. Touch scrolling is enabled and ArrowRight moved it from 0 to 224 px in browser verification. A temporary Layout Instability observer measured CLS at 0 on both the 1247 px desktop and 390 px mobile states after the preview transition fix; the instrumentation was removed afterward.

## Required fidelity surfaces

- Fonts and typography: hierarchy remains consistent with the existing display type. Mobile hero and blog headings were reduced, letter spacing normalised and long German text allowed to wrap safely.
- Spacing and layout rhythm: the hero uses a tighter two-column grid; CTA buttons share one mobile row; portrait and location label are balanced without overlap. Six featured projects fill the desktop project panel and remove the previous empty column area.
- Colors and visual tokens: dark and light themes were checked in-browser. Light mode uses dark headings and readable slate body copy; dark mode retains the cyan, violet and rose accent system.
- Image quality and asset fidelity: the supplied Carina portrait remains the primary asset, uses the circular mask correctly and keeps the face centred at desktop and mobile sizes. Static preview and React now use the same responsive outdoor image family; the redundant mobile headshot request was removed.
- Copy and content: blog heading shortened, article arrows standardised to `→`, and unused legacy business/sales language removed from the runtime dictionary.

## Comparison history

1. P1: hero had excessive unused space and weak copy-to-portrait balance. Fixed by reducing the hero height, tightening columns, enlarging and centring the portrait, and removing decorative grid/skyline effects.
2. P1: mobile category chips appeared clipped without an obvious usable rail. Fixed with a full-width native horizontal scroller, visible scrollbar, touch momentum, scroll snapping and keyboard scrolling.
3. P2: mobile hero consumed nearly the full first viewport. Fixed by placing both primary CTAs in one row and reducing the portrait area; measured hero height fell from 753 px to 672 px.
4. P2: long mobile blog heading exceeded its content box. Fixed with shorter copy, responsive type and safe wrapping; no horizontal document overflow remains.
5. P1: Lighthouse reported CLS 0.163 with `static-home-shell__visual` as the culprit. Fixed by separating the fixed preview from the React root, reserving scrollbar width, matching desktop preview geometry, hiding the mismatched mobile preview content, and loading the production stylesheet synchronously. Post-fix CLS measurement: 0 desktop and 0 mobile.
6. P2: the desktop project column left a large unused area below three cards. Fixed by showing six projects above 1280 px; measured dashboard panel heights now range from 789 to 833 px.

## Interaction and technical checks

- Primary navigation and sticky header present.
- Theme switch tested from the mobile menu.
- Blog category ArrowLeft and ArrowRight behavior tested.
- Browser console errors and warnings: none.
- CLS measured at 0 for the reviewed desktop and mobile homepage states.
- Automated lint, 65 tests and production build pass.

## Findings

No actionable P0, P1 or P2 issues remain in the reviewed homepage hero and mobile blog category flow.

## Follow-up polish

The analytics consent panel remains intentionally prominent until a choice is made. It is functional and readable in both themes, but could be made more compact in a separate consent UX iteration.

final result: passed
