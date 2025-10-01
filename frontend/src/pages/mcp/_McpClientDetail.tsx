import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead, { type BreadcrumbItem } from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ExternalLink, Globe, Monitor, Scale, Smartphone, Star, Terminal } from "lucide-react";
import React from "react";

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

interface McpClientDetailProps {
  client: Client;
  breadcrumbItems?: BreadcrumbItem[];
}

const McpClientDetail: React.FC<McpClientDetailProps> = ({ client, breadcrumbItems }) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'desktop': return <Monitor className="h-5 w-5" />;
      case 'mobile': return <Smartphone className="h-5 w-5" />;
      case 'cli': return <Terminal className="h-5 w-5" />;
      case 'web': return <Globe className="h-5 w-5" />;
      default: return <Monitor className="h-5 w-5" />;
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-5 w-5 fill-yellow-400/50 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <ToolContainer>
      <ToolHead
        name={client.name}
        description={`${client.description} ${client.platforms.join(', ')} client with ${client.rating}/5 rating.`}
        breadcrumbItems={breadcrumbItems}
      />

      <ToolBody>
        {/* Client Header */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white border">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{client.name}</h1>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {renderStars(client.rating)}
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {client.rating}/5 ({client.ratingCount} reviews)
                      </span>
                    </div>
                    <Badge
                      variant={client.price === 'Free' ? 'default' : 'secondary'}
                      className={client.price === 'Free' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                    >
                      {client.price}
                    </Badge>
                  </div>
                </div>

                <Button asChild>
                  <a href={client.url}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Client
                  </a>
                </Button>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {client.description}
              </p>

              {/* Platforms */}
              <div className="flex flex-wrap gap-2">
                {client.platforms.map((platform) => (
                  <Badge key={platform} variant="outline" className="text-sm flex items-center gap-1">
                    {getPlatformIcon(platform)}
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </ToolContentCardWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Client Info */}
          <ToolCardWrapper>
            <Card className="tool-card-bg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Client Information
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Client ID</span>
                  <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    {client.id}
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Rating</span>
                  <div className="flex items-center gap-1">
                    {renderStars(client.rating)}
                    <span className="ml-1 font-semibold">{client.rating}/5</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Price</span>
                  <Badge
                    variant={client.price === 'Free' ? 'default' : 'secondary'}
                    className={client.price === 'Free' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                  >
                    {client.price}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Language</span>
                  <span className="font-semibold">{client.programmingLanguage}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">License</span>
                  <div className="flex items-center gap-1">
                    <Scale className="h-4 w-4 text-gray-500" />
                    <span className="font-semibold">{client.license}</span>
                  </div>
                </div>
              </div>
            </Card>
          </ToolCardWrapper>

          {/* Platform Support */}
          <ToolCardWrapper>
            <Card className="tool-card-bg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Platform Support
              </h2>
              <div className="space-y-4">
                {client.platforms.map((platform) => (
                  <div key={platform} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getPlatformIcon(platform)}
                      <span className="font-medium">{platform}</span>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Supported
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </ToolCardWrapper>
        </div>

        {/* Installation */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                To get started with {client.name}:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Visit the client's official website or download page</li>
                <li>Download the appropriate version for your platform</li>
                <li>Follow the installation instructions for your operating system</li>
                <li>Configure the client to connect to your preferred MCP servers</li>
                <li>Start using MCP tools through the client interface</li>
              </ol>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For detailed installation and configuration instructions, visit the <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  client's official page
                </a>.
              </p>
            </div>
          </Card>
        </ToolContentCardWrapper>

        {/* About MCP Clients */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">About MCP Clients</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                MCP clients are applications that connect to MCP servers to provide AI agents with
                access to tools and resources. They act as intermediaries between AI models and
                the various services and data sources available through MCP servers.
              </p>
              <p>
                <strong>{client.name}</strong> is a {client.platforms.join(', ')} client that supports
                the Model Context Protocol, allowing you to use MCP tools and resources in your
                AI workflows.
              </p>
              <p>
                <strong>Common uses:</strong> AI agent development, workflow automation, data processing,
                API integration, and content generation.
              </p>
            </div>
          </Card>
        </ToolContentCardWrapper>
      </ToolBody>
    </ToolContainer>
  );
};

export default McpClientDetail;
