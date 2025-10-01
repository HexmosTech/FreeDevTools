import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { Filter, Search, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import McpSkeleton from "./_McpSkeleton";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface McpProps {
  serversCount: number;
  toolsCount: number;
  clientsCount: number;
  categoriesCount: number;
  breadcrumbItems?: BreadcrumbItem[];
}

const Mcp: React.FC<McpProps> = ({ serversCount, toolsCount, clientsCount, categoriesCount, breadcrumbItems }) => {
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
                The largest collection of {formatNumber(serversCount + toolsCount + clientsCount)}+ MCP servers, tools, and clients for AI agents.
                Find everything you need to build powerful AI applications with the Model Context Protocol.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{formatNumber(serversCount)}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">MCP Servers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{formatNumber(toolsCount)}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">MCP Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{formatNumber(clientsCount)}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">MCP Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{categoriesCount}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
                </div>
              </div>
            </div>
          </Card>
        </ToolContentCardWrapper>

        {/* Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 mb-8">
          {/* MCP Servers */}
          <ToolCardWrapper>
            <a href="/freedevtools/mcp/servers" className="block p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 rounded-xl text-inherit no-underline transition-all duration-300 ease-in-out shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-white dark:hover:border-white h-full">
              <div className="text-center space-y-4 h-full flex flex-col justify-between">
                <div>
                  <div className="text-6xl mb-4">🖥️</div>
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                    MCP Servers
                  </h3>
                  <p className="text-slate-800 dark:text-slate-400">
                    Browse {formatNumber(serversCount)} Model Context Protocol servers. Find servers by category, filter by license, and discover the perfect MCP server for your project.
                  </p>
                </div>
                <Badge variant="outline" className="text-sm self-center">
                  {formatNumber(serversCount)} servers
                </Badge>
              </div>
            </a>
          </ToolCardWrapper>

          {/* MCP Clients */}
          <ToolCardWrapper>
            <a href="/freedevtools/mcp/clients" className="block p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 rounded-xl text-inherit no-underline transition-all duration-300 ease-in-out shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-white dark:hover:border-white h-full">
              <div className="text-center space-y-4 h-full flex flex-col justify-between">
                <div>
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                    MCP Clients
                  </h3>
                  <p className="text-slate-800 dark:text-slate-400">
                    Discover {formatNumber(clientsCount)} MCP clients for AI agents. Find desktop, web, mobile, and CLI clients for your platform.
                  </p>
                </div>
                <Badge variant="outline" className="text-sm self-center">
                  {formatNumber(clientsCount)} clients
                </Badge>
              </div>
            </a>
          </ToolCardWrapper>
        </div>

        {/* MCP Tools - Full Width */}
        <div className="mb-8">
          <ToolCardWrapper>
            <a href="/freedevtools/mcp/tools" className="block p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 rounded-xl text-inherit no-underline transition-all duration-300 ease-in-out shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-white dark:hover:border-white">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                  MCP Tools
                </h3>
                <p className="text-slate-800 dark:text-slate-400">
                  Explore {formatNumber(toolsCount)} individual MCP tools. Find tools for web scraping, code execution, communication, and more.
                </p>
                <Badge variant="outline" className="text-sm">
                  {formatNumber(toolsCount)} tools
                </Badge>
              </div>
            </a>
          </ToolCardWrapper>
        </div>

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
