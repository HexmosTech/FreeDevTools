import React from 'react';

interface ControlsProps {
  onUndo: () => void;
  onRedo: () => void;
  onReset: () => void;
  onClose: () => void;
  onDownload: (svgContent: string, format: 'svg' | 'png', size?: number) => void;
  onCopyPNG: () => void;
  onCopySVG: () => void;
  getCurrentSvg: () => string;
  canUndo: boolean;
  canRedo: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  onUndo,
  onRedo,
  onReset,
  onClose,
  onDownload,
  onCopyPNG,
  onCopySVG,
  getCurrentSvg,
  canUndo,
  canRedo,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
      <div className="flex items-center space-x-2">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
          </svg>
        </button>
        <button
          onClick={onReset}
          className="px-3 py-1 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
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
  );
};

export default Controls;
