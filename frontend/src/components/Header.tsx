import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import ThemeSwitcher from "./theme/ThemeSwitcher";

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchTimeoutRef = useRef<number | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Check if we're on the search page
  const isSearchPage =
    typeof window !== "undefined" &&
    window.location.pathname.includes("/freedevtools/search");

  // Don't show search bar on search page
  if (isSearchPage) {
    return null;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchValue(query);

    // Clear any existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set a new timeout to navigate after typing stops
    if (query.trim()) {
      searchTimeoutRef.current = window.setTimeout(() => {
        window.location.href = `/freedevtools/search?q=${encodeURIComponent(query)}`;
      }, 500); // Wait for 500ms after typing stops
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
      // Clear the timeout to prevent duplicate navigation
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
        searchTimeoutRef.current = null;
      }
      window.location.href = `/freedevtools/search?q=${encodeURIComponent(
        searchValue
      )}`;
    }
  };

  return (
    <div className="relative flex-1 max-w-xs mx-4">
      <div
        className={`relative w-full flex items-center justify-start text-sm text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 transition-colors ${
          isFocused
            ? "border-neon dark:border-neon-light"
            : "hover:bg-white/70 dark:hover:bg-gray-800/70"
        }`}
      >
        <Search className="mr-2 h-4 w-4" />
        <input
          ref={searchInputRef}
          type="text"
          className="w-full bg-transparent border-none outline-none focus:ring-0 focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
          placeholder="Search Dev Resources..."
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          onKeyDown={handleKeyDown}
        />
        <kbd className="pointer-events-none absolute right-1.5 top-1.6 hidden h-5 select-none items-center gap-1 rounded border bg-gray-100 dark:bg-gray-700 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  // Listen for cmd+k
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        window.location.href = "/freedevtools/search/";
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div id="common-header" className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-2 md:px-6 pt-6">
        <header className="bg-neon/1 shadow-sm backdrop-blur-lg rounded-b-lg">
          <div className="py-3 px-4 flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="/freedevtools"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
            >
              <img
                src="/freedevtools/t/freedevtool-logo_32.webp"
                alt="Free DevTools Logo"
                className="w-8 h-8 flex-shrink-0"
              />
              <div className="flex flex-col">
                <p className="text-lg text-neon dark:text-neon-light leading-tight font-semibold">
                  Free DevTools
                </p>
                <p className="text-xs md:text-sm text-slate-800 dark:text-slate-400 leading-tight">
                  50,000+ Free Dev Resources - No Login Required
                </p>
              </div>
            </a>

            {/* Search Bar */}
            <SearchBar />

            {/* Theme Switcher */}
            <div className="flex-shrink-0">
              <ThemeSwitcher />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
