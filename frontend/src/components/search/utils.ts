export function getCategoryDisplayName(category: string): string {
  switch (category) {
    case 'emoji':
      return 'emojis';
    case 'mcp':
      return 'MCPs';
    case 'svg_icons':
      return 'SVG icons';
    case 'png_icons':
      return 'PNG icons';
    case 'tools':
      return 'tools';
    case 'tldr':
      return 'TLDRs';
    case 'cheatsheets':
      return 'cheatsheets';
    default:
      return 'items';
  }
}

export function getBadgeVariant(category: string): string {
  switch (category?.toLowerCase()) {
    case 'emojis':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'svg_icons':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'tools':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'tldr':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'cheatsheets':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    case 'png_icons':
      return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
    case 'mcp':
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
}

export function updateUrlHash(searchQuery: string): void {
  if (searchQuery.trim()) {
    // Set hash with search query
    window.location.hash = `search?q=${encodeURIComponent(searchQuery)}`;
  } else {
    // Clear hash if search is empty
    if (window.location.hash.startsWith('#search')) {
      history.pushState(
        '',
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }
}

