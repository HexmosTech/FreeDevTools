import BottomPagination from "@/components/BottomPagination";
import Pagination from "@/components/Pagination";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { Filter, Search, Star } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import McpSkeleton from "./_McpSkeleton";

// Helper function to convert category icons to emojis
const getCategoryEmoji = (icon: string): string => {
  const iconMap: Record<string, string> = {
    'pickaxe': '⛏️',
    'code': '💻',
    'brain': '🧠',
    'cloud-upload': '☁️',
    'shield': '🛡️',
    'bitcoin': '₿',
    'browser': '🌐',
    'cloud': '☁️',
    'message-circle': '💬',
    'palette': '🎨',
    'database': '🗄️',
    'terminal': '💻',
    'users': '👥',
    'star': '⭐',
    'tool': '🔧'
  };
  return iconMap[icon] || '🔧';
};

// Helper function to get category description with fallback
const getCategoryDescription = (description: string, categoryName: string): string => {
  if (description && description.trim() !== '') {
    return description;
  }
  return `Explore MCP repositories in the ${categoryName} category`;
};

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  serverCount: number;
  url: string;
}

interface McpProps {
  serversCount: number;
  toolsCount: number;
  clientsCount: number;
  categoriesCount: number;
  categories: Category[];
  breadcrumbItems?: BreadcrumbItem[];
}

const Mcp: React.FC<McpProps> = ({ serversCount, toolsCount, clientsCount, categoriesCount, categories, breadcrumbItems }) => {
  const [loaded, setLoaded] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Get current page from URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page') || '1', 10);
    const items = parseInt(urlParams.get('items') || '30', 10);

    setCurrentPage(Math.max(1, page));
    setItemsPerPage(items);
  }, []);

  // Filter categories based on search query
  const filterCategories = useCallback((categories: Category[], query: string) => {
    let filtered = categories;

    // Apply search filter
    if (query.trim()) {
      const searchLower = query.toLowerCase();
      filtered = categories.filter(category =>
        category.name.toLowerCase().includes(searchLower) ||
        category.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, []);

  // Get filtered and paginated categories
  const filteredCategories = filterCategories(categories, searchQuery);
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCategories = filteredCategories.slice(startIndex, endIndex);

  // Update URL without page reload
  const updateURL = useCallback((page: number, items?: number) => {
    const url = new URL(window.location.href);
    if (page === 1) {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', page.toString());
    }

    const currentItems = items || itemsPerPage;
    if (currentItems !== 30) {
      url.searchParams.set('items', currentItems.toString());
    } else {
      url.searchParams.delete('items');
    }

    window.history.pushState({}, '', url.toString());
  }, [itemsPerPage]);

  // Navigate to page
  const goToPage = useCallback((page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    setCurrentPage(page);
    updateURL(page);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, totalPages, updateURL]);

  // Handle items per page change
  const handleItemsPerPageChange = useCallback((newItemsPerPage: number) => {
    const newTotalPages = Math.ceil(filteredCategories.length / newItemsPerPage);
    const newCurrentPage = Math.min(currentPage, newTotalPages);

    setItemsPerPage(newItemsPerPage);
    setCurrentPage(newCurrentPage);
    updateURL(newCurrentPage, newItemsPerPage);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, filteredCategories.length, updateURL]);

  // Handle search
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);




  if (!loaded) {
    return (
      <ToolContainer>
        <ToolHead
          name="MCP Directory"
          description={`Browse ${formatNumber(serversCount)}+ MCP repositories instantly with our comprehensive directory. Find Model Context Protocol servers, tools, and clients by category. Free, no registration required.`}
          breadcrumbItems={breadcrumbItems}
        />
        <McpSkeleton />
      </ToolContainer>
    );
  }

  return (
    <ToolContainer>
      <ToolHead
        name="MCP Directory"
        description={`Browse ${formatNumber(serversCount)}+ MCP repositories instantly with our comprehensive directory. Find Model Context Protocol servers, tools, and clients by category. Free, no registration required.`}
        breadcrumbItems={breadcrumbItems}
      />

      {/* Overview Stats */}
      <div className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">{filteredCategories.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{formatNumber(serversCount)}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">MCP Repositories</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mb-6 mt-6">
        <div className="relative">
          <input
            type="text"
            id="category-search"
            placeholder="Search categories by name or description..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        totalItems={filteredCategories.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        itemsLabel="categories"
        onPageChange={goToPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      {/* Categories Grid */}
      <div className="mt-10 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCategories.map((category) => (
            <a
              key={category.id}
              href={category.url}
              className="block p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-inherit no-underline transition-all duration-300 ease-in-out hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1"
            >
              <div className="text-center space-y-3">
                <div className="text-4xl mb-3">{getCategoryEmoji(category.icon)}</div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 line-clamp-2">
                  {category.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {getCategoryDescription(category.description, category.name)}
                </p>
                <Badge variant="outline" className="text-sm">
                  {category.serverCount} servers
                </Badge>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Pagination */}
      <BottomPagination
        totalItems={filteredCategories.length}
        currentPage={currentPage}
        totalPages={totalPages}
        itemsLabel="categories"
        onPageChange={goToPage}
      />


      {/* Features */}
      <div className="mb-10 mt-6">
        <ToolContentCardWrapper>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 text-center">Why Use Our MCP Directory?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <Search className="h-8 w-8 text-blue-600 mx-auto" />
                <h3 className="font-semibold">Powerful Search</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Find exactly what you need with our advanced search and filtering capabilities.
                </p>
              </div>
              <div className="text-center space-y-2">
                <Filter className="h-8 w-8 text-green-600 mx-auto" />
                <h3 className="font-semibold">Smart Filters</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Filter by category, license, platform, and more to find the perfect match.
                </p>
              </div>
              <div className="text-center space-y-2">
                <Star className="h-8 w-8 text-yellow-600 mx-auto" />
                <h3 className="font-semibold">Quality Scores</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  See security, license, and quality scores to make informed decisions.
                </p>
              </div>
            </div>
          </Card>
        </ToolContentCardWrapper>
      </div>


      {/* Credits Section */}
      <div className="mt-10 pt-6 mb-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap gap-4">
          <a
            href="/freedevtools/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            ←  Back to Free DevTools
          </a>
          <a
            href="/freedevtools/mcp/credits"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Credits & Acknowledgments
          </a>
        </div>
      </div>
    </ToolContainer>
  );
};

export default Mcp;
