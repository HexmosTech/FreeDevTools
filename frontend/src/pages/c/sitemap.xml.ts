import { getAllCheatsheets } from "@/lib/cheatsheets"; // adjust import path if needed
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  const baseUrl = site ?? "https://hexmos.com/freedevtools"; // fallback if astro.config.mjs.site not set

  const cheatsheetsByCategory = await getAllCheatsheets();

  const urls: string[] = [];

  // Root landing
  urls.push(
    `  <url>
      <loc>${baseUrl}/c/</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
  );

  // Category index pages
  for (const category of Object.keys(cheatsheetsByCategory)) {
    urls.push(
      `  <url>
        <loc>${baseUrl}/c/${category}/</loc>
        <lastmod>${now}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.6</priority>
      </url>`
    );
  }

  // Individual cheatsheet pages
  for (const [category, sheets] of Object.entries(cheatsheetsByCategory)) {
    for (const sheet of sheets) {
      urls.push(
        `  <url>
          <loc>${baseUrl}${sheet.url}</loc>
          <lastmod>${now}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.4</priority>
        </url>`
      );
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
