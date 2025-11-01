import { IconSvg } from '@/components/ui/IconSvg';
import type { SearchInfo } from './types';
import { getCategoryDisplayName } from './utils';

interface SearchInfoHeaderProps {
  query: string;
  searchInfo: SearchInfo | null;
  activeCategory: string;
  onClear: () => void;
}

const SearchInfoHeader = ({
  query,
  searchInfo,
  activeCategory,
  onClear,
}: SearchInfoHeaderProps) => {
  const getTitle = () => {
    if (!searchInfo) {
      return `Search Results for "${query}"`;
    }

    if (activeCategory === 'all' || activeCategory === 'multi') {
      return `Found ${searchInfo.totalHits.toLocaleString()} results for "${query}"`;
    }

    return `Found ${searchInfo.totalHits.toLocaleString()} ${getCategoryDisplayName(activeCategory)} for "${query}"`;
  };

  return (
    <div className="flex items-center justify-between mb-4 mt-8 md:mt-0">
      <h2>{getTitle()}</h2>
      <button
        onClick={onClear}
        className="hidden md:flex items-center gap-2 h-9 rounded-md px-3 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
      >
        <kbd className="px-1.5 py-0.5 text-xs text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500">
          Esc
        </kbd>
        <span className="text-sm">Clear results</span>
        <IconSvg iconName="round-close" className="h-4 w-4" />
      </button>
    </div>
  );
};

export default SearchInfoHeader;
