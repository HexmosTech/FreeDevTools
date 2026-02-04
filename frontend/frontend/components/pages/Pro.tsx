import React, { useEffect, useState, useMemo } from 'react';
import ShowPlans from './ShowPlans';
import SignOut from './SignOut';

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

const Pro: React.FC = () => {
  const [bookmarkInfo, setBookmarkInfo] = useState<{ source?: string; category?: string; itemName?: string } | null>(null);

  useEffect(() => {
    // Check for bookmark feature query param
    // ShowPlans component will handle fetching licences, so we don't need to call it here
    const urlParams = new URLSearchParams(window.location.search);
    const feature = urlParams.get('feature');
    const source = urlParams.get('source');
    
    if (feature === 'bookmark' && source) {
      const decodedSource = decodeURIComponent(source);
      const category = extractCategoryFromURL(decodedSource);
      const itemName = extractItemName(decodedSource);
      setBookmarkInfo({ source: decodedSource, category, itemName });
    }
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto px-2 md:px-6 mb-10 mt-12">
        <div className="flex flex-col items-center gap-8">
          {bookmarkInfo && (
            <div className="w-full max-w-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl">🔖</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Looks like you were trying to bookmark {bookmarkInfo.itemName} of {bookmarkInfo.category}
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    Buy our Pro plan and enjoy many more benefits with Pro!
                  </p>
                </div>
              </div>
            </div>
          )}
          <ShowPlans />
        </div>
      </div>
      <SignOut />
    </>
  );
};

export default Pro;

