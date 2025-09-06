const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage, registerFont } = require("canvas");

// Register custom fonts
try {
  registerFont(path.join(__dirname, "fonts/Inter-Black.ttf"), {
    family: "Inter",
    weight: "900",
  });
  registerFont(path.join(__dirname, "fonts/Inter-Light.ttf"), {
    family: "Inter",
    weight: "300",
  });
  registerFont(path.join(__dirname, "fonts/Inter-Regular.ttf"), {
    family: "Inter",
    weight: "400",
  });
} catch (error) {
  console.warn("Inter fonts not found, using system default");
}

// Configuration
const BANNER_CONFIG = {
  templatePath: path.join(__dirname, "template.png"),
  width: 1200,
  height: 630,
  pixelRatio: 2,
  elements: {
    title: {
      x: 27,
      y: 165,
      maxWidth: 500,
      fontSize: 64,
      fontFamily: "Inter",
      fontWeight: "900",
      color: "#1a202c",
      lineHeight: 1.2,
    },
    link: {
      x: 86,
      y: 559,
      maxWidth: 500,
      fontSize: 24,
      fontFamily: "Inter",
      fontWeight: "300",
      color: "#000000",
      lineHeight: 1.2,
    },
    screenshot: {
      x: 627.73,
      y: 83,
      width: 597.27,
      height: 498,
      borderRadius: 8,
      shadow: {
        color: "rgba(0, 0, 0, 0.1)",
        blur: 10,
        offsetX: 0,
        offsetY: 4,
      },
    },
  },
};

