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
    console.log('🔍 DEBUG: Extracting colors from SVG:', svgContent);
    let colors = extractColorsFromSVG(svgContent);
    console.log('🔍 DEBUG: Extracted colors from string:', colors);

    setExtractedColors(colors);
    if (colors.length > 0) {
      setSelectedColor(colors[0]);
    }

    // If no colors found from string, try extracting from DOM after a delay
    if (colors.length === 0) {
      const timeoutId = setTimeout(() => {
        if (svgRef.current) {
          console.log('🔍 DEBUG: No colors from string, trying DOM extraction');
          const domColors = extractColorsFromDOM(svgRef.current);
          console.log('🔍 DEBUG: Extracted colors from DOM:', domColors);
          if (domColors.length > 0) {
            setExtractedColors(domColors);
            setSelectedColor(domColors[0]);
          }
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [svgContent]);

  // Handle shape reset when type is 'none'
  useEffect(() => {
    if (shapeConfig.type === 'none') {
      const currentSvg = history[historyIndex];
      const updatedSvg = currentSvg.replace(/<(rect|circle)[^>]*class="background-shape"[^>]*\/>/g, '');

      if (updatedSvg !== currentSvg) {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(updatedSvg);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
      }
    }
  }, [shapeConfig.type, history, historyIndex]);

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

    // Update extracted colors - replace the original color with the new color
    setExtractedColors(prev =>
      prev.map(color => color === originalColor ? newColor : color)
    );
  };

  // Apply shape background
  const applyShapeBackground = (customColor?: string, customType?: string) => {
    const currentSvg = history[historyIndex];
    let updatedSvg = currentSvg;

    // Remove any existing background shapes (both rect and circle)
    updatedSvg = currentSvg.replace(/<(rect|circle)[^>]*class="background-shape"[^>]*\/>/g, '');

    const shapeType = customType || shapeConfig.type;
    if (shapeType !== 'none') {
      // Add new background
      const size = shapeConfig.size;
      const color = customColor || shapeConfig.color;

      let shapeElement = '';
      if (shapeType === 'circle') {
        shapeElement = `<circle cx="50%" cy="50%" r="${size / 2}%" fill="${color}" stroke="none" class="background-shape"/>`;
      } else if (shapeType === 'square') {
        shapeElement = `<rect x="${(100 - size) / 2}%" y="${(100 - size) / 2}%" width="${size}%" height="${size}%" fill="${color}" stroke="none" class="background-shape"/>`;
      } else if (shapeType === 'rounded-square') {
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

    // Re-extract colors from original SVG
    const originalColors = extractColorsFromSVG(svgContent);
    setExtractedColors(originalColors);
    setSelectedColor(originalColors[0] || '#000000');
  };

  const getCurrentSvg = () => history[historyIndex];

  // Copy functions
  const copyAsPNG = () => {
    const svgElement = svgRef.current?.querySelector('svg');
    if (!svgElement) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const img = new Image();

    canvas.width = 512;
    canvas.height = 512;

    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 512, 512);
      canvas.toBlob((blob) => {
        if (blob) {
          navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob
            })
          ]).then(() => {
            showToast('PNG copied to clipboard!');
          }).catch(() => {
            showToast('Failed to copy PNG to clipboard');
          });
        }
      }, 'image/png');
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const copyAsSVG = () => {
    const svgElement = svgRef.current?.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    navigator.clipboard.writeText(svgData).then(() => {
      showToast('SVG copied to clipboard!');
    }).catch(() => {
      showToast('Failed to copy SVG to clipboard');
    });
  };

  const showToast = (message: string) => {
    // Simple toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 bg-slate-100 dark:bg-slate-800 p-6 flex flex-col">
          {/* Tabs */}
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab('colors')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-l-lg transition-colors ${activeTab === 'colors'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
            >
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
                Colors
              </div>
            </button>
            <button
              onClick={() => setActiveTab('display')}
              className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'display'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
            >
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                Display
              </div>
            </button>
            <button
              onClick={() => setActiveTab('shapes')}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-r-lg transition-colors ${activeTab === 'shapes'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
            >
              <div className="flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <h5 className="py-2">Select a color from the icon</h5>
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
                <h5 className="py-2">Choose a new color</h5>
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
                </div>
              </div>
            </div>
          )}

          {/* Display Tab */}
          {activeTab === 'display' && (
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                {/* Scale */}
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Scale</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">coming soon</span>
                </div>

                {/* Move */}
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18m-4 4l4-4m0 0l-4-4m4 4H3"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Move</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">coming soon</span>
                </div>

                {/* Rotate */}
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Rotate</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">coming soon</span>
                </div>

                {/* Flip */}
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Flip</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">coming soon</span>
                </div>
              </div>
            </div>
          )}

          {/* Shapes Tab */}
          {activeTab === 'shapes' && (
            <div className="flex-1 space-y-6">
              {/* Select a shape */}
              <div>
                <h5 className="py-2">Select a shape</h5>
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
                        const newColor = shape.type !== 'none' ? '#d7c74c' : shapeConfig.color;
                        setShapeConfig(prev => ({
                          ...prev,
                          type: shape.type as any,
                          color: newColor
                        }));
                        // Apply the change immediately with the new color and type
                        setTimeout(() => applyShapeBackground(newColor, shape.type as any), 0);
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
                <h5 className="py-2">Size</h5>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={shapeConfig.size}
                    onChange={(e) => {
                      const newSize = parseInt(e.target.value);
                      setShapeConfig(prev => ({ ...prev, size: newSize }));
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
                <h5 className="py-2">Color</h5>
                <div className="space-y-3">
                  <ChromePicker
                    color={shapeConfig.color}
                    onChange={(color) => {
                      const newColor = color.hex;
                      setShapeConfig(prev => ({ ...prev, color: newColor }));
                      // Apply the change after state update
                      setTimeout(() => applyShapeBackground(), 0);
                    }}
                    disableAlpha
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
              <button
                onClick={reset}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Reset
              </button>
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
            <div className="relative w-64 h-64">
              {/* Checkered background pattern */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="checkerboard-light"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="5" height="5" fill="#f0f0f0" />
                    <rect x="5" y="5" width="5" height="5" fill="#f0f0f0" />
                    <rect x="0" y="5" width="5" height="5" fill="#e0e0e0" />
                    <rect x="5" y="0" width="5" height="5" fill="#e0e0e0" />
                  </pattern>
                  <pattern
                    id="checkerboard-dark"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="5" height="5" fill="#2a2a2a" />
                    <rect x="5" y="5" width="5" height="5" fill="#2a2a2a" />
                    <rect x="0" y="5" width="5" height="5" fill="#1a1a1a" />
                    <rect x="5" y="0" width="5" height="5" fill="#1a1a1a" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#checkerboard-light)" className="dark:hidden" />
                <rect width="100" height="100" fill="url(#checkerboard-dark)" className="hidden dark:block" />
              </svg>

              {/* Icon content */}
              <div
                ref={svgRef}
                className="absolute inset-0 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: getCurrentSvg() }}
              />
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-2 gap-6">
              {/* First Column - Reset Button */}
              <div className="flex items-start">
                <button
                  onClick={reset}
                  className="px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
                >
                  Reset to Original
                </button>
              </div>

              {/* Second Column - Two Rows, Each with Two Sub-columns */}
              <div className="space-y-4">
                {/* First Row - Copy Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Copy PNG */}
                  <button
                    onClick={() => copyAsPNG()}
                    className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
                  >
                    Copy PNG
                  </button>

                  {/* Copy SVG */}
                  <button
                    onClick={() => copyAsSVG()}
                    className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                    Copy SVG
                  </button>
                </div>

                {/* Second Row - Download Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  {/* PNG Download with Size Selector */}
                  <div className="flex rounded overflow-hidden h-[42px]">
                    <button
                      onClick={() => onDownload(getCurrentSvg(), 'png', parseInt((document.getElementById('editor-png-size-select') as HTMLSelectElement)?.value || '512'))}
                      className="flex-1 px-4 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors h-full flex items-center justify-center"
                    >
                      Download PNG
                    </button>
                    <div className="relative h-full">
                      <select
                        id="editor-png-size-select"
                        className="h-full px-3 text-sm font-medium text-white bg-green-700 hover:bg-green-800 transition-colors appearance-none cursor-pointer border-l border-green-500 min-w-[80px] focus:outline-none focus:ring-0 focus:border-green-500"
                      >
                        <option value="512">512px</option>
                        <option value="256">256px</option>
                        <option value="128">128px</option>
                        <option value="64">64px</option>
                        <option value="32">32px</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* SVG Download */}
                  <button
                    onClick={() => onDownload(getCurrentSvg(), 'svg')}
                    className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                    Download SVG
                  </button>
                </div>
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
  console.log('🔍 DEBUG: extractColorsFromSVG called with:', svgContent);
  const colors = new Set<string>();

  // Remove background shapes first to avoid extracting their colors
  const cleanSvg = svgContent.replace(/<(rect|circle)[^>]*class="background-shape"[^>]*\/>/g, '');
  console.log('🔍 DEBUG: Clean SVG:', cleanSvg);

  // Extract fill colors from attributes
  const fillMatches = cleanSvg.match(/fill="([^"]+)"/g);
  console.log('🔍 DEBUG: Fill matches:', fillMatches);
  if (fillMatches) {
    fillMatches.forEach(match => {
      const color = match.match(/fill="([^"]+)"/)?.[1];
      console.log('🔍 DEBUG: Found fill color:', color);
      if (color && isValidColor(color)) {
        const normalizedColor = normalizeColor(color);
        console.log('🔍 DEBUG: Normalized color:', normalizedColor);
        colors.add(normalizedColor);
      }
    });
  }

  // Extract stroke colors from attributes
  const strokeMatches = cleanSvg.match(/stroke="([^"]+)"/g);
  console.log('🔍 DEBUG: Stroke matches:', strokeMatches);
  if (strokeMatches) {
    strokeMatches.forEach(match => {
      const color = match.match(/stroke="([^"]+)"/)?.[1];
      console.log('🔍 DEBUG: Found stroke color:', color);
      if (color && isValidColor(color)) {
        const normalizedColor = normalizeColor(color);
        console.log('🔍 DEBUG: Normalized stroke color:', normalizedColor);
        colors.add(normalizedColor);
      }
    });
  }

  // Extract colors from CSS styles
  const styleMatches = cleanSvg.match(/style="([^"]+)"/g);
  if (styleMatches) {
    styleMatches.forEach(match => {
      const styleContent = match.match(/style="([^"]+)"/)?.[1];
      if (styleContent) {
        // Extract fill and stroke from CSS
        const fillMatch = styleContent.match(/fill:\s*([^;]+)/);
        if (fillMatch && isValidColor(fillMatch[1].trim())) {
          colors.add(normalizeColor(fillMatch[1].trim()));
        }

        const strokeMatch = styleContent.match(/stroke:\s*([^;]+)/);
        if (strokeMatch && isValidColor(strokeMatch[1].trim())) {
          colors.add(normalizeColor(strokeMatch[1].trim()));
        }
      }
    });
  }

  // Extract colors from stop elements (gradients)
  const stopMatches = cleanSvg.match(/stop-color="([^"]+)"/g);
  if (stopMatches) {
    stopMatches.forEach(match => {
      const color = match.match(/stop-color="([^"]+)"/)?.[1];
      if (color && isValidColor(color)) {
        colors.add(normalizeColor(color));
      }
    });
  }

  const result = Array.from(colors).slice(0, 8); // Limit to 8 colors
  console.log('🔍 DEBUG: Final extracted colors:', result);
  return result;
}

