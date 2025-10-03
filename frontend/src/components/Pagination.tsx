import React from 'react';

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  showBottomPagination?: boolean;
  itemsLabel?: string;
  onPageChange?: (page: number) => void;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  totalPages,
  showBottomPagination = false,
  itemsLabel = "items",
  onPageChange,
  onItemsPerPageChange
}) => {
  // Generate page numbers
  const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pages: number[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 3) {
      for (let i = 1; i <= maxVisible; i++) {
        pages.push(i);
      }
    } else if (currentPage >= totalPages - 2) {
      for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = Math.min(endIndex, totalItems) - startIndex;
  return (
    <>
      {/* Top Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
        <div className="text-sm text-slate-900 dark:text-slate-400 mb-2 sm:mb-0">
          Showing {paginatedItems} of {totalItems} {itemsLabel} (Page {currentPage} of {totalPages})
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          {/* Items per page dropdown */}
          <div className="flex items-center space-x-2">
            <label htmlFor="items-per-page" className="text-sm text-slate-700 dark:text-slate-300">
              Items per page:
            </label>
            <select
              id="items-per-page"
              className="px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={itemsPerPage.toString()}
              onChange={(e) => onItemsPerPageChange?.(parseInt(e.target.value, 10))}
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          {/* Pagination buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onPageChange?.(currentPage - 1)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage <= 1}
            >
              ← Previous
            </button>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => onPageChange?.(currentPage + 1)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage >= totalPages}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Pagination - This will be rendered separately at the bottom */}
      {showBottomPagination && (
        <div id="bottom-pagination" className="mt-8 flex flex-col items-center" style={{ display: 'none' }}>
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

          <div id="bottom-page-info" className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Page {currentPage} of {totalPages} • {totalItems} total {itemsLabel}
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
