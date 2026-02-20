import toast from '@/components/ToastProvider';
import { MEILI_SEARCH_API_KEY } from '@/config';
import { getProStatusFromCookie } from '@/lib/api';
import {
  Cross2Icon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import React, { useCallback, useEffect, useState } from 'react';

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
  facetDistribution?: { category?: { [key: string]: number } };
}

interface SearchInfo {
  totalHits: number;
  processingTime: number;
  facetTotal?: number;
}

function getCategoryDisplayName(category: string): string {
  const map: Record<string, string> = {
    emoji: 'emojis', mcp: 'MCPs', svg_icons: 'SVG icons', png_icons: 'PNG icons',
    tools: 'tools', tldr: 'TLDRs', cheatsheets: 'cheatsheets', man_pages: 'man pages', installerpedia: 'installerpedia',
  };
  return map[category] ?? 'items';
}

function getCategoryKeyForSearch(categoryKey: string): string {
  return categoryKey === 'emoji' ? 'emojis' : categoryKey;
}

function getBadgeVariant(category: string): string {
  const map: Record<string, string> = {
    emojis: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    svg_icons: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    tools: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    tldr: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    cheatsheets: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    png_icons: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    mcp: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    man_pages: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    installerpedia: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  };
  return map[category?.toLowerCase()] ?? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
}

const SEARCH_COUNT_KEY = 'freedevtools-search-count';
const MAX_SEARCHES = 20;

function getSearchCount(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const count = localStorage.getItem(SEARCH_COUNT_KEY);
    return count ? parseInt(count, 10) : 0;
  } catch { return 0; }
}

function incrementSearchCount(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SEARCH_COUNT_KEY, (getSearchCount() + 1).toString());
  } catch { /* noop */ }
}

function getSearchesLeft(): number {
  return Math.max(0, MAX_SEARCHES - getSearchCount());
}

async function searchUtilities(
  query: string,
  categories: string[] = [],
  page: number = 1
): Promise<SearchResponse> {
  try {
    const searchBody: {
      q: string;
      limit: number;
      offset: number;
      facets: string[];
      attributesToRetrieve: string[];
      filter?: string;
    } = {
      q: query,
      limit: 30,
      offset: (page - 1) * 30,
      facets: ['category'],
      attributesToRetrieve: ['id', 'name', 'title', 'description', 'category', 'path', 'image', 'code'],
    };
    if (categories.length > 0) {
      const conditions = categories.map((c) => (c === 'emoji' ? "category = 'emojis'" : `category = '${c}'`));
      searchBody.filter = conditions.length === 1 ? conditions[0] : conditions.join(' OR ');
    }
    const res = await fetch('https://search.apps.hexmos.com/indexes/freedevtools/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${MEILI_SEARCH_API_KEY}` },
      body: JSON.stringify(searchBody),
    });
    if (!res.ok) throw new Error('Search failed');
    return res.json();
  } catch (e) {
    console.error('Search error:', e);
    return { hits: [], query: '', processingTimeMs: 0, limit: 0, offset: 0, estimatedTotalHits: 0 };
  }
}

function getQueryFromUrl(): string {
  if (typeof window === 'undefined') return '';
  const params = new URLSearchParams(window.location.search);
  return params.get('q') ?? '';
}

function setQueryInUrl(q: string): void {
  const url = new URL(window.location.href);
  if (q.trim()) url.searchParams.set('q', q);
  else url.searchParams.delete('q');
  window.history.replaceState(null, '', url.pathname + url.search);
}

