import React, { useEffect, useState } from 'react';
import { hasActiveProLicence } from '@/lib/api';
import ShowPlans from './ShowPlans';

// Extract category from URL path
function extractCategoryFromURL(urlStr: string): string {
  try {
    const url = new URL(urlStr);
    const path = url.pathname;

    // Remove leading /freedevtools/ if present
    const cleanPath = path.replace(/^\/freedevtools\//, '');

    // Extract first segment as category
    const segments = cleanPath.split('/').filter(s => s);
    if (segments.length === 0) return 'page';

    const category = segments[0];

    // Normalize category names
    const categoryMap: Record<string, string> = {
      'emojis': 'emoji',
      'svg_icons': 'SVG Icons',
      'png_icons': 'PNG Icons',
      'mcp': 'MCP',
      'c': 'Cheatsheets',
      'tldr': 'TLDR',
      'man-pages': 'Man Pages',
      'installerpedia': 'Installerpedia',
    };

    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
  } catch {
    return 'page';
  }
}

// Extract item name from URL
function extractItemName(urlStr: string): string {
  try {
    const url = new URL(urlStr);
    const path = url.pathname;

    // Remove leading /freedevtools/ if present
    const cleanPath = path.replace(/^\/freedevtools\//, '');

    // Extract last segment as item name
    const segments = cleanPath.split('/').filter(s => s);
    if (segments.length === 0) return 'this page';

    const itemName = segments[segments.length - 1];

    // Remove file extension if present
    return itemName.replace(/\.(svg|png|md|txt)$/i, '') || 'this page';
  } catch {
    return 'this page';
  }
}

// Check if URL is a category page (only one segment after /freedevtools/)
function isCategoryPage(urlStr: string): boolean {
  try {
    const url = new URL(urlStr);
    const path = url.pathname;
    const cleanPath = path.replace(/^\/freedevtools\//, '');
    const segments = cleanPath.split('/').filter(s => s);
    // Category page has only one segment (e.g., /freedevtools/tldr/)
    return segments.length === 1;
  } catch {
    return false;
  }
}

// Check if URL is the pro page
function isProPage(urlStr: string): boolean {
  try {
    const url = new URL(urlStr);
    const path = url.pathname;
    return path.includes('/pro/') || path === '/freedevtools/pro';
  } catch {
    return false;
  }
}

// Check if URL is the homepage
function isHomePage(urlStr: string): boolean {
  try {
    const url = new URL(urlStr);
    const path = url.pathname;
    // Homepage is /freedevtools/ or /freedevtools
    const cleanPath = path.replace(/^\/freedevtools\//, '').replace(/^\/freedevtools$/, '');
    const segments = cleanPath.split('/').filter(s => s);
    return segments.length === 0;
  } catch {
    return false;
  }
}

const Pro: React.FC = () => {
  const [bookmarkInfo, setBookmarkInfo] = useState<{ source?: string; category?: string; itemName?: string; isProPage?: boolean; isCategoryPage?: boolean; isHomePage?: boolean } | null>(null);

  useEffect(() => {
    // Check for bookmark feature query param
    // ShowPlans component will handle fetching licences, so we don't need to call it here
    const checkBookmarkInfo = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const feature = urlParams.get('feature');

      // Get source URL from sessionStorage (preferred) or query param (fallback)
      let source = sessionStorage.getItem('bookmark_source_url');
      if (!source) {
        source = urlParams.get('source');
        if (source) {
          source = decodeURIComponent(source);
        }
      }

      if (feature === 'bookmark' && source) {
        const jwt = localStorage.getItem('hexmos-one');
        // Check pro status from cookie (set by getLicences in ShowPlans)
        // Cookie is set synchronously, so we can check it directly
        const cookies = document.cookie.split('; ');
        let isPro = false;
        for (const cookie of cookies) {
          const [name, value] = cookie.split('=');
          if (name.trim() === 'hexmos-one-fdt-p-status' && value === 'true') {
            isPro = true;
            break;
          }
        }

        // Only show bookmark message if user is NOT pro
        if (!isPro || !jwt) {
          const isProPageCheck = isProPage(source);
          const isHome = isHomePage(source);
          const isCategory = isCategoryPage(source);
          const category = extractCategoryFromURL(source);
          const itemName = extractItemName(source);
          setBookmarkInfo({ source, category, itemName, isProPage: isProPageCheck, isCategoryPage: isCategory, isHomePage: isHome });
          // Clear sessionStorage after using it
          sessionStorage.removeItem('bookmark_source_url');
        }
      }
    };

    // Check immediately
    checkBookmarkInfo();

    // Also listen for active-licence-changed event in case licences are fetched later
    const handleLicenceChange = () => {
      checkBookmarkInfo();
    };

    window.addEventListener('active-licence-changed', handleLicenceChange);

    return () => {
      window.removeEventListener('active-licence-changed', handleLicenceChange);
    };
  }, []);

  return (
    <>
      <div className="">
        <div className="flex flex-col gap-8">
          {bookmarkInfo && (
            <div className="w-full max-w-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <span className="text-2xl">🔖</span>
                </div>
                <div className="flex-1">
                  {(bookmarkInfo.isProPage || bookmarkInfo.isHomePage) ? (
                    <>
                      <h3 className="text-base font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Looks like you just discovered a premium feature
                      </h3>
                      <p className="text-sm text-blue-800 dark:text-blue-200 mb-0">
                        Buy our Pro plan and enjoy many more benefits with Pro!
                      </p>
                    </>
                  ) : bookmarkInfo.isCategoryPage ? (
                    <>
                      <h3 className="text-base font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Looks like you were trying to bookmark{' '}
                        <a
                          href={bookmarkInfo.source}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline cursor-pointer"
                        >
                          {bookmarkInfo.category}
                        </a>
                      </h3>
                      <p className="text-sm text-blue-800 dark:text-blue-200 mb-0">
                        Buy our Pro plan and enjoy many more benefits with Pro!
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-base font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Looks like you were trying to bookmark{' '}
                        <a
                          href={bookmarkInfo.source}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline cursor-pointer"
                        >
                          {bookmarkInfo.itemName}
                        </a>
                        {' '}of {bookmarkInfo.category}
                      </h3>
                      <p className="text-sm text-blue-800 dark:text-blue-200 mb-0">
                        Buy our Pro plan and enjoy many more benefits with Pro!
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          <ShowPlans />
        </div>
      </div>
    </>
  );
};

export default Pro;

