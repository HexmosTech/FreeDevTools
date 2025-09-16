// Helper function to extract colors from SVG
export function extractColorsFromSVG(svgContent: string): string[] {
  console.log("🔍 DEBUG: extractColorsFromSVG called with:", svgContent);
  const colors = new Set<string>();

  // Remove background shapes first to avoid extracting their colors
  const cleanSvg = svgContent.replace(
    /<(rect|circle)[^>]*class="background-shape"[^>]*\/>/g,
    ""
  );
  console.log("🔍 DEBUG: Clean SVG:", cleanSvg);

  // Extract fill colors from attributes
  const fillMatches = cleanSvg.match(/fill="([^"]+)"/g);
  console.log("🔍 DEBUG: Fill matches:", fillMatches);
  if (fillMatches) {
    fillMatches.forEach((match) => {
      const color = match.match(/fill="([^"]+)"/)?.[1];
      console.log("🔍 DEBUG: Found fill color:", color);
      if (color && isValidColor(color)) {
        const normalizedColor = normalizeColor(color);
        console.log("🔍 DEBUG: Normalized color:", normalizedColor);
        colors.add(normalizedColor);
      }
    });
  }

  // Extract stroke colors from attributes
  const strokeMatches = cleanSvg.match(/stroke="([^"]+)"/g);
  console.log("🔍 DEBUG: Stroke matches:", strokeMatches);
  if (strokeMatches) {
    strokeMatches.forEach((match) => {
      const color = match.match(/stroke="([^"]+)"/)?.[1];
      console.log("🔍 DEBUG: Found stroke color:", color);
      if (color && isValidColor(color)) {
        const normalizedColor = normalizeColor(color);
        console.log("🔍 DEBUG: Normalized stroke color:", normalizedColor);
        colors.add(normalizedColor);
      }
    });
  }

  // Extract colors from CSS styles
  const styleMatches = cleanSvg.match(/style="([^"]+)"/g);
  if (styleMatches) {
    styleMatches.forEach((match) => {
      const styleContent = match.match(/style="([^"]+)"/)?.[1];
      if (styleContent) {
        // Extract fill and stroke from CSS
        const fillMatch = styleContent.match(/fill:\s*([^;]+)/);
        if (fillMatch && isValidColor(fillMatch[1].trim())) {
          colors.add(normalizeColor(fillMatch[1].trim()));
        }

        const strokeMatch = styleContent.match(/stroke:\s*([^;]+)/);
        if (strokeMatch && isValidColor(strokeMatch[1].trim())) {
          colors.add(normalizeColor(strokeMatch[1].trim()));
        }
      }
    });
  }

  // Extract colors from stop elements (gradients)
  const stopMatches = cleanSvg.match(/stop-color="([^"]+)"/g);
  if (stopMatches) {
    stopMatches.forEach((match) => {
      const color = match.match(/stop-color="([^"]+)"/)?.[1];
      if (color && isValidColor(color)) {
        colors.add(normalizeColor(color));
      }
    });
  }

  // If still no colors found, check for elements that might have default colors
  if (colors.size === 0) {
    console.log(
      "🔍 DEBUG: No explicit colors found, checking for elements with default colors"
    );

    // Look for path, circle, rect, polygon, etc. elements that would have default black fill
    const elementMatches = cleanSvg.match(
      /<(path|circle|rect|polygon|line|polyline|ellipse)[^>]*>/g
    );
    if (elementMatches && elementMatches.length > 0) {
      console.log(
        "🔍 DEBUG: Found elements that should have default colors:",
        elementMatches.length
      );
      // Check if there's currentColor in the SVG
      if (cleanSvg.includes("currentColor")) {
        console.log(
          "🔍 DEBUG: Found currentColor in SVG, adding as extracted color"
        );
        colors.add("currentColor");
      } else {
        // Add default black color for elements without explicit fill
        colors.add("#000000");
      }
    }
  }

  let result = Array.from(colors).slice(0, 8); // Limit to 8 colors

  // If no colors found, add a default black color
  if (result.length === 0) {
    console.log("🔍 DEBUG: No colors found, adding default black");
    result = ["#000000"];
  }

  console.log("🔍 DEBUG: Final extracted colors:", result);
  return result;
}

// Helper function to check if a color is valid
function isValidColor(color: string): boolean {
  if (!color) return false;

  const cleanColor = color.trim();

  // Skip transparent, none, currentColor, and empty values
  if (
    cleanColor === "none" ||
    cleanColor === "currentColor" ||
    cleanColor === "transparent" ||
    cleanColor === "" ||
    cleanColor.startsWith("url(")
  ) {
    return false;
  }

  return true;
}

// Helper function to normalize color format
function normalizeColor(color: string): string {
  const cleanColor = color.trim();

  // Convert rgb() to hex
  if (cleanColor.startsWith("rgb(")) {
    const rgbMatch = cleanColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1]);
      const g = parseInt(rgbMatch[2]);
      const b = parseInt(rgbMatch[3]);
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    }
  }

  // Convert rgba() to hex (ignoring alpha)
  if (cleanColor.startsWith("rgba(")) {
    const rgbaMatch = cleanColor.match(
      /rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/
    );
    if (rgbaMatch) {
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    }
  }

  // Convert hsl() to hex (simplified)
  if (cleanColor.startsWith("hsl(")) {
    const hslMatch = cleanColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (hslMatch) {
      const h = parseInt(hslMatch[1]);
      const s = parseInt(hslMatch[2]);
      const l = parseInt(hslMatch[3]);
      return hslToHex(h, s, l);
    }
  }

  return cleanColor;
}

// Helper function to convert HSL to HEX
function hslToHex(h: number, s: number, l: number): string {
  const c = ((1 - Math.abs((2 * l) / 100 - 1)) * s) / 100;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l / 100 - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  const rHex = Math.round((r + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const gHex = Math.round((g + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const bHex = Math.round((b + m) * 255)
    .toString(16)
    .padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
}

// Helper function to extract colors from DOM elements
export function extractColorsFromDOM(container: HTMLElement): string[] {
  const colors = new Set<string>();

  // Find all SVG elements
  const svgElements = container.querySelectorAll("svg *");

  svgElements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element);

    // Get fill color
    const fill = computedStyle.fill;
    if (
      fill &&
      fill !== "none" &&
      fill !== "currentColor" &&
      fill !== "transparent"
    ) {
      const normalizedFill = normalizeColor(fill);
      if (isValidColor(normalizedFill)) {
        colors.add(normalizedFill);
      }
    }

    // Get stroke color
    const stroke = computedStyle.stroke;
    if (
      stroke &&
      stroke !== "none" &&
      stroke !== "currentColor" &&
      stroke !== "transparent"
    ) {
      const normalizedStroke = normalizeColor(stroke);
      if (isValidColor(normalizedStroke)) {
        colors.add(normalizedStroke);
      }
    }
  });

  return Array.from(colors).slice(0, 8);
}
