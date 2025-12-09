import type { APIRoute } from 'astro';
import { getTldrSitemap } from '../../../db/tldrs/tldr-utils';

export const GET: APIRoute = async ({ params, site }) => {
  const { page } = params;
  const now = new Date().toISOString();
  
  // Use site from .env file (SITE variable) or astro.config.mjs
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';
  
  if (!page) {
    return new Response('Page not found', { status: 404 });
  }

  const sitemapName = `sitemap-${page}.xml`;
  const urls = await getTldrSitemap(sitemapName);
  
  if (!urls) {
    return new Response('Sitemap chunk not found', { status: 404 });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url: string) => `  <url>
    <loc>${siteUrl.replace(/\/freedevtools$/, '')}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};


