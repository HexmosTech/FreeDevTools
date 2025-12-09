import type { APIRoute } from 'astro';
import { getTldrSitemap } from '../../../db/tldrs/tldr-utils';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  
  // Use site from .env file (SITE variable) or astro.config.mjs
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';
  
  const sitemapUrls = await getTldrSitemap('sitemap.xml');
  
  if (!sitemapUrls) {
    return new Response('Sitemap index not found', { status: 404 });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url: string) => `  <sitemap>
    <loc>${siteUrl.replace(/\/freedevtools$/, '')}${url}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};