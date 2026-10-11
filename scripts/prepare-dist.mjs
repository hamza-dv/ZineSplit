// Copies the single-file app into dist/ so Tauri can bundle it.
// index.html stays at the repo root so people can still double-click it.
import { mkdirSync, copyFileSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
copyFileSync('index.html', 'dist/index.html');
