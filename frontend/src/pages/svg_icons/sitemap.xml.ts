import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ site, params }) => {
  const { glob } = await import('glob');
  const path = await import('path');

  const now = new Date().toISOString();
  const MAX_URLS = 5000;

  // Always use site from .env file (SITE variable) or astro.config.mjs
  // NODE_ENV can be "dev" or "prod" (lowercase)
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';

  // Use SITE from .env if available, otherwise use site parameter, otherwise fallback
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';

  // Use process.cwd() for reliable path resolution in both dev and build
  // In build mode, process.cwd() points to project root
  const projectRoot = process.cwd();
  const svgIconsDir = path.join(projectRoot, 'public', 'svg_icons');

  // Get all SVG files using absolute path
  const svgFiles = await glob('**/*.svg', {
    cwd: svgIconsDir,
    absolute: false,
    ignore: ['node_modules/**'],
  });

  // Map files to sitemap URLs with image info
  const urls = svgFiles.map((file) => {
    const parts = file.split(path.sep);
    const name = parts.pop()!.replace('.svg', '');
    const category = parts.pop() || 'general';

    return `
      <url>
        <loc>${siteUrl}/svg_icons/${category}/${name}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
        <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
          <image:loc>${siteUrl}/svg_icons/${category}/${name}.svg</image:loc>
          <image:title>Free ${name} SVG Icon Download</image:title>
        </image:image>
      </url>`;
  });

  // Include the landing page
  urls.unshift(`
    <url>
      <loc>${siteUrl}/svg_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`);

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
  }

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
      <?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>

<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/svg_icons_pages/sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
  ${sitemapChunks
    .map(
      (_, i) => `
    <sitemap>
      <loc>${siteUrl}/svg_icons/sitemap-${i + 1}.xml</loc>
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
