import { checkBookmark, toggleBookmark } from '@/lib/api';
import React, { useEffect, useState } from 'react';

const BookmarkIcon: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    // Wait for page to fully load
    const checkPageLoaded = () => {
      if (document.readyState === 'complete') {
        initializeComponent();
      } else {
        window.addEventListener('load', initializeComponent, { once: true });
      }
    };

    const initializeComponent = async () => {
      // Check if component is in sidebar
      const sidebarContainer = document.getElementById('sidebar-bookmark-container');
      const isInSidebar = sidebarContainer?.closest('#sidebar') !== null;
      setIsSidebar(isInSidebar);

      // Make API call to check bookmark status
      try {
        const result = await checkBookmark(window.location.href);
        setIsBookmarked(result.bookmarked);
      } catch (error) {
        console.error('[BookmarkIcon] Error checking bookmark status:', error);
        setIsBookmarked(false);
      } finally {
        setIsReady(true);
      }
    };

    checkPageLoaded();
  }, []);

  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLoading) return;

    try {
      setIsLoading(true);
      const result = await toggleBookmark(window.location.href);

      if (result.requiresPro && result.redirect) {
        sessionStorage.setItem('bookmark_source_url', window.location.href);
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

  // Don't render anything until page is loaded and API call completes
  if (!isReady) {
    return null;
  }

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
    return (
      <>
        {bookmarkStyles}
        <button
          onClick={handleToggle}
          disabled={isLoading}
          type="button"
          className="w-full flex items-center justify-start gap-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bookmark-button text-base lg:text-sm nav-link-text text-slate-700 dark:text-slate-300"
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
          <span className="font-medium text-base lg:text-sm">
            {isBookmarked ? 'Remove Bookmark' : 'Bookmark this page'}
          </span>
        </button>
      </>
    );
  }

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

