import type { APIRoute } from 'astro';

const MAX_URLS = 5000;

export async function getStaticPaths() {
  const Database = (await import('better-sqlite3')).default;
  const path = (await import('path')).default;

  // Loader function for sitemap URLs
  async function loadUrls() {
    const dbPath = path.join(process.cwd(), 'db/all_dbs/man_pages-db.db');
    const db = new Database(dbPath, { readonly: true });
    const now = new Date().toISOString();

    // Build URLs with placeholder for site
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

    const urls = manPages.map((manPage) => {
      return `
        <url>
          <loc>__SITE__/man_pages/${manPage.main_category}/${manPage.sub_category}/${manPage.slug}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`;
    });

    // Include landing page
    urls.unshift(`
      <url>
        <loc>__SITE__/man_pages/</loc>
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
          <loc>__SITE__/man_pages/${main_category}/</loc>
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
          <loc>__SITE__/man_pages/${main_category}/${sub_category}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.6</priority>
        </url>`);
    });

    db.close();
    return urls;
  }

  // Pre-count total pages
  try {
    const Database = (await import('better-sqlite3')).default;
    const path = (await import('path')).default;
    const dbPath = path.join(process.cwd(), 'db/all_dbs/man-pages-db.db');
    const db = new Database(dbPath, { readonly: true });

    const countStmt = db.prepare(`
      SELECT 
        (SELECT COUNT(*) FROM man_pages WHERE slug IS NOT NULL AND slug != '') +
        (SELECT COUNT(DISTINCT main_category) FROM man_pages) +
        (SELECT COUNT(DISTINCT main_category || '-' || sub_category) FROM man_pages) +
        1 as total
    `);
    const result = countStmt.get() as { total: number };
    const totalUrls = result.total;
    const totalPages = Math.ceil(totalUrls / MAX_URLS);

    db.close();

    return Array.from({ length: totalPages }, (_, i) => ({
      params: { index: String(i + 1) },
      props: { loadUrls }, // pass only the function reference
    }));
  } catch (error) {
    console.error('Error counting man pages for sitemap:', error);
    // Fallback to single page
    return [{ params: { index: '1' }, props: { loadUrls: async () => [] } }];
  }
}

export const GET: APIRoute = async ({ site, params, props }) => {
  const loadUrls: () => Promise<string[]> = props.loadUrls;
  let urls = await loadUrls();

  // Replace placeholder with actual site
  urls = urls.map((u) => u.replace(/__SITE__/g, site?.toString() || ''));

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
};
