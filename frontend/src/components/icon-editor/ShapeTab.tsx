import React from 'react';
import { ChromePicker } from 'react-color';
import type { ShapeConfig } from './types';

interface ShapeTabProps {
  shapeConfig: ShapeConfig;
  onShapeChange: (config: Partial<ShapeConfig>) => void;
  onShapeApply: (customColor?: string, customType?: string) => void;
}

const ShapeTab: React.FC<ShapeTabProps> = ({
  shapeConfig,
  onShapeChange,
  onShapeApply,
}) => {
  const shapes = [
    { type: 'none', icon: 'X', label: 'None' },
    { type: 'circle', icon: '○', label: 'Circle' },
    { type: 'rounded-square', icon: '▢', label: 'Rounded Square' },
    { type: 'square', icon: '□', label: 'Square' },
  ];

  return (
    <div className="flex-1 space-y-6">
      {/* Select a shape */}
      <div>
        <h5 className="py-2">Select a shape</h5>
        <div className="grid grid-cols-2 gap-2">
          {shapes.map((shape) => (
            <button
              key={shape.type}
              onClick={() => {
                const newColor = shape.type !== 'none' ? '#d7c74c' : shapeConfig.color;
                onShapeChange({
                  type: shape.type as any,
                  color: newColor
                });
                // Apply the change immediately with the new color and type
                setTimeout(() => onShapeApply(newColor, shape.type as any), 0);
              }}
              className={`p-3 text-center rounded-lg border-2 transition-all ${shapeConfig.type === shape.type
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-slate-300 dark:border-slate-600 hover:border-slate-400'
                }`}
            >
              <div className="text-2xl mb-1">{shape.icon}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{shape.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h5 className="py-2">Size</h5>
        <div className="space-y-2">
          <input
            type="range"
            min="20"
            max="100"
            value={shapeConfig.size}
            onChange={(e) => {
              const newSize = parseInt(e.target.value);
              onShapeChange({ size: newSize });
              setTimeout(() => onShapeApply(), 0);
            }}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>20%</span>
            <span>{shapeConfig.size}%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Color */}
      <div>
        <h5 className="py-2">Color</h5>
        <div className="space-y-3">
          <ChromePicker
            color={shapeConfig.color}
            onChange={(color) => {
              const newColor = color.hex;
              onShapeChange({ color: newColor });
              setTimeout(() => onShapeApply(newColor), 0);
            }}
            disableAlpha
          />
        </div>
      </div>
    </div>
  );
};

export default ShapeTab;
