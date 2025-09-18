import { KonvaShape } from "./SVGManager";

export interface TransformConfig {
  scale: number;
  x: number;
  y: number;
  rotation: number;
  flipX: boolean;
  flipY: boolean;
}

export class TransformManager {
  private shapes: KonvaShape[] = [];
  private originalShapes: KonvaShape[] = [];
  private transformConfig: TransformConfig = {
    scale: 1,
    x: 0,
    y: 0,
    rotation: 0,
    flipX: false,
    flipY: false,
  };

  constructor() {}

  // Set shapes to transform
  setShapes(shapes: KonvaShape[]): void {
    this.shapes = shapes;
    this.originalShapes = this.deepCloneShapes(shapes);
  }

  // Get current shapes
  getShapes(): KonvaShape[] {
    return this.shapes;
  }

  // Get original shapes
  getOriginalShapes(): KonvaShape[] {
    return this.originalShapes;
  }

  // Get transform configuration
  getTransformConfig(): TransformConfig {
    return { ...this.transformConfig };
  }

  // Apply scale transformation
  applyScale(scale: number): KonvaShape[] {
    this.transformConfig.scale = scale;
    return this.applyAllTransforms();
  }

  // Apply position transformation
  applyPosition(x: number, y: number): KonvaShape[] {
    this.transformConfig.x = x;
    this.transformConfig.y = y;
    return this.applyAllTransforms();
  }

  // Apply rotation transformation
  applyRotation(rotation: number): KonvaShape[] {
    this.transformConfig.rotation = rotation;
    return this.applyAllTransforms();
  }

  // Apply flip transformations
  applyFlip(flipX: boolean, flipY: boolean): KonvaShape[] {
    this.transformConfig.flipX = flipX;
    this.transformConfig.flipY = flipY;
    return this.applyAllTransforms();
  }

  // Apply all transformations
  private applyAllTransforms(): KonvaShape[] {
    const { scale, x, y, rotation, flipX, flipY } = this.transformConfig;

    this.shapes = this.originalShapes.map((shape) => {
      const transformedShape = { ...shape };

      // Apply scale
      transformedShape.scaleX = (transformedShape.scaleX || 1) * scale;
      transformedShape.scaleY = (transformedShape.scaleY || 1) * scale;

      // Apply flip
      if (flipX) {
        transformedShape.scaleX = (transformedShape.scaleX || 1) * -1;
      }
      if (flipY) {
        transformedShape.scaleY = (transformedShape.scaleY || 1) * -1;
      }

      // Apply position
      transformedShape.x = (transformedShape.x || 0) + x;
      transformedShape.y = (transformedShape.y || 0) + y;

      // Apply rotation
      transformedShape.rotation = (transformedShape.rotation || 0) + rotation;

      // Transform children if they exist
      if (transformedShape.children) {
        transformedShape.children = this.transformChildren(
          transformedShape.children
        );
      }

      return transformedShape;
    });

    return this.shapes;
  }

  // Transform children shapes
  private transformChildren(children: KonvaShape[]): KonvaShape[] {
    const { scale, x, y, rotation, flipX, flipY } = this.transformConfig;

    return children.map((child) => {
      const transformedChild = { ...child };

      // Apply scale
      transformedChild.scaleX = (transformedChild.scaleX || 1) * scale;
      transformedChild.scaleY = (transformedChild.scaleY || 1) * scale;

      // Apply flip
      if (flipX) {
        transformedChild.scaleX = (transformedChild.scaleX || 1) * -1;
      }
      if (flipY) {
        transformedChild.scaleY = (transformedChild.scaleY || 1) * -1;
      }

      // Apply position
      transformedChild.x = (transformedChild.x || 0) + x;
      transformedChild.y = (transformedChild.y || 0) + y;

      // Apply rotation
      transformedChild.rotation = (transformedChild.rotation || 0) + rotation;

      return transformedChild;
    });
  }

  // Reset all transformations
  resetTransforms(): KonvaShape[] {
    this.transformConfig = {
      scale: 1,
      x: 0,
      y: 0,
      rotation: 0,
      flipX: false,
      flipY: false,
    };

    this.shapes = this.deepCloneShapes(this.originalShapes);
    return this.shapes;
  }

  // Reset specific transformation
  resetScale(): KonvaShape[] {
    this.transformConfig.scale = 1;
    return this.applyAllTransforms();
  }

  resetPosition(): KonvaShape[] {
    this.transformConfig.x = 0;
    this.transformConfig.y = 0;
    return this.applyAllTransforms();
  }

  resetRotation(): KonvaShape[] {
    this.transformConfig.rotation = 0;
    return this.applyAllTransforms();
  }

  resetFlip(): KonvaShape[] {
    this.transformConfig.flipX = false;
    this.transformConfig.flipY = false;
    return this.applyAllTransforms();
  }

