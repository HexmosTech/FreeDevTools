import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Check if we're in development mode
// Astro sets NODE_ENV=production during build, and ASTRO_MODE=dev during dev
const forceTldrBuild = true;

// Define the tldr collection schema based on the frontmatter structure
const tldr = defineCollection({
  loader: glob({
    // In dev mode, only load specific categories; in build mode, load all files
    pattern: forceTldrBuild ? '**/*.md' : '{pnm,git}/**/*.md',
    base: './src/pages/markdown_pages/tldr',
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
    relatedTools: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
          banner: z.string().url().optional(),
        })
      )
      .optional(),
    more_information: z.string().url().optional(),
  }),
});

// Define the MCP metadata collection
const mcpMetadata = defineCollection({
  loader: file('public/mcp/meta_data.json', {
    parser: (fileContent) => {
      const data = JSON.parse(fileContent);
      return {
        'mcp-metadata': data,
      };
    },
  }),
  schema: z.object({
    totalCategories: z.number(),
    totalRepositories: z.number(),
    processing_started: z.string(),
    processing_completed: z.string(),
    categories: z.record(
      z.string(),
      z.object({
        categoryDisplay: z.string(),
        totalRepositories: z.number(),
        totalStars: z.number(),
        totalForks: z.number(),
        npmPackages: z.number(),
        npmDownloads: z.number(),
      })
    ),
    summary: z.object({
      totalStars: z.number(),
      totalForks: z.number(),
      npmPackages: z.number(),
      npmDownloads: z.number(),
    }),
  }),
});

// Define the MCP category data collection using glob loader
const mcpCategoryData = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './public/mcp/input',
  }),
  schema: z.object({
    category: z.string(),
    categoryDisplay: z.string(),
    description: z.string(),
    totalRepositories: z.number(),
    repositories: z.record(
      z.string(),
      z.object({
        owner: z.string(),
        name: z.string(),
        url: z.string().url(),
        imageUrl: z.string().optional(),
        description: z.string().optional(),
        stars: z.number(),
        forks: z.number(),
        license: z.string(),
        language: z.string(),
        updated_at: z.string(),
        readme_content: z.string().optional(),
        npm_url: z.string(),
        npm_downloads: z.number(),
      })
    ),
  }),
});

export const collections = { tldr, mcpMetadata, mcpCategoryData };
