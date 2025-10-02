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
        <ToolContentCardWrapper>
          <Card className="p-6 mt-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 ">
                Model Context Protocol Directory
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                The largest collection of {formatNumber(serversCount)}+ MCP repositories for AI agents.
                Find everything you need to build powerful AI applications with the Model Context Protocol.
              </p>

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
            </div>
          </Card>
        </ToolContentCardWrapper>


        {/* Categories Section */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Explore {categoriesCount} categories of MCP repositories
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={category.url}
                  className="block p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-inherit no-underline transition-all duration-300 ease-in-out hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1"
                >
                  <div className="text-center space-y-2">
                    <div className="text-3xl mb-2">{getCategoryEmoji(category.icon)}</div>
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 line-clamp-2">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {category.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {category.serverCount} servers
                    </Badge>
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </ToolContentCardWrapper>

        {/* Features */}
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

        {/* About MCP */}
        <ToolContentCardWrapper>
          <Card className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">About Model Context Protocol (MCP)</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                The Model Context Protocol (MCP) is a standardized protocol for managing context between
                large language models (LLMs) and external systems. MCP enables AI agents to access tools,
                resources, and data sources through a unified interface.
              </p>
              <p>
                Our directory contains {formatNumber(serversCount + toolsCount + clientsCount)} MCP resources
                across {categoriesCount} categories, making it the most comprehensive collection of
                Model Context Protocol resources available.
              </p>
              <p>
                <strong>Common uses:</strong> AI agent development, workflow automation, data processing,
                API integration, content generation, and building intelligent applications.
              </p>
            </div>
          </Card>
        </ToolContentCardWrapper>
      </ToolBody>
    </ToolContainer>
  );
};

export default Mcp;
