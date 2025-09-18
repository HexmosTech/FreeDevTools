import { KonvaShape } from "./SVGManager";

export interface ColorChange {
  originalColor: string;
  newColor: string;
  element: "fill" | "stroke";
  shapeId: string;
}

export class ColorManager {
  private svgManager: any; // SVGManager instance
  private colorChanges: ColorChange[] = [];

  constructor(svgManager: any) {
    this.svgManager = svgManager;
  }

  // Extract all colors from shapes
  extractColors(shapes: KonvaShape[]): string[] {
    const colors = new Set<string>();

    const extractFromShape = (shape: KonvaShape) => {
      if (shape.fill && shape.fill !== "none" && shape.fill !== "transparent") {
        colors.add(shape.fill);
      }
      if (
        shape.stroke &&
        shape.stroke !== "none" &&
        shape.stroke !== "transparent"
      ) {
        colors.add(shape.stroke);
      }
      if (shape.children) {
        shape.children.forEach(extractFromShape);
      }
    };

    shapes.forEach(extractFromShape);
    return Array.from(colors);
  }

  // Get color usage count
  getColorUsage(shapes: KonvaShape[]): Map<string, number> {
    const usage = new Map<string, number>();

    const countInShape = (shape: KonvaShape) => {
      if (shape.fill && shape.fill !== "none" && shape.fill !== "transparent") {
        usage.set(shape.fill, (usage.get(shape.fill) || 0) + 1);
      }
      if (
        shape.stroke &&
        shape.stroke !== "none" &&
        shape.stroke !== "transparent"
      ) {
        usage.set(shape.stroke, (usage.get(shape.stroke) || 0) + 1);
      }
      if (shape.children) {
        shape.children.forEach(countInShape);
      }
    };

    shapes.forEach(countInShape);
    return usage;
  }

  // Replace color in specific shapes
  replaceColorInShapes(
    shapes: KonvaShape[],
    oldColor: string,
    newColor: string,
    shapeIds?: string[]
  ): KonvaShape[] {
    const replaceInShape = (shape: KonvaShape): KonvaShape => {
      const updatedShape = { ...shape };

      // Check if this shape should be updated
      const shouldUpdate = !shapeIds || shapeIds.includes(shape.id);

      if (shouldUpdate) {
        if (updatedShape.fill === oldColor) {
          updatedShape.fill = newColor;
          this.addColorChange(shape.id, oldColor, newColor, "fill");
        }
        if (updatedShape.stroke === oldColor) {
          updatedShape.stroke = newColor;
          this.addColorChange(shape.id, oldColor, newColor, "stroke");
        }
      }

      if (updatedShape.children) {
        updatedShape.children = updatedShape.children.map(replaceInShape);
      }

      return updatedShape;
    };

    return shapes.map(replaceInShape);
  }

  // Replace color in all shapes
  replaceColorInAllShapes(
    shapes: KonvaShape[],
    oldColor: string,
    newColor: string
  ): KonvaShape[] {
    return this.replaceColorInShapes(shapes, oldColor, newColor);
  }

  // Replace multiple colors
  replaceMultipleColors(
    shapes: KonvaShape[],
    colorMap: Map<string, string>
  ): KonvaShape[] {
    const replaceInShape = (shape: KonvaShape): KonvaShape => {
      const updatedShape = { ...shape };

      if (updatedShape.fill && colorMap.has(updatedShape.fill)) {
        const newColor = colorMap.get(updatedShape.fill)!;
        this.addColorChange(shape.id, updatedShape.fill, newColor, "fill");
        updatedShape.fill = newColor;
      }
      if (updatedShape.stroke && colorMap.has(updatedShape.stroke)) {
        const newColor = colorMap.get(updatedShape.stroke)!;
        this.addColorChange(shape.id, updatedShape.stroke, newColor, "stroke");
        updatedShape.stroke = newColor;
      }

      if (updatedShape.children) {
        updatedShape.children = updatedShape.children.map(replaceInShape);
      }

      return updatedShape;
    };

    return shapes.map(replaceInShape);
  }

  // Add color change to history
  private addColorChange(
    shapeId: string,
    originalColor: string,
    newColor: string,
    element: "fill" | "stroke"
  ): void {
    // Remove existing change for this shape and element
    this.colorChanges = this.colorChanges.filter(
      (change) => !(change.shapeId === shapeId && change.element === element)
    );

    // Add new change
    this.colorChanges.push({
      originalColor,
      newColor,
      element,
      shapeId,
    });
  }

  // Get color changes
  getColorChanges(): ColorChange[] {
    return [...this.colorChanges];
  }

  // Clear color changes
  clearColorChanges(): void {
    this.colorChanges = [];
  }

  // Get shapes with specific color
  getShapesWithColor(shapes: KonvaShape[], color: string): string[] {
    const shapeIds: string[] = [];

    const checkShape = (shape: KonvaShape) => {
      if (shape.fill === color || shape.stroke === color) {
        shapeIds.push(shape.id);
      }
      if (shape.children) {
        shape.children.forEach(checkShape);
      }
    };

    shapes.forEach(checkShape);
    return shapeIds;
  }

  // Validate color format
  isValidColor(color: string): boolean {
    // Check for hex colors
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
      return true;
    }

    // Check for rgb/rgba colors
    if (
      /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+)?\s*\)$/.test(color)
    ) {
      return true;
    }

    // Check for named colors (basic set)
    const namedColors = [
      "black",
      "white",
      "red",
      "green",
      "blue",
      "yellow",
      "orange",
      "purple",
      "pink",
      "brown",
      "gray",
      "grey",
      "cyan",
      "magenta",
      "lime",
      "maroon",
      "navy",
      "olive",
      "teal",
      "silver",
      "aqua",
      "fuchsia",
    ];

    return namedColors.includes(color.toLowerCase());
  }

  // Convert color to hex format
  colorToHex(color: string): string {
    if (color.startsWith("#")) {
      return color;
    }

    // Convert rgb/rgba to hex
    if (color.startsWith("rgb")) {
      const matches = color.match(/\d+/g);
      if (matches && matches.length >= 3) {
        const r = parseInt(matches[0]);
        const g = parseInt(matches[1]);
        const b = parseInt(matches[2]);
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      }
    }

    // Convert named colors to hex (basic mapping)
    const colorMap: { [key: string]: string } = {
      black: "#000000",
      white: "#ffffff",
      red: "#ff0000",
      green: "#008000",
      blue: "#0000ff",
      yellow: "#ffff00",
      orange: "#ffa500",
      purple: "#800080",
      pink: "#ffc0cb",
      brown: "#a52a2a",
      gray: "#808080",
      grey: "#808080",
      cyan: "#00ffff",
      magenta: "#ff00ff",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      teal: "#008080",
      silver: "#c0c0c0",
      aqua: "#00ffff",
      fuchsia: "#ff00ff",
    };

    return colorMap[color.toLowerCase()] || color;
  }

  // Get color contrast ratio
  getContrastRatio(color1: string, color2: string): number {
    const getLuminance = (color: string): number => {
      const hex = this.colorToHex(color).replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;

      const [rs, gs, bs] = [r, g, b].map((c) =>
        c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      );

      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  }

  // Check if colors have sufficient contrast
  hasGoodContrast(
    color1: string,
    color2: string,
    minRatio: number = 4.5
  ): boolean {
    return this.getContrastRatio(color1, color2) >= minRatio;
  }
}
