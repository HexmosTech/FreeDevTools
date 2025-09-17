import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const { glob } = await import('glob');
  const path = await import('path');

  const now = new Date().toISOString();

  // Get all SVG files
  const svgFiles = await glob('**/*.svg', { cwd: './src/pages/svg_icons/_icons' });

  // Map files to sitemap URLs
  const urls = svgFiles.map(file => {
    const parts = file.split(path.sep);
    const name = parts.pop()!.replace('.svg', '');
    const category = parts.pop() || 'general';
    return `
      <url>
        <loc>${site}/svg_icons/${category}/${name}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.4</priority>
      </url>`;
  });

  // Include the landing page
  urls.unshift(`
    <url>
      <loc>${site}/svg_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
