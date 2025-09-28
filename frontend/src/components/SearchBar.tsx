import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Add this type definition for the custom event
interface SearchQueryChangedEvent extends CustomEvent {
  detail: {
    query: string;
  };
}

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load initial search value from global state if it exists
  useEffect(() => {
    // Check for hash on initial load
    if (window.location.hash.startsWith('#search?q=')) {
      try {
        const hashParams = new URLSearchParams(window.location.hash.substring(8));
        const searchParam = hashParams.get('q');
        if (searchParam) {
          setSearchValue(searchParam);
          if (window.searchState) {
            window.searchState.setQuery(searchParam);
          }
        }
      } catch (e) {
        console.error('Error parsing hash params:', e);
      }
    }
    // Otherwise use the global state
    else if (window.searchState && window.searchState.getQuery()) {
      setSearchValue(window.searchState.getQuery());
    }
  }, []);

  // Add event listener to update search value when global state changes
  useEffect(() => {
    const handleSearchQueryChange = (event: Event) => {
      const customEvent = event as SearchQueryChangedEvent;
      setSearchValue(customEvent.detail.query);
    };

    window.addEventListener('searchQueryChanged', handleSearchQueryChange);
    
    return () => {
      window.removeEventListener('searchQueryChanged', handleSearchQueryChange);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchValue(query);

    // Update the global search state
    if (window.searchState) {
      window.searchState.setQuery(query);
    }

    // Update URL hash
    if (query.trim()) {
      window.location.hash = `search?q=${encodeURIComponent(query)}`;
    } else {
      if (window.location.hash.startsWith('#search')) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    }
  };

  const handleSearchFocus = () => {
    setIsFocused(true);
  };

  const handleSearchBlur = () => {
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchValue.trim()) {
      // Ensure the global state is updated
      if (window.searchState) {
        window.searchState.setQuery(searchValue);
      }
      // Update URL hash on Enter key
      window.location.hash = `search?q=${encodeURIComponent(searchValue)}`;
    }
  };

  return (
    <div className="relative flex-1 max-w-sm mx-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>
        <Input
          ref={searchInputRef}
          type="text"
          className={cn(
            "pl-9 pr-10 h-9 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm placeholder:text-gray-500 dark:placeholder:text-gray-400",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
            isFocused
              ? "border-blue-500 dark:border-blue-500 bg-background/50 backdrop-blur-sm"
              : "border-gray-300 dark:border-gray-600 hover:bg-white/70 dark:hover:bg-gray-800/70"
          )}
          placeholder="Search Dev Resources..."
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          onKeyDown={handleKeyDown}
        />
        <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-gray-100 dark:bg-gray-700 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
    </div>
  );
};

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

export default SearchBar;