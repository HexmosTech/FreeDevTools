import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import CssUnitsConverterSkeleton from "./_CssUnitsConverterSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// CSS Unit conversion utilities
const pxToRem = (px: number, baseFontSize: number = 16): number => {
  return px / baseFontSize;
};

const remToPx = (rem: number, baseFontSize: number = 16): number => {
  return rem * baseFontSize;
};

const pxToVw = (px: number, viewportWidth: number): number => {
  return (px / viewportWidth) * 100;
};

const vwToPx = (vw: number, viewportWidth: number): number => {
  return (vw * viewportWidth) / 100;
};

const pxToVh = (px: number, viewportHeight: number): number => {
  return (px / viewportHeight) * 100;
};

const vhToPx = (vh: number, viewportHeight: number): number => {
  return (vh * viewportHeight) / 100;
};

const pxToVmin = (
  px: number,
  viewportWidth: number,
  viewportHeight: number
): number => {
  const vmin = Math.min(viewportWidth, viewportHeight);
  return (px / vmin) * 100;
};

const vminToPx = (
  vmin: number,
  viewportWidth: number,
  viewportHeight: number
): number => {
  const minDimension = Math.min(viewportWidth, viewportHeight);
  return (vmin * minDimension) / 100;
};

const pxToVmax = (
  px: number,
  viewportWidth: number,
  viewportHeight: number
): number => {
  const vmax = Math.max(viewportWidth, viewportHeight);
  return (px / vmax) * 100;
};

const vmaxToPx = (
  vmax: number,
  viewportWidth: number,
  viewportHeight: number
): number => {
  const maxDimension = Math.max(viewportWidth, viewportHeight);
  return (vmax * maxDimension) / 100;
};

// Type definitions
type UnitType = "px" | "rem" | "vw" | "vh" | "vmin" | "vmax";

interface ConversionParams {
  value: number;
  fromUnit: UnitType;
  toUnit: UnitType;
  baseFontSize?: number;
  viewportWidth?: number;
  viewportHeight?: number;
}

const convertUnits = (params: ConversionParams): number => {
  const {
    value,
    fromUnit,
    toUnit,
    baseFontSize = 16,
    viewportWidth = 1920,
    viewportHeight = 1080,
  } = params;

  // Same unit, no conversion needed
  if (fromUnit === toUnit) return value;

  // Convert to pixels first (intermediate step)
  let pixelValue = value;

  switch (fromUnit) {
    case "rem":
      pixelValue = remToPx(value, baseFontSize);
      break;
    case "vw":
      pixelValue = vwToPx(value, viewportWidth);
      break;
    case "vh":
      pixelValue = vhToPx(value, viewportHeight);
      break;
    case "vmin":
      pixelValue = vminToPx(value, viewportWidth, viewportHeight);
      break;
    case "vmax":
      pixelValue = vmaxToPx(value, viewportWidth, viewportHeight);
      break;
    default: // px
      pixelValue = value;
  }

  // Convert from pixels to target unit
  switch (toUnit) {
    case "rem":
      return pxToRem(pixelValue, baseFontSize);
    case "vw":
      return pxToVw(pixelValue, viewportWidth);
    case "vh":
      return pxToVh(pixelValue, viewportHeight);
    case "vmin":
      return pxToVmin(pixelValue, viewportWidth, viewportHeight);
    case "vmax":
      return pxToVmax(pixelValue, viewportWidth, viewportHeight);
    default: // px
      return pixelValue;
  }
};

const CssUnitsConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [fromUnit, setFromUnit] = useState<UnitType>("px");
  const [toUnit, setToUnit] = useState<UnitType>("rem");
  const [baseFontSize, setBaseFontSize] = useState("16");
  const [viewportWidth, setViewportWidth] = useState("1920");
  const [viewportHeight, setViewportHeight] = useState("1080");

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConversion = useCallback(() => {
    setError("");

    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setError("Please enter a valid number");
      setOutput("");
      return;
    }

    const baseFontSizeNum = parseFloat(baseFontSize);
    const viewportWidthNum = parseFloat(viewportWidth);
    const viewportHeightNum = parseFloat(viewportHeight);

    if (isNaN(baseFontSizeNum) || baseFontSizeNum <= 0) {
      setError("Please enter a valid base font size");
      setOutput("");
      return;
    }

    if (
      (fromUnit.includes("v") || toUnit.includes("v")) &&
      (isNaN(viewportWidthNum) ||
        isNaN(viewportHeightNum) ||
        viewportWidthNum <= 0 ||
        viewportHeightNum <= 0)
    ) {
      setError("Please enter valid viewport dimensions");
      setOutput("");
      return;
    }

    try {
      const result = convertUnits({
        value,
        fromUnit,
        toUnit,
        baseFontSize: baseFontSizeNum,
        viewportWidth: viewportWidthNum,
        viewportHeight: viewportHeightNum,
      });

      setOutput(result.toFixed(4));
    } catch (err) {
      setError("Conversion failed. Please check your inputs.");
      setOutput("");
    }
  }, [
    inputValue,
    fromUnit,
    toUnit,
    baseFontSize,
    viewportWidth,
    viewportHeight,
  ]);

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
      setError("");

      if (!value.trim()) {
        setOutput("");
        return;
      }

      // Auto-convert on input change
      setTimeout(() => {
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
          const baseFontSizeNum = parseFloat(baseFontSize);
          const viewportWidthNum = parseFloat(viewportWidth);
          const viewportHeightNum = parseFloat(viewportHeight);

          if (
            !isNaN(baseFontSizeNum) &&
            baseFontSizeNum > 0 &&
            ((!fromUnit.includes("v") && !toUnit.includes("v")) ||
              (!isNaN(viewportWidthNum) &&
                !isNaN(viewportHeightNum) &&
                viewportWidthNum > 0 &&
                viewportHeightNum > 0))
          ) {
            try {
              const result = convertUnits({
                value: numValue,
                fromUnit,
                toUnit,
                baseFontSize: baseFontSizeNum,
                viewportWidth: viewportWidthNum,
                viewportHeight: viewportHeightNum,
              });
              setOutput(result.toFixed(4));
            } catch {
              // Silent fail for auto-conversion
            }
          }
        }
      }, 300);
    },
    [fromUnit, toUnit, baseFontSize, viewportWidth, viewportHeight]
  );

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);

    // Recalculate if we have input
    if (inputValue.trim()) {
      setTimeout(() => handleConversion(), 100);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setOutput("");
    setError("");
  };

  const needsViewportDimensions =
    fromUnit.includes("v") || toUnit.includes("v");

  return (
    <ToolContainer>
      <ToolHead
        name="CSS Units Converter"
        description="Convert CSS units instantly with our free online converter. Transform pixels to rem, viewport units (vw, vh, vmin, vmax), and more with real-time conversion and responsive design calculations."
      />

      {!loaded ? (
        <CssUnitsConverterSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input and Output Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Input Section - Left Side */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Input Value
                      </Label>
                      <Input
                        type="number"
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Enter value to convert..."
                        className="font-mono"
                      />
                    </div>

                    {/* Unit Selection */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          From Unit
                        </Label>
                        <Select
                          value={fromUnit}
                          onValueChange={(value: UnitType) =>
                            setFromUnit(value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="px">Pixels (px)</SelectItem>
                            <SelectItem value="rem">Root Em (rem)</SelectItem>
                            <SelectItem value="vw">
                              Viewport Width (vw)
                            </SelectItem>
                            <SelectItem value="vh">
                              Viewport Height (vh)
                            </SelectItem>
                            <SelectItem value="vmin">
                              Viewport Min (vmin)
                            </SelectItem>
                            <SelectItem value="vmax">
                              Viewport Max (vmax)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          To Unit
                        </Label>
                        <Select
                          value={toUnit}
                          onValueChange={(value: UnitType) => setToUnit(value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="px">Pixels (px)</SelectItem>
                            <SelectItem value="rem">Root Em (rem)</SelectItem>
                            <SelectItem value="vw">
                              Viewport Width (vw)
                            </SelectItem>
                            <SelectItem value="vh">
                              Viewport Height (vh)
                            </SelectItem>
                            <SelectItem value="vmin">
                              Viewport Min (vmin)
                            </SelectItem>
                            <SelectItem value="vmax">
                              Viewport Max (vmax)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Output Section - Right Side */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Converted Value
                        </Label>
                        <CopyButton text={output} disabled={!output} />
                      </div>
                      <Input
                        value={output}
                        readOnly
                        placeholder="Result will appear here..."
                        className="font-mono bg-muted/50"
                      />
                    </div>

                    {/* Display the conversion formula */}
                    {inputValue && output && (
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                        <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">
                          {inputValue}
                          {fromUnit} = {output}
                          {toUnit}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Configuration Options */}
                <div className="space-y-4">
                  {/* Base Font Size */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Base Font Size (px) - for rem conversions
                    </Label>
                    <Input
                      type="number"
                      value={baseFontSize}
                      onChange={(e) => setBaseFontSize(e.target.value)}
                      placeholder="16"
                      className="w-full md:w-48"
                    />
                  </div>

                  {/* Viewport Dimensions */}
                  {needsViewportDimensions && (
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Viewport Dimensions (px) - for viewport unit conversions
                      </Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-xs text-slate-500 dark:text-slate-400">
                            Width
                          </Label>
                          <Input
                            type="number"
                            value={viewportWidth}
                            onChange={(e) => setViewportWidth(e.target.value)}
                            placeholder="1920"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-slate-500 dark:text-slate-400">
                            Height
                          </Label>
                          <Input
                            type="number"
                            value={viewportHeight}
                            onChange={(e) => setViewportHeight(e.target.value)}
                            placeholder="1080"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <Button onClick={swapUnits} variant="outline">
                      Swap Units
                    </Button>
                    <Button onClick={handleClear} variant="outline">
                      Clear
                    </Button>
                  </div>
                  <Button onClick={handleConversion}>Convert</Button>
                </div>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Understanding CSS Units</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    CSS units are essential for creating responsive and scalable
                    web designs. Understanding when and how to use different
                    units helps you build layouts that work across various
                    devices and screen sizes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Absolute Units
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Pixels (px):</strong> Fixed unit
                            representing one device pixel
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Points (pt):</strong> 1/72 of an inch,
                            primarily for print
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Inches (in):</strong> Physical measurement
                            unit
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Relative Units
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Root Em (rem):</strong> Relative to root
                            element font size
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Em (em):</strong> Relative to parent element
                            font size
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Percentage (%):</strong> Relative to parent
                            element
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Common conversion examples
                    </div>
                    <div className="space-y-1 text-slate-800 dark:text-slate-200">
                      <div>16px = 1rem (default browser font size)</div>
                      <div>100vw = 100% of viewport width</div>
                      <div>100vh = 100% of viewport height</div>
                      <div>50vmin = 50% of smaller viewport dimension</div>
                      <div>50vmax = 50% of larger viewport dimension</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Viewport Units and Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Viewport Units */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            📱
                          </span>
                        </span>
                        Viewport Units
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>vw (Viewport Width):</strong> 1vw = 1% of
                            viewport width
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>vh (Viewport Height):</strong> 1vh = 1% of
                            viewport height
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>vmin:</strong> 1% of viewport's smaller
                            dimension
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>vmax:</strong> 1% of viewport's larger
                            dimension
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Best Practices */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ✨
                          </span>
                        </span>
                        Best Practices
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use rem for typography:</strong> Scalable
                            and accessible
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use vw/vh for layouts:</strong> Responsive
                            to screen size
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use px for borders:</strong> Consistent
                            appearance
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Mix units strategically:</strong> Combine
                            for flexible designs
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Common Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            🎯
                          </span>
                        </span>
                        Common Use Cases
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Full-screen sections:</strong> Use 100vh for
                            hero sections
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Responsive typography:</strong> Combine vw
                            with min/max values
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Flexible containers:</strong> Use vw for
                            responsive widths
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Square elements:</strong> Use vmin for
                            consistent proportions
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Conversion Tips */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            💡
                          </span>
                        </span>
                        Conversion Tips
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Design system:</strong> Establish a
                            consistent base font size
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Testing:</strong> Check conversions across
                            different devices
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Accessibility:</strong> Ensure text remains
                            readable when scaled
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Fallbacks:</strong> Provide pixel fallbacks
                            for older browsers
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> Use CSS custom properties
                      (variables) to define your unit scales and base sizes.
                      This makes it easier to maintain consistency and update
                      your design system. For example:{" "}
                      <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">
                        --base-font-size: 1rem; --spacing-unit: 0.5rem;
                      </code>
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

export default CssUnitsConverter;
