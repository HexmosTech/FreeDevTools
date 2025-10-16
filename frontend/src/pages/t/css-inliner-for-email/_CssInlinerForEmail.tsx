import { toast } from "@/components/ToastProvider";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead from "@/components/tool/ToolHead";
import ToolVideo from "@/components/tool/ToolVideo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import CopyButton from "@/components/ui/copy-button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useCallback, useEffect, useState } from "react";
import AdBanner from "../../../components/banner/AdBanner";
import CssInlinerForEmailSkeleton from "./_CssInlinerForEmailSkeleton";

// CSS Inlining utility functions
const convertCSSToInline = (
  html: string,
  css: string,
  preserveMediaQueries: boolean = false
): string => {
  try {
    // Create a DOM parser to work with the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Parse CSS rules
    const cssRules = parseCSSRules(css);

    // Apply CSS rules to matching elements
    cssRules.forEach((rule) => {
      if (rule.selector.startsWith("@media") && preserveMediaQueries) {
        // Skip media queries if preserving them
        return;
      }

      try {
        const elements = doc.querySelectorAll(rule.selector);
        elements.forEach((element) => {
          const existingStyle = element.getAttribute("style") || "";
          const newStyle =
            existingStyle + (existingStyle ? "; " : "") + rule.declarations;
          element.setAttribute("style", newStyle);
        });
      } catch (e) {
        // Skip invalid selectors
        console.warn(`Invalid selector: ${rule.selector}`);
      }
    });

    // Add media queries to head if preserving them
    if (preserveMediaQueries) {
      const mediaQueries = extractMediaQueries(css);
      if (mediaQueries) {
        let head = doc.querySelector("head");
        if (!head) {
          head = doc.createElement("head");
          doc.documentElement.insertBefore(head, doc.body);
        }
        const style = doc.createElement("style");
        style.textContent = mediaQueries;
        head.appendChild(style);
      }
    }

    return doc.documentElement.outerHTML;
  } catch (error) {
    throw new Error(
      `Failed to inline CSS: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};

const parseCSSRules = (
  css: string
): Array<{ selector: string; declarations: string }> => {
  const rules: Array<{ selector: string; declarations: string }> = [];

  // Remove comments
  const cleanCSS = css.replace(/\/\*[\s\S]*?\*\//g, "");

  // Split by closing braces to get individual rules
  const ruleBlocks = cleanCSS.split("}").filter((block) => block.trim());

  ruleBlocks.forEach((block) => {
    const parts = block.split("{");
    if (parts.length === 2) {
      const selector = parts[0].trim();
      const declarations = parts[1].trim();

      if (selector && declarations && !selector.startsWith("@media")) {
        rules.push({ selector, declarations });
      }
    }
  });

  return rules;
};

const extractMediaQueries = (css: string): string => {
  const mediaQueries: string[] = [];
  const mediaRegex = /@media[^{]+\{([^{}]*\{[^}]*\}[^{}]*)*\}/g;
  let match;

  while ((match = mediaRegex.exec(css)) !== null) {
    mediaQueries.push(match[0]);
  }

  return mediaQueries.join("\n");
};

const isValidHTML = (html: string): boolean => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const hasTags =
      doc.body?.children.length > 0 || doc.head?.children.length > 0;
    const hasParsingErrors = doc.querySelectorAll("parsererror").length > 0;

    return hasTags && !hasParsingErrors;
  } catch {
    return false;
  }
};

const CssInlinerForEmail: React.FC = () => {
  const [htmlInput, setHtmlInput] = useState("");
  const [cssInput, setCssInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [preserveMediaQueries, setPreserveMediaQueries] = useState(true);
  const [autoConvert, setAutoConvert] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConversion = useCallback(() => {
    setError("");

    if (!htmlInput.trim()) {
      setError("Please provide HTML input");
      setOutput("");
      return;
    }

    if (!cssInput.trim()) {
      setError("Please provide CSS input");
      setOutput("");
      return;
    }

    if (!isValidHTML(htmlInput)) {
      setError("Invalid HTML input. Please check your HTML syntax.");
      setOutput("");
      return;
    }

    try {
      const inlinedHtml = convertCSSToInline(
        htmlInput,
        cssInput,
        preserveMediaQueries
      );
      setOutput(inlinedHtml);
      toast.success("CSS successfully inlined!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to inline CSS";
      setError(errorMessage);
      setOutput("");
      toast.error("Failed to inline CSS");
    }
  }, [htmlInput, cssInput, preserveMediaQueries]);

  const handleHtmlChange = useCallback(
    (value: string) => {
      setHtmlInput(value);
      setError("");

      if (autoConvert && value.trim() && cssInput.trim()) {
        setTimeout(() => {
          if (isValidHTML(value)) {
            try {
              const inlinedHtml = convertCSSToInline(
                value,
                cssInput,
                preserveMediaQueries
              );
              setOutput(inlinedHtml);
            } catch {
              // Silent fail for auto-conversion
            }
          }
        }, 500);
      }
    },
    [cssInput, preserveMediaQueries, autoConvert]
  );

  const handleCssChange = useCallback(
    (value: string) => {
      setCssInput(value);
      setError("");

      if (autoConvert && value.trim() && htmlInput.trim()) {
        setTimeout(() => {
          if (isValidHTML(htmlInput)) {
            try {
              const inlinedHtml = convertCSSToInline(
                htmlInput,
                value,
                preserveMediaQueries
              );
              setOutput(inlinedHtml);
            } catch {
              // Silent fail for auto-conversion
            }
          }
        }, 500);
      }
    },
    [htmlInput, preserveMediaQueries, autoConvert]
  );

  const handleClear = () => {
    setHtmlInput("");
    setCssInput("");
    setOutput("");
    setError("");
  };

  const sampleHTML = `<!DOCTYPE html>
<html>
<head>
    <title>Email Template</title>
</head>
<body>
    <div class="container">
        <h1 class="title">Welcome to Our Newsletter</h1>
        <p class="content">This is a sample email template.</p>
        <a class="button" href="#" role="button">Click Here</a>
    </div>
</body>
</html>`;

  const sampleCSS = `.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.title {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
}

.content {
    color: #666;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.button {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 4px;
}

@media (max-width: 600px) {
    .container {
        padding: 10px;
    }
    .title {
        font-size: 20px;
    }
}`;

  const loadSample = () => {
    setHtmlInput(sampleHTML);
    setCssInput(sampleCSS);
    if (autoConvert) {
      setTimeout(() => handleConversion(), 100);
    }
  };

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="CSS Inliner for Email"
        description="Convert CSS styles to inline styles for email HTML instantly with our free CSS inliner. Perfect for email templates, newsletters, and ensuring cross-client compatibility with real-time conversion."
      />

      {!loaded ? (
        <CssInlinerForEmailSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader></CardHeader>
              <CardContent className="space-y-6">
                {/* Input and Output Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Input Section - Left Side */}
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        HTML Input
                      </Label>
                      <Textarea
                        value={htmlInput}
                        onChange={(e) => handleHtmlChange(e.target.value)}
                        placeholder="Paste your HTML code here..."
                        className="min-h-[200px] font-mono text-sm"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        CSS Input
                      </Label>
                      <Textarea
                        value={cssInput}
                        onChange={(e) => handleCssChange(e.target.value)}
                        placeholder="Paste your CSS styles here..."
                        className="min-h-[200px] font-mono text-sm"
                      />
                    </div>
                  </div>

                  {/* Output Section - Right Side */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Inlined HTML Output
                      </Label>
                      <CopyButton text={output} disabled={!output} />
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="Inlined HTML will appear here..."
                      className="min-h-[420px] font-mono text-sm bg-muted/50"
                    />
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="preserveMediaQueries"
                        checked={preserveMediaQueries}
                        onCheckedChange={setPreserveMediaQueries}
                      />
                      <Label
                        htmlFor="preserveMediaQueries"
                        className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer"
                      >
                        Preserve media queries in &lt;style&gt; tag
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="autoConvert"
                        checked={autoConvert}
                        onCheckedChange={setAutoConvert}
                      />
                      <Label
                        htmlFor="autoConvert"
                        className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer"
                      >
                        Auto-convert on input change
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <Button onClick={handleClear} variant="outline">
                      Clear
                    </Button>
                    <Button onClick={loadSample} variant="secondary">
                      Load Sample
                    </Button>
                  </div>
                  <Button
                    onClick={handleConversion}
                    disabled={!htmlInput.trim() || !cssInput.trim()}
                  >
                    Inline CSS
                  </Button>
                </div>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}

                {/* Conversion Stats */}
                {htmlInput && cssInput && output && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-600 dark:text-slate-400">
                          HTML Length:
                        </span>
                        <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">
                          {htmlInput.length} chars
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-600 dark:text-slate-400">
                          CSS Rules:
                        </span>
                        <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">
                          {parseCSSRules(cssInput).length} rules
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-600 dark:text-slate-400">
                          Output Size:
                        </span>
                        <span className="ml-2 font-mono text-blue-800 dark:text-blue-200">
                          {output.length} chars
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
                <CardTitle>Understanding Email CSS Inlining</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    CSS inlining is essential for email development because many
                    email clients strip out or ignore external stylesheets and
                    style tags. By converting CSS rules to inline styles, you
                    ensure your emails render consistently across different
                    email clients.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Why Inline CSS?
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Client Compatibility:</strong> Gmail,
                            Outlook, and others strip style tags
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Consistent Rendering:</strong> Ensures
                            styles apply across all email clients
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Better Deliverability:</strong> Reduces
                            chance of emails being marked as spam
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Mobile Support:</strong> Improves rendering
                            on mobile email apps
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Best Practices
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Use table-based layouts for maximum compatibility
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Keep media queries in style tags for responsive
                            design
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Test across multiple email clients and devices
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Use web-safe fonts and fallbacks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Optimize images and use alt text</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Before inlining
                    </div>
                    <div className="text-slate-800 dark:text-slate-200 mb-4">
                      {`<style>.button { background: blue; }</style>
<a class="button">Click me</a>`}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // After inlining
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      {`<a style="background: blue;">Click me</a>`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Email Client Compatibility and Advanced Techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Email Client Support */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-red-600 dark:text-red-400">
                            📧
                          </span>
                        </span>
                        Email Client Support
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Gmail:</strong> Strips style tags, requires
                            inline CSS for all styling
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Outlook:</strong> Uses Word rendering
                            engine, limited CSS support
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Apple Mail:</strong> Good CSS support but
                            benefits from inlining
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Yahoo Mail:</strong> Partial style tag
                            support, inline recommended
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Advanced Techniques */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            ⚡
                          </span>
                        </span>
                        Advanced Techniques
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Media Queries:</strong> Keep in style tags
                            for responsive behavior
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Hybrid Coding:</strong> Combine inline
                            styles with style tags for fallbacks
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Progressive Enhancement:</strong> Start with
                            basic inline, enhance with CSS
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Conditional Comments:</strong> Target
                            specific Outlook versions
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* CSS Properties */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ✅
                          </span>
                        </span>
                        Safe CSS Properties
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Typography:</strong> font-family, font-size,
                            color, text-align, line-height
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Layout:</strong> width, height, padding,
                            margin, border
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Background:</strong> background-color,
                            background-image (with fallbacks)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Display:</strong> display, vertical-align,
                            text-decoration
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Testing Strategy */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            🧪
                          </span>
                        </span>
                        Testing Strategy
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Litmus/Email on Acid:</strong> Professional
                            email testing services
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Device Testing:</strong> Test on actual
                            devices and email apps
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Progressive Testing:</strong> Start simple,
                            add complexity gradually
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>A/B Testing:</strong> Compare inlined vs
                            non-inlined performance
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      <strong>🚨 Important:</strong> Always preserve media
                      queries in style tags when building responsive emails. The
                      "Preserve media queries" option keeps responsive styles
                      intact while inlining the rest. Remember that Outlook
                      doesn't support media queries, so ensure your base styles
                      work without them.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: How Does CSS Inlining Affect Specificity?"
              description="This video explains the crucial role of CSS inlining in email design, ensuring consistent styling across different email clients."
              videoUrl="https://www.youtube.com/embed/GI94QQqcfas"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default CssInlinerForEmail;
