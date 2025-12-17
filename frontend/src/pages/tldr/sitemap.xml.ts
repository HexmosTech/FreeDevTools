import type { APIRoute } from "astro";
import { getTldrSitemapCount } from "db/tldrs/tldr-utils";

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  
  // Use site from .env file (SITE variable) or astro.config.mjs
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';
  
  const totalUrls = await getTldrSitemapCount();
  const chunkSize = 5000;
  const totalChunks = Math.ceil(totalUrls / chunkSize);
  
  const sitemaps: string[] = [];
  
  for (let i = 1; i <= totalChunks; i++) {
    sitemaps.push(
      `  <sitemap>
    <loc>${siteUrl}/tldr/sitemap-${i}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps.join(
    "\n"
  )}\n</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};