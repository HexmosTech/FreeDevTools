import React, { useEffect, useState, useMemo } from 'react';
import { getAllBookmarks, toggleBookmark, Bookmark, getProStatusFromCookie } from '@/lib/api';

const Bookmarks: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [undoInfo, setUndoInfo] = useState<{
    url: string;
    category: string;
    itemName: string;
    countdown: number;
  } | null>(null);

  useEffect(() => {
    // Check pro status on mount - redirect if not pro
    const isPro = getProStatusFromCookie();
    if (!isPro) {
      // Store current URL as source
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('bookmark_source_url', window.location.href);
        window.location.href = '/freedevtools/pro/?feature=bookmark';
      }
      return;
    }

    loadBookmarks();
  }, []);

  // Handle countdown timer for undo
  useEffect(() => {
    if (!undoInfo) return;

    if (undoInfo.countdown <= 0) {
      setUndoInfo(null);
      return;
    }

    const timer = setTimeout(() => {
      setUndoInfo((prev) => {
        if (!prev) return null;
        return { ...prev, countdown: prev.countdown - 1 };
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [undoInfo]);

  const loadBookmarks = async () => {
    try {
      setLoading(true);
      const result = await getAllBookmarks();

      // Check if redirect is needed (non-pro user)
      if (result.requiresPro && result.redirect) {
        // Redirect will be handled by getAllBookmarks, but we can also check here
        return;
      }

      if (result.success) {
        setBookmarks(result.bookmarks);
      }
    } catch (error) {
      console.error('[Bookmarks] Error loading bookmarks:', error);
    } finally {
      setLoading(false);
    }
  };

  // Group bookmarks by category
  const groupedBookmarks = useMemo(() => {
    const filtered = bookmarks.filter((bookmark) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        bookmark.url.toLowerCase().includes(query) ||
        bookmark.category.toLowerCase().includes(query)
      );
    });

    const grouped: Record<string, Bookmark[]> = {};
    filtered.forEach((bookmark) => {
      const category = bookmark.category || 'other';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(bookmark);
    });

    // Sort categories
    const sortedCategories = Object.keys(grouped).sort();

    return sortedCategories.map((category) => ({
      category,
      bookmarks: grouped[category].sort((a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      ),
    }));
  }, [bookmarks, searchQuery]);

  const handleUnbookmark = async (url: string, category: string) => {
    // Find the bookmark to get its name
    const bookmark = bookmarks.find((b) => b.url === url);
    const itemName = bookmark ? getPageTitleFromUrl(bookmark.url) : 'bookmark';

    const result = await toggleBookmark(url);
    if (result.success) {
      // Show undo notification
      setUndoInfo({
        url,
        category,
        itemName,
        countdown: 5,
      });

      // Reload bookmarks
      loadBookmarks();
    }
  };

  const handleUndo = async () => {
    if (!undoInfo) return;

    const result = await toggleBookmark(undoInfo.url);
    if (result.success) {
      setUndoInfo(null);
      // Reload bookmarks
      loadBookmarks();
    }
  };

  const getCategoryDisplayName = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'c': 'Cheatsheets',
      'svg_icons': 'SVG Icons',
      'png_icons': 'PNG Icons',
      'mcp': 'MCP',
      'emoji': 'Emojis',
      'emojis': 'Emojis',
      'tldr': 'TLDR',
      'man-pages': 'Man Pages',
      'installerpedia': 'Installerpedia',
      'index': 'Home',
    };
    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getPageTitleFromUrl = (url: string): string => {
    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        const lastPart = pathParts[pathParts.length - 1];
        // Decode and format
        return decodeURIComponent(lastPart)
          .replace(/-/g, ' ')
          .replace(/_/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      return url;
    } catch {
      return url;
    }
  };

  const getIconPreviewUrl = (url: string, category: string): string | null => {
    // Only show preview for svg_icons and png_icons
    if (category !== 'svg_icons' && category !== 'png_icons') {
      return null;
    }

    try {
      const urlObj = new URL(url);
      let path = urlObj.pathname;

      // Remove trailing slash
      path = path.replace(/\/$/, '');

      // For PNG icons, replace png_icons with svg_icons
      if (category === 'png_icons') {
        path = path.replace('/png_icons/', '/svg_icons/');
      }

      // Add .svg extension
      path = path + '.svg';

      // Reconstruct URL
      return `${urlObj.origin}${path}`;
    } catch {
      return null;
    }
  };

  if (loading) {
    return (
      <div className="">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading bookmarks...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Undo Notification */}
      {undoInfo && (
        <div className="fixed right-4 z-50 transition-opacity duration-300" style={{ bottom: '1rem', top: 'auto' }}>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg px-4 py-3 flex items-center gap-4 min-w-[400px] max-w-[600px]">
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-gray-100">
                Undo <span className="font-semibold text-blue-600 dark:text-blue-400">{undoInfo.itemName}</span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  ({getCategoryDisplayName(undoInfo.category)})
                </span>{' '}
                removal
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {undoInfo.countdown} {undoInfo.countdown === 1 ? 'second' : 'seconds'} remaining
              </p>
            </div>
            <button
              onClick={handleUndo}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors whitespace-nowrap"
            >
              Undo
            </button>
          </div>
        </div>
      )}

      <div className="">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            My Bookmarks
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {bookmarks.length} {bookmarks.length === 1 ? 'bookmark' : 'bookmarks'} saved
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search bookmarks by URL or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {bookmarks.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              No bookmarks yet
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Start bookmarking pages to see them here
            </p>
          </div>
        ) : groupedBookmarks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No bookmarks match your search query
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {groupedBookmarks.map(({ category, bookmarks: categoryBookmarks }) => (
              <div key={category} className="pb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {getCategoryDisplayName(category)}
                  <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                    ({categoryBookmarks.length})
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categoryBookmarks.map((bookmark) => {
                    const iconPreviewUrl = getIconPreviewUrl(bookmark.url, bookmark.category);

                    return (
                      <a
                        key={`${bookmark.uId_hash_id}-${bookmark.url}`}
                        href={bookmark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-start justify-between p-2 bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 no-underline"
                      >
                        <div className="flex items-start gap-2 flex-1 min-w-0">
                          {iconPreviewUrl && (
                            <div className="flex-shrink-0 w-10 h-10 bg-white rounded border border-gray-200 flex items-center justify-center">
                              <img
                                src={iconPreviewUrl}
                                alt="Icon preview"
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  // Hide image on error
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <span className="block text-blue-600 dark:text-blue-400 hover:underline truncate font-medium">
                              {getPageTitleFromUrl(bookmark.url)}
                            </span>
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
                              {bookmark.url}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                              Bookmarked on {new Date(bookmark.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleUnbookmark(bookmark.url, bookmark.category);
                          }}
                          className="ml-4 p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors flex-shrink-0 z-10 relative"
                          title="Remove bookmark"
                          aria-label="Remove bookmark"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Bookmarks;

