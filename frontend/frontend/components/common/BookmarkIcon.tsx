import React, { useEffect, useState } from 'react';
import { checkBookmark, toggleBookmark } from '@/lib/api';

const BookmarkIcon: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean>(false);

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

    const container = document.getElementById('header-bookmark-container');
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

  // Bookmark icon SVG - filled when bookmarked, outline when not
  const BookmarkSVG = ({ filled }: { filled: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
  );

  return (
    <div className="flex-shrink-0 mobile-search-hide" style={{ position: 'relative', zIndex: 100 }}>
      <button
        onClick={handleToggle}
        disabled={isLoading}
        type="button"
        className="flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 cursor-pointer transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed w-9 h-9 p-0"
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
          className={`w-5 h-5 flex items-center justify-center ${isBookmarked ? 'text-yellow-500 dark:text-yellow-400' : 'text-gray-600 dark:text-gray-400'}`}
          style={{ pointerEvents: 'none' }}
        >
          <BookmarkSVG filled={isBookmarked} />
        </div>
      </button>
    </div>
  );
};

export default BookmarkIcon;

