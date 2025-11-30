import fs from 'fs';
import path from 'path';

/**
 * Astro integration to compile and copy worker.ts to dist directory during build
 * This ensures the worker file is available at runtime in production as JavaScript
 */
export function copyWorkerFile() {
  return {
    name: 'copy-worker-file',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const projectRoot = process.cwd();
        // Always use project root's dist directory, not the dir parameter which may point to client
        const distDir = path.join(projectRoot, 'dist');

        const sourceWorkerPath = path.join(projectRoot, 'db', 'svg_icons', 'svg-worker.ts');
        const distWorkerPath = path.join(distDir, 'server', 'chunks', 'db', 'svg_icons', 'svg-worker.js');

        // Create directory structure if it doesn't exist
        const distWorkerDir = path.dirname(distWorkerPath);
        if (!fs.existsSync(distWorkerDir)) {
          fs.mkdirSync(distWorkerDir, { recursive: true });
        }

        // Check if source file exists
        if (!fs.existsSync(sourceWorkerPath)) {
          console.warn(`⚠️  Worker file not found at ${sourceWorkerPath}`);
          return;
        }

        try {
          // Try to use esbuild (available through Vite)
          const esbuild = await import('esbuild').catch(() => null);
          if (esbuild) {
            await esbuild.default.build({
              entryPoints: [sourceWorkerPath],
              outfile: distWorkerPath,
              format: 'esm',
              target: 'node18',
              bundle: false,
              platform: 'node',
              sourcemap: false,
            });
            console.log(`✅ Compiled worker.js using esbuild to ${distWorkerPath}`);
          } else {
            throw new Error('esbuild not available');
          }
        } catch (error) {
          console.error(`❌ Failed to compile worker.ts with esbuild: ${error.message}`);
          console.error(`   Attempting fallback: copying as .js (may not work if TypeScript syntax is used)`);
          // Last resort: try to copy and rename (won't work but shows the attempt)
          throw new Error(`Worker compilation failed. Please ensure esbuild is available or compile manually.`);
        }
      },
    },
  };
}

