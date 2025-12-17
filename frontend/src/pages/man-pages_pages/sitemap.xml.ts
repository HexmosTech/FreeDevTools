// import {
//   getManPageCategories,
//   getSubCategories,
//   getSubCategoriesCountByMainCategory,
//   getManPagesCountInSubCategory,
// } from 'db/man_pages/man-pages-utils';
// import type { APIRoute } from 'astro';

// const PRODUCTION_SITE = 'https://hexmos.com/freedevtools';
// const MAX_URLS = 5000;

// // Escape XML special characters
// function escapeXml(unsafe: string): string {
//   return unsafe
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&apos;');
// }

// export const prerender = false;

// export const GET: APIRoute = async ({ site }) => {
//   const now = new Date().toISOString();

//   // Use production site if localhost or undefined
//   const siteUrl =
//     site && !String(site).includes('localhost')
//       ? String(site)
//       : PRODUCTION_SITE;

//   const urls: string[] = [];

//   // Root man-pages page
//   urls.push(
//     `  <url>
//       <loc>${siteUrl}/man-pages/</loc>
//       <lastmod>${now}</lastmod>
//       <changefreq>daily</changefreq>
//       <priority>0.9</priority>
//     </url>`
//   );

//   // Get all categories
//   const categories = await getManPageCategories();

//   // Category pagination (12 items per page)
//   const categoryItemsPerPage = 12;
//   for (const { category: main_category } of categories) {
//     // Get subcategories count for this category
//     const subcategoryCount = await getSubCategoriesCountByMainCategory(main_category);
//     const totalCategoryPages = Math.ceil(
//       subcategoryCount / categoryItemsPerPage
//     );

//     // Add category index page (page 1 is the same as the category root)
//     const escapedCategory = escapeXml(main_category);
//     urls.push(
//       `  <url>
//         <loc>${siteUrl}/man-pages/${escapedCategory}/</loc>
//         <lastmod>${now}</lastmod>
//         <changefreq>daily</changefreq>
//         <priority>0.7</priority>
//       </url>`
//     );

//     // Pagination pages for category (skip page 1 as it's the same as the root)
//     for (let i = 2; i <= totalCategoryPages; i++) {
//       urls.push(
//         `  <url>
//           <loc>${siteUrl}/man-pages/${escapedCategory}/${i}/</loc>
//           <lastmod>${now}</lastmod>
//           <changefreq>daily</changefreq>
//           <priority>0.6</priority>
//         </url>`
//       );
//     }

//     // Get all subcategories for this category
//     // Note: getSubCategoriesByMainCategory returns all subcategories
//     const { getSubCategoriesByMainCategory } = await import('db/man_pages/man-pages-utils');
//     const subcategories = await getSubCategoriesByMainCategory(main_category);

//     // Subcategory pagination (20 items per page)
//     const subcategoryItemsPerPage = 20;
//     for (const { name: sub_category } of subcategories) {
//       // Get man pages count for this subcategory
//       const manPagesCount = await getManPagesCountInSubCategory(main_category, sub_category);
//       const totalSubcategoryPages = Math.ceil(
//         manPagesCount / subcategoryItemsPerPage
//       );

//       // Add subcategory index page (page 1 is the same as the subcategory root)
//       const escapedSubCategory = escapeXml(sub_category);
//       urls.push(
//         `  <url>
//           <loc>${siteUrl}/man-pages/${escapedCategory}/${escapedSubCategory}/</loc>
//           <lastmod>${now}</lastmod>
//           <changefreq>daily</changefreq>
//           <priority>0.6</priority>
//         </url>`
//       );

//       // Pagination pages for subcategory (skip page 1 as it's the same as the root)
//       for (let i = 2; i <= totalSubcategoryPages; i++) {
//         urls.push(
//           `  <url>
//             <loc>${siteUrl}/man-pages/${escapedCategory}/${escapedSubCategory}/${i}/</loc>
//             <lastmod>${now}</lastmod>
//             <changefreq>daily</changefreq>
//             <priority>0.5</priority>
//           </url>`
//         );
//       }
//     }
//   }

//   // If total URLs <= MAX_URLS, return the single sitemap
//   if (urls.length <= MAX_URLS) {
//     const xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${urls.join('\n')}
// </urlset>`;

//     return new Response(xml, {
//       headers: {
//         'Content-Type': 'application/xml',
//         'Cache-Control': 'public, max-age=3600',
//       },
//     });
//   }

//   // Otherwise, split URLs into chunks and return a sitemap index
//   const sitemapChunks: string[][] = [];
//   for (let i = 0; i < urls.length; i += MAX_URLS) {
//     sitemapChunks.push(urls.slice(i, i + MAX_URLS));
//   }

//   const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
// <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   ${sitemapChunks
//       .map(
//         (_, i) => `
//     <sitemap>
//       <loc>${siteUrl}/man-pages_pages/sitemap-${i + 1}.xml</loc>
//       <lastmod>${now}</lastmod>
//     </sitemap>`
//       )
//       .join('\n')}
// </sitemapindex>`;

//   return new Response(indexXml, {
//     headers: {
//       'Content-Type': 'application/xml',
//       'Cache-Control': 'public, max-age=3600',
//     },
//   });
// };
