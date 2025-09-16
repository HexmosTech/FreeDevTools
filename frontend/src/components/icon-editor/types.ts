export interface IconEditorProps {
  svgContent: string;
  iconName: string;
  onClose: () => void;
  onDownload: (
    svgContent: string,
    format: "svg" | "png",
    size?: number
  ) => void;
}

export interface ColorChange {
  originalColor: string;
  newColor: string;
  element: string;
}

export interface ShapeConfig {
  type: "none" | "circle" | "square" | "rounded-square";
  color: string;
  size: number;
}

export type ActiveTab = "colors" | "display" | "shapes";
