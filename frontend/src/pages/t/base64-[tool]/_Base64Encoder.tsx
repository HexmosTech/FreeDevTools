import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import Base64EncoderSkeleton from "./_Base64EncoderSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getToolByKey, type Tool } from "@/config/tools";

// Base64 encoding/decoding utilities
const toBase64 = (text: string): string => {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch (error) {
    throw new Error("Failed to encode to Base64");
  }
};

const fromBase64 = (base64: string): string => {
  try {
    return decodeURIComponent(escape(atob(base64)));
  } catch (error) {
    throw new Error("Invalid Base64 string");
  }
};

type OperationType = "encode" | "decode";

interface Base64EncoderProps {
  tool: string; // from Astro param
}

const Base64Encoder: React.FC<Base64EncoderProps> = ({ tool }) => {
  const toolConfig: Tool =
    getToolByKey(tool) || getToolByKey("base64-utilities")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<OperationType>("encode");

  // Always show tabs, but set initial tab based on tool
  const shouldShowTabs = true;

  useEffect(() => {
    if (tool === "base64-decoder") {
      setActiveTab("decode");
    } else {
      setActiveTab("encode");
    }
  }, [tool]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConversion = useCallback(
    (value: string, operation: OperationType) => {
      setError("");

      if (!value.trim()) {
        setOutput("");
        return;
      }

      try {
        const result =
          operation === "encode" ? toBase64(value) : fromBase64(value);
        setOutput(result);
      } catch (err) {
        const errorMessage =
          operation === "encode"
            ? "Failed to encode text to Base64"
            : "Invalid Base64 string. Please check your input.";
        setError(errorMessage);
        setOutput("");
      }
    },
    []
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setInput(value);
      handleConversion(value, activeTab);
    },
    [activeTab, handleConversion]
  );

  const handleTabChange = useCallback(
    (tab: string) => {
      const newTab = tab as OperationType;
      setActiveTab(newTab);
      setError("");

      // Re-convert existing input with new operation
      if (input.trim()) {
        handleConversion(input, newTab);
      }
    },
    [input, handleConversion]
  );

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const sampleTexts = {
    encode: "Hello, World! This is a sample text to encode.",
    decode: "SGVsbG8sIFdvcmxkISBUaGlzIGlzIGEgc2FtcGxlIHRleHQgdG8gZW5jb2RlLg==",
  };

  const loadSample = () => {
    const sampleText = sampleTexts[activeTab];
    setInput(sampleText);
    handleConversion(sampleText, activeTab);
  };

  return (
    <ToolContainer>
      <ToolHead name={toolConfig.name} description={toolConfig.description} />

      {!loaded ? (
        <Base64EncoderSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader></CardHeader>
              <CardContent className="space-y-6">
                {/* Always show tabs with appropriate default selection */}
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="encode">Encode</TabsTrigger>
                    <TabsTrigger value="decode">Decode</TabsTrigger>
                  </TabsList>

                  <TabsContent value="encode" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Text Input - Left Side */}
                      <div className="space-y-3">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Text to Encode
                        </Label>
                        <Textarea
                          value={input}
                          onChange={(e) => handleInputChange(e.target.value)}
                          placeholder="Enter text to encode to Base64..."
                          className="min-h-[200px] font-mono text-sm"
                        />
                      </div>

                      {/* Base64 Output - Right Side */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Base64 Output
                          </Label>
                          <CopyButton text={output} disabled={!output} />
                        </div>
                        <Textarea
                          value={output}
                          readOnly
                          placeholder="Base64 encoded text will appear here..."
                          className="min-h-[200px] font-mono text-sm bg-muted/50"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="decode" className="mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Base64 Input - Left Side */}
                      <div className="space-y-3">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Base64 to Decode
                        </Label>
                        <Textarea
                          value={input}
                          onChange={(e) => handleInputChange(e.target.value)}
                          placeholder="Enter Base64 string to decode..."
                          className="min-h-[200px] font-mono text-sm"
                        />
                      </div>

                      {/* Text Output - Right Side */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Decoded Text
                          </Label>
                          <CopyButton text={output} disabled={!output} />
                        </div>
                        <Textarea
                          value={output}
                          readOnly
                          placeholder="Decoded text will appear here..."
                          className="min-h-[200px] font-mono text-sm bg-muted/50"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button onClick={handleClear} variant="outline">
                    Clear
                  </Button>
                  <Button onClick={loadSample} variant="secondary">
                    Load Sample
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
                          Size Change:
                        </span>
                        <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">
                          {activeTab === "encode"
                            ? `+${Math.round(((output.length - input.length) / input.length) * 100)}%`
                            : `${Math.round(((output.length - input.length) / input.length) * 100)}%`}
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
                <CardTitle>Understanding Base64 Encoding</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Base64 is a binary-to-text encoding scheme that represents
                    binary data in an ASCII string format. It's widely used in
                    web development, email transmission, and data storage to
                    ensure safe transport of data across systems that handle
                    text.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        How Base64 Works
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Character Set:</strong> Uses 64 characters
                            (A-Z, a-z, 0-9, +, /)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Padding:</strong> Uses '=' for padding when
                            needed
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Size Increase:</strong> Increases data size
                            by ~33%
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Safety:</strong> Safe for URLs, emails, and
                            text protocols
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
                          <span>Email attachments and MIME encoding</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Embedding images in HTML/CSS (data URLs)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>HTTP Basic Authentication</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>JSON Web Tokens (JWT)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>API data transmission</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example conversion
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-blue-600 dark:text-blue-400 mb-1">
                          Text:
                        </div>
                        <div className="text-slate-800 dark:text-slate-200">
                          "Hello, World!"
                        </div>
                      </div>
                      <div>
                        <div className="text-green-600 dark:text-green-400 mb-1">
                          Base64:
                        </div>
                        <div className="text-slate-800 dark:text-slate-200 break-all">
                          "SGVsbG8sIFdvcmxkIQ=="
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Base64 in Web Development and Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Web Development Applications */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            💻
                          </span>
                        </span>
                        Web Development
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data URLs:</strong> Embed images, fonts, and
                            other assets directly in CSS/HTML
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Integration:</strong> Encode request
                            payloads and handle responses
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>File Uploads:</strong> Convert files to
                            Base64 for form submissions
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>JSON Transport:</strong> Safely include
                            binary data in JSON payloads
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Security Considerations */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-red-600 dark:text-red-400">
                            🔒
                          </span>
                        </span>
                        Security Notes
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Not Encryption:</strong> Base64 is encoding,
                            not encryption - data is easily reversible
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Sensitive Data:</strong> Never use Base64
                            alone for passwords or secrets
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Transport Layer:</strong> Always use HTTPS
                            when transmitting encoded data
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Input Validation:</strong> Always validate
                            and sanitize decoded content
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Performance Tips */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ⚡
                          </span>
                        </span>
                        Performance Tips
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Size Impact:</strong> Base64 increases data
                            size by ~33%, consider compression
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Large Files:</strong> Avoid Base64 for large
                            files; use proper file upload instead
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Caching:</strong> Cache encoded results when
                            processing the same data repeatedly
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Streaming:</strong> Consider streaming for
                            large data sets
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Browser Compatibility */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            🌐
                          </span>
                        </span>
                        Browser Support
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Native Support:</strong> btoa() and atob()
                            available in all modern browsers
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Unicode Handling:</strong> Use
                            encodeURIComponent for proper Unicode support
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Node.js:</strong> Use Buffer.from() and
                            Buffer.toString() in server environments
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Error Handling:</strong> Always wrap
                            encoding/decoding in try-catch blocks
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> When working with Base64 in
                      production applications, always validate the input before
                      decoding and implement proper error handling. Consider
                      using libraries like{" "}
                      <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">
                        js-base64
                      </code>{" "}
                      for better Unicode support and additional features.
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

export default Base64Encoder;