// Helper function to check if a color is valid
function isValidColor(color: string): boolean {
  if (!color) return false;

  const cleanColor = color.trim();

  // Skip transparent, none, currentColor, and empty values
  if (cleanColor === 'none' ||
    cleanColor === 'currentColor' ||
    cleanColor === 'transparent' ||
    cleanColor === '' ||
    cleanColor.startsWith('url(')) {
    return false;
  }

  return true;
}

// Helper function to normalize color format
function normalizeColor(color: string): string {
  const cleanColor = color.trim();

  // Convert rgb() to hex
  if (cleanColor.startsWith('rgb(')) {
    const rgbMatch = cleanColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1]);
      const g = parseInt(rgbMatch[2]);
      const b = parseInt(rgbMatch[3]);
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
  }

  // Convert rgba() to hex (ignoring alpha)
  if (cleanColor.startsWith('rgba(')) {
    const rgbaMatch = cleanColor.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
    if (rgbaMatch) {
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
  }

  // Convert hsl() to hex (simplified)
  if (cleanColor.startsWith('hsl(')) {
    const hslMatch = cleanColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (hslMatch) {
      const h = parseInt(hslMatch[1]);
      const s = parseInt(hslMatch[2]);
      const l = parseInt(hslMatch[3]);
      return hslToHex(h, s, l);
    }
  }

  return cleanColor;
}

