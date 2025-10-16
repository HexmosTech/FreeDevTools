import React, { useState, useEffect } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import RgbToHexSkeleton from "./_RgbToHexSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import ToolVideo from "@/components/tool/ToolVideo";
import AdBanner from "../../../components/banner/AdBanner";

// RGB to HEX conversion utility functions
interface RGBValues {
  r: string;
  g: string;
  b: string;
}

const DEFAULT_RGB: RGBValues = { r: "0", g: "0", b: "0" };

const isRGBValueValid = (value: number): boolean => {
  return !isNaN(value) && value >= 0 && value <= 255;
};

const isValidHex = (hex: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
};

const convertToHex = (r: string, g: string, b: string): string => {
  const rNum = parseInt(r) || 0;
  const gNum = parseInt(g) || 0;
  const bNum = parseInt(b) || 0;

  const rHex = rNum.toString(16).padStart(2, "0");
  const gHex = gNum.toString(16).padStart(2, "0");
  const bHex = bNum.toString(16).padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`.toUpperCase();
};

const convertToRGB = (hex: string): RGBValues => {
  let cleanHex = hex.replace("#", "");

  // Convert 3-digit hex to 6-digit
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return {
    r: r.toString(),
    g: g.toString(),
    b: b.toString(),
  };
};

const toCss = (rgb: RGBValues): string => {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
};

const toHsl = (rgb: RGBValues): string => {
  const r = parseInt(rgb.r) / 255;
  const g = parseInt(rgb.g) / 255;
  const b = parseInt(rgb.b) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

const toAndroidColor = (rgb: RGBValues): string => {
  const hex = convertToHex(rgb.r, rgb.g, rgb.b).replace("#", "");
  return `Color.parseColor("#${hex}")`;
};

const toIOS = (rgb: RGBValues, type: "c" | "swift"): string => {
  const r = parseInt(rgb.r) / 255;
  const g = parseInt(rgb.g) / 255;
  const b = parseInt(rgb.b) / 255;

  if (type === "swift") {
    return `UIColor(red: ${r.toFixed(3)}, green: ${g.toFixed(3)}, blue: ${b.toFixed(3)}, alpha: 1.0)`;
  } else {
    return `[UIColor colorWithRed:${r.toFixed(3)} green:${g.toFixed(3)} blue:${b.toFixed(3)} alpha:1.0]`;
  }
};

interface CodeSnippetRowProps {
  label: string;
  value: string;
}

const CodeSnippetRow: React.FC<CodeSnippetRowProps> = ({ label, value }) => {
  return (
    <div className="flex items-center space-x-4 py-2">
      <Label className="min-w-[80px] text-sm font-medium">{label}</Label>
      <div className="flex-1 flex items-center space-x-2">
        <Input
          value={value}
          readOnly
          className="font-mono text-sm bg-slate-50 dark:bg-slate-800"
        />
        <CopyButton text={value} size="sm" />
      </div>
    </div>
  );
};

const RgbToHex: React.FC = () => {
  const [hex, setHex] = useState("#000000");
  const [rgb, setRgb] = useState<RGBValues>(DEFAULT_RGB);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleRGBChange = (
    key: keyof RGBValues,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;

    if (value === "" || isRGBValueValid(parseInt(value))) {
      setRgb((prevRgb: RGBValues) => {
        const newRgb = { ...prevRgb, [key]: value };
        const newHex = convertToHex(newRgb.r, newRgb.g, newRgb.b);
        setHex(newHex);
        return newRgb;
      });
    }
  };

  const handleHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const invalidHexChars = /[^#0-9A-F]/gi;
    let value = event.target.value.trim().toUpperCase();

    if (value && !value.startsWith("#")) {
      value = "#" + value;
    }

    value = value.replace(invalidHexChars, "");
    if (value === "") {
      setRgb(DEFAULT_RGB);
    }

    setHex(value);

    if (isValidHex(value)) {
      const newRgb = convertToRGB(value);
      setRgb(newRgb);
    }
  };

  const handleClear = () => {
    setHex("#000000");
    setRgb(DEFAULT_RGB);
  };
  return (
    <ToolContainer>
            <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="RGB to HEX Converter"
        description="Convert RGB color values to HEX format instantly with our free online RGB to HEX converter. Transform red, green, blue values to hexadecimal color codes with real-time preview and multiple format outputs."
      />

      {!loaded ? (
        <RgbToHexSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Color Conversion Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* RGB Input - Left Side */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      RGB Values
                    </Label>
                    <div className="grid grid-cols-3 gap-4">
                      {(["r", "g", "b"] as (keyof RGBValues)[]).map(
                        (colorKey) => {
                          const colorNameMap: {
                            [key in keyof RGBValues]: string;
                          } = {
                            r: "Red",
                            g: "Green",
                            b: "Blue",
                          };

                          return (
                            <div key={colorKey}>
                              <Label className="text-xs text-slate-600 dark:text-slate-400 block mb-2">
                                {colorNameMap[colorKey]}
                              </Label>
                              <Input
                                type="number"
                                value={rgb[colorKey]}
                                onChange={(event) =>
                                  handleRGBChange(colorKey, event)
                                }
                                onFocus={(e) => e.currentTarget.select()}
                                placeholder="0"
                                min="0"
                                max="255"
                                className="text-center"
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* HEX Output - Right Side */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      HEX Value
                    </Label>
                    <div className="flex items-center space-x-4">
                      <Input
                        placeholder="#000000"
                        onChange={handleHexChange}
                        value={hex}
                        maxLength={7}
                        className="font-mono flex-1"
                      />
                      <div
                        className="w-12 h-12 border rounded-lg flex-shrink-0"
                        style={{
                          backgroundColor: isValidHex(hex) ? hex : "#000000",
                        }}
                        title={`Color preview: ${hex}`}
                      ></div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Current color: rgb({rgb.r}, {rgb.g}, {rgb.b})
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button onClick={handleClear} variant="outline">
                    Clear
                  </Button>
                  <div className="flex items-center space-x-2">
                    <CopyButton text={hex} size="sm" />
                  </div>
                </div>

                {/* Color Format Outputs */}
                <div className="space-y-4">
                  <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Format Outputs
                  </Label>

                  <div className="space-y-3">
                    <CodeSnippetRow label="CSS" value={toCss(rgb)} />
                    <CodeSnippetRow label="HSL" value={toHsl(rgb)} />
                    <CodeSnippetRow label="Swift" value={toIOS(rgb, "swift")} />
                    <CodeSnippetRow label="Obj-C" value={toIOS(rgb, "c")} />
                    <CodeSnippetRow
                      label="Android"
                      value={toAndroidColor(rgb)}
                    />
                  </div>
                </div>

                {/* Info Banner */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 Real-time conversion: RGB values are instantly converted
                    to HEX and other color formats as you type.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* About RGB to HEX Conversion */}
            <Card>
              <CardHeader>
                <CardTitle>About RGB to HEX Color Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    RGB to HEX conversion transforms color values from the Red,
                    Green, Blue (RGB) color model to hexadecimal (HEX) notation.
                    RGB uses decimal values from 0-255 for each color channel,
                    while HEX uses a compact 6-character hexadecimal
                    representation that's widely used in web development and
                    digital design.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        RGB Color Model
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Red:</strong> Values from 0-255 representing
                            red intensity
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Green:</strong> Values from 0-255
                            representing green intensity
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Blue:</strong> Values from 0-255
                            representing blue intensity
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Additive color model used in digital displays
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        HEX Color Format
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>6-digit hexadecimal notation (#RRGGBB)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Compact representation for web development
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Widely supported across all browsers and design
                            tools
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Case-insensitive format (FF = ff)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Conversion Example
                    </div>
                    <div className="text-slate-800 dark:text-slate-200 space-y-1">
                      <div>
                        RGB(255, 0, 0) →{" "}
                        <span className="text-red-600">#FF0000</span> (Pure Red)
                      </div>
                      <div>
                        RGB(0, 255, 0) →{" "}
                        <span className="text-green-600">#00FF00</span> (Pure
                        Green)
                      </div>
                      <div>
                        RGB(0, 0, 255) →{" "}
                        <span className="text-blue-600">#0000FF</span> (Pure
                        Blue)
                      </div>
                      <div>
                        RGB(255, 255, 255) →{" "}
                        <span className="text-gray-600">#FFFFFF</span> (White)
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use Cases for RGB to HEX Conversion */}
            <Card>
              <CardHeader>
                <CardTitle>
                  Common Use Cases for RGB to HEX Conversion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Web Development */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            🌐
                          </span>
                        </span>
                        Web Development
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>CSS Styling:</strong> Convert RGB colors
                            from design tools to HEX for use in CSS stylesheets
                            and inline styles
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Theme Development:</strong> Create
                            consistent color palettes and themes using HEX
                            values for better maintainability
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Brand Colors:</strong> Implement exact brand
                            colors from RGB specifications into web applications
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Framework Integration:</strong> Use HEX
                            colors in CSS frameworks like Tailwind, Bootstrap,
                            or custom design systems
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Design & Graphics */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            🎨
                          </span>
                        </span>
                        Design & Graphics
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Design Tool Export:</strong> Convert colors
                            from Photoshop, Illustrator, or Figma RGB values to
                            web-ready HEX codes
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Color Palette Creation:</strong> Build
                            cohesive color schemes using RGB inputs and HEX
                            outputs for documentation
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Print to Web Conversion:</strong> Adapt RGB
                            colors from print designs to HEX for digital
                            implementation
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Color Matching:</strong> Match physical
                            color samples measured in RGB to digital HEX
                            equivalents
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Mobile Development */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            📱
                          </span>
                        </span>
                        Mobile Development
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>iOS Development:</strong> Convert RGB values
                            to HEX for use in Swift UIColor or Objective-C color
                            definitions
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Android Development:</strong> Transform RGB
                            colors to HEX for Android XML color resources and
                            Material Design
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Cross-Platform Apps:</strong> Use HEX colors
                            in React Native, Flutter, or Xamarin for consistent
                            theming
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Design System Implementation:</strong>{" "}
                            Maintain color consistency across mobile platforms
                            using HEX standards
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Data Analysis & Visualization */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            📊
                          </span>
                        </span>
                        Data Visualization
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Chart Libraries:</strong> Convert RGB colors
                            to HEX for use in D3.js, Chart.js, or other
                            visualization libraries
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Dashboard Theming:</strong> Create
                            consistent color schemes for business intelligence
                            dashboards and reports
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data Color Coding:</strong> Map RGB data
                            values to HEX colors for heat maps, scatter plots,
                            and categorical displays
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Interactive Visualizations:</strong> Use HEX
                            colors in interactive charts and graphs for better
                            web performance
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> When working with RGB values
                      from design software, remember that some tools may use 0-1
                      float values instead of 0-255 integers. Multiply float
                      values by 255 to get the correct RGB integers for
                      conversion to HEX.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: RGB-HexColors-Explained"
              description="This tutorial explains how RGB and Hex color codes work and how to convert between the two formats."
              videoUrl="https://www.youtube.com/embed/hhI4x6hx21s"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default RgbToHex;
