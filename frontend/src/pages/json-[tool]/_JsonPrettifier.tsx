import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useRef, useState } from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";
import CopyButton from "../../components/ui/copy-button";
import { toast } from "../../components/ToastProvider";
import JsonPrettifierSkeleton from "./_JsonPrettifierSkeleton";
import { Label } from "@/components/ui/label";
import { useTheme } from "../../components/theme/ThemeContext";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolBody from "@/components/tool/ToolBody";
import { jsonrepair } from "jsonrepair";

// Ace editor
import ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import workerJsonUrl from "ace-builds/src-noconflict/worker-json?url";
import { getToolByKey, type Tool } from "@/config/tools";
ace.config.setModuleUrl("ace/mode/json_worker", workerJsonUrl);

const LIGHT_THEME = "ace/theme/textmate";
const DARK_THEME = "ace/theme/vibrant_ink";

interface JsonPrettifierProps {
  tool: string; // from Astro param
}


const JsonPrettifier: React.FC<JsonPrettifierProps> = ({ tool }) => {
  const toolConfig: Tool = getToolByKey(tool) || getToolByKey('json-prettifier');
  const [indentSize, setIndentSize] = useState(2);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  // Try to get theme from context, but handle hydration timing
  let themeContext: any = null;
  try {
    themeContext = useTheme();
  } catch (error) {
    // Theme context not available yet (during SSR/hydration)
  }

  const inputEditorRef = useRef<HTMLDivElement>(null);
  const outputEditorRef = useRef<HTMLDivElement>(null);
  const inputEditorInstanceRef = useRef<any>(null);
  const outputEditorInstanceRef = useRef<any>(null);

  // Get current theme based on light/dark mode
  const getCurrentTheme = () => {
    return currentTheme === "dark" ? DARK_THEME : LIGHT_THEME;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update theme when context becomes available or when it changes
  useEffect(() => {
    if (themeContext?.theme) {
      setCurrentTheme(themeContext.theme);
    } else if (typeof document !== "undefined") {
      // Fallback: check document class
      const isDark = document.documentElement.classList.contains("dark");
      setCurrentTheme(isDark ? "dark" : "light");
    }
  }, [themeContext?.theme]);

  // Listen for theme changes via document class changes
  useEffect(() => {
    if (!isClient) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const isDark = document.documentElement.classList.contains("dark");
          setCurrentTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !inputEditorRef.current || !outputEditorRef.current)
      return;

    const initEditors = async () => {
      try {
        const JSONEditor = (await import("jsoneditor")).default;

        await import("../../assets/jsoneditor.min.css");

        // Initialize input editor (code mode for user input)
        if (!inputEditorRef.current) return;
        inputEditorInstanceRef.current = new JSONEditor(
          inputEditorRef.current,
          {
            mode: "code",
            statusBar: false,
            mainMenuBar: false,
            theme: getCurrentTheme(),
            onChangeText: (jsonString: string) => {
              handleInputChange(jsonString);
            },
            onError: (err: any) => {
              setError(err.message || "Invalid JSON");
              setIsValid(false);
              toast.error("Invalid JSON format");
            },
            onValidationError: (errors: readonly any[]) => {
              if (errors.length > 0) {
                setError(errors[0].message || "Validation error");
                setIsValid(false);
                toast.error("JSON validation error");
              } else {
                setError("");
                setIsValid(true);
              }
            },
          }
        );
        // Initialize output editor (code mode for formatted output)
        if (!outputEditorRef.current) return;
        outputEditorInstanceRef.current = new JSONEditor(
          outputEditorRef.current,
          {
            mode: "code",
            enableSort: false,
            enableTransform: false,
            mainMenuBar: false,
            statusBar: false,
            onEditable: () => false,
            theme: getCurrentTheme(),
          }
        );

        // Set initial sample JSON
        const sampleJson = {
          menu: {
            id: "file",
            value: "File",
            popup: {
              menuitem: [
                {
                  value: "New",
                  onclick: "CreateNewDoc()",
                },
                {
                  value: "Open",
                  onclick: "OpenDoc()",
                },
                {
                  value: "Close",
                  onclick: "CloseDoc()",
                },
              ],
            },
          },
        };

        inputEditorInstanceRef.current.set(sampleJson);
        formatAndDisplayJson(sampleJson);
      } catch (err) {
        console.error("Failed to initialize JSONEditor:", err);
        toast.error("Failed to initialize JSON editor");
      }
    };

    initEditors();

    return () => {
      if (inputEditorInstanceRef.current) {
        try {
          inputEditorInstanceRef.current.destroy();
        } catch (err) {
          // Ignore cleanup errors
        }
      }
      if (outputEditorInstanceRef.current) {
        try {
          outputEditorInstanceRef.current.destroy();
        } catch (err) {
          // Ignore cleanup errors
        }
      }
    };
  }, [isClient, currentTheme]); // Use currentTheme instead of theme

  const handleInputChange = (jsonString: string) => {
    if (!jsonString.trim()) {
      setError("");
      setIsValid(null);
      if (outputEditorInstanceRef.current) {
        outputEditorInstanceRef.current.setText("");
      }
      return;
    }

    try {
      const parsed = JSON.parse(jsonString);
      setIsValid(true);
      setError("");
      formatAndDisplayJson(parsed);
    } catch (err: any) {
      setError(err.message || "Invalid JSON");
      setIsValid(false);
      if (outputEditorInstanceRef.current) {
        outputEditorInstanceRef.current.setText("");
      }
    }
  };

  const formatAndDisplayJson = (json: any) => {
    if (outputEditorInstanceRef.current) {
      const formatted = JSON.stringify(json, null, indentSize);
      outputEditorInstanceRef.current.setText(formatted);
    }
  };

  const handleIndentChange = (increment: boolean) => {
    const newIndent = increment ? indentSize + 1 : indentSize - 1;
    if (newIndent >= 1 && newIndent <= 8) {
      // Re-format the current JSON with new indent first
      if (inputEditorInstanceRef.current && isValid) {
        try {
          const currentJson = inputEditorInstanceRef.current.get();
          const formatted = JSON.stringify(currentJson, null, newIndent);
          if (outputEditorInstanceRef.current) {
            outputEditorInstanceRef.current.setText(formatted);
          }
        } catch (err) {
          // Ignore errors during re-formatting
        }
      }
      // Then update the state
      setIndentSize(newIndent);
    }
  };

  const handleClear = () => {
    if (inputEditorInstanceRef.current) {
      inputEditorInstanceRef.current.set({});
    }
    if (outputEditorInstanceRef.current) {
      outputEditorInstanceRef.current.setText("");
    }
    setError("");
    setIsValid(null);
    toast.info("JSON editor cleared");
  };

  const handleRepair = () => {
    try {
      if (!inputEditorInstanceRef.current) return;
      const currentText = inputEditorInstanceRef.current.getText();
      if (!currentText || !currentText.trim()) return;
      const repaired = jsonrepair(currentText);
      inputEditorInstanceRef.current.setText(repaired);
      // Trigger validation and formatting
      handleInputChange(repaired);
      toast.success("JSON repaired");
    } catch (err: any) {
      toast.error(err?.message || "Failed to repair JSON");
    }
  };

  // Update editor themes when theme changes
  useEffect(() => {
    if (inputEditorInstanceRef.current?.aceEditor) {
      inputEditorInstanceRef.current.aceEditor.setTheme(getCurrentTheme());
    }
    if (outputEditorInstanceRef.current?.aceEditor) {
      outputEditorInstanceRef.current.aceEditor.setTheme(getCurrentTheme());
    }
  }, [currentTheme]);

  return (
    <ToolContainer>
      <ToolHead
        name={toolConfig.name}
        description={toolConfig.description}
      />
      {!isClient ? (
        <JsonPrettifierSkeleton />
      ) : (
        <ToolBody>  
          {/* Tool Cards Group */}
          <ToolCardWrapper>
            {/* Combined Tool Card */}
            <Card className="tool-card-bg">
              <CardContent className="p-2 md:p-6">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                  {/* Left Panel - Input Editor */}
                  <div className="xl:col-span-5">
                    <div className="flex items-center justify-between mb-4">
                      <Label
                        htmlFor="input-json"
                        className="text-lg font-medium"
                      >
                        Input JSON
                      </Label>
                      <Button onClick={handleClear} className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700" variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>

                    <div className="relative">
                      <div
                        ref={inputEditorRef}
                        className="border border-slate-300 rounded-lg dark:border-slate-600 resize-y overflow-hidden"
                        style={{
                          height: "600px",
                          minHeight: "600px",
                          maxHeight: "80vh",
                          outline: "none",
                        }}
                      />
                      {isValid !== null && (
                        <div className="mt-2">
                          {isValid ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                              Valid JSON
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                              Invalid JSON
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Panel - Controls */}
                  <div className="xl:col-span-2 flex flex-col items-center justify-center space-y-6">
                    <div className="text-center">
                      <Label
                        htmlFor="indent"
                        className="mb-3 text-lg font-medium"
                      >
                        Indent
                      </Label>
                      <div className="flex items-center space-x-3">
                        <Button
                          onClick={() => handleIndentChange(false)}
                          disabled={indentSize <= 1 || !isValid}
                          variant="outline"
                          size="icon"
                          className="font-bold"
                        >
                          -
                        </Button>
                        <span className="font-mono text-slate-900 dark:text-slate-100 min-w-[2rem] text-center">
                          {indentSize}
                        </span>
                        <Button
                          onClick={() => handleIndentChange(true)}
                          disabled={indentSize >= 8 || !isValid}
                          variant="outline"
                          size="icon"
                          className="font-bold"
                        >
                          +
                        </Button>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                        spaces
                      </span>
                    </div>
                  </div>

                  {/* Right Panel - Output Editor */}
                  <div className="xl:col-span-5">
                    <div className="flex items-center justify-between mb-4">
                      <Label
                        htmlFor="formatted-output"
                        className="text-lg font-medium"
                      >
                        Formatted Output
                      </Label>
                      <div className="flex items-center space-x-2">
                      {error && (
                          <div className="flex items-center space-x-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                              Error detected
                            </span>
                            <Button onClick={handleRepair} size="sm" variant="outline" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700">
                              Repair JSON
                            </Button>
                          </div>
                        )}
                        <CopyButton
                          text={(() => {
                            try {
                              if (inputEditorInstanceRef.current && isValid) {
                                const currentJson =
                                  inputEditorInstanceRef.current.get();
                                if (currentJson) {
                                  return JSON.stringify(
                                    currentJson,
                                    null,
                                    indentSize
                                  );
                                }
                              }
                              return "";
                            } catch (err) {
                              return "";
                            }
                          })()}
                          disabled={!isValid}
                        />

                      </div>
                    </div>

                    <div className="relative">
                      <div
                        ref={outputEditorRef}
                        className="border border-slate-300 rounded-lg dark:border-slate-600 resize-y overflow-hidden"
                        style={{
                          height: "600px",
                          minHeight: "600px",
                          maxHeight: "80vh",
                        }}
                      />
                    </div>

                    {error && (
                      <Card className="mt-3 border-red-200 dark:border-red-800">
                        <CardContent className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400">
                          <div className="font-medium mb-1">JSON Error:</div>
                          <div>{error}</div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* Content Cards Group */}
          <ToolContentCardWrapper>
            <Card >
              <CardHeader>
                <CardTitle className="flex items-center">
                  {/* <span className="w-2 h-2 bg-primary rounded-full mr-3"></span> */}
                  Shortcut Keys
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 md:px-6">
                <div className="space-y-6">
                  {/* Tree Editor Shortcuts */}
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Tree Editor
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600">
                        <thead>
                          <tr>
                            <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-medium">
                              Key
                            </th>
                            <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-medium">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Alt+Arrows
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Move the caret up/down/left/right between fields
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+Shift+Arrow Up/Down
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Select multiple fields
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Shift+Alt+Arrows
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Move current field or selected fields
                              up/down/left/right
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+D
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Duplicate field
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+Del
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Remove field
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+Enter
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Open link when on a field containing an url
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+Ins
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Insert a new field with type auto
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+Shift+Ins
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Append a new field with type auto
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+E
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Expand or collapse field
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Alt+End
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Move the caret to the last field
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+F
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Find
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              F3, Ctrl+G
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Find next
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Shift+F3, Ctrl+Shift+G
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Find previous
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Alt+Home
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Move the caret to the first field
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+M
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Show actions menu
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+Z
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Undo last action
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+Shift+Z
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Redo
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Code Editor Shortcuts */}
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Code Editor
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      The code editor is powered by{" "}
                      <a
                        href="http://ace.c9.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        Ace Editor
                      </a>
                      . This editor's shortcut keys are described{" "}
                      <a
                        href="https://github.com/ajaxorg/ace/wiki/Default-Keyboard-Shortcuts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">
                      Additionally, there are shortcut keys to format/compact
                      the code:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600">
                        <thead>
                          <tr>
                            <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-medium">
                              Key
                            </th>
                            <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-medium">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+I
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Format JSON data, set proper indentation
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono">
                              Ctrl+Shift+I
                            </td>
                            <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                              Compact JSON data, remove all whitespace
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  About {toolConfig.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 md:px-6">
                <div className="text-slate-600 dark:text-slate-400 space-y-2">
                  <p>
                    This enhanced <strong>{toolConfig.name}</strong> provides real-time
                    formatting and validation using the powerful JSONEditor library. It is
                    designed for developers who want to easily format, validate, and debug
                    JSON data with accuracy and efficiency. Features include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Real-time JSON validation as you type</li>
                    <li>Instant formatting with customizable indentation</li>
                    <li>Precise error location and detailed error messages</li>
                    <li>Professional code editor with syntax highlighting</li>
                    <li>Copy formatted JSON to clipboard</li>
                    <li>Dynamic indent control (1-8 spaces)</li>
                    <li>Resizable editors for better workflow</li>
                    <li>Repair JSON feature, to get the faulty JSONs repaired</li>
                  </ul>
                  <p className="pt-2">
                    Learn more about JSON:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <a
                        href="https://json.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        JSON.org
                      </a>{" "}
                     Official JSON specification
                    </li>
                    <li>
                      <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        MDN JSON Documentation
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  Understanding JSON and the Importance of Formatting
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 md:px-6">
                <div className="text-slate-600 dark:text-slate-400 space-y-3">
                  <p>
                    <strong>JSON (JavaScript Object Notation)</strong> is a lightweight data
                    format used worldwide for data exchange between servers, web
                    applications, and APIs. It is easy to read and write for humans and
                    simple to parse for machines. However, raw JSON data can quickly become
                    difficult to interpret without proper formatting.
                  </p>

                  <h3 className="text-lg font-semibold">Why Formatting Matters</h3>
                  <p>
                    Properly formatted JSON improves readability, reduces errors, and makes
                    debugging much faster. For developers working with complex datasets,
                    a <strong>JSON prettifier</strong> transforms compact or minified JSON
                    into a structured, indented, and visually clear format.
                  </p>

                  <h3 className="text-lg font-semibold">Common Use Cases</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Debugging API responses from web services</li>
                    <li>Cleaning and validating JSON configurations</li>
                    <li>Formatting JSON before sharing or storing data</li>
                    <li>Analyzing nested objects and arrays for errors</li>
                    <li>Improving collaboration by making JSON human-readable</li>
                  </ul>

                  <h3 className="text-lg font-semibold">Benefits of Proper JSON Formatting</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Increases clarity and reduces mistakes</li>
                    <li>Ensures consistency across projects and teams</li>
                    <li>Simplifies troubleshooting when errors occur</li>
                    <li>Makes large JSON files easier to maintain</li>
                    <li>Improves data quality for long-term storage</li>
                  </ul>

                  <h3 className="text-lg font-semibold">JSON Best Practices and Standards</h3>
                  <p>
                    Following recognized standards such as{" "}
                    <a
                      href="https://tools.ietf.org/html/rfc7159"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      RFC 7159
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://json-schema.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      JSON Schema
                    </a>{" "}
                    helps maintain high-quality JSON data. Always use consistent indentation
                    (2 or 4 spaces), validate against schemas when possible, and avoid
                    unnecessary nesting to keep your JSON lightweight and efficient.
                  </p>
                </div>
              </CardContent>
            </Card>

          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default JsonPrettifier;
