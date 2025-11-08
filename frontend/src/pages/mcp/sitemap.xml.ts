import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();

  // Get all categories from the metadata
  const metadataEntries = await getCollection('mcpMetadata' as any);
  const metadata = (metadataEntries[0] as any)?.data;

  if (!metadata) {
    return new Response('Metadata not found', { status: 500 });
  }

  // Get all categories from the metadata
  const categories = Object.keys(metadata.categories);

  // Calculate total pages for MCP directory pagination as

  const totalCategories = categories.length;
  const itemsPerPage = 30;
  const totalPages = Math.ceil(totalCategories / itemsPerPage);

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
    <loc>${site}/mcp/${category}/sitemap.xml</loc>
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
