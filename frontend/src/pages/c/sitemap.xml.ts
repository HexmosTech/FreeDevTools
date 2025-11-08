import {
  generateCheatsheetCategoryStaticPaths,
  generateCheatsheetStaticPaths,
  getAllCheatsheetCategories,
} from '@/lib/cheatsheets-utils';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  const cheatsheetCategories = await getAllCheatsheetCategories();
  const paginationPaths = await generateCheatsheetStaticPaths();
  const categoryPaginationPaths = await generateCheatsheetCategoryStaticPaths();

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

  // Category index pages
  for (const category of cheatsheetCategories) {
    // Remove /freedevtools prefix since site already includes it
    const categoryUrl = category.url.replace('/freedevtools', '');
    urls.push(
      `  <url>
        <loc>${site}${categoryUrl}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
      </url>`
    );
  }

  // Main cheatsheet pagination pages (c/1/, c/2/, etc.)
  for (const path of paginationPaths) {
    const page = path.params.page;
    if (page !== '1') {
      // Skip page 1 as it's the same as the root
      urls.push(
        `  <url>
          <loc>${site}/c/${page}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`
      );
    }
  }

  // Category pagination pages (c/category/1/, c/category/2/, etc.)
  for (const path of categoryPaginationPaths) {
    const { category, page } = path.params;
    if (page !== '1') {
      // Skip page 1 as it's the same as the category index
      urls.push(
        `  <url>
          <loc>${site}/c/${category}/${page}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`
      );
    }
  }

  // Individual cheatsheet pages
  for (const category of cheatsheetCategories) {
    for (const sheet of category.cheatsheets) {
      // Remove /freedevtools prefix since site already includes it
      const sheetUrl = sheet.url.replace('/freedevtools', '');
      urls.push(
        `  <url>
          <loc>${site}${sheetUrl}</loc>
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
