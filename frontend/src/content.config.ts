import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Check if we're in development mode
// Astro sets NODE_ENV=production during build, and ASTRO_MODE=dev during dev
const forceTldrBuild = true;

// Define the tldr collection schema based on the frontmatter structure
const tldr = defineCollection({
  loader: glob({
    // In dev mode, only load specific categories; in build mode, load all files
    pattern: forceTldrBuild ? "**/*.md" : "{pnm,git}/**/*.md",
    base: "./src/pages/markdown_pages/tldr",
  }),
  schema: z.object({
    title: z.string(),
    name: z.string(),
    path: z.string(),
    canonical: z.string().url(),
    description: z.string(),
    category: z.string(),
    keywords: z.array(z.string()).optional(),
    features: z.array(z.string()).optional(),
    ogImage: z.string().url().optional(),
    twitterImage: z.string().url().optional(),
    more_information: z.string().url().optional(),
  }),
});

export const collections = { tldr };
