import fs from 'fs/promises';
import path from 'path';
import Beasties from 'beasties';
import { fileURLToPath } from 'url';

export function performCriticalCssInline() {
  return {
    name: 'beasties-inline-critical-css',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distDir = fileURLToPath(dir);
        const indexPath = path.join(distDir, 'index.html');
        let html = await fs.readFile(indexPath, 'utf-8');

        const beasties = new Beasties({
          path: distDir,
          publicPath: '/_astro/',
        });

        const processedHtml = await beasties.process(html);
        await fs.writeFile(indexPath, processedHtml, 'utf-8');

        // Extract critical CSS
        const criticalCssMatch = processedHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
        if (!criticalCssMatch) {
          console.warn('No critical CSS found in processed index.html');
          return;
        }
        const criticalCss = criticalCssMatch[1];
        const markerStart = '<!-- BEGIN CRITICAL CSS -->';
        const markerEnd = '<!-- END CRITICAL CSS -->';
        const criticalCssBlock = `${markerStart}\n<style>${criticalCss}</style>\n${markerEnd}`;

        // Extract all <link rel="preload" ...> tags from processedHtml <head>
        const preloadLinksMatch = processedHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
        let preloadLinks = '';
        if (preloadLinksMatch) {
          const headContent = preloadLinksMatch[1];
          const linkPreloadRegex = /<link\s+rel="preload"[^>]+>/gi;
          const foundLinks = headContent.match(linkPreloadRegex);
          if (foundLinks) {
            preloadLinks = foundLinks.join('\n');
          }
        }

        // Inject critical CSS and preload links into all pages except index.html
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
                // Insert critical CSS and preload links immediately after <head> tag
                pageHtml = pageHtml.replace(
                  /<head([^>]*)>/i,
                  `<head$1>\n${criticalCssBlock}\n${preloadLinks}`
                );

                await fs.writeFile(fullPath, pageHtml, 'utf-8');
                console.log(`Injected critical CSS and preload links into ${fullPath}`);
              }
            }
          }
        }

        await injectAll(distDir);
      }
    }
  };
}
