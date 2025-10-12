// check-trailing-slash.cjs
const axios = require("axios");
const cheerio = require("cheerio");
const urlLib = require("url");

// Command-line argument: start URL
const startUrl = process.argv[2];
if (!startUrl) {
    console.error("Usage: node check-trailing-slash.cjs <start-url>");
    process.exit(1);
}

// Keep track of visited URLs to avoid cycles
const visited = new Set();
const missingSlashLinks = [];

// Extract child links
function getChildLinks(base, html) {
    const $ = cheerio.load(html);
    const links = [];
    $("a[href]").each((i, el) => {
        const href = $(el).attr("href");
        if (!href) return;

        const absolute = urlLib.resolve(base, href);
        const urlObj = new URL(absolute);

        // Only consider links under the same origin
        if (urlObj.origin !== new URL(base).origin) return;

        // Only child paths: must start with the base path
        if (!urlObj.pathname.startsWith(new URL(base).pathname)) return;

        links.push(absolute);
    });
    return links;
}

// Check if a URL is missing trailing slash
function lacksTrailingSlash(url) {
    const urlObj = new URL(url);
    // Ignore query or hash
    return !urlObj.pathname.endsWith("/");
}

// Recursive crawl
async function crawl(url) {
    if (visited.has(url)) return;
    visited.add(url);

    try {
        const res = await axios.get(url, {
            timeout: 150000,
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)' }
        });

        // Extract child links
        const childLinks = getChildLinks(url, res.data);

        // Check each child link
        for (const link of childLinks) {
            if (lacksTrailingSlash(link)) {
                missingSlashLinks.push(link);
            }
        }

        // Recurse into child pages only
        for (const link of childLinks) {
            await crawl(link);
        }

    } catch (err) {
        console.error(`Failed to fetch ${url}: ${err.message}`);
    }
}

// Main
(async () => {
    console.log(`Starting crawl from: ${startUrl}`);
    await crawl(startUrl);

    console.log("\n===== LINKS MISSING TRAILING SLASH =====");
    missingSlashLinks.forEach(link => console.log(link));
    console.log(`\nTotal: ${missingSlashLinks.length} link(s) missing trailing slash`);
})();
