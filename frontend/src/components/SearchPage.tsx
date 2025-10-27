import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  BookOpen,
  FileText,
  Image,
  PenLine,
  Settings,
  Smile,
  Wrench,
  X,
} from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

// Add TypeScript declaration for our global window properties
declare global {
  interface Window {
    searchState?: {
      query: string;
      setQuery: (query: string) => void;
      getQuery: () => string;
    };
  }
}

interface SearchResult {
  id?: string;
  title?: string;
  name?: string;
  description?: string;
  category?: string;
  url?: string;
  path?: string;
  slug?: string;
  code?: string; // For emojis
  image?: string; // For SVG icons
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

// Search function for Meilisearch
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
      facets: ['category'], // Always include facets for category filtering
      attributesToRetrieve: [
        'id',
        'name',
        'title',
        'description',
        'category',
        'path',
        'image',
        'code',
      ], // Only retrieve essential fields for better performance
    };

    // Add category filter if specified
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
          Authorization:
            'Bearer 509923210c1fbc863d8cd8d01ffc062bac61aa503944c5d65b155e6cafdaddb5',
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

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchInfo, setSearchInfo] = useState<{
    totalHits: number;
    processingTime: number;
    facetTotal?: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allResults, setAllResults] = useState<SearchResult[]>([]);
  const [availableCategories, setAvailableCategories] = useState<{
    [key: string]: number;
  }>({});

  // Get effective filter categories
  const getEffectiveCategories = useCallback(() => {
    if (activeCategory === 'all') return [];
    if (activeCategory === 'multi') return selectedCategories;
    return [activeCategory];
  }, [activeCategory, selectedCategories]);

  // Add this function to update the URL hash
  const updateUrlHash = (searchQuery: string) => {
    if (searchQuery.trim()) {
      // Set hash with search query
      window.location.hash = `search?q=${encodeURIComponent(searchQuery)}`;
    } else {
      // Clear hash if search is empty
      if (window.location.hash.startsWith('#search')) {
        history.pushState(
          '',
          document.title,
          window.location.pathname + window.location.search
        );
      }
    }
  };

  // Check for search terms in hash on initial load
  useEffect(() => {
    // Parse hash fragment on initial load
    const checkHashForSearch = () => {
      if (window.location.hash.startsWith('#search?q=')) {
        try {
          const hashParams = new URLSearchParams(
            window.location.hash.substring(8)
          ); // Remove '#search?'
          const searchParam = hashParams.get('q');
          if (searchParam) {
            // Update both local state and global search state
            setQuery(searchParam);
            if (window.searchState) {
              window.searchState.setQuery(searchParam);
            }
          }
        } catch (e) {
          console.error('Error parsing hash params:', e);
        }
      }
    };

    checkHashForSearch();

    // Also listen for hash changes
    window.addEventListener('hashchange', checkHashForSearch);
    return () => {
      window.removeEventListener('hashchange', checkHashForSearch);
    };
  }, []);

  // Listen for changes to the global search state
  useEffect(() => {
    const handleSearchQueryChange = (event: CustomEvent) => {
      const newQuery = event.detail.query;
      setQuery(newQuery);

      // Update URL hash when query changes
      updateUrlHash(newQuery);
    };

    // Add event listener
    window.addEventListener(
      'searchQueryChanged',
      handleSearchQueryChange as (event: Event) => void
    );

    // Initial load from global state if it exists
    if (window.searchState && window.searchState.getQuery()) {
      const initialQuery = window.searchState.getQuery();
      setQuery(initialQuery);
      updateUrlHash(initialQuery);
    }

    return () => {
      window.removeEventListener(
        'searchQueryChanged',
        handleSearchQueryChange as (event: Event) => void
      );
    };
  }, []);

  // Search with debounce
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSearchInfo(null);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      setCurrentPage(1); // Reset to first page for new search
      setAvailableCategories({}); // Clear counts while loading
      try {
        const searchResponse = await searchUtilities(
          query,
          getEffectiveCategories(),
          1
        );
        console.log('Search results:', searchResponse);
        setResults(searchResponse.hits || []);
        setAllResults(searchResponse.hits || []); // Store all accumulated results

        // Calculate real total from facet distribution
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

  // Reset page and clear results when category changes
  useEffect(() => {
    setCurrentPage(1);
    setResults([]);
    setAllResults([]);
    setSearchInfo(null);
  }, [activeCategory, selectedCategories]);

  // Update URL when query changes manually
  useEffect(() => {
    updateUrlHash(query);
  }, [query]);

  // Handle ESC key to clear results
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
  }, [query]);

  // Results are already filtered by backend, no need for frontend filtering
  const filteredResults = allResults;

  // Load more functionality
  const totalPages = searchInfo ? Math.ceil(searchInfo.totalHits / 100) : 1;
  const hasMoreResults = currentPage < totalPages;
  const currentPageNumber = Math.ceil(allResults.length / 100);

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

      // Append new results to existing ones
      setAllResults((prev) => [...prev, ...newResults]);
      setResults((prev) => [...prev, ...newResults]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Load more error:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
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
      default:
        return 'items';
    }
  };

  // Handle category selection (left click - single select)
  const handleCategoryClick = (category: string) => {
    if (category === 'all') {
      setActiveCategory('all');
      setSelectedCategories([]);
    } else {
      setActiveCategory(category);
      setSelectedCategories([category]);
    }
  };

  // Handle category right-click (multi-select)
  const handleCategoryRightClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();

    if (category === 'all') {
      setActiveCategory('all');
      setSelectedCategories([]);
      return;
    }

    const isSelected = selectedCategories.includes(category);

    if (isSelected) {
      // Remove from selection
      const newSelection = selectedCategories.filter((cat) => cat !== category);
      setSelectedCategories(newSelection);

      // If no categories selected, go back to "all"
      if (newSelection.length === 0) {
        setActiveCategory('all');
      } else {
        setActiveCategory('multi');
      }
    } else {
      // Add to selection
      const newSelection = [...selectedCategories, category];
      setSelectedCategories(newSelection);
      setActiveCategory('multi');
    }
  };

  // When clearing results, ensure we properly update the global search state
  const clearResults = () => {
    // Clear the query in this component
    setQuery('');
    setResults([]);
    setAllResults([]);
    setCurrentPage(1);
    setActiveCategory('all');
    setSelectedCategories([]);

    // Update the global search state to empty string
    if (window.searchState) {
      window.searchState.setQuery('');
    }

    // Clear URL hash
    if (window.location.hash.startsWith('#search')) {
      history.pushState(
        '',
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  // If no search query, don't show the search UI
  if (!query.trim()) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-6 py-8">
      {/* Category filter */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 mt-8 md:mt-0">
          <h2 className="text-xl font-medium">
            {searchInfo
              ? activeCategory === 'all'
                ? `Found ${searchInfo.totalHits.toLocaleString()} results for "${query}"`
                : activeCategory === 'multi'
                  ? `Found ${searchInfo.totalHits.toLocaleString()} results for "${query}"`
                  : `Found ${searchInfo.totalHits.toLocaleString()} ${getCategoryDisplayName(activeCategory)} for "${query}"`
              : `Search Results for "${query}"`}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearResults}
            className="flex items-center gap-2"
          >
            <kbd className="px-1.5 py-0.5 text-xs text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500">
              Esc
            </kbd>
            <span className="text-sm">Clear results</span>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <TooltipProvider>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:flex lg:space-x-2 gap-2 lg:gap-0 pb-2">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryClick('all')}
              onContextMenu={(e) => handleCategoryRightClick(e, 'all')}
              className="whitespace-nowrap text-xs lg:text-sm"
            >
              All{' '}
              {activeCategory === 'all' &&
                Object.keys(availableCategories).length > 0 &&
                `(${Object.values(availableCategories).reduce((sum, count) => sum + count, 0)})`}
            </Button>
            {!(
              activeCategory === 'tools' || selectedCategories.includes('tools')
            ) ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCategoryClick('tools')}
                    onContextMenu={(e) => handleCategoryRightClick(e, 'tools')}
                    className="whitespace-nowrap text-xs lg:text-sm hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50"
                  >
                    <Wrench className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                    Tools{' '}
                    {(activeCategory === 'tools' ||
                      selectedCategories.includes('tools') ||
                      activeCategory === 'all') &&
                      availableCategories.tools &&
                      `(${availableCategories.tools})`}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <span className="text-xs">Right-click to multi-select</span>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => handleCategoryClick('tools')}
                onContextMenu={(e) => handleCategoryRightClick(e, 'tools')}
                className="whitespace-nowrap text-xs lg:text-sm shadow-md shadow-blue-500/50"
              >
                <Wrench className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                Tools{' '}
                {availableCategories.tools && `(${availableCategories.tools})`}
              </Button>
            )}
            {!(
              activeCategory === 'tldr' || selectedCategories.includes('tldr')
            ) ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCategoryClick('tldr')}
                    onContextMenu={(e) => handleCategoryRightClick(e, 'tldr')}
                    className="whitespace-nowrap text-xs lg:text-sm hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50"
                  >
                    <BookOpen className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                    TLDR{' '}
                    {(activeCategory === 'tldr' ||
                      selectedCategories.includes('tldr') ||
                      activeCategory === 'all') &&
                      availableCategories.tldr &&
                      `(${availableCategories.tldr})`}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Right-click to multi-select</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => handleCategoryClick('tldr')}
                onContextMenu={(e) => handleCategoryRightClick(e, 'tldr')}
                className="whitespace-nowrap text-xs lg:text-sm shadow-md shadow-blue-500/50"
              >
                <BookOpen className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                TLDR{' '}
                {availableCategories.tldr && `(${availableCategories.tldr})`}
              </Button>
            )}
            {!(
              activeCategory === 'cheatsheets' ||
              selectedCategories.includes('cheatsheets')
            ) ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCategoryClick('cheatsheets')}
                    onContextMenu={(e) =>
                      handleCategoryRightClick(e, 'cheatsheets')
                    }
                    className="whitespace-nowrap text-xs lg:text-sm hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50"
                  >
                    <FileText className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                    Cheatsheets{' '}
                    {(activeCategory === 'cheatsheets' ||
                      selectedCategories.includes('cheatsheets') ||
                      activeCategory === 'all') &&
                      availableCategories.cheatsheets &&
                      `(${availableCategories.cheatsheets})`}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Right-click to multi-select</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => handleCategoryClick('cheatsheets')}
                onContextMenu={(e) =>
                  handleCategoryRightClick(e, 'cheatsheets')
                }
                className="whitespace-nowrap text-xs lg:text-sm shadow-md shadow-blue-500/50"
              >
                <FileText className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                Cheatsheets{' '}
                {availableCategories.cheatsheets &&
                  `(${availableCategories.cheatsheets})`}
              </Button>
            )}
            {!(
              activeCategory === 'png_icons' ||
              selectedCategories.includes('png_icons')
            ) ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCategoryClick('png_icons')}
                    onContextMenu={(e) =>
                      handleCategoryRightClick(e, 'png_icons')
                    }
                    className="whitespace-nowrap text-xs lg:text-sm hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50"
                  >
                    <Image className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                    PNG Icons{' '}
                    {(activeCategory === 'png_icons' ||
                      selectedCategories.includes('png_icons') ||
                      activeCategory === 'all') &&
                      availableCategories.png_icons &&
                      `(${availableCategories.png_icons})`}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Right-click to multi-select</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => handleCategoryClick('png_icons')}
                onContextMenu={(e) => handleCategoryRightClick(e, 'png_icons')}
                className="whitespace-nowrap text-xs lg:text-sm shadow-md shadow-blue-500/50"
              >
                <Image className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                PNG Icons{' '}
                {availableCategories.png_icons &&
                  `(${availableCategories.png_icons})`}
              </Button>
            )}
            {!(
              activeCategory === 'svg_icons' ||
              selectedCategories.includes('svg_icons')
            ) ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCategoryClick('svg_icons')}
                    onContextMenu={(e) =>
                      handleCategoryRightClick(e, 'svg_icons')
                    }
                    className="whitespace-nowrap text-xs lg:text-sm hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50"
                  >
                    <PenLine className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                    SVG Icons{' '}
                    {(activeCategory === 'svg_icons' ||
                      selectedCategories.includes('svg_icons') ||
                      activeCategory === 'all') &&
                      availableCategories.svg_icons &&
                      `(${availableCategories.svg_icons})`}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Right-click to multi-select</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => handleCategoryClick('svg_icons')}
                onContextMenu={(e) => handleCategoryRightClick(e, 'svg_icons')}
                className="whitespace-nowrap text-xs lg:text-sm shadow-md shadow-blue-500/50"
              >
                <PenLine className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                SVG Icons{' '}
                {availableCategories.svg_icons &&
                  `(${availableCategories.svg_icons})`}
              </Button>
            )}
            {!(
              activeCategory === 'emoji' || selectedCategories.includes('emoji')
            ) ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCategoryClick('emoji')}
                    onContextMenu={(e) => handleCategoryRightClick(e, 'emoji')}
                    className="whitespace-nowrap text-xs lg:text-sm hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50"
                  >
                    <Smile className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                    Emojis{' '}
                    {(activeCategory === 'emoji' ||
                      selectedCategories.includes('emoji') ||
                      activeCategory === 'all') &&
                      availableCategories.emojis &&
                      `(${availableCategories.emojis})`}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Right-click to multi-select</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => handleCategoryClick('emoji')}
                onContextMenu={(e) => handleCategoryRightClick(e, 'emoji')}
                className="whitespace-nowrap text-xs lg:text-sm shadow-md shadow-blue-500/50"
              >
                <Smile className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                Emojis{' '}
                {availableCategories.emojis &&
                  `(${availableCategories.emojis})`}
              </Button>
            )}
            {!(
              activeCategory === 'mcp' || selectedCategories.includes('mcp')
            ) ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCategoryClick('mcp')}
                    onContextMenu={(e) => handleCategoryRightClick(e, 'mcp')}
                    className="whitespace-nowrap text-xs lg:text-sm hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50"
                  >
                    <Settings className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                    MCP{' '}
                    {(activeCategory === 'mcp' ||
                      selectedCategories.includes('mcp') ||
                      activeCategory === 'all') &&
                      availableCategories.mcp &&
                      `(${availableCategories.mcp})`}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Right-click to multi-select</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={() => handleCategoryClick('mcp')}
                onContextMenu={(e) => handleCategoryRightClick(e, 'mcp')}
                className="whitespace-nowrap text-xs lg:text-sm shadow-md shadow-blue-500/50"
              >
                <Settings className="mr-1 h-3 w-3 lg:h-4 lg:w-4" />
                MCP {availableCategories.mcp && `(${availableCategories.mcp})`}
              </Button>
            )}
          </div>
        </TooltipProvider>
      </div>

      {loading && (
        <div className="text-center p-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-2 text-muted-foreground">Searching...</p>
        </div>
      )}

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
          <Button
            variant="link"
            onClick={() => setActiveCategory('all')}
            className="mt-2"
          >
            View all results
          </Button>
        </div>
      )}

      {!loading && filteredResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResults.map((result, index) => {
            // Function to get badge color based on category
            const getBadgeVariant = (category: string) => {
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
                default:
                  return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
              }
            };

            return (
              <a
                key={result.id || index}
                href={result.path ? `https://hexmos.com${result.path}` : '#'}
                className="block no-underline"
              >
                {result.category?.toLowerCase() === 'emojis' ? (
                  <Card className="cursor-pointer hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all overflow-hidden h-full flex flex-col">
                    <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                      {result.category && (
                        <div
                          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
                        >
                          {result.category}
                        </div>
                      )}
                      <div className="emoji-preview text-6xl mb-4">
                        {result.code}
                      </div>
                      <span className="font-medium text-center text-xs">
                        {result.name || result.title || 'Untitled'}
                      </span>
                    </div>
                  </Card>
                ) : result.category?.toLowerCase() === 'svg_icons' ||
                  result.category?.toLowerCase() === 'png_icons' ? (
                  <Card className="cursor-pointer hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all h-full flex flex-col">
                    <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
                      {result.category && (
                        <div
                          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
                        >
                          {result.category === 'svg_icons'
                            ? 'SVG Icons'
                            : 'PNG Icons'}
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
                  </Card>
                ) : (
                  <Card className="cursor-pointer hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all h-full flex flex-col">
                    <div className="p-4 flex flex-col h-full relative">
                      {result.category && (
                        <div
                          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
                        >
                          {result.category}
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
                  </Card>
                )}
              </a>
            );
          })}
        </div>
      )}

      {/* Load More Section */}
      {!loading && filteredResults.length > 0 && (
        <div className="flex flex-col items-center space-y-4 mt-8">
          {searchInfo && (
            <p className="text-sm text-muted-foreground">
              Showing {allResults.length} of{' '}
              {searchInfo.totalHits.toLocaleString()}{' '}
              {activeCategory === 'all'
                ? 'items'
                : getCategoryDisplayName(activeCategory)}{' '}
              (Page {currentPageNumber} of {totalPages})
            </p>
          )}

          {hasMoreResults && (
            <Button
              variant="default"
              onClick={loadMoreResults}
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
                    ({searchInfo ? searchInfo.totalHits - allResults.length : 0}{' '}
                    more)
                  </span>
                </>
              )}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
