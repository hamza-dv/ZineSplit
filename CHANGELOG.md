# Changelog

## 2.1.0

- Import a PDF from the shelf (or drop one on it): single pages in reading order, printed sheets in folded order, or two pages per PDF page.
- Zines can now have up to 96 pages.
- On iPhone, exported PDFs save to Files.
- PDF.js is bundled in `vendor/`, so PDF import works offline too.

## 2.0.0

- New shelf: a magazine rack where every zine stands with its front cover out. Add, open and remove zines; they are saved on the device.
- Export a zine as a PDF in page order, or as a ZIP of page images, from the shelf (hover a zine) or from the reader.
- Zine names.
- Fonts are bundled so ZineSplit works offline.

## 1.1.0

- Dark theme by default, with a sun/moon switch (remembered in this browser).
- Immersive reader: opening a zine goes full screen and shows only the book, the side arrows and numbered page buttons. Move the mouse to the top edge to bring the toolbar back.
- Page dots are now numbered buttons (1, 2-3, 4-5 ... 24) that jump straight to that spread.
- True full screen (F) hides everything except the pages: no logo, toolbar, arrows or numbers. Use the arrow keys; a hint fades after a few seconds and the cursor hides when idle.
- Page colour is read from each image's own corners, so the app never shows a different white around your PNG.
- New halftone desk texture, a lamp-lit glow behind the book, and a new logo mark in the toolbar.

## 1.0.0

- Guided setup: choose the total page count, then drop each sheet image when prompted.
- Cuts every image down the middle into two pages and restores book order.
- Two-page spreads with a page-turn animation; front cover and back cover show alone.
- Arrow keys, on-screen arrows, clicking a page, swipe on touch screens, jump dots, full screen.
- "Printed sheets" and "Pages in order" layouts.
- Opens with partially filled zines; empty sheets show as blank pages.
- Built-in sample zine.
- Single-page view for phone-sized windows, with a toggle.
