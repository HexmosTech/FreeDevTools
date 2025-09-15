import React, { useCallback, useEffect, useRef, useState } from 'react';
import BottomControls from './BottomControls';
import ColorTab from './ColorTab';
import Controls from './Controls';
import DisplayTab from './DisplayTab';
import PreviewArea from './PreviewArea';
import ShapeTab from './ShapeTab';
import type { ActiveTab, ColorChange, IconEditorProps, ShapeConfig } from './types';
import { extractColorsFromDOM, extractColorsFromSVG } from './utils';

const IconEditor: React.FC<IconEditorProps> = ({ svgContent, iconName, onClose, onDownload }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('colors');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedOriginalColor, setSelectedOriginalColor] = useState<string>(''); // Track the original color that was selected
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
    console.log('🔍 DEBUG: Original SVG content:', svgContent);

    setExtractedColors(colors);
    if (colors.length > 0) {
      setSelectedColor(colors[0]);
      setSelectedOriginalColor(colors[0]);
    } else {
      // Fallback to a default color if none found
      setSelectedColor('#000000');
      setSelectedOriginalColor('#000000');
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
            setSelectedOriginalColor(domColors[0]);
          } else {
            // If DOM extraction also fails, ensure we have at least one color
            setExtractedColors(['#000000']);
            setSelectedColor('#000000');
            setSelectedOriginalColor('#000000');
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
  const applyColorChange = useCallback((originalColor: string, newColor: string) => {
    const currentSvg = history[historyIndex];
    console.log('🔍 DEBUG: applyColorChange - originalColor:', originalColor, 'newColor:', newColor);
    console.log('🔍 DEBUG: applyColorChange - currentSvg before:', currentSvg);

    let updatedSvg = currentSvg;

    // Handle different color formats and contexts
    if (originalColor === 'currentColor') {
      // Replace currentColor in stroke and fill attributes
      updatedSvg = updatedSvg.replace(/stroke="currentColor"/g, `stroke="${newColor}"`);
      updatedSvg = updatedSvg.replace(/fill="currentColor"/g, `fill="${newColor}"`);
    } else {
      // For other colors, use exact string replacement with proper escaping
      const escapedOriginalColor = originalColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      updatedSvg = updatedSvg.replace(
        new RegExp(escapedOriginalColor, 'g'),
        newColor
      );
    }

    console.log('🔍 DEBUG: applyColorChange - updatedSvg after:', updatedSvg);

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
  }, [history, historyIndex, colorChanges]);

  // Apply shape background
  const applyShapeBackground = useCallback((customColor?: string, customType?: string) => {
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
  }, [history, historyIndex, shapeConfig]);

  // Undo function
  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
    }
  }, [historyIndex]);

  // Redo function
  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
    }
  }, [historyIndex, history.length]);

  // Reset to original
  const reset = useCallback(() => {
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
    setSelectedOriginalColor(originalColors[0] || '#000000');
  }, [svgContent]);

  const getCurrentSvg = useCallback(() => {
    const currentSvg = history[historyIndex];
    console.log('🔍 DEBUG: getCurrentSvg returning:', currentSvg);
    console.log('🔍 DEBUG: getCurrentSvg length:', currentSvg.length);
    console.log('🔍 DEBUG: getCurrentSvg historyIndex:', historyIndex, 'history length:', history.length);
    return currentSvg;
  }, [history, historyIndex]);

  // Copy functions
  const copyAsPNG = useCallback(() => {
    const svgElement = svgRef.current?.querySelector('svg');
    if (!svgElement) return;

    console.log('🔍 DEBUG: copyAsPNG - svgElement found:', svgElement);
    console.log('🔍 DEBUG: copyAsPNG - svgElement outerHTML:', svgElement.outerHTML);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const svgData = new XMLSerializer().serializeToString(svgElement);
    console.log('🔍 DEBUG: copyAsPNG - svgData:', svgData);
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
            console.log('PNG copied to clipboard');
          }).catch(err => {
            console.error('Failed to copy PNG:', err);
          });
        }
      });
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  }, []);

  const copyAsSVG = useCallback(() => {
    const svgElement = svgRef.current?.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    navigator.clipboard.writeText(svgData).then(() => {
      console.log('SVG copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy SVG:', err);
    });
  }, []);

  // Color tab handlers
  const handleColorSelect = useCallback((color: string) => {
    console.log('🔍 DEBUG: handleColorSelect called with:', color);
    setSelectedColor(color);
    setSelectedOriginalColor(color);
  }, []);

  const handleCustomColorChange = useCallback((color: string) => {
    console.log('🔍 DEBUG: handleCustomColorChange called with:', color);
    console.log('🔍 DEBUG: selectedOriginalColor:', selectedOriginalColor);
    setCustomColor(color);
    if (selectedOriginalColor) {
      applyColorChange(selectedOriginalColor, color);
      // Update the selected color to the new color so it stays selected
      setSelectedColor(color);
    }
  }, [selectedOriginalColor, applyColorChange]);

  // Shape tab handlers
  const handleShapeChange = useCallback((config: Partial<ShapeConfig>) => {
    setShapeConfig(prev => ({ ...prev, ...config }));
  }, []);

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

          {/* Tab Content */}
          {activeTab === 'colors' && (
            <ColorTab
              extractedColors={extractedColors}
              selectedColor={selectedColor}
              customColor={customColor}
              onColorSelect={handleColorSelect}
              onCustomColorChange={handleCustomColorChange}
            />
          )}

          {activeTab === 'display' && <DisplayTab />}

          {activeTab === 'shapes' && (
            <ShapeTab
              shapeConfig={shapeConfig}
              onShapeChange={handleShapeChange}
              onShapeApply={applyShapeBackground}
            />
          )}
        </div>

        {/* Right Preview Area */}
        <div className="flex-1 flex flex-col">
          <Controls
            onUndo={undo}
            onRedo={redo}
            onReset={reset}
            onClose={onClose}
            onDownload={onDownload}
            onCopyPNG={copyAsPNG}
            onCopySVG={copyAsSVG}
            getCurrentSvg={getCurrentSvg}
            canUndo={historyIndex > 0}
            canRedo={historyIndex < history.length - 1}
          />

          <PreviewArea svgRef={svgRef} svgContent={getCurrentSvg()} iconName={iconName} extractedColors={extractedColors} />

          <BottomControls
            onReset={reset}
            onDownload={onDownload}
            onCopyPNG={copyAsPNG}
            onCopySVG={copyAsSVG}
            getCurrentSvg={getCurrentSvg}
          />
        </div>
      </div>
    </div>
  );
};

export default IconEditor;
