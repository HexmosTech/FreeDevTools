import React, { useState, useEffect } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import SvgPlaceholderGeneratorSkeleton from "./_SvgPlaceholderGeneratorSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import ToolVideo from "@/components/tool/ToolVideo";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import AdBanner from "../../../components/banner/AdBanner";
const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 350;
const DEFAULT_FONT_SIZE = 26;
const DEFAULT_BG = "#cccccc";
const DEFAULT_FG = "#333333";

const SvgPlaceholderGenerator: React.FC = () => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [bgColor, setBgColor] = useState(DEFAULT_BG);
  const [fgColor, setFgColor] = useState(DEFAULT_FG);
  const [customText, setCustomText] = useState("");
  const [useExactSize, setUseExactSize] = useState(true);
  const [output, setOutput] = useState("");
  const [base64, setBase64] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      const w = width;
      const h = height;
      const text = customText.length > 0 ? customText : `${w}x${h}`;
      const sizeAttr = useExactSize ? ` width="${w}" height="${h}"` : "";
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"${sizeAttr}><rect width="${w}" height="${h}" fill="${bgColor}"></rect><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="${fontSize}px" fill="${fgColor}">${text}</text></svg>`;
      setOutput(svg);
      setBase64(
        `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`
      );
      setError("");
    } catch (err) {
      setError("Failed to generate SVG");
      setOutput("");
      setBase64("");
    }
  }, [
    width,
    height,
    fontSize,
    bgColor,
    fgColor,
    customText,
    useExactSize,
    loaded,
  ]);

  const handleCopySVG = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    toast.success("SVG code copied!");
  };
  const handleCopyBase64 = () => {
    if (!base64) return;
    navigator.clipboard.writeText(base64);
    toast.success("Base64 copied!");
  };
  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `svg-placeholder-${width}x${height}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("SVG downloaded!");
  };
  const handleClear = () => {
    setWidth(DEFAULT_WIDTH);
    setHeight(DEFAULT_HEIGHT);
    setFontSize(DEFAULT_FONT_SIZE);
    setBgColor(DEFAULT_BG);
    setFgColor(DEFAULT_FG);
    setCustomText("");
    setUseExactSize(true);
    setError("");
  };

  // Example cost table data
  const modelCosts = [
    { model: "GPT-4", cost: "$0.03 / 1K tokens" },
    { model: "GPT-4o", cost: "$0.005 / 1K tokens" },
    { model: "Claude 3", cost: "$0.008 / 1K tokens" },
    { model: "Llama 3", cost: "$0.002 / 1K tokens" },
    { model: "Deepseek V2", cost: "$0.0015 / 1K tokens" },
  ];

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="SVG Placeholder Generator"
        description="Generate custom SVG placeholder images instantly. Set width, height, background, text color, font size, and custom text for rapid prototyping and responsive design."
      />

      {!loaded ? (
        <SvgPlaceholderGeneratorSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <div className="tool-card-bg space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Configuration Panel - Left Side */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                      Configuration
                    </h3>
                    <div className="space-y-4">
                      {/* Dimensions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="width"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Width (px)
                          </label>
                          <input
                            type="number"
                            id="width"
                            min={1}
                            value={width}
                            onChange={(e) => setWidth(Number(e.target.value))}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="height"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Height (px)
                          </label>
                          <input
                            type="number"
                            id="height"
                            min={1}
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                          />
                        </div>
                      </div>

                      {/* Colors */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="bgColor"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Background Color
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="color"
                              id="bgColor"
                              value={bgColor}
                              onChange={(e) => setBgColor(e.target.value)}
                              className="w-12 h-10 border border-slate-300 rounded-lg cursor-pointer"
                            />
                            <input
                              type="text"
                              value={bgColor}
                              onChange={(e) => setBgColor(e.target.value)}
                              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="fgColor"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                          >
                            Text Color
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="color"
                              id="fgColor"
                              value={fgColor}
                              onChange={(e) => setFgColor(e.target.value)}
                              className="w-12 h-10 border border-slate-300 rounded-lg cursor-pointer"
                            />
                            <input
                              type="text"
                              value={fgColor}
                              onChange={(e) => setFgColor(e.target.value)}
                              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Font Size */}
                      <div>
                        <label
                          htmlFor="fontSize"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Font Size (px)
                        </label>
                        <input
                          type="number"
                          id="fontSize"
                          min={1}
                          value={fontSize}
                          onChange={(e) => setFontSize(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                        />
                      </div>

                      {/* Custom Text */}
                      <div>
                        <label
                          htmlFor="customText"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Custom Text
                        </label>
                        <input
                          type="text"
                          id="customText"
                          value={customText}
                          onChange={(e) => setCustomText(e.target.value)}
                          placeholder={`Default: ${width}x${height}`}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                        />
                      </div>

                      {/* Options */}
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="useExactSize"
                          checked={useExactSize}
                          onChange={(e) => setUseExactSize(e.target.checked)}
                          className="rounded"
                        />
                        <label
                          htmlFor="useExactSize"
                          className="text-sm text-slate-700 dark:text-slate-300"
                        >
                          Use exact size attributes
                        </label>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button onClick={handleClear} variant="outline">
                          Reset
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview and Code Panel - Right Side */}
                <div className="space-y-6">
                  {/* Preview */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Preview
                      </h3>
                      {output && (
                        <Button
                          onClick={handleDownload}
                          variant="outline"
                          size="sm"
                          className="p-2"
                          title="Download SVG"
                        >
                          <Download className="w-5 h-5" />
                        </Button>
                      )}
                    </div>
                    <div className="border border-slate-300 rounded-lg p-6 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 min-h-[200px] flex items-center justify-center">
                      {base64 ? (
                        <img
                          src={base64}
                          alt="SVG preview"
                          className="max-w-full max-h-[300px] h-auto rounded border shadow-sm"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            width: width > 400 ? "400px" : `${width}px`,
                          }}
                        />
                      ) : (
                        <div className="text-slate-400 dark:text-slate-500 text-center">
                          <div className="text-4xl mb-2">🖼️</div>
                          <div>Preview will appear here</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SVG Code */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        SVG Code
                      </label>
                      {output && <CopyButton text={output} />}
                    </div>
                    <textarea
                      value={output}
                      readOnly
                      className="w-full h-32 p-3 border border-slate-300 rounded-lg resize-none bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-xs leading-relaxed"
                      placeholder="SVG code will appear here..."
                    />
                  </div>

                  {/* Base64 Code */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Base64 Data URL
                      </label>
                      {base64 && <CopyButton text={base64} />}
                    </div>
                    <textarea
                      value={base64}
                      readOnly
                      className="w-full h-20 p-3 border border-slate-300 rounded-lg resize-none bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-xs leading-relaxed break-all"
                      placeholder="Base64 data URL will appear here..."
                    />
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
                        <div className="font-medium">Generation Error</div>
                        <div className="text-sm mt-1">{error}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ToolCardWrapper>
          <ToolContentCardWrapper>
            <ToolVideo
              videoUrl="https://www.youtube.com/embed/emFMHH2Bfvo"
              title="SVG Explained in 100 Seconds"
              description="Learn about SVGs and their benefits for web design and development."
            />

            {/* SVG Placeholder Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  What is an SVG Placeholder?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    SVG placeholders are scalable, lightweight images used to fill space in layouts, mockups, and prototypes. They are ideal for responsive design, as SVGs scale perfectly on any device and can be customized for color, size, and text.
                  </p>
                  <p>
                    <strong>Benefits:</strong> SVG placeholders load instantly, require no external assets, and can be styled to match your brand or design system. They are perfect for wireframes, skeleton screens, and preview images in web and app development.
                  </p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Scalable to any resolution without loss of quality</li>
                    <li>Customizable colors, text, and dimensions</li>
                    <li>Great for rapid prototyping and design handoff</li>
                    <li>Improves perceived performance with instant visuals</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            {/* About Card (existing) */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                About SVG Placeholder Generator
              </h3>
              <div className="text-slate-800 dark:text-slate-400 space-y-2">
                <p>
                  Instantly generate custom SVG placeholder images for rapid
                  prototyping, design mockups, and responsive layouts. Set width,
                  height, background, text color, font size, and custom text. Copy
                  SVG code, Base64 string, or download the image for use in your
                  projects.
                </p>
                <p>
                  <strong>Common uses:</strong> Web development, UI/UX design,
                  image mockups, responsive layout testing, and placeholder
                  graphics for apps and websites.
                </p>

              </div>
            </div>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default SvgPlaceholderGenerator;
