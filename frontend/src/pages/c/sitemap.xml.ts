import {
  getAllCategories,
  getCheatsheetsByCategory,
  getTotalCategories,
  getTotalCheatsheets,
} from 'db/cheatsheets/cheatsheets-utils';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();

  // Fetch all categories (assuming < 1000 for now, or we can loop)
  const totalCats = await getTotalCategories();
  const cheatsheetCategories = await getAllCategories(1, totalCats);

  const itemsPerPage = 30;
  const totalCheatsheets = await getTotalCheatsheets();
  const totalPages = Math.ceil(totalCheatsheets / itemsPerPage);

  const urls: string[] = [];

  // Root landing
  urls.push(
    `  <url>
      <loc>${site}/c/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
  );

  // Main cheatsheet pagination pages (c/1/, c/2/, etc.)
  for (let i = 2; i <= totalPages; i++) {
    urls.push(
      `  <url>
        <loc>${site}/c/${i}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`
    );
  }

  // Category pages and their pagination
  for (const category of cheatsheetCategories) {
    // Category index
    urls.push(
      `  <url>
        <loc>${site}/c/${category.slug}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
      </url>`
    );

    // Category pagination
    const catCheatsheetCount = category.cheatsheetCount;
    const catTotalPages = Math.ceil(catCheatsheetCount / itemsPerPage);

    for (let i = 2; i <= catTotalPages; i++) {
      urls.push(
        `  <url>
          <loc>${site}/c/${category.slug}/${i}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`
      );
    }

    // Individual cheatsheets
    // We need to fetch all cheatsheets for this category to get their slugs
    const cheatsheets = await getCheatsheetsByCategory(category.slug);
    for (const sheet of cheatsheets) {
      urls.push(
        `  <url>
          <loc>${site}/c/${category.slug}/${sheet.slug}/</loc>
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

  // Return
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
