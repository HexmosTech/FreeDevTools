import { KonvaShape } from "./SVGManager";

export interface ShapeConfig {
  type: "none" | "circle" | "square" | "rounded-square";
  color: string;
  size: number; // percentage
  x?: number;
  y?: number;
}

export class ShapeManager {
  private shapes: KonvaShape[] = [];
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(canvasWidth: number = 400, canvasHeight: number = 400) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  // Create background shape
  createBackgroundShape(config: ShapeConfig): KonvaShape | null {
    if (config.type === "none") {
      return null;
    }

    const centerX = this.canvasWidth / 2;
    const centerY = this.canvasHeight / 2;
    const size =
      (config.size / 100) * Math.min(this.canvasWidth, this.canvasHeight);
    const x = config.x !== undefined ? config.x : centerX - size / 2;
    const y = config.y !== undefined ? config.y : centerY - size / 2;

    if (config.type === "circle") {
      return {
        id: "bg-circle",
        type: "circle",
        fill: config.color,
        x: x,
        y: y,
        width: size,
        height: size,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        draggable: false,
        name: "background-circle",
      };
    } else if (config.type === "square") {
      return {
        id: "bg-square",
        type: "rect",
        fill: config.color,
        x: x,
        y: y,
        width: size,
        height: size,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        draggable: false,
        name: "background-square",
      };
    } else if (config.type === "rounded-square") {
      return {
        id: "bg-rounded-square",
        type: "rect",
        fill: config.color,
        x: x,
        y: y,
        width: size,
        height: size,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        draggable: false,
        name: "background-rounded-square",
      };
    }

    return null;
  }

  // Update background shapes
  updateBackgroundShapes(config: ShapeConfig): KonvaShape[] {
    // Clear existing background shapes
    this.shapes = this.shapes.filter((shape) => !shape.id.startsWith("bg-"));

    // Create new background shape if not 'none'
    if (config.type !== "none") {
      const newShape = this.createBackgroundShape(config);
      if (newShape) {
        this.shapes.push(newShape);
      }
    }

    return this.shapes;
  }

  // Get all background shapes
  getBackgroundShapes(): KonvaShape[] {
    return this.shapes.filter((shape) => shape.id.startsWith("bg-"));
  }

  // Get all shapes
  getShapes(): KonvaShape[] {
    return this.shapes;
  }

  // Clear all shapes
  clearShapes(): void {
    this.shapes = [];
  }

  // Update shape color
  updateShapeColor(shapeId: string, newColor: string): void {
    this.shapes = this.shapes.map((shape) => {
      if (shape.id === shapeId) {
        return { ...shape, fill: newColor };
      }
      return shape;
    });
  }

  // Update shape size
  updateShapeSize(shapeId: string, newSize: number): void {
    this.shapes = this.shapes.map((shape) => {
      if (shape.id === shapeId) {
        const centerX = this.canvasWidth / 2;
        const centerY = this.canvasHeight / 2;
        const size =
          (newSize / 100) * Math.min(this.canvasWidth, this.canvasHeight);
        const x = centerX - size / 2;
        const y = centerY - size / 2;

        return {
          ...shape,
          width: size,
          height: size,
          x: x,
          y: y,
        };
      }
      return shape;
    });
  }

  // Update shape position
  updateShapePosition(shapeId: string, x: number, y: number): void {
    this.shapes = this.shapes.map((shape) => {
      if (shape.id === shapeId) {
        return { ...shape, x, y };
      }
      return shape;
    });
  }

  // Remove shape
  removeShape(shapeId: string): void {
    this.shapes = this.shapes.filter((shape) => shape.id !== shapeId);
  }

  // Get shape by ID
  getShape(shapeId: string): KonvaShape | undefined {
    return this.shapes.find((shape) => shape.id === shapeId);
  }

  // Check if shape exists
  hasShape(shapeId: string): boolean {
    return this.shapes.some((shape) => shape.id === shapeId);
  }

  // Get shape count
  getShapeCount(): number {
    return this.shapes.length;
  }

  // Validate shape configuration
  validateConfig(config: ShapeConfig): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (config.size < 10 || config.size > 100) {
      errors.push("Size must be between 10% and 100%");
    }

    if (!this.isValidColor(config.color)) {
      errors.push("Invalid color format");
    }

    if (
      config.x !== undefined &&
      (config.x < 0 || config.x > this.canvasWidth)
    ) {
      errors.push("X position must be within canvas bounds");
    }

    if (
      config.y !== undefined &&
      (config.y < 0 || config.y > this.canvasHeight)
    ) {
      errors.push("Y position must be within canvas bounds");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Check if color is valid
  private isValidColor(color: string): boolean {
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
      "transparent",
      "none",
    ];

    return namedColors.includes(color.toLowerCase());
  }

  // Get default configuration
  getDefaultConfig(): ShapeConfig {
    return {
      type: "none",
      color: "#4D99D5",
      size: 100,
    };
  }

  // Create preset configurations
  getPresetConfigs(): ShapeConfig[] {
    return [
      { type: "none", color: "#4D99D5", size: 100 },
      { type: "circle", color: "#4D99D5", size: 100 },
      { type: "square", color: "#4D99D5", size: 100 },
      { type: "rounded-square", color: "#4D99D5", size: 100 },
      { type: "circle", color: "#FF6B6B", size: 80 },
      { type: "square", color: "#4ECDC4", size: 90 },
      { type: "rounded-square", color: "#45B7D1", size: 85 },
      { type: "circle", color: "#96CEB4", size: 75 },
      { type: "square", color: "#FFEAA7", size: 70 },
      { type: "rounded-square", color: "#DDA0DD", size: 95 },
    ];
  }

  // Export shapes as SVG
  exportAsSVG(): string {
    const svgElements: string[] = [];

    this.shapes.forEach((shape) => {
      if (shape.type === "circle") {
        const radius = (shape.width || 0) / 2;
        const cx = (shape.x || 0) + radius;
        const cy = (shape.y || 0) + radius;
        svgElements.push(
          `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${shape.fill}" />`
        );
      } else if (shape.type === "rect") {
        svgElements.push(
          `<rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}" fill="${shape.fill}" />`
        );
      }
    });

    return svgElements.join("");
  }

  // Clone shape
  cloneShape(shapeId: string, newId?: string): KonvaShape | null {
    const shape = this.getShape(shapeId);
    if (!shape) return null;

    return {
      ...shape,
      id: newId || `${shape.id}-clone-${Date.now()}`,
      name: newId || `${shape.name}-clone-${Date.now()}`,
    };
  }

  // Duplicate shape
  duplicateShape(shapeId: string): KonvaShape | null {
    const clonedShape = this.cloneShape(shapeId);
    if (clonedShape) {
      this.shapes.push(clonedShape);
    }
    return clonedShape;
  }
}