// Helper function to convert HSL to HEX
function hslToHex(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l / 100 - 1)) * s / 100;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l / 100 - c / 2;

  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  const rHex = Math.round((r + m) * 255).toString(16).padStart(2, '0');
  const gHex = Math.round((g + m) * 255).toString(16).padStart(2, '0');
  const bHex = Math.round((b + m) * 255).toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}

// Helper function to extract colors from DOM elements
function extractColorsFromDOM(container: HTMLElement): string[] {
  const colors = new Set<string>();

  // Find all SVG elements
  const svgElements = container.querySelectorAll('svg *');

  svgElements.forEach(element => {
    const computedStyle = window.getComputedStyle(element);

    // Get fill color
    const fill = computedStyle.fill;
    if (fill && fill !== 'none' && fill !== 'currentColor' && fill !== 'transparent') {
      const normalizedFill = normalizeColor(fill);
      if (isValidColor(normalizedFill)) {
        colors.add(normalizedFill);
      }
    }

    // Get stroke color
    const stroke = computedStyle.stroke;
    if (stroke && stroke !== 'none' && stroke !== 'currentColor' && stroke !== 'transparent') {
      const normalizedStroke = normalizeColor(stroke);
      if (isValidColor(normalizedStroke)) {
        colors.add(normalizedStroke);
      }
    }
  });

  return Array.from(colors).slice(0, 8);
}

export default IconEditor;