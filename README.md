<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg">
    <img alt="ZineSplit" src="assets/logo-light.svg" width="420">
  </picture>
</p>

<p align="center"><b>Read your printed zine as a book.</b></p>

<p align="center">
  <a href="../../releases/latest"><img alt="Latest release" src="https://img.shields.io/github/v/release/hamza-dv/ZineSplit?style=flat-square&color=c9242b&label=release"></a>
  <img alt="Windows" src="https://img.shields.io/badge/Windows-0078D4?style=flat-square&logo=windows&logoColor=white">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black">
  <img alt="Android" src="https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white">
  <img alt="Browser" src="https://img.shields.io/badge/Browser-single%20HTML%20file-161d24?style=flat-square">
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/badge/license-MIT-161d24?style=flat-square"></a>
</p>

<p align="center">
  <a href="#download">Download</a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="#controls">Controls</a> ·
  <a href="#preparing-your-images">Preparing your images</a> ·
  <a href="#faq">FAQ</a> ·
  <a href="#building-from-source">Building</a>
</p>

---

Export each printed sheet of your zine as an image and drop the images in. ZineSplit cuts every image down the middle, puts the pages back in reading order, and shows the zine as two-page spreads you can turn with the arrow keys.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="docs/reader-light.png">
    <img alt="Reader: pages 12 and 13 of a 24-page zine as an open spread, with numbered page buttons underneath" src="docs/reader.png" width="860">
  </picture>
</p>

Everything happens on your device. Your artwork is never uploaded anywhere.

## Features

- **Guided setup.** Pick the page count, then ZineSplit asks for each sheet in turn and shows which two pages belong on it.
- **Real book order.** Folded-booklet imposition is undone for you, so the covers show alone and every inside spread lines up.
- **Page-turn reading.** A 3D page turn, arrow keys, swipe, click either page, or jump straight to any spread with the numbered buttons.
- **Distraction-free.** The toolbar fades away while you read, and full-screen mode shows nothing but the pages.
- **Dark and light themes.** Dark by default, one click to switch, and your choice is remembered.
- **Works with half-finished zines.** Missing sheets show as blank pages, so you can proof as you go.
- **Two layouts.** *Printed sheets* (24 | 1, 2 | 23 ...) or *Pages in order* (1 | 2, 3 | 4 ...).
- **Tiny and private.** One HTML file, no account, no tracking, works offline.

## Download

Get the latest version from the **[Releases page](../../releases/latest)**.

| Platform | File | How to run it |
|---|---|---|
| **Windows 10 / 11** | `ZineSplit-x.y.z-windows-setup.exe` | Double-click to install. If SmartScreen appears, choose **More info → Run anyway** (the app is not code-signed yet). An `.msi` is also provided. |
| **Linux** | `ZineSplit-x.y.z-linux-x86_64.AppImage` | Make it executable (`chmod +x ZineSplit-*.AppImage`) and run it. Works on most distributions. `.deb` and `.rpm` packages are also provided. |
| **Android 7+** | `ZineSplit-x.y.z-android.apk` | Open the file on your phone and allow **Install unknown apps** for your browser or file manager when asked. |
| **Any browser** | `ZineSplit-x.y.z.html` | Double-click it. It opens in your browser, with nothing to install. Works on macOS, ChromeOS and anything else with a modern browser. |

## Quick start

1. **Open ZineSplit.** Launch the app, or open the `.html` file in your browser.
2. **Pick the page count.** Choose how many pages the zine has (4, 8, 12 ... 48). A 24-page zine needs 12 images.
3. **Add each sheet when prompted.** ZineSplit asks for one image at a time, for example *"Drop the image with pages 6 and 19"*. Drop files anywhere on the window or use **Choose image**. Dropping several files at once fills the next sheets in file-name order.
4. **Read.** Click **Read your zine**. The front cover shows alone, then the spreads (2 | 3, 4 | 5 ...), and the back cover shows alone at the end.

Not ready with your own sheets yet? Click **See a sample zine** on the first screen.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="docs/setup-light.png">
    <img alt="Setup: five of twelve sheets added, with the prompt asking for the image with pages 6 and 19" src="docs/setup.png" width="860">
  </picture>
</p>

## Controls

| Action | How |
|---|---|
| Next / previous page | <kbd>→</kbd> / <kbd>←</kbd>, <kbd>Space</kbd> / <kbd>Shift</kbd>+<kbd>Space</kbd>, <kbd>PgDn</kbd> / <kbd>PgUp</kbd>, the on-screen arrows, or click the right / left page |
| Touch screens | Swipe left or right |
| Jump to the covers | <kbd>Home</kbd> / <kbd>End</kbd> |
| Jump to a spread | Click its numbered button under the book |
| Show the toolbar while reading | Move the pointer to the top of the window, or tap the screen |
| Single page or two-page spread | **Single page / Two-page spread** in the toolbar |
| Full screen | **Full screen** in the toolbar, or <kbd>F</kbd>. <kbd>Esc</kbd> exits |
| Dark or light theme | The sun / moon button, top right |
| Change images or the page count | **Edit pages** |

## Who it's for

ZineSplit is for people who lay out a zine **one landscape sheet per image, folded in half**, and want to read it back as a book before printing.

