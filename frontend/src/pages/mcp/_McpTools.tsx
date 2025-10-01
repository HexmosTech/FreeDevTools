import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import ToolHead, { type BreadcrumbItem } from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber } from "@/lib/utils";
import { ExternalLink, Search, Wrench } from "lucide-react";
import React, { useState } from "react";
import McpToolsSkeleton from "./_McpToolsSkeleton";

interface Tool {
  id: string;
  name: string;
  serverId: string;
  serverName: string;
  description: string;
  license: string;
  url: string;
  category: string;
}

interface McpToolsProps {
  initialTools: Tool[];
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
  filters: {
    categories: Record<string, number>;
    servers: Record<string, number>;
  };
  totalPages: number;
  breadcrumbItems?: BreadcrumbItem[];
}

const McpTools: React.FC<McpToolsProps> = ({
  initialTools,
  pagination,
  filters,
  totalPages,
  breadcrumbItems
}) => {
  const [tools, setTools] = useState<Tool[]>(initialTools);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedServer, setSelectedServer] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleServerFilter = (server: string) => {
    setSelectedServer(server);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
  };

  // Filter and sort tools
  const filteredTools = tools
    .filter((tool) => {
      const matchesSearch = searchTerm === "" ||
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.serverName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "all" ||
        tool.category === selectedCategory;

      const matchesServer = selectedServer === "all" ||
        tool.serverId === selectedServer;

      return matchesSearch && matchesCategory && matchesServer;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "server":
          return a.serverName.localeCompare(b.serverName);
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });


  if (loading) {
    return (
      <ToolContainer>
        <ToolHead
          name="MCP Tools"
          description="Explore 36,000+ Model Context Protocol tools for AI agents. Find tools for web scraping, code execution, communication, and more."
          breadcrumbItems={breadcrumbItems}
        />
        <McpToolsSkeleton />
      </ToolContainer>
    );
  }

  return (
    <ToolContainer>
      <ToolHead
        name="MCP Tools"
        description="Explore 36,000+ Model Context Protocol tools for AI agents. Find tools for web scraping, code execution, communication, and more."
        breadcrumbItems={breadcrumbItems}
      />

      <ToolBody>
        <ToolContentCardWrapper>
          <Card className="p-6">
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search tools..."
                      value={searchTerm}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Select value={selectedCategory} onValueChange={handleCategoryFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {Object.entries(filters.categories).map(([category, count]) => (
                        <SelectItem key={category} value={category}>
                          {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} ({formatNumber(count)})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedServer} onValueChange={handleServerFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Server" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Servers</SelectItem>
                      {Object.entries(filters.servers).map(([server, count]) => (
                        <SelectItem key={server} value={server}>
                          {server.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} ({formatNumber(count)})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={handleSort}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="serverName">Server</SelectItem>
                      <SelectItem value="category">Category</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{formatNumber(pagination.total)}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{Object.keys(filters.categories).length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{Object.keys(filters.servers).length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Servers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{totalPages}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Pages</div>
                </div>
              </div>
            </div>
          </Card>
        </ToolContentCardWrapper>

        <ToolGridContainer>
          {filteredTools.map((tool) => (
            <ToolCardWrapper key={tool.id}>
              <Card className="tool-card-bg-grid p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Wrench className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-lg">{tool.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        from <span className="font-medium">{tool.serverName}</span>
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={tool.url}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {tool.description}
                  </p>

                  {/* Category and License */}
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {tool.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {tool.license}
                    </Badge>
                  </div>

                  {/* Server Info */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Server:</span>
                      <span className="text-xs font-medium">{tool.serverName}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </ToolCardWrapper>
          ))}
        </ToolGridContainer>

      </ToolBody>
    </ToolContainer>
  );
};

export default McpTools;
