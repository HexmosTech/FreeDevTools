const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

async function runPageSpeedInsights(targetUrl) {
  // Get API key from environment variable
  const apiKey = process.env.PAGESPEED_API_KEY;
  const BASE_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

  if (!apiKey) {
    console.error(
      "Error: PAGESPEED_API_KEY not found in environment variables"
    );
    console.error("Please add your API key to the .env file");
    return;
  }
  const url = new URL(BASE_URL);
  url.searchParams.set("url", targetUrl);
  url.searchParams.set("key", apiKey);

  // Set categories correctly for the API
  url.searchParams.append("category", "performance");
  url.searchParams.append("category", "accessibility");
  url.searchParams.append("category", "best-practices");
  url.searchParams.append("category", "seo");

  try {
    console.log(`Running PageSpeed Insights for: ${targetUrl}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const json = await response.json();
    const lighthouse = json.lighthouseResult;

    // Simple console output with just the scores
    console.log("\n===== PERFORMANCE METRICS =====\n");

    // Display all category scores
    for (const category in lighthouse.categories) {
      const score = lighthouse.categories[category].score * 100;
      console.log(
        `${lighthouse.categories[category].title}: ${score.toFixed(1)}%`
      );
    }

    // Generate detailed report file
    generateDetailedReport(targetUrl, json);

    return json;
  } catch (error) {
    console.error("Error fetching PageSpeed Insights:", error);
  }
}

function generateDetailedReport(targetUrl, data) {
  const lighthouse = data.lighthouseResult;
  const audits = lighthouse.audits;

  // Extract tool name from URL path (e.g., "dockerfile-linter" from the URL path)
  const urlPath = new URL(targetUrl).pathname;
  const toolName =
    urlPath
      .split("/")
      .filter((segment) => segment.length > 0)
      .pop() || "unknown-tool";

  const currentDate = new Date().toISOString().split("T")[0];

  // Create the pageSpeedReport directory if it doesn't exist
  const reportDir = path.join(__dirname, "pageSpeedReport");
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  // Simplified filename as requested
  const reportFileName = path.join(reportDir, `${toolName}_${currentDate}.txt`);

  let reportContent = [];

  // Report Header
  reportContent.push("==================================================");
  reportContent.push(`PAGESPEED INSIGHTS DETAILED REPORT`);
  reportContent.push(`Tool: ${toolName}`);
  reportContent.push(`URL: ${lighthouse.finalUrl}`);
  reportContent.push(`Date: ${currentDate}`);
  reportContent.push(
    `Fetch Time: ${new Date(lighthouse.fetchTime).toLocaleString()}`
  );
  reportContent.push(`Lighthouse Version: ${lighthouse.lighthouseVersion}`);
  reportContent.push("==================================================\n");

  // Summary Scores
  reportContent.push("SUMMARY SCORES");
  reportContent.push("--------------------------------------------------");
  for (const category in lighthouse.categories) {
    const score = lighthouse.categories[category].score * 100;
    reportContent.push(
      `${lighthouse.categories[category].title}: ${score.toFixed(1)}%`
    );
  }
  reportContent.push("");

  // Core Web Vitals and Performance Metrics
  reportContent.push("CORE WEB VITALS AND PERFORMANCE METRICS");
  reportContent.push("--------------------------------------------------");
  const timingMetrics = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "total-blocking-time",
    "cumulative-layout-shift",
    "speed-index",
    "interactive",
  ];

  timingMetrics.forEach((metric) => {
    if (audits[metric]) {
      const audit = audits[metric];
      reportContent.push(`${audit.title}: ${audit.displayValue || "N/A"}`);
      reportContent.push(`  Score: ${(audit.score * 100).toFixed(1)}%`);
      reportContent.push(`  Description: ${audit.description}`);
      reportContent.push("");
    }
  });

  // Detailed Category Analysis
  const categories = ["performance", "accessibility", "best-practices", "seo"];

  for (const category of categories) {
    if (!lighthouse.categories[category]) continue;

    reportContent.push(
      `${lighthouse.categories[category].title.toUpperCase()} ANALYSIS`
    );
    reportContent.push("--------------------------------------------------");

    const categoryAudits = lighthouse.categories[category].auditRefs;

    // Opportunities
    const opportunities = categoryAudits
      .filter(
        (ref) =>
          ref.group === "load-opportunities" &&
          audits[ref.id].score !== null &&
          audits[ref.id].score < 1
      )
      .map((ref) => audits[ref.id]);

    if (opportunities.length > 0) {
      reportContent.push("\nOpportunities for improvement:");
      opportunities.forEach((audit) => {
        reportContent.push(`  - ${audit.title}`);
        reportContent.push(`    Score: ${(audit.score * 100).toFixed(1)}%`);
        reportContent.push(`    Description: ${audit.description}`);

        // Display savings if available
        if (audit.details && audit.details.overallSavingsMs) {
          reportContent.push(
            `    Potential Savings: ${audit.details.overallSavingsMs}ms`
          );
        }

        // Display items that need attention if available
        if (
          audit.details &&
          audit.details.items &&
          audit.details.items.length > 0
        ) {
          reportContent.push(
            `    Items to address: ${audit.details.items.length}`
          );
          audit.details.items.forEach((item, i) => {
            const itemValue = Object.values(item)[0] || "Item";
            reportContent.push(`      ${i + 1}. ${itemValue}`);
          });
        }
        reportContent.push("");
      });
    }

    // Diagnostics
    const diagnostics = categoryAudits
      .filter(
        (ref) =>
          ref.group === "diagnostics" &&
          audits[ref.id].score !== null &&
          audits[ref.id].score < 1
      )
      .map((ref) => audits[ref.id]);

    if (diagnostics.length > 0) {
      reportContent.push("\nDiagnostics:");
      diagnostics.forEach((audit) => {
        reportContent.push(`  - ${audit.title}`);
        reportContent.push(`    Score: ${(audit.score * 100).toFixed(1)}%`);
        reportContent.push(`    Description: ${audit.description}`);
        reportContent.push("");
      });
    }

    // Passed Audits count
    const passedAudits = categoryAudits.filter(
      (ref) => audits[ref.id].score === 1
    ).length;

    reportContent.push(`Passed audits: ${passedAudits}`);
    reportContent.push("");
  }

  // Final advice
  reportContent.push("RECOMMENDATIONS");
  reportContent.push("--------------------------------------------------");
  reportContent.push(
    "Focus on improving the areas with the lowest scores first."
  );
  reportContent.push(
    "Pay particular attention to Core Web Vitals as they directly impact user experience and SEO."
  );
  reportContent.push(`Report generated on: ${new Date().toLocaleString()}`);
  reportContent.push("");

  // Write the report to the file in the pageSpeedReport directory
  fs.writeFileSync(reportFileName, reportContent.join("\n"));
  console.log(`\nDetailed report saved to: ${reportFileName}`);
}

// Get the tool path from command line arguments
const toolPath = process.argv[2] || "dockerfile-linter";
const targetUrl = `https://hexmos.com/freedevtools/t/${toolPath}/`;
runPageSpeedInsights(targetUrl);
