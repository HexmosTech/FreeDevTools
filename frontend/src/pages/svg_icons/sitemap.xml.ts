import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const { glob } = await import("glob");
  const path = await import("path");

  const now = new Date().toISOString();

  // Get all SVG files
  const svgFiles = await glob("**/*.svg", { cwd: "./public/svg_icons" });

  // Map files to sitemap URLs with image information
  const urls = svgFiles.map((file) => {
    const parts = file.split(path.sep);
    const name = parts.pop()!.replace(".svg", "");
    const category = parts.pop() || "general";
    return `
      <url>
        <loc>${site}/svg_icons/${category}/${name}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
        <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
          <image:loc>${site}/svg_icons/${category}/${name}.svg</image:loc>
          <image:title>Free ${name} SVG Icon Download</image:title>
          <image:caption>Download ${name} SVG icon for free. PNG icon. No registration required. Unlimited Downloads.</image:caption>
        </image:image>
      </url>`;
  });

  // Include the landing page
  urls.unshift(`
    <url>
      <loc>${site}/svg_icons/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
