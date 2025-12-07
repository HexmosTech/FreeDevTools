import fs from 'fs';
import path from 'path';

/**
 * Astro integration to compile and copy worker.ts files to dist directory during build
 * This ensures the worker files are available at runtime in production as JavaScript
 */
export function copyWorkerFile() {
  return {
    name: 'copy-worker-file',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const projectRoot = process.cwd();
        // Always use project root's dist directory, not the dir parameter which may point to client
        const distDir = path.join(projectRoot, 'dist');

        const workers = [
          {
            source: path.join(projectRoot, 'db', 'svg_icons', 'svg-worker.ts'),
            dist: path.join(distDir, 'server', 'chunks', 'db', 'svg_icons', 'svg-worker.js'),
            name: 'SVG',
          },
          {
            source: path.join(projectRoot, 'db', 'png_icons', 'png-worker.ts'),
            dist: path.join(distDir, 'server', 'chunks', 'db', 'png_icons', 'png-worker.js'),
            name: 'PNG',
          },
          {
            source: path.join(projectRoot, 'db', 'emojis', 'emoji-worker.ts'),
            dist: path.join(distDir, 'server', 'chunks', 'db', 'emojis', 'emoji-worker.js'),
            name: 'EMOJI',
          },
          {
            source: path.join(projectRoot, 'db', 'tldrs', 'tldr-worker.ts'),
            dist: path.join(distDir, 'server', 'chunks', 'db', 'tldrs', 'tldr-worker.js'),
            name: 'TLDR',
          },
        ];

        // Try to use esbuild (available through Vite)
        const esbuild = await import('esbuild').catch(() => null);
        if (!esbuild) {
          throw new Error('esbuild not available');
        }

        for (const worker of workers) {
          // Create directory structure if it doesn't exist
          const distWorkerDir = path.dirname(worker.dist);
          if (!fs.existsSync(distWorkerDir)) {
            fs.mkdirSync(distWorkerDir, { recursive: true });
          }

          // Check if source file exists
          if (!fs.existsSync(worker.source)) {
            console.warn(`⚠️  ${worker.name} worker file not found at ${worker.source}`);
            continue;
          }

          try {
            await esbuild.default.build({
              entryPoints: [worker.source],
              outfile: worker.dist,
              format: 'esm',
              target: 'node18',
              bundle: false,
              platform: 'node',
              sourcemap: false,
            });
            console.log(`✅ Compiled ${worker.name} worker.js using esbuild to ${worker.dist}`);
          } catch (error) {
            console.error(`❌ Failed to compile ${worker.name} worker.ts with esbuild: ${error.message}`);
            throw new Error(`${worker.name} worker compilation failed. Please ensure esbuild is available or compile manually.`);
          }
        }
      },
    },
  };
}

