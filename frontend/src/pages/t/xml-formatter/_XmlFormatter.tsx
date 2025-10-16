import React, { useState, useEffect, useMemo } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import XmlFormatterSkeleton from "./_XmlFormatterSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, CheckIcon, XIcon, MinusIcon } from "lucide-react";
import AdBanner from "../../../components/banner/AdBanner";

// XML formatting logic based on reference implementation
interface XMLFormatterOptions {
  indentation?: string | number;
  collapseContent?: boolean;
  lineSeparator?: string;
  whiteSpaceAtEndOfSelfclosingTag?: boolean;
}

interface FormattingResult {
  isValid: boolean;
  formatted: string;
  error?: string;
  original: string;
}

// Clean and trim XML input
const cleanRawXml = (rawXml: string): string => {
  return rawXml.trim();
};

// Basic XML validation without external library
const isValidXML = (rawXml: string): boolean => {
  const cleanedRawXml = cleanRawXml(rawXml);

  if (cleanedRawXml === "") {
    return true;
  }

  try {
    // Basic XML parsing validation using DOMParser
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(cleanedRawXml, "text/xml");

    // Check for parsing errors
    const errorNode = xmlDoc.querySelector("parsererror");
    return !errorNode;
  } catch (error) {
    return false;
  }
};

// Simple XML formatter implementation
const formatXml = (
  rawXml: string,
  options: XMLFormatterOptions = {}
): string => {
  const cleanedXml = cleanRawXml(rawXml);

  if (!cleanedXml) return "";

  try {
    // Parse the XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(cleanedXml, "text/xml");

    // Check for parsing errors
    const errorNode = xmlDoc.querySelector("parsererror");
    if (errorNode) {
      throw new Error("Invalid XML structure");
    }

    // Format the XML with indentation
    const indentChar =
      typeof options.indentation === "string"
        ? options.indentation
        : "  ".repeat(options.indentation || 2);

    return formatXmlNode(xmlDoc, indentChar, 0);
  } catch (error) {
    throw new Error(
      `XML formatting failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};

// Helper function to format XML nodes recursively
const formatXmlNode = (
  node: Node,
  indentChar: string,
  depth: number
): string => {
  const indent = indentChar.repeat(depth);
  const nextIndent = indentChar.repeat(depth + 1);

  if (node.nodeType === Node.DOCUMENT_NODE) {
    const doc = node as Document;
    let result = "";

    // Check if original XML had declaration by looking at the source
    const xmlString = new XMLSerializer().serializeToString(doc);
    if (xmlString.includes("<?xml")) {
      result += '<?xml version="1.0" encoding="UTF-8"?>\n';
    }

    // Format child nodes
    for (const child of Array.from(doc.childNodes)) {
      if (child.nodeType !== Node.DOCUMENT_TYPE_NODE) {
        result += formatXmlNode(child, indentChar, depth);
      }
    }

    return result;
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as Element;
    let result = `${indent}<${element.tagName}`;

    // Add attributes
    for (const attr of Array.from(element.attributes)) {
      result += ` ${attr.name}="${attr.value}"`;
    }

    // Handle self-closing or empty elements
    if (element.childNodes.length === 0) {
      return `${result} />\n`;
    }

    result += ">";

    // Check if element contains only text
    const hasOnlyText =
      element.childNodes.length === 1 &&
      element.firstChild?.nodeType === Node.TEXT_NODE;

    if (hasOnlyText) {
      const textContent = element.textContent?.trim() || "";
      return `${result}${textContent}</${element.tagName}>\n`;
    }

    result += "\n";

    // Format child nodes
    for (const child of Array.from(element.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent?.trim();
        if (text) {
          result += `${nextIndent}${text}\n`;
        }
      } else {
        result += formatXmlNode(child, indentChar, depth + 1);
      }
    }

    result += `${indent}</${element.tagName}>\n`;
    return result;
  }

  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent?.trim();
    return text ? `${indent}${text}\n` : "";
  }

  if (node.nodeType === Node.COMMENT_NODE) {
    return `${indent}<!--${node.textContent}-->\n`;
  }

  return "";
};

// Minify XML by removing unnecessary whitespace
const minifyXml = (xml: string): string => {
  return xml
    .replace(/>\s+</g, "><") // Remove whitespace between tags
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim();
};

const XmlFormatter: React.FC = () => {
  const [xmlInput, setXmlInput] =
    useState(`<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
<book id="1" category="fiction">
<title>The Great Gatsby</title>
<author>F. Scott Fitzgerald</author>
<price>12.99</price>
</book>
<book id="2" category="non-fiction">
<title>A Brief History of Time</title>
<author>Stephen Hawking</author>
<price>15.99</price>
</book>
</bookstore>`);
  const [indentType, setIndentType] = useState<"spaces" | "tabs">("spaces");
  const [indentSize, setIndentSize] = useState("2");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Memoized formatting result - like Vue's computed properties
  const formattingResult = useMemo((): FormattingResult => {
    if (!xmlInput.trim() || !loaded) {
      return {
        isValid: true,
        formatted: "",
        original: xmlInput,
      };
    }

    try {
      const indentChar =
        indentType === "tabs" ? "\t" : " ".repeat(parseInt(indentSize));

      const options: XMLFormatterOptions = {
        indentation: indentChar,
      };

      const isValid = isValidXML(xmlInput);

      if (!isValid) {
        return {
          isValid: false,
          formatted: "",
          error: "Invalid XML structure. Please check your XML syntax.",
          original: xmlInput,
        };
      }

      const formatted = formatXml(xmlInput, options);

      return {
        isValid: true,
        formatted,
        original: xmlInput,
      };
    } catch (error) {
      return {
        isValid: false,
        formatted: "",
        error: error instanceof Error ? error.message : "Failed to format XML",
        original: xmlInput,
      };
    }
  }, [xmlInput, indentType, indentSize, loaded]);

  const handleClear = () => {
    setXmlInput("");
  };

  const handleMinify = () => {
    if (formattingResult.isValid && formattingResult.formatted) {
      const minified = minifyXml(formattingResult.formatted);
      setXmlInput(minified);
      toast.success("XML minified successfully!");
    }
  };

  const handleLoadSample = () => {
    setXmlInput(`<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
<book id="1" category="fiction">
<title>The Great Gatsby</title>
<author>F. Scott Fitzgerald</author>
<price>12.99</price>
</book>
<book id="2" category="non-fiction">
<title>A Brief History of Time</title>
<author>Stephen Hawking</author>
<price>15.99</price>
</book>
</bookstore>`);
    toast.success("Sample XML loaded!");
  };

  return (
    <ToolContainer>
            <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="XML Formatter"
        description="Format and beautify XML documents instantly with our free online XML formatter. Validate XML syntax, customize indentation, and fix malformed XML with real-time formatting and error detection."
      />

      {!loaded ? (
        <XmlFormatterSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Input Section - FIRST PRIORITY */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>XML Input</Label>
                    <Textarea
                      value={xmlInput}
                      onChange={(e) => setXmlInput(e.target.value)}
                      placeholder="Paste your XML here or use the sample button..."
                      className="font-mono min-h-[200px] resize-y"
                      rows={8}
                    />
                    <div className="text-xs text-muted-foreground">
                      Enter your XML content to format and validate
                    </div>
                  </div>

                  {/* Formatting Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">Indentation Type</Label>
                      <Select
                        value={indentType}
                        onValueChange={(value: "spaces" | "tabs") =>
                          setIndentType(value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spaces">Spaces</SelectItem>
                          <SelectItem value="tabs">Tabs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {indentType === "spaces" && (
                      <div className="space-y-2">
                        <Label className="text-sm">Indent Size</Label>
                        <Select
                          value={indentSize}
                          onValueChange={setIndentSize}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 spaces</SelectItem>
                            <SelectItem value="4">4 spaces</SelectItem>
                            <SelectItem value="8">8 spaces</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label className="text-sm">Actions</Label>
                      <div className="flex gap-2">
                        <Button
                          onClick={handleLoadSample}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          Sample
                        </Button>
                        <Button
                          onClick={handleClear}
                          variant="outline"
                          size="sm"
                        >
                          <XIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Output Section - SECOND PRIORITY */}
                {(xmlInput.trim() || formattingResult.error) && (
                  <div className="space-y-4 pt-4 border-t">
                    {/* Validation Status */}
                    <div className="flex items-center justify-between">
                      <Label className="font-medium">Formatted XML</Label>
                      <div className="flex items-center gap-2">
                        {formattingResult.isValid ? (
                          <Badge variant="default" className="bg-green-600">
                            <CheckIcon className="h-3 w-3 mr-1" />
                            Valid XML
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Invalid XML
                          </Badge>
                        )}
                      </div>
                    </div>

                    {formattingResult.error ? (
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-red-800 dark:text-red-200 mb-1">
                              XML Validation Error:
                            </div>
                            <div className="text-sm text-red-700 dark:text-red-300">
                              {formattingResult.error}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Success State */}
                        <div className="space-y-3">
                          <Textarea
                            value={formattingResult.formatted}
                            readOnly
                            className="font-mono min-h-[200px] bg-slate-50 dark:bg-slate-800"
                            rows={8}
                          />

                          {/* Action Buttons */}
                          <div className="flex justify-center gap-3">
                            <CopyButton text={formattingResult.formatted} />
                            <Button
                              onClick={handleMinify}
                              variant="outline"
                              size="sm"
                            >
                              <MinusIcon className="h-4 w-4 mr-1" />
                              Minify
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Info Banner */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 All XML processing happens locally in your browser. Your
                    data never leaves your device.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>About XML Formatting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    XML (eXtensible Markup Language) formatting is essential for
                    creating readable, maintainable, and well-structured XML
                    documents. Our formatter helps you organize your XML content
                    with proper indentation and validates syntax to ensure
                    compliance with XML standards.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        XML Formatting Features
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Syntax Validation:</strong> Real-time XML
                            syntax checking
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Auto Indentation:</strong> Customizable
                            spaces or tabs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Error Detection:</strong> Detailed error
                            messages for debugging
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Minification:</strong> Remove unnecessary
                            whitespace
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Attribute Formatting:</strong> Proper
                            attribute spacing
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Benefits of Well-Formatted XML
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Readability:</strong> Easy to understand
                            structure
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Debugging:</strong> Easier to find and fix
                            errors
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Maintenance:</strong> Simpler to update and
                            modify
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Collaboration:</strong> Team-friendly code
                            structure
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Standards:</strong> Compliance with XML
                            specifications
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Example XML Structure
                    </h5>
                    <div className="bg-slate-800 dark:bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
                      <div className="text-slate-300">
                        {`<?xml version="1.0" encoding="UTF-8"?>
<root>
  <element attribute="value">
    <child>Content</child>
    <child>More content</child>
  </element>
</root>`}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Well-formatted XML with proper indentation and structure
                      makes it easy to understand the document hierarchy.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>XML Formatting Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Following XML best practices ensures your documents are
                    valid, readable, and interoperable across different systems
                    and applications.
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        XML Declaration
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        {`<?xml version="1.0" encoding="UTF-8"?>`}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Always include an XML declaration at the beginning of
                        your document
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Proper Nesting
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        {`<parent>
  <child>
    <grandchild>Content</grandchild>
  </child>
</parent>`}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Elements must be properly nested and closed in the
                        correct order
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Attribute Quoting
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        {`<element id="123" class="active" data-value="test" />`}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        All attribute values must be enclosed in quotes
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Case Sensitivity
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        {`<!-- Correct -->
<Element>Content</Element>

<!-- Incorrect -->
<Element>Content</element>`}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        XML is case-sensitive - opening and closing tags must
                        match exactly
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      <strong>💡 Pro Tip:</strong> Use consistent indentation
                      throughout your XML documents. This makes them much easier
                      to read and debug. Consider using a linter or formatter as
                      part of your development workflow to maintain consistent
                      XML formatting across your project.
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

export default XmlFormatter;
