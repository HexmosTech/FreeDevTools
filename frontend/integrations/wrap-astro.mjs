
import fs from 'fs';
import path from 'path';

function moveFolder(src, dest) {
  if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.renameSync(src, dest);
}

// Wrap integration — runs before critical CSS / PlayForm Inline
export function wrapFDT() {
  return {
    name: 'wrap-astro',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distDir = dir && dir.pathname ? dir.pathname : String(dir);
        const src = path.join(distDir, '_astro');
        const dest = path.join(distDir, 'freedevtools', '_astro');

        if (fs.existsSync(src)) {
          console.log('📦 Wrapping _astro folder...');
          moveFolder(src, dest);
        }
      },
    },
  };
}

// Unwrap integration — runs after PlayForm Inline
export function unwrapFDT() {
  return {
    name: 'unwrap-astro',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distDir = dir && dir.pathname ? dir.pathname : String(dir);
        const src = path.join(distDir, 'freedevtools', '_astro');
        const dest = path.join(distDir, '_astro');

        if (fs.existsSync(src)) {
          console.log('📦 Unwrapping _astro folder...');
          moveFolder(src, dest);
        }
      },
    },
  };
}
