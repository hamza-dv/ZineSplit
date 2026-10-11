// Copies the web app into www/ for Electron and Capacitor, and drops the online font links
// so the packaged app uses the bundled fonts and works fully offline.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/<link[^>]*(fonts\.googleapis\.com|fonts\.gstatic\.com)[^>]*>\n?/g, '');
fs.writeFileSync(path.join(out, 'index.html'), html);
fs.cpSync(path.join(root, 'fonts'), path.join(out, 'fonts'), { recursive: true });
console.log('www/ ready');
