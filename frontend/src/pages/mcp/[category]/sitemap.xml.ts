import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Generate static paths for all MCP categories
export async function getStaticPaths() {
  const categoryEntries = await getCollection('mcpCategoryData' as any);

  return categoryEntries.map((entry: any) => ({
    params: { category: entry.data.category },
  }));
}

export const GET: APIRoute = async ({ site, params }) => {
  const now = new Date().toISOString();
  const MAX_URLS = 5000;

  const category = params.category;
  if (!category) {
    return new Response('Category not found', { status: 404 });
  }

  // Load the specific category data
  const categoryEntries = await getCollection('mcpCategoryData' as any);
  const categoryEntry = categoryEntries.find(
    (entry: any) => entry.data.category === category
  );

  if (!categoryEntry) {
    return new Response('Category not found', { status: 404 });
  }

  const categoryData = (categoryEntry as any).data;
  const repositories = categoryData.repositories;

  // Create URLs for all repositories in this category
  const urls = Object.keys(repositories).map((repoId) => {
    return `
      <url>
        <loc>${site}/mcp/${category}/${repoId}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>`;
  });

  // Calculate pagination for this category
  const totalRepositories = Object.keys(repositories).length;
  const itemsPerPage = 30;
  const totalPages = Math.ceil(totalRepositories / itemsPerPage);

  // Add the category page itself (redirects to page 1)
  urls.unshift(`
    <url>
      <loc>${site}/mcp/${category}/1/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`);

  // Add pagination pages (2, 3, 4, etc. - skip page 1 as it's the same as category/1/)
  for (let i = 2; i <= totalPages; i++) {
    urls.push(`
      <url>
        <loc>${site}/mcp/${category}/${i}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`);
  }

  // Split URLs into chunks if needed
  const sitemapChunks: string[][] = [];
  for (let i = 0; i < urls.length; i += MAX_URLS) {
    sitemapChunks.push(urls.slice(i, i + MAX_URLS));
  }

  // If ?index param exists, serve a chunked sitemap
  if (params?.index) {
    const index = parseInt(params.index, 10) - 1; // 1-based: /sitemap-1.xml
    const chunk = sitemapChunks[index];

    if (!chunk) return new Response('Not Found', { status: 404 });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${chunk.join('\n')}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  // If we have multiple chunks, serve sitemap index
  if (sitemapChunks.length > 1) {
    const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
      <?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapChunks
    .map(
      (_, i) => `
    <sitemap>
      <loc>${site}/mcp/${category}/sitemap-${i + 1}.xml</loc>
      <lastmod>${now}</lastmod>
    </sitemap>`
    )
    .join('\n')}
</sitemapindex>`;

    return new Response(indexXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  // Single sitemap
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
