import type { APIRoute } from 'astro';
import {
  getAllMcpPageKeysByCategory,
} from 'db/mcp/mcp-utils';

export const prerender = false;

export const GET: APIRoute = async ({ site, params }) => {
  const now = new Date().toISOString();
  const MAX_URLS = 5000;

  const category = params.category;
  if (!category) {
    return new Response('Category not found', { status: 404 });
  }

  // Fetch keys from DB
  const repoKeys = await getAllMcpPageKeysByCategory(category);

  if (!repoKeys || repoKeys.length === 0) {
    return new Response('Category not found or empty', { status: 404 });
  }

  // Create URLs for all repositories in this category
  const urls = repoKeys.map((repoId) => {
    return `
      <url>
        <loc>${site}/mcp/${category}/${repoId}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>`;
  });

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
