import React, { useState, useEffect } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolVideo from "@/components/tool/ToolVideo";
import YamlToTomlSkeleton from "./_YamlToTomlSkeleton";
import CopyButton from "@/components/ui/copy-button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { toast } from "@/components/ToastProvider";
import { parse as parseYaml } from "yaml";
import AdBanner from "../../../components/banner/AdBanner";

// Browser-compatible TOML stringifier
const stringifyToml = (obj: any, depth = 0): string => {
  const indent = "  ".repeat(depth);
  let result = "";

  const formatValue = (value: any): string => {
    if (typeof value === "string") {
      // Escape special characters and wrap in quotes if needed
      if (value.includes("\n") || value.includes('"') || value.includes("\\")) {
        return `"""${value.replace(/\\/g, "\\\\").replace(/"""/g, '\\"""')}"""`;
      }
      if (
        value.includes(" ") ||
        value.includes("#") ||
        value === "" ||
        /^[0-9]/.test(value)
      ) {
        return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
      }
      return value;
    }
    if (typeof value === "number") {
      return value.toString();
    }
    if (typeof value === "boolean") {
      return value.toString();
    }
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (Array.isArray(value)) {
      if (value.length === 0) return "[]";

      // Check if all elements are primitives
      const allPrimitives = value.every(
        (item) =>
          typeof item === "string" ||
          typeof item === "number" ||
          typeof item === "boolean" ||
          item instanceof Date
      );

      if (allPrimitives) {
        return `[${value.map(formatValue).join(", ")}]`;
      } else {
        // Array of tables
        return value
          .map((item) => `\n${stringifyToml(item, depth + 1)}`)
          .join("");
      }
    }
    return "";
  };

  // Separate simple values from tables and arrays of tables
  const simpleValues: { [key: string]: any } = {};
  const tables: { [key: string]: any } = {};
  const arrayTables: { [key: string]: any[] } = {};

  for (const [key, value] of Object.entries(obj)) {
    if (
      Array.isArray(value) &&
      value.length > 0 &&
      typeof value[0] === "object" &&
      !Array.isArray(value[0])
    ) {
      arrayTables[key] = value;
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value) &&
      !(value instanceof Date)
    ) {
      tables[key] = value;
    } else {
      simpleValues[key] = value;
    }
  }

  // Add simple key-value pairs
  for (const [key, value] of Object.entries(simpleValues)) {
    result += `${indent}${key} = ${formatValue(value)}\n`;
  }

  // Add empty line before tables if we have simple values
  if (
    Object.keys(simpleValues).length > 0 &&
    (Object.keys(tables).length > 0 || Object.keys(arrayTables).length > 0)
  ) {
    result += "\n";
  }

  // Add tables
  for (const [key, value] of Object.entries(tables)) {
    if (depth === 0) {
      result += `[${key}]\n`;
    } else {
      result += `${indent}[${key}]\n`;
    }
    result += stringifyToml(value, depth + 1);
    result += "\n";
  }

  // Add array of tables
  for (const [key, array] of Object.entries(arrayTables)) {
    for (const item of array) {
      if (depth === 0) {
        result += `[[${key}]]\n`;
      } else {
        result += `${indent}[[${key}]]\n`;
      }
      result += stringifyToml(item, depth + 1);
      result += "\n";
    }
  }

  return result;
};

const YamlToToml: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleProcess = (showToast = true) => {
    setError("");
    if (showToast) toast.info("Processing your input...");
    try {
      if (!input.trim()) {
        setOutput("");
        return;
      }
      const obj = parseYaml(input);
      if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
        setError("Error: Failed to parse YAML! Is it valid YAML?");
        setOutput("");
        if (showToast) toast.error("Processing failed");
        return;
      }
      const tomlStr = stringifyToml(obj);
      setOutput(tomlStr.trim());
      if (showToast) toast.success("Conversion completed!");
    } catch (err) {
      console.error("Conversion error:", err);
      setError("Error: Failed to parse YAML! Is it valid YAML?");
      setOutput("");
      if (showToast) toast.error("Processing failed");
    }
  };

  // Auto-convert on input change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim()) {
        handleProcess(false); // Don't show toast for auto-conversion
      } else {
        setOutput("");
        setError("");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="YAML to TOML Converter"
        description="Convert YAML to TOML format instantly. Paste your YAML and get valid TOML output for configuration files, development, and deployment."
      />
      {!loaded ? (
        <YamlToTomlSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                      YAML to TOML Converter
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Paste your YAML and get instant TOML conversion
                    </CardDescription>
                  </div>
                  {output && (
                    <div className="flex gap-2">
                      <CopyButton text={output} />
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Input YAML
                      </label>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Auto-converts as you type
                      </span>
                    </div>
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="name: John Doe&#10;age: 30&#10;address:&#10;  street: 123 Main St&#10;  city: New York&#10;hobbies:&#10;  - reading&#10;  - coding&#10;  - gaming"
                      className="w-full h-96 p-4 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-sm leading-relaxed"
                      style={{
                        fontFamily:
                          'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                      }}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Output TOML
                      </label>
                      <div className="flex items-center gap-2">
                        {output && (
                          <span className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Converted
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="relative">
                      <pre className="w-full h-96 p-4 border border-slate-300 rounded-lg bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-sm overflow-auto leading-relaxed">
                        <code className="text-slate-800 dark:text-slate-200">
                          {output || (
                            <span className="text-slate-400 dark:text-slate-500 italic">
                              Your TOML output will appear here...
                            </span>
                          )}
                        </code>
                      </pre>
                      {output && (
                        <div className="absolute top-3 right-3">
                          <CopyButton text={output} />
                        </div>
                      )}
                    </div>
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400 flex items-start gap-3">
                        <svg
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <div className="font-medium">Conversion Error</div>
                          <div className="text-sm mt-1">{error}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>
          <ToolContentCardWrapper>
            <ToolVideo
              title="Learn TOML "
              description="Explore the TOML configuration format, its syntax, and best practices for using it in your projects."
              videoUrl="https://www.youtube.com/embed/D_Jb52jw2HY"
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  What is YAML to TOML Conversion?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    YAML to TOML Converter lets you instantly transform YAML
                    configuration files into TOML format. This is useful for
                    developers working with different config standards in modern
                    apps.
                  </p>
                  <p>
                    Paste your YAML above and click Convert to get valid TOML
                    output. Copy the result and use it in your projects,
                    deployments, or documentation.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>💡 Tip:</strong> Always validate your YAML before
                      converting for best results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Official Resources
                </CardTitle>
                <CardDescription>
                  Explore documentation and guides
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <a
                    href="https://yaml.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm">
                        📄
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                        YAML Official Docs
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        YAML specification and documentation
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://toml.io/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                        📝
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                        TOML Official Docs
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        TOML specification and documentation
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        🔗
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        MDN JSON Docs
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        JSON reference for config formats
                      </div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default YamlToToml;
