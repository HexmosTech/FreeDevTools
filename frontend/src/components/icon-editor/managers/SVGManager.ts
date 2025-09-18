import Konva from "konva";

export interface KonvaShape {
  id: string;
  type: "path" | "image" | "rect" | "circle" | "group";
  data?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  x: number;
  y: number;
  width?: number;
  height?: number;
  scaleX?: number;
  scaleY?: number;
  rotation?: number;
  draggable?: boolean;
  children?: KonvaShape[];
  name?: string;
}

export class SVGManager {
  private stage: Konva.Stage;
  private svgLayer: Konva.Layer;
  private shapes: KonvaShape[] = [];

  constructor(stage: Konva.Stage, svgLayer: Konva.Layer) {
    this.stage = stage;
    this.svgLayer = svgLayer;
  }

  // Convert SVG string to Konva shapes
  convertSVGToKonva(svgString: string): KonvaShape[] {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
    const svgElement = svgDoc.querySelector("svg");

    if (!svgElement) return [];

    const shapes: KonvaShape[] = [];
    const viewBox = svgElement.getAttribute("viewBox") || "0 0 100 100";
    const [, , width, height] = viewBox.split(" ").map(Number);

    // Convert paths
    const pathElements = svgElement.querySelectorAll("path");
    pathElements.forEach((pathElement, index) => {
      const pathData = pathElement.getAttribute("d");
      const fill = pathElement.getAttribute("fill") || "black";
      const stroke = pathElement.getAttribute("stroke");
      const strokeWidth = pathElement.getAttribute("stroke-width");

      if (pathData) {
        shapes.push({
          id: `path-${index}`,
          type: "path",
          data: pathData,
          fill: fill,
          stroke: stroke || undefined,
          strokeWidth: strokeWidth ? parseFloat(strokeWidth) : undefined,
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          rotation: 0,
          draggable: true,
          name: `path-${index}`,
        });
      }
    });

    // Convert circles
    const circleElements = svgElement.querySelectorAll("circle");
    circleElements.forEach((circleElement, index) => {
      const cx = parseFloat(circleElement.getAttribute("cx") || "0");
      const cy = parseFloat(circleElement.getAttribute("cy") || "0");
      const r = parseFloat(circleElement.getAttribute("r") || "0");
      const fill = circleElement.getAttribute("fill") || "black";
      const stroke = circleElement.getAttribute("stroke");
      const strokeWidth = circleElement.getAttribute("stroke-width");

      shapes.push({
        id: `circle-${index}`,
        type: "circle",
        fill: fill,
        stroke: stroke || undefined,
        strokeWidth: strokeWidth ? parseFloat(strokeWidth) : undefined,
        x: cx - r,
        y: cy - r,
        width: r * 2,
        height: r * 2,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        draggable: true,
        name: `circle-${index}`,
      });
    });

    // Convert rectangles
    const rectElements = svgElement.querySelectorAll("rect");
    rectElements.forEach((rectElement, index) => {
      const x = parseFloat(rectElement.getAttribute("x") || "0");
      const y = parseFloat(rectElement.getAttribute("y") || "0");
      const width = parseFloat(rectElement.getAttribute("width") || "0");
      const height = parseFloat(rectElement.getAttribute("height") || "0");
      const fill = rectElement.getAttribute("fill") || "black";
      const stroke = rectElement.getAttribute("stroke");
      const strokeWidth = rectElement.getAttribute("stroke-width");
      const rx = rectElement.getAttribute("rx");
      const ry = rectElement.getAttribute("ry");

      shapes.push({
        id: `rect-${index}`,
        type: "rect",
        fill: fill,
        stroke: stroke || undefined,
        strokeWidth: strokeWidth ? parseFloat(strokeWidth) : undefined,
        x: x,
        y: y,
        width: width,
        height: height,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        draggable: true,
        name: `rect-${index}`,
      });
    });

    // Convert groups
    const groupElements = svgElement.querySelectorAll("g");
    groupElements.forEach((groupElement, index) => {
      const children: KonvaShape[] = [];

      // Process children of the group
      groupElement
        .querySelectorAll("path, circle, rect")
        .forEach((childElement, childIndex) => {
          const childShape = this.convertElementToShape(
            childElement,
            `group-${index}-child-${childIndex}`
          );
          if (childShape) {
            children.push(childShape);
          }
        });

      if (children.length > 0) {
        shapes.push({
          id: `group-${index}`,
          type: "group",
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          rotation: 0,
          draggable: true,
          children: children,
          name: `group-${index}`,
        });
      }
    });

    this.shapes = shapes;
    return shapes;
  }

