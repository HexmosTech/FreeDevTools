// @ts-check
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";
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
    compressor({ gzip: { level: 9 }, brotli: true })
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
      terserOptions: {
        compress: true,
      }
    },
  },
});
