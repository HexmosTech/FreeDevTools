import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
