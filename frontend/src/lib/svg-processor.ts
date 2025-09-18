/**
 * SVG Processing Utility
 * Handles irregular SVG dimensions and normalizes them for consistent display
 */

export interface SVGDimensions {
  width: number;
  height: number;
  viewBox: string;
  aspectRatio: number;
}

/**
 * Extract dimensions from SVG content
 */
export function extractSVGDimensions(svgContent: string): SVGDimensions {
  // Extract width and height attributes
  const widthMatch = svgContent.match(/width="([^"]*)"/);
  const heightMatch = svgContent.match(/height="([^"]*)"/);
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);

  let width = 24; // default
  let height = 24; // default
  let viewBox = "0 0 24 24"; // default

  // Parse width and height
  if (widthMatch) {
    const widthValue = widthMatch[1];
    width = parseFloat(widthValue) || 24;
  }

  if (heightMatch) {
    const heightValue = heightMatch[1];
    height = parseFloat(heightValue) || 24;
  }

  // Use existing viewBox or create one from dimensions
  if (viewBoxMatch) {
    viewBox = viewBoxMatch[1];
    // If we have a viewBox but no explicit width/height, extract from viewBox
    if (!widthMatch && !heightMatch) {
      const viewBoxParts = viewBox.split(/\s+/);
      if (viewBoxParts.length >= 4) {
        width = parseFloat(viewBoxParts[2]) || 24;
        height = parseFloat(viewBoxParts[3]) || 24;
      }
    }
  } else {
    viewBox = `0 0 ${width} ${height}`;
  }

  const aspectRatio = width / height;

  return {
    width,
    height,
    viewBox,
    aspectRatio,
  };
}

/**
 * Check if SVG has irregular dimensions that need normalization
 */
export function hasIrregularDimensions(dimensions: SVGDimensions): boolean {
  const { width, height } = dimensions;

  // Consider irregular if:
  // 1. Width or height is significantly larger than 24px
  // 2. Aspect ratio is very different from 1:1 (square)
  // 3. Width or height is 0 or undefined

  const maxNormalSize = 100;
  const minAspectRatio = 0.5;
  const maxAspectRatio = 2.0;

  return (
    width > maxNormalSize ||
    height > maxNormalSize ||
    width <= 0 ||
    height <= 0 ||
    dimensions.aspectRatio < minAspectRatio ||
    dimensions.aspectRatio > maxAspectRatio
  );
}

/**
 * Normalize SVG dimensions for consistent display
 */
export function normalizeSVGDimensions(
  dimensions: SVGDimensions
): SVGDimensions {
  const { width, height, viewBox } = dimensions;

  // Calculate the maximum dimension
  const maxDimension = Math.max(width, height);

  // If the SVG is too large, scale it down proportionally
  const scaleFactor = maxDimension > 100 ? 100 / maxDimension : 1;

  const normalizedWidth = Math.round(width * scaleFactor);
  const normalizedHeight = Math.round(height * scaleFactor);

  return {
    width: normalizedWidth,
    height: normalizedHeight,
    viewBox,
    aspectRatio: normalizedWidth / normalizedHeight,
  };
}

/**
 * Process SVG content to handle irregular dimensions and stroke clipping
 */
export function processSVGContent(
  svgContent: string,
  targetSize: number = 96,
  padding: number = 0.15 // 15% padding on each side
): string {
  if (!svgContent || !svgContent.includes("<svg")) {
    return svgContent;
  }

  const dimensions = extractSVGDimensions(svgContent);
  const isIrregular = hasIrregularDimensions(dimensions);

  let processedSvg = svgContent;

  // Calculate padding with extra space for stroke width
  const strokePadding = 4; // Extra padding for stroke width
  const paddingX = Math.max(dimensions.width * padding, strokePadding);
  const paddingY = Math.max(dimensions.height * padding, strokePadding);
  const paddedViewBox = `${-paddingX} ${-paddingY} ${dimensions.width + paddingX * 2} ${dimensions.height + paddingY * 2}`;

  // Replace the SVG tag with proper attributes and padding
  processedSvg = processedSvg.replace(
    /<svg[^>]*>/,
    `<svg width="${targetSize}" height="${targetSize}" viewBox="${paddedViewBox}" preserveAspectRatio="xMidYMid meet" style="max-width: 100%; max-height: 100%; width: 100%; height: 100%; overflow: visible;">`
  );

  return processedSvg;
}

/**
 * Get SVG display size based on container and SVG dimensions
 */
export function getOptimalDisplaySize(
  containerWidth: number,
  containerHeight: number,
  svgDimensions: SVGDimensions,
  padding: number = 20
): number {
  const availableWidth = containerWidth - padding;
  const availableHeight = containerHeight - padding;

  const { width: svgWidth, height: svgHeight } = svgDimensions;

  // Calculate scale factors for both dimensions
  const scaleX = availableWidth / svgWidth;
  const scaleY = availableHeight / svgHeight;

  // Use the smaller scale factor to ensure the SVG fits
  const scale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond original size

  return Math.round(Math.min(svgWidth, svgHeight) * scale);
}
