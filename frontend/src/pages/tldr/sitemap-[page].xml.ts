import type { APIRoute } from "astro";
import { getTldrSitemapUrls } from "db/tldrs/tldr-utils";

export const GET: APIRoute = async ({ params, site }) => {
  const { page } = params;
  
  if (!page || !/^\d+$/.test(page)) {
    return new Response(null, { status: 404 });
  }
  
  const pageNum = parseInt(page, 10);
  const chunkSize = 5000;
  const offset = (pageNum - 1) * chunkSize;
  
  const urls = await getTldrSitemapUrls(chunkSize, offset);
  
  if (!urls || urls.length === 0) {
    return new Response(null, { status: 404 });
  }

  const now = new Date().toISOString();
  
  // Use site from .env file (SITE variable) or astro.config.mjs
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';
  
  const urlEntries = urls.map(url => {
    // DB URL: /freedevtools/tldr/common/tar/
    // Site URL: http://localhost:4321/freedevtools
    // Result should be: http://localhost:4321/freedevtools/tldr/common/tar/
    
    // Strip /freedevtools from the start of DB URL if present
    const relativeUrl = url.startsWith('/freedevtools') ? url.substring(13) : url;
    const fullUrl = `${siteUrl}${relativeUrl}`;
    
    // Determine priority based on URL depth/type
    let priority = '0.8';
    if (relativeUrl === '/tldr/') {
      priority = '0.9'; // Landing page
    } else if (relativeUrl.split('/').filter(Boolean).length === 2) {
      priority = '0.8'; // Cluster page (e.g. /tldr/common/)
    } else {
      priority = '0.8'; // Command page
    }

    return `  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join(
    "\n"
  )}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
