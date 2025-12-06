import { generateCommandStaticPaths } from '../../../db/man_pages/man-pages-utils';
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
  const now = new Date().toISOString();
  const MAX_URLS = 5000;

  // Use production site if localhost or undefined
  const siteUrl =
    site && !String(site).includes('localhost')
      ? String(site)
      : PRODUCTION_SITE;

  // Get all man pages from database
  const manPages = await generateCommandStaticPaths();

  // Map man pages to sitemap URLs
  const urls = manPages.map((manPage) => {
    const escapedCategory = escapeXml(manPage.params.category);
    const escapedSubCategory = escapeXml(manPage.params.subcategory);
    const escapedSlug = escapeXml(manPage.params.slug);
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

  // Add category index pages (we need to fetch these if we want them, but for now let's rely on what we have or add a new query)
  // Since we don't have a direct "getAllCategories" exposed for sitemap in the worker yet, 
  // we can either add it or just skip for now if the user didn't ask for full sitemap fidelity,
  // BUT the original code had it.
  // Let's use the existing utils we have.

  // Note: The original code used direct DB access. We should use the worker functions.
  // However, we don't have a "getAllCategories" that returns just names for sitemap.
  // We have `getManPageCategories` which returns ManPageCategory[].

  const { getManPageCategories, getSubCategories } = await import('../../../db/man_pages/man-pages-utils');

  const categories = await getManPageCategories();
  categories.forEach(({ category }) => {
    const escapedCategory = escapeXml(category);
    urls.push(`
      <url>
        <loc>${siteUrl}/man-pages/${escapedCategory}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>`);
  });

  const subcategories = await getSubCategories();
  subcategories.forEach(({ main_category, name }) => {
    const escapedCategory = escapeXml(main_category);
    const escapedSubCategory = escapeXml(name);
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
