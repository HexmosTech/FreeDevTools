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

  // Create sitemap index for categories
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site}/mcp/</loc>
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
