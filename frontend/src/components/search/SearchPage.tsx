import React, { useCallback, useEffect, useState } from 'react';
import { searchUtilities } from './api';
import CategoryFilter from './CategoryFilter';
import EmptyState from './EmptyState';
import LoadingState from './LoadingState';
import LoadMoreSection from './LoadMoreSection';
import ResultsGrid from './ResultsGrid';
import SearchInfoHeader from './SearchInfoHeader';
import type { SearchInfo, SearchResult } from './types';
import { useSearchQuery } from './useSearchQuery';

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

  // Get effective filter categories
  const getEffectiveCategories = useCallback(() => {
    if (activeCategory === 'all') return [];
    if (activeCategory === 'multi') return selectedCategories;
    return [activeCategory];
  }, [activeCategory, selectedCategories]);

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

  // Results are already filtered by backend, no need for frontend filtering
  const filteredResults = allResults;

  // Load more functionality
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
  const clearResults = useCallback(() => {
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
  }, [setQuery]);

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
  }, [query, clearResults]);

  // If no search query, don't show the search UI
  if (!query.trim()) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-6 py-8">
      {/* Category filter */}
      <div className="mb-8">
        <SearchInfoHeader
          query={query}
          searchInfo={searchInfo}
          activeCategory={activeCategory}
          onClear={clearResults}
        />
        <CategoryFilter
          activeCategory={activeCategory}
          selectedCategories={selectedCategories}
          availableCategories={availableCategories}
          onCategoryClick={handleCategoryClick}
          onCategoryRightClick={handleCategoryRightClick}
        />
      </div>

      {loading && <LoadingState />}

      {!loading && results.length === 0 && (
        <EmptyState query={query} activeCategory={activeCategory} hasResults={false} />
      )}

      {!loading && results.length > 0 && filteredResults.length === 0 && (
        <EmptyState
          query={query}
          activeCategory={activeCategory}
          hasResults={true}
          onViewAll={() => setActiveCategory('all')}
        />
      )}

      {!loading && filteredResults.length > 0 && (
        <>
          <ResultsGrid results={filteredResults} />
          <LoadMoreSection
            searchInfo={searchInfo}
            currentPage={currentPage}
            totalPages={totalPages}
            allResultsCount={allResults.length}
            activeCategory={activeCategory}
            onLoadMore={loadMoreResults}
            loadingMore={loadingMore}
          />
        </>
      )}
    </div>
  );
};

export default SearchPage;
