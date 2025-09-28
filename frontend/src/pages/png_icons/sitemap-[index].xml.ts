import type { APIRoute } from 'astro';

const MAX_URLS = 50000;

export async function getStaticPaths() {
  const { glob } = await import('glob');

  const svgFiles = await glob('**/*.svg', { cwd: './public/svg_icons' });
  const totalUrls = svgFiles.length + 1; // +1 for landing page
  const totalPages = Math.ceil(totalUrls / MAX_URLS);

  return Array.from({ length: totalPages }, (_, i) => ({
    params: { index: String(i + 1) },
  }));
}

// Then your GET() stays the same
export const GET: APIRoute = async ({ site, params }) => {
  const { glob } = await import('glob');
  const path = await import('path');
  const now = new Date().toISOString();

  const MAX_URLS = 50000;

  const svgFiles = await glob("**/*.svg", { cwd: "./public/svg_icons" });

  const urls = svgFiles.map((file) => {
    const parts = file.split(path.sep);
    const name = parts.pop()!.replace(".svg", "");
    const category = parts.pop() || "general";
    return `
      <url>
        <loc>${site}/png_icons/${category}/${name}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
        <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
          <image:loc>${site}/svg_icons/${category}/${name}.svg</image:loc>
          <image:title>Free ${name} PNG Icon Download</image:title>
        </image:image>
      </url>`;
  });

  urls.unshift(`
    <url>
      <loc>${site}/png_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`);

  const sitemapChunks: string[][] = [];
  for (let i = 0; i < urls.length; i += MAX_URLS) {
    sitemapChunks.push(urls.slice(i, i + MAX_URLS));
  }

  const index = parseInt(params.index, 10) - 1;
  const chunk = sitemapChunks[index];

  if (!chunk) return new Response("Not Found", { status: 404 });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${chunk.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
