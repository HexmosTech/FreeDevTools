// @ts-check
import node from '@astrojs/node';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import path from "path";
// These integrations are only needed for static/SSG builds, not SSR mode
// import { performCriticalCssInline } from './integrations/critical-css-inlining.mjs';
// import { unwrapFDT, wrapFDT } from './integrations/wrap-astro.mjs';


// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  site: 'https://hexmos.com/freedevtools',
  output: 'server',
  base: "/freedevtools",
  trailingSlash: 'ignore',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  integrations: [react(), tailwind(), // sitemap({
    //   filter: (page) => !page.includes('404') && !page.includes('_astro'),
    //   changefreq: 'daily',
    //   priority: 0.7,
    //   lastmod: new Date()
    // })
    //compressor({ gzip: { level: 9 }, brotli: true }),
    // compressor({ gzip: { level: 9 }, brotli: false }),
    // These integrations are only needed for static/SSG builds, not SSR mode
    // wrapFDT(), // Wraps freedevtools folder around _astro for doing the critical-css inline
    // performCriticalCssInline(),
    // unwrapFDT() // Unwraps freedevtools folder around _astro
  ],
  cacheDir: ".astro/cache",
  build: {
    concurrency: 64,
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "db": path.resolve("./db"),
      },
    },
    logLevel: 'info',
  },
});



