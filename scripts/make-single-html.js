// Builds one self-contained ZineSplit-<version>.html: fonts and the app icon are
// embedded, so the file works on its own (offline, nothing next to it), and it
// carries the tags iPhones use when the page is added to the Home Screen.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const { version } = require(path.join(root, 'package.json'));
const out = path.join(root, 'dist-web');

const b64 = (file) => fs.readFileSync(path.join(root, file)).toString('base64');

let css = fs.readFileSync(path.join(root, 'fonts', 'fonts.css'), 'utf8');
css = css.replace(/url\(([^)]+\.woff2)\)/g, (_, f) => `url(data:font/woff2;base64,${b64(path.join('fonts', f))})`);

const appleTags = [
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="ZineSplit">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="black">',
  '<meta name="theme-color" content="#10141a">',
  `<link rel="apple-touch-icon" href="data:image/png;base64,${b64('build/icon.png')}">`,
].join('\n');

let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/<link[^>]*(fonts\.googleapis\.com|fonts\.gstatic\.com)[^>]*>\n?/g, '');
const fontLink = /<link rel="stylesheet" href="fonts\/fonts\.css">/;
if (!fontLink.test(html)) throw new Error('fonts/fonts.css link not found in index.html');
html = html.replace(fontLink, () => `${appleTags}\n<style>\n${css}</style>`);

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
const file = path.join(out, `ZineSplit-${version}.html`);
fs.writeFileSync(file, html);
console.log(`${path.relative(root, file)} ready (${Math.round(html.length / 1024)} KB)`);