const ResultCard = ({ result }: { result: SearchResult }) => {
  const category = result.category?.toLowerCase();
  const baseUrl = typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.host}` : 'https://hexmos.com';

  if (category === 'emojis') {
    return (
      <a href={result.path ? `${baseUrl}${result.path}` : '#'} className="block no-underline">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md active:scale-[0.98] transition-transform overflow-hidden flex flex-col min-h-[120px]">
          <div className="flex-1 flex flex-col items-center justify-center p-5 relative">
            {result.category && (
              <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}>
                {result.category}
              </div>
            )}
            <div className="emoji-preview text-5xl mb-2">{result.code}</div>
            <span className="font-medium text-center text-sm text-slate-800 dark:text-slate-200">{result.name || result.title || 'Untitled'}</span>
          </div>
        </div>
      </a>
    );
  }

  if (category === 'svg_icons' || category === 'png_icons') {
    return (
      <a href={result.path ? `${baseUrl}${result.path}` : '#'} className="block no-underline">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md active:scale-[0.98] transition-transform flex flex-col min-h-[120px]">
          <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
            {result.category && (
              <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}>
                {result.category === 'svg_icons' ? 'SVG Icons' : 'PNG Icons'}
              </div>
            )}
            <div className="w-14 h-14 mb-2 flex items-center justify-center bg-white dark:bg-gray-100 rounded-lg p-2">
              <img src={`https://hexmos.com/freedevtools${result.image}`} alt={result.name || result.title || 'Icon'} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <span className="text-center text-sm text-gray-700 dark:text-gray-300">{result.name || result.title || 'Untitled'}</span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={result.path ? `${baseUrl}${result.path}` : '#'} className="block no-underline">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md active:scale-[0.98] transition-transform flex flex-col min-h-[100px] p-4 relative">
        {result.category && (
          <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}>
            {(result.category as string).includes('_') ? (result.category as string).split('_').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : result.category}
          </div>
        )}
        <span className="font-bold text-base text-slate-900 dark:text-slate-100 pr-20">{result.name || result.title || 'Untitled'}</span>
        {result.description && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{result.description}</p>}
      </div>
    </a>
  );
};

const categories = [
  { key: 'all', label: 'All' },
  { key: 'tools', label: 'Tools' },
  { key: 'tldr', label: 'TLDR' },
  { key: 'cheatsheets', label: 'Cheatsheets' },
  { key: 'png_icons', label: 'PNG Icons' },
  { key: 'svg_icons', label: 'SVG Icons' },
  { key: 'emoji', label: 'Emojis' },
  { key: 'mcp', label: 'MCP' },
  { key: 'man_pages', label: 'Man Pages' },
  { key: 'installerpedia', label: 'InstallerPedia' },
];

