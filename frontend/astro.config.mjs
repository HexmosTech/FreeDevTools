// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: 'https://hexmos.com/freedevtools',
  output: 'static',
  base: "/freedevtools",
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('404') && !page.includes('_astro'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  cacheDir: ".astro/cache",
  build: {
    concurrency: 32
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
