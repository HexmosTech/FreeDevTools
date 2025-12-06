import type { APIRoute } from 'astro';
import { getOverview, getAllMcpCategories } from 'db/mcp/mcp-utils';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();

  // Get overview for main pagination
  const { totalCategoryCount } = await getOverview();

  // Get all categories for category pagination
  const categories = await getAllMcpCategories(1, 100);

  const urls: string[] = [];
  const itemsPerPage = 30;

  // 1. Main MCP Directory Pagination (/mcp/1/, /mcp/2/, etc.)
  const totalMainPages = Math.ceil(totalCategoryCount / itemsPerPage);

  for (let i = 1; i <= totalMainPages; i++) {
    urls.push(
      `  <url>
        <loc>${site}/mcp/${i}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`
    );
  }

  // 2. Category Pagination (/mcp/[category]/1/, /mcp/[category]/2/, etc.)
  for (const category of categories) {
    const totalCategoryPages = Math.ceil(category.count / itemsPerPage);

    for (let i = 1; i <= totalCategoryPages; i++) {
      urls.push(
        `  <url>
          <loc>${site}/mcp/${category.slug}/${i}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`
      );
    }
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