const ProSearchPage: React.FC = () => {
  const [query, setQueryState] = useState(getQueryFromUrl);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchInfo, setSearchInfo] = useState<SearchInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allResults, setAllResults] = useState<SearchResult[]>([]);
  const [availableCategories, setAvailableCategories] = useState<Record<string, number>>({});
  const [isPro, setIsPro] = useState(false);
  const [searchesLeft, setSearchesLeft] = useState(getSearchesLeft);
  const lastCountedRef = React.useRef<{ query: string; categories: string[] } | null>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => searchInputRef.current?.focus(), 100);
    return () => clearTimeout(t);
  }, []);

  const setQuery = useCallback((q: string) => {
    setQueryState(q);
    setQueryInUrl(q);
  }, []);

  useEffect(() => {
    setQueryState(getQueryFromUrl());
    const onPopState = () => setQueryState(getQueryFromUrl());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const getEffectiveCategories = useCallback(() => {
    if (activeCategory === 'all') return [];
    if (activeCategory === 'multi') return selectedCategories;
    return [activeCategory];
  }, [activeCategory, selectedCategories]);

  useEffect(() => {
    setIsPro(getProStatusFromCookie());
    setSearchesLeft(getSearchesLeft());
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      if (results.length > 0) setResults([]);
      if (allResults.length > 0) setAllResults([]);
      setSearchInfo(null);
      setCurrentPage(1);
      if (activeCategory !== 'all') setActiveCategory('all');
      if (selectedCategories.length > 0) setSelectedCategories([]);
      if (Object.keys(availableCategories).length > 0) setAvailableCategories({});
      return;
    }
    if (!isPro && searchesLeft <= 0) {
      toast.warning('Search Limit Reached - Upgrade to Pro for unlimited searches');
      return;
    }
    const effective = getEffectiveCategories();
    const isNewSearch = !lastCountedRef.current || lastCountedRef.current.query !== query.trim() ||
      JSON.stringify(lastCountedRef.current.categories.sort()) !== JSON.stringify([...effective].sort());
    const t = setTimeout(async () => {
      setLoading(true);
      setCurrentPage(1);
      setAvailableCategories({});
      try {
        const data = await searchUtilities(query, effective, 1);
        setResults(data.hits ?? []);
        setAllResults(data.hits ?? []);
        let facetTotal = 0;
        if (data.facetDistribution?.category) {
          facetTotal = Object.values(data.facetDistribution.category).reduce((a, b) => a + b, 0);
          setAvailableCategories(data.facetDistribution.category);
        }
        setSearchInfo({
          totalHits: facetTotal > 0 ? facetTotal : data.estimatedTotalHits ?? 0,
          processingTime: data.processingTimeMs ?? 0,
          facetTotal,
        });
        if (!isPro && query.trim() && isNewSearch) {
          incrementSearchCount();
          setSearchesLeft(getSearchesLeft());
          lastCountedRef.current = { query: query.trim(), categories: effective };
        }
      } catch {
        setResults([]);
        setAllResults([]);
        setSearchInfo(null);
      } finally {
        setLoading(false);
      }
    }, 400);
    return () => clearTimeout(t);
  }, [query, activeCategory, selectedCategories, getEffectiveCategories, isPro, searchesLeft]);

  useEffect(() => {
    setCurrentPage(1);
    setResults([]);
    setAllResults([]);
    setSearchInfo(null);
  }, [activeCategory, selectedCategories]);

  const totalPages = searchInfo ? Math.ceil(searchInfo.totalHits / 100) : 1;
  const hasMoreResults = currentPage < totalPages;

  const loadMoreResults = async () => {
    if (!hasMoreResults || loadingMore) return;
    setLoadingMore(true);
    try {
      const next = currentPage + 1;
      const data = await searchUtilities(query, getEffectiveCategories(), next);
      const newHits = data.hits ?? [];
      setAllResults((p) => [...p, ...newHits]);
      setResults((p) => [...p, ...newHits]);
      setCurrentPage(next);
    } catch {
      /* noop */
    } finally {
      setLoadingMore(false);
    }
  };

  const handleCategoryClick = (cat: string) => {
    if (cat === 'all') {
      setActiveCategory('all');
      setSelectedCategories([]);
    } else {
      setActiveCategory(cat);
      setSelectedCategories([cat]);
    }
  };

  const handleCategoryRightClick = (e: React.MouseEvent, cat: string) => {
    e.preventDefault();
    if (cat === 'all') {
      setActiveCategory('all');
      setSelectedCategories([]);
      return;
    }
    const sel = selectedCategories.includes(cat) ? selectedCategories.filter((c) => c !== cat) : [...selectedCategories, cat];
    setSelectedCategories(sel);
    setActiveCategory(sel.length === 0 ? 'all' : 'multi');
  };

  const formatCount = (c: number | undefined) => (c === undefined ? '' : c > 999 ? `${Math.floor(c / 1000)}k+` : String(c));
  const getAllCount = () => (Object.keys(availableCategories).length === 0 ? undefined : Object.values(availableCategories).reduce((a, b) => a + b, 0));

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background pb-safe">
      {/* Sticky header: back + title + searches left */}
      <header className="sticky top-0 z-10 flex items-center gap-3 px-2 py-3 bg-background/95 backdrop-blur border-b border-border safe-area-inset-top">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-muted/50 hover:bg-muted focus:border-fdt-yellow-dark dark:focus:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-fdt-yellow-dark/30 dark:focus:ring-yellow-700/30"
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="text-lg font-semibold text-foreground truncate flex-1">Search</h1>
        {!isPro && searchesLeft >= 0 && (
          <a
            href="#pro-banner"
            className="flex items-center gap-2 min-h-[44px] px-3 rounded-xl shrink-0"
            style={{
              borderWidth: '1px',
              borderColor: '#d4cb24',
              color: '#d4cb24',
            }}
          >
            {searchesLeft === 0 ? <ExclamationTriangleIcon className="w-5 h-5 shrink-0" style={{ color: '#d4cb24' }} /> : <MagnifyingGlassIcon className="w-5 h-5 shrink-0" style={{ color: '#d4cb24' }} />}
            <span className="text-sm font-medium whitespace-nowrap" style={{ color: '#d4cb24' }}>{searchesLeft} left</span>
          </a>
        )}
      </header>

      {/* Search bar - touch friendly (type="text" to avoid native clear; inputMode="search" keeps mobile keyboard) */}
      <div className="px-2 pt-4 pb-3">
        <div className="relative flex-1 flex gap-2">
          <input
            ref={searchInputRef}
            type="text"
            inputMode="search"
            autoComplete="off"
            placeholder="Search icon, emoji, tool, cheatsheet…"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 min-h-[48px] pl-4 pr-12 rounded-xl border border-border bg-white dark:bg-slate-800 text-foreground placeholder:text-muted-foreground
              focus:outline-none focus:border-fdt-yellow-dark  focus:ring-2 focus:ring-fdt-yellow-dark/20 dark:focus:ring-yellow-700/20
              hover:border-fdt-yellow-dark/80"
          />
          {query.trim() && (
            <button
              type="button"
              onClick={() => { setQuery(''); searchInputRef.current?.focus(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted"
              aria-label="Clear"
            >
              <Cross2Icon className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Category tabs - horizontal scroll */}
      <div className="flex items-center gap-1 px-2 pb-2 border-b border-border overflow-x-auto scrollbar-none -webkit-overflow-scrolling-touch">
        <button
          onClick={() => handleCategoryClick('all')}
          onContextMenu={(e) => handleCategoryRightClick(e, 'all')}
          className={`flex items-center gap-1 min-h-[44px] px-3 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${activeCategory === 'all' ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'}`}
        >
          All {activeCategory === 'all' && Object.keys(availableCategories).length > 0 && <span className="text-xs opacity-70">{formatCount(getAllCount())}</span>}
        </button>
        {categories.filter((c) => c.key !== 'all').map((cat) => {
          const isActive = activeCategory === cat.key || selectedCategories.includes(cat.key);
          const count = availableCategories[getCategoryKeyForSearch(cat.key)] ?? (activeCategory === 'all' ? undefined : undefined);
          return (
            <button
              key={cat.key}
              onClick={() => handleCategoryClick(cat.key)}
              onContextMenu={(e) => handleCategoryRightClick(e, cat.key)}
              className={`flex items-center gap-1 min-h-[44px] px-3 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${isActive ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {cat.label} {count !== undefined && <span className="text-xs opacity-70">{formatCount(count)}</span>}
            </button>
          );
        })}
      </div>

      {/* Results - single column, generous spacing */}
      <main className="flex-1 px-2 py-4 overflow-auto">
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="mt-3 text-sm text-muted-foreground">Searching…</p>
          </div>
        )}
        {!loading && query.trim() && results.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">No results for &quot;{query}&quot;</div>
        )}
        {!loading && results.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-3">
              {results.map((r, i) => (
                <ResultCard key={r.id ?? i} result={r} />
              ))}
            </div>
            {currentPage < totalPages && (
              <div className="flex flex-col items-center gap-3 mt-6 pb-8">
                {searchInfo && (
                  <p className="text-xs text-muted-foreground">
                    {allResults.length} of {searchInfo.totalHits.toLocaleString()}
                  </p>
                )}
                <button
                  onClick={loadMoreResults}
                  disabled={loadingMore}
                  className="min-h-[48px] px-6 rounded-xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 focus:border-fdt-yellow-dark dark:focus:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-fdt-yellow-dark/20 dark:focus:ring-yellow-700/20 disabled:opacity-50"
                >
                  {loadingMore ? 'Loading…' : 'Load more'}
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ProSearchPage;
