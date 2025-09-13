// @ts-check
import node from "@astrojs/node";
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
  adapter: node({
    mode: 'standalone'
  }),
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
  // cacheDir: ".astro/cache",
  build: {
    concurrency: 8
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
