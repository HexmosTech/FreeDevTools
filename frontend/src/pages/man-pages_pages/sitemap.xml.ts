import { getDb } from '@/lib/man-pages-utils';
import type { APIRoute } from 'astro';

const PRODUCTION_SITE = 'https://hexmos.com/freedevtools';

// Escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const prerender = false;

export const GET: APIRoute = async ({ site }) => {
  const db = getDb();
  const now = new Date().toISOString();

  // Use production site if localhost or undefined
  const siteUrl =
    site && !String(site).includes('localhost')
      ? String(site)
      : PRODUCTION_SITE;

  const urls: string[] = [];

  // Root man-pages page
  urls.push(
    `  <url>
      <loc>${siteUrl}/man-pages/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`
  );

  // Get all categories
  const categoryStmt = db.prepare(`
    SELECT DISTINCT main_category
    FROM man_pages
    ORDER BY main_category
  `);
  const categories = categoryStmt.all() as Array<{ main_category: string }>;

  // Category pagination (12 items per page)
  const categoryItemsPerPage = 12;
  for (const { main_category } of categories) {
    // Get subcategories count for this category
    const subcategoryCountStmt = db.prepare(`
      SELECT COUNT(DISTINCT sub_category) as count
      FROM man_pages 
      WHERE main_category = ?
    `);
    const subcategoryCount =
      (subcategoryCountStmt.get(main_category) as { count: number } | undefined)
        ?.count || 0;
    const totalCategoryPages = Math.ceil(
      subcategoryCount / categoryItemsPerPage
    );

    // Add category index page (page 1 is the same as the category root)
    const escapedCategory = escapeXml(main_category);
    urls.push(
      `  <url>
        <loc>${siteUrl}/man-pages/${escapedCategory}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>`
    );

    // Pagination pages for category (skip page 1 as it's the same as the root)
    for (let i = 2; i <= totalCategoryPages; i++) {
      urls.push(
        `  <url>
          <loc>${siteUrl}/man-pages/${escapedCategory}/${i}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.6</priority>
        </url>`
      );
    }

    // Get all subcategories for this category
    const subcategoryStmt = db.prepare(`
      SELECT DISTINCT sub_category
      FROM man_pages
      WHERE main_category = ?
      ORDER BY sub_category
    `);
    const subcategories = subcategoryStmt.all(main_category) as Array<{
      sub_category: string;
    }>;

    // Subcategory pagination (20 items per page)
    const subcategoryItemsPerPage = 20;
    for (const { sub_category } of subcategories) {
      // Get man pages count for this subcategory
      const manPagesCountStmt = db.prepare(`
        SELECT COUNT(*) as count
        FROM man_pages 
        WHERE main_category = ? AND sub_category = ?
      `);
      const manPagesCount =
        (
          manPagesCountStmt.get(main_category, sub_category) as
            | { count: number }
            | undefined
        )?.count || 0;
      const totalSubcategoryPages = Math.ceil(
        manPagesCount / subcategoryItemsPerPage
      );

      // Add subcategory index page (page 1 is the same as the subcategory root)
      const escapedSubCategory = escapeXml(sub_category);
      urls.push(
        `  <url>
          <loc>${siteUrl}/man-pages/${escapedCategory}/${escapedSubCategory}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.6</priority>
        </url>`
      );

      // Pagination pages for subcategory (skip page 1 as it's the same as the root)
      for (let i = 2; i <= totalSubcategoryPages; i++) {
        urls.push(
          `  <url>
            <loc>${siteUrl}/man-pages/${escapedCategory}/${escapedSubCategory}/${i}/</loc>
            <lastmod>${now}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.5</priority>
          </url>`
        );
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
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
