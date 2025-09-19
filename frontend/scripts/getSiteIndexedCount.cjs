const xml2js = require("xml2js");

const CX = process.env.G_CUSTOM_SEARCH_ID
const API_KEY = process.env.G_CUSTOM_SEARCH_API;

if (!API_KEY) {
  console.error("Error: G_CUSTOM_SEARCH_API is not set");
  process.exit(1);
}

// Check index count from Google
async function checkUrl(url) {
  console.log(`Checking ${url}`);
  url = "site:" + url;
  const query = encodeURIComponent(url);
  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${API_KEY}&cx=${CX}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return parseInt(data.searchInformation?.totalResults || "0", 10);
  } catch (err) {
    console.error(`❌ Error checking ${url}:`, err.message);
    return 0;
  }
}

// Parse any sitemap (urlset or sitemapindex)
async function parseSitemap(url) {
  try {
    const res = await fetch(url);
    const xml = await res.text();
    const parsed = await xml2js.parseStringPromise(xml);

    if (parsed.sitemapindex?.sitemap) {
      // return child sitemap URLs
      return parsed.sitemapindex.sitemap.map(s => s.loc[0]);
    } else if (parsed.urlset?.url) {
      // return page URLs
      return parsed.urlset.url.map(u => u.loc[0]);
    }
    return [];
  } catch (err) {
    console.error(`❌ Error fetching sitemap ${url}:`, err.message);
    return [];
  }
}

async function main() {
  const sitemapIndexUrl = "https://hexmos.com/freedevtools/sitemap.xml";

  console.log(`📥 Fetching sitemap index: ${sitemapIndexUrl}`);
  const childSitemaps = await parseSitemap(sitemapIndexUrl);

  let totalDiscovered = 0;
  let totalIndexed = 0;

  for (const sm of childSitemaps) {
    const urls = await parseSitemap(sm);
    const expected = urls.length;
    totalDiscovered += expected;

    const indexed = await checkUrl(sm.replace("/sitemap.xml", "/"));
    totalIndexed += indexed;

    const percent = expected > 0 ? ((indexed / expected) * 100).toFixed(2) : "0.00";
    console.log(`✅ ${sm} -> ${indexed}/${expected} (${percent}%)`);
  }

  console.log("\n📊 Final Summary:");
  console.log(`Total discovered: ${totalDiscovered}`);
  console.log(`Total indexed (approx): ${totalIndexed}`);
  console.log(`Index coverage: ${((totalIndexed / totalDiscovered) * 100).toFixed(2)}%`);
}

main();
