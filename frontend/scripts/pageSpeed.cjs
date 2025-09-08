const fs = require("fs");
const path = require("path");
const { getToolKeys } = require("./parseToolConfig.cjs");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

async function runPageSpeedInsights(
  targetUrl,
  isMinimal = false,
  skipOutput = false
) {
  // Get API key from environment variable
  const apiKey = process.env.PAGESPEED_API_KEY;
  const BASE_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

  if (!apiKey) {
    console.error(
      "Error: PAGESPEED_API_KEY not found in environment variables"
    );
    console.error("Please add your API key to the .env file");
    return null;
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

    // Display all category scores with colored output if not skipped
    if (!skipOutput) {
      // Simple console output with just the scores
      console.log("\n===== PERFORMANCE METRICS =====\n");

      for (const category in lighthouse.categories) {
        const score = lighthouse.categories[category].score * 100;
        const title = lighthouse.categories[category].title;

        // Color coding: green for good (>=90), yellow for okay (>=70), red for poor (<70)
        let color = "\x1b[31m"; // Red (poor)
        if (score >= 90) {
          color = "\x1b[32m"; // Green (good)
        } else if (score >= 70) {
          color = "\x1b[33m"; // Yellow (okay)
        }
        const reset = "\x1b[0m"; // Reset color

        console.log(`${color}${title}: ${score.toFixed(1)}%${reset}`);
      }
    }

    // Generate detailed report file only if not in minimal mode
    if (!isMinimal) {
      generateDetailedReport(targetUrl, json);
    }

    return json;
  } catch (error) {
    console.error("Error fetching PageSpeed Insights:", error);
    return null;
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

// Read the tools configuration
function getAvailableTools() {
  try {
    const toolsFilePath = path.join(
      __dirname,
      "..",
      "src",
      "config",
      "tools.ts"
    );
    if (!fs.existsSync(toolsFilePath)) {
      console.warn("Tools configuration file not found:", toolsFilePath);
      return [];
    }

    const tsContent = fs.readFileSync(toolsFilePath, "utf8");
    return getToolKeys(tsContent);
  } catch (error) {
    console.error("Error reading tools configuration:", error);
    return [];
  }
}

// Sleep function to prevent rate limiting
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Main function
async function main() {
  // Check for flags
  const isRunAll = process.argv.includes("--all");
  const isMinimal = process.argv.includes("--minimal");

  // Show appropriate message about report generation
  if (isMinimal) {
    console.log("Running in minimal mode - no report files will be created");
  }

  if (isRunAll) {
    // Get all tool paths from the configuration
    const availableTools = getAvailableTools();

    if (availableTools.length === 0) {
      console.error("No tools found in the configuration");
      process.exit(1);
    }

    console.log(
      `Running PageSpeed Insights for all ${availableTools.length} tools...`
    );

    // Run PageSpeed Insights for each tool
    for (let i = 0; i < availableTools.length; i++) {
      const tool = availableTools[i];
      const targetUrl = `https://hexmos.com/freedevtools/t/${tool}/`;

      console.log(`\n[${i + 1}/${availableTools.length}] Processing: ${tool}`);
      await runPageSpeedInsights(targetUrl, isMinimal);

      // Add a delay between requests to prevent rate limiting
      if (i < availableTools.length - 1) {
        console.log("Waiting before next request...");
        await sleep(5000); // 5 second delay
      }
    }

    console.log("\nCompleted PageSpeed Insights for all tools!");
  } else {
    // Get the tool path from command line arguments
    // Filter out the --minimal flag if present
    const args = process.argv.slice(2).filter((arg) => arg !== "--minimal");
    const toolPath = args[0];

    if (!toolPath) {
      console.error(
        "Usage: node pageSpeed.cjs <tool-path> [--all] [--minimal]"
      );
      console.error("Example: node pageSpeed.cjs dockerfile-linter");
      console.error("Or to run for all tools: node pageSpeed.cjs --all");
      console.error("Add --minimal to skip report generation");
      process.exit(1);
    }

    // Validate if the tool exists in configuration
    const availableTools = getAvailableTools();
    if (availableTools.length > 0 && !availableTools.includes(toolPath)) {
      console.warn(
        `Warning: "${toolPath}" is not found in tools.ts configuration.`
      );
      console.warn("Available tools:", availableTools.join(", "));
      console.warn("Using the tool path anyway, but it might not exist.");
    }

    const targetUrl = `https://hexmos.com/freedevtools/t/${toolPath}/`;
    await runPageSpeedInsights(targetUrl, isMinimal);
  }
}

// Export functions for use in other modules
module.exports = {
  runPageSpeedInsights,
  getAvailableTools,
  generateDetailedReport,
};

// Only run main function if this script is executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error("Error in main function:", error);
    process.exit(1);
  });
}
