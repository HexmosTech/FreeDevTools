import React, { useState, useEffect } from "react";
import { X, Wrench, BookOpen, FileText, Image, PenLine, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Add TypeScript declaration for our global window properties
declare global {
  interface Window {
    searchState?: {
      query: string;
      setQuery: (query: string) => void;
      getQuery: () => string;
    };
  }
}

// Add type definition for the custom event
interface SearchQueryChangedEvent extends CustomEvent {
  detail: {
    query: string;
  };
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
  [key: string]: any;
}

// Search function for Meilisearch
async function searchUtilities(query: string) {
  try {
    const response = await fetch(
      "https://search.apps.hexmos.com/indexes/freedevtools/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 3a09f79ab07857a3e6130f45b125ad66f8c562a674d305f3209cd28906ccc30f",
        },
        body: JSON.stringify({ q: query }),
      }
    );

    if (!response.ok) {
      throw new Error("Search failed: " + response.statusText);
    }

    const data = await response.json();
    return data.hits || [];
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Add this function to update the URL hash
  const updateUrlHash = (searchQuery: string) => {
    if (searchQuery.trim()) {
      // Set hash with search query
      window.location.hash = `search?q=${encodeURIComponent(searchQuery)}`;
    } else {
      // Clear hash if search is empty
      if (window.location.hash.startsWith('#search')) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    }
  };

  // Check for search terms in hash on initial load
  useEffect(() => {
    // Parse hash fragment on initial load
    const checkHashForSearch = () => {
      if (window.location.hash.startsWith('#search?q=')) {
        try {
          const hashParams = new URLSearchParams(window.location.hash.substring(8)); // Remove '#search?'
          const searchParam = hashParams.get('q');
          if (searchParam) {
            // Update both local state and global search state
            setQuery(searchParam);
            if (window.searchState) {
              window.searchState.setQuery(searchParam);
            }
          }
        } catch (e) {
          console.error('Error parsing hash params:', e);
        }
      }
    };

    checkHashForSearch();
    
    // Also listen for hash changes
    window.addEventListener('hashchange', checkHashForSearch);
    return () => {
      window.removeEventListener('hashchange', checkHashForSearch);
    };
  }, []);

  // Listen for changes to the global search state
  useEffect(() => {
    const handleSearchQueryChange = (event: CustomEvent) => {
      const newQuery = event.detail.query;
      setQuery(newQuery);
      
      // Update URL hash when query changes
      updateUrlHash(newQuery);
    };

    // Add event listener
    window.addEventListener('searchQueryChanged', handleSearchQueryChange as EventListener);
    
    // Initial load from global state if it exists
    if (window.searchState && window.searchState.getQuery()) {
      const initialQuery = window.searchState.getQuery();
      setQuery(initialQuery);
      updateUrlHash(initialQuery);
    }

    return () => {
      window.removeEventListener('searchQueryChanged', handleSearchQueryChange as EventListener);
    };
  }, []);

  // Search with debounce
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      try {
        const searchResults = await searchUtilities(query);
        console.log("Search results:", searchResults);
        setResults(searchResults);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Update URL when query changes manually
  useEffect(() => {
    updateUrlHash(query);
  }, [query]);
  
  // Filter results by category
  const filteredResults = activeCategory === "all" 
    ? results 
    : results.filter(result => result.category?.toLowerCase() === activeCategory.toLowerCase());

  const handleSelect = (result: SearchResult) => {
    if (result.path) {
      // Navigate directly to the path since it already includes the full path
      window.location.href = `https://hexmos.com${result.path}`;
    } else {
      console.warn("No path found for result:", result);
    }
  };

  // When clearing results, ensure we properly update the global search state
  const clearResults = () => {
    // Clear the query in this component
    setQuery('');
    
    // Update the global search state to empty string
    if (window.searchState) {
      window.searchState.setQuery('');
    }
    
    // Clear URL hash
    if (window.location.hash.startsWith('#search')) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };
  
  // If no search query, don't show the search UI
  if (!query.trim()) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-6 py-8">
      {/* Category filter */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium">Search Results for "{query}"</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearResults} // Use our new clearResults function
          >
            <X className="h-4 w-4 mr-1" />
            Clear results
          </Button>
        </div>
        <div className="flex space-x-2 pb-2">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
            className="whitespace-nowrap"
          >
            All
          </Button>
          <Button
            variant={activeCategory === "tools" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("tools")}
            className="whitespace-nowrap"
          >
            <Wrench className="mr-1 h-4 w-4" />
            Tools
          </Button>
          <Button
            variant={activeCategory === "tldr" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("tldr")}
            className="whitespace-nowrap"
          >
            <BookOpen className="mr-1 h-4 w-4" />
            TLDR
          </Button>
          <Button
            variant={activeCategory === "cheatsheet" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("cheatsheet")}
            className="whitespace-nowrap"
          >
            <FileText className="mr-1 h-4 w-4" />
            Cheatsheets
          </Button>
          <Button
            variant={activeCategory === "png" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("png")}
            className="whitespace-nowrap"
          >
            <Image className="mr-1 h-4 w-4" />
            PNG Icons
          </Button>
          <Button
            variant={activeCategory === "svg" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("svg")}
            className="whitespace-nowrap"
          >
            <PenLine className="mr-1 h-4 w-4" />
            SVG Icons
          </Button>
          <Button
            variant={activeCategory === "emoji" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("emoji")}
            className="whitespace-nowrap"
          >
            <Smile className="mr-1 h-4 w-4" />
            Emojis
          </Button>
        </div>
      </div>

      {loading && (
        <div className="text-center p-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-2 text-muted-foreground">Searching...</p>
        </div>
      )}

      {!loading && results.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">
            No results found for "{query}"
          </p>
        </div>
      )}

      {!loading && results.length > 0 && filteredResults.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">
            No results found in category <strong>{activeCategory}</strong>
          </p>
          <Button
            variant="link"
            onClick={() => setActiveCategory("all")}
            className="mt-2"
          >
            View all results
          </Button>
        </div>
      )}

      {!loading && filteredResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredResults.map((result, index) => (
            <Card
              key={result.id || index}
              className="cursor-pointer hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
              onClick={() => handleSelect(result)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-medium text-lg">
                    {result.name || result.title || "Untitled"}
                  </h2>
                  {result.category && (
                    <Badge variant="outline" className="text-xs">
                      {result.category}
                    </Badge>
                  )}
                </div>
                {result.description && (
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {result.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;