import React, { useEffect, useRef, useState } from 'react';

interface BannerProps {
  banner: {
    id: number;
    name: string;
    link_type: string;
    html_link: string;
    js_links: string | null;
  } | null;
}

// Function to sanitize and fix HTML for accessibility
function sanitizeHtml(html: string): string {
  if (!html) return '';

  let sanitized = html;

  // Convert script tags that are actually tracking pixels to img tags
  sanitized = sanitized.replace(
    /<script[^>]*src=["']([^"']*placeholder[^"']*)["'][^>]*><\/script>/gi,
    '<img src="$1" alt="" width="1" height="1" style="display:none;" loading="lazy" />'
  );

  // Remove deprecated window.status handlers that can cause performance issues
  sanitized = sanitized.replace(/\s*onmouseover=["'][^"']*["']/gi, '');
  sanitized = sanitized.replace(/\s*onmouseout=["'][^"']*["']/gi, '');

  // Add lazy loading to banner images to prevent blocking
  sanitized = sanitized.replace(/<img([^>]*)>/gi, (match) => {
    // Skip if it's a tracking pixel (1x1 image) - keep them lazy loaded
    const isTrackingPixel =
      match.includes('width="1"') ||
      match.includes("width='1'") ||
      match.includes('height="1"') ||
      match.includes("height='1'") ||
      match.includes('width: 1px') ||
      match.includes('height: 1px') ||
      match.includes('style="display:none"') ||
      match.includes("style='display:none'");

    if (isTrackingPixel) {
      return match;
    }

    // For banner images: add lazy loading to prevent blocking
    let fixed = match;
    fixed = fixed.replace(/\s*loading=["'][^"']*["']/gi, '');
    if (!fixed.includes('loading=')) {
      fixed = fixed.replace(/(<img[^>]*)(>)/i, '$1 loading="lazy" $2');
    }

    return fixed;
  });

  // Add alt attributes to all images that don't have them
  sanitized = sanitized.replace(
    /<img((?![^>]*alt=)[^>]*)(width=["']1["']|height=["']1["'])[^>]*>/gi,
    (match) => {
      if (!match.includes('alt=')) {
        return match.replace(/(<img[^>]*)(>)/i, '$1 alt="" $2');
      }
      return match;
    }
  );

  sanitized = sanitized.replace(
    /<img((?![^>]*alt=)[^>]*(?:width=["']1["']|height=["']1["'])[^>]*)>/gi,
    (match) => {
      if (!match.includes('alt=')) {
        return match.replace(/(<img[^>]*)(>)/i, '$1 alt="" $2');
      }
      return match;
    }
  );

  sanitized = sanitized.replace(
    /<img((?![^>]*alt=)[^>]*)>/gi,
    '<img$1 alt="Advertisement">'
  );

  // Ensure links have accessible text or aria-label
  sanitized = sanitized.replace(
    /<a([^>]*href=["'][^"']*["'][^>]*)>(\s*<img[^>]*>)\s*<\/a>/gi,
    (match, linkAttrs, imgTag) => {
      if (!linkAttrs.includes('aria-label') && !linkAttrs.includes('title')) {
        const altMatch = imgTag.match(/alt=["']([^"']*)["']/i);
        const altText = altMatch && altMatch[1] ? altMatch[1] : 'Advertisement';
        return `<a${linkAttrs} aria-label="${altText}">${imgTag}</a>`;
      }
      return match;
    }
  );

  sanitized = sanitized.replace(
    /<a([^>]*href=["'][^"']*["'][^>]*)>\s*<\/a>/gi,
    (match, linkAttrs) => {
      if (!linkAttrs.includes('aria-label') && !linkAttrs.includes('title')) {
        return `<a${linkAttrs} aria-label="Advertisement"></a>`;
      }
      return match;
    }
  );

  sanitized = sanitized.replace(
    /<a([^>]*href=["'][^"']*["'][^>]*)>(\s+)<\/a>/gi,
    (match, linkAttrs) => {
      if (!linkAttrs.includes('aria-label') && !linkAttrs.includes('title')) {
        return `<a${linkAttrs} aria-label="Advertisement"></a>`;
      }
      return match;
    }
  );

  return sanitized;
}

// Function to process JS links (convert script tags to img tags)
function processJsLinks(jsLinks: string | null): string {
  if (!jsLinks) return '';
  return jsLinks.replace(
    /<script[^>]*src=["']([^"']*placeholder[^"']*)["'][^>]*><\/script>/gi,
    '<img src="$1" alt="" width="1" height="1" style="display:none;" loading="lazy" />'
  );
}

const Banner: React.FC<BannerProps> = ({ banner }) => {
  // Check if ads are enabled via environment variable
  const adsEnabled = import.meta.env.ENABLE_ADS === 'true';

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!banner) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [banner, isVisible]);

  if (!adsEnabled) {
    return <div></div>;
  }

  if (!banner) {
    return (
      <div className="w-full my-8 flex justify-center items-center">
        <p className="text-sm text-gray-500">No banners available</p>
      </div>
    );
  }

  const sanitizedHtmlLink = sanitizeHtml(banner.html_link);
  const sanitizedJsLinks = processJsLinks(banner.js_links);

  return (
    <aside
      ref={containerRef}
      role="complementary"
      aria-label="Advertisement"
      data-banner-name={banner.name}
      data-banner-type={banner.link_type}
    >
      {banner.link_type === 'banner' ? (
        <div
          id={banner.name}
          className="w-full mb-2 mt-0 md:mb-2 md:mt-2 flex flex-col justify-center items-center text-center"
        >
          <div className="px-2 py-2 flex flex-col justify-center items-center w-full text-center" style={{ width: '100%' }}>
            <div className="w-full flex justify-center items-center" style={{ width: '100%' }}>
              <div className="w-full flex justify-center items-center" style={{ width: '100%' }}>
                <div className="relative flex items-center justify-center" style={{ width: 'auto' }}>
                  <span className="hidden md:inline-block text-xs text-slate-600 dark:text-slate-300 mr-2 mb-16">
                    Ad
                  </span>
                  <div className="flex items-center" style={{ width: 'auto' }}>
                    {isVisible && (
                      <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlLink }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-center mt-4 text-xs w-full">
              We earn commissions when you shop through the advertisement links or banners in the page
            </p>
          </div>
          {isVisible && sanitizedJsLinks && (
            <div
              className="w-full flex justify-center items-center"
              dangerouslySetInnerHTML={{ __html: sanitizedJsLinks }}
            />
          )}
        </div>
      ) : (
        <>
          <p className="ad-label ad-disclosure text-xs text-slate-600 dark:text-slate-300">Ad</p>
          <div
            id={banner.name}
            className="w-full bg-yellow-100 border border-gray-200 shadow-sm rounded-md relative transition-colors duration-300 block mb-8 mt-0 md:mb-10 md:mt-2"
          >
            <div className="h-full flex flex-col justify-center">
              <div className="px-4 py-2 md:px-6 md:py-6 text-black [&_a]:text-blue-600 [&_a]:dark:text-blue-400 [&_a]:underline [&_a]:hover:no-underline [&_a]:font-normal">
                {isVisible && (
                  <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlLink }} />
                )}
              </div>
            </div>
            {isVisible && sanitizedJsLinks && (
              <div dangerouslySetInnerHTML={{ __html: sanitizedJsLinks }} />
            )}
          </div>
        </>
      )}
    </aside>
  );
};

export default Banner;

