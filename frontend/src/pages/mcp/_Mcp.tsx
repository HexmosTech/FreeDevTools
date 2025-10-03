import ToolBody from "@/components/tool/ToolBody";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { Filter, Search, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);


  if (!loaded) {
    return (
      <ToolContainer>
        <ToolHead
          name="MCP Directory"
          description={`Discover ${formatNumber(serversCount)}+ MCP servers, ${formatNumber(toolsCount)}+ tools, and ${formatNumber(clientsCount)}+ clients for AI agents. Browse by category, filter by license, and find the perfect Model Context Protocol resources for your project.`}
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
        description={`Discover ${formatNumber(serversCount)}+ MCP servers, ${formatNumber(toolsCount)}+ tools, and ${formatNumber(clientsCount)}+ clients for AI agents. Browse by category, filter by license, and find the perfect Model Context Protocol resources for your project.`}
        breadcrumbItems={breadcrumbItems}
      />

      <ToolBody>
        {/* Overview Stats */}
        <div className="text-center space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{categoriesCount}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{formatNumber(serversCount)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">MCP Repositories</div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={category.url}
                  className="block p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-inherit no-underline transition-all duration-300 ease-in-out hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1"
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
        </div>


        {/* Features */}
        <div className=" mt-10 mb-10">
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
      </ToolBody>
    </ToolContainer>
  );
};

export default Mcp;
