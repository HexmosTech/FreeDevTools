import React, { useEffect, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';

interface IconEditorProps {
  svgContent: string;
  iconName: string;
  onClose: () => void;
  onDownload: (svgContent: string, format: 'svg' | 'png', size?: number) => void;
}

interface ColorChange {
  originalColor: string;
  newColor: string;
  element: string;
}

interface ShapeConfig {
  type: 'none' | 'circle' | 'square' | 'rounded-square';
  size: number;
  color: string;
}

const IconEditor: React.FC<IconEditorProps> = ({ svgContent, iconName, onClose, onDownload }) => {
  const [activeTab, setActiveTab] = useState<'colors' | 'shapes'>('colors');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [customColor, setCustomColor] = useState<string>('#4D99D5');
  const [colorChanges, setColorChanges] = useState<ColorChange[]>([]);
  const [shapeConfig, setShapeConfig] = useState<ShapeConfig>({
    type: 'none',
    size: 100,
    color: '#4D99D5'
  });
  const [history, setHistory] = useState<string[]>([svgContent]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const svgRef = useRef<HTMLDivElement>(null);
  const [extractedColors, setExtractedColors] = useState<string[]>([]);

  // Extract colors from SVG
  useEffect(() => {
    const colors = extractColorsFromSVG(svgContent);
    setExtractedColors(colors);
    if (colors.length > 0) {
      setSelectedColor(colors[0]);
    }
  }, [svgContent]);

  // Apply color changes to SVG
  const applyColorChange = (originalColor: string, newColor: string) => {
    const currentSvg = history[historyIndex];
    const updatedSvg = currentSvg.replace(
      new RegExp(originalColor, 'gi'),
      newColor
    );

    // Add to history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(updatedSvg);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);

    // Update color changes
    const existingChange = colorChanges.find(c => c.originalColor === originalColor);
    if (existingChange) {
      setColorChanges(prev =>
        prev.map(c => c.originalColor === originalColor ? { ...c, newColor } : c)
      );
    } else {
      setColorChanges(prev => [...prev, { originalColor, newColor, element: 'fill' }]);
    }
  };

  // Apply shape background
  const applyShapeBackground = () => {
    const currentSvg = history[historyIndex];
    let updatedSvg = currentSvg;

    // Remove any existing background shapes (both rect and circle)
    updatedSvg = currentSvg.replace(/<(rect|circle)[^>]*class="background-shape"[^>]*\/>/g, '');

    if (shapeConfig.type !== 'none') {
      // Add new background
      const size = shapeConfig.size;
      const color = shapeConfig.color;

      let shapeElement = '';
      if (shapeConfig.type === 'circle') {
        shapeElement = `<circle cx="50%" cy="50%" r="${size / 2}%" fill="${color}" stroke="none" class="background-shape"/>`;
      } else if (shapeConfig.type === 'square') {
        shapeElement = `<rect x="${(100 - size) / 2}%" y="${(100 - size) / 2}%" width="${size}%" height="${size}%" fill="${color}" stroke="none" class="background-shape"/>`;
      } else if (shapeConfig.type === 'rounded-square') {
        const radius = size * 0.1; // 10% of size for rounded corners
        shapeElement = `<rect x="${(100 - size) / 2}%" y="${(100 - size) / 2}%" width="${size}%" height="${size}%" rx="${radius}%" ry="${radius}%" fill="${color}" stroke="none" class="background-shape"/>`;
      }

      // Insert at the beginning of the SVG content
      updatedSvg = updatedSvg.replace(
        /<svg[^>]*>/,
        `$&${shapeElement}`
      );
    }

    // Add to history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(updatedSvg);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };


  // Undo/Redo functions
  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
    }
  };

  const reset = () => {
    setHistory([svgContent]);
    setHistoryIndex(0);
    setColorChanges([]);
    setShapeConfig({
      type: 'none',
      size: 100,
      color: '#4D99D5'
    });
    // Apply the reset to remove any background shapes
    setTimeout(() => applyShapeBackground(), 0);
  };

  const getCurrentSvg = () => history[historyIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 bg-slate-100 dark:bg-slate-800 p-6 flex flex-col">
          {/* Tabs */}
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab('colors')}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-lg transition-colors ${activeTab === 'colors'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
            >
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
                Colors
              </div>
            </button>
            <button
              onClick={() => setActiveTab('shapes')}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-lg transition-colors ${activeTab === 'shapes'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
            >
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Shapes
              </div>
            </button>
          </div>

          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <div className="flex-1 space-y-6">
              {/* Select a color from the icon */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                  Select a color from the icon
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {extractedColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-lg border-2 transition-all ${selectedColor === color
                        ? 'border-green-500 ring-2 ring-green-200'
                        : 'border-slate-300 dark:border-slate-600 hover:border-slate-400'
                        }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Choose a new color */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                  Choose a new color
                </h3>
                <div className="space-y-3">
                  <ChromePicker
                    color={customColor}
                    onChange={(color) => {
                      setCustomColor(color.hex);
                      if (selectedColor) {
                        applyColorChange(selectedColor, color.hex);
                      }
                    }}
                    disableAlpha
                  />
                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => {
                      setCustomColor(e.target.value);
                      if (selectedColor) {
                        applyColorChange(selectedColor, e.target.value);
                      }
                    }}
                    className="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    placeholder="#000000"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Shapes Tab */}
          {activeTab === 'shapes' && (
            <div className="flex-1 space-y-6">
              {/* Select a shape */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                  Select a shape
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { type: 'none', icon: 'X', label: 'None' },
                    { type: 'circle', icon: '○', label: 'Circle' },
                    { type: 'rounded-square', icon: '▢', label: 'Rounded Square' },
                    { type: 'square', icon: '▢', label: 'Square' }
                  ].map((shape) => (
                    <button
                      key={shape.type}
                      onClick={() => {
                        setShapeConfig(prev => ({ ...prev, type: shape.type as any }));
                        // Apply the change after state update
                        setTimeout(() => applyShapeBackground(), 0);
                      }}
                      className={`p-3 text-center rounded-lg border-2 transition-all ${shapeConfig.type === shape.type
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-200 dark:ring-blue-800'
                        : 'border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500'
                        }`}
                    >
                      <div className="text-lg mb-1">{shape.icon}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{shape.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                  Size
                </h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={shapeConfig.size}
                    onChange={(e) => {
                      setShapeConfig(prev => ({ ...prev, size: parseInt(e.target.value) }));
                      // Apply the change after state update
                      setTimeout(() => applyShapeBackground(), 0);
                    }}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>20%</span>
                    <span className="font-medium">{shapeConfig.size}%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Color */}
              <div>
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                  Color
                </h3>
                <div className="space-y-3">
                  <ChromePicker
                    color={shapeConfig.color}
                    onChange={(color) => {
                      setShapeConfig(prev => ({ ...prev, color: color.hex }));
                      // Apply the change after state update
                      setTimeout(() => applyShapeBackground(), 0);
                    }}
                    disableAlpha
                  />
                  <input
                    type="text"
                    value={shapeConfig.color}
                    onChange={(e) => {
                      setShapeConfig(prev => ({ ...prev, color: e.target.value }));
                      // Apply the change after state update
                      setTimeout(() => applyShapeBackground(), 0);
                    }}
                    className="w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    placeholder="#000000"
                  />
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Right Preview Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Controls */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center space-x-2">
              <button
                onClick={undo}
                disabled={historyIndex === 0}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </button>
              <button
                onClick={redo}
                disabled={historyIndex === history.length - 1}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                </svg>
              </button>
              <span className="text-sm text-slate-600 dark:text-slate-400">Reset</span>
            </div>
            <button
              onClick={onClose}
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              ← Exit editor
            </button>
          </div>

          {/* Icon Preview */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div
              className="relative"
              style={{
                backgroundImage: 'radial-gradient(circle, #ccc 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            >
              <div
                ref={svgRef}
                className="w-64 h-64 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: getCurrentSvg() }}
              />
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <button
                onClick={reset}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
              >
                Reset to Original
              </button>
              <div className="flex space-x-2">
                <button
                  onClick={() => onDownload(getCurrentSvg(), 'svg')}
                  className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors"
                >
                  Download SVG
                </button>
                <button
                  onClick={() => onDownload(getCurrentSvg(), 'png', 512)}
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  Download PNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to extract colors from SVG
function extractColorsFromSVG(svgContent: string): string[] {
  const colors = new Set<string>();

  // Extract fill colors
  const fillMatches = svgContent.match(/fill="([^"]+)"/g);
  if (fillMatches) {
    fillMatches.forEach(match => {
      const color = match.match(/fill="([^"]+)"/)?.[1];
      if (color && color !== 'none' && color !== 'currentColor') {
        colors.add(color);
      }
    });
  }

  // Extract stroke colors
  const strokeMatches = svgContent.match(/stroke="([^"]+)"/g);
  if (strokeMatches) {
    strokeMatches.forEach(match => {
      const color = match.match(/stroke="([^"]+)"/)?.[1];
      if (color && color !== 'none' && color !== 'currentColor') {
        colors.add(color);
      }
    });
  }

  return Array.from(colors).slice(0, 8); // Limit to 8 colors
}

export default IconEditor;