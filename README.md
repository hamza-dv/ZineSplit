<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg">
    <img alt="ZineSplit" src="assets/logo-light.svg" width="420">
  </picture>
</p>

<p align="center"><b>Read your printed zine as a book.</b></p>

<p align="center">
  <a href="https://hamza-dv.github.io/ZineSplit/"><b>Try it in your browser</b></a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="#controls">Controls</a> ·
  <a href="#preparing-your-images">Preparing images</a> ·
  <a href="#faq">FAQ</a>
</p>

---

Export each printed sheet of your zine as an image and drop the images in. ZineSplit cuts every image down the middle, puts the pages back in reading order, and stands the zine on your shelf with its cover facing out. Open it to read as two-page spreads, or export it as a **PDF in page order** or as **separate page images** for printing.

<p align="center"><img alt="The shelf: four zines standing cover-out like a magazine rack" src="docs/shelf.png" width="860"></p>

It's a single HTML page. There's nothing to install, and your artwork never leaves your computer.

## Features

- **The shelf.** A magazine rack holding all your zines, front covers out. Zines are saved in your browser, so they are there next time.
- **Cut and reorder.** Each sheet is cut down the middle and the pages go back into reading order, front cover first and back cover last.
- **Read as a book.** Two-page spreads with a page turn, arrow keys, swipe, numbered page buttons, and a full screen mode that shows only the pages.
- **Export a PDF.** One PDF with every page in reading order, cut from your sheets.
- **Export page images.** A ZIP of lossless PNGs (`page-01.png`, `page-02.png` ...) in reading order.
- **Proof as you go.** Read a zine before every sheet is in; missing sheets show as blank pages.
- **Dark and light themes**, and it works offline.

## Quick start

1. **Open ZineSplit.** Use the [online version](https://hamza-dv.github.io/ZineSplit/), or download this repo (**Code → Download ZIP**), unzip it and double-click `index.html`.
2. **Add a zine.** Choose **Add a zine** on the shelf, give it a name and pick the page count (4, 8, 12 ... 48). A 24-page zine needs 12 images.
3. **Drop each sheet when prompted.** ZineSplit asks for one image at a time, for example *"Drop the image with pages 6 and 19"*. Drop files anywhere on the window or use **Choose image**. Dropping several files at once fills the next sheets in file-name order.
4. **Read or shelve it.** **Read your zine** opens it as a book; **Save to shelf** puts it away for later.
5. **Export.** On the shelf, hover over a zine for **PDF** and **Images**. In the reader, use **Export PDF** and **Page images** in the top bar.

No sheets ready yet? Choose **Add a sample zine** on the shelf.

<p align="center">
  <img alt="Setup: five of twelve sheets added, asking for the image with pages 6 and 19" src="docs/setup.png" width="49%">
  <img alt="Reader: pages 12 and 13 as an open spread, with numbered page buttons" src="docs/reader.png" width="49%">
</p>

## Controls

| Action | How |
|---|---|
| Next / previous page | <kbd>→</kbd> / <kbd>←</kbd>, the on-screen arrows, or click the right / left page |
| Touch screens | Swipe left or right |
| Jump to the covers | <kbd>Home</kbd> / <kbd>End</kbd> |
| Jump to a page or spread | Click its number under the book |
| Show the toolbar while reading | Move the pointer to the top of the window, or tap |
| Back to the shelf | **Shelf**, or click the ZineSplit logo |
| Single page or two-page spread | The view button in the toolbar |
| Full screen | **Full screen**, or <kbd>F</kbd> (<kbd>Esc</kbd> exits) |
| Change images or the page count | **Edit pages** |

## Preparing your images

ZineSplit is for zines laid out **one landscape sheet per image, folded in half**, as you would in Affinity, Illustrator, Photoshop, Canva or Figma. Each image is **one printed side of a sheet**, 11 × 8.5 in, which folds into two 5.5 × 8.5 in pages. The pages on each sheet are in *printing order*, which is hard to proof by eye; ZineSplit puts them back in reading order.

For a 24-page zine, the 12 images in order are:

| Image | Left half | Right half | | Image | Left half | Right half |
|:-:|:-:|:-:|---|:-:|:-:|:-:|
| 1 | 24 (back cover) | 1 (front cover) | | 7 | 18 | 7 |
| 2 | 2 | 23 | | 8 | 8 | 17 |
| 3 | 22 | 3 | | 9 | 16 | 9 |
| 4 | 4 | 21 | | 10 | 10 | 15 |
| 5 | 20 | 5 | | 11 | 14 | 11 |
| 6 | 6 | 19 | | 12 | 12 | 13 |

You don't need to memorise this: the setup screen labels every slot with its page numbers. If your images already hold two consecutive pages each (1 | 2, 3 | 4 ...), choose **Pages in order** instead of **Printed sheets**.

**Exporting tips**

- Export one image per sheet side ("export artboards" or "export all pages"), as PNG, JPEG or WebP.
- **Name files so they sort in order**, like `sheet-01.png`, `sheet-02.png`. Numbers sort naturally, so `sheet-2` comes before `sheet-10`.
- **150 dpi** (1650 × 1275 px per sheet) looks sharp and loads quickly. Use 300 dpi only if people will zoom in a lot.
- **Hide guide layers first.** Fold lines or crop marks on the centre of the sheet show as a faint edge on the cut.

## FAQ

<details>
<summary><b>The pages look out of order.</b></summary>

Check the file names. Files are sorted by name, so `sheet-1` ... `sheet-12` works, and so does `sheet-01` ... `sheet-12`. Use **Edit pages** and click a sheet to replace any image that landed in the wrong slot.
</details>

<details>
<summary><b>There is a thin line down the middle of my pages.</b></summary>

A fold line or guide was included in the export. Hide that layer and export again.
</details>

<details>
<summary><b>It says my images are portrait.</b></summary>

ZineSplit expects landscape images that split into two pages. Export each printed sheet side as a landscape image.
</details>

<details>
<summary><b>Where are my zines stored?</b></summary>

In your browser's storage on this computer. Clearing site data for the page removes them, so keep your original sheet images.
</details>

<details>
<summary><b>How is the PDF made?</b></summary>

Each page is cut from its sheet at full size and written into the PDF as a JPEG, in reading order. Page size follows your sheet: 5.5 × 8.5 in for an 11 × 8.5 in sheet. Page images are exported as lossless PNGs.
</details>

<details>
<summary><b>Is my artwork uploaded anywhere?</b></summary>

No. Images are read and stored only in your browser, even when you use the online version.
</details>

<details>
<summary><b>It is slow on my phone.</b></summary>

Large images use a lot of memory. Export at 150 dpi or lower for phones and older computers.
</details>

## How it works

ZineSplit never edits your images. Each page is a box showing one half of a sheet image, and a page's position in the book decides which half of which image it shows, using standard folded-booklet order: for an N-page zine, the front of sheet *k* is pages N−2k | 2k+1 and the back is 2k+2 | N−2k−1. The page turn is a CSS 3D rotation, and the PDF and ZIP writers are built in.

The whole app is [`index.html`](index.html) plus a `fonts` folder: no frameworks, no build step, no dependencies.

## Contributing

Issues and pull requests are welcome. Edit `index.html`, open it in a browser, and test with **Add a sample zine**.

Ideas that would be useful:

- Open a single PDF and treat each page as a sheet
- Right-to-left reading order

## License

[MIT](LICENSE) © 2026 Hamza
