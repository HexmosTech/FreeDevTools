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
import { ExternalLink, Globe, Monitor, Search, Smartphone, Star, Terminal } from "lucide-react";
import React, { useState } from "react";
import McpClientsSkeleton from "./_McpClientsSkeleton";

interface Client {
  id: string;
  name: string;
  description: string;
  logo: string;
  rating: number;
  ratingCount: number;
  price: string;
  platforms: string[];
  programmingLanguage: string;
  license: string;
  url: string;
}

interface McpClientsProps {
  initialClients: Client[];
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
  filters: {
    platforms: Record<string, number>;
    prices: Record<string, number>;
    programmingLanguages: Record<string, number>;
  };
  totalPages: number;
  breadcrumbItems?: BreadcrumbItem[];
}

const McpClients: React.FC<McpClientsProps> = ({
  initialClients,
  pagination,
  filters,
  totalPages,
  breadcrumbItems
}) => {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePlatformFilter = (platform: string) => {
    setSelectedPlatform(platform);
    setCurrentPage(1);
  };

  const handlePriceFilter = (price: string) => {
    setSelectedPrice(price);
    setCurrentPage(1);
  };

  const handleLanguageFilter = (language: string) => {
    setSelectedLanguage(language);
    setCurrentPage(1);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'desktop': return <Monitor className="h-4 w-4" />;
      case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'cli': return <Terminal className="h-4 w-4" />;
      case 'web': return <Globe className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  if (loading) {
    return (
      <ToolContainer>
        <ToolHead
          name="MCP Clients"
          description="Discover 36,000+ Model Context Protocol clients for AI agents. Find desktop, web, mobile, and CLI clients."
          breadcrumbItems={breadcrumbItems}
        />
        <McpClientsSkeleton />
      </ToolContainer>
    );
  }

  return (
    <ToolContainer>
      <ToolHead
        name="MCP Clients"
        description="Discover 36,000+ Model Context Protocol clients for AI agents. Find desktop, web, mobile, and CLI clients."
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
                      placeholder="Search clients..."
                      value={searchTerm}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Select value={selectedPlatform} onValueChange={handlePlatformFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      {Object.entries(filters.platforms).map(([platform, count]) => (
                        <SelectItem key={platform} value={platform}>
                          {platform} ({formatNumber(count)})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedPrice} onValueChange={handlePriceFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      {Object.entries(filters.prices).map(([price, count]) => (
                        <SelectItem key={price} value={price}>
                          {price} ({formatNumber(count)})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedLanguage} onValueChange={handleLanguageFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Languages</SelectItem>
                      {Object.entries(filters.programmingLanguages).map(([language, count]) => (
                        <SelectItem key={language} value={language}>
                          {language} ({formatNumber(count)})
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
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="platforms">Platform</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{formatNumber(pagination.total)}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{Object.keys(filters.platforms).length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{Object.keys(filters.prices).length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Price Tiers</div>
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
          {clients.map((client) => (
            <ToolCardWrapper key={client.id}>
              <Card className="tool-card-bg-grid p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{client.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {renderStars(client.rating)}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            ({client.ratingCount})
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={client.url}>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {client.description}
                  </p>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2">
                    {client.platforms.map((platform) => (
                      <Badge key={platform} variant="outline" className="text-xs flex items-center gap-1">
                        {getPlatformIcon(platform)}
                        {platform}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and Language */}
                  <div className="flex justify-between items-center">
                    <Badge
                      variant={client.price === 'Free' ? 'default' : 'secondary'}
                      className={client.price === 'Free' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                    >
                      {client.price}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {client.programmingLanguage}
                    </Badge>
                  </div>

                  {/* License */}
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600 dark:text-gray-400">License:</span>
                      <Badge variant="outline" className="text-xs">
                        {client.license}
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

export default McpClients;
