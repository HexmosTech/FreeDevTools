const path = require("path");
const fs = require("fs");
const pageSpeedPath = path.join(__dirname, "pageSpeed.cjs");

// Import the PageSpeed script as a module
const pageSpeedModule = require(pageSpeedPath);

// Define the minimum thresholds for each metric
const THRESHOLDS = {
  Performance: 80,
  Accessibility: 80,
  "Best Practices": 80,
  SEO: 80,
};

// Sleep function to prevent rate limiting
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Extract scores from the PageSpeed API response
function extractScores(json) {
  const lighthouse = json.lighthouseResult;
  const scores = {};

  for (const category in lighthouse.categories) {
    const score = lighthouse.categories[category].score * 100;
    scores[lighthouse.categories[category].title] = score;
  }

  return scores;
}

// Function to run PageSpeed for all tools and collect results
async function runPageSpeedAll() {
  try {
    // Get the available tools
    const availableTools = pageSpeedModule.getAvailableTools();

    if (availableTools.length === 0) {
      console.error("No tools found in the configuration");
      process.exit(1);
    }

    console.log(
      `Running PageSpeed Insights for all ${availableTools.length} tools...`
    );

    const results = {};

    // Run PageSpeed Insights for each tool
    for (let i = 0; i < availableTools.length; i++) {
      const tool = availableTools[i];
      const targetUrl = `https://hexmos.com/freedevtools/t/${tool}/`;

      console.log(`\n[${i + 1}/${availableTools.length}] Processing: ${tool}`);

      // Run PageSpeed for the current tool, with skipOutput=true to avoid duplicate output
      const json = await pageSpeedModule.runPageSpeedInsights(
        targetUrl,
        true,
        true
      );

      if (json && json.lighthouseResult) {
        // Extract and store scores
        results[tool] = extractScores(json);

        // Display scores with color coding
        console.log("\n===== PERFORMANCE METRICS =====\n");
        for (const [metric, score] of Object.entries(results[tool])) {
          const threshold = THRESHOLDS[metric] || 0;
          const passedThreshold = score >= threshold;

          // Use terminal colors for better visibility
          const color = passedThreshold ? "\x1b[32m" : "\x1b[31m"; // Green for pass, red for fail
          const reset = "\x1b[0m";

          console.log(
            `${color}${metric}: ${score.toFixed(1)}%${reset} ${!passedThreshold ? `(below threshold: ${threshold}%)` : ""}`
          );
        }
      }

      // Add a delay between requests to prevent rate limiting
      if (i < availableTools.length - 1) {
        console.log("\nWaiting before next request...");
        await sleep(5000); // 5 second delay
      }
    }

    return results;
  } catch (error) {
    console.error("Error running PageSpeed for all tools:", error);
    throw error;
  }
}

// Function to check if all scores meet the thresholds
function checkThresholds(results) {
  const failures = [];

  for (const [tool, metrics] of Object.entries(results)) {
    for (const [metric, score] of Object.entries(metrics)) {
      const threshold = THRESHOLDS[metric] || 0;

      if (score < threshold) {
        failures.push({
          tool,
          metric,
          score,
          threshold,
        });
      }
    }
  }

  return failures;
}

// Main function
async function main() {
  try {
    console.log("Running PageSpeed checks with minimum thresholds:");
    Object.entries(THRESHOLDS).forEach(([metric, threshold]) => {
      console.log(`  - ${metric}: ${threshold}%`);
    });

    const results = await runPageSpeedAll();

    // Check if all scores meet the thresholds
    const failures = checkThresholds(results);

    if (failures.length > 0) {
      console.error(
        "\n❌ The following metrics are below the required thresholds:"
      );

      failures.forEach(({ tool, metric, score, threshold }) => {
        console.error(
          `  - ${tool}: ${metric} score is ${score.toFixed(1)}% (minimum required: ${threshold}%)`
        );
      });

      console.error("\nPlease fix these issues before deploying.");
      process.exit(1);
    }

    console.log("\n✅ All PageSpeed metrics meet the minimum thresholds!");
    console.log("Deploy can proceed.");
    process.exit(0);
  } catch (error) {
    console.error("Error running PageSpeed checks:", error);
    process.exit(1);
  }
}

main();
