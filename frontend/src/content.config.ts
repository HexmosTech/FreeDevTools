import { file, glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Check if we're in development mode
// Astro sets NODE_ENV=production during build, and ASTRO_MODE=dev during dev
const forceTldrBuild = true;

// Define the tldr collection schema based on the frontmatter structure
// const tldr = defineCollection({
//   loader: glob({
//     // In dev mode, only load specific categories; in build mode, load all files
//     pattern: forceTldrBuild ? '**/*.md' : '{pnm,git}/**/*.md',
//     base: 'data/tldr',
//   }),
//   schema: z.object({
//     title: z.string(),
//     name: z.string(),
//     path: z.string(),
//     canonical: z.string().url(),
//     description: z.string(),
//     category: z.string(),
//     keywords: z.array(z.string()).optional(),
//     features: z.array(z.string()).optional(),
//     ogImage: z.string().url().optional(),
//     twitterImage: z.string().url().optional(),
//     relatedTools: z
//       .array(
//         z.object({
//           name: z.string(),
//           url: z.string().url(),
//           banner: z.string().url().optional(),
//         })
//       )
//       .optional(),
//     more_information: z.string().url().optional(),
//   }),
// });

// Define the PNG icons metadata collection
// const pngIconsMetadata = defineCollection({
//   loader: file('data/cluster_png.json', {
//     parser: (fileContent) => {
//       const data = JSON.parse(fileContent);
//       return {
//         'png-icons-metadata': data,
//       };
//     },
//   }),
//   schema: z.object({
//     clusters: z.record(
//       z.string(),
//       z.object({
//         name: z.string(),
//         source_folder: z.string(),
//         path: z.string(),
//         keywords: z.array(z.string()),
//         features: z.array(z.string()),
//         title: z.string(),
//         description: z.string(),
//         fileNames: z.array(
//           z.union([
//             z.string(), // Simple filename
//             z
//               .object({
//                 fileName: z.string(),
//                 description: z.string().optional(),
//                 usecases: z.string().optional(),
//                 synonyms: z.array(z.string()).optional(),
//                 tags: z.array(z.string()).optional(),
//                 industry: z.string().optional(),
//                 emotional_cues: z.string().optional(),
//                 enhanced: z.boolean().optional(),
//                 author: z.string().optional(),
//                 license: z.string().optional(),
//               })
//               .passthrough(), // Allow additional properties
//           ])
//         ),
//         enhanced: z.boolean().optional(),
//       })
//     ),
//   }),
// });

// export const collections = {
//   tldr,
//   pngIconsMetadata,
// };
