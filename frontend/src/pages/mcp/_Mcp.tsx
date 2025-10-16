import CreditsButton from "@/components/buttons/CreditsButton";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { Filter, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import AdBanner from "../../components/banner/AdBanner";
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
// 
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
  currentPage?: number;
  lastPage?: number;
  totalPages?: number;
  pageUrl?: {
    current: string;
    prev?: string;
    next?: string;
    first?: string;
    last?: string;
  };
}

const Mcp: React.FC<McpProps> = ({
  serversCount,
  toolsCount,
  clientsCount,
  categoriesCount,
  categories,
  breadcrumbItems,
  currentPage = 1,
  lastPage = 1,
  totalPages = 1,
  pageUrl
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to pagination info only if hash is present in URL
  useEffect(() => {
    if (loaded && window.location.hash === '#pagination-info') {
      const paginationInfo = document.getElementById('pagination-info');
      if (paginationInfo) {
        paginationInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [loaded]);

  // Use categories directly from props (already paginated by Astro) a
  const paginatedCategories = categories;





  if (!loaded) {
    return (
      <ToolContainer>
        <div className="mb-16 mt-[74px]">
          <AdBanner />
        </div>
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
    <>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
        <ToolHead
          name="MCP Directory"
          description={`Browse ${formatNumber(serversCount)}+ MCP repositories instantly with our comprehensive directory. Find Model Context Protocol servers, tools, and clients by category. Free, no registration required.`}
          breadcrumbItems={breadcrumbItems}
        />

        {/* Overview Stats  */}
        <div id="pagination-info" className="text-center">
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{categoriesCount}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{formatNumber(serversCount)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">MCP Repositories</div>
            </div>
          </div>
        </div>

        {/* Pagination Info */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6 mt-8">
          <div className="text-sm text-slate-600 dark:text-slate-400 text-center">
            Showing {paginatedCategories.length} of {categoriesCount} categories (Page {currentPage} of {lastPage})
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCategories.map((category) => (
              <a
                key={category.id}
                href={category.url}
                className="block p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-transparent rounded-lg text-inherit no-underline transition-all duration-300 ease-in-out hover:shadow-md  hover:-translate-y-1"
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
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          {/* Middle section with page numbers */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {pageUrl?.prev ? (
              <a
                href={`${pageUrl.prev}#pagination-info`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
              >
                ← Previous
              </a>
            ) : (
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded cursor-not-allowed">
                ← Previous
              </span>
            )}

            {/* Page Numbers */}
            {pageUrl?.first && currentPage > 3 && (
              <>
                <a
                  href={`${pageUrl.first}#pagination-info`}
                  className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                >
                  1
                </a>
                <span className="px-2 text-slate-400">...</span>
              </>
            )}

            {Array.from({ length: Math.min(5, lastPage) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(lastPage - 4, currentPage - 2)) + i;
              if (pageNum > lastPage) return null;

              const isCurrentPage = pageNum === currentPage;
              const pageUrl = `/freedevtools/mcp/${pageNum}/`;

              return (
                <a
                  key={pageNum}
                  href={`${pageUrl}#pagination-info`}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${isCurrentPage
                    ? 'text-white bg-blue-600 border border-blue-600'
                    : 'text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600'
                    }`}
                >
                  {pageNum}
                </a>
              );
            })}

            {pageUrl?.last && currentPage < lastPage - 2 && (
              <>
                <span className="px-2 text-slate-400">...</span>
                <a
                  href={`${pageUrl.last}#pagination-info`}
                  className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                >
                  {lastPage}
                </a>
              </>
            )}

            {pageUrl?.next ? (
              <a
                href={`${pageUrl.next}#pagination-info`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
              >
                Next →
              </a>
            ) : (
              <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded cursor-not-allowed">
                Next →
              </span>
            )}
          </div>

          {/* Bottom section with info and go to page */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Page {currentPage} of {lastPage} • {categoriesCount} total categories
            </div>

            {/* Go to page input */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600 dark:text-slate-400">Go to page:</span>
              <input
                type="number"
                min="1"
                max={lastPage}
                defaultValue={currentPage}
                className="w-16 px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const pageNum = parseInt((e.target as HTMLInputElement).value);
                    const totalPages = parseInt((e.target as HTMLInputElement).max);
                    if (pageNum >= 1 && pageNum <= totalPages) {
                      const url = pageNum === 1 ? '/freedevtools/mcp/#pagination-info' : `/freedevtools/mcp/${pageNum}/#pagination-info`;
                      window.location.href = url;
                    }
                  }
                }}
              />
              <button
                onClick={() => {
                  const input = document.querySelector('input[type="number"]') as HTMLInputElement;
                  const pageNum = parseInt(input.value);
                  const totalPages = parseInt(input.max);
                  if (pageNum >= 1 && pageNum <= totalPages) {
                    const url = pageNum === 1 ? '/freedevtools/mcp/#pagination-info' : `/freedevtools/mcp/${pageNum}/#pagination-info`;
                    window.location.href = url;
                  }
                }}
                className="px-3 py-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
              >
                Go
              </button>
            </div>
          </div>
        </div>


        {/* Features */}
        <div className="mb-10 mt-6">
          <ToolContentCardWrapper>
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 text-center">Why Use Our MCP Directory?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Filter className="h-8 w-8 text-blue-600 mx-auto" />
                  <h3 className="font-semibold">Smart Categories</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Browse organized categories to find the perfect MCP servers for your needs.
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
            <CreditsButton href="/freedevtools/mcp/credits/" />
          </div>
        </div>
      </ToolContainer >
    </>
  );
};

export default Mcp;
