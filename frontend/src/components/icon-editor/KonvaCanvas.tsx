import Konva from 'konva';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
import { Circle, Group, Layer, Path, Rect, Stage } from 'react-konva';
import { ColorManager } from './managers/ColorManager';
import { ExportManager } from './managers/ExportManager';
import { HistoryManager } from './managers/HistoryManager';
import { ShapeConfig, ShapeManager } from './managers/ShapeManager';
import { KonvaShape, SVGManager } from './managers/SVGManager';
import { TransformConfig, TransformManager } from './managers/TransformManager';
import type { IconEditorProps } from './types';

interface KonvaEditorState {
  svgShapes: KonvaShape[];
  backgroundShapes: KonvaShape[];
  extractedColors: string[];
  selectedColor: string;
  customColor: string;
  shapeConfig: ShapeConfig;
  transformConfig: TransformConfig;
  activeTab: 'colors' | 'display' | 'shapes';
  isLoading: boolean;
}

const KonvaCanvas: React.FC<IconEditorProps> = ({ svgContent, iconName, onClose, onDownload }) => {
  const stageRef = useRef<Konva.Stage>(null);
  const svgLayerRef = useRef<Konva.Layer>(null);
  const backgroundLayerRef = useRef<Konva.Layer>(null);

  // Managers
  const [svgManager] = useState(() => new SVGManager());
  const [colorManager] = useState(() => new ColorManager(svgManager));
  const [shapeManager] = useState(() => new ShapeManager(400, 400));
  const [historyManager] = useState(() => new HistoryManager(50));
  const [exportManager] = useState(() => new ExportManager(400, 400));
  const [transformManager] = useState(() => new TransformManager());

  // State
  const [editorState, setEditorState] = useState<KonvaEditorState>({
    svgShapes: [],
    backgroundShapes: [],
    extractedColors: [],
    selectedColor: '',
    customColor: '#4D99D5',
    shapeConfig: {
      type: 'none',
      color: '#4D99D5',
      size: 100
    },
    transformConfig: {
      scale: 1,
      x: 0,
      y: 0,
      rotation: 0,
      flipX: false,
      flipY: false
    },
    activeTab: 'colors',
    isLoading: true
  });

  // Initialize editor
  useEffect(() => {
    setEditorState(prev => ({ ...prev, isLoading: true }));

    // Use setTimeout to allow UI to update
    setTimeout(() => {
      const shapes = svgManager.convertSVGToKonva(svgContent);
      const colors = colorManager.extractColors(shapes);

      setEditorState(prev => ({
        ...prev,
        svgShapes: shapes,
        extractedColors: colors,
        selectedColor: colors[0] || '#000000',
        isLoading: false
      }));

      // Initialize transform manager
      transformManager.setShapes(shapes);

      // Add initial state to history
      historyManager.addState(shapes, [], 'Initial load');
    }, 100);
  }, [svgContent, svgManager, colorManager, transformManager, historyManager]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'z':
            e.preventDefault();
            if (e.shiftKey) {
              redo();
            } else {
              undo();
            }
            break;
          case 'y':
            e.preventDefault();
            redo();
            break;
          case 'r':
            e.preventDefault();
            handleResetTransform();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, handleResetTransform]);

  // Handle color change
  const handleColorChange = useCallback((originalColor: string, newColor: string) => {
    const updatedShapes = colorManager.replaceColorInAllShapes(editorState.svgShapes, originalColor, newColor);

    setEditorState(prev => ({
      ...prev,
      svgShapes: updatedShapes,
      extractedColors: prev.extractedColors.map(color =>
        color === originalColor ? newColor : color
      )
    }));

    // Add to history
    historyManager.addState(updatedShapes, editorState.backgroundShapes, `Color change: ${originalColor} → ${newColor}`);
  }, [editorState.svgShapes, editorState.backgroundShapes, colorManager, historyManager]);

  // Handle color selection
  const handleColorSelect = useCallback((color: string) => {
    setEditorState(prev => ({ ...prev, selectedColor: color }));
  }, []);

  // Handle custom color change
  const handleCustomColorChange = useCallback((color: string) => {
    setEditorState(prev => ({ ...prev, customColor: color }));
    if (editorState.selectedColor) {
      handleColorChange(editorState.selectedColor, color);
    }
  }, [editorState.selectedColor, handleColorChange]);

  // Transform handlers
  const handleScale = useCallback((scale: number) => {
    const updatedShapes = transformManager.applyScale(scale);
    setEditorState(prev => ({
      ...prev,
      svgShapes: updatedShapes,
      transformConfig: { ...prev.transformConfig, scale }
    }));
    historyManager.addState(updatedShapes, editorState.backgroundShapes, `Scale: ${(scale * 100).toFixed(0)}%`);
  }, [transformManager, editorState.backgroundShapes, historyManager]);

  const handlePosition = useCallback((x: number, y: number) => {
    const updatedShapes = transformManager.applyPosition(x, y);
    setEditorState(prev => ({
      ...prev,
      svgShapes: updatedShapes,
      transformConfig: { ...prev.transformConfig, x, y }
    }));
    historyManager.addState(updatedShapes, editorState.backgroundShapes, `Move: (${x}, ${y})`);
  }, [transformManager, editorState.backgroundShapes, historyManager]);

  const handleRotation = useCallback((rotation: number) => {
    const updatedShapes = transformManager.applyRotation(rotation);
    setEditorState(prev => ({
      ...prev,
      svgShapes: updatedShapes,
      transformConfig: { ...prev.transformConfig, rotation }
    }));
    historyManager.addState(updatedShapes, editorState.backgroundShapes, `Rotate: ${rotation}°`);
  }, [transformManager, editorState.backgroundShapes, historyManager]);

  const handleFlip = useCallback((flipX: boolean, flipY: boolean) => {
    const updatedShapes = transformManager.applyFlip(flipX, flipY);
    setEditorState(prev => ({
      ...prev,
      svgShapes: updatedShapes,
      transformConfig: { ...prev.transformConfig, flipX, flipY }
    }));
    const flipActions = [];
    if (flipX) flipActions.push('Flip X');
    if (flipY) flipActions.push('Flip Y');
    historyManager.addState(updatedShapes, editorState.backgroundShapes, flipActions.join(', '));
  }, [transformManager, editorState.backgroundShapes, historyManager]);

  const handleResetTransform = useCallback(() => {
    const updatedShapes = transformManager.resetTransforms();
    setEditorState(prev => ({
      ...prev,
      svgShapes: updatedShapes,
      transformConfig: {
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        flipX: false,
        flipY: false
      }
    }));
    historyManager.addState(updatedShapes, editorState.backgroundShapes, 'Reset transforms');
  }, [transformManager, editorState.backgroundShapes, historyManager]);

  // Handle shape background
  const handleShapeBackground = useCallback((config: ShapeConfig) => {
    const backgroundShapes = shapeManager.updateBackgroundShapes(config);

    setEditorState(prev => ({
      ...prev,
      backgroundShapes,
      shapeConfig: config
    }));

    // Add to history
    historyManager.addState(editorState.svgShapes, backgroundShapes, 'Shape background');
  }, [editorState.svgShapes, shapeManager, historyManager]);

  // Undo
  const undo = useCallback(() => {
    const state = historyManager.undo();
    if (state) {
      setEditorState(prev => ({
        ...prev,
        svgShapes: state.svgShapes,
        backgroundShapes: state.backgroundShapes
      }));
    }
  }, [historyManager]);

  // Redo
  const redo = useCallback(() => {
    const state = historyManager.redo();
    if (state) {
      setEditorState(prev => ({
        ...prev,
        svgShapes: state.svgShapes,
        backgroundShapes: state.backgroundShapes
      }));
    }
  }, [historyManager]);

  // Export functions
  const exportAsPNG = useCallback(async (size: number = 512) => {
    if (stageRef.current) {
      const result = await exportManager.exportStageToPNG(stageRef.current, {
        format: 'png',
        quality: 1,
        pixelRatio: size / 400
      });

      if (result.success && result.data) {
        exportManager.downloadFile(result.data, `${iconName}-${size}px.png`, 'image/png');
      }
    }
  }, [iconName, exportManager]);

  const exportAsSVG = useCallback(() => {
    const result = exportManager.exportShapesToSVG(editorState.svgShapes, editorState.backgroundShapes);

    if (result.success && result.data) {
      exportManager.downloadFile(result.data, `${iconName}.svg`, 'image/svg+xml');
    }
  }, [editorState, iconName, exportManager]);

  // Copy functions
  const copyAsPNG = useCallback(async () => {
    if (stageRef.current) {
      const result = await exportManager.exportStageToPNG(stageRef.current);

      if (result.success && result.data) {
        const response = await fetch(result.data as string);
        const blob = await response.blob();
        await exportManager.copyToClipboard(blob, 'image/png');
      }
    }
  }, [exportManager]);

  const copyAsSVG = useCallback(async () => {
    const result = exportManager.exportShapesToSVG(editorState.svgShapes, editorState.backgroundShapes);

    if (result.success && result.data) {
      await exportManager.copyToClipboard(result.data as string, 'text/plain');
    }
  }, [editorState, exportManager]);

  // Render Konva shape
  const renderKonvaShape = (shape: KonvaShape, key: string) => {
    if (shape.type === 'path' && shape.data) {
      return (
        <Path
          key={key}
          data={shape.data}
          fill={shape.fill}
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
          x={shape.x}
          y={shape.y}
          scaleX={shape.scaleX}
          scaleY={shape.scaleY}
          rotation={shape.rotation}
          draggable={shape.draggable}
        />
      );
    } else if (shape.type === 'circle') {
      return (
        <Circle
          key={key}
          x={shape.x + (shape.width || 0) / 2}
          y={shape.y + (shape.height || 0) / 2}
          radius={(shape.width || 0) / 2}
          fill={shape.fill}
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
          scaleX={shape.scaleX}
          scaleY={shape.scaleY}
          rotation={shape.rotation}
          draggable={shape.draggable}
        />
      );
    } else if (shape.type === 'rect') {
      return (
        <Rect
          key={key}
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          fill={shape.fill}
          stroke={shape.stroke}
          strokeWidth={shape.strokeWidth}
          scaleX={shape.scaleX}
          scaleY={shape.scaleY}
          rotation={shape.rotation}
          draggable={shape.draggable}
        />
      );
    } else if (shape.type === 'group' && shape.children) {
      return (
        <Group
          key={key}
          x={shape.x}
          y={shape.y}
          scaleX={shape.scaleX}
          scaleY={shape.scaleY}
          rotation={shape.rotation}
          draggable={shape.draggable}
        >
          {shape.children.map((child, index) => renderKonvaShape(child, `${key}-child-${index}`))}
        </Group>
      );
    }
    return null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 bg-slate-100 dark:bg-slate-800 p-6 flex flex-col">
          {/* Tabs */}
          <div className="flex mb-6">
            {[
              { id: 'colors', label: 'Colors', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z' },
              { id: 'display', label: 'Display', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
              { id: 'shapes', label: 'Shapes', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setEditorState(prev => ({ ...prev, activeTab: tab.id as any }))}
                className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${tab.id === 'colors' ? 'rounded-l-lg' :
                    tab.id === 'shapes' ? 'rounded-r-lg' : ''
                  } ${editorState.activeTab === tab.id
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
              >
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon} />
                  </svg>
                  {tab.label}
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {editorState.activeTab === 'colors' && (
            <div className="flex-1 space-y-6">
              {/* Select a color from the icon */}
              <div>
                <h5 className="py-2">Select a color from the icon</h5>
                <div className="flex flex-row flex-wrap gap-2">
                  {editorState.extractedColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorSelect(color)}
                      className={`w-8 h-8 rounded border-2 transition-all ${editorState.selectedColor === color
                          ? 'border-black dark:border-white ring-2 ring-white dark:ring-black'
                          : 'border-slate-300 dark:border-slate-600 hover:border-black dark:hover:border-white'
                        }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
                {editorState.extractedColors.length === 0 && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    No colors found in this icon
                  </p>
                )}
              </div>

              {/* Choose a new color */}
              <div>
                <h5 className="py-2">Choose a new color</h5>
                <div className="space-y-3">
                  <ChromePicker
                    color={editorState.customColor}
                    onChange={(color) => handleCustomColorChange(color.hex)}
                    disableAlpha
                  />
                </div>
                {editorState.selectedColor && (
                  <div className="mt-3 p-2 bg-slate-100 dark:bg-slate-700 rounded text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Replacing: </span>
                    <span
                      className="inline-block w-4 h-4 rounded border border-slate-300 dark:border-slate-600 mr-2"
                      style={{ backgroundColor: editorState.selectedColor }}
                    ></span>
                    <span className="font-mono text-xs">{editorState.selectedColor}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {editorState.activeTab === 'display' && (
            <div className="flex-1 space-y-6">
              {/* Scale */}
              <div>
                <h5 className="py-2">Scale</h5>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0.1"
                    max="3"
                    step="0.1"
                    value={editorState.transformConfig.scale}
                    onChange={(e) => handleScale(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>10%</span>
                    <span className="font-mono">{(editorState.transformConfig.scale * 100).toFixed(0)}%</span>
                    <span>300%</span>
                  </div>
                </div>
              </div>

              {/* Position */}
              <div>
                <h5 className="py-2">Position</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-slate-500 dark:text-slate-400">X</label>
                    <input
                      type="number"
                      value={editorState.transformConfig.x}
                      onChange={(e) => handlePosition(parseInt(e.target.value) || 0, editorState.transformConfig.y)}
                      className="w-full px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 dark:text-slate-400">Y</label>
                    <input
                      type="number"
                      value={editorState.transformConfig.y}
                      onChange={(e) => handlePosition(editorState.transformConfig.x, parseInt(e.target.value) || 0)}
                      className="w-full px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700"
                    />
                  </div>
                </div>
              </div>

              {/* Rotation */}
              <div>
                <h5 className="py-2">Rotation</h5>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={editorState.transformConfig.rotation}
                    onChange={(e) => handleRotation(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>-180°</span>
                    <span className="font-mono">{editorState.transformConfig.rotation}°</span>
                    <span>180°</span>
                  </div>
                </div>
              </div>

              {/* Flip */}
              <div>
                <h5 className="py-2">Flip</h5>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleFlip(!editorState.transformConfig.flipX, editorState.transformConfig.flipY)}
                    className={`p-2 text-sm rounded transition-colors ${editorState.transformConfig.flipX
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                  >
                    Flip X
                  </button>
                  <button
                    onClick={() => handleFlip(editorState.transformConfig.flipX, !editorState.transformConfig.flipY)}
                    className={`p-2 text-sm rounded transition-colors ${editorState.transformConfig.flipY
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                  >
                    Flip Y
                  </button>
                </div>
              </div>

              {/* Reset */}
              <div>
                <button
                  onClick={handleResetTransform}
                  className="w-full p-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                >
                  Reset All
                </button>
              </div>

              {/* Transform Summary */}
              <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded text-sm">
                <div className="text-slate-600 dark:text-slate-400 mb-1">Current Transform:</div>
                <div className="font-mono text-xs">
                  {transformManager.getTransformSummary()}
                </div>
              </div>
            </div>
          )}

          {editorState.activeTab === 'shapes' && (
            <div className="flex-1 space-y-6">
              {/* Select a shape */}
              <div>
                <h5 className="py-2">Select a shape</h5>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { type: 'none', icon: 'X', label: 'None' },
                    { type: 'circle', icon: '○', label: 'Circle' },
                    { type: 'rounded-square', icon: '▢', label: 'Rounded Square' },
                    { type: 'square', icon: '□', label: 'Square' },
                  ].map((shape) => (
                    <button
                      key={shape.type}
                      onClick={() => {
                        const newColor = shape.type !== 'none' ? '#d7c74c' : editorState.shapeConfig.color;
                        const newConfig = {
                          type: shape.type as any,
                          color: newColor,
                          size: editorState.shapeConfig.size
                        };
                        setEditorState(prev => ({ ...prev, shapeConfig: newConfig }));
                        handleShapeBackground(newConfig);
                      }}
                      className={`p-3 text-center rounded-lg border-2 transition-all ${editorState.shapeConfig.type === shape.type
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
                    value={editorState.shapeConfig.size}
                    onChange={(e) => {
                      const newSize = parseInt(e.target.value);
                      const newConfig = { ...editorState.shapeConfig, size: newSize };
                      setEditorState(prev => ({ ...prev, shapeConfig: newConfig }));
                      handleShapeBackground(newConfig);
                    }}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>20%</span>
                    <span>{editorState.shapeConfig.size}%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Color */}
              <div>
                <h5 className="py-2">Color</h5>
                <div className="space-y-3">
                  <ChromePicker
                    color={editorState.shapeConfig.color}
                    onChange={(color) => {
                      const newConfig = { ...editorState.shapeConfig, color: color.hex };
                      setEditorState(prev => ({ ...prev, shapeConfig: newConfig }));
                      handleShapeBackground(newConfig);
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
          {/* Controls */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={undo}
                disabled={!historyManager.canUndo()}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Undo (Ctrl+Z)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </button>
              <button
                onClick={redo}
                disabled={!historyManager.canRedo()}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Redo (Ctrl+Y)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => exportAsPNG(512)}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded transition-colors"
              >
                Download PNG
              </button>
              <button
                onClick={exportAsSVG}
                className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded transition-colors"
              >
                Download SVG
              </button>
              <button
                onClick={copyAsPNG}
                className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
              >
                Copy PNG
              </button>
              <button
                onClick={copyAsSVG}
                className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
              >
                Copy SVG
              </button>
              <button
                onClick={onClose}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                title="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Konva Canvas */}
          <div className="flex-1 p-4">
            <div className="w-full h-full bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden relative">
              {editorState.isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-800 z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Loading editor...</p>
                  </div>
                </div>
              )}
              <Stage
                ref={stageRef}
                width={400}
                height={400}
                className="w-full h-full"
              >
                {/* Background Layer */}
                <Layer ref={backgroundLayerRef}>
                  {editorState.backgroundShapes.map((shape) => renderKonvaShape(shape, `bg-${shape.id}`))}
                </Layer>

                {/* SVG Layer */}
                <Layer ref={svgLayerRef}>
                  {editorState.svgShapes.map((shape) => renderKonvaShape(shape, `svg-${shape.id}`))}
                </Layer>
              </Stage>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonvaCanvas;