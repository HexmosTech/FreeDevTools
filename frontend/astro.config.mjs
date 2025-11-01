// @ts-check
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: 'https://hexmos.com/freedevtools',
  output: 'static',
  base: "/freedevtools",
  trailingSlash: 'ignore',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  integrations: [
    react(),
    tailwind(),
    compressor({ gzip: { level: 9 }, brotli: true }),
    icon()
    // sitemap({
    //   filter: (page) => !page.includes('404') && !page.includes('_astro'),
    //   changefreq: 'daily',
    //   priority: 0.7,
    //   lastmod: new Date()
    // })
  ],
  cacheDir: ".astro/cache",
  build: {
    concurrency: 64,
    inlineStylesheets: 'never'
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    build: {
      sourcemap: false,
      minify: true,
      cssCodeSplit: false, // Disable CSS code splitting to consolidate CSS files
      terserOptions: {
        compress: true,
      },
      rollupOptions: {
        output: {
          // Disable automatic chunk splitting - return undefined to use default behavior
          // This prevents Rollup from creating separate chunks for shared dependencies
          manualChunks: () => undefined,
          // Merge chunks smaller than 100KB into larger chunks to reduce total file count
          // This helps consolidate many small chunks into fewer, larger files
          experimentalMinChunkSize: 100 * 1024, // 100KB in bytes
        },
        onwarn(warning, warn) {
          // Suppress warnings about unused imports from external modules (node_modules)
          if (
            warning.code === 'UNUSED_EXTERNAL_IMPORT' ||
            (warning.message && warning.message.includes('is imported from external module'))
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
    logLevel: 'warn',
  },
});
