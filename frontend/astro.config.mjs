// @ts-check
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: 'https://hexmos.com/freedevtools',
  output: 'static',
  base: "/freedevtools",
  integrations: [react(), tailwind()],
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
