import { getOverview } from 'db/man_pages/man-pages-utils';
import type { APIRoute } from 'astro';

const MAX_URLS = 5000;

export const prerender = false;

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();

  const overview = await getOverview();
  const totalCount = overview?.total_count || 0;

  const totalSitemaps = Math.ceil(totalCount / MAX_URLS);

  const sitemapUrls: string[] = [];
  for (let i = 1; i <= totalSitemaps; i++) {
    sitemapUrls.push(`${site}/man-pages/sitemap-${i}.xml`);
  }

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
                    <?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
                    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                      ${sitemapUrls
                    .map(
                      (url) => `
                        <sitemap>
                          <loc>${url}</loc>
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
