import type { SearchInfo } from './types';
import { getCategoryDisplayName } from './utils';

interface LoadMoreSectionProps {
  searchInfo: SearchInfo | null;
  currentPage: number;
  totalPages: number;
  allResultsCount: number;
  activeCategory: string;
  onLoadMore: () => void;
  loadingMore: boolean;
}

const LoadMoreSection = ({
  searchInfo,
  currentPage,
  totalPages,
  allResultsCount,
  activeCategory,
  onLoadMore,
  loadingMore,
}: LoadMoreSectionProps) => {
  const hasMoreResults = currentPage < totalPages;
  const currentPageNumber = Math.ceil(allResultsCount / 100);

  if (!hasMoreResults) {
    return null;
  }

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      {searchInfo && (
        <p className="text-sm text-muted-foreground">
          Showing {allResultsCount} of {searchInfo.totalHits.toLocaleString()}{' '}
          {activeCategory === 'all'
            ? 'items'
            : getCategoryDisplayName(activeCategory)}{' '}
          (Page {currentPageNumber} of {totalPages})
        </p>
      )}

      <button
        onClick={onLoadMore}
        disabled={loadingMore}
        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90 space-x-2"
      >
        {loadingMore ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary-foreground"></div>
            <span className="text-primary-foreground">Loading...</span>
          </>
        ) : (
          <>
            <span className="text-primary-foreground">Load More</span>
            <span className="text-xs text-primary-foreground/80">
              ({searchInfo ? searchInfo.totalHits - allResultsCount : 0} more)
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default LoadMoreSection;