  // Get bounding box of all shapes
  getBoundingBox(): {
    x: number;
    y: number;
    width: number;
    height: number;
  } | null {
    if (this.shapes.length === 0) return null;

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    this.shapes.forEach((shape) => {
      const bounds = this.getShapeBounds(shape);
      minX = Math.min(minX, bounds.x);
      minY = Math.min(minY, bounds.y);
      maxX = Math.max(maxX, bounds.x + bounds.width);
      maxY = Math.max(maxY, bounds.y + bounds.height);
    });

    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY,
    };
  }

  // Get bounds of a single shape
  private getShapeBounds(shape: KonvaShape): {
    x: number;
    y: number;
    width: number;
    height: number;
  } {
    const x = shape.x || 0;
    const y = shape.y || 0;
    const width = shape.width || 0;
    const height = shape.height || 0;
    const scaleX = shape.scaleX || 1;
    const scaleY = shape.scaleY || 1;

    return {
      x: x,
      y: y,
      width: width * Math.abs(scaleX),
      height: height * Math.abs(scaleY),
    };
  }

  // Center shapes in canvas
  centerShapes(canvasWidth: number, canvasHeight: number): KonvaShape[] {
    const bounds = this.getBoundingBox();
    if (!bounds) return this.shapes;

    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const shapeCenterX = bounds.x + bounds.width / 2;
    const shapeCenterY = bounds.y + bounds.height / 2;

    const deltaX = centerX - shapeCenterX;
    const deltaY = centerY - shapeCenterY;

    return this.applyPosition(deltaX, deltaY);
  }

  // Fit shapes to canvas
  fitToCanvas(
    canvasWidth: number,
    canvasHeight: number,
    padding: number = 20
  ): KonvaShape[] {
    const bounds = this.getBoundingBox();
    if (!bounds) return this.shapes;

    const availableWidth = canvasWidth - padding * 2;
    const availableHeight = canvasHeight - padding * 2;

    const scaleX = availableWidth / bounds.width;
    const scaleY = availableHeight / bounds.height;
    const scale = Math.min(scaleX, scaleY, 1); // Don't scale up

    this.applyScale(scale);
    return this.centerShapes(canvasWidth, canvasHeight);
  }

  // Rotate around center
  rotateAroundCenter(
    angle: number,
    canvasWidth: number,
    canvasHeight: number
  ): KonvaShape[] {
    const bounds = this.getBoundingBox();
    if (!bounds) return this.shapes;

    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const shapeCenterX = bounds.x + bounds.width / 2;
    const shapeCenterY = bounds.y + bounds.height / 2;

    // Move to center, rotate, then move back
    this.applyPosition(-shapeCenterX, -shapeCenterY);
    this.applyRotation(angle);
    this.applyPosition(centerX, centerY);

    return this.shapes;
  }

  // Flip horizontally around center
  flipHorizontal(canvasWidth: number): KonvaShape[] {
    const bounds = this.getBoundingBox();
    if (!bounds) return this.shapes;

    const centerX = canvasWidth / 2;
    const shapeCenterX = bounds.x + bounds.width / 2;

    // Move to center, flip, then move back
    this.applyPosition(-shapeCenterX, 0);
    this.applyFlip(true, false);
    this.applyPosition(centerX, 0);

    return this.shapes;
  }

  // Flip vertically around center
  flipVertical(canvasHeight: number): KonvaShape[] {
    const bounds = this.getBoundingBox();
    if (!bounds) return this.shapes;

    const centerY = canvasHeight / 2;
    const shapeCenterY = bounds.y + bounds.height / 2;

    // Move to center, flip, then move back
    this.applyPosition(0, -shapeCenterY);
    this.applyFlip(false, true);
    this.applyPosition(0, centerY);

    return this.shapes;
  }

  // Deep clone shapes
  private deepCloneShapes(shapes: KonvaShape[]): KonvaShape[] {
    return shapes.map((shape) => ({
      ...shape,
      children: shape.children
        ? this.deepCloneShapes(shape.children)
        : undefined,
    }));
  }

  // Get transform summary
  getTransformSummary(): string {
    const { scale, x, y, rotation, flipX, flipY } = this.transformConfig;
    const parts: string[] = [];

    if (scale !== 1) parts.push(`Scale: ${(scale * 100).toFixed(0)}%`);
    if (x !== 0 || y !== 0)
      parts.push(`Position: (${x.toFixed(0)}, ${y.toFixed(0)})`);
    if (rotation !== 0) parts.push(`Rotation: ${rotation.toFixed(0)}°`);
    if (flipX) parts.push("Flip X");
    if (flipY) parts.push("Flip Y");

    return parts.length > 0 ? parts.join(", ") : "No transformations";
  }

  // Validate transform values
  validateTransform(transform: Partial<TransformConfig>): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (
      transform.scale !== undefined &&
      (transform.scale <= 0 || transform.scale > 10)
    ) {
      errors.push("Scale must be between 0 and 10");
    }

    if (
      transform.rotation !== undefined &&
      (transform.rotation < -360 || transform.rotation > 360)
    ) {
      errors.push("Rotation must be between -360 and 360 degrees");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Apply multiple transformations at once
  applyMultipleTransforms(transforms: Partial<TransformConfig>): KonvaShape[] {
    const validation = this.validateTransform(transforms);
    if (!validation.isValid) {
      console.warn("Invalid transform values:", validation.errors);
      return this.shapes;
    }

    Object.assign(this.transformConfig, transforms);
    return this.applyAllTransforms();
  }
}
