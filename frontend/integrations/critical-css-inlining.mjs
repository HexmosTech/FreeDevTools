import fs from 'fs/promises';
import path from 'path';
import Beasties from 'beasties';
import { fileURLToPath } from 'url';

export function performCriticalCssInline() {
  return {
    name: 'beasties-inline-critical-css',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        // const distDir = dir.toString();
        const distDir = fileURLToPath(dir);

        const indexPath = path.join(distDir, 'index.html');
        let html = await fs.readFile(indexPath, 'utf-8');


        const beasties = new Beasties({
          path: distDir,               // just dist/, where _astro folder lives
          publicPath: '/_astro/', // must match actual url prefix in HTML for styles
        });
        

        const processedHtml = await beasties.process(html);

        await fs.writeFile(indexPath, processedHtml, 'utf-8');

        const criticalCssMatch = processedHtml.match(/<style[^>]*>(.*?)<\/style>/is);
        if (!criticalCssMatch) {
          console.warn('No critical CSS found in processed index.html');
          return;
        }
        const criticalCss = criticalCssMatch[1];

        const markerStart = '<!-- BEGIN CRITICAL CSS -->';
        const markerEnd = '<!-- END CRITICAL CSS -->';

        const criticalCssBlock = `${markerStart}\n<style>${criticalCss}</style>\n${markerEnd}`;

        async function injectAll(dir) {
          const entries = await fs.readdir(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              await injectAll(fullPath);
            } else if (
              entry.isFile() &&
              entry.name.endsWith('.html') &&
              fullPath !== indexPath
            ) {
              let pageHtml = await fs.readFile(fullPath, 'utf-8');

              if (!pageHtml.includes(markerStart)) {
                // Insert critical CSS block right after <head> opening tag for better precedence
                pageHtml = pageHtml.replace(
                  /<head([^>]*)>/i,
                  `<head$1>\n${criticalCssBlock}`
                );

                await fs.writeFile(fullPath, pageHtml, 'utf-8');
                console.log(`Injected critical CSS into ${fullPath}`);
              }
            }
          }
        }

        await injectAll(distDir);
      }
    }
  };
}
