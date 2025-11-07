import { FileTextIcon, RocketIcon, GearIcon } from '@radix-ui/react-icons';
import React, { useEffect, useRef, useState } from 'react';

interface SeeAlsoItem {
  icon: React.ReactNode;
  text: string;
  link: string;
  category?: string;
  image?: string;
  code?: string;
}

interface SearchResult {
  id?: string;
  title?: string;
  name?: string;
  description?: string;
  category?: string;
  url?: string;
  path?: string;
  slug?: string;
  code?: string;
  image?: string;
  [key: string]: unknown;
}

interface SearchResponse {
  hits: SearchResult[];
  query: string;
  processingTimeMs: number;
  limit: number;
  offset: number;
  estimatedTotalHits: number;
}

const LoadingBox: React.FC = () => (
  <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-background animate-pulse">
    <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg"></div>
    <div className="h-5 bg-muted rounded w-32"></div>
  </div>
);

const getTopKeywords = (n = 3): string[] => {
  const text = document.body.innerText || "";
  
  const stopwords = new Set([
    "the", "is", "and", "or", "to", "in", "of", "for", "on", "a", "an", "with", "that",
    "this", "it", "as", "by", "be", "are", "at", "from", "but", "not", "your", "you",
    "we", "our", "they", "their", "has", "have", "had", "can", "will", "would", "could",
    "should", "may", "might", "must", "about", "into", "through", "during", "before",
    "after", "above", "below", "up", "down", "out", "off", "over", "under", "again",
    "further", "then", "once", "here", "there", "when", "where", "why", "how", "all",
    "each", "other", "some", "such", "only", "own", "same", "so", "than", "too", "very",
    "can", "just", "don", "now", "more", "use", "get", "see", "make", "find", "know",
    "take", "come", "think", "look", "want", "give", "tell", "work", "call", "try",
    "ask", "need", "feel", "become", "leave", "put", "mean", "keep", "let", "begin",
    "seem", "help", "talk", "turn", "start", "show", "hear", "play", "run", "move",
    "like", "live", "believe", "hold", "bring", "happen", "write", "provide", "sit",
    "stand", "lose", "pay", "meet", "include", "continue", "set", "learn", "change",
    "lead", "understand", "watch", "follow", "stop", "create", "speak", "read", "allow",
    "add", "spend", "grow", "open", "walk", "win", "offer", "remember", "love", "consider"
  ]);

  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 3 && !stopwords.has(w));

  const freq: Record<string, number> = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([w]) => w);
};

async function searchMeilisearch(query: string): Promise<SearchResponse> {
  try {
    const searchBody = {
      q: query,
      limit: 10,
      offset: 0,
      attributesToRetrieve: [
        'id',
        'name',
        'title',
        'description',
        'category',
        'path',
        'image',
        'code',
      ],
    };

    const response = await fetch(
      'https://search.apps.hexmos.com/indexes/freedevtools/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer 509923210c1fbc863d8cd8d01ffc062bac61aa503944c5d65b155e6cafdaddb5',
        },
        body: JSON.stringify(searchBody),
      }
    );

    if (!response.ok) {
      throw new Error('Search failed: ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Search error:', error);
    return {
      hits: [],
      query: '',
      processingTimeMs: 0,
      limit: 0,
      offset: 0,
      estimatedTotalHits: 0,
    };
  }
}

const getCategoryIcon = (category?: string): React.ReactNode => {
  switch (category?.toLowerCase()) {
    case 'tools':
      return <GearIcon className="w-5 h-5" />;
    case 'tldr':
    case 'cheatsheets':
      return <FileTextIcon className="w-5 h-5" />;
    default:
      return <RocketIcon className="w-5 h-5" />;
  }
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SeeAlso: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState<SeeAlsoItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            (async () => {
              const topWords = getTopKeywords(3);
              console.log('Top 3 keywords:', topWords);
              
              // Normalize current path by removing trailing slash and converting to lowercase
              const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '');
              const baseUrl = `${window.location.protocol}//${window.location.host}`;
              
              console.log('Current path (normalized):', currentPath);
              
              // Search for each keyword separately and pick top result from each
              const searchPromises = topWords.map(keyword => searchMeilisearch(keyword));
              const searchResponses = await Promise.all(searchPromises);
              
              // Collect top result from each keyword search
              const topResults: SearchResult[] = [];
              searchResponses.forEach((response, index) => {
                console.log(`Results for keyword "${topWords[index]}":`, response.hits.map(h => h.path));
                
                const topResult = response.hits
                  .filter(hit => {
                    if (!hit.path) return false;
                    // Normalize the hit path the same way
                    const normalizedHitPath = hit.path.toLowerCase().replace(/\/$/, '');
                    const isCurrentPage = normalizedHitPath === currentPath;
                    if (isCurrentPage) {
                      console.log('Filtered out current page:', hit.path);
                    }
                    return !isCurrentPage;
                  })
                  .find(hit => !topResults.some(r => {
                    const existingPath = r.path?.toLowerCase().replace(/\/$/, '');
                    const hitPath = hit.path?.toLowerCase().replace(/\/$/, '');
                    return existingPath === hitPath;
                  }));
                
                if (topResult) {
                  topResults.push(topResult);
                }
              });
              
              console.log('Final top results:', topResults.map(r => r.path));
              
              // Take up to 3 unique results
              const uniqueResults = topResults.slice(0, 3);
              
              // Convert to SeeAlsoItem format
              const seeAlsoItems: SeeAlsoItem[] = uniqueResults.map(result => ({
                icon: getCategoryIcon(result.category),
                text: result.name || result.title || 'Untitled',
                link: result.path ? `${baseUrl}${result.path}` : '#',
                category: result.category,
                image: result.image,
                code: result.code,
              }));
              
              setItems(seeAlsoItems);
              setIsVisible(true);
              observer.disconnect();
            })();
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
  }, [isVisible]);

  return (
    <div ref={containerRef} className="rounded-xl border-2 border-border bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 p-8 mt-8 mb-8 shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-white dark:text-gray-900">See Also</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[140px]">
        {!isVisible ? (
          <>
            <LoadingBox />
            <LoadingBox />
            <LoadingBox />
          </>
        ) : items.length === 0 ? (
          <div className="col-span-3 text-center text-white dark:text-gray-900 p-6">
            No related content found
          </div>
        ) : (
          items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-white/20 dark:border-gray-900/20 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-900 hover:border-white dark:hover:border-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
            >
              {item.code ? (
                <div className="flex-shrink-0 text-5xl group-hover:scale-110 transition-transform duration-200">
                  {item.code}
                </div>
              ) : item.image ? (
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-100 rounded-lg p-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                  <img
                    src={`https://hexmos.com/freedevtools${item.image}`}
                    alt={item.text}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = item.icon as any;
                    }}
                  />
                </div>
              ) : (
                <div className="flex-shrink-0 text-primary group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-200 w-12 h-12 flex items-center justify-center">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-12 h-12' })}
                </div>
              )}
              <span className="text-base font-semibold text-center text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-200">{item.text}</span>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default SeeAlso;
