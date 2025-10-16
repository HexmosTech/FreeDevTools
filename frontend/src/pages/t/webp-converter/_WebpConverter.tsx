import React, { useState, useEffect, useCallback, useMemo } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import WebpConverterSkeleton from "./_WebpConverterSkeleton";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { FileImageIcon, DownloadIcon, TrashIcon, Upload } from "lucide-react";
import AdBanner from "../../../components/banner/AdBanner";

// WebP conversion utilities
const MAX_FILE_SIZE = 40 * 1024 * 1024; // 40MB per file

interface FileItem {
  file: File;
  id: string;
}

interface ConversionResult {
  id: string;
  originalName: string;
  originalSize: number;
  webpSize: number;
  webpBlob: Blob;
  success: boolean;
  error?: string;
}

const convertToWebP = async (
  file: File,
  quality: number
): Promise<{ blob: Blob; size: number }> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve({ blob, size: blob.size });
          } else {
            reject(new Error("Failed to convert image"));
          }
        },
        "image/webp",
        quality / 100
      );
    };

    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };

    img.src = URL.createObjectURL(file);
  });
};

const batchConvertToWebP = async (
  files: File[],
  quality: number,
  onProgress?: (completed: number, total: number) => void
): Promise<ConversionResult[]> => {
  const results: ConversionResult[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    try {
      const { blob, size } = await convertToWebP(file, quality);

      results.push({
        id: `${Date.now()}-${i}`,
        originalName: file.name,
        originalSize: file.size,
        webpSize: size,
        webpBlob: blob,
        success: true,
      });
    } catch (error) {
      results.push({
        id: `${Date.now()}-${i}`,
        originalName: file.name,
        originalSize: file.size,
        webpSize: 0,
        webpBlob: new Blob(),
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }

    onProgress?.(i + 1, files.length);
  }

  return results;
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const downloadFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const downloadZip = async (results: ConversionResult[]) => {
  // Simple ZIP creation (you might want to use a library like JSZip for better ZIP support)
  const successfulResults = results.filter((r) => r.success);

  if (successfulResults.length === 1) {
    const result = successfulResults[0];
    const filename = result.originalName.replace(/\.[^/.]+$/, ".webp");
    downloadFile(result.webpBlob, filename);
  } else {
    // For multiple files, download each individually for now
    // In a real implementation, you'd use JSZip to create a proper ZIP
    for (const result of successfulResults) {
      const filename = result.originalName.replace(/\.[^/.]+$/, ".webp");
      downloadFile(result.webpBlob, filename);
    }
  }
};

const WebpConverter: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [quality, setQuality] = useState(80);
  const [autoDownload, setAutoDownload] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionResults, setConversionResults] = useState<
    ConversionResult[]
  >([]);
  const [progress, setProgress] = useState<{
    completed: number;
    total: number;
  } | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const savedQuality = localStorage.getItem("webp-converter-quality");
    if (savedQuality) {
      const parsedQuality = parseInt(savedQuality);
      if (parsedQuality >= 1 && parsedQuality <= 100) {
        setQuality(parsedQuality);
      }
    }

    const savedAutoDownload = localStorage.getItem(
      "webp-converter-auto-download"
    );
    if (savedAutoDownload) {
      setAutoDownload(savedAutoDownload === "true");
    }
  }, []);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (!selectedFiles) return;

      const supportedFiles = Array.from(selectedFiles).filter((file) => {
        if (file.size > MAX_FILE_SIZE) {
          toast.error(`${file.name} is too large. Maximum size is 40MB.`);
          return false;
        }
        if (!file.type.startsWith("image/")) {
          toast.error(`${file.name} is not a valid image file.`);
          return false;
        }
        return true;
      });

      const newFileItems: FileItem[] = supportedFiles.map((file, index) => ({
        file,
        id: `${Date.now()}-${index}`,
      }));

      setFiles((prev) => [...prev, ...newFileItems]);
      setConversionResults([]);

      // Reset the input
      event.target.value = "";
    },
    []
  );

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearAllFiles = useCallback(() => {
    setFiles([]);
    setConversionResults([]);
    setProgress(null);
  }, []);

  const handleQualityChange = useCallback((value: number[]) => {
    const newQuality = Math.max(1, Math.min(100, value[0]));
    setQuality(newQuality);
    localStorage.setItem("webp-converter-quality", newQuality.toString());
  }, []);

  const handleQualityInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      const newQuality = Math.max(1, Math.min(100, value));
      setQuality(newQuality);
      localStorage.setItem("webp-converter-quality", newQuality.toString());
    },
    []
  );

  const handleAutoDownloadChange = useCallback((checked: boolean) => {
    setAutoDownload(checked);
    localStorage.setItem("webp-converter-auto-download", checked.toString());
  }, []);

  const handleConvert = useCallback(async () => {
    if (files.length === 0) return;

    setIsConverting(true);
    setProgress({ completed: 0, total: files.length });
    setConversionResults([]);

    try {
      const results = await batchConvertToWebP(
        files.map((f) => f.file),
        quality,
        (completed, total) => {
          setProgress({ completed, total });
        }
      );

      setConversionResults(results);

      const successfulResults = results.filter((r) => r.success);
      if (successfulResults.length > 0) {
        toast.success(
          `${successfulResults.length} image(s) converted successfully!`
        );

        if (autoDownload) {
          await downloadZip(successfulResults);
        }
      } else {
        toast.error("No images were converted successfully.");
      }

      if (results.some((r) => !r.success)) {
        const failedCount = results.filter((r) => !r.success).length;
        toast.error(`${failedCount} image(s) failed to convert.`);
      }
    } catch (error) {
      toast.error("Conversion failed");
      console.error("Conversion error:", error);
    } finally {
      setIsConverting(false);
      setProgress(null);
    }
  }, [files, quality, autoDownload]);

  const handleDownloadAll = useCallback(async () => {
    if (conversionResults.length === 0) return;

    const successfulResults = conversionResults.filter((r) => r.success);
    if (successfulResults.length > 0) {
      await downloadZip(successfulResults);
    }
  }, [conversionResults]);

  const totalOriginalSize = useMemo(() => {
    return files.reduce((sum, item) => sum + item.file.size, 0);
  }, [files]);

  const conversionStats = useMemo(() => {
    if (conversionResults.length === 0) return null;

    const successful = conversionResults.filter((r) => r.success);
    const totalOriginal = conversionResults.reduce(
      (sum, r) => sum + r.originalSize,
      0
    );
    const totalWebP = conversionResults.reduce((sum, r) => sum + r.webpSize, 0);
    const compressionRatio =
      totalOriginal > 0
        ? ((totalOriginal - totalWebP) / totalOriginal) * 100
        : 0;

    return {
      successful: successful.length,
      failed: conversionResults.length - successful.length,
      totalOriginal,
      totalWebP,
      compressionRatio,
    };
  }, [conversionResults]);

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="WebP Converter"
        description="Convert images to WebP format instantly with our free online converter. Upload JPG, PNG, GIF images and convert to WebP with adjustable quality settings. Batch processing and download support included."
      />

      {!loaded ? (
        <WebpConverterSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload Area */}
                <div className="space-y-4">
                  <div
                    className="relative border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-muted-foreground/50 transition-colors cursor-pointer"
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const files = e.dataTransfer.files;
                      if (files.length > 0) {
                        const event = {
                          target: { files, value: "" },
                        } as React.ChangeEvent<HTMLInputElement>;
                        handleFileUpload(event);
                      }
                    }}
                  >
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium">
                        Drag & drop images here, or click to select
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supports JPG, PNG, GIF • Max 40MB per file
                      </p>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Selected Files */}
                {files.length > 0 && (
                  <div
                    className="space-y-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="font-medium">
                          Selected Files ({files.length})
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Total size: {formatFileSize(totalOriginalSize)}
                        </p>
                      </div>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          clearAllFiles();
                        }}
                        variant="outline"
                        size="sm"
                      >
                        <TrashIcon className="h-4 w-4 mr-1" />
                        Clear All
                      </Button>
                    </div>

                    <div className="max-h-48 overflow-y-auto space-y-2">
                      {files.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-3 border rounded-lg bg-muted/30"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center min-w-0 flex-1">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded flex items-center justify-center mr-3">
                              <FileImageIcon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-sm truncate">
                                {item.file.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {formatFileSize(item.file.size)}
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(item.id);
                            }}
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quality Settings */}
                {files.length > 0 && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-3">
                      <Label className="font-medium">Quality: {quality}%</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[quality]}
                          onValueChange={handleQualityChange}
                          max={100}
                          min={1}
                          step={1}
                          className="flex-1"
                        />
                        <Input
                          type="number"
                          min="1"
                          max="100"
                          value={quality}
                          onChange={handleQualityInputChange}
                          className="w-20"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Lower quality = smaller file size, higher quality =
                        better image quality
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="auto-download"
                        checked={autoDownload}
                        onCheckedChange={handleAutoDownloadChange}
                      />
                      <Label
                        htmlFor="auto-download"
                        className="text-sm cursor-pointer"
                      >
                        Automatically download after conversion
                      </Label>
                    </div>
                  </div>
                )}

                {/* Convert Actions */}
                {files.length > 0 && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex gap-3">
                      <Button
                        onClick={handleConvert}
                        disabled={isConverting || files.length === 0}
                        className="flex-1"
                      >
                        {isConverting ? "Converting..." : "Convert to WebP"}
                      </Button>

                      {conversionResults.length > 0 && (
                        <Button
                          onClick={handleDownloadAll}
                          variant="outline"
                          disabled={
                            conversionResults.filter((r) => r.success)
                              .length === 0
                          }
                        >
                          <DownloadIcon className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>

                    {/* Progress */}
                    {progress && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Converting images...</span>
                          <span className="text-muted-foreground">
                            {progress.completed}/{progress.total}
                          </span>
                        </div>
                        <Progress
                          value={(progress.completed / progress.total) * 100}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Conversion Results */}
                {conversionStats && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="text-center p-6 bg-muted/30 rounded-lg">
                      <h3 className="font-semibold mb-4">
                        {conversionStats.successful} image(s) converted
                        successfully
                        {conversionStats.failed > 0 && (
                          <span className="text-destructive ml-1">
                            • {conversionStats.failed} failed
                          </span>
                        )}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            Original Size
                          </div>
                          <div className="font-bold">
                            {formatFileSize(conversionStats.totalOriginal)}
                          </div>
                        </div>

                        <div className="flex items-center justify-center">
                          <div className="text-muted-foreground">→</div>
                        </div>

                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            WebP Size
                          </div>
                          <div className="font-bold">
                            {formatFileSize(conversionStats.totalWebP)}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <div className="text-2xl font-bold text-green-600 mb-2">
                          {conversionStats.compressionRatio.toFixed(1)}%
                          reduction
                        </div>
                        <div className="text-green-600 font-medium">
                          {formatFileSize(
                            conversionStats.totalOriginal -
                            conversionStats.totalWebP
                          )}{" "}
                          saved
                        </div>
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
                <CardTitle>Understanding WebP Image Format</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    WebP is a modern image format developed by Google that
                    provides superior compression compared to traditional
                    formats like JPEG and PNG. It delivers smaller file sizes
                    while maintaining high image quality, making it ideal for
                    web optimization.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        WebP Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Smaller File Sizes:</strong> 25-35% smaller
                            than JPEG, 26% smaller than PNG
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Lossless & Lossy:</strong> Supports both
                            compression types
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Transparency:</strong> Full alpha channel
                            support
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Animation:</strong> Supports animated images
                            like GIF
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Best Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Website images and graphics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Mobile app assets</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>E-commerce product photos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Social media images</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Email newsletter graphics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Quality Settings Guide
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong>High Quality (80-100%):</strong> Best for
                        detailed photos, minimal compression artifacts
                      </div>
                      <div>
                        <strong>Medium Quality (60-80%):</strong> Good balance
                        for most web images
                      </div>
                      <div>
                        <strong>Low Quality (30-60%):</strong> Maximum
                        compression for thumbnails or large batches
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  WebP Browser Support and Implementation Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Browser Support */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            🌐
                          </span>
                        </span>
                        Browser Support
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Chrome:</strong> Full support since version
                            23 (2012)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Firefox:</strong> Support since version 65
                            (2019)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Safari:</strong> Support since version 14
                            (2020)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Edge:</strong> Support since version 18
                            (2018)
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Implementation Tips */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            💡
                          </span>
                        </span>
                        Implementation Tips
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Picture Element:</strong> Use HTML5 picture
                            for fallbacks
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Server Detection:</strong> Check Accept
                            headers for WebP support
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>CDN Integration:</strong> Use CDNs with
                            automatic WebP conversion
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Testing:</strong> Always test on different
                            devices and browsers
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Performance Benefits */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            ⚡
                          </span>
                        </span>
                        Performance Benefits
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Faster Loading:</strong> Smaller files load
                            quicker
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Bandwidth Savings:</strong> Reduced data
                            usage for users
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>SEO Benefits:</strong> Better Core Web
                            Vitals scores
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Mobile Friendly:</strong> Especially
                            important for mobile users
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Fallback Strategy */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            🔄
                          </span>
                        </span>
                        Fallback Strategy
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Progressive Enhancement:</strong> Start with
                            standard formats
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Feature Detection:</strong> Use JavaScript
                            to detect support
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Graceful Degradation:</strong> Always
                            provide JPEG/PNG backups
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Automatic Switching:</strong> Use CDN or
                            server-side solutions
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                      HTML Implementation Example
                    </h5>
                    <div className="bg-slate-800 dark:bg-slate-900 rounded p-4 font-mono text-sm overflow-x-auto">
                      <div className="text-slate-300">
                        {`<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description">
</picture>`}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>💡 Pro Tip:</strong> WebP is now supported by over
                      96% of browsers worldwide. For maximum compatibility, use
                      the picture element with WebP as the primary source and
                      JPEG/PNG as fallback. This ensures optimal performance for
                      modern browsers while maintaining compatibility with older
                      ones.
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

export default WebpConverter;
