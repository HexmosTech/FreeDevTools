import type { APIRoute } from 'astro';
import { getClusters } from 'db/svg_icons/svg-icons-utils';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();

  // Use site from .env file (SITE variable) or astro.config.mjs
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';

  // Get clusters from SQLite database
  const clusters = await getClusters();

  // Calculate total pages (30 categories per page)
  const itemsPerPage = 30;
  const totalPages = Math.ceil(clusters.length / itemsPerPage);

  const urls: string[] = [];

  // Root SVG icons page
  urls.push(
    `  <url>
      <loc>${siteUrl}/svg_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`
  );

  // Pagination pages (skip page 1 as it's the same as the root)
  for (let i = 2; i <= totalPages; i++) {
    urls.push(
      `  <url>
        <loc>${siteUrl}/svg_icons/${i}/</loc>
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
