
import type { APIRoute } from 'astro';
import {
    getAllTldrPlatforms,
    getTldrPlatformCommandsPaginated,
} from '../../../db/tldrs/tldr-utils';

async function getAllData() {
  const platforms: any[] = [];
  const commandsByPlatform: Record<string, any[]> = {};
  const platformPaginationCounts: Record<string, number> = {};

  // 1. Fetch all platforms
  const firstPage = await getAllTldrPlatforms(1);
  if (!firstPage) return { platforms, commandsByPlatform, totalIndexPages: 0, platformPaginationCounts };

  const totalIndexPages = firstPage.total_pages;
  platforms.push(...firstPage.platforms);

  for (let i = 2; i <= totalIndexPages; i++) {
    const page = await getAllTldrPlatforms(i);
    if (page) {
      platforms.push(...page.platforms);
    }
  }

  // 2. Fetch all commands for each platform
  for (const platform of platforms) {
    const platformName = platform.name;
    commandsByPlatform[platformName] = [];
    
    const firstCmdPage = await getTldrPlatformCommandsPaginated(platformName, 1);
    if (firstCmdPage) {
      platformPaginationCounts[platformName] = firstCmdPage.total_pages;
      commandsByPlatform[platformName].push(...firstCmdPage.commands);

      for (let i = 2; i <= firstCmdPage.total_pages; i++) {
        const cmdPage = await getTldrPlatformCommandsPaginated(platformName, i);
        if (cmdPage) {
          commandsByPlatform[platformName].push(...cmdPage.commands);
        }
      }
    }
  }

  return { platforms, commandsByPlatform, totalIndexPages, platformPaginationCounts };
}

export const GET: APIRoute = async ({ site }) => {
  const now = new Date().toISOString();
  const { platforms, commandsByPlatform, totalIndexPages, platformPaginationCounts } = await getAllData();

  if (!site) {
    throw new Error('Site is not defined');
  }

  const urls: string[] = [];
  
  // Category landing
  urls.push(
    `  <url>\n < loc > ${ site } /tldr/ < /loc>\n    <lastmod>${now}</lastmod >\n < changefreq > daily < /changefreq>\n    <priority>0.9</priority >\n </url>`
  );

// Platform pages
for (const platform of platforms) {
  urls.push(
    `  <url>\n    <loc>${site}/tldr/${platform.name}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
  );
}

// Main TLDR pagination pages
for (let i = 2; i <= totalIndexPages; i++) {
  urls.push(
    `  <url>\n    <loc>${site}/tldr/${i}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
  );
}

// Platform pagination pages
for (const [platformName, totalPages] of Object.entries(platformPaginationCounts)) {
  for (let i = 2; i <= totalPages; i++) {
    urls.push(
      `  <url>\n    <loc>${site}/tldr/${platformName}/${i}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }
}

// Individual command pages
for (const [platformName, commands] of Object.entries(commandsByPlatform)) {
  for (const cmd of commands) {
    urls.push(
      `  <url>\n    <loc>${site}/tldr/${platformName}/${cmd.name}/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }
}

// Sort URLs
urls.sort((a, b) => {
  const urlA = a.match(/<loc>(.*?)<\/loc>/)?.[1] || '';
  const urlB = b.match(/<loc>(.*?)<\/loc>/)?.[1] || '';
  return urlA.localeCompare(urlB);
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

return new Response(xml, {
  headers: {
    'Content-Type': 'application/xml',
    'Cache-Control': 'public, max-age=3600',
  },
});
};