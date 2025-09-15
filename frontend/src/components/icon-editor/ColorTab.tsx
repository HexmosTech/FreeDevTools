import React from 'react';
import { ChromePicker } from 'react-color';

interface ColorTabProps {
  extractedColors: string[];
  selectedColor: string;
  customColor: string;
  onColorSelect: (color: string) => void;
  onCustomColorChange: (color: string) => void;
}

const ColorTab: React.FC<ColorTabProps> = ({
  extractedColors,
  selectedColor,
  customColor,
  onColorSelect,
  onCustomColorChange,
}) => {
  return (
    <div className="flex-1 space-y-6">
      {/* Select a color from the icon */}
      <div>
        <h5 className="py-2">Select a color from the icon</h5>
        <div className="flex flex-row">
          {extractedColors.map((color, index) => (
            <button
              key={index}
              onClick={() => onColorSelect(color)}
              className={`w-8 h-8 mx-1 rounded-xs border-2 transition-all ${selectedColor === color
                ? 'border-black dark:border-white ring-2 ring-white dark:ring-black'
                : 'border-slate-300 dark:border-slate-600 hover:border-black dark:hover:border-white'
                }`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Choose a new color */}
      <div>
        <h5 className="py-2">Choose a new color</h5>
        <div className="space-y-3">
          <ChromePicker
            color={customColor}
            onChange={(color) => onCustomColorChange(color.hex)}
            disableAlpha
          />
        </div>
      </div>
    </div>
  );
};

export default ColorTab;
