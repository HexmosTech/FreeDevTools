import React, { useState, useEffect, useRef } from "react";
import { Search, X, Wrench, BookOpen, FileText, Image, PenLine, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
            "Bearer 1374cbe72e7c89abad77939a770ec9279a8585c5f5b3744a20b3e2ae7538c852",
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
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Get query from URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    if (queryParam) {
      setQuery(queryParam);
    }

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }

    // Listen for Escape key to go back
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.history.back();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update URL when query changes
  useEffect(() => {
    const url = new URL(window.location.href);
    if (query) {
      url.searchParams.set('q', query);
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState({}, '', url.toString());
  }, [query]);

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

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-6 py-8">
      <div className="mb-4 flex items-center justify-between">
      </div>
      
      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            ref={searchInputRef}
            className="pl-10 pr-10 py-6 bg-background/50 backdrop-blur-sm"
            placeholder="Search dev resources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute inset-y-0 right-0 h-full px-3"
              onClick={() => setQuery("")}
            >
              <X className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
      </div>
      
      {/* Category filter */}
      <div className="mb-8 overflow-x-auto">
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

      {!loading && query && results.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">
            No results found for "{query}"
          </p>
        </div>
      )}

      {!loading && query && results.length > 0 && filteredResults.length === 0 && (
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

      {!loading && !query && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">
            Start typing to search in 50,000+ free dev resources...
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;