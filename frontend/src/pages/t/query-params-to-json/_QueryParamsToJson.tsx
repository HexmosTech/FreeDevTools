import React, { useState, useCallback, useEffect } from "react";
import { toast } from "@/components/ToastProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/copy-button";
import { Badge } from "@/components/ui/badge";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import QueryParamsToJsonSkeleton from "./_QueryParamsToJsonSkeleton";

interface QueryParam {
  key: string;
  value: string;
}

export default function QueryParamsToJson() {
  const [queryString, setQueryString] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [parsedParams, setParsedParams] = useState<QueryParam[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const parseQueryParams = useCallback((queryStr: string) => {
    try {
      setError("");

      // Clean the query string - remove leading ? or & if present
      const cleanQuery = queryStr.replace(/^[?&]/, "");

      if (!cleanQuery.trim()) {
        setJsonOutput("{}");
        setParsedParams([]);
        return;
      }

      const params: Record<string, any> = {};
      const paramsList: QueryParam[] = [];

      // Split by & and process each parameter
      const pairs = cleanQuery.split("&");

      pairs.forEach((pair) => {
        if (!pair) return;

        const [key, ...valueParts] = pair.split("=");
        const value = valueParts.join("="); // Handle values with = in them

        if (key) {
          const decodedKey = decodeURIComponent(key);
          const decodedValue = value ? decodeURIComponent(value) : "";

          // Handle array notation (key[])
          if (decodedKey.endsWith("[]")) {
            const arrayKey = decodedKey.slice(0, -2);
            if (!params[arrayKey]) {
              params[arrayKey] = [];
            }
            params[arrayKey].push(decodedValue);
          } else {
            // If key already exists, convert to array
            if (params[decodedKey]) {
              if (Array.isArray(params[decodedKey])) {
                params[decodedKey].push(decodedValue);
              } else {
                params[decodedKey] = [params[decodedKey], decodedValue];
              }
            } else {
              params[decodedKey] = decodedValue;
            }
          }

          paramsList.push({ key: decodedKey, value: decodedValue });
        }
      });

      const jsonStr = JSON.stringify(params, null, 2);
      setJsonOutput(jsonStr);
      setParsedParams(paramsList);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to parse query parameters";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  }, []);

  const handleInputChange = (value: string) => {
    setQueryString(value);
    parseQueryParams(value);
  };

  const handleClear = () => {
    setQueryString("");
    setJsonOutput("");
    setParsedParams([]);
    setError("");
  };

  const handleCopyJson = () => {
    if (jsonOutput) {
      navigator.clipboard.writeText(jsonOutput);
      toast.success("JSON copied to clipboard!");
    }
  };

  const exampleQueries = [
    "name=John&age=30&city=New York",
    "colors[]=red&colors[]=blue&colors[]=green",
    "search=react%20tutorial&category=programming&page=1",
    "utm_source=google&utm_medium=cpc&utm_campaign=summer_sale&product_id=123",
  ];

  return (
    <ToolContainer>
      <ToolHead
        name="Query Params To JSON"
        description="Convert URL query parameters to JSON format instantly with our free online converter. Parse query strings from URLs, form data, and API endpoints into structured JSON objects with real-time validation."
      />

      {!loaded ? (
        <QueryParamsToJsonSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6">
                {/* Input and Output Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Query Parameters Input - Left Side */}
                  <div className="space-y-3">
                    <label
                      htmlFor="query-input"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Query Parameters
                    </label>
                    <Textarea
                      id="query-input"
                      placeholder="Enter query parameters (e.g., name=John&age=30&city=New York)"
                      value={queryString}
                      onChange={(e) => handleInputChange(e.target.value)}
                      className="min-h-[200px] font-mono text-sm"
                    />
                  </div>

                  {/* JSON Output - Right Side */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        JSON Output
                      </label>
                      <CopyButton text={jsonOutput} disabled={!jsonOutput} />
                    </div>
                    <Textarea
                      readOnly
                      value={jsonOutput}
                      placeholder="Converted JSON will appear here..."
                      className="min-h-[200px] font-mono text-sm bg-muted/50"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button onClick={handleClear} variant="outline">
                    Clear
                  </Button>
                </div>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}
              </CardContent>
            </Card>
         
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Understanding Query Parameters in REST APIs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Query parameters are a fundamental part of REST API design and URL structure. They provide a way to pass data to web servers as key-value pairs appended to the URL after a question mark (?). Understanding how to work with query parameters is essential for API development and web application integration.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Query Parameter Structure
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Basic Format:</strong> ?key=value&key2=value2
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>URL Encoding:</strong> Special characters are encoded (space = %20)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Arrays:</strong> colors[]=red&colors[]=blue or colors=red&colors=blue
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Empty Values:</strong> Optional parameters can have empty values
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Common Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>API pagination and filtering</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Search functionality</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Configuration options</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Analytics and tracking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Form data transmission</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example API Endpoint with Query Parameters
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-blue-600 dark:text-blue-400">
                        GET
                      </span>
                      <span className="text-slate-600 dark:text-slate-400"> </span>
                      <span className="text-green-600 dark:text-green-400">
                        /api/products
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">?</span>
                      <span className="text-purple-600 dark:text-purple-400">
                        category=electronics&page=2&limit=20&sort=price
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>REST API Query Parameter Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* API Design Patterns */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">🔧</span>
                        </span>
                        API Design Patterns
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Pagination:</strong> Use limit, offset, page, or cursor-based parameters for large datasets
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Filtering:</strong> Enable filtering with field names as parameters (status=active)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Sorting:</strong> Use sort or order_by parameters with field names and directions
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Field Selection:</strong> Allow clients to specify which fields to return (fields=name,email)
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Data Processing */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">⚙️</span>
                        </span>
                        Data Processing
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>URL Decoding:</strong> Always decode URL-encoded parameters before processing
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Type Conversion:</strong> Convert string parameters to appropriate data types
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Validation:</strong> Validate parameter values and provide meaningful error messages
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Default Values:</strong> Provide sensible defaults for optional parameters
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Security Considerations */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-red-600 dark:text-red-400">🔒</span>
                        </span>
                        Security & Performance
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Input Sanitization:</strong> Sanitize all query parameters to prevent injection attacks
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Rate Limiting:</strong> Implement rate limiting to prevent abuse of parameter-heavy endpoints
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Parameter Limits:</strong> Set reasonable limits on parameter length and count
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Caching Strategy:</strong> Use query parameters in cache keys appropriately
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Development Tools */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">🛠️</span>
                        </span>
                        Development Tools
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Documentation:</strong> Document all query parameters with types and examples
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Testing:</strong> Write comprehensive tests for parameter combinations
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Debugging:</strong> Log parameter parsing errors for troubleshooting
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Schema Validation:</strong> Use schemas to validate parameter structure
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> When designing APIs, consider using JSON in request bodies for complex data structures instead of cramming everything into query parameters. Reserve query parameters for simple filtering, pagination, and configuration options.
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
}
