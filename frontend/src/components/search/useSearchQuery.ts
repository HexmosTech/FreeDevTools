import { useEffect, useState } from 'react';
import { updateUrlHash } from './utils';

export function useSearchQuery() {
  const [query, setQuery] = useState('');

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

  // Update URL when query changes manually
  useEffect(() => {
    updateUrlHash(query);
  }, [query]);

  return { query, setQuery };
}

