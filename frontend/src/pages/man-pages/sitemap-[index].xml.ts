// src/pages/man-pages/sitemap-[index].xml.ts
import { getDb } from '@/lib/man-pages-utils';
import type { APIRoute } from 'astro';

const MAX_URLS = 5000;
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

// Loader function for sitemap URLs - extracted to work in both SSG and SSR
async function loadUrls() {
  const db = getDb();
  const now = new Date().toISOString();

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

  // Build URLs with placeholder for site
  const urls = manPages.map((manPage) => {
    const escapedCategory = escapeXml(manPage.main_category);
    const escapedSubCategory = escapeXml(manPage.sub_category);
    const escapedSlug = escapeXml(manPage.slug);
    return `
      <url>
        <loc>__SITE__/man-pages/${escapedCategory}/${escapedSubCategory}/${escapedSlug}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`;
  });

  // Include the main landing page
  urls.unshift(`
    <url>
      <loc>__SITE__/man-pages/</loc>
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
        <loc>__SITE__/man-pages/${escapedCategory}/</loc>
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
        <loc>__SITE__/man-pages/${escapedCategory}/${escapedSubCategory}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
      </url>`);
  });

  return urls;
}

export const prerender = false;

export const GET: APIRoute = async ({ site, params }) => {
  // SSR mode: call loadUrls directly
  let urls = await loadUrls();

  // Replace placeholder with actual site - use production site if localhost or undefined
  const siteUrl =
    site && !String(site).includes('localhost')
      ? String(site)
      : PRODUCTION_SITE;
  urls = urls.map((u) => u.replace(/__SITE__/g, siteUrl));

  // Split into chunks
  const sitemapChunks: string[][] = [];
  for (let i = 0; i < urls.length; i += MAX_URLS) {
    sitemapChunks.push(urls.slice(i, i + MAX_URLS));
  }

  const index = parseInt(params?.index || '1', 10) - 1;
  const chunk = sitemapChunks[index];

  if (!chunk) return new Response('Not Found', { status: 404 });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
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
