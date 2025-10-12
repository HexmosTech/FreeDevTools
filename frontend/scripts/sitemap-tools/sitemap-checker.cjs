// sitemap-checker-pdf-summary.cjs
/**
 * 1. Fetch Status
 *    - Records the HTTP status code
 *    - Flags redirects (301/302/307/308), 404s, and 5xx server errors
 *
 * 2. Canonical Tag Validation
 *    - Extracts <link rel="canonical">
 *    - Ensures it is reachable (HEAD request)
 *    - Marks invalid or mismatched canonicals as issues
 *
 * 3. Robots Meta Noindex Detection
 *    - Detects <meta name="robots" content="noindex"> → marked as non-indexable
 *
 * 4. Soft 404 Detection
 *    - Flags pages with very little text or containing phrases like “Not found” / “Error 404”
 *
 * 5. Duplicate Content Detection (Basic Hashing)
 *    - Generates an MD5 hash from <title> + first 500 characters of body text
 *    - Marks later pages as duplicates of earlier ones
 *
 * 6. Indexability Classification
 *    - Based on above checks, marks each URL as “Yes” (indexable) or “No” (non-indexable)
 *
 * Finally, all results are grouped and exported into a styled PDF report.
 */



const axios = require("axios");
const cheerio = require("cheerio");
const { parseStringPromise } = require("xml2js");
const crypto = require("crypto");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const pLimit = require("p-limit");
const cliProgress = require("cli-progress");

// --------------------------
// Parse named CLI arguments
// --------------------------
const args = {};
process.argv.slice(2).forEach(arg => {
    const match = arg.match(/^--(\w+)=([\s\S]+)$/);
    if (match) args[match[1]] = match[2];
});

const sitemapUrl = args.sitemap;
if (!sitemapUrl) {
    console.error("Usage: node sitemap-checker-pdf-summary.cjs --sitemap=<sitemap-url> [--concurrency=20] [--mode=prod|local] [--maxPages=10]");
    process.exit(1);
}

const concurrency = parseInt(args.concurrency || "20");
const mode = args.mode || "prod";
const maxPages = args.maxPages ? parseInt(args.maxPages) : null;

// Optional: allow self-signed certs in local/dev
if (mode === "local") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// --------------------------
// Helper functions
// --------------------------
function getPdfName(url) {
    const pathPart = url.replace(/^https?:\/\//, '').replace(/\//g, '-').replace(/-sitemap\.xml$/, '');
    return `sitemap_report-${pathPart}-sitemap.pdf`;
}

function toOfflineUrl(url) {
    if (mode === "local") {
        return url.replace(/^https:\/\/hexmos\.com/, "http://localhost:4321");
    }
    return url;
}

// Fetch URL with retries
async function fetchText(url, retries = 2) {
    url = toOfflineUrl(url);
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            return await axios.get(url, {
                timeout: 150000,
                validateStatus: () => true,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (compatible; SitemapChecker/1.0)'
                }
            });
        } catch (err) {
            console.warn(`Attempt ${attempt + 1} failed for ${url}: ${err.message}`);
            if (attempt === retries) return null;
        }
    }
}

async function validateCanonical(url) {
    url = toOfflineUrl(url);
    try {
        const res = await axios.head(url, { timeout: 10000, validateStatus: () => true });
        return res.status === 200;
    } catch {
        return false;
    }
}

