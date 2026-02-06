import React, { useCallback, useEffect, useState } from 'react';
// Icons are tree-shakeable, so only imported icons are bundled
import { MEILI_SEARCH_API_KEY } from '@/config';
import { getProStatusFromCookie } from '@/lib/api';
import {
  Cross2Icon,
  DownloadIcon,
  FileIcon,
  FileTextIcon,
  GearIcon,
  ImageIcon,
  ModulzLogoIcon,
  ReaderIcon,
  RocketIcon
} from '@radix-ui/react-icons';
// Types
interface SearchResult {
  id?: string;
  title?: string;
  name?: string;
  description?: string;
  category?: string;
  url?: string;
  path?: string;
  slug?: string;
  code?: string;
  image?: string;
  [key: string]: unknown;
}

interface SearchResponse {
  hits: SearchResult[];
  query: string;
  processingTimeMs: number;
  limit: number;
  offset: number;
  estimatedTotalHits: number;
  totalHits?: number;
  totalPages?: number;
  page?: number;
  facetDistribution?: {
    category?: {
      [key: string]: number;
    };
  };
}

interface SearchInfo {
  totalHits: number;
  processingTime: number;
  facetTotal?: number;
}

declare global {
  interface Window {
    searchState?: {
      query: string;
      setQuery: (query: string) => void;
      getQuery: () => string;
    };
  }
}

// Utils
function getCategoryDisplayName(category: string): string {
  switch (category) {
    case 'emoji':
      return 'emojis';
    case 'mcp':
      return 'MCPs';
    case 'svg_icons':
      return 'SVG icons';
    case 'png_icons':
      return 'PNG icons';
    case 'tools':
      return 'tools';
    case 'tldr':
      return 'TLDRs';
    case 'cheatsheets':
      return 'cheatsheets';
    case 'man_pages':
      return 'man pages';
    case 'installerpedia':
      return 'installerpedia';
    default:
      return 'items';
  }
}

function getCategoryKeyForSearch(categoryKey: string): string {
  // Map UI category keys to actual category names in search results
  if (categoryKey === 'emoji') {
    return 'emojis';
  }
  return categoryKey;
}

function getBadgeVariant(category: string): string {
  switch (category?.toLowerCase()) {
    case 'emojis':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'svg_icons':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'tools':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'tldr':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'cheatsheets':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    case 'png_icons':
      return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
    case 'mcp':
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
    case 'man_pages':
      return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
    case 'installerpedia':
      return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
}

function updateUrlHash(searchQuery: string): void {
  if (searchQuery.trim()) {
    window.location.hash = `search?q=${encodeURIComponent(searchQuery)}`;
  } else {
    // Keep empty search state hash instead of removing it
    if (window.location.hash.startsWith('#search')) {
      if (window.location.hash !== '#search?q=') {
        window.location.hash = 'search?q=';
      }
    }
  }
}

// API
async function searchUtilities(
  query: string,
  categories: string[] = [],
  page: number = 1
): Promise<SearchResponse> {
  try {
    const searchBody: {
      q: string;
      limit: number;
      offset: number;
      facets: string[];
      attributesToRetrieve: string[];
      filter?: string;
    } = {
      q: query,
      limit: 30,
      offset: (page - 1) * 30,
      facets: ['category'],
      attributesToRetrieve: [
        'id',
        'name',
        'title',
        'description',
        'category',
        'path',
        'image',
        'code',
      ],
    };

    if (categories.length > 0) {
      const filterConditions: string[] = categories.map((category) => {
        if (category === 'emoji') {
          return "category = 'emojis'";
        }
        return `category = '${category}'`;
      });

      if (filterConditions.length === 1) {
        searchBody.filter = filterConditions[0];
      } else {
        searchBody.filter = filterConditions.join(' OR ');
      }
    }

    const response = await fetch(
      'https://search.apps.hexmos.com/indexes/freedevtools/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${MEILI_SEARCH_API_KEY}`,
        },
        body: JSON.stringify(searchBody),
      }
    );

    if (!response.ok) {
      throw new Error('Search failed: ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Search error:', error);
    return {
      hits: [],
      query: '',
      processingTimeMs: 0,
      limit: 0,
      offset: 0,
      estimatedTotalHits: 0,
    };
  }
}

