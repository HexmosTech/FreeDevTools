import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead, { type BreadcrumbItem } from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Scale, Server, Tag, Wrench } from "lucide-react";
import React from "react";

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

interface McpToolDetailProps {
  tool: Tool;
  server?: Server;
  breadcrumbItems?: BreadcrumbItem[];
}

const McpToolDetail: React.FC<McpToolDetailProps> = ({ tool, server, breadcrumbItems }) => {
  return (
    <ToolContainer>
      <ToolHead
        name={tool.name}
        description={`${tool.description} Part of the ${tool.serverName} MCP server.`}
        breadcrumbItems={breadcrumbItems}
      />

      <ToolBody>
        {/* Tool Header */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="h-8 w-8 text-blue-600" />
                    <h1 className="text-3xl font-bold">{tool.name}</h1>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    from <a
                      href={server?.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {tool.serverName}
                    </a>
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <Button asChild>
                  <a href={tool.url}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Tool
                  </a>
                </Button>
              </div>

              {/* Category and License */}
              <div className="flex gap-2">
                <Badge variant="outline" className="text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tool.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Scale className="h-3 w-3 mr-1" />
                  {tool.license}
                </Badge>
              </div>
            </div>
          </Card>
        </ToolContentCardWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tool Info */}
          <ToolCardWrapper>
            <Card className="tool-card-bg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Tool Information
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Tool ID</span>
                  <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    {tool.id}
                  </code>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Category</span>
                  <span className="font-semibold">
                    {tool.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">License</span>
                  <span className="font-semibold">{tool.license}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Server</span>
                  <a
                    href={server?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {tool.serverName}
                  </a>
                </div>
              </div>
            </Card>
          </ToolCardWrapper>

          {/* Server Info */}
          {server && (
            <ToolCardWrapper>
              <Card className="tool-card-bg p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Server Information
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Author</span>
                    <a
                      href={server.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {server.author}
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Total Tools</span>
                    <span className="font-semibold">{server.stats.tools}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">GitHub Stars</span>
                    <span className="font-semibold">{server.stats.githubStars}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Last Updated</span>
                    <span className="font-semibold">{server.stats.lastUpdated}</span>
                  </div>
                </div>
              </Card>
            </ToolCardWrapper>
          )}
        </div>

        {/* Usage */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Usage</h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                This tool is part of the <strong>{tool.serverName}</strong> MCP server. To use this tool:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Install the MCP server that contains this tool</li>
                <li>Configure your MCP client to connect to the server</li>
                <li>Use the tool through your MCP client's interface</li>
                <li>Refer to the server documentation for specific usage instructions</li>
              </ol>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For more detailed usage instructions, visit the <a
                  href={server?.githubUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  server's GitHub repository
                </a>.
              </p>
            </div>
          </Card>
        </ToolContentCardWrapper>

        {/* About MCP Tools */}
        <ToolContentCardWrapper>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">About MCP Tools</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                MCP tools are individual functions or capabilities provided by MCP servers. Each tool
                performs a specific task that AI agents can call to accomplish their objectives.
              </p>
              <p>
                The <strong>{tool.name}</strong> tool is designed for {tool.category.replace('-', ' ')}
                tasks and is part of the {tool.serverName} server ecosystem.
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

export default McpToolDetail;
