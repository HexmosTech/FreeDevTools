import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site, params }) => {
  const now = new Date().toISOString();
  const MAX_URLS = 5000;

  // Use site from .env file (SITE variable) or astro.config.mjs
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';

  // Get all icons from database instead of globbing files
  const { query } = await import('db/png_icons/png-worker-pool');
  const icons = await query.getSitemapIcons();

  // Map icons to sitemap URLs (no image tag for PNG)
  const urls = icons.map((icon) => {
    const category = icon.category || icon.cluster;
    const name = icon.name;

    return `
      <url>
        <loc>${siteUrl}/png_icons/${category}/${name}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`;
  });

  // Include the landing page
  urls.unshift(`
    <url>
      <loc>${siteUrl}/png_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`);

  // Split URLs into chunks of MAX_URLS
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

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
      <?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>

<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/png_icons_pages/sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  ${sitemapChunks
    .map(
      (_, i) => `
    <sitemap>
      <loc>${siteUrl}/png_icons/sitemap-${i + 1}.xml</loc>
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
};