async function loadPngTemplate(templatePath) {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`);
  }
  return await loadImage(templatePath);
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine + (currentLine ? " " : "") + word;
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });

  return lines.length;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function setupCanvas() {
  const pixelRatio = BANNER_CONFIG.pixelRatio;
  const canvasWidth = BANNER_CONFIG.width * pixelRatio;
  const canvasHeight = BANNER_CONFIG.height * pixelRatio;

  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext("2d");

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  return { canvas, ctx };
}

function drawTitle(ctx, toolName) {
  const config = BANNER_CONFIG.elements.title;
  ctx.font = `${config.fontWeight} ${config.fontSize}px ${config.fontFamily}`;
  ctx.fillStyle = config.color;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  drawWrappedText(
    ctx,
    toolName,
    config.x,
    config.y,
    config.maxWidth,
    config.fontSize * config.lineHeight
  );
}

function drawLink(ctx, linkSuffix) {
  const config = BANNER_CONFIG.elements.link;
  ctx.font = `${config.fontWeight} ${config.fontSize}px ${config.fontFamily}`;
  ctx.fillStyle = config.color;

  const firstLine = "hexmos.com/freedevtools";
  const secondLine = `/t/${linkSuffix}/`;
  const lineSpacing = config.fontSize * config.lineHeight;

  ctx.fillText(firstLine, config.x, config.y);
  ctx.fillText(secondLine, config.x, config.y + lineSpacing);
}

async function drawScreenshot(ctx, screenshotPath, pixelRatio) {
  if (!screenshotPath || !fs.existsSync(screenshotPath)) return;

  try {
    const screenshot = await loadImage(screenshotPath);
    const config = BANNER_CONFIG.elements.screenshot;

    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    if (config.shadow) {
      ctx.shadowColor = config.shadow.color;
      ctx.shadowBlur = config.shadow.blur * pixelRatio;
      ctx.shadowOffsetX = config.shadow.offsetX;
      ctx.shadowOffsetY = config.shadow.offsetY;
    }

    if (config.borderRadius > 0) {
      drawRoundedRect(
        ctx,
        config.x,
        config.y,
        config.width,
        config.height,
        config.borderRadius
      );
      ctx.clip();
    }

    ctx.drawImage(screenshot, config.x, config.y, config.width, config.height);
    ctx.restore();
  } catch (error) {
    console.warn("Failed to load screenshot:", error.message);
  }
}

async function generateBannerFromPng(toolData, screenshotPath = null) {
  const template = await loadPngTemplate(BANNER_CONFIG.templatePath);
  const { canvas, ctx } = setupCanvas();

  ctx.drawImage(template, 0, 0, BANNER_CONFIG.width, BANNER_CONFIG.height);

  drawTitle(ctx, toolData.name);
  drawLink(ctx, toolData.linkSuffix);
  await drawScreenshot(ctx, screenshotPath, BANNER_CONFIG.pixelRatio);

  return canvas.toBuffer("image/png", {
    compressionLevel: 3,
    filters: canvas.PNG_FILTER_NONE,
  });
}

async function generateToolBanner(toolName, linkSuffix, screenshotPath = null) {
  const toolData = { name: toolName, linkSuffix };

  console.log(`📸 Generating banner for: ${toolData.name}`);
  console.log(`🔗 URL: hexmos.com/freedevtools/t/${toolData.linkSuffix}`);

  if (screenshotPath) {
    console.log(`📷 Screenshot: ${screenshotPath}`);
  } else {
    console.log(`🖼️  No screenshot provided`);
  }

  const bannerBuffer = await generateBannerFromPng(toolData, screenshotPath);

  const outputDir = path.join(__dirname, "..", "..", "public", "tool-banners");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, `${linkSuffix}-banner.png`);
  fs.writeFileSync(outputPath, bannerBuffer);

  console.log(`✅ Banner saved: ${outputPath}`);
  console.log(
    `📐 Dimensions: ${BANNER_CONFIG.width}x${BANNER_CONFIG.height}px`
  );

  return outputPath;
}

function showTemplateInstructions() {
  const templatePath = BANNER_CONFIG.templatePath;
  const templateExists = fs.existsSync(templatePath);

  console.log("🎨 PNG Template Setup Instructions");
  console.log("=".repeat(50));
  console.log(`📁 Template location: ${templatePath}`);
  console.log(
    `📐 Required dimensions: ${BANNER_CONFIG.width}x${BANNER_CONFIG.height}px`
  );

  if (templateExists) {
    console.log("✅ Template file found!");
  } else {
    console.log("❌ Template file not found!");
    console.log("\n📝 To create your template:");
    console.log("1. Export your Figma design as PNG");
    console.log(`2. Save it as: ${templatePath}`);
    console.log(
      `3. Ensure dimensions are: ${BANNER_CONFIG.width}x${BANNER_CONFIG.height}px`
    );
    console.log("4. Design should have space for:");

    const { title, link, screenshot } = BANNER_CONFIG.elements;
    console.log(`   • Title at position (${title.x}, ${title.y})`);
    console.log(`   • Link at position (${link.x}, ${link.y})`);
    console.log(`   • Screenshot area at (${screenshot.x}, ${screenshot.y})`);
    console.log(`     Size: ${screenshot.width}x${screenshot.height}px`);
  }

  return templateExists;
}

function showUsage() {
  console.log("🎨 PNG-based Tool Banner Generator");
  console.log("");
  console.log("Commands:");
  console.log(
    "  setup                                      Check template and show setup instructions"
  );
  console.log(
    "  generate <tool-name> <link-suffix> [image] Generate banner for specific tool"
  );
  console.log("");
  console.log("Examples:");
  console.log("  node create-tool-banner.cjs setup");
  console.log(
    '  node create-tool-banner.cjs generate "JSON Prettifier" json-prettifier'
  );
  console.log(
    '  node create-tool-banner.cjs generate "Password Generator" password-generator ./screenshot.png'
  );
  console.log("");
  console.log("Template Requirements:");
  console.log(
    `  📁 File: ${path.relative(process.cwd(), BANNER_CONFIG.templatePath)}`
  );
  console.log(`  📐 Size: ${BANNER_CONFIG.width}x${BANNER_CONFIG.height}px`);
}

// CLI Interface
if (require.main === module) {
  const [command, toolName, linkSuffix, screenshotPath] = process.argv.slice(2);

  if (command === "setup" || command === "init") {
    showTemplateInstructions();
  } else if (command === "generate") {
    if (!toolName || !linkSuffix) {
      console.error("❌ Error: Tool name and link suffix are required");
      console.log(
        "Usage: node create-tool-banner.cjs generate <tool-name> <link-suffix> [screenshot-path]"
      );
      console.log(
        'Example: node create-tool-banner.cjs generate "JSON Prettifier" json-prettifier ./screenshot.png'
      );
      process.exit(1);
    }

    if (!showTemplateInstructions()) {
      console.error("\n❌ Cannot generate banner without template.png");
      process.exit(1);
    }

    generateToolBanner(toolName, linkSuffix, screenshotPath)
      .then((outputPath) => {
        console.log(`\n🎯 Banner generated successfully!`);
        console.log(`📁 Location: ${outputPath}`);
      })
      .catch((error) => {
        console.error("Generation failed:", error);
        process.exit(1);
      });
  } else {
    showUsage();
  }
}

module.exports = {
  generateToolBanner,
  generateBannerFromPng,
  showTemplateInstructions,
  BANNER_CONFIG,
};
