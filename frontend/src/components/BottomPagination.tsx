import React from 'react';

export interface BottomPaginationProps {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  itemsLabel?: string;
}

const BottomPagination: React.FC<BottomPaginationProps> = ({
  totalItems,
  currentPage,
  totalPages,
  itemsLabel = "items"
}) => {
  return (
    <div
      id="bottom-pagination"
      className="mt-8 flex flex-col items-center"
      style={{ display: totalPages > 1 ? 'flex' : 'none' }}
    >
      <div className="flex items-center space-x-1">
        <button
          id="bottom-prev-btn"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        <div id="page-numbers" className="flex items-center space-x-1">
          {/* Page numbers will be generated dynamically */}
        </div>

        <button
          id="bottom-next-btn"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          Next →
        </button>
      </div>

      {/* Page Input Box */}
      <div className="mt-4 flex items-center space-x-2">
        <label htmlFor="page-input" className="text-sm text-slate-700 dark:text-slate-300">
          Go to page:
        </label>
        <input
          id="page-input"
          type="number"
          min="1"
          max={totalPages}
          defaultValue={currentPage}
          placeholder={currentPage.toString()}
          className="w-20 px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
        />
        <button
          id="go-to-page-btn"
          className="px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Go
        </button>
      </div>

      <div id="bottom-page-info" className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        Page {currentPage} of {totalPages} • {totalItems} total {itemsLabel}
      </div>
    </div>
  );
};

export default BottomPagination;
