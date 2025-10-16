import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import SvgViewerSkeleton from "./_SvgViewerSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  FileText,
  Eye,
  Download,
  Maximize2,
  Minimize2,
} from "lucide-react";
import ToolVideo from "@/components/tool/ToolVideo";
import AdBanner from "../../../components/banner/AdBanner";
// SVG Upload Component
interface SvgUploadProps {
  onSvgSelect: (content: string) => void;
  selectedFile: File | null;
  onClear: () => void;
}

const SvgUpload: React.FC<SvgUploadProps> = ({
  onSvgSelect,
  selectedFile,
  onClear,
}) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type === "image/svg+xml" || file.name.endsWith(".svg")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const content = e.target?.result as string;
            onSvgSelect(content);
          };
          reader.readAsText(file);
        } else {
          toast.error("Please select a valid SVG file");
        }
      }
    },
    [onSvgSelect]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (file.type === "image/svg+xml" || file.name.endsWith(".svg")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const content = e.target?.result as string;
            onSvgSelect(content);
          };
          reader.readAsText(file);
        } else {
          toast.error("Please select a valid SVG file");
        }
      }
    },
    [onSvgSelect]
  );

  return (
    <div className="space-y-4">
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${dragActive
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            : "border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500"
          }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
          accept=".svg,image/svg+xml"
        />

        {selectedFile ? (
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <FileText className="w-12 h-12 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                {selectedFile.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onClear();
              }}
              className="mt-2"
            >
              Remove
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <Upload className="w-12 h-12 text-slate-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Drop your SVG file here, or{" "}
                <span className="text-blue-600 dark:text-blue-400">browse</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Supports: .svg files
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SvgViewer: React.FC = () => {
  const [input, setInput] = useState("");
  const [svgDataUrl, setSvgDataUrl] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [svgDimensions, setSvgDimensions] = useState<{
    width?: string;
    height?: string;
  }>({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const processSvg = useCallback((svgContent: string) => {
    if (!svgContent.trim()) {
      setSvgDataUrl("");
      setError("");
      setSvgDimensions({});
      return;
    }

    try {
      // Check if content contains SVG
      if (!svgContent.toLowerCase().includes("<svg")) {
        setError("Input does not contain a valid SVG element");
        setSvgDataUrl("");
        setSvgDimensions({});
        return;
      }

      // Extract SVG dimensions
      const svgMatch = svgContent.match(/<svg[^>]*>/i);
      if (svgMatch) {
        const svgTag = svgMatch[0];
        const widthMatch = svgTag.match(/width\s*=\s*["']([^"']+)["']/i);
        const heightMatch = svgTag.match(/height\s*=\s*["']([^"']+)["']/i);
        setSvgDimensions({
          width: widthMatch ? widthMatch[1] : "auto",
          height: heightMatch ? heightMatch[1] : "auto",
        });
      }

      // Create data URL
      const blob = new Blob([svgContent], { type: "image/svg+xml" });
      const reader = new FileReader();

      reader.onload = () => {
        setSvgDataUrl(reader.result as string);
        setError("");
      };

      reader.onerror = () => {
        setError("Failed to process SVG content");
        setSvgDataUrl("");
      };

      reader.readAsDataURL(blob);
    } catch (err) {
      setError("Invalid SVG format");
      setSvgDataUrl("");
      setSvgDimensions({});
    }
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setInput(value);
      processSvg(value);
    },
    [processSvg]
  );

  const handleSvgFileSelect = useCallback(
    (content: string) => {
      setInput(content);
      processSvg(content);
    },
    [processSvg]
  );

  const handleClear = () => {
    setInput("");
    setSvgDataUrl("");
    setError("");
    setSelectedFile(null);
    setSvgDimensions({});
    toast.success("Cleared all fields");
  };

  const handleSampleSvg = () => {
    const sampleSvg = `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="100" cy="100" r="90" fill="url(#gradient)" stroke="#1e293b" stroke-width="2"/>
  
  <!-- Center star -->
  <polygon points="100,40 115,75 150,75 122,95 135,130 100,110 65,130 78,95 50,75 85,75" 
           fill="#ffffff" stroke="#1e293b" stroke-width="1"/>
  
  <!-- Decorative elements -->
  <circle cx="60" cy="60" r="8" fill="#fbbf24" opacity="0.8"/>
  <circle cx="140" cy="60" r="8" fill="#fbbf24" opacity="0.8"/>
  <circle cx="60" cy="140" r="8" fill="#fbbf24" opacity="0.8"/>
  <circle cx="140" cy="140" r="8" fill="#fbbf24" opacity="0.8"/>
  
  <!-- Text -->
  <text x="100" y="170" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="14" font-weight="bold">
    Sample SVG
  </text>
</svg>`;

    setInput(sampleSvg);
    processSvg(sampleSvg);
    toast.success("Sample SVG loaded!");
  };

  const downloadSvg = () => {
    if (!input) return;

    const blob = new Blob([input], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "image.svg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("SVG downloaded successfully!");
  };

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="SVG Viewer"
        description="View and analyze SVG files instantly with our free online SVG viewer. Upload SVG files or paste SVG code to visualize, edit, and download. Real-time preview with dimension analysis."
      />

      {!loaded ? (
        <SvgViewerSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Tabs for Input Methods */}
                <Tabs defaultValue="paste" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="paste">Paste SVG Code</TabsTrigger>
                    <TabsTrigger value="upload">Upload SVG File</TabsTrigger>
                  </TabsList>

                  {/* Paste SVG Code Tab */}
                  <TabsContent value="paste" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          SVG Code
                        </Label>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleSampleSvg}
                        >
                          Load Sample SVG
                        </Button>
                      </div>
                      <Textarea
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Paste your SVG code here...

Example:
<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'>
  <circle cx='50' cy='50' r='40' fill='blue' />
</svg>"
                        className="h-40 font-mono text-sm resize-none"
                      />
                    </div>
                  </TabsContent>

                  {/* Upload SVG File Tab */}
                  <TabsContent value="upload" className="space-y-4 mt-6">
                    <SvgUpload
                      onSvgSelect={handleSvgFileSelect}
                      selectedFile={selectedFile}
                      onClear={() => setSelectedFile(null)}
                    />
                    {input && (
                      <div className="space-y-3">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          SVG Code (Editable)
                        </Label>
                        <Textarea
                          value={input}
                          onChange={handleInputChange}
                          className="h-32 font-mono text-sm resize-none"
                        />
                      </div>
                    )}
                  </TabsContent>
                </Tabs>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {input.length} characters
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleClear}>
                      Clear
                    </Button>
                    {input && (
                      <Button
                        variant="outline"
                        onClick={downloadSvg}
                        className="flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SVG Preview Card */}
            {(svgDataUrl || error) && (
              <Card className="tool-card-bg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      SVG Preview
                    </CardTitle>
                    {svgDataUrl && (
                      <div className="flex gap-2">
                        <CopyButton text={input} size="sm" />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsFullscreen(!isFullscreen)}
                          className="flex items-center gap-1"
                        >
                          {isFullscreen ? (
                            <Minimize2 className="w-4 h-4" />
                          ) : (
                            <Maximize2 className="w-4 h-4" />
                          )}
                          {isFullscreen ? "Minimize" : "Fullscreen"}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {error ? (
                    <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                      <div className="flex items-center">
                        <span className="font-medium mr-2">⚠️ Error:</span>
                        <span>{error}</span>
                      </div>
                    </div>
                  ) : svgDataUrl ? (
                    <div className="space-y-4">
                      {/* SVG Information */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm">
                        <div>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            Width:
                          </span>
                          <span className="ml-2 text-slate-900 dark:text-slate-100">
                            {svgDimensions.width || "Not specified"}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            Height:
                          </span>
                          <span className="ml-2 text-slate-900 dark:text-slate-100">
                            {svgDimensions.height || "Not specified"}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            Size:
                          </span>
                          <span className="ml-2 text-slate-900 dark:text-slate-100">
                            {(new Blob([input]).size / 1024).toFixed(1)} KB
                          </span>
                        </div>
                      </div>

                      {/* SVG Display */}
                      <div
                        className={`border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-900 overflow-auto ${isFullscreen
                            ? "fixed inset-4 z-50 bg-white dark:bg-slate-900"
                            : "max-h-96"
                          }`}
                      >
                        <div className="flex items-center justify-center min-h-[200px]">
                          <img
                            src={svgDataUrl}
                            alt="SVG Preview"
                            className="max-w-full max-h-full object-contain"
                            onError={() => {
                              setError("Failed to render SVG image");
                              setSvgDataUrl("");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            )}
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <ToolVideo
              title="Learn More: SVG Explained in 100 Seconds"
              description="This short video provides a quick overview of what Scalable Vector Graphics (SVG) are and why they are useful for web design and development."
              videoUrl="https://www.youtube.com/embed/emFMHH2Bfvo"
            />
            {/* About SVG */}
            <Card>
              <CardHeader>
                <CardTitle>About Scalable Vector Graphics (SVG)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    SVG (Scalable Vector Graphics) is a vector image format that
                    uses XML markup to define two-dimensional graphics. Unlike
                    bitmap images, SVGs are resolution-independent and can be
                    scaled to any size without losing quality, making them
                    perfect for responsive web design and high-DPI displays.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Key Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Scalable:</strong> Resolution-independent
                            graphics that look crisp at any size
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Small file size:</strong> Vector-based
                            format results in compact files
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Editable:</strong> Can be modified with code
                            or vector graphics software
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Interactive:</strong> Supports CSS styling
                            and JavaScript manipulation
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
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Website icons and logos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Illustrations and graphics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Charts and data visualizations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Animations and interactive graphics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Print materials requiring sharp graphics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Basic SVG Structure
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-purple-600 dark:text-purple-400">
                        &lt;svg
                      </span>
                      <span className="text-blue-600 dark:text-blue-400">
                        {" "}
                        width="100" height="100"
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        {" "}
                        xmlns="http://www.w3.org/2000/svg"
                      </span>
                      <span className="text-purple-600 dark:text-purple-400">
                        &gt;
                      </span>
                      <br />
                      <span className="ml-4 text-orange-600 dark:text-orange-400">
                        &lt;circle
                      </span>
                      <span className="text-blue-600 dark:text-blue-400">
                        {" "}
                        cx="50" cy="50" r="40" fill="blue"
                      </span>
                      <span className="text-orange-600 dark:text-orange-400">
                        {" "}
                        /&gt;
                      </span>
                      <br />
                      <span className="text-purple-600 dark:text-purple-400">
                        &lt;/svg&gt;
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SVG Optimization Tips */}
            <Card>
              <CardHeader>
                <CardTitle>SVG Optimization and Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Optimizing SVG files is crucial for web performance and user
                    experience. Well-optimized SVGs load faster, consume less
                    bandwidth, and provide better performance across all
                    devices.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Optimization Techniques */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ⚡
                          </span>
                        </span>
                        Optimization Techniques
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Remove unnecessary metadata:</strong> Strip
                            out editor-specific data, comments, and unused
                            namespaces
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Simplify paths:</strong> Reduce the number
                            of points in complex paths while maintaining visual
                            quality
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use efficient shapes:</strong> Prefer basic
                            shapes (circle, rect) over complex paths when
                            possible
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Optimize number precision:</strong> Round
                            coordinates and dimensions to appropriate decimal
                            places
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Implementation Best Practices */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            🎯
                          </span>
                        </span>
                        Implementation Tips
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use viewBox:</strong> Define viewBox for
                            responsive scaling and better control over aspect
                            ratios
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Inline vs External:</strong> Inline small
                            icons for fewer HTTP requests, external for large or
                            reused graphics
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Accessibility:</strong> Always include title
                            and desc elements for screen readers
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Fallback support:</strong> Provide PNG
                            fallbacks for older browsers when necessary
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>💡 Pro Tip:</strong> Use SVG optimization tools
                      like SVGO or online optimizers to automatically reduce
                      file size by 20-80% without visual quality loss. Always
                      test optimized SVGs to ensure they render correctly across
                      different browsers and devices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SVG Elements and Attributes */}
            <Card>
              <CardHeader>
                <CardTitle>SVG Elements and Common Attributes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Understanding SVG elements and their attributes is essential
                    for creating and editing vector graphics. Each element
                    serves a specific purpose in building complex graphics from
                    simple shapes and paths.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Basic Shape Elements
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                          <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                            &lt;circle&gt;
                          </div>
                          <code className="text-xs text-slate-600 dark:text-slate-400">
                            cx, cy (center), r (radius), fill, stroke
                          </code>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                          <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                            &lt;rect&gt;
                          </div>
                          <code className="text-xs text-slate-600 dark:text-slate-400">
                            x, y, width, height, rx, ry (rounded corners)
                          </code>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                          <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                            &lt;line&gt;
                          </div>
                          <code className="text-xs text-slate-600 dark:text-slate-400">
                            x1, y1, x2, y2, stroke, stroke-width
                          </code>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                          <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                            &lt;polygon&gt;
                          </div>
                          <code className="text-xs text-slate-600 dark:text-slate-400">
                            points (coordinate pairs), fill, stroke
                          </code>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Advanced Elements
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                          <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                            &lt;path&gt;
                          </div>
                          <code className="text-xs text-slate-600 dark:text-slate-400">
                            d (path data), fill, stroke, stroke-width
                          </code>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                          <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                            &lt;text&gt;
                          </div>
                          <code className="text-xs text-slate-600 dark:text-slate-400">
                            x, y, font-family, font-size, text-anchor
                          </code>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                          <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                            &lt;g&gt;
                          </div>
                          <code className="text-xs text-slate-600 dark:text-slate-400">
                            transform, id, class (grouping element)
                          </code>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                          <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                            &lt;defs&gt;
                          </div>
                          <code className="text-xs text-slate-600 dark:text-slate-400">
                            Contains reusable elements (gradients, patterns)
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      📚 Essential Resources
                    </h5>
                    <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                      <div>
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/SVG"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          MDN SVG Documentation
                        </a>
                        {
                          " - Comprehensive guide to SVG elements and attributes"
                        }
                      </div>
                      <div>
                        <a
                          href="https://www.w3.org/TR/SVG2/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          W3C SVG Specification
                        </a>
                        {" - Official SVG 2.0 specification"}
                      </div>
                      <div>
                        <a
                          href="https://svgoptimizer.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          SVG Optimizer Tools
                        </a>
                        {" - Online tools for SVG optimization"}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>

          {/* Info Banner */}
          <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mt-6">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              💡 All SVG processing happens locally in your browser. Your files
              and code never leave your device.
            </p>
          </div>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default SvgViewer;
