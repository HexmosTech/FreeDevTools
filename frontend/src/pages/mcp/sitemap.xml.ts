import type { APIRoute } from 'astro';
import { getAllMcpCategories } from '../../../db/mcp/mcp-utils';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();

  // Get all categories from the database
  const categories = await getAllMcpCategories();

  // Create sitemap index - MCP pages sitemap + category sitemaps
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site}/mcp-pages/sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  ${categories
      .map(
        (category) => `
  <sitemap>
    <loc>${site}/mcp/${category.slug}/sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
      )
      .join('')}
</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
