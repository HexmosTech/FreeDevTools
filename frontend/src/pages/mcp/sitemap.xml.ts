import type { APIRoute } from 'astro';
import inputData from './data/input.json';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();

  // Get all categories from the input data
  const categories = Object.keys(inputData.data);

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
