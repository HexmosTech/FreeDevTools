import React, { useCallback, useEffect, useState } from 'react';
// Icons are tree-shakeable, so only imported icons are bundled
import toast from '@/components/ToastProvider';
import { MEILI_SEARCH_API_KEY } from '@/config';
import { getProStatusFromCookie } from '@/lib/api';
import {
  Cross2Icon,
  DownloadIcon,
  ExclamationTriangleIcon,
  FileIcon,
  FileTextIcon,
  GearIcon,
  ImageIcon,
  MagnifyingGlassIcon,
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
    console.log('[SearchPage] updateUrlHash → setting hash to query:', JSON.stringify(searchQuery));
    window.location.hash = `search?q=${encodeURIComponent(searchQuery)}`;
  } else {
    // Never overwrite URL when it already has a query (popup mount would otherwise set #search?q=, trigger hashchange, and clear homepage/sidebar input)
    if (!window.location.hash.startsWith('#search?q=')) {
      console.log('[SearchPage] updateUrlHash(empty) → skip, hash not search');
      return;
    }
    try {
      const hashParams = new URLSearchParams(window.location.hash.substring(8));
      const currentQ = hashParams.get('q') || '';
      if (currentQ.trim()) {
        console.log('[SearchPage] updateUrlHash(empty) → skip, URL already has query:', JSON.stringify(currentQ));
        return;
      }
    } catch {
      /* ignore */
    }
    console.log('[SearchPage] updateUrlHash(empty) → setting hash to #search?q=');
    window.location.hash = 'search?q=';
  }
}

// LocalStorage utilities for search tracking
const SEARCH_COUNT_KEY = 'freedevtools-search-count';
const MAX_SEARCHES = 99;

function getSearchCount(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const count = localStorage.getItem(SEARCH_COUNT_KEY);
    return count ? parseInt(count, 10) : 0;
  } catch {
    return 0;
  }
}

function incrementSearchCount(): void {
  if (typeof window === 'undefined') return;
  try {
    const currentCount = getSearchCount();
    localStorage.setItem(SEARCH_COUNT_KEY, (currentCount + 1).toString());
  } catch {
    // Ignore localStorage errors
  }
}

