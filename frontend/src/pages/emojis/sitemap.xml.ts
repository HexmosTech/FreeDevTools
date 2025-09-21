import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  const { getAllEmojis } = await import("@/lib/emojis");
  const emojis = getAllEmojis();

  const urls: string[] = [];
  // Category landing
  urls.push(
    `  <url>\n    <loc>${site}/emojis/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`
  );

  // Per-category pages
  const categories = new Set<string>();
  for (const e of emojis) {
    const cat = (e.fluentui_metadata?.group ||
      e.emoji_net_data?.category ||
      (e as any).given_category ||
      "other") as string;
    categories.add(cat.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
  }
  for (const cat of Array.from(categories)) {
    urls.push(
      `  <url>\n    <loc>${site}/emojis/${cat}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }

  // Individual emoji pages
  for (const e of emojis) {
    if (!e.slug) continue;
    urls.push(
      `  <url>\n    <loc>${site}/emojis/${e.slug}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
