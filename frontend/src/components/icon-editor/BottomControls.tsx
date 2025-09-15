import React from 'react';

interface BottomControlsProps {
  onReset: () => void;
  onDownload: (svgContent: string, format: 'svg' | 'png', size?: number) => void;
  onCopyPNG: () => void;
  onCopySVG: () => void;
  getCurrentSvg: () => string;
}

const BottomControls: React.FC<BottomControlsProps> = ({
  onReset,
  onDownload,
  onCopyPNG,
  onCopySVG,
  getCurrentSvg,
}) => {
  return (
    <div className="p-4 border-t border-slate-200 dark:border-slate-700">
      <div className="grid grid-cols-2 gap-6">
        {/* First Column - Reset Button */}
        <div className="flex items-start">
          <button
            onClick={onReset}
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
              onClick={onCopyPNG}
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
            >
              Copy PNG
            </button>

            {/* Copy SVG */}
            <button
              onClick={onCopySVG}
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
  );
};

export default BottomControls;
