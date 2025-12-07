import { getAllManPagesPaginated } from 'db/man_pages/man-pages-utils';
import type { APIRoute } from 'astro';

const MAX_URLS = 5000;

export const prerender = false;

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ params, site }) => {
  const index = parseInt(params.index || '1', 10);
  if (isNaN(index) || index < 1) {
    return new Response('Invalid index', { status: 400 });
  }

  const offset = (index - 1) * MAX_URLS;
  const limit = MAX_URLS;

  const manPages = await getAllManPagesPaginated(limit, offset);

  if (!manPages || manPages.length === 0) {
    return new Response('Not Found', { status: 404 });
  }

  const now = new Date().toISOString();

  const siteUrl = site?.toString().replace(/\/$/, '') || 'https://hexmos.com/freedevtools';

  const urls = manPages.map((page) => {
    const escapedCategory = escapeXml(page.main_category);
    const escapedSubCategory = escapeXml(page.sub_category);
    const escapedSlug = escapeXml(page.slug);

    return `
    <url>
      <loc>${siteUrl}/man-pages/${escapedCategory}/${escapedSubCategory}/${escapedSlug}/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>monthly</changefreq>
    </url>`;
  });

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
};

export function getStaticPaths() {
  return [];
}