If you design this way (in Affinity, Illustrator, Photoshop, Canva, Figma and so on), each sheet holds two pages side by side in *printing order*, not reading order. A 24-page zine is 12 sheet sides: the first has the back cover on the left and the front cover on the right, the next has page 2 beside page 23, and so on. That is hard to proof by eye. ZineSplit lets you check page order, facing-page layouts and where the spreads fall before you waste paper.

It is not a general PDF reader. For zines already laid out as pages in reading order, use the **Pages in order** layout.

## Preparing your images

Each image is **one printed side of a sheet**, landscape, **11 × 8.5 in**. It folds in half into two 5.5 × 8.5 in pages, and ZineSplit cuts it exactly down the middle.

For a 24-page zine, the 12 images in order are:

| Image | Left half | Right half | | Image | Left half | Right half |
|:-:|:-:|:-:|---|:-:|:-:|:-:|
| 1 | 24 (back cover) | 1 (front cover) | | 7 | 18 | 7 |
| 2 | 2 | 23 | | 8 | 8 | 17 |
| 3 | 22 | 3 | | 9 | 16 | 9 |
| 4 | 4 | 21 | | 10 | 10 | 15 |
| 5 | 20 | 5 | | 11 | 14 | 11 |
| 6 | 6 | 19 | | 12 | 12 | 13 |

You don't need to memorise this. The setup screen labels every slot with its page numbers.

**Exporting tips**

- Use any app that can export one image per sheet side ("export artboards" or "export all pages"), as PNG, JPEG or WebP.
- **Name files so they sort in order**, for example `sheet-01.png`, `sheet-02.png`. Numbers sort naturally, so `sheet-2` comes before `sheet-10`.
- **150 dpi** (1650 × 1275 px per sheet) looks sharp on screen and loads quickly. Use 300 dpi only if people will zoom in a lot.
- **Hide guide layers first.** Fold lines, crop marks or guides on the centre of the sheet show up as a faint edge on the cut.
- PNG is best for flat colour and crisp text; WebP gives the smallest files.

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

ZineSplit expects landscape images that split into two pages. A portrait image is a single page. Export each printed sheet side as a landscape image.
</details>

<details>
<summary><b>Can I read it before every sheet is added?</b></summary>

Yes. Click **Read what I have**. Missing sheets appear as blank pages.
</details>

<details>
<summary><b>Does it work offline? Is my artwork uploaded?</b></summary>

It works offline. The only thing it fetches online is its fonts, and it falls back to your system fonts without them. Images are read and displayed locally and are never uploaded. Close the window and they are gone.
</details>

<details>
<summary><b>Windows says "Windows protected your PC".</b></summary>

That is SmartScreen, which warns about apps that aren't code-signed with a paid certificate. Click **More info → Run anyway**.
</details>

<details>
<summary><b>It is slow on my phone.</b></summary>

Large images use a lot of memory because they are unpacked into raw pixels. Export at 150 dpi or lower for phones and older computers.
</details>

## How it works

ZineSplit never edits your images. Each page is a box showing one half of a sheet image, and a page's position in the book decides which half of which image it shows, using standard folded-booklet order. For an N-page zine, the front of sheet *k* is pages N−2k | 2k+1 and the back is 2k+2 | N−2k−1. The page turn is a CSS 3D rotation.

The whole app is the single file [`index.html`](index.html), with no frameworks and no build step. The desktop and Android apps wrap that same file with [Tauri](https://tauri.app), which uses the system's own web view, so the installers stay small.

## Building from source

**Browser version:** nothing to build. Open `index.html`.

**Desktop and Android apps** need [Node.js](https://nodejs.org) 20+ and [Rust](https://rustup.rs), plus the [Tauri prerequisites](https://tauri.app/start/prerequisites/) for your system.

```sh
npm install
npm run dev            # run the desktop app
npm run build          # build installers for this OS, output in src-tauri/target/release/bundle
```

For Android, also install Android Studio with the SDK and NDK, then:

```sh
npx tauri android init
npm run android:build
```

### Releasing

Releases are built automatically by [GitHub Actions](.github/workflows/release.yml). Bump the version in `src-tauri/tauri.conf.json`, `src-tauri/Cargo.toml` and `package.json`, add a section to [CHANGELOG.md](CHANGELOG.md), then push a tag:

```sh
git tag v1.2.0
git push origin v1.2.0
```

The workflow builds the Windows, Linux and Android files and publishes them with the HTML file on a new release. The APK is signed with the key stored in the `ANDROID_KEYSTORE_B64` and `ANDROID_KEYSTORE_PASSWORD` repository secrets.

## Project layout

```
index.html               the whole app
assets/                  logo, icon and social preview
docs/                    screenshots used in this README
src-tauri/               desktop and Android wrapper (Tauri)
scripts/prepare-dist.mjs copies index.html into the app bundle
.github/workflows/       automated release builds
```

## Contributing

Issues and pull requests are welcome. For changes to the app itself, edit `index.html`, open it in a browser, and test with the built-in sample zine.

Ideas that would be useful:

- Open a single PDF and treat each page as a sheet
- Export the finished reading-order pages as separate images
- Right-to-left reading order

## License

[MIT](LICENSE) © 2026 Hamza
