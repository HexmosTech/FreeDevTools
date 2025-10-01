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
import { Download, ExternalLink, Github, Search, Star } from "lucide-react";
import React, { useState } from "react";
import McpServersSkeleton from "./_McpServersSkeleton";

interface Server {
  id: string;
  name: string;
  author: string;
  authorUrl: string;
  description: string;
  isOfficial: boolean;
  categories: string[];
  scores: {
    security: string;
    license: string;
    quality: string;
  };
  stats: {
    tools: number;
    weeklyDownloads: number;
    githubStars: number;
    lastUpdated: string;
  };
  license: string;
  url: string;
  githubUrl: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  serverCount: number;
  url: string;
}

interface McpServersProps {
  initialServers: Server[];
  categories: Category[];
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
  filters: {
    categories: Record<string, number>;
    licenses: Record<string, number>;
    scores: Record<string, Record<string, number>>;
  };
  totalPages: number;
  breadcrumbItems?: BreadcrumbItem[];
}

const McpServers: React.FC<McpServersProps> = ({
  initialServers,
  categories,
  pagination,
  filters,
  totalPages,
  breadcrumbItems
}) => {
  const [servers, setServers] = useState<Server[]>(initialServers);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLicense, setSelectedLicense] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleLicenseFilter = (license: string) => {
    setSelectedLicense(license);
    setCurrentPage(1);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'A': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'B': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'C': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'D': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'F': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };


  if (loading) {
    return (
      <ToolContainer>
        <ToolHead
          name="MCP Servers"
          description="Browse 36,000+ Model Context Protocol servers for AI agents. Find servers by category, filter by license, and discover the perfect MCP server for your project."
        />
        <McpServersSkeleton />
      </ToolContainer>
    );
  }

  return (
    <ToolContainer>
      <ToolHead
        name="MCP Servers"
        description="Browse 36,000+ Model Context Protocol servers for AI agents. Find servers by category, filter by license, and discover the perfect MCP server for your project."
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
                      placeholder="Search servers..."
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
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name} ({formatNumber(category.serverCount)})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedLicense} onValueChange={handleLicenseFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="License" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Licenses</SelectItem>
                      {Object.entries(filters.licenses).map(([license, count]) => (
                        <SelectItem key={license} value={license}>
                          {license} ({formatNumber(count)})
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
                      <SelectItem value="lastUpdated">Last Updated</SelectItem>
                      <SelectItem value="githubStars">GitHub Stars</SelectItem>
                      <SelectItem value="weeklyDownloads">Downloads</SelectItem>
                      <SelectItem value="tools">Tools Count</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{formatNumber(pagination.total)}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Servers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{categories.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{Object.keys(filters.licenses).length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Licenses</div>
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
          {servers.map((server) => (
            <ToolCardWrapper key={server.id}>
              <Card className="tool-card-bg-grid p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{server.name}</h3>
                        {server.isOfficial && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            Official
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        by <a href={server.authorUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {server.author}
                        </a>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={server.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={server.url}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {server.description}
                  </p>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1">
                    {server.categories.slice(0, 3).map((category) => (
                      <Badge key={category} variant="outline" className="text-xs">
                        {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                    ))}
                    {server.categories.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{server.categories.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Scores */}
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Security:</span>
                      <Badge className={`text-xs ${getScoreColor(server.scores.security)}`}>
                        {server.scores.security}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600 dark:text-gray-400">License:</span>
                      <Badge className={`text-xs ${getScoreColor(server.scores.license)}`}>
                        {server.scores.license}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Quality:</span>
                      <Badge className={`text-xs ${getScoreColor(server.scores.quality)}`}>
                        {server.scores.quality}
                      </Badge>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {formatNumber(server.stats.githubStars)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      {formatNumber(server.stats.weeklyDownloads)}/week
                    </div>
                    <div className="text-xs">
                      {server.stats.tools} tools
                    </div>
                    <div className="text-xs">
                      {server.stats.lastUpdated}
                    </div>
                  </div>

                  {/* License */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-400">License:</span>
                      <Badge variant="outline" className="text-xs">
                        {server.license}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </ToolCardWrapper>
          ))}
        </ToolGridContainer>

        {/* Pagination */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <div className="flex justify-center">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </Button>
                <span className="flex items-center px-4 text-sm text-gray-600 dark:text-gray-400">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </Card>
        </ToolContentCardWrapper>
      </ToolBody>
    </ToolContainer>
  );
};

export default McpServers;
