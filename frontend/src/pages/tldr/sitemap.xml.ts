import type { APIRoute, InferGetStaticPropsType } from "astro";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

async function getCommandsByPlatform() {
  const entries: CollectionEntry<"tldr">[] = await getCollection("tldr");
  const byPlatform: Record<string, { url: string }[]> = {};
  for (const entry of entries) {
    const parts = entry.id.split("/");
    const platform = parts[parts.length - 2];
    const fileName = parts[parts.length - 1];
    const name = fileName.replace(/\.md$/i, "");
    if (!byPlatform[platform]) byPlatform[platform] = [];
    byPlatform[platform].push({
      url: entry.data.path || `/freedevtools/tldr/${platform}/${name}`,
    });
  }
  return byPlatform;
}

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  const byPlatform = await getCommandsByPlatform();

  const urls: string[] = [];
  // Category landing
  urls.push(`  <url>\n    <loc>${site}/tldr/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`);
  // Platform pages
  for (const platform of Object.keys(byPlatform)) {
    urls.push(`  <url>\n    <loc>${site}/tldr/${platform}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`);
  }
  // Individual command pages
  for (const [platform, commands] of Object.entries(byPlatform)) {
    for (const cmd of commands) {
      urls.push(`  <url>\n    <loc>${site}${cmd.url.replace('/freedevtools', '')}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};


