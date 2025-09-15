import React from 'react';

const DisplayTab: React.FC = () => {
  return (
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
  );
};

export default DisplayTab;
