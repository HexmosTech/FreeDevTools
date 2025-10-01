import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead, { type BreadcrumbItem } from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Award, Calendar, Download, ExternalLink, Github, Scale, Shield, Star } from "lucide-react";
import React from "react";

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

interface McpServerDetailProps {
  server: Server;
  category?: Category;
  breadcrumbItems?: BreadcrumbItem[];
}

const McpServerDetail: React.FC<McpServerDetailProps> = ({ server, category, breadcrumbItems }) => {
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

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const installationCommand = `npm install @${server.author.toLowerCase()}/${server.id}`;

  return (
    <ToolContainer>
      <ToolHead
        name={server.name}
        description={`${server.description} Browse tools, check scores, and get installation instructions for this Model Context Protocol server.`}
        breadcrumbItems={breadcrumbItems}
      />

      <ToolBody>
        {/* Server Header */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-3xl font-bold">{server.name}</h1>
                    {server.isOfficial && (
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Official
                      </Badge>
                    )}
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    by <a
                      href={server.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {server.author}
                    </a>
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {server.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <a href={server.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={server.url}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {server.categories.map((categoryId) => (
                  <Badge key={categoryId} variant="outline" className="text-sm">
                    {categoryId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </ToolContentCardWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats */}
          <ToolCardWrapper>
            <Card className="tool-card-bg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Statistics
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Tools</span>
                  <span className="font-semibold">{server.stats.tools}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">GitHub Stars</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="font-semibold">{formatNumber(server.stats.githubStars)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Weekly Downloads</span>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4 text-blue-500" />
                    <span className="font-semibold">{formatNumber(server.stats.weeklyDownloads)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Last Updated</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="font-semibold">{server.stats.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </Card>
          </ToolCardWrapper>

          {/* Scores */}
          <ToolCardWrapper>
            <Card className="tool-card-bg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Quality Scores
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Security</span>
                  <Badge className={`${getScoreColor(server.scores.security)} font-semibold`}>
                    {server.scores.security}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">License</span>
                  <Badge className={`${getScoreColor(server.scores.license)} font-semibold`}>
                    {server.scores.license}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Quality</span>
                  <Badge className={`${getScoreColor(server.scores.quality)} font-semibold`}>
                    {server.scores.quality}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">License Type</span>
                  <div className="flex items-center gap-1">
                    <Scale className="h-4 w-4 text-gray-500" />
                    <span className="font-semibold">{server.license}</span>
                  </div>
                </div>
              </div>
            </Card>
          </ToolCardWrapper>
        </div>

        {/* Installation */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Installation</h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Install this MCP server using npm:
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono">{installationCommand}</code>
                  <CopyButton text={installationCommand} />
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For more detailed installation instructions, visit the <a
                  href={server.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub repository
                </a>.
              </p>
            </div>
          </Card>
        </ToolContentCardWrapper>

        {/* About MCP */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">About Model Context Protocol (MCP)</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                The Model Context Protocol (MCP) is a standardized protocol for managing context between
                large language models (LLMs) and external systems. MCP servers provide tools and resources
                that AI agents can use to interact with various services and data sources.
              </p>
              <p>
                This server, <strong>{server.name}</strong>, provides {server.stats.tools} tools that can be
                used by AI agents to perform specific tasks. The server is maintained by {server.author}
                and is available under the {server.license} license.
              </p>
              <p>
                <strong>Common uses:</strong> AI agent automation, data processing, API integration,
                content generation, and workflow automation.
              </p>
            </div>
          </Card>
        </ToolContentCardWrapper>
      </ToolBody>
    </ToolContainer>
  );
};

export default McpServerDetail;
