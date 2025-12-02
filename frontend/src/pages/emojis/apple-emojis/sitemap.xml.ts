import type { APIRoute } from "astro";
import { getSitemapAppleEmojis } from "db/emojis/emojis-utils";

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();

  // Use site from .env file (SITE variable) or astro.config.mjs
  const envSite = process.env.SITE;
  const siteStr = site?.toString() || '';
  const siteUrl = envSite || siteStr || 'http://localhost:4321/freedevtools';

  // Predefined allowed categories
  const allowedCategories = [
    "Activities",
    "Animals & Nature",
    "Food & Drink",
    "Objects",
    "People & Body",
    "Smileys & Emotion",
    "Symbols",
    "Travel & Places",
    "Flags",
  ];

  // Convert to slug format
  const allowedSlugs = new Set(
    allowedCategories.map((c) =>
      c.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    )
  );

  // Fetch Apple emojis (lightweight - only slug and category)
  const emojis = await getSitemapAppleEmojis();
  const urls: string[] = [];

  // Landing Page
  urls.push(
    `  <url>\n    <loc>${siteUrl}/emojis/apple-emojis/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`
  );

  // Category pages (only allowed categories)
  const categories = new Set<string>();

  for (const e of emojis) {
    const cat = e.category;
    if (!cat) continue;

    const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (allowedSlugs.has(slug)) {
      categories.add(slug);
    }
  }

  for (const cat of Array.from(categories)) {
    urls.push(
      `  <url>\n    <loc>${siteUrl}/emojis/apple-emojis/${cat}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }

  // Individual emoji pages
  for (const e of emojis) {
    if (!e.slug) continue;

    urls.push(
      `  <url>\n    <loc>${siteUrl}/emojis/apple-emojis/${e.slug}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join(
    "\n"
  )}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
