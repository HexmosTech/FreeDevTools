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
    // Ensure URL starts with /freedevtools if not already (it should be from DB)
    // But DB stores relative paths like /freedevtools/tldr/...
    // We need to prepend siteUrl (which might include /freedevtools if configured that way, but usually is domain)
    // siteUrl in this context is usually http://localhost:4321/freedevtools
    
    // If DB url starts with /freedevtools, and siteUrl ends with /freedevtools, we might double up.
    // Let's assume siteUrl is the base domain + base path.
    // Actually, siteUrl constructed above includes /freedevtools.
    // And DB urls start with /freedevtools.
    // So we should strip /freedevtools from one of them or handle it carefully.
    
    // DB URL: /freedevtools/tldr/common/tar/
    // Site URL: http://localhost:4321/freedevtools
    // Result should be: http://localhost:4321/freedevtools/tldr/common/tar/
    
    // Let's strip /freedevtools from the start of DB URL if present
    const relativeUrl = url.startsWith('/freedevtools') ? url.substring(13) : url;
    const fullUrl = `${siteUrl}${relativeUrl}`;
    
    return `  <url>\n    <loc>${fullUrl}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join(
    "\n"
  )}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
