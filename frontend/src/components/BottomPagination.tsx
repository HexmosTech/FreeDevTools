import React, { useState } from 'react';

export interface BottomPaginationProps {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  itemsLabel?: string;
  onPageChange?: (page: number) => void;
}

const BottomPagination: React.FC<BottomPaginationProps> = ({
  totalItems,
  currentPage,
  totalPages,
  itemsLabel = "items",
  onPageChange
}) => {
  const [pageInput, setPageInput] = useState(currentPage.toString());

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

  const handleGoToPage = () => {
    const page = parseInt(pageInput, 10);
    if (page >= 1 && page <= totalPages) {
      onPageChange?.(page);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleGoToPage();
    }
  };

  // Update page input when currentPage changes
  React.useEffect(() => {
    setPageInput(currentPage.toString());
  }, [currentPage]);
  return (
    <div
      id="bottom-pagination"
      className="mt-8 flex flex-col items-center"
      style={{ display: totalPages > 1 ? 'flex' : 'none' }}
    >
      <div className="flex items-center space-x-1">
        <button
          onClick={() => onPageChange?.(currentPage - 1)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage <= 1}
        >
          ← Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {pageNumbers.map((pageNum) => {
            const isCurrentPage = pageNum === currentPage;
            const buttonClass = isCurrentPage
              ? 'bg-blue-600 text-white'
              : 'text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600';

            return (
              <button
                key={pageNum}
                onClick={() => onPageChange?.(pageNum)}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${buttonClass}`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange?.(currentPage + 1)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage >= totalPages}
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
          value={pageInput}
          onChange={(e) => setPageInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-20 px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
        />
        <button
          onClick={handleGoToPage}
          className="px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Go
        </button>
      </div>

      <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        Page {currentPage} of {totalPages} • {totalItems} total {itemsLabel}
      </div>
    </div>
  );
};

export default BottomPagination;
