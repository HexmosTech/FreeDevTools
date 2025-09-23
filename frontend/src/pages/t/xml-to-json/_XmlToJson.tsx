import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import XmlToJsonSkeleton from "./_XmlToJsonSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolVideo from "@/components/tool/ToolVideo";
import {
  Download,
  FileText,
  Code2,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const XmlToJson: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationStatus, setValidationStatus] = useState<
    "idle" | "valid" | "invalid"
  >("idle");

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Real-time validation
  useEffect(() => {
    if (!input.trim()) {
      setValidationStatus("idle");
      setError("");
      return;
    }

    const validateTimer = setTimeout(() => {
      try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(input, "text/xml");
        const parseError = xmlDoc.querySelector("parsererror");

        if (parseError || !xmlDoc.documentElement) {
          setValidationStatus("invalid");
          setError("Invalid XML format");
        } else {
          setValidationStatus("valid");
          setError("");
        }
      } catch (err) {
        setValidationStatus("invalid");
        setError("Invalid XML format");
      }
    }, 500);

    return () => clearTimeout(validateTimer);
  }, [input]);

  const xmlToJson = useCallback((xmlString: string): any => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const parseError = xmlDoc.querySelector("parsererror");

    if (parseError) {
      throw new Error("Invalid XML format");
    }

    const convertNode = (node: Node): any => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        return text || undefined;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const result: any = {};

        // Handle attributes
        if (element.attributes.length > 0) {
          result["@attributes"] = {};
          for (let i = 0; i < element.attributes.length; i++) {
            const attr = element.attributes[i];
            result["@attributes"][attr.name] = attr.value;
          }
        }

        const children = Array.from(element.childNodes);
        const textContent = children
          .filter((child) => child.nodeType === Node.TEXT_NODE)
          .map((child) => child.textContent?.trim())
          .filter((text) => text)
          .join("");

        const elementChildren = children.filter(
          (child) => child.nodeType === Node.ELEMENT_NODE
        );

        if (elementChildren.length === 0) {
          // Leaf node
          if (textContent) {
            if (Object.keys(result).length === 0) {
              return textContent;
            } else {
              result["#text"] = textContent;
            }
          }
        } else {
          // Node with children
          const childGroups: { [key: string]: any[] } = {};

          elementChildren.forEach((child) => {
            const childElement = child as Element;
            const childName = childElement.tagName;
            const childValue = convertNode(child);

            if (!childGroups[childName]) {
              childGroups[childName] = [];
            }
            childGroups[childName].push(childValue);
          });

          // Convert single-item arrays to objects
          Object.keys(childGroups).forEach((key) => {
            if (childGroups[key].length === 1) {
              result[key] = childGroups[key][0];
            } else {
              result[key] = childGroups[key];
            }
          });

          if (textContent) {
            result["#text"] = textContent;
          }
        }

        return result;
      }

      return undefined;
    };

    const rootElement = xmlDoc.documentElement;
    if (!rootElement) {
      throw new Error("No root element found");
    }

    return {
      [rootElement.tagName]: convertNode(rootElement),
    };
  }, []);

  const handleProcess = useCallback(async () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }

    setIsProcessing(true);
    setError("");

    try {
      // Add small delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 300));

      const parsed = xmlToJson(input);
      const jsonString = JSON.stringify(parsed, null, 2);
      setOutput(jsonString);
      toast.success("XML converted to JSON successfully!");
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Invalid XML format. Please check your input.";
      setError(errorMessage);
      setOutput("");
      toast.error("Conversion failed: " + errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }, [input, xmlToJson]);

  const handleClear = useCallback(() => {
    setInput("");
    setOutput("");
    setError("");
    setValidationStatus("idle");
    toast.info("Cleared all inputs");
  }, []);

  const handleCopy = useCallback(() => {
    if (!output) return;

    navigator.clipboard
      .writeText(output)
      .then(() => {
        toast.success("JSON copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      });
  }, [output]);

  const handleDownload = useCallback(() => {
    if (!output) return;

    try {
      const blob = new Blob([output], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `converted_${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("JSON file downloaded!");
    } catch (err) {
      toast.error("Failed to download file");
    }
  }, [output]);

  const handleLoadExample = useCallback(() => {
    const exampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book id="1" category="fiction">
    <title lang="en">Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price currency="USD">10.99</price>
  </book>
  <book id="2" category="fiction">
    <title lang="en">1984</title>
    <author>George Orwell</author>
    <year>1949</year>
    <price currency="USD">8.99</price>
  </book>
</bookstore>`;

    setInput(exampleXml);
    toast.info("Example XML loaded!");
  }, []);

  const getValidationIcon = () => {
    switch (validationStatus) {
      case "valid":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "invalid":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-slate-400" />;
    }
  };

  const getValidationColor = () => {
    switch (validationStatus) {
      case "valid":
        return "border-green-300 focus:ring-green-500 focus:border-green-500";
      case "invalid":
        return "border-red-300 focus:ring-red-500 focus:border-red-500";
      default:
        return "border-slate-300 focus:ring-blue-500 focus:border-transparent";
    }
  };

  return (
    <ToolContainer>
      <ToolHead
        name="XML to JSON Converter"
        description="Convert XML to JSON format instantly with real-time validation. Perfect for API development, data migration, and configuration file conversion."
      />
      {!loaded ? (
        <XmlToJsonSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <div className="tool-card-bg space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                          {getValidationIcon()}
                          XML Input
                        </label>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleLoadExample}
                          className="text-xs"
                        >
                          Load Example
                        </Button>
                      </div>
                      <div className="relative">
                        <textarea
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder={`<?xml version="1.0" encoding="UTF-8"?>\n<root>\n  <name>John Doe</name>\n  <age>30</age>\n  <address>\n    <city>New York</city>\n    <country>USA</country>\n  </address>\n</root>`}
                          className={`w-full h-60 p-3 border rounded-lg resize-none font-mono text-sm transition-colors duration-200 dark:bg-slate-800 dark:text-slate-100 ${getValidationColor()} dark:border-slate-600`}
                        />
                        {validationStatus !== "idle" && (
                          <div
                            className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${
                              validationStatus === "valid"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                            }`}
                          >
                            {validationStatus === "valid"
                              ? "Valid XML"
                              : "Invalid XML"}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button
                        onClick={handleProcess}
                        disabled={
                          !input.trim() ||
                          validationStatus === "invalid" ||
                          isProcessing
                        }
                        className="flex items-center gap-2"
                      >
                        {isProcessing ? (
                          <RefreshCw className="h-4 w-4 animate-spin" />
                        ) : (
                          <Code2 className="h-4 w-4" />
                        )}
                        {isProcessing ? "Converting..." : "Convert to JSON"}
                      </Button>
                      <Button onClick={handleClear} variant="outline">
                        Clear All
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Output Section */}
                <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                          <Code2 className="h-4 w-4 text-slate-400" />
                          JSON Output
                          {output && (
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              ({output.split("\n").length} lines)
                            </span>
                          )}
                        </label>
                        {output && (
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={handleCopy}
                              className="h-8 px-2"
                            >
                              <CopyButton text={output} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={handleDownload}
                              className="h-8 px-2"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <textarea
                        value={output}
                        readOnly
                        placeholder="JSON output will appear here after conversion..."
                        className="w-full h-60 p-3 border border-slate-300 rounded-lg resize-none bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-sm"
                      />
                    </div>
                    {error && (
                      <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                        <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Conversion Error</div>
                          <div className="text-sm">{error}</div>
                        </div>
                      </div>
                    )}
                    {output && !error && (
                      <div className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          XML successfully converted to JSON format
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ToolCardWrapper>

          <ToolContentCardWrapper>
            <div className="space-y-8">
              <ToolVideo
                videoUrl="https://www.youtube.com/embed/7ksL5znanhs"
                title="XML Explained in 60 seconds"
                description="Learn XML basics in just one minute."
              />

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8 md:p-10 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  About XML and JSON Conversion
                </h3>
                <div className="text-slate-700 dark:text-slate-300 space-y-4 text-base leading-relaxed">
                  <p>
                    <strong>XML (eXtensible Markup Language)</strong> is a
                    markup language designed for storing and transporting
                    structured data with support for attributes and hierarchical
                    relationships.{" "}
                    <strong>JSON (JavaScript Object Notation)</strong> is a
                    lightweight, text-based data interchange format that's easy
                    to read and parse.
                  </p>
                  <p>
                    This converter transforms XML documents into JSON format
                    while preserving the data structure, attributes (as{" "}
                    <code>@attributes</code>), and text content. It handles
                    complex nested structures, arrays, and mixed content
                    scenarios.
                  </p>
                  <div className="bg-white dark:bg-slate-800 rounded-md p-4 md:p-6 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-medium mb-3 text-base">
                      Key Features:
                    </h4>
                    <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc pl-5">
                      <li>Real-time XML validation with visual feedback</li>
                      <li>Preserves XML attributes and text content</li>
                      <li>
                        Handles arrays and nested structures intelligently
                      </li>
                      <li>One-click copy and download functionality</li>
                      <li>Example templates for quick testing</li>
                    </ul>
                  </div>
                  <p>
                    <strong>Common use cases:</strong> API development,
                    configuration file migration, data transformation pipelines,
                    web service integration, and converting legacy XML data to
                    modern JSON formats.
                  </p>
                  <div className="overflow-x-auto mt-6">
                    <table className="min-w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-700">
                          <th className="px-4 py-2 text-left font-semibold">
                            Feature
                          </th>
                          <th className="px-4 py-2 text-left font-semibold">
                            XML
                          </th>
                          <th className="px-4 py-2 text-left font-semibold">
                            JSON
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2">Syntax</td>
                          <td className="px-4 py-2">Tag-based</td>
                          <td className="px-4 py-2">Key-value pairs</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-800/50">
                          <td className="px-4 py-2">Data Types</td>
                          <td className="px-4 py-2">Text only</td>
                          <td className="px-4 py-2">
                            String, Number, Boolean, Array, Object, null
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">Readability</td>
                          <td className="px-4 py-2">Verbose</td>
                          <td className="px-4 py-2">Concise</td>
                        </tr>
                        <tr className="bg-slate-50 dark:bg-slate-800/50">
                          <td className="px-4 py-2">Use Case</td>
                          <td className="px-4 py-2">
                            Legacy systems, document storage
                          </td>
                          <td className="px-4 py-2">
                            APIs, web apps, config files
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">Supports Attributes</td>
                          <td className="px-4 py-2">Yes</td>
                          <td className="px-4 py-2">
                            No (simulated as <code>@attributes</code>)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-semibold mb-2 text-base">
                      Frequently Asked Questions
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <strong>
                          Q: Does this tool support large XML files?
                        </strong>
                        <br />
                        <span>
                          A: For very large files, browser memory may be a
                          limitation. For best results, use files under 1MB.
                        </span>
                      </div>
                      <div>
                        <strong>
                          Q: How are XML attributes represented in JSON?
                        </strong>
                        <br />
                        <span>
                          A: Attributes are placed under the{" "}
                          <code>@attributes</code> key for each element.
                        </span>
                      </div>
                      <div>
                        <strong>Q: Can I convert JSON back to XML?</strong>
                        <br />
                        <span>
                          A: This tool currently only supports XML to JSON
                          conversion.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default XmlToJson;