function getSearchesLeft(): number {
  const count = getSearchCount();
  return Math.max(0, MAX_SEARCHES - count);
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

function getQueryFromHash(): string {
  if (typeof window === 'undefined' || !window.location.hash.startsWith('#search?q=')) {
    console.log('[SearchPage] getQueryFromHash → no hash or not search, hash:', typeof window !== 'undefined' ? window.location.hash : '(ssr)');
    return '';
  }
  try {
    const hashParams = new URLSearchParams(window.location.hash.substring(8));
    const q = hashParams.get('q') || '';
    console.log('[SearchPage] getQueryFromHash →', JSON.stringify(q));
    return q;
  } catch {
    return '';
  }
}

// Hook
function useSearchQuery() {
  const [query, setQuery] = useState(() => {
    if (typeof window === 'undefined') return '';
    const initial = getQueryFromHash();
    console.log('[SearchPage] useState initial query:', JSON.stringify(initial), 'hash:', window.location.hash);
    return initial;
  });

  useEffect(() => {
    const checkHashForSearch = () => {
      if (window.location.hash.startsWith('#search?q=')) {
        try {
          const hashParams = new URLSearchParams(
            window.location.hash.substring(8)
          );
          const searchParam = hashParams.get('q');
          console.log('[SearchPage] checkHashForSearch → setQuery + searchState.setQuery:', JSON.stringify(searchParam || ''));
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

    console.log('[SearchPage] mount: running checkHashForSearch, hash:', window.location.hash);
    checkHashForSearch();
    window.addEventListener('hashchange', checkHashForSearch);
    return () => {
      window.removeEventListener('hashchange', checkHashForSearch);
    };
  }, []);

  useEffect(() => {
    const handleSearchQueryChange = (event: CustomEvent) => {
      const newQuery = event.detail.query;
      console.log('[SearchPage] searchQueryChanged received → setQuery + updateUrlHash:', JSON.stringify(newQuery));
      setQuery(newQuery);
      updateUrlHash(newQuery);
    };

    window.addEventListener(
      'searchQueryChanged',
      handleSearchQueryChange as (event: Event) => void
    );

    if (window.searchState && window.searchState.getQuery()) {
      const initialQuery = window.searchState.getQuery();
      console.log('[SearchPage] mount: searchState had query, updateUrlHash:', JSON.stringify(initialQuery));
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
    const fromHash = getQueryFromHash();
    if (fromHash !== query && fromHash.length > 0) {
      // URL has a different non-empty query (e.g. user typed in sidebar while we had stale "a") - don't overwrite URL, sync state from URL
      setQuery(fromHash);
      return;
    }
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
  const [searchesLeft, setSearchesLeft] = useState<number>(() => getSearchesLeft());
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Track last counted search to avoid duplicate increments
  const lastCountedSearchRef = React.useRef<{
    query: string;
    categories: string[];
  } | null>(null);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const getEffectiveCategories = useCallback(() => {
    if (activeCategory === 'all') return [];
    if (activeCategory === 'multi') return selectedCategories;
    return [activeCategory];
  }, [activeCategory, selectedCategories]);

  // Check pro status on mount and initialize searches left
  useEffect(() => {
    const proStatus = getProStatusFromCookie();
    setIsPro(proStatus);
    if (!proStatus) {
      setSearchesLeft(getSearchesLeft());
    }
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      // Only update when not already in reset state to avoid effect loop (deps include activeCategory/selectedCategories)
      if (results.length > 0) setResults([]);
      if (allResults.length > 0) setAllResults([]);
      if (searchInfo !== null) setSearchInfo(null);
      if (currentPage !== 1) setCurrentPage(1);
      if (activeCategory !== 'all') setActiveCategory('all');
      if (selectedCategories.length > 0) setSelectedCategories([]);
      if (Object.keys(availableCategories).length > 0) setAvailableCategories({});
      return;
    }

    // Check if search limit is reached for non-pro users
    if (!isPro && searchesLeft <= 0) {
      toast.warning('Search Limit Reached - Upgrade to Pro for unlimited searches');
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      setCurrentPage(1);
      setAvailableCategories({});

      const effectiveCategories = getEffectiveCategories();

      // Check if this is a new search (different from last counted)
      const isNewSearch = !lastCountedSearchRef.current ||
        lastCountedSearchRef.current.query !== query.trim() ||
        JSON.stringify(lastCountedSearchRef.current.categories.sort()) !== JSON.stringify(effectiveCategories.sort());

      try {
        const searchResponse = await searchUtilities(
          query,
          effectiveCategories,
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

        // Increment search count for non-pro users only for new searches
        if (!isPro && query.trim() && isNewSearch) {
          incrementSearchCount();
          setSearchesLeft(getSearchesLeft());
          // Track this search as counted
          lastCountedSearchRef.current = {
            query: query.trim(),
            categories: effectiveCategories,
          };
        }
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
        setAllResults([]);
        setSearchInfo(null);
      } finally {
        setLoading(false);
      }
    }, 500); // Increased debounce delay to reduce rapid searches

    return () => clearTimeout(timeoutId);
  }, [query, activeCategory, selectedCategories, getEffectiveCategories, isPro, searchesLeft]);

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

    // Close search page - remove hash entirely
    // Use window.location.hash = '' to trigger hashchange event
    if (window.location.hash.startsWith('#search')) {
      window.location.hash = '';
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

  // Search bar input ref for auto-focus
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // Auto-focus search input when component mounts or query changes
  useEffect(() => {
    if (searchInputRef.current && window.location.hash.startsWith('#search')) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [query]);

  // Sync search input with global search state
  useEffect(() => {
    const handleSearchQueryChange = (event: CustomEvent) => {
      const newQuery = event.detail?.query || '';
      if (searchInputRef.current && searchInputRef.current.value !== newQuery) {
        searchInputRef.current.value = newQuery;
        setQuery(newQuery);
      }
    };

    window.addEventListener('searchQueryChanged', handleSearchQueryChange as (event: Event) => void);
    return () => {
      window.removeEventListener('searchQueryChanged', handleSearchQueryChange as (event: Event) => void);
    };
  }, [setQuery]);

  // Don't render if no query and not on search page
  // Also don't render if hash is empty (search was closed)
  const hash = window.location.hash;
  if ((!query.trim() && !hash.startsWith('#search')) || hash === '') {
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
    // Show default title when query is empty
    if (!query.trim()) {
      return 'Search engine for developer resources';
    }

    if (!searchInfo) {
      return `Search Results for "${query}"`;
    }

    if (activeCategory === 'all' || activeCategory === 'multi') {
      return `Found ${searchInfo.totalHits.toLocaleString()} results for "${query}"`;
    }

    return `Found ${searchInfo.totalHits.toLocaleString()} ${getCategoryDisplayName(activeCategory)} for "${query}"`;
  };

  const handleBackdropClick = () => {
    // Close search page by clearing the hash
    window.location.hash = '';
  };

  const closeSearchPage = () => {
    setQuery('');
    if (window.searchState) {
      window.searchState.setQuery('');
    }
    // Clear hash completely using replaceState to avoid leaving # behind
    if (window.location.hash.startsWith('#search')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-0 pb-0 md:pt-12 md:pb-12 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div
        id="search-page"
        className="bg-white dark:bg-slate-900 rounded-none md:rounded-xl shadow-2xl w-full max-w-6xl mx-0 md:mx-4 p-4 md:p-6 h-full md:h-auto"
        style={{ minHeight: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Search engine for developer resources</h2>
          <button
            onClick={closeSearchPage}
            className="flex p-1 rounded-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            aria-label="Close"
          >
            <Cross2Icon className="h-5 w-5 p-0.5 text-slate-700 dark:text-slate-300" />
          </button>
        </div>
        <div className="mt-12 mb-12 flex items-center gap-3">
          <div className="relative group flex-1">
            <input
              ref={searchInputRef}
              type="text"
              id="search-page-input"
              className="w-full bg-white dark:bg-slate-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 hover:bg-white dark:hover:bg-slate-800 rounded-lg pr-10"
              placeholder="Search icon, emoji, tool, cheatsheet or Github repository"
              aria-label="Search icon, emoji, tool, cheatsheet or Github repository"
              value={query}
              onChange={(e) => {
                const newQuery = e.target.value;
                setQuery(newQuery);
                // Update searchState first
                if (window.searchState) {
                  window.searchState.setQuery(newQuery);
                }
                // Then update hash - this ensures searchState is updated before hashchange event
                if (newQuery.trim()) {
                  window.location.hash = `search?q=${encodeURIComponent(newQuery)}`;
                } else {
                  // Close search page when query is cleared
                  closeSearchPage();
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  closeSearchPage();
                }
              }}
              style={{
                height: '3rem',
                fontSize: '1rem',
                paddingLeft: '1rem',
                borderWidth: '1px',
                borderColor: '#d4cb24',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            />
            {/* Clear button (X icon) - appears on hover */}
            {query.trim() && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const emptyQuery = '';
                  setQuery(emptyQuery);
                  // Update searchState first
                  if (window.searchState) {
                    window.searchState.setQuery(emptyQuery);
                  }
                  // Set hash to search?q= to keep search page visible
                  if (window.location.hash !== '#search?q=') {
                    window.location.hash = 'search?q=';
                  }
                  // Focus back on input after clearing
                  setTimeout(() => {
                    if (searchInputRef.current) {
                      searchInputRef.current.focus();
                    }
                  }, 0);
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer z-20 flex items-center justify-center"
                style={{ pointerEvents: 'auto' }}
              >
                <Cross2Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </button>
            )}
          </div>
          {/* Search Limit Indicator */}
          {!isPro && searchesLeft >= 0 && (
            <div className="flex-shrink-0">
              <div
                className="px-2 py-1 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer"
                style={{
                  width: '180px',
                  borderWidth: '1px',
                  borderColor: '#d4cb24'
                }}
                onClick={() => {
                  // Trigger ProBanner popup
                  window.location.hash = '#pro-banner';
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {searchesLeft === 0 ? (
                    <ExclamationTriangleIcon className="w-4 h-4 flex-shrink-0" style={{ color: '#d4cb24' }} />
                  ) : (
                    <MagnifyingGlassIcon className="w-4 h-4 flex-shrink-0" style={{ color: '#d4cb24' }} />
                  )}
                  <span className="font-semibold text-sm" style={{ color: '#d4cb24' }}>
                    {searchesLeft} searches left
                  </span>
                </div>
                <div
                  className="w-full rounded-full overflow-hidden mb-1"
                  style={{
                    height: '8px',
                    backgroundColor: '#F2F2DC'
                  }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${((MAX_SEARCHES - searchesLeft) / MAX_SEARCHES) * 100}%`,
                      backgroundColor: '#d4cb24'
                    }}
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="mb-8">

          {/* CategoryFilter - Google-style tabs */}
          <div className="flex items-center gap-2 pb-1 border-b border-gray-200 dark:border-slate-700 overflow-x-auto">
            <button
              onClick={() => handleCategoryClick('all')}
              onContextMenu={(e) => handleCategoryRightClick(e, 'all')}
              className={`flex items-center gap-1.5 px-1 py-3 whitespace-nowrap transition-colors relative ${activeCategory === 'all'
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              style={{
                fontSize: '0.875rem',
              }}
            >
              <span>All</span>
              <span style={{ minWidth: '2rem', minHeight: '1rem', display: 'inline-block', textAlign: 'left' }}>
                {activeCategory === 'all' &&
                  Object.keys(availableCategories).length > 0 && (
                    <span style={{ fontSize: '0.65rem', opacity: 0.8 }}>
                      {formatCount(getAllCount())}
                    </span>
                  )}
              </span>
              {activeCategory === 'all' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"></div>
              )}
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

                return (
                  <button
                    key={category.key}
                    onClick={() => handleCategoryClick(category.key)}
                    onContextMenu={(e) => handleCategoryRightClick(e, category.key)}
                    className={`flex items-center gap-1.5 px-1 py-3 whitespace-nowrap transition-colors relative ${isActive || selectedCategories.includes(category.key)
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    style={{
                      fontSize: '0.875rem',
                    }}
                    title={!isActive ? 'Right-click to multi-select' : undefined}
                  >
                    {/* <span className="hidden md:inline-flex flex-shrink-0">
                    {getCategoryIcon(category.key)}
                  </span> */}
                    <span>{category.label}</span>
                    <span style={{ minWidth: '1.5rem', minHeight: '1rem', display: 'inline-block', textAlign: 'left' }}>
                      {count !== undefined && (
                        <span style={{ fontSize: '0.65rem', opacity: 0.8 }}>
                          {formatCount(count)}
                        </span>
                      )}
                    </span>
                    {(isActive || selectedCategories.includes(category.key)) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"></div>
                    )}
                  </button>
                );
              })}
          </div>
        </div>

        {/* LoadingState */}
        {
          loading && (
            <div className="text-center p-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-2 text-muted-foreground">Searching...</p>
            </div>
          )
        }

        {/* EmptyState */}
        {
          !loading && results.length === 0 && query.trim() && (
            <div className="text-center p-8">
              <p className="text-muted-foreground">
                No results found for &quot;{query}&quot;
              </p>
            </div>
          )
        }

        {
          !loading && results.length > 0 && filteredResults.length === 0 && (
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
          )
        }

        {/* ResultsGrid */}
        {
          !loading && filteredResults.length > 0 && (
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
          )
        }
      </div>
    </div>
  );
};

export default SearchPage;
