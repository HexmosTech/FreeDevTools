// src/pages/svg_icons/sitemap-[index].xml.ts
import type { APIRoute } from 'astro';
import path from 'path';

const MAX_URLS = 5000;

export async function getStaticPaths() {
  const { glob } = await import('glob');

  // Loader function for sitemap URLs
  async function loadUrls() {
    const svgFiles = await glob('**/*.svg', { cwd: './public/svg_icons' });
    const now = new Date().toISOString();

    // Build URLs with placeholder for site
    const urls = svgFiles.map((file) => {
      const parts = file.split(path.sep);
      const name = parts.pop()!.replace('.svg', '');
      const category = parts.pop() || 'general';

      return `
        <url>
          <loc>__SITE__/svg_icons/${category}/${name}/</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
          <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
            <image:loc>__SITE__/svg_icons/${category}/${name}.svg</image:loc>
            <image:title>Free ${name} SVG Icon Download</image:title>
          </image:image>
        </url>`;
    });

    // Include landing page
    urls.unshift(`
      <url>
        <loc>__SITE__/svg_icons/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>`);

    return urls;
  }

  // Pre-count total pages
  const svgFiles = await glob('**/*.svg', { cwd: './public/svg_icons' });
  const totalUrls = svgFiles.length + 1;
  const totalPages = Math.ceil(totalUrls / MAX_URLS);

  return Array.from({ length: totalPages }, (_, i) => ({
    params: { index: String(i + 1) },
    props: { loadUrls }, // pass only the function reference
  }));
}

export const GET: APIRoute = async ({ site, params, props }) => {
  const loadUrls: () => Promise<string[]> = props.loadUrls;
  let urls = await loadUrls();

  // Replace placeholder with actual site
  urls = urls.map((u) => u.replace(/__SITE__/g, site));

  // Split into chunks
  const sitemapChunks: string[][] = [];
  for (let i = 0; i < urls.length; i += MAX_URLS) {
    sitemapChunks.push(urls.slice(i, i + MAX_URLS));
  }

  const index = parseInt(params.index, 10) - 1;
  const chunk = sitemapChunks[index];

  if (!chunk) return new Response('Not Found', { status: 404 });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${chunk.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
