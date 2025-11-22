import type { APIRoute } from 'astro';

// maximum URLs per sitemap file
const MAX_URLS = 5000;

// SSR Sitemap generation
export const prerender = false;

export const GET: APIRoute = async ({ site, params }) => {
  const Database = (await import('better-sqlite3')).default;
  const path = (await import('path')).default;
  const now = new Date().toISOString();

  // Function to get all URLs
  async function getUrls() {
    const dbPath = path.join(process.cwd(), 'db/all_dbs/man-pages-db.db');
    const db = new Database(dbPath, { readonly: true });

    const urls: string[] = [];

    // Include landing page
    urls.push(`
      <url>
        <loc>${site}/man-pages/</loc>
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
      urls.push(`
        <url>
          <loc>${site}/man-pages/${main_category}/</loc>
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
      urls.push(`
        <url>
          <loc>${site}/man-pages/${main_category}/${sub_category}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.6</priority>
        </url>`);
    });

    // Get all man pages
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

    manPages.forEach((manPage) => {
      urls.push(`
        <url>
          <loc>${site}/man-pages/${manPage.main_category}/${manPage.sub_category}/${manPage.slug}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`);
    });

    db.close();
    return urls;
  }

  try {
    const urls = await getUrls();
    
    // Split into chunks
    const sitemapChunks: string[][] = [];
    for (let i = 0; i < urls.length; i += MAX_URLS) {
      sitemapChunks.push(urls.slice(i, i + MAX_URLS));
    }

    const index = parseInt(params.index || '1', 10) - 1;
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
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};