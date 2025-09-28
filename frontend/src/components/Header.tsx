import React, { useEffect } from "react";
import ThemeSwitcher from "./theme/ThemeSwitcher";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  // Listen for cmd+k
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // Focus on the search input instead of changing pages
        const searchInputs = document.querySelectorAll<HTMLInputElement>('input[type="text"]');
        searchInputs.forEach((input) => {
          if (input.placeholder === "Search Dev Resources...") {
            input.focus();
          }
        });
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
