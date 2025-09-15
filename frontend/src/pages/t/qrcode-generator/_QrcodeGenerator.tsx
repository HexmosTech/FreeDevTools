import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import QrcodeGeneratorSkeleton from "./_QrcodeGeneratorSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getToolByKey, type Tool } from "@/config/tools";
import QRCode from "qrcode";

type ErrorCorrectionLevel = "low" | "medium" | "quartile" | "high";

const generateQRCode = async (
  text: string,
  options: { errorCorrectionLevel: ErrorCorrectionLevel; scale: number }
): Promise<string> => {
  const qrOptions = {
    errorCorrectionLevel: options.errorCorrectionLevel
      .charAt(0)
      .toUpperCase() as "L" | "M" | "Q" | "H",
    scale: options.scale,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  };

  // Map error correction levels
  switch (options.errorCorrectionLevel) {
    case "low":
      qrOptions.errorCorrectionLevel = "L";
      break;
    case "medium":
      qrOptions.errorCorrectionLevel = "M";
      break;
    case "quartile":
      qrOptions.errorCorrectionLevel = "Q";
      break;
    case "high":
      qrOptions.errorCorrectionLevel = "H";
      break;
  }

  return QRCode.toDataURL(text, qrOptions);
};

const QrcodeGenerator: React.FC = () => {
  const toolConfig: Tool = getToolByKey("qrcode-generator")!;
  const [input, setInput] = useState("https://hexmos.com/freedevtools");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [errorCorrectionLevel, setErrorCorrectionLevel] =
    useState<ErrorCorrectionLevel>("medium");
  const [scale, setScale] = useState("4");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const generateQR = useCallback(async () => {
    if (!input.trim()) {
      setQrCodeUrl("");
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const dataUrl = await generateQRCode(input, {
        errorCorrectionLevel,
        scale: parseInt(scale, 10),
      });
      setQrCodeUrl(dataUrl);
    } catch (err: any) {
      setError(err.message || "Failed to generate QR code");
      setQrCodeUrl("");
      toast.error("Failed to generate QR code");
    } finally {
      setIsGenerating(false);
    }
  }, [input, errorCorrectionLevel, scale]);

  useEffect(() => {
    generateQR();
  }, [generateQR]);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleClear = () => {
    setInput("");
    setQrCodeUrl("");
    setError("");
  };

  const handleDownload = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrCodeUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("QR code downloaded successfully!");
  };

  const loadSample = () => {
    const samples = [
      "https://hexmos.com/freedevtools",
      "Hello, World! This is a QR code.",
      "mailto:contact@example.com",
      "tel:+1234567890",
      "Contact: John Doe\nPhone: +1234567890\nEmail: john@example.com",
    ];
    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    setInput(randomSample);
  };

  return (
    <ToolContainer>
      <ToolHead name={toolConfig.name} description={toolConfig.description} />

      {!loaded ? (
        <QrcodeGeneratorSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Input Section - Left Side */}
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Text or URL to Encode
                      </Label>
                      <Textarea
                        value={input}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Enter text, URL, or data to generate QR code..."
                        className="min-h-[120px] font-mono text-sm"
                      />
                    </div>

                    {/* QR Code Settings */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Error Correction Level
                        </Label>
                        <Select
                          value={errorCorrectionLevel}
                          onValueChange={(value: string) =>
                            setErrorCorrectionLevel(
                              value as ErrorCorrectionLevel
                            )
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low (~7%)</SelectItem>
                            <SelectItem value="medium">
                              Medium (~15%)
                            </SelectItem>
                            <SelectItem value="quartile">
                              Quartile (~25%)
                            </SelectItem>
                            <SelectItem value="high">High (~30%)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Scale (Size)
                        </Label>
                        <Select value={scale} onValueChange={setScale}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}x ({num * 21}px)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        onClick={handleClear}
                        variant="outline"
                        className="flex-1"
                      >
                        Clear
                      </Button>
                      <Button
                        onClick={loadSample}
                        variant="secondary"
                        className="flex-1"
                      >
                        Load Sample
                      </Button>
                    </div>

                    {error && (
                      <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                        <p className="text-destructive text-sm">{error}</p>
                      </div>
                    )}
                  </div>

                  {/* QR Code Output - Right Side */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Generated QR Code
                      </Label>
                      {qrCodeUrl && (
                        <div className="flex gap-2">
                          <CopyButton text={qrCodeUrl} disabled={!qrCodeUrl} />
                          <Button
                            onClick={handleDownload}
                            size="sm"
                            variant="outline"
                          >
                            Download PNG
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center min-h-[300px] border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      {isGenerating ? (
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Generating QR code...
                          </p>
                        </div>
                      ) : qrCodeUrl ? (
                        <div className="text-center">
                          <img
                            src={qrCodeUrl}
                            alt="Generated QR Code"
                            className="max-w-full max-h-[280px] mx-auto rounded-lg"
                            style={{ imageRendering: "pixelated" }}
                          />
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                            Click download to save as PNG
                          </p>
                        </div>
                      ) : (
                        <div className="text-center text-slate-500 dark:text-slate-400">
                          <div className="text-4xl mb-2">📱</div>
                          <p>Enter text above to generate QR code</p>
                        </div>
                      )}
                    </div>

                    {/* QR Code Info */}
                    {input && qrCodeUrl && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
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
                              Error Correction:
                            </span>
                            <span className="ml-2 font-mono text-blue-800 dark:text-blue-200 capitalize">
                              {errorCorrectionLevel}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>What is QR Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-600 dark:text-slate-400 space-y-4">
                  <p>
                    QR (Quick Response) codes are two-dimensional barcodes that
                    can store various types of data including URLs, text,
                    contact information, and more. They're widely used for quick
                    data sharing and mobile interactions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Error Correction Levels
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Low (~7%):</strong> Suitable for clean
                            environments
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Medium (~15%):</strong> General purpose use
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Quartile (~25%):</strong> Industrial
                            environments
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>High (~30%):</strong> Harsh conditions
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
                          <span>Website URLs and links</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Contact information (vCard)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>WiFi network credentials</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Social media profiles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Email addresses and phone numbers</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example QR code data formats
                    </div>
                    <div className="space-y-2 text-slate-800 dark:text-slate-200">
                      <div>
                        <span className="text-blue-600 dark:text-blue-400">
                          URL:
                        </span>{" "}
                        https://example.com
                      </div>
                      <div>
                        <span className="text-green-600 dark:text-green-400">
                          Email:
                        </span>{" "}
                        mailto:contact@example.com
                      </div>
                      <div>
                        <span className="text-purple-600 dark:text-purple-400">
                          Phone:
                        </span>{" "}
                        tel:+1234567890
                      </div>
                      <div>
                        <span className="text-orange-600 dark:text-orange-400">
                          WiFi:
                        </span>{" "}
                        WIFI:T:WPA;S:NetworkName;P:Password;;
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Practices for QR Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-600 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ✅
                          </span>
                        </span>
                        Design Guidelines
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Size:</strong> Ensure QR codes are large
                            enough to scan easily (minimum 2x2 cm)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Contrast:</strong> Use high contrast between
                            foreground and background
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Quiet Zone:</strong> Maintain clear space
                            around the QR code
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Testing:</strong> Always test QR codes
                            before printing or publishing
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            📱
                          </span>
                        </span>
                        Usage Tips
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>URL Shortening:</strong> Use short URLs to
                            create simpler QR codes
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Call to Action:</strong> Include clear
                            instructions on what the QR code does
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Error Correction:</strong> Use higher error
                            correction for outdoor or damaged surfaces
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Analytics:</strong> Consider using trackable
                            URLs to measure engagement
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> QR codes can store up to
                      7,089 numeric characters or 4,296 alphanumeric characters.
                      For longer content, consider using a URL that redirects to
                      your full content.
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

export default QrcodeGenerator;
