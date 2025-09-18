import { KonvaShape } from "./SVGManager";

export interface ExportOptions {
  format: "png" | "svg" | "jpeg";
  quality?: number;
  pixelRatio?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  transparent?: boolean;
}

export interface ExportResult {
  success: boolean;
  data?: string | Blob;
  error?: string;
  size?: number;
}

export class ExportManager {
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(canvasWidth: number = 400, canvasHeight: number = 400) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  // Export Konva stage to PNG
  exportStageToPNG(
    stage: any,
    options: ExportOptions = {}
  ): Promise<ExportResult> {
    return new Promise((resolve) => {
      try {
        const {
          quality = 1,
          pixelRatio = 2,
          width = this.canvasWidth,
          height = this.canvasHeight,
          backgroundColor,
          transparent = true,
        } = options;

        const exportOptions: any = {
          mimeType: "image/png",
          quality,
          pixelRatio,
        };

        if (backgroundColor && !transparent) {
          exportOptions.backgroundColor = backgroundColor;
        }

        const dataURL = stage.toDataURL(exportOptions);

        // Convert to blob for size calculation
        fetch(dataURL)
          .then((response) => response.blob())
          .then((blob) => {
            resolve({
              success: true,
              data: dataURL,
              size: blob.size,
            });
          })
          .catch((error) => {
            resolve({
              success: false,
              error: error.message,
            });
          });
      } catch (error) {
        resolve({
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    });
  }

  // Export Konva stage to JPEG
  exportStageToJPEG(
    stage: any,
    options: ExportOptions = {}
  ): Promise<ExportResult> {
    return new Promise((resolve) => {
      try {
        const {
          quality = 0.9,
          pixelRatio = 2,
          width = this.canvasWidth,
          height = this.canvasHeight,
          backgroundColor = "#ffffff",
        } = options;

        const dataURL = stage.toDataURL({
          mimeType: "image/jpeg",
          quality,
          pixelRatio,
          backgroundColor,
        });

        fetch(dataURL)
          .then((response) => response.blob())
          .then((blob) => {
            resolve({
              success: true,
              data: dataURL,
              size: blob.size,
            });
          })
          .catch((error) => {
            resolve({
              success: false,
              error: error.message,
            });
          });
      } catch (error) {
        resolve({
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    });
  }

  // Export shapes to SVG
  exportShapesToSVG(
    svgShapes: KonvaShape[],
    backgroundShapes: KonvaShape[] = [],
    options: ExportOptions = {}
  ): ExportResult {
    try {
      const { width = this.canvasWidth, height = this.canvasHeight } = options;

      const svgElements: string[] = [];

      // Add background shapes first
      backgroundShapes.forEach((shape) => {
        svgElements.push(this.shapeToSVG(shape));
      });

      // Add SVG shapes
      svgShapes.forEach((shape) => {
        svgElements.push(this.shapeToSVG(shape));
      });

      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">${svgElements.join("")}</svg>`;

      return {
        success: true,
        data: svgContent,
        size: new Blob([svgContent]).size,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
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

  // Download file
  downloadFile(data: string | Blob, filename: string, mimeType: string): void {
    try {
      let blob: Blob;

      if (typeof data === "string") {
        blob = new Blob([data], { type: mimeType });
      } else {
        blob = data;
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  }

  // Copy to clipboard
  async copyToClipboard(
    data: string | Blob,
    mimeType: string
  ): Promise<boolean> {
    try {
      if (typeof data === "string") {
        await navigator.clipboard.writeText(data);
      } else {
        await navigator.clipboard.write([
          new ClipboardItem({ [mimeType]: data }),
        ]);
      }
      return true;
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      return false;
    }
  }

  // Get file size in human readable format
  getFileSizeString(bytes: number): string {
    const sizes = ["Bytes", "KB", "MB", "GB"];
    if (bytes === 0) return "0 Bytes";

    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
  }

  // Validate export options
  validateExportOptions(options: ExportOptions): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (
      options.quality !== undefined &&
      (options.quality < 0 || options.quality > 1)
    ) {
      errors.push("Quality must be between 0 and 1");
    }

    if (options.pixelRatio !== undefined && options.pixelRatio <= 0) {
      errors.push("Pixel ratio must be greater than 0");
    }

    if (options.width !== undefined && options.width <= 0) {
      errors.push("Width must be greater than 0");
    }

    if (options.height !== undefined && options.height <= 0) {
      errors.push("Height must be greater than 0");
    }

    if (!["png", "svg", "jpeg"].includes(options.format)) {
      errors.push("Format must be png, svg, or jpeg");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Get default export options
  getDefaultExportOptions(format: "png" | "svg" | "jpeg"): ExportOptions {
    const baseOptions: ExportOptions = {
      format,
      width: this.canvasWidth,
      height: this.canvasHeight,
    };

    switch (format) {
      case "png":
        return {
          ...baseOptions,
          quality: 1,
          pixelRatio: 2,
          transparent: true,
        };
      case "jpeg":
        return {
          ...baseOptions,
          quality: 0.9,
          pixelRatio: 2,
          backgroundColor: "#ffffff",
          transparent: false,
        };
      case "svg":
        return baseOptions;
      default:
        return baseOptions;
    }
  }

  // Get supported formats
  getSupportedFormats(): string[] {
    return ["png", "svg", "jpeg"];
  }

  // Get format MIME types
  getFormatMimeType(format: string): string {
    const mimeTypes: { [key: string]: string } = {
      png: "image/png",
      jpeg: "image/jpeg",
      jpg: "image/jpeg",
      svg: "image/svg+xml",
    };

    return mimeTypes[format.toLowerCase()] || "application/octet-stream";
  }

  // Generate filename
  generateFilename(baseName: string, format: string, size?: number): string {
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-");
    const sizeSuffix = size ? `-${size}px` : "";
    return `${baseName}${sizeSuffix}-${timestamp}.${format}`;
  }

  // Preview export (for UI)
  async previewExport(
    stage: any,
    options: ExportOptions
  ): Promise<string | null> {
    try {
      const result = await this.exportStageToPNG(stage, {
        ...options,
        quality: 0.5,
        pixelRatio: 1,
      });
      return result.success ? (result.data as string) : null;
    } catch (error) {
      console.error("Failed to create preview:", error);
      return null;
    }
  }

  // Batch export multiple formats
  async batchExport(
    stage: any,
    formats: string[],
    options: ExportOptions = {}
  ): Promise<{ [format: string]: ExportResult }> {
    const results: { [format: string]: ExportResult } = {};

    for (const format of formats) {
      const formatOptions = { ...options, format: format as any };

      switch (format) {
        case "png":
          results[format] = await this.exportStageToPNG(stage, formatOptions);
          break;
        case "jpeg":
          results[format] = await this.exportStageToJPEG(stage, formatOptions);
          break;
        case "svg":
          results[format] = {
            success: false,
            error: "SVG export requires shapes data",
          };
          break;
        default:
          results[format] = {
            success: false,
            error: `Unsupported format: ${format}`,
          };
      }
    }

    return results;
  }
}
