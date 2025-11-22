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

  // Calculate total pages for MCP directory pagination
  const totalCategories = categories.length;
  const itemsPerPage = 30;
  const totalPages = Math.ceil(totalCategories / itemsPerPage);

  const urls: string[] = [];

  // Root MCP page
  urls.push(
    `  <url>
      <loc>${site}/mcp/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`
  );

  // Pagination pages
  for (let i = 1; i <= totalPages; i++) {
    urls.push(
      `  <url>
        <loc>${site}/mcp/${i}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
