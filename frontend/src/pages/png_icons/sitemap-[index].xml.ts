// src/pages/png_icons/sitemap-[index].xml.ts

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site, params }) => {
  const { glob } = await import("glob");
  const path = await import("path");

  const now = new Date().toISOString();
  const MAX_URLS = 50000;

  // Get all SVG files
  const svgFiles = await glob("**/*.svg", { cwd: "./public/svg_icons" });

  // Map files to sitemap URLs with image info
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

  // Include the landing page
  urls.unshift(`
    <url>
      <loc>${site}/png_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`);

  // Split into chunks of MAX_URLS
  const sitemapChunks: string[][] = [];
  for (let i = 0; i < urls.length; i += MAX_URLS) {
    sitemapChunks.push(urls.slice(i, i + MAX_URLS));
  }

  // Get the index from the filename: sitemap-1.xml → index = 0
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
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
