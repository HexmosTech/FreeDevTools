import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
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
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Load initial search value from global state if it exists
  useEffect(() => {
    // Check for hash on initial load
    if (window.location.hash.startsWith("#search?q=")) {
      try {
        const hashParams = new URLSearchParams(
          window.location.hash.substring(8)
        );
        const searchParam = hashParams.get("q");
        if (searchParam) {
          setSearchValue(searchParam);
          if (window.searchState) {
            window.searchState.setQuery(searchParam);
          }
          // Expand search on mobile if there's a query
          setIsSearchExpanded(true);
        }
      } catch (e) {
        console.error("Error parsing hash params:", e);
      }
    }
    // Otherwise use the global state
    else if (window.searchState && window.searchState.getQuery()) {
      setSearchValue(window.searchState.getQuery());
      // Expand search on mobile if there's a query
      if (window.searchState.getQuery()) {
        setIsSearchExpanded(true);
      }
    }
  }, []);

  // Add event listener to update search value when global state changes
  useEffect(() => {
    const handleSearchQueryChange = (event: Event) => {
      const customEvent = event as SearchQueryChangedEvent;
      setSearchValue(customEvent.detail.query);
    };

    window.addEventListener("searchQueryChanged", handleSearchQueryChange);

    return () => {
      window.removeEventListener("searchQueryChanged", handleSearchQueryChange);
    };
  }, []);

  // Handle clicks outside to collapse mobile search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSearchExpanded &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        window.innerWidth < 768 // Only on mobile
      ) {
        setIsSearchExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchExpanded]);

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
      if (window.location.hash.startsWith("#search")) {
        history.pushState(
          "",
          document.title,
          window.location.pathname + window.location.search
        );
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
    } else if (e.key === "Escape" && window.innerWidth < 768) {
      setIsSearchExpanded(false);
    }
  };

  const toggleMobileSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    // Focus input when expanding
    if (!isSearchExpanded && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  const clearSearch = () => {
    setSearchValue("");
    if (window.searchState) {
      window.searchState.setQuery("");
    }
    if (window.location.hash.startsWith("#search")) {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
    searchInputRef.current?.focus();
  };

  return (
    <>
      {/* Mobile search icon (visible only on mobile) */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileSearch}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>

      {/* Search container - hidden on mobile unless expanded */}
      <div
        ref={searchContainerRef}
        className={cn(
          "relative md:flex-1 md:max-w-sm md:mx-4",
          "transition-all duration-200 ease-in-out",
          isSearchExpanded
            ? "fixed inset-x-0 top-16 z-50 px-4 pb-4 md:static md:p-0 md:z-auto bg-white dark:bg-gray-900 shadow-md md:shadow-none"
            : "hidden md:block"
        )}
      >
        <div className="relative">
          <Input
            ref={searchInputRef}
            type="text"
            className={cn(
              "w-full  pr-10 h-9 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm placeholder:text-gray-500 dark:placeholder:text-gray-400",
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

          {/* Clear button (only shown when there's text) */}
          {searchValue && (
            <button
              className="md:hidden absolute inset-y-0 right-9 flex items-center pr-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {/* Keyboard shortcut hint (hidden on mobile) */}
          <kbd className="pointer-events-none absolute right-2 border-none top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-gray-100 dark:bg-gray-700 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs mt-0.5">⌘ K</span>
          </kbd>
        </div>
      </div>
    </>
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
