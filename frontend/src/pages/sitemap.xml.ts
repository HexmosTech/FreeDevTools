import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

async function getAllCommands() {
  const tldrEntries: CollectionEntry<"tldr">[] = await getCollection("tldr");

  const commandsByPlatform: Record<
    string,
    Array<{
      name: string;
      url: string;
      description?: string;
      category?: string;
    }>
  > = {};

  for (const entry of tldrEntries) {
    // Extract platform and command name from path
    const pathParts = entry.id.split("/");
    const platform = pathParts[pathParts.length - 2]; // e.g., 'android'
    const fileName = pathParts[pathParts.length - 1]; // e.g., 'am.md'
    const commandName = fileName.replace(".md", ""); // e.g., 'am'

    if (!commandsByPlatform[platform]) {
      commandsByPlatform[platform] = [];
    }

    // Get description from frontmatter if available
    const description =
      entry.data.description ||
      entry.data.title ||
      `Documentation for ${commandName} command`;

    const commandName_final = entry.data.name || commandName;

    commandsByPlatform[platform].push({
      name: commandName_final,
      url: entry.data.path || `/freedevtools/tldr/${platform}/${commandName}`,
      description,
      category: entry.data.category,
    });
  }

  return commandsByPlatform;
}

export const GET: APIRoute = async ({ site }) => {
  const commands = await getAllCommands();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main pages -->
  <url>
    <loc>${site}/freedevtools/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/tldr/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Platform pages -->
  ${Object.keys(commands)
    .map(
      (platform) => `
  <url>
    <loc>${site}/freedevtools/tldr/${platform}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
  
  <!-- Individual command pages -->
  ${Object.entries(commands)
    .map(([platform, platformCommands]) =>
      platformCommands
        .map(
          (command) => `
  <url>
    <loc>${site}${command.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
        )
        .join("")
    )
    .join("")}
  
  <!-- Tool pages -->
  <url>
    <loc>${site}/freedevtools/t/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Individual tool pages -->
  <url>
    <loc>${site}/freedevtools/t/anthropic-token-counter/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/date-time-converter/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/dockerfile-linter/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/image-to-base64/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/json-prettifier/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/json-to-csv-converter/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/jwt-parser/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/openai-token-counter/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/password-generator/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/svg-viewer/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/uuid-generator/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/freedevtools/t/yaml-to-json/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Cheatsheet pages -->
  <url>
    <loc>${site}/freedevtools/c/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
