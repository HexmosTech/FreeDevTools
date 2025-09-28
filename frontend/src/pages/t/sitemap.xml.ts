import { getAllTools } from "@/config/tools";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  const tools = getAllTools();

  const urls: string[] = [];
  // Add main freedevtools URL
  urls.push(
    `  <url>\n    <loc>${site}/freedevtools/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1</priority>\n  </url>`
  );
  // Existing /t/ URL
  urls.push(
    `  <url>\n    <loc>${site}/t/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
  );

  for (const tool of tools) {
    urls.push(
      `  <url>\n    <loc>${site}${tool.path.replace("/freedevtools", "")}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.6</priority>\n  </url>`
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};