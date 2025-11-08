import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

export function formatRepositoryName(name: string): string {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function getIconClasses(iconPath: string): string {
  // For SVG icons that need color manipulation
  if (
    iconPath.includes('star_empty.svg') ||
    iconPath.includes('github/star.svg')
  ) {
    return 'w-4 h-4 star-icon';
  }

  // For other icons that need dark mode inversion
  if (iconPath.includes('github.svg') || iconPath.includes('npm.svg')) {
    return 'w-4 h-4 dark:brightness-0 dark:invert';
  }

  // Default classes
  return 'w-4 h-4';
}

export function fixImageSrcLinks(input: string, repo: string): string {
  // Ensure repo ends with a single slash
  repo = repo.replace(/\/+$/, '') + '/';

  return input.replace(
    /src\s*=\s*["'](.*?)["']/g,
    (match: string, src: string): string => {
      // Skip absolute URLs
      if (/^(https?:|data:|blob:)/i.test(src)) return match;

      // Remove leading slashes from src
      const cleanSrc = src.replace(/^\/+/, '');
      const fullUrl = repo + cleanSrc;

      // Preserve original quote style
      const quote = match.includes('"') ? '"' : "'";
      return `src=${quote}${fullUrl}${quote}`;
    }
  );
}

export function fixRelativeLinks(input: string, repo: string): string {
  // Ensure repo ends with a single slash
  repo = repo.replace(/\/+$/, '') + '/';

  return input.replace(
    /\[([^\]]*)\]\(([^)]*)\)/g,
    (match: string, text: string, url: string): string => {
      // Skip absolute URLs
      if (/^(https?:|data:|blob:)/i.test(url)) return match;

      // Handle relative paths by resolving them properly
      let cleanUrl = url;

      // Remove leading slashes
      cleanUrl = cleanUrl.replace(/^\/+/, '');

      // Handle parent directory references (../)
      if (cleanUrl.includes('../')) {
        // For GitHub, we need to resolve the path properly
        // Remove ../ patterns and build the correct path
        const pathParts = cleanUrl.split('/');
        const resolvedParts = [];

        for (const part of pathParts) {
          if (part === '..') {
            // Go up one directory level
            if (resolvedParts.length > 0) {
              resolvedParts.pop();
            }
          } else if (part !== '.' && part !== '') {
            resolvedParts.push(part);
          }
        }

        cleanUrl = resolvedParts.join('/');
      }

      // For GitHub, we need to add blob/main/ to make it a proper file link
      const fullUrl = repo + 'blob/main/' + cleanUrl;

      return `[${text}](${fullUrl})`;
    }
  );
}

export function addTargetBlankToLinks(html: string): string {
  return html.replace(
    /<a\s+([^>]*?)href="([^"]*?)"([^>]*?)>/g,
    (
      match: string,
      beforeHref: string,
      href: string,
      afterHref: string
    ): string => {
      // Skip if already has target attribute
      if (match.includes('target=')) return match;

      // Only add target="_blank" to external links (not internal site links)
      if (href.startsWith('http') && !href.includes('hexmos.com')) {
        return `<a ${beforeHref}href="${href}"${afterHref} target="_blank" rel="noopener noreferrer">`;
      }

      return match;
    }
  );
}
