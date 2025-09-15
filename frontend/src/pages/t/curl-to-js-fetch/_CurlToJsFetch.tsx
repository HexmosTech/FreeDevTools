import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import CurlToJsFetchSkeleton from "./_CurlToJsFetchSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import ToolVideo from "@/components/tool/ToolVideo";

// cURL to JavaScript Fetch conversion utilities
const convertCurlToFetch = (
  curlCommand: string,
  options: ConversionOptions = {}
): string => {
  try {
    const {
      includeComments = true,
      useAsync = true,
      includeErrorHandling = true,
    } = options;

    // Parse the cURL command
    const parsedCurl = parseCurlCommand(curlCommand);

    // Generate JavaScript fetch code
    let fetchCode = generateFetchCode(parsedCurl, {
      includeComments,
      useAsync,
      includeErrorHandling,
    });

    return fetchCode;
  } catch (error) {
    throw new Error(
      `Failed to convert cURL command: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};

interface ConversionOptions {
  includeComments?: boolean;
  useAsync?: boolean;
  includeErrorHandling?: boolean;
}

interface ParsedCurl {
  url: string;
  method: string;
  headers: Record<string, string>;
  data?: string;
  auth?: { username: string; password: string };
  compressed?: boolean;
  followRedirects?: boolean;
}

const parseCurlCommand = (curlCommand: string): ParsedCurl => {
  const result: ParsedCurl = {
    url: "",
    method: "GET",
    headers: {},
  };

  // Remove 'curl' from the beginning
  let command = curlCommand.trim().replace(/^curl\s+/, "");

  // Parse URL (first non-flag argument or -u/--url)
  const urlMatch =
    command.match(/(?:^|\s)(?:-u|--url)\s+([^\s]+)/) ||
    command.match(/(?:^|\s)(['"]?)([^-\s][^\s]*)\1(?:\s|$)/);
  if (urlMatch) {
    result.url = urlMatch[2] || urlMatch[1];
    result.url = result.url.replace(/['"]/g, "");
  }

  // Parse method
  const methodMatch = command.match(/(?:^|\s)-X\s+([A-Z]+)/i);
  if (methodMatch) {
    result.method = methodMatch[1].toUpperCase();
  }

  // Parse headers
  const headerMatches = command.matchAll(/(?:^|\s)-H\s+(['"])(.*?)\1/g);
  for (const match of headerMatches) {
    const headerLine = match[2];
    const colonIndex = headerLine.indexOf(":");
    if (colonIndex > 0) {
      const key = headerLine.substring(0, colonIndex).trim();
      const value = headerLine.substring(colonIndex + 1).trim();
      result.headers[key] = value;
    }
  }

  // Parse data
  const dataMatch = command.match(
    /(?:^|\s)(?:-d|--data|--data-raw)\s+(['"])(.*?)\1/
  );
  if (dataMatch) {
    result.data = dataMatch[2];
    if (result.method === "GET") {
      result.method = "POST";
    }
  }

  // Parse basic auth
  const authMatch = command.match(/(?:^|\s)-u\s+([^:\s]+):([^\s]+)/);
  if (authMatch) {
    result.auth = { username: authMatch[1], password: authMatch[2] };
  }

  // Parse other flags
  result.compressed = /(?:^|\s)--compressed(?:\s|$)/.test(command);
  result.followRedirects = /(?:^|\s)-L(?:\s|$)/.test(command);

  return result;
};

const generateFetchCode = (
  parsed: ParsedCurl,
  options: ConversionOptions
): string => {
  const { includeComments, useAsync, includeErrorHandling } = options;

  let code = "";

  if (includeComments) {
    code += "// Converted from cURL command\n";
  }

  if (useAsync) {
    code += "const response = await fetch(";
  } else {
    code += "fetch(";
  }

  // URL
  code += `'${parsed.url}'`;

  // Options object
  const hasOptions =
    parsed.method !== "GET" ||
    Object.keys(parsed.headers).length > 0 ||
    parsed.data ||
    parsed.auth;

  if (hasOptions) {
    code += ", {\n";

    // Method
    if (parsed.method !== "GET") {
      code += `  method: '${parsed.method}',\n`;
    }

    // Headers
    if (Object.keys(parsed.headers).length > 0 || parsed.auth) {
      code += "  headers: {\n";

      // Authentication
      if (parsed.auth) {
        const credentials = btoa(
          `${parsed.auth.username}:${parsed.auth.password}`
        );
        code += `    'Authorization': 'Basic ${credentials}',\n`;
      }

      // Other headers
      for (const [key, value] of Object.entries(parsed.headers)) {
        code += `    '${key}': '${value}',\n`;
      }

      code += "  },\n";
    }

    // Body
    if (parsed.data) {
      code += `  body: '${parsed.data}',\n`;
    }

    code += "}";
  }

  code += ")";

  if (useAsync && includeErrorHandling) {
    code += ";\n\n";
    if (includeComments) {
      code += "// Handle the response\n";
    }
    code += "if (!response.ok) {\n";
    code += "  throw new Error(`HTTP error! status: ${response.status}`);\n";
    code += "}\n\n";
    code += "const data = await response.json();\n";
    code += "console.log(data);";
  } else if (useAsync) {
    code += ";\n\n";
    code += "const data = await response.json();\n";
    code += "console.log(data);";
  } else {
    code += "\n  .then(response => response.json())\n";
    code += "  .then(data => console.log(data))\n";
    code += "  .catch(error => console.error('Error:', error));";
  }

  return code;
};

const CurlToJsFetch: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [includeComments, setIncludeComments] = useState(true);
  const [useAsync, setUseAsync] = useState(true);
  const [includeErrorHandling, setIncludeErrorHandling] = useState(true);
  const [autoConvert, setAutoConvert] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConversion = useCallback(() => {
    setError("");

    if (!input.trim()) {
      setError("Please provide a cURL command");
      setOutput("");
      return;
    }

    try {
      const fetchCode = convertCurlToFetch(input, {
        includeComments,
        useAsync,
        includeErrorHandling,
      });
      setOutput(fetchCode);
      toast.success("cURL command converted successfully!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to convert cURL command";
      setError(errorMessage);
      setOutput("");
      toast.error("Failed to convert cURL command");
    }
  }, [input, includeComments, useAsync, includeErrorHandling]);

  const handleInputChange = useCallback(
    (value: string) => {
      setInput(value);
      setError("");

      if (autoConvert && value.trim()) {
        setTimeout(() => {
          try {
            const fetchCode = convertCurlToFetch(value, {
              includeComments,
              useAsync,
              includeErrorHandling,
            });
            setOutput(fetchCode);
          } catch {
            // Silent fail for auto-conversion
          }
        }, 300);
      }
    },
    [includeComments, useAsync, includeErrorHandling, autoConvert]
  );

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const sampleCurl = `curl -X POST https://api.example.com/users \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-token-here" \\
  -d '{"name": "John Doe", "email": "john@example.com"}'`;

  const loadSample = () => {
    setInput(sampleCurl);
    if (autoConvert) {
      setTimeout(() => handleConversion(), 100);
    }
  };

  return (
    <ToolContainer>
      <ToolHead
        name="cURL to JavaScript Fetch Converter"
        description="Convert cURL commands to JavaScript fetch API code instantly with our free online converter. Transform command-line HTTP requests into modern JavaScript fetch calls with real-time conversion."
      />

      {!loaded ? (
        <CurlToJsFetchSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader></CardHeader>
              <CardContent className="space-y-6">
                {/* Input and Output Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Input Section - Left Side */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      cURL Command
                    </Label>
                    <Textarea
                      value={input}
                      onChange={(e) => handleInputChange(e.target.value)}
                      placeholder="Paste your cURL command here..."
                      className="min-h-[300px] font-mono text-sm"
                    />
                  </div>

                  {/* Output Section - Right Side */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        JavaScript Fetch Code
                      </Label>
                      <CopyButton text={output} disabled={!output} />
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="JavaScript fetch code will appear here..."
                      className="min-h-[300px] font-mono text-sm bg-muted/50"
                    />
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">
                    Conversion Options
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="includeComments"
                        checked={includeComments}
                        onCheckedChange={setIncludeComments}
                      />
                      <Label
                        htmlFor="includeComments"
                        className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer"
                      >
                        Include comments
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="useAsync"
                        checked={useAsync}
                        onCheckedChange={setUseAsync}
                      />
                      <Label
                        htmlFor="useAsync"
                        className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer"
                      >
                        Use async/await syntax
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="includeErrorHandling"
                        checked={includeErrorHandling}
                        onCheckedChange={setIncludeErrorHandling}
                      />
                      <Label
                        htmlFor="includeErrorHandling"
                        className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer"
                      >
                        Include error handling
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="autoConvert"
                        checked={autoConvert}
                        onCheckedChange={setAutoConvert}
                      />
                      <Label
                        htmlFor="autoConvert"
                        className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer"
                      >
                        Auto-convert on input change
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <Button onClick={handleClear} variant="outline">
                      Clear
                    </Button>
                    <Button onClick={loadSample} variant="secondary">
                      Load Sample
                    </Button>
                  </div>
                  <Button onClick={handleConversion} disabled={!input.trim()}>
                    Convert to Fetch
                  </Button>
                </div>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}

                {/* Conversion Info */}
                {input && output && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600 dark:text-slate-400">
                          Input Length:
                        </span>
                        <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">
                          {input.length} chars
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-600 dark:text-slate-400">
                          Output Length:
                        </span>
                        <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">
                          {output.length} chars
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-600 dark:text-slate-400">
                          Lines Generated:
                        </span>
                        <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">
                          {output.split("\n").length} lines
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Understanding cURL to Fetch Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Converting cURL commands to JavaScript fetch API calls is
                    essential for modern web development. This tool helps you
                    transform command-line HTTP requests into browser-compatible
                    JavaScript code that can be used in web applications.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Common cURL Options
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>-X METHOD:</strong> HTTP method (GET, POST,
                            PUT, DELETE)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>-H "Header":</strong> Custom headers
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>-d "data":</strong> Request body data
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>-u user:pass:</strong> Basic authentication
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Fetch API Features
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Promise-based asynchronous requests</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Modern async/await syntax support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Built-in support for JSON parsing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Better error handling capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Streaming and advanced response handling</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example conversion
                    </div>
                    <div className="mb-4">
                      <div className="text-blue-600 dark:text-blue-400 mb-1">
                        cURL:
                      </div>
                      <div className="text-slate-800 dark:text-slate-200 break-all">
                        curl -X POST -H "Content-Type: application/json" -d '
                        {"key" + ":" + "value"}' https://api.example.com
                      </div>
                    </div>
                    <div>
                      <div className="text-green-600 dark:text-green-400 mb-1">
                        JavaScript Fetch:
                      </div>
                      <div className="text-slate-800 dark:text-slate-200">
                        {`const response = await fetch('https://api.example.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: '{"key":"value"}'
});`}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Advanced Conversion Features and Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Conversion Features */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            ⚙️
                          </span>
                        </span>
                        Conversion Features
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Authentication:</strong> Converts -u flag to
                            Authorization headers
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Headers:</strong> Maps all -H flags to fetch
                            headers object
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Request Body:</strong> Handles -d, --data,
                            and --data-raw flags
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Method Detection:</strong> Auto-detects POST
                            for data requests
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Best Practices */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ✨
                          </span>
                        </span>
                        Best Practices
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Error Handling:</strong> Always check
                            response.ok before parsing
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Async/Await:</strong> Use modern syntax for
                            better readability
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Content-Type:</strong> Set appropriate
                            headers for data requests
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>CORS:</strong> Consider cross-origin
                            policies in browsers
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Common Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            🎯
                          </span>
                        </span>
                        Common Use Cases
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Documentation:</strong> Convert example
                            cURL commands
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Frontend Development:</strong> Implement API
                            calls in web apps
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Testing:</strong> Create test scripts from
                            cURL commands
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Migration:</strong> Update legacy
                            XMLHttpRequest code
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Browser Compatibility */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            🌐
                          </span>
                        </span>
                        Browser Support
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Modern Browsers:</strong> Fetch API
                            supported in all current browsers
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Polyfills:</strong> Use fetch polyfill for
                            older browser support
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Node.js:</strong> Use node-fetch package for
                            server-side code
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>React Native:</strong> Native fetch support
                            included
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> When converting cURL commands
                      for production use, always add proper error handling and
                      consider implementing retry logic for network failures.
                      The generated code provides a solid foundation, but you
                      may need to customize it based on your specific
                      requirements and error handling strategies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: JavaScript fetch() Explained Like Never Before"
              description="This tutorial explains how to use the JavaScript fetch() API to make HTTP requests, similar to what you would do with cURL."
              videoUrl="https://www.youtube.com/embed/G3oPZSvrO9w"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default CurlToJsFetch;
