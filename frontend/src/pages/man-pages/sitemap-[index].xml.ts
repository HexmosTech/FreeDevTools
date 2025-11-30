// src/pages/man-pages/sitemap-[index].xml.ts
import { generateCommandStaticPaths } from '../../../db/man_pages/man-pages-utils';
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
  const now = new Date().toISOString();

  // Get all man pages from database
  const manPages = await generateCommandStaticPaths();

  // Build URLs with placeholder for site
  const urls = manPages.map((manPage) => {
    const escapedCategory = escapeXml(manPage.params.category);
    const escapedSubCategory = escapeXml(manPage.params.subcategory);
    const escapedSlug = escapeXml(manPage.params.slug);
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
  const { getManPageCategories, getSubCategories } = await import('../../../db/man_pages/man-pages-utils');

  const categories = await getManPageCategories();
  categories.forEach(({ category }) => {
    const escapedCategory = escapeXml(category);
    urls.push(`
      <url>
        <loc>__SITE__/man-pages/${escapedCategory}/</loc>
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