  // Convert individual SVG element to Konva shape
  private convertElementToShape(
    element: Element,
    id: string
  ): KonvaShape | null {
    const tagName = element.tagName.toLowerCase();

    if (tagName === "path") {
      const pathData = element.getAttribute("d");
      const fill = element.getAttribute("fill") || "black";
      const stroke = element.getAttribute("stroke");
      const strokeWidth = element.getAttribute("stroke-width");

      if (pathData) {
        return {
          id: id,
          type: "path",
          data: pathData,
          fill: fill,
          stroke: stroke || undefined,
          strokeWidth: strokeWidth ? parseFloat(strokeWidth) : undefined,
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          rotation: 0,
          draggable: true,
          name: id,
        };
      }
    } else if (tagName === "circle") {
      const cx = parseFloat(element.getAttribute("cx") || "0");
      const cy = parseFloat(element.getAttribute("cy") || "0");
      const r = parseFloat(element.getAttribute("r") || "0");
      const fill = element.getAttribute("fill") || "black";
      const stroke = element.getAttribute("stroke");
      const strokeWidth = element.getAttribute("stroke-width");

      return {
        id: id,
        type: "circle",
        fill: fill,
        stroke: stroke || undefined,
        strokeWidth: strokeWidth ? parseFloat(strokeWidth) : undefined,
        x: cx - r,
        y: cy - r,
        width: r * 2,
        height: r * 2,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        draggable: true,
        name: id,
      };
    } else if (tagName === "rect") {
      const x = parseFloat(element.getAttribute("x") || "0");
      const y = parseFloat(element.getAttribute("y") || "0");
      const width = parseFloat(element.getAttribute("width") || "0");
      const height = parseFloat(element.getAttribute("height") || "0");
      const fill = element.getAttribute("fill") || "black";
      const stroke = element.getAttribute("stroke");
      const strokeWidth = element.getAttribute("stroke-width");

      return {
        id: id,
        type: "rect",
        fill: fill,
        stroke: stroke || undefined,
        strokeWidth: strokeWidth ? parseFloat(strokeWidth) : undefined,
        x: x,
        y: y,
        width: width,
        height: height,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        draggable: true,
        name: id,
      };
    }

    return null;
  }

  // Extract colors from shapes
  extractColors(shapes: KonvaShape[]): string[] {
    const colors = new Set<string>();

    const extractFromShape = (shape: KonvaShape) => {
      if (shape.fill) colors.add(shape.fill);
      if (shape.stroke) colors.add(shape.stroke);
      if (shape.children) {
        shape.children.forEach(extractFromShape);
      }
    };

    shapes.forEach(extractFromShape);
    return Array.from(colors);
  }

  // Convert Konva shapes back to SVG
  convertKonvaToSVG(
    shapes: KonvaShape[],
    backgroundShapes: KonvaShape[] = []
  ): string {
    const svgElements: string[] = [];

    // Add background shapes first
    backgroundShapes.forEach((shape) => {
      svgElements.push(this.shapeToSVG(shape));
    });

    // Add SVG shapes
    shapes.forEach((shape) => {
      svgElements.push(this.shapeToSVG(shape));
    });

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">${svgElements.join("")}</svg>`;
  }

  // Convert individual shape to SVG element
  private shapeToSVG(shape: KonvaShape): string {
    if (shape.type === "path" && shape.data) {
      return `<path d="${shape.data}" fill="${shape.fill || "black"}" stroke="${shape.stroke || ""}" stroke-width="${shape.strokeWidth || 0}" />`;
    } else if (shape.type === "circle") {
      const radius = (shape.width || 0) / 2;
      const cx = (shape.x || 0) + radius;
      const cy = (shape.y || 0) + radius;
      return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${shape.fill || "black"}" stroke="${shape.stroke || ""}" stroke-width="${shape.strokeWidth || 0}" />`;
    } else if (shape.type === "rect") {
      return `<rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}" fill="${shape.fill || "black"}" stroke="${shape.stroke || ""}" stroke-width="${shape.strokeWidth || 0}" />`;
    } else if (shape.type === "group" && shape.children) {
      const childrenSVG = shape.children
        .map((child) => this.shapeToSVG(child))
        .join("");
      return `<g>${childrenSVG}</g>`;
    }

    return "";
  }

  // Get all shapes
  getShapes(): KonvaShape[] {
    return this.shapes;
  }

  // Update shape properties
  updateShape(shapeId: string, updates: Partial<KonvaShape>): void {
    const updateShape = (shape: KonvaShape): KonvaShape => {
      if (shape.id === shapeId) {
        return { ...shape, ...updates };
      }
      if (shape.children) {
        return {
          ...shape,
          children: shape.children.map(updateShape),
        };
      }
      return shape;
    };

    this.shapes = this.shapes.map(updateShape);
  }

  // Replace color in all shapes
  replaceColor(oldColor: string, newColor: string): void {
    const replaceInShape = (shape: KonvaShape): KonvaShape => {
      const updatedShape = { ...shape };

      if (updatedShape.fill === oldColor) {
        updatedShape.fill = newColor;
      }
      if (updatedShape.stroke === oldColor) {
        updatedShape.stroke = newColor;
      }

      if (updatedShape.children) {
        updatedShape.children = updatedShape.children.map(replaceInShape);
      }

      return updatedShape;
    };

    this.shapes = this.shapes.map(replaceInShape);
  }

  // Clear all shapes
  clearShapes(): void {
    this.shapes = [];
  }
}