// Hook
function useSearchQuery() {
  const [query, setQuery] = useState(() => {
    if (
      typeof window !== 'undefined' &&
      window.searchState &&
      window.searchState.getQuery()
    ) {
      const initialQuery = window.searchState.getQuery();
      return initialQuery;
    }
    return '';
  });

  useEffect(() => {
    const checkHashForSearch = () => {
      if (window.location.hash.startsWith('#search?q=')) {
        try {
          const hashParams = new URLSearchParams(
            window.location.hash.substring(8)
          );
          const searchParam = hashParams.get('q');
          // Set query even if empty (for empty search state)
          setQuery(searchParam || '');
          if (window.searchState) {
            window.searchState.setQuery(searchParam || '');
          }
        } catch (e) {
          console.error('Error parsing hash params:', e);
        }
      }
    };

    checkHashForSearch();
    window.addEventListener('hashchange', checkHashForSearch);
    return () => {
      window.removeEventListener('hashchange', checkHashForSearch);
    };
  }, []);

  useEffect(() => {
    const handleSearchQueryChange = (event: CustomEvent) => {
      const newQuery = event.detail.query;
      setQuery(newQuery);
      updateUrlHash(newQuery);
    };

    window.addEventListener(
      'searchQueryChanged',
      handleSearchQueryChange as (event: Event) => void
    );

    if (window.searchState && window.searchState.getQuery()) {
      const initialQuery = window.searchState.getQuery();
      updateUrlHash(initialQuery);
    }

    return () => {
      window.removeEventListener(
        'searchQueryChanged',
        handleSearchQueryChange as (event: Event) => void
      );
    };
  }, []);

  useEffect(() => {
    updateUrlHash(query);
  }, [query]);

  return { query, setQuery };
}

