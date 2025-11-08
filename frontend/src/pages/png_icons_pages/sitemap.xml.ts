import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  const { getCollection } = await import('astro:content');

  // Get PNG icons metadata to calculate total pages
  const pngIconsEntries = await getCollection('pngIconsMetadata');
  const iconsData = pngIconsEntries[0]?.data;

  if (!iconsData) {
    return new Response('PNG icons metadata not found', { status: 500 });
  }

  // Get all categories from metadata
  const allCategories = Object.keys(iconsData.clusters);

  // Calculate total pages (30 categories per page)
  const itemsPerPage = 30;
  const totalPages = Math.ceil(allCategories.length / itemsPerPage);

  const urls: string[] = [];

  // Root PNG icons page
  urls.push(
    `  <url>
      <loc>${site}/png_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`
  );

  // Pagination pages (skip page 1 as it's the same as the root)
  for (let i = 2; i <= totalPages; i++) {
    urls.push(
      `  <url>
        <loc>${site}/png_icons/${i}/</loc>
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
