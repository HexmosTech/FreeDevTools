// sitemap-transform.js
const axios = require("axios");
const { parseStringPromise } = require("xml2js");
const fs = require("fs");

const SITEMAP_URL = "http://localhost:4321/freedevtools/emojis/apple-emojis/sitemap.xml";
const OUTPUT_FILE = "transformed-urls.json";

async function fetchSitemap(url) {
  const response = await axios.get(url);
  return response.data;
}

function transformUrl(url) {
  // Remove the '/apple-emojis' segment from the path
  return url.replace("/apple-emojis", "");
}

async function main() {
  try {
    const xmlData = await fetchSitemap(SITEMAP_URL);
    const parsed = await parseStringPromise(xmlData);

    // Assuming standard sitemap structure: <urlset><url><loc>URL</loc></url></urlset>
    const urls = parsed.urlset.url.map(u => u.loc[0]);
    const transformedUrls = urls.map(transformUrl);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(transformedUrls, null, 2));
    console.log(`✅ Transformed URLs saved to ${OUTPUT_FILE}`);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