async function checkUrl(url, seenHashes) {
    console.log(`Processing: ${url}`);
    url = toOfflineUrl(url);
    let status = "";
    let issues = [];
    let indexable = "Yes";

    try {
        const res = await fetchText(url);
        if (!res) {
            status = "Error";
            indexable = "No";
            issues.push("Fetch failed");
            return { url, status, indexable, issues: issues.join("; ") };
        }

        status = res.status;

        if ([301, 302, 307, 308].includes(status)) {
            indexable = "No";
            issues.push(`Redirect -> ${res.headers.location || "unknown"}`);
        }

        if (status >= 500) {
            indexable = "No";
            issues.push("Server error (5xx)");
        }

        if (status === 404) {
            indexable = "No";
            issues.push("Not found (404)");
        }

        if (status === 200 && res.headers["content-type"]?.includes("text/html")) {
            const $ = cheerio.load(res.data);

            const metaRobots = $('meta[name="robots"]').attr("content");
            if (metaRobots && metaRobots.toLowerCase().includes("noindex")) {
                indexable = "No";
                issues.push("Noindex tag");
            }

            let canonical = $('link[rel="canonical"]').attr("href");
            if (canonical && canonical !== url) {
                if (mode === "local" && canonical.startsWith("https://hexmos.com")) {
                    canonical = toOfflineUrl(canonical);
                }

                const valid = await validateCanonical(canonical);
                if (!valid) {
                    issues.push(`Canonical -> ${canonical} (INVALID)`);
                    indexable = "No";
                } else {
                    issues.push(`Canonical -> ${canonical}`);
                }
            }

            const bodyText = $("body").text().trim();
            if (bodyText.length < 200 || /not found|error 404/i.test(bodyText)) {
                indexable = "No";
                issues.push("Soft 404 suspected");
            }

            const hash = crypto
                .createHash("md5")
                .update($("title").text() + bodyText.slice(0, 500))
                .digest("hex");

            if (seenHashes.has(hash)) {
                indexable = "No";
                issues.push(`Duplicate of ${seenHashes.get(hash)}`);
            } else {
                seenHashes.set(hash, url);
            }
        }
    } catch (err) {
        status = "Error";
        indexable = "No";
        issues.push("Fetch failed");
    }

    return { url, status, indexable, issues: issues.join("; ") };
}

// --------------------------
// Main function
// --------------------------
async function main() {
    console.log(`Loading sitemap: ${sitemapUrl}`);
    const sitemapXml = await axios.get(sitemapUrl).then(r => r.data).catch(() => null);
    if (!sitemapXml) throw new Error("Failed to load sitemap");

    const parsed = await parseStringPromise(sitemapXml);
    const urls = [];

    if (parsed.urlset && parsed.urlset.url) {
        parsed.urlset.url.forEach(u => urls.push(toOfflineUrl(u.loc[0])));
    } else if (parsed.sitemapindex && parsed.sitemapindex.sitemap) {
        for (const sm of parsed.sitemapindex.sitemap) {
            const sub = await axios.get(sm.loc[0]).then(r => r.data).catch(() => null);
            if (!sub) continue;
            const subParsed = await parseStringPromise(sub);
            subParsed.urlset.url.forEach(u => urls.push(toOfflineUrl(u.loc[0])));
        }
    }

    if (maxPages && urls.length > maxPages) {
        console.log(`Limiting to first ${maxPages} URLs for testing`);
        urls.splice(maxPages);
    }

    console.log(`Total URLs to check: ${urls.length}`);

    const progressBar = new cliProgress.SingleBar({
        format: 'Checking URLs |{bar}| {percentage}% || {value}/{total} URLs || Current: {url}',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    }, cliProgress.Presets.shades_classic);

    progressBar.start(urls.length, 0, { url: 'N/A' });

    const limit = pLimit(concurrency);
    const seenHashes = new Map();

    const results = await Promise.all(
        urls.map(url => limit(async () => {
            const result = await checkUrl(url, seenHashes);
            progressBar.increment(1, { url: url });
            return result;
        }))
    );

    progressBar.stop();

    results.sort((a, b) => {
        if (a.indexable === "No" && b.indexable === "Yes") return -1;
        if (a.indexable === "Yes" && b.indexable === "No") return 1;
        return 0;
    });

    const pdfName = getPdfName(sitemapUrl);
    generatePDF(results, pdfName);
}

