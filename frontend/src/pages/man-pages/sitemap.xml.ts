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
  const MAX_URLS = 5000;

  // Use production site if localhost or undefined
  const siteUrl =
    site && !String(site).includes('localhost')
      ? String(site)
      : PRODUCTION_SITE;

  // Get all man pages from database
  const stmt = db.prepare(`
    SELECT main_category, sub_category, slug
    FROM man_pages
    WHERE slug IS NOT NULL AND slug != ''
    ORDER BY main_category, sub_category, slug
  `);

  const manPages = stmt.all() as Array<{
    main_category: string;
    sub_category: string;
    slug: string;
  }>;

  // Map man pages to sitemap URLs
  const urls = manPages.map((manPage) => {
    const escapedCategory = escapeXml(manPage.main_category);
    const escapedSubCategory = escapeXml(manPage.sub_category);
    const escapedSlug = escapeXml(manPage.slug);
    return `
      <url>
        <loc>${siteUrl}/man-pages/${escapedCategory}/${escapedSubCategory}/${escapedSlug}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`;
  });

  // Include the main landing page
  urls.unshift(`
    <url>
      <loc>${siteUrl}/man-pages/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`);

  // Add category index pages
  const categoryStmt = db.prepare(`
    SELECT DISTINCT main_category
    FROM man_pages
    ORDER BY main_category
  `);
  const categories = categoryStmt.all() as Array<{ main_category: string }>;

  categories.forEach(({ main_category }) => {
    const escapedCategory = escapeXml(main_category);
    urls.push(`
      <url>
        <loc>${siteUrl}/man-pages/${escapedCategory}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>`);
  });

  // Add subcategory index pages
  const subcategoryStmt = db.prepare(`
    SELECT DISTINCT main_category, sub_category
    FROM man_pages
    ORDER BY main_category, sub_category
  `);
  const subcategories = subcategoryStmt.all() as Array<{
    main_category: string;
    sub_category: string;
  }>;

  subcategories.forEach(({ main_category, sub_category }) => {
    const escapedCategory = escapeXml(main_category);
    const escapedSubCategory = escapeXml(sub_category);
    urls.push(`
      <url>
        <loc>${siteUrl}/man-pages/${escapedCategory}/${escapedSubCategory}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
      </url>`);
  });

  // If total URLs <= MAX_URLS, return the single sitemap
  if (urls.length <= MAX_URLS) {
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
  }

  // Otherwise, split URLs into chunks and return a sitemap index
  const sitemapChunks: string[][] = [];
  for (let i = 0; i < urls.length; i += MAX_URLS) {
    sitemapChunks.push(urls.slice(i, i + MAX_URLS));
  }

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapChunks
    .map(
      (_, i) => `
    <sitemap>
      <loc>${siteUrl}/man-pages/sitemap-${i + 1}.xml</loc>
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
