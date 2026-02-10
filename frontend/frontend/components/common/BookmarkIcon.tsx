import { checkBookmark, toggleBookmark } from '@/lib/api';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const BookmarkIcon: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean>(false);
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);

  // Memoize current URL to avoid repeated calls
  const currentURL = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return window.location.href;
  }, []);

  // Memoized check bookmark status function
  const checkBookmarkStatus = useCallback(async (url: string) => {
    if (hasChecked) return; // Prevent duplicate calls
    
    try {
      setIsLoading(true);
      const result = await checkBookmark(url);
      setIsBookmarked(result.bookmarked);
      setHasChecked(true);
    } catch (error) {
      console.error('[BookmarkIcon] Error checking bookmark status:', error);
      setIsBookmarked(false);
      setHasChecked(true); // Set to true even on error to prevent retries
    } finally {
      setIsLoading(false);
    }
  }, [hasChecked]);

  // Memoized toggle handler
  const handleToggle = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLoading) return; // Prevent multiple simultaneous requests

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
  }, [currentURL, isLoading]);

  // Track dark mode and check sidebar location in a single effect
  useEffect(() => {
    // Check sidebar location once
    const checkLocation = () => {
      const sidebarContainer = document.getElementById('sidebar-bookmark-container');
      if (sidebarContainer) {
        setIsSidebar(sidebarContainer.closest('#sidebar') !== null);
        containerRef.current = sidebarContainer;
      } else {
        const headerContainer = document.getElementById('header-bookmark-container');
        if (headerContainer) {
          containerRef.current = headerContainer;
        }
      }
    };

    checkLocation();

    // Set up IntersectionObserver for lazy loading bookmark status
    if (!hasChecked && containerRef.current) {
      intersectionObserverRef.current = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting && !hasChecked) {
            checkBookmarkStatus(currentURL);
            if (intersectionObserverRef.current) {
              intersectionObserverRef.current.disconnect();
              intersectionObserverRef.current = null;
            }
          }
        },
        { threshold: 0.1 }
      );

      intersectionObserverRef.current.observe(containerRef.current);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
        intersectionObserverRef.current = null;
      }
    };
  }, [hasChecked, currentURL, checkBookmarkStatus]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
      if (mutationObserverRef.current) {
        mutationObserverRef.current.disconnect();
      }
    };
  }, []);

  // Memoized Bookmark icon SVG - filled when bookmarked, uses sidebar colors
  const BookmarkSVG = React.memo(({ filled }: { filled: boolean }) => (
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
  ));

  // Memoized shared styles for bookmark icon - matches sidebar nav link colors
  const bookmarkStyles = useMemo(
    () => (
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
    ),
    []
  );

  // Memoize button props to prevent unnecessary re-renders
  const buttonProps = useMemo(
    () => ({
      onClick: handleToggle,
      disabled: isLoading,
      type: 'button' as const,
      'aria-label': isBookmarked ? 'Remove bookmark' : 'Add bookmark',
      title: isBookmarked ? 'Remove bookmark' : 'Add bookmark',
      style: {
        cursor: isLoading ? 'not-allowed' as const : 'pointer' as const,
        pointerEvents: isLoading ? 'none' as const : 'auto' as const,
      },
    }),
    [handleToggle, isLoading, isBookmarked]
  );

  const iconWrapperClassName = useMemo(
    () => `w-5 h-5 flex items-center justify-center flex-shrink-0 bookmark-icon-wrapper ${isBookmarked ? 'bookmarked' : ''}`,
    [isBookmarked]
  );

  // Memoize sidebar button className
  const sidebarButtonClassName = useMemo(
    () => 'w-full flex items-center justify-start gap-3 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bookmark-button text-base lg:text-sm nav-link-text text-slate-700 dark:text-slate-300',
    []
  );

  // Memoize header button className
  const headerButtonClassName = useMemo(
    () => 'flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 cursor-pointer transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed w-9 h-9 p-0 bookmark-button',
    []
  );

  // Memoize icon wrapper style
  const iconWrapperStyle = useMemo(
    () => ({
      pointerEvents: 'none' as const,
      color: 'inherit' as const,
    }),
    []
  );

  if (isSidebar) {
    // Render full-width clickable row for sidebar
    return (
      <>
        {bookmarkStyles}
        <button
          {...buttonProps}
          className={sidebarButtonClassName}
        >
          <div className={iconWrapperClassName} style={iconWrapperStyle}>
            <BookmarkSVG filled={isBookmarked} />
          </div>
          <span className="font-medium text-base lg:text-sm">
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
          {...buttonProps}
          className={headerButtonClassName}
          style={{
            ...buttonProps.style,
            position: 'relative' as const,
            zIndex: 100,
          }}
        >
          <div className={iconWrapperClassName.replace('flex-shrink-0', '')} style={iconWrapperStyle}>
            <BookmarkSVG filled={isBookmarked} />
          </div>
        </button>
      </div>
    </>
  );
};

export default BookmarkIcon;