// --------------------------
// PDF generation
// --------------------------
function generatePDF(results, pdfName) {
    const doc = new PDFDocument({ margin: 20, size: 'A4', layout: 'portrait' });
    doc.pipe(fs.createWriteStream(pdfName));

    // --- Summary ---
    const total = results.length;
    const failed = results.filter(r => r.indexable === "No").length;
    const passed = total - failed;
    const percentPassed = ((passed / total) * 100).toFixed(2);
    const percentFailed = ((failed / total) * 100).toFixed(2);

    doc.fontSize(20).text('Sitemap Indexability Report', { align: 'center' });
    doc.moveDown(2);

    const tableCols = [
        { header: 'Metric', width: 200 },
        { header: 'Count', width: 100 },
        { header: 'Percentage', width: 100 },
    ];
    const rowHeight = 40;
    const startX = 100;
    let y = doc.y;

    let x = startX;
    doc.fontSize(12).fillColor('white').font('Helvetica-Bold');
    tableCols.forEach(col => {
        doc.rect(x, y, col.width, rowHeight).fill('#333').stroke('black');
        doc.fillColor('white').text(col.header, x + 5, y + 12, { width: col.width - 10 });
        x += col.width;
    });

    y += rowHeight;

    const summaryRows = [
        { Metric: 'Total URLs tested', Count: total, Percentage: '100%' },
        { Metric: 'Passed (indexable)', Count: passed, Percentage: `${percentPassed}%` },
        { Metric: 'Failed (non-indexable)', Count: failed, Percentage: `${percentFailed}%` },
    ];

    doc.font('Helvetica').fillColor('black');
    summaryRows.forEach(row => {
        x = startX;
        const fillColor = row.Metric.includes('Failed') ? '#f8d9d9' : '#d9f0d9';
        tableCols.forEach(col => {
            doc.rect(x, y, col.width, rowHeight).fill(fillColor).stroke('black');
            x += col.width;
        });
        x = startX;
        doc.fillColor('black')
            .text(row.Metric, x + 5, y + 12, { width: tableCols[0].width - 10 });
        x += tableCols[0].width;
        doc.text(row.Count.toString(), x + 5, y + 12, { width: tableCols[1].width - 10 });
        x += tableCols[1].width;
        doc.text(row.Percentage, x + 5, y + 12, { width: tableCols[2].width - 10 });
        y += rowHeight;
    });

    doc.addPage();

    // --- Detailed URLs ---
    const cols = [
        { header: 'URL', width: 220 },
        { header: 'Status', width: 60 },
        { header: 'Indexable', width: 60 },
        { header: 'Issues', width: 200 }
    ];
    const rowHeightDetail = 40;
    y = doc.y;

    let xDetail = 20;
    doc.fontSize(10).fillColor('white').font('Helvetica-Bold');
    cols.forEach(col => {
        doc.rect(xDetail, y, col.width, rowHeightDetail).fill('#333').stroke('black');
        doc.fillColor('white').text(col.header, xDetail + 5, y + 12, { width: col.width - 10 });
        xDetail += col.width;
    });

    y += rowHeightDetail;
    doc.font('Helvetica').fillColor('black');

    results.forEach(r => {
        xDetail = 20;
        const fillColor = r.indexable === "Yes" ? '#d9f0d9' : '#f8d9d9';
        cols.forEach(col => {
            doc.rect(xDetail, y, col.width, rowHeightDetail).fill(fillColor).stroke('black');
            xDetail += col.width;
        });
        xDetail = 20;
        doc.fillColor('black')
            .text(r.url, xDetail + 5, y + 12, { width: cols[0].width - 10, ellipsis: true });
        xDetail += cols[0].width;
        doc.text(r.status, xDetail + 5, y + 12, { width: cols[1].width - 10 });
        xDetail += cols[1].width;
        doc.text(r.indexable, xDetail + 5, y + 12, { width: cols[2].width - 10 });
        xDetail += cols[2].width;
        doc.text(r.issues, xDetail + 5, y + 12, { width: cols[3].width - 10, ellipsis: true });
        y += rowHeightDetail;
        if (y > doc.page.height - 50) {
            doc.addPage();
            y = 50;
        }
    });

    doc.end();
    console.log(`✅ PDF report saved as ${pdfName}`);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
