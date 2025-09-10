const fs = require("fs");
const path = require("path");
const { parseToolsConfig } = require("./parseToolConfig.cjs");

const projectRoot = path.resolve(__dirname, "..", "..");
const frontendDir = path.join(projectRoot, "frontend");
const toolsFilePath = path.join(frontendDir, "src", "config", "tools.ts");

// Preferred and legacy screenshot directories
const screenshotsDirPreferred = path.join(
  frontendDir,
  "scripts",
  "tool-banners",
  "tool-screenshots"
);
const screenshotsDirLegacy = path.join(
  frontendDir,
  "src",
  "assets",
  "tool-screenshots"
);
const defaultScreenshotPath = path.join(
  screenshotsDirPreferred,
  "ss-default.png"
);

const { generateToolBanner, BANNER_CONFIG } = require(
  path.join(__dirname, "tool-banners", "create-tool-banner.cjs")
);

async function main() {
  if (!fs.existsSync(toolsFilePath)) {
    console.error(`tools.ts not found at ${toolsFilePath}`);
    process.exit(1);
  }

  const templatePath = BANNER_CONFIG?.templatePath
    ? BANNER_CONFIG.templatePath
    : path.join(__dirname, "tool-banners", "template.png");
  if (!fs.existsSync(templatePath)) {
    console.warn(
      `⚠️ Missing template at ${templatePath}. Skipping banner generation.`
    );
    return;
  }

  const tsContent = fs.readFileSync(toolsFilePath, "utf8");
  const tools = parseToolsConfig(tsContent);

  if (!tools.length) {
    console.warn("⚠️ No tools found in tools.ts. Skipping banner generation.");
    return;
  }

  console.log("\n----- Generating tool banners -----\n");

  if (
    !fs.existsSync(screenshotsDirPreferred) &&
    !fs.existsSync(screenshotsDirLegacy)
  ) {
    console.warn(
      `⚠️ Screenshots directory not found: ${screenshotsDirPreferred} (or legacy: ${screenshotsDirLegacy})`
    );
  }

  const missingScreenshots = [];
  for (const { key, name } of tools) {
    const candidatePreferred = path.join(
      screenshotsDirPreferred,
      `ss-${key}.png`
    );
    const candidateLegacy = path.join(screenshotsDirLegacy, `ss-${key}.png`);
    let screenshotPath = null;
    if (fs.existsSync(candidatePreferred)) {
      screenshotPath = candidatePreferred;
    } else if (fs.existsSync(candidateLegacy)) {
      screenshotPath = candidateLegacy;
    }

    if (!screenshotPath) {
      const expectedHint = fs.existsSync(screenshotsDirPreferred)
        ? path.join(screenshotsDirPreferred, `ss-${key}.png`)
        : path.join(screenshotsDirLegacy, `ss-${key}.png`);
      console.warn(
        `⚠️ Missing screenshot for '${key}' (expected: ${expectedHint})`
      );
      missingScreenshots.push({ key, path: expectedHint });
      screenshotPath = fs.existsSync(defaultScreenshotPath)
        ? defaultScreenshotPath
        : null;
    }

    try {
      // Silence verbose logs during generation
      const originalLog = console.log;
      const originalWarn = console.warn;
      try {
        console.log = function () {};
        console.warn = function () {};
        await generateToolBanner(name, key, screenshotPath);
      } finally {
        console.log = originalLog;
        console.warn = originalWarn;
      }
      console.log(`Generated banner: ${name}`);
    } catch (err) {
      console.warn(`Failed to generate banner for '${key}': ${err.message}`);
      // Continue with next tool
    }
  }

  if (missingScreenshots.length > 0) {
    const list = missingScreenshots.map((m) => m.key).join(", ");
    console.warn(`⚠️ Missing screenshots summary: ${list}`);
  }

  console.log("\n----- Finished generating tool banners -----\n");
}

main().catch((err) => {
  console.error("Unexpected error during banner generation:", err);
  // Do not block deployment
});
