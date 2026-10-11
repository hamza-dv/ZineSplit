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
  <a href="https://hamza-dv.github.io/zinesplit-app/"><img alt="iOS web app" src="https://img.shields.io/badge/iOS-web%20app-000000?style=flat-square&logo=apple&logoColor=white"></a>
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/badge/license-MIT-161d24?style=flat-square"></a>
</p>

<p align="center">
  <a href="#get-zinesplit">Get it</a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="#controls">Controls</a> ·
  <a href="#preparing-your-images">Preparing images</a> ·
  <a href="#faq">FAQ</a> ·
  <a href="#development">Development</a>
</p>

---

Export each printed sheet of your zine as an image and drop the images in. ZineSplit cuts every image down the middle, puts the pages back in reading order, and stands the zine on your shelf with its cover facing out. Open it to read as two-page spreads, or export it as a **PDF in page order** or as **separate page images** for printing.

<p align="center"><img alt="The shelf: four zines standing cover-out like a magazine rack" src="docs/shelf.png" width="860"></p>

Everything runs on your device. Your artwork is never uploaded anywhere.

## Features

- **The shelf.** A magazine rack holding all your zines, front covers out. Zines are saved on your device, so they are there next time.
- **Cut and reorder.** Each sheet is cut down the middle and the pages go back into reading order, front cover first and back cover last.
- **Read as a book.** Two-page spreads with a page turn, arrow keys, swipe, numbered page buttons, and a full screen mode that shows only the pages.
- **Export a PDF.** One PDF with every page in reading order, cut from your sheets.
- **Export page images.** A ZIP of lossless PNGs (`page-01.png`, `page-02.png` ...) in reading order.
- **Proof as you go.** Read a zine before every sheet is in; missing sheets show as blank pages.
- **Dark and light themes**, and it works fully offline.

## Get ZineSplit

| Platform | Get it | How to run it |
|---|---|---|
| **Windows 10 / 11** | [`ZineSplit-x.y.z-windows-setup.exe`](../../releases/latest) | Double-click to install, or use the `-windows-portable.exe`, which runs without installing. If SmartScreen appears, choose **More info → Run anyway** (the app is not code-signed). |
| **Linux** | [`ZineSplit-x.y.z-linux-x86_64.AppImage`](../../releases/latest) | `chmod +x` it and run it. On Debian / Ubuntu you can instead `sudo apt install ./ZineSplit-*.deb`. |
| **Android 7+** | [`ZineSplit-x.y.z-android.apk`](../../releases/latest) | Open it on your phone and allow installs from your browser or file manager the first time. New versions install over the old one and keep your shelf. |
| **iPhone / iPad** | **[hamza-dv.github.io/zinesplit-app](https://hamza-dv.github.io/zinesplit-app/)** | Open the link in **Safari**, then tap **Share → Add to Home Screen**. It opens full screen with its own icon and keeps your shelf on the device. |
| **Any browser** | [`ZineSplit-x.y.z.html`](../../releases/latest) | One file with everything inside. Double-click it to open. Nothing to install. |

All downloads are on the **[latest release](../../releases/latest)** page.

## Quick start

1. **Add a zine.** Open ZineSplit and choose **Add a zine** on the shelf.
2. **Name it and pick the page count** (4, 8, 12 ... 48). A 24-page zine needs 12 images.
3. **Drop each sheet when prompted.** ZineSplit asks for one image at a time, for example *"Drop the image with pages 6 and 19"*. Drop files anywhere on the window or use **Choose image**. Dropping several files at once fills the next sheets in file-name order.
4. **Read or shelve it.** **Read your zine** opens it as a book; **Save to shelf** puts it away for later.
5. **Export.** On the shelf, hover over a zine (or tap it on a phone) for **PDF** and **Images**. In the reader, use **Export PDF** and **Page images** in the top bar.

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

In the app's own storage on your device. Updating the app keeps them. Uninstalling the app, or clearing site data in a browser, removes them, so keep your original sheet images.
</details>

<details>
<summary><b>How is the PDF made?</b></summary>

Each page is cut from its sheet at full size and written into the PDF as a JPEG, in reading order. Page size follows your sheet: 5.5 × 8.5 in for an 11 × 8.5 in sheet. Page images are exported as lossless PNGs.
</details>

<details>
<summary><b>Is my artwork uploaded anywhere?</b></summary>

No. Images are read and stored only on your device, and ZineSplit works offline.
</details>

<details>
<summary><b>Why is iPhone a web link and not a download?</b></summary>

iPhones only install apps through Apple, and they can't run a downloaded HTML file. Added to the Home Screen from Safari, the web app behaves like an installed app and works offline.
</details>

<details>
<summary><b>It is slow on my phone.</b></summary>

Large images use a lot of memory. Export at 150 dpi or lower for phones and older computers.
</details>

## How it works

ZineSplit never edits your images. Each page is a box showing one half of a sheet image, and a page's position in the book decides which half of which image it shows, using standard folded-booklet order: for an N-page zine, the front of sheet *k* is pages N−2k | 2k+1 and the back is 2k+2 | N−2k−1. The page turn is a CSS 3D rotation, and the PDF and ZIP writers are built in, so there are no runtime dependencies.

The app is [`index.html`](index.html) plus a `fonts` folder. Windows and Linux builds wrap it in [Electron](https://www.electronjs.org), Android wraps it with [Capacitor](https://capacitorjs.com), and the browser build packs it into one self-contained HTML file.

## Development

```sh
npm install
npm run desktop        # run the desktop app
npm run dist           # build installers for this OS into dist/
npm run web:single     # build the one-file browser version into dist-web/
npx cap add android    # once, then:
npm run android:sync
cd android && ./gradlew assembleDebug    # test APK in android/app/build/outputs/apk/debug/
```

Windows builds need Windows, Linux builds need Linux, and Android needs the Android SDK and Java 21. To try changes quickly, open `index.html` in a browser and use **Add a sample zine**.

### Releasing

The [release workflow](.github/workflows/release.yml) builds everything on GitHub. Bump `version` in `package.json`, add a section to [CHANGELOG.md](CHANGELOG.md), then push a tag:

```sh
git tag v2.1.0
git push origin v2.1.0
```

The Windows, Linux, Android and browser files are attached to a new release, with the changelog section as its notes. The APK is signed with the key in the `ANDROID_KEYSTORE_B64` and `ANDROID_KEYSTORE_PASSWORD` repository secrets; always use the same key, or phones will refuse the update. Copy the new `ZineSplit-x.y.z.html` to [zinesplit-app](https://github.com/hamza-dv/zinesplit-app) as `index.html` to update the iPhone web app.

### Project layout

```
index.html            the whole app
fonts/                bundled fonts for offline use
electron/             Windows and Linux wrapper
capacitor.config.json Android wrapper settings
scripts/              build helpers (www/ folder, single-file HTML)
assets/, build/, resources/   logo and app icons
docs/                 README screenshots
```

## Contributing

Issues and pull requests are welcome. Ideas that would be useful:

- Open a single PDF and treat each page as a sheet
- Right-to-left reading order

## License

[MIT](LICENSE) © 2026 Hamza
