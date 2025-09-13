import React, { useState, useEffect, useCallback, useMemo } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import HarFileViewerSkeleton from "./_HarFileViewerSkeleton";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// HAR file types and interfaces
interface HarEntry {
  startedDateTime: string;
  time: number;
  request: {
    method: string;
    url: string;
    headers: Array<{ name: string; value: string }>;
    postData?: {
      mimeType: string;
      text: string;
    };
  };
  response: {
    status: number;
    statusText: string;
    headers: Array<{ name: string; value: string }>;
    content: {
      size: number;
      mimeType: string;
      text?: string;
    };
  };
}

interface HarData {
  log: {
    version: string;
    creator: {
      name: string;
      version: string;
    };
    entries: HarEntry[];
  };
}

type FilterType =
  | "All"
  | "XHR"
  | "JS"
  | "CSS"
  | "Img"
  | "Media"
  | "Other"
  | "Error";

// Utility functions
const getContentType = (mimeType: string): FilterType => {
  if (
    mimeType.includes("application/json") ||
    mimeType.includes("xmlhttprequest")
  )
    return "XHR";
  if (mimeType.includes("javascript") || mimeType.includes("js")) return "JS";
  if (mimeType.includes("css")) return "CSS";
  if (mimeType.includes("image")) return "Img";
  if (mimeType.includes("video") || mimeType.includes("audio")) return "Media";
  return "Other";
};

const getStatusBadgeVariant = (status: number) => {
  if (status >= 200 && status < 300) return "default";
  if (status >= 300 && status < 400) return "secondary";
  if (status >= 400) return "destructive";
  return "outline";
};

