import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site, params }) => {
  const Database = (await import('better-sqlite3')).default;
  const path = (await import('path')).default;

  const now = new Date().toISOString();
  const MAX_URLS = 5000;

  try {
    // Connect to database
    const dbPath = path.join(process.cwd(), 'db/all_dbs/man-pages-db.db');
    const db = new Database(dbPath, { readonly: true });

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
      return `
        <url>
          <loc>${site}/man-pages/${manPage.main_category}/${manPage.sub_category}/${manPage.slug}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`;
    });

    // Include the main landing pages
    urls.unshift(`
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

    db.close();

    // Split URLs into chunks of MAX_URLS
    const sitemapChunks: string[][] = [];
    for (let i = 0; i < urls.length; i += MAX_URLS) {
      sitemapChunks.push(urls.slice(i, i + MAX_URLS));
    }

    // If ?index param exists, serve a chunked sitemap
    if (params?.index) {
      const index = parseInt(params.index, 10) - 1; // 1-based: /sitemap-1.xml
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
    }

    // Return sitemap index
    const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
        <?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>

<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapChunks
    .map(
      (_, i) => `
    <sitemap>
      <loc>${site}/man-pages/sitemap-${i + 1}.xml</loc>
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
  } catch (error) {
    console.error('Error generating man pages sitemap:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