// Component: ResultCard
const ResultCard = ({ result }: { result: SearchResult }) => {
  const category = result.category?.toLowerCase();

  const baseUrl =
    typeof window !== 'undefined'
      ? `${window.location.protocol}//${window.location.host}`
      : 'https://hexmos.com';

  if (category === 'emojis') {
    return (
      <a
        href={result.path ? `${baseUrl}${result.path}` : '#'}
        className="block no-underline"
      >
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 overflow-hidden h-full flex flex-col cursor-pointer">
          <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
            {result.category && (
              <div
                className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
              >
                {result.category}
              </div>
            )}
            <div className="emoji-preview text-6xl mb-4">{result.code}</div>
            <span className="font-medium text-center text-xs">
              {result.name || result.title || 'Untitled'}
            </span>
          </div>
        </div>
      </a>
    );
  }

  if (category === 'svg_icons' || category === 'png_icons') {
    return (
      <a
        href={result.path ? `${baseUrl}${result.path}` : '#'}
        className="block no-underline"
      >
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 h-full flex flex-col cursor-pointer">
          <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
            {result.category && (
              <div
                className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
              >
                {result.category === 'svg_icons' ? 'SVG Icons' : 'PNG Icons'}
              </div>
            )}
            <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white dark:bg-gray-100 rounded-md p-2">
              <img
                src={`https://hexmos.com/freedevtools${result.image}`}
                alt={result.name || result.title || 'Icon'}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="text-center text-xs text-gray-700 dark:text-gray-300">
              {result.name || result.title || 'Untitled'}
            </span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={result.path ? `${baseUrl}${result.path}` : '#'}
      className="block no-underline"
    >
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 h-full flex flex-col cursor-pointer">
        <div className="p-4 flex flex-col h-full relative">
          {result.category && (
            <div
              className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
            >
              {(result.category as string).includes('_')
                ? (result.category as string)
                  .split('_')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')
                : result.category}
            </div>
          )}
          <div className="pr-16 mb-2">
            <span className="font-bold text-md">
              {result.name || result.title || 'Untitled'}
            </span>
          </div>
          {result.description && (
            <p className="text-sm text-muted-foreground mb-2 line-clamp-3 flex-grow">
              {result.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

// Main Component
const SearchPage: React.FC = () => {
  const { query, setQuery } = useSearchQuery();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchInfo, setSearchInfo] = useState<SearchInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allResults, setAllResults] = useState<SearchResult[]>([]);
  const [availableCategories, setAvailableCategories] = useState<{
    [key: string]: number;
  }>({});
  const [isPro, setIsPro] = useState<boolean>(false);
  const [searchesLeft] = useState<number>(20);

  const getEffectiveCategories = useCallback(() => {
    if (activeCategory === 'all') return [];
    if (activeCategory === 'multi') return selectedCategories;
    return [activeCategory];
  }, [activeCategory, selectedCategories]);

  // Check pro status on mount
  useEffect(() => {
    const proStatus = getProStatusFromCookie();
    setIsPro(proStatus);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSearchInfo(null);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      setCurrentPage(1);
      setAvailableCategories({});
      try {
        const searchResponse = await searchUtilities(
          query,
          getEffectiveCategories(),
          1
        );
        console.log('Search results:', searchResponse);
        setResults(searchResponse.hits || []);
        setAllResults(searchResponse.hits || []);

        let facetTotal = 0;
        if (searchResponse.facetDistribution?.category) {
          facetTotal = Object.values(
            searchResponse.facetDistribution.category
          ).reduce((sum, count) => sum + count, 0);
          setAvailableCategories(searchResponse.facetDistribution.category);
        }

        setSearchInfo({
          totalHits:
            facetTotal > 0
              ? facetTotal
              : searchResponse.estimatedTotalHits || 0,
          processingTime: searchResponse.processingTimeMs || 0,
          facetTotal: facetTotal,
        });
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
        setAllResults([]);
        setSearchInfo(null);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, activeCategory, selectedCategories, getEffectiveCategories]);

  useEffect(() => {
    setCurrentPage(1);
    setResults([]);
    setAllResults([]);
    setSearchInfo(null);
  }, [activeCategory, selectedCategories]);

  const filteredResults = allResults;
  const totalPages = searchInfo ? Math.ceil(searchInfo.totalHits / 100) : 1;
  const hasMoreResults = currentPage < totalPages;

  const loadMoreResults = async () => {
    if (!hasMoreResults || loadingMore) return;

    setLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      const searchResponse = await searchUtilities(
        query,
        getEffectiveCategories(),
        nextPage
      );
      const newResults = searchResponse.hits || [];
      setAllResults((prev) => [...prev, ...newResults]);
      setResults((prev) => [...prev, ...newResults]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Load more error:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleCategoryClick = (category: string) => {
    if (category === 'all') {
      setActiveCategory('all');
      setSelectedCategories([]);
    } else {
      setActiveCategory(category);
      setSelectedCategories([category]);
    }
  };

  const handleCategoryRightClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();

    if (category === 'all') {
      setActiveCategory('all');
      setSelectedCategories([]);
      return;
    }

    const isSelected = selectedCategories.includes(category);

    if (isSelected) {
      const newSelection = selectedCategories.filter((cat) => cat !== category);
      setSelectedCategories(newSelection);
      if (newSelection.length === 0) {
        setActiveCategory('all');
      } else {
        setActiveCategory('multi');
      }
    } else {
      const newSelection = [...selectedCategories, category];
      setSelectedCategories(newSelection);
      setActiveCategory('multi');
    }
  };

  const clearResults = useCallback(() => {
    setQuery('');
    setResults([]);
    setAllResults([]);
    setCurrentPage(1);
    setActiveCategory('all');
    setSelectedCategories([]);

    if (window.searchState) {
      window.searchState.setQuery('');
    }

    if (window.location.hash.startsWith('#search')) {
      history.pushState(
        '',
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }, [setQuery]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && query.trim()) {
        clearResults();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [query, clearResults]);

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'tools':
        return (
          <GearIcon className="hidden md:block w-4 h-4 mr-1 flex-shrink-0" />
        );
      case 'tldr':
        return (
          <FileIcon className="hidden md:block w-4 h-4 mr-1 flex-shrink-0" />
        );
      case 'cheatsheets':
        return (
          <FileTextIcon className="hidden md:block w-4 h-4 mr-1 flex-shrink-0" />
        );
      case 'png_icons':
      case 'svg_icons':
        return (
          <ImageIcon className="hidden md:block w-4 h-4 mr-1 flex-shrink-0" />
        );
      case 'emoji':
        return (
          <RocketIcon className="hidden md:block w-4 h-4 mr-1 flex-shrink-0" />
        );
      case 'mcp':
        return (
          <ModulzLogoIcon className="hidden md:block w-4 h-4 mr-1 flex-shrink-0" />
        );
      case 'man_pages':
        return (
          <ReaderIcon className="hidden md:block w-4 h-4 mr-1 flex-shrink-0" />
        );
      case 'installerpedia':
        return (
          <DownloadIcon className="hidden md:block w-4 h-4 mr-1 flex-shrink-0" />
        );
      default:
        return null;
    }
  };

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'tools', label: 'Tools' },
    { key: 'tldr', label: 'TLDR' },
    { key: 'cheatsheets', label: 'Cheatsheets' },
    { key: 'png_icons', label: 'PNG Icons' },
    { key: 'svg_icons', label: 'SVG Icons' },
    { key: 'emoji', label: 'Emojis' },
    { key: 'mcp', label: 'MCP' },
    { key: 'man_pages', label: 'Man Pages' },
    { key: 'installerpedia', label: 'InstallerPedia' },
  ];

  // Check if we're in empty search state (hash is #search?q= with empty or no query)
  const isEmptySearchState = !query.trim() && window.location.hash.startsWith('#search');

  // Empty state component
  if (isEmptySearchState) {
    return (
      <div className="" style={{ minHeight: '60vh' }}>
        <div className="mb-8">
          {/* Empty State Header */}
          <div className="mb-8 mt-8 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black dark:text-slate-300">
              Search anything
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Enter a keyword to find open source resources
            </p>
          </div>

          {/* Pro Upgrade Button */}
          {!isPro && (
            <div className="flex justify-start items-center gap-2 mb-8">
              <a
                href="/freedevtools/pro"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-sm text-slate-700 dark:text-slate-300"
                title="Upgrade to Pro for unlimited searches"
              >
                <span>Get unlimited searches</span>
              </a>
              <a
                href="/freedevtools/pro"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-sm text-slate-700 dark:text-slate-300"
                title="Upgrade to Pro for unlimited searches"
              >
                <span>{searchesLeft} search left</span>
              </a>
            </div>
          )}

          {/* Category Filters - Same as in search results */}
          <div className="flex flex-wrap gap-2 pb-2">
            <button
              onClick={() => handleCategoryClick('all')}
              onContextMenu={(e) => handleCategoryRightClick(e, 'all')}
              className={`text-xs lg:text-sm flex items-center justify-center gap-1 px-2 h-9 rounded-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeCategory === 'all'
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-blue-500/50'
                : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                }`}
            >
              All
            </button>

            {categories
              .filter((cat) => cat.key !== 'all')
              .map((category) => {
                const isActive =
                  activeCategory === category.key ||
                  selectedCategories.includes(category.key);

                return (
                  <button
                    key={category.key}
                    onClick={() => handleCategoryClick(category.key)}
                    onContextMenu={(e) => handleCategoryRightClick(e, category.key)}
                    className={`text-xs lg:text-sm flex items-center gap-1 px-2 h-9 rounded-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive || selectedCategories.includes(category.key)
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-blue-500/50'
                      : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50'
                      }`}
                    title={!isActive ? 'Right-click to multi-select' : undefined}
                  >
                    {getCategoryIcon(category.key)}
                    <span className="truncate">{category.label}</span>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    );
  }

  if (!query.trim() && !isEmptySearchState) {
    return null;
  }

  const formatCount = (count: number | undefined): string => {
    if (count === undefined) return '';
    if (count > 999) {
      return `${Math.floor(count / 1000)}k+`;
    }
    return count.toString();
  };

  const getAllCount = () => {
    if (Object.keys(availableCategories).length === 0) return undefined;
    return Object.values(availableCategories).reduce(
      (sum, count) => sum + count,
      0
    );
  };

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
    <div className="">
      <div className="mb-8">
        {/* SearchInfoHeader */}
        <div className="flex items-center justify-between mb-4 mt-8 md:mt-0">
          <h2>{getTitle()}</h2>
          <button
            onClick={clearResults}
            className="hidden md:flex items-center gap-2 h-9 rounded-md px-3 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
          >
            <kbd className="px-1.5 py-0.5 text-xs text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500">
              Esc
            </kbd>
            <span className="text-sm">Clear results</span>
            <Cross2Icon className="h-4 w-4" />
          </button>
        </div>

        {/* CategoryFilter */}
        <div className="flex flex-wrap gap-2 pb-2">

          <button
            onClick={() => handleCategoryClick('all')}
            onContextMenu={(e) => handleCategoryRightClick(e, 'all')}
            className={`text-xs lg:text-sm flex items-center justify-center gap-1 px-2 h-9 rounded-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeCategory === 'all'
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-blue-500/50'
              : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
              }`}
          >
            All{' '}
            {activeCategory === 'all' &&
              Object.keys(availableCategories).length > 0 &&
              `(${formatCount(getAllCount())})`}
          </button>

          {categories
            .filter((cat) => cat.key !== 'all')
            .map((category) => {
              const isActive =
                activeCategory === category.key ||
                selectedCategories.includes(category.key);
              const searchCategoryKey = getCategoryKeyForSearch(category.key);
              const count =
                availableCategories[searchCategoryKey] ||
                (activeCategory === 'all'
                  ? availableCategories[searchCategoryKey]
                  : undefined);

              const buttonContent = (
                <>
                  {getCategoryIcon(category.key)}
                  <span className="truncate">{category.label}</span>
                  {count !== undefined && (
                    <span className="flex-shrink-0 ml-0.5">
                      ({formatCount(count)})
                    </span>
                  )}
                </>
              );

              const buttonClassName = `text-xs lg:text-sm flex items-center gap-1 px-2 h-9 rounded-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive || selectedCategories.includes(category.key)
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-blue-500/50'
                : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50'
                }`;



              return (
                <button
                  key={category.key}
                  onClick={() => handleCategoryClick(category.key)}
                  onContextMenu={(e) => handleCategoryRightClick(e, category.key)}
                  className={buttonClassName}
                  title={!isActive ? 'Right-click to multi-select' : undefined}
                >
                  {buttonContent}
                </button>
              );
            })}
        </div>
      </div>

      {/* LoadingState */}
      {loading && (
        <div className="text-center p-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-2 text-muted-foreground">Searching...</p>
        </div>
      )}

      {/* EmptyState */}
      {!loading && results.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">
            No results found for &quot;{query}&quot;
          </p>
        </div>
      )}

      {!loading && results.length > 0 && filteredResults.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">
            No results found in category <strong>{activeCategory}</strong>
          </p>
          <button
            onClick={() => setActiveCategory('all')}
            className="mt-2 text-primary underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            View all results
          </button>
        </div>
      )}

      {/* ResultsGrid */}
      {!loading && filteredResults.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResults.map((result, index) => (
              <ResultCard key={result.id || index} result={result} />
            ))}
          </div>

          {/* LoadMoreSection */}
          {currentPage < totalPages && (
            <div className="flex flex-col items-center space-y-4 mt-8">
              {searchInfo && (
                <p className="text-sm text-muted-foreground">
                  Showing {allResults.length} of{' '}
                  {searchInfo.totalHits.toLocaleString()}{' '}
                  {activeCategory === 'all'
                    ? 'items'
                    : getCategoryDisplayName(activeCategory)}{' '}
                  (Page {Math.ceil(allResults.length / 100)} of {totalPages})
                </p>
              )}

              <button
                onClick={loadMoreResults}
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
                      (
                      {searchInfo
                        ? searchInfo.totalHits - allResults.length
                        : 0}{' '}
                      more)
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
