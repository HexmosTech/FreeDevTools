import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as zstd from "@oneidentity/zstd-js";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ZstdCompressSkeleton from "./_ZstdCompressSkeleton";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ToastProvider";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import ToolVideo from "@/components/tool/ToolVideo"; // Assuming this component exists
import { Download, UploadCloud, X } from "lucide-react";

const { ZstdInit } = zstd;

type Mode = "compress" | "decompress";

const ZstdCompress: React.FC = () => {
  // 1. UPDATED: State is now initialized with placeholder values
  const [mode, setMode] = useState<Mode>("compress");
  const [toolName, setToolName] = useState("Zstd Compressor");
  const [toolDescription, setToolDescription] = useState(
    "Compress files using the high-performance Zstandard (zstd) algorithm."
  );

  const [inputFile, setInputFile] = useState<File | null>(null);
  const [outputData, setOutputData] = useState<Uint8Array | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalSize, setOriginalSize] = useState(0);
  const [processedSize, setProcessedSize] = useState(0);

  const [zstdApi, setZstdApi] = useState<any>(null);
  const [isZstdReady, setIsZstdReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname.includes("zstd-decompress")) {
        setMode("decompress");
        setToolName("Zstd Decompressor");
        setToolDescription(
          "Decompress .zst files instantly using the Zstandard decompression tool. Quickly extract and restore compressed data with high speed and accuracy. Free online Zstd decompressor for developers and data analysts—no installation required."
        );
      } else {
        setMode("compress");
        setToolName("Zstd Compressor");
        setToolDescription(
          "Compress files instantly using the high-performance Zstandard (zstd) algorithm. Achieve fast, efficient, and lossless file compression online—ideal for developers and data analysts. No installation required."
        );
      }
    }

    const initializeZstd = async () => {
      try {
        const codec = await ZstdInit();
        setZstdApi(codec);
        setIsZstdReady(true);
      } catch (err) {
        setError("Failed to load compression library.");
        toast.error("Error: Could not initialize Zstd.");
      }
    };

    initializeZstd();

    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only on mount

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleClear();
      setInputFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleProcess = async () => {
    if (!inputFile || !isZstdReady || !zstdApi) return;

    setError("");
    setIsProcessing(true);
    const toastMessage =
      mode === "compress"
        ? "Compressing your file..."
        : "Decompressing your file...";
    toast.info(toastMessage);

    try {
      const fileBuffer = await inputFile.arrayBuffer();
      const inputBytes = new Uint8Array(fileBuffer);
      setOriginalSize(inputBytes.length);

      let resultBytes: Uint8Array;
      if (mode === "compress") {
        resultBytes = zstdApi.ZstdSimple.compress(inputBytes);
      } else {
        resultBytes = zstdApi.ZstdSimple.decompress(inputBytes);
      }

      setProcessedSize(resultBytes.length);
      setOutputData(resultBytes);

      const successMessage =
        mode === "compress"
          ? "Compression completed!"
          : "Decompression completed!";
      toast.success(successMessage);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      const failureMessage =
        mode === "compress"
          ? `Compression failed: ${errorMessage}`
          : `Decompression failed: ${errorMessage}. Is this a valid .zst file?`;
      setError(failureMessage);
      setOutputData(null);
      toast.error("Processing failed");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!outputData || !inputFile) return;

    const blob = new Blob([outputData]);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;

    if (mode === "compress") {
      a.download = `${inputFile.name}.zst`;
    } else {
      a.download =
        inputFile.name.replace(/\.zst$/i, "") || "decompresssed_file";
    }

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setInputFile(null);
    setOutputData(null);
    setError("");
    setOriginalSize(0);
    setProcessedSize(0);
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

 const handleTabChange = (value: string) => {
   const newMode = value as Mode;
   setMode(newMode);
   handleClear();
   if (newMode === "decompress") {
     setToolName("Zstd Decompressor");
     setToolDescription(
       "Decompress .zst files instantly using the Zstandard decompression tool. Quickly extract and restore compressed data with high speed and accuracy. Free online Zstd decompressor for developers and data analysts—no installation required."
     );
   } else {
     setToolName("Zstd Compressor");
     setToolDescription(
       "Compress files instantly using the high-performance Zstandard (zstd) algorithm. Achieve fast, efficient, and lossless file compression online—ideal for developers and data analysts. No installation required."
     );
   }
 };

  return (
    <ToolContainer>
      <ToolHead name={toolName} description={toolDescription} />

      {!loaded ? (
        <ZstdCompressSkeleton />
      ) : (
        <ToolBody>
          <Tabs
            value={mode}
            onValueChange={handleTabChange}
            className="w-full mt-5"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="compress">Compress</TabsTrigger>
              <TabsTrigger value="decompress">Decompress</TabsTrigger>
            </TabsList>
            <TabsContent value="compress">
              <ToolGridContainer>
                {/* Compressor Input Card */}
                <ToolCardWrapper>
                  <Card className="tool-card-bg-grid">
                    <CardHeader>
                      <CardTitle>Input File</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div
                        {...getRootProps()}
                        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      >
                        <input {...getInputProps()} />
                        <UploadCloud className="w-10 h-10 mb-3 text-slate-500 dark:text-slate-400" />
                        {inputFile ? (
                          <p className="text-center text-slate-700 dark:text-slate-300">
                            {inputFile.name}{" "}
                            <span className="block text-sm text-slate-500">
                              {formatBytes(inputFile.size)}
                            </span>
                          </p>
                        ) : (
                          <p className="text-center text-slate-500 dark:text-slate-400">
                            {isDragActive
                              ? "Drop the file here..."
                              : "Drag & drop a file here, or click to select"}
                          </p>
                        )}
                      </div>
                      <div className="flex space-x-3 mt-4">
                        <Button
                          onClick={handleProcess}
                          className="flex-1"
                          disabled={!inputFile || isProcessing || !isZstdReady}
                        >
                          {isProcessing ? "Compressing..." : "Compress"}
                        </Button>
                        <Button
                          onClick={handleClear}
                          variant="outline"
                          disabled={isProcessing}
                        >
                          <X className="w-4 h-4 mr-2" /> Clear
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ToolCardWrapper>
                {/* Compressor Output Card */}
                <ToolCardWrapper>
                  <Card className="tool-card-bg-grid">
                    <CardHeader>
                      <CardTitle>Output</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col space-y-3 p-4 border rounded-lg min-h-[132px] justify-center border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                        {outputData ? (
                          <>
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-600 dark:text-slate-400">
                                Original Size:
                              </span>
                              <span className="font-mono text-slate-800 dark:text-slate-200">
                                {formatBytes(originalSize)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-600 dark:text-slate-400">
                                Compressed Size:
                              </span>
                              <span className="font-mono text-green-600 dark:text-green-400">
                                {formatBytes(processedSize)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-600 dark:text-slate-400">
                                Ratio:
                              </span>
                              <span className="font-mono text-slate-800 dark:text-slate-200">
                                {(originalSize / processedSize).toFixed(2)}:1
                              </span>
                            </div>
                          </>
                        ) : (
                          <p className="text-center text-slate-500 dark:text-slate-400">
                            Compression results will appear here.
                          </p>
                        )}
                      </div>
                      <Button
                        onClick={handleDownload}
                        className="w-full"
                        disabled={!outputData || isProcessing}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download .zst File
                      </Button>
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                          {error}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </ToolCardWrapper>
              </ToolGridContainer>
            </TabsContent>
            <TabsContent value="decompress">
              <ToolGridContainer>
                {/* Decompressor Input Card */}
                <ToolCardWrapper>
                  <Card className="tool-card-bg-grid">
                    <CardHeader>
                      <CardTitle>Input File (.zst)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div
                        {...getRootProps()}
                        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      >
                        <input {...getInputProps()} />
                        <UploadCloud className="w-10 h-10 mb-3 text-slate-500 dark:text-slate-400" />
                        {inputFile ? (
                          <p className="text-center text-slate-700 dark:text-slate-300">
                            {inputFile.name}{" "}
                            <span className="block text-sm text-slate-500">
                              {formatBytes(inputFile.size)}
                            </span>
                          </p>
                        ) : (
                          <p className="text-center text-slate-500 dark:text-slate-400">
                            {isDragActive
                              ? "Drop the .zst file here..."
                              : "Drag & drop a .zst file here, or click to select"}
                          </p>
                        )}
                      </div>
                      <div className="flex space-x-3 mt-4">
                        <Button
                          onClick={handleProcess}
                          className="flex-1"
                          disabled={!inputFile || isProcessing || !isZstdReady}
                        >
                          {isProcessing ? "Decompressing..." : "Decompress"}
                        </Button>
                        <Button
                          onClick={handleClear}
                          variant="outline"
                          disabled={isProcessing}
                        >
                          <X className="w-4 h-4 mr-2" /> Clear
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ToolCardWrapper>
                {/* Decompressor Output Card */}
                <ToolCardWrapper>
                  <Card className="tool-card-bg-grid">
                    <CardHeader>
                      <CardTitle>Output</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-col space-y-3 p-4 border rounded-lg min-h-[132px] justify-center border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                        {outputData ? (
                          <>
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-600 dark:text-slate-400">
                                Compressed Size:
                              </span>
                              <span className="font-mono text-slate-800 dark:text-slate-200">
                                {formatBytes(originalSize)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-slate-600 dark:text-slate-400">
                                Decompressed Size:
                              </span>
                              <span className="font-mono text-green-600 dark:text-green-400">
                                {formatBytes(processedSize)}
                              </span>
                            </div>
                          </>
                        ) : (
                          <p className="text-center text-slate-500 dark:text-slate-400">
                            Decompression results will appear here.
                          </p>
                        )}
                      </div>
                      <Button
                        onClick={handleDownload}
                        className="w-full"
                        disabled={!outputData || isProcessing}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Decompressed File
                      </Button>
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                          {error}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </ToolCardWrapper>
              </ToolGridContainer>
            </TabsContent>
          </Tabs>

          {/* 4. NEW: Added content and video section */}
          <ToolContentCardWrapper>
            <ToolVideo
              title="Deep dive Zstandard with Meta Team"
              description="Explore the Zstandard compression algorithm. Learn about its design, performance, and real-world applications."
              videoUrl="https://www.youtube.com/embed/hgb0le4oVvY"
            />
            <Card className="tool-content-card-bg-grid">
              <CardHeader>
                <CardTitle>About Zstandard (zstd) Compression</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 dark:text-slate-400 space-y-4">
                <p>
                  <strong>Zstandard (zstd)</strong> is a fast, real-time
                  lossless data compression algorithm developed by Yann Collet
                  at Meta (formerly Facebook). It is designed to provide a very
                  wide range of compression/speed trade-offs, while being backed
                  by an extremely fast decoder.
                </p>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  Key Advantages:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>High Speed:</strong> Zstd offers compression and
                    decompression speeds often measured in GB/s, making it ideal
                    for real-time applications.
                  </li>
                  <li>
                    <strong>High Compression Ratio:</strong> It provides
                    compression ratios comparable to the best currently
                    available general-purpose algorithms (like Brotli or LZMA).
                  </li>
                  <li>
                    <strong>Tunable Levels:</strong> Zstandard features 22
                    compression levels, allowing developers to fine-tune the
                    balance between speed and compression ratio for their
                    specific needs.
                  </li>
                  <li>
                    <strong>Dictionary Compression:</strong> It excels at
                    compressing large numbers of small files by using a
                    pre-trained dictionary, significantly improving ratios in
                    such scenarios.
                  </li>
                </ul>
                <p>
                  Due to its performance and flexibility, Zstandard is widely
                  used in systems like the Linux kernel, AWS, and various
                  databases for efficient data storage and transmission.
                </p>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default ZstdCompress;
