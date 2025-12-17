// src/pages/png_icons/sitemap-[index].xml.ts
import type { APIRoute } from 'astro';

const MAX_URLS = 5000;

// Loader function for sitemap URLs - extracted to work in both SSG and SSR
async function loadUrls() {
  // Get all icons from database instead of globbing files
  const { query } = await import('db/png_icons/png-worker-pool');
  const icons = await query.getSitemapIcons();
  const now = new Date().toISOString();

  // Build URLs with placeholder for site (no image tag for PNG)
  const urls = icons.map((icon) => {
    const category = icon.category || icon.cluster;
    const name = icon.name;

    return `
      <url>
        <loc>__SITE__/png_icons/${category}/${name}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`;
  });

  // Include landing page
  urls.unshift(`
    <url>
      <loc>__SITE__/png_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`);

  return urls;
}

export const prerender = false;

export const GET: APIRoute = async ({ site, params }) => {
  // SSR mode: call loadUrls directly
  let urls = await loadUrls();

  // Use site from .env file (SITE variable) or astro.config.mjs
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';

  // Replace placeholder with actual site
  urls = urls.map((u) => u.replace(/__SITE__/g, siteUrl));

  // Split into chunks
  const sitemapChunks: string[][] = [];
  for (let i = 0; i < urls.length; i += MAX_URLS) {
    sitemapChunks.push(urls.slice(i, i + MAX_URLS));
  }

  const index = parseInt(params.index, 10) - 1;
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
};
