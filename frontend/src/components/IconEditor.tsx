import { useEffect, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';

interface IconEditorProps {
  svgContent: string;
  onClose: () => void;
  onDownload: (svgContent: string) => void;
}

interface ColorChange {
  originalColor: string;
  newColor: string;
}

interface BackgroundShape {
  type: 'none' | 'circle' | 'square' | 'rounded-square';
  color: string;
  size: number;
}

export default function IconEditor({ svgContent, onClose, onDownload }: IconEditorProps) {
  const [svgElement, setSvgElement] = useState<SVGElement | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [isEditing, setIsEditing] = useState(false);
  const [colorChanges, setColorChanges] = useState<ColorChange[]>([]);
  const [backgroundShape, setBackgroundShape] = useState<BackgroundShape>({
    type: 'none',
    color: '#ffffff',
    size: 100
  });
  const [activeTab, setActiveTab] = useState<'colors' | 'shapes'>('colors');
  const [history, setHistory] = useState<string[]>([svgContent]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = svgRef.current.querySelector('svg');
      if (svg) {
        setSvgElement(svg);
        extractColors(svg);
      }
    }
  }, [svgContent]);

  const extractColors = (svg: SVGElement) => {
    const colors = new Set<string>();
    const elements = svg.querySelectorAll('*');

    elements.forEach(element => {
      const fill = element.getAttribute('fill');
      const stroke = element.getAttribute('stroke');

      if (fill && fill !== 'none' && fill !== 'currentColor') {
        colors.add(fill);
      }
      if (stroke && stroke !== 'none' && stroke !== 'currentColor') {
        colors.add(stroke);
      }
    });

    // Set first color as selected if available
    if (colors.size > 0) {
      setSelectedColor(Array.from(colors)[0]);
    }
  };

  const getUniqueColors = (): string[] => {
    if (!svgElement) return [];

    const colors = new Set<string>();
    const elements = svgElement.querySelectorAll('*');

    elements.forEach(element => {
      const fill = element.getAttribute('fill');
      const stroke = element.getAttribute('stroke');

      if (fill && fill !== 'none' && fill !== 'currentColor') {
        colors.add(fill);
      }
      if (stroke && stroke !== 'none' && stroke !== 'currentColor') {
        colors.add(stroke);
      }
    });

    return Array.from(colors);
  };

  const handleColorChange = (color: string) => {
    if (!svgElement) return;

    const elements = svgElement.querySelectorAll('*');
    let hasChanges = false;

    elements.forEach(element => {
      const fill = element.getAttribute('fill');
      const stroke = element.getAttribute('stroke');

      if (fill === selectedColor) {
        element.setAttribute('fill', color);
        hasChanges = true;
      }
      if (stroke === selectedColor) {
        element.setAttribute('stroke', color);
        hasChanges = true;
      }
    });

    if (hasChanges) {
      // Add to history
      const newSvgContent = svgElement.outerHTML;
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newSvgContent);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);

      // Add to color changes
      const existingChange = colorChanges.find(change => change.originalColor === selectedColor);
      if (existingChange) {
        setColorChanges(prev =>
          prev.map(change =>
            change.originalColor === selectedColor
              ? { ...change, newColor: color }
              : change
          )
        );
      } else {
        setColorChanges(prev => [...prev, { originalColor: selectedColor, newColor: color }]);
      }
    }
  };

  const handleBackgroundShapeChange = (type: BackgroundShape['type']) => {
    setBackgroundShape(prev => ({ ...prev, type }));
  };

  const handleBackgroundSizeChange = (size: number) => {
    setBackgroundShape(prev => ({ ...prev, size }));
  };

  const handleBackgroundColorChange = (color: string) => {
    setBackgroundShape(prev => ({ ...prev, color }));
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      if (svgRef.current) {
        svgRef.current.innerHTML = history[historyIndex - 1];
        const svg = svgRef.current.querySelector('svg');
        if (svg) {
          setSvgElement(svg);
        }
      }
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      if (svgRef.current) {
        svgRef.current.innerHTML = history[historyIndex + 1];
        const svg = svgRef.current.querySelector('svg');
        if (svg) {
          setSvgElement(svg);
        }
      }
    }
  };

  const reset = () => {
    if (svgRef.current) {
      svgRef.current.innerHTML = svgContent;
      const svg = svgRef.current.querySelector('svg');
      if (svg) {
        setSvgElement(svg);
        setHistory([svgContent]);
        setHistoryIndex(0);
        setColorChanges([]);
        setBackgroundShape({ type: 'none', color: '#ffffff', size: 100 });
      }
    }
  };

  const getRenderedSvg = (): string => {
    if (!svgElement) return svgContent;

    let svgString = svgElement.outerHTML;

    // Add background shape if selected
    if (backgroundShape.type !== 'none') {
      const viewBox = svgElement.getAttribute('viewBox') || '0 0 24 24';
      const [x, y, width, height] = viewBox.split(' ').map(Number);
      const centerX = x + width / 2;
      const centerY = y + height / 2;
      const shapeSize = (Math.min(width, height) * backgroundShape.size) / 100;

      let backgroundElement = '';

      switch (backgroundShape.type) {
        case 'circle':
          backgroundElement = `<circle cx="${centerX}" cy="${centerY}" r="${shapeSize / 2}" fill="${backgroundShape.color}"/>`;
          break;
        case 'square':
          backgroundElement = `<rect x="${centerX - shapeSize / 2}" y="${centerY - shapeSize / 2}" width="${shapeSize}" height="${shapeSize}" fill="${backgroundShape.color}"/>`;
          break;
        case 'rounded-square':
          backgroundElement = `<rect x="${centerX - shapeSize / 2}" y="${centerY - shapeSize / 2}" width="${shapeSize}" height="${shapeSize}" rx="${shapeSize * 0.1}" fill="${backgroundShape.color}"/>`;
          break;
      }

      // Insert background element at the beginning of the SVG
      svgString = svgString.replace('<svg', `<svg`);
      svgString = svgString.replace('>', `>${backgroundElement}`);
    }

    return svgString;
  };

  const handleDownload = () => {
    const finalSvg = getRenderedSvg();
    onDownload(finalSvg);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex h-full">
          {/* Left Panel - Editing Tools */}
          <div className="w-1/3 p-6 border-r border-slate-200 dark:border-slate-700 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Edit Icon
              </h3>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex mb-6">
              <button
                onClick={() => setActiveTab('colors')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${activeTab === 'colors'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
              >
                Colors
              </button>
              <button
                onClick={() => setActiveTab('shapes')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${activeTab === 'shapes'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
              >
                Shapes
              </button>
            </div>

            {/* Colors Tab */}
            {activeTab === 'colors' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-3">
                    Select a color from the icon
                  </h4>
                  <div className="grid grid-cols-4 gap-2">
                    {getUniqueColors().map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded border-2 ${selectedColor === color ? 'border-blue-500' : 'border-slate-300'
                          }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-3">
                    Choose a new color
                  </h4>
                  <ChromePicker
                    color={selectedColor}
                    onChange={(color) => handleColorChange(color.hex)}
                  />
                </div>
              </div>
            )}

            {/* Shapes Tab */}
            {activeTab === 'shapes' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-3">
                    Select a shape
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleBackgroundShapeChange('none')}
                      className={`p-3 text-sm font-medium rounded-lg border ${backgroundShape.type === 'none'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-300 dark:border-slate-600'
                        }`}
                    >
                      No Shape
                    </button>
                    <button
                      onClick={() => handleBackgroundShapeChange('circle')}
                      className={`p-3 text-sm font-medium rounded-lg border ${backgroundShape.type === 'circle'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-300 dark:border-slate-600'
                        }`}
                    >
                      Circle
                    </button>
                    <button
                      onClick={() => handleBackgroundShapeChange('square')}
                      className={`p-3 text-sm font-medium rounded-lg border ${backgroundShape.type === 'square'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-300 dark:border-slate-600'
                        }`}
                    >
                      Square
                    </button>
                    <button
                      onClick={() => handleBackgroundShapeChange('rounded-square')}
                      className={`p-3 text-sm font-medium rounded-lg border ${backgroundShape.type === 'rounded-square'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-300 dark:border-slate-600'
                        }`}
                    >
                      Rounded Square
                    </button>
                  </div>
                </div>

                {backgroundShape.type !== 'none' && (
                  <>
                    <div>
                      <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-3">
                        Size
                      </h4>
                      <input
                        type="range"
                        min="50"
                        max="150"
                        value={backgroundShape.size}
                        onChange={(e) => handleBackgroundSizeChange(Number(e.target.value))}
                        className="w-full"
                      />
                      <div className="text-sm text-slate-600 dark:text-slate-400 text-center mt-1">
                        {backgroundShape.size}%
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-3">
                        Color
                      </h4>
                      <ChromePicker
                        color={backgroundShape.color}
                        onChange={(color) => handleBackgroundColorChange(color.hex)}
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={undo}
                  disabled={historyIndex === 0}
                  className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Undo
                </button>
                <button
                  onClick={redo}
                  disabled={historyIndex === history.length - 1}
                  className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Redo
                </button>
              </div>

              <button
                onClick={reset}
                className="w-full px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600"
              >
                Reset
              </button>

              <button
                onClick={handleDownload}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                Download
              </button>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex-1 p-6 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800">
            <div className="w-64 h-64 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-lg">
              <div ref={svgRef} className="w-48 h-48 text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: svgContent }} />
            </div>

            <div className="mt-4 text-sm text-slate-600 dark:text-slate-400 text-center">
              Live Preview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