const HarFileViewer: React.FC = () => {
  const [harData, setHarData] = useState<HarData | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<FilterType>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleFileUpload = useCallback((file: File) => {
    setError("");

    if (!file.name.endsWith(".har") && !file.name.endsWith(".json")) {
      setError("Please upload a valid HAR file (.har or .json)");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content) as HarData;

        if (!data.log || !data.log.entries) {
          throw new Error("Invalid HAR file format");
        }

        setHarData(data);
        toast.success(`Loaded ${data.log.entries.length} network requests`);
      } catch (err) {
        setError(
          "Failed to parse HAR file. Please ensure it's a valid HAR file."
        );
        toast.error("Failed to parse HAR file");
      }
    };
    reader.readAsText(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileUpload(file);
      }
    },
    [handleFileUpload]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  }, []);

  const filteredEntries = useMemo(() => {
    if (!harData) return [];

    let entries = harData.log.entries;

    // Filter by content type
    if (filter !== "All") {
      entries = entries.filter((entry) => {
        if (filter === "Error") return entry.response.status >= 400;
        return getContentType(entry.response.content.mimeType) === filter;
      });
    }

    // Filter by status code
    if (statusFilter !== "All") {
      const statusRange = statusFilter.split("x")[0];
      entries = entries.filter((entry) =>
        entry.response.status.toString().startsWith(statusRange)
      );
    }

    return entries;
  }, [harData, filter, statusFilter]);

  const uniqueStatusCodes = useMemo(() => {
    if (!harData) return [];
    const codes = new Set(
      harData.log.entries.map((entry) =>
        Math.floor(entry.response.status / 100)
      )
    );
    return Array.from(codes)
      .sort()
      .map((code) => `${code}xx`);
  }, [harData]);

  const handleClear = () => {
    setHarData(null);
    setError("");
    setFilter("All");
    setStatusFilter("All");
    setExpandedEntry(null);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  const getStatusCodeColor = (status: number): string => {
    if (status >= 200 && status < 300)
      return "text-green-600 dark:text-green-400";
    if (status >= 300 && status < 400)
      return "text-yellow-600 dark:text-yellow-400";
    if (status >= 400) return "text-red-600 dark:text-red-400";
    return "text-slate-600 dark:text-slate-400";
  };

  return (
    <ToolContainer>
      <ToolHead
        name="HAR File Viewer"
        description="Analyze HTTP Archive (HAR) files instantly with our free online HAR viewer. Debug network traffic, analyze web performance, and examine HTTP requests with detailed waterfall charts and table views."
      />

      {!loaded ? (
        <HarFileViewerSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle>Upload HAR File</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`relative flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed rounded-lg p-6 transition-colors ${
                    dragActive
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50"
                  }`}
                >
                  <input
                    type="file"
                    accept=".har,.json"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file);
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {dragActive
                        ? "Drop your HAR file here"
                        : "Upload HAR File"}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Drag & drop a .har or .json file, or click to browse
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                      HAR files contain network request data from browser
                      DevTools
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}

                {harData && (
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      <strong>Loaded:</strong> {harData.log.entries.length}{" "}
                      requests
                    </div>
                    <Button onClick={handleClear} variant="outline" size="sm">
                      Clear
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* HAR Analysis */}
            {harData && (
              <>
                <Card className="tool-card-bg">
                  <CardHeader>
                    <CardTitle>Filter Requests</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {(
                        [
                          "All",
                          "XHR",
                          "JS",
                          "CSS",
                          "Img",
                          "Media",
                          "Other",
                          "Error",
                        ] as FilterType[]
                      ).map((type) => (
                        <Button
                          key={type}
                          variant={filter === type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setFilter(type)}
                          className="text-xs"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>

                    <div>
                      <Select
                        value={statusFilter}
                        onValueChange={setStatusFilter}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Filter by status code" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All">All Status Codes</SelectItem>
                          {uniqueStatusCodes.map((code) => (
                            <SelectItem key={code} value={code}>
                              {code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Showing {filteredEntries.length} of{" "}
                      {harData.log.entries.length} requests
                    </div>
                  </CardContent>
                </Card>

                <Card className="tool-card-bg">
                  <CardHeader>
                    <CardTitle>Network Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="min-w-[300px]">URL</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Time</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredEntries.map((entry, index) => (
                            <TableRow
                              key={index}
                              className={`cursor-pointer ${
                                expandedEntry === index ? "bg-muted/50" : ""
                              }`}
                              onClick={() =>
                                setExpandedEntry(
                                  expandedEntry === index ? null : index
                                )
                              }
                            >
                              <TableCell className="font-mono text-sm max-w-[300px] truncate">
                                {entry.request.url}
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {entry.request.method}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={getStatusBadgeVariant(
                                    entry.response.status
                                  )}
                                >
                                  {entry.response.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-sm">
                                {getContentType(
                                  entry.response.content.mimeType
                                )}
                              </TableCell>
                              <TableCell className="text-sm">
                                {formatFileSize(entry.response.content.size)}
                              </TableCell>
                              <TableCell className="text-sm">
                                {formatTime(entry.time)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {filteredEntries.length === 0 && (
                      <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                        No requests match the current filter criteria
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Expanded Request Details */}
                {expandedEntry !== null && filteredEntries[expandedEntry] && (
                  <Card className="tool-card-bg">
                    <CardHeader>
                      <CardTitle>Request Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">General</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>URL:</strong>{" "}
                              {filteredEntries[expandedEntry].request.url}
                            </div>
                            <div>
                              <strong>Method:</strong>{" "}
                              {filteredEntries[expandedEntry].request.method}
                            </div>
                            <div>
                              <strong>Status:</strong>{" "}
                              {filteredEntries[expandedEntry].response.status}{" "}
                              {
                                filteredEntries[expandedEntry].response
                                  .statusText
                              }
                            </div>
                            <div>
                              <strong>Started:</strong>{" "}
                              {new Date(
                                filteredEntries[expandedEntry].startedDateTime
                              ).toLocaleString()}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Response Headers</h4>
                          <div className="bg-slate-50 dark:bg-slate-800 rounded p-3 font-mono text-xs max-h-40 overflow-y-auto">
                            {filteredEntries[
                              expandedEntry
                            ].response.headers.map((header, idx) => (
                              <div key={idx} className="flex">
                                <span className="font-medium text-blue-600 dark:text-blue-400 min-w-[200px]">
                                  {header.name}:
                                </span>
                                <span className="ml-2">{header.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Request Headers</h4>
                          <div className="bg-slate-50 dark:bg-slate-800 rounded p-3 font-mono text-xs max-h-40 overflow-y-auto">
                            {filteredEntries[expandedEntry].request.headers.map(
                              (header, idx) => (
                                <div key={idx} className="flex">
                                  <span className="font-medium text-green-600 dark:text-green-400 min-w-[200px]">
                                    {header.name}:
                                  </span>
                                  <span className="ml-2">{header.value}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>
                  HAR Files and Network Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    HTTP Archive (HAR) files are JSON-formatted archives of HTTP
                    transactions that capture detailed information about web
                    page loading performance. These files are generated by web
                    browsers and contain comprehensive data about network
                    requests, responses, timing information, and resource
                    loading patterns essential for web performance analysis.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        HAR File Contents
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Network Requests:</strong> Complete HTTP
                            request and response data
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Timing Information:</strong> DNS lookup,
                            connection, and transfer times
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Headers & Cookies:</strong> Complete
                            request/response headers and cookie data
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Content Data:</strong> Response bodies and
                            file sizes
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        How to Generate HAR Files
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Open browser DevTools (F12) → Network tab</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Reload the page to capture network activity
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Right-click in Network panel → "Save all as HAR"
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Available in Chrome, Firefox, Safari, and Edge
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Automated tools like Selenium can also generate HAR
                            files
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example HAR file structure
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      {`{
  "log": {
    "version": "1.2",
    "creator": {"name": "Chrome", "version": "96.0"},
    "entries": [
      {
        "startedDateTime": "2024-01-15T10:30:00.000Z",
        "time": 245,
        "request": {
          "method": "GET",
          "url": "https://example.com/api/data",
          "headers": [...]
        },
        "response": {
          "status": 200,
          "headers": [...],
          "content": {"size": 1024, "mimeType": "application/json"}
        }
      }
    ]
  }
}`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Web Performance Analysis with HAR Files</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Performance Metrics */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            ⚡
                          </span>
                        </span>
                        Performance Insights
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Total Load Time:</strong> Analyze complete
                            page loading performance
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Resource Bottlenecks:</strong> Identify
                            slow-loading assets and API calls
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Network Timing:</strong> DNS, connection,
                            and transfer time breakdown
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Size Analysis:</strong> Identify oversized
                            resources and optimization opportunities
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Debugging Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            🔍
                          </span>
                        </span>
                        Debugging Applications
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Error Analysis:</strong> Debug failed
                            requests and response codes
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Security Headers:</strong> Verify HTTPS,
                            CORS, and security policy implementation
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Caching Behavior:</strong> Analyze cache
                            headers and browser caching patterns
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Third-party Services:</strong> Monitor
                            external service performance and reliability
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Optimization Strategies */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            🚀
                          </span>
                        </span>
                        Optimization Strategies
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Resource Consolidation:</strong> Identify
                            opportunities to combine CSS/JS files
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Compression Analysis:</strong> Verify
                            gzip/brotli compression implementation
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>CDN Performance:</strong> Evaluate content
                            delivery network effectiveness
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Critical Path:</strong> Optimize
                            render-blocking resources and loading order
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Team Collaboration */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            👥
                          </span>
                        </span>
                        Team Collaboration
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Issue Reproduction:</strong> Share exact
                            network conditions with developers
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Performance Baselines:</strong> Create
                            benchmarks for regression testing
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>QA Documentation:</strong> Provide detailed
                            evidence for bug reports
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Client Communication:</strong> Demonstrate
                            performance issues to stakeholders
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>🔒 Privacy Note:</strong> HAR files may contain
                      sensitive information including cookies, authorization
                      headers, and personal data. Always review and sanitize HAR
                      files before sharing them with others or uploading to
                      third-party services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default HarFileViewer;
