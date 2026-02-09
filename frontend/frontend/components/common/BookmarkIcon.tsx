import { checkBookmark, toggleBookmark } from '@/lib/api';
import React, { useEffect, useState } from 'react';

const BookmarkIcon: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  // Track dark mode
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

  // Check if component is in sidebar
  useEffect(() => {
    const checkLocation = () => {
      const sidebarContainer = document.getElementById('sidebar-bookmark-container');
      if (sidebarContainer) {
        setIsSidebar(sidebarContainer.closest('#sidebar') !== null);
      }
    };

    checkLocation();
    // Recheck after a short delay to ensure DOM is ready
    const timeout = setTimeout(checkLocation, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Defer API call until component is actually visible or user interacts
  useEffect(() => {
    // Use IntersectionObserver to check when component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasChecked) {
            // Component is visible, now check bookmark status
            const currentURL = window.location.href;
            checkBookmarkStatus(currentURL);
            setHasChecked(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const container = document.getElementById('header-bookmark-container') || document.getElementById('sidebar-bookmark-container');
    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasChecked]);

  const checkBookmarkStatus = async (currentURL: string) => {
    try {
      setIsLoading(true);
      const result = await checkBookmark(currentURL);
      setIsBookmarked(result.bookmarked);
    } catch (error) {
      console.error('[BookmarkIcon] Error checking bookmark status:', error);
      setIsBookmarked(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const currentURL = window.location.href;

    try {
      setIsLoading(true);
      const result = await toggleBookmark(currentURL);

      // Check if redirect is needed (non-pro user or not signed in)
      if (result.requiresPro && result.redirect) {
        // Store source URL in sessionStorage before redirecting (cleaner than URL params)
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('bookmark_source_url', currentURL);
        }
        window.location.href = result.redirect;
        return;
      }

      if (result.success) {
        setIsBookmarked(result.bookmarked);
      }
    } catch (error) {
      console.error('[BookmarkIcon] Error toggling bookmark:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Bookmark icon SVG - filled when bookmarked, uses sidebar colors
  const BookmarkSVG = ({ filled }: { filled: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 bookmark-icon"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
  );

  // Shared styles for bookmark icon - matches sidebar nav link colors
  const bookmarkStyles = (
    <style>{`
      .bookmark-icon-wrapper {
        color: inherit;
        transition: color 0.2s;
      }
      .bookmark-button:hover .bookmark-icon-wrapper .bookmark-icon {
        color: #b6b000;
      }
      .dark .bookmark-button:hover .bookmark-icon-wrapper .bookmark-icon {
        color: #d4cb24;
      }
      .bookmark-icon-wrapper.bookmarked .bookmark-icon {
        color: #b6b000;
      }
      .dark .bookmark-icon-wrapper.bookmarked .bookmark-icon {
        color: #d4cb24;
      }
    `}</style>
  );

  if (isSidebar) {
    // Render full-width clickable row for sidebar
    return (
      <>
        {bookmarkStyles}
        <button
          onClick={handleToggle}
          disabled={isLoading}
          type="button"
          className="w-full flex items-center justify-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bookmark-button"
          style={{
            cursor: isLoading ? 'not-allowed' : 'pointer',
            pointerEvents: isLoading ? 'none' : 'auto'
          }}
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <div
            className={`w-5 h-5 flex items-center justify-center flex-shrink-0 bookmark-icon-wrapper ${isBookmarked ? 'bookmarked' : ''}`}
            style={{
              pointerEvents: 'none',
              color: 'inherit'
            }}
          >
            <BookmarkSVG filled={isBookmarked} />
          </div>
          <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
            {isBookmarked ? 'Remove Bookmark' : 'Bookmark this page'}
          </span>
        </button>
      </>
    );
  }

  // Render icon-only button for header
  return (
    <>
      {bookmarkStyles}
      <div className="flex-shrink-0 mobile-search-hide" style={{ position: 'relative', zIndex: 100 }}>
        <button
          onClick={handleToggle}
          disabled={isLoading}
          type="button"
          className="flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 cursor-pointer transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed w-9 h-9 p-0 bookmark-button"
          style={{
            position: 'relative',
            zIndex: 100,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            pointerEvents: isLoading ? 'none' : 'auto'
          }}
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <div
            className={`w-5 h-5 flex items-center justify-center bookmark-icon-wrapper ${isBookmarked ? 'bookmarked' : ''}`}
            style={{
              pointerEvents: 'none',
              color: 'inherit'
            }}
          >
            <BookmarkSVG filled={isBookmarked} />
          </div>
        </button>
      </div>
    </>
  );
};

export default BookmarkIcon;

