import { Button } from '@/components/ui/button';
import { getCategoryDisplayName } from './utils';
import type { SearchInfo } from './types';

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

      <Button
        variant="default"
        onClick={onLoadMore}
        disabled={loadingMore}
        className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground"
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
      </Button>
    </div>
  );
};

export default LoadMoreSection;

