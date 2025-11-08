import type { APIRoute } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import {
  generateTldrPlatformStaticPaths,
  generateTldrStaticPaths,
} from '../../lib/tldr-utils';

async function getCommandsByPlatform() {
  const entries: CollectionEntry<'tldr'>[] = await getCollection('tldr');
  const byPlatform: Record<string, { url: string }[]> = {};
  for (const entry of entries) {
    const parts = entry.id.split('/');
    const platform = parts[parts.length - 2];
    const fileName = parts[parts.length - 1];
    const name = fileName.replace(/\.md$/i, '');
    if (!byPlatform[platform]) byPlatform[platform] = [];
    byPlatform[platform].push({
      url: entry.data.path || `/freedevtools/tldr/${platform}/${name}`,
    });
  }
  return byPlatform;
}

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  const byPlatform = await getCommandsByPlatform();
  const paginationPaths = await generateTldrStaticPaths();
  const platformPaginationPaths = await generateTldrPlatformStaticPaths();

  if (!site) {
    throw new Error('Site is not defined');
  }

  const urls: string[] = [];
  // Category landing
  urls.push(
    `  <url>\n    <loc>${site}/tldr/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`
  );
  // Platform pages
  for (const platform of Object.keys(byPlatform)) {
    urls.push(
      `  <url>\n    <loc>${site}/tldr/${platform}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }

  // Main TLDR pagination pages (tldr/2/, tldr/3/, etc.)
  for (const path of paginationPaths) {
    const page = path.params.page;
    urls.push(
      `  <url>\n    <loc>${site}/tldr/${page}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }

  // Platform pagination pages (tldr/linux/2/, tldr/windows/2/, etc.)
  for (const path of platformPaginationPaths) {
    const { platform, page } = path.params;
    urls.push(
      `  <url>\n    <loc>${site}/tldr/${platform}/${page}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }
  // Individual command pages
  for (const [platform, commands] of Object.entries(byPlatform)) {
    for (const cmd of commands) {
      // Remove /freedevtools prefix and ensure proper URL construction
      const cleanUrl = cmd.url.replace('/freedevtools', '');
      // Convert site URL to string and ensure proper URL construction
      const siteStr = site.toString();
      const baseUrl = siteStr.endsWith('/') ? siteStr.slice(0, -1) : siteStr;
      // Don't add extra slash - cleanUrl already has the correct path
      const finalUrl = cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`;
      urls.push(
        `  <url>\n    <loc>${baseUrl}${finalUrl}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
      );
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
