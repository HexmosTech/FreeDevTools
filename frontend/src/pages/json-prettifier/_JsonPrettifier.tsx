import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";
import CopyButton from "../../components/ui/copy-button";
import JsonPrettifierSkeleton from "./_JsonPrettifierSkeleton";
import { toast } from "../../components/ToastProvider";

const JsonPrettifier: React.FC = () => {
  const [indentSize, setIndentSize] = useState(2);
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isClient, setIsClient] = useState(false);

  const inputEditorRef = useRef<HTMLDivElement>(null);
  const outputEditorRef = useRef<HTMLDivElement>(null);
  const inputEditorInstanceRef = useRef<any>(null);
  const outputEditorInstanceRef = useRef<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
            onChangeText: (jsonString: string) => {
              handleInputChange(jsonString);
            },
            onError: (err: any) => {
              setError(err.message || "Invalid JSON");
              setIsValid(false);
              toast.error("Invalid JSON detected");
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

        // Initialize output editor (text mode for formatted output)
        if (!outputEditorRef.current) return;
        outputEditorInstanceRef.current = new JSONEditor(
          outputEditorRef.current,
          {
            mode: "text",
            enableSort: false,
            enableTransform: false,
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
        inputEditorInstanceRef.current.destroy();
      }
      if (outputEditorInstanceRef.current) {
        outputEditorInstanceRef.current.destroy();
      }
    };
  }, [isClient]);

  const handleInputChange = (jsonString: string) => {
    try {
      if (!jsonString.trim()) {
        setError("");
        setIsValid(null);
        if (outputEditorInstanceRef.current) {
          outputEditorInstanceRef.current.setText("");
        }
        return;
      }

      const parsedJson = JSON.parse(jsonString);
      setError("");
      setIsValid(true);
      formatAndDisplayJson(parsedJson);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
      setIsValid(false);
    }
  };

  const formatAndDisplayJson = (json: any) => {
    try {
      const formattedJson = JSON.stringify(json, null, indentSize);
      if (outputEditorInstanceRef.current) {
        outputEditorInstanceRef.current.setText(formattedJson);
      }
    } catch (err) {
      console.error("Error formatting JSON:", err);
    }
  };

  const handleIndentChange = (increase: boolean) => {
    const newIndentSize = increase ? indentSize + 1 : indentSize - 1;
    if (newIndentSize >= 1 && newIndentSize <= 8) {
      setIndentSize(newIndentSize);
      toast.info(`Indent size changed to ${newIndentSize} spaces`);
      
      // Re-format current JSON with new indent
      if (inputEditorInstanceRef.current && isValid) {
        try {
          const currentJson = inputEditorInstanceRef.current.get();
          if (currentJson) {
            formatAndDisplayJson(currentJson);
          }
        } catch (err) {
          console.error("Error re-formatting JSON:", err);
        }
      }
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
    toast.info("JSON content cleared");
  };



  return (
    <ToolContainer>
      <ToolHead
        name="JSON Prettifier"
        description="Real-time JSON formatting, validation, and error detection"
      />

      {
        !isClient ? (
            <JsonPrettifierSkeleton />
        ) : (
          <div>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mb-4">
              {/* Left Panel - Input Editor */}
              <div className="xl:col-span-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">
                    Input JSON
                  </label>
                  <Button onClick={handleClear} variant="outline" size="sm">
                    Clear
                  </Button>
                </div>
    
                <div className="relative">
                  <div
                    ref={inputEditorRef}
                    className="h-screen border border-slate-300 rounded-lg dark:border-slate-600 resize-y overflow-hidden shadow-lg"
                    style={{ minHeight: "500px", maxHeight: "80vh" }}
                  />
                  {isValid !== null && (
                    <div className="mt-2">
                      {isValid ? (
                        <span className="text-green-600 dark:text-green-400 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                          Valid JSON
                        </span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400 flex items-center">
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
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Indent
                  </label>
                  <div className="flex items-center space-x-3">
                    <Button
                      onClick={() => handleIndentChange(false)}
                      disabled={indentSize <= 1}
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
                      disabled={indentSize >= 8}
                      variant="outline"
                      size="icon"
                      className="font-bold"
                    >
                      +
                    </Button>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 mt-1 block">
                    spaces
                  </span>
                </div>
    
                <div className="text-center">
                  <CopyButton
                    text={(() => {
                      try {
                        if (inputEditorInstanceRef.current && isValid) {
                          const currentJson = inputEditorInstanceRef.current.get();
                          if (currentJson) {
                            return JSON.stringify(currentJson, null, indentSize);
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
    
              {/* Right Panel - Output Editor */}
              <div className="xl:col-span-5">
                <div className="flex items-center justify-between mb-4">
                  <label className="font-semibold text-slate-700 dark:text-slate-300">
                    Formatted Output
                  </label>
                  {error && (
                    <span className="text-red-600 dark:text-red-400 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                      Error detected
                    </span>
                  )}
                </div>
    
                <div className="relative">
                  <div
                    ref={outputEditorRef}
                    className="h-screen border border-slate-300 rounded-lg dark:border-slate-600 resize-y overflow-hidden shadow-lg"
                    style={{ minHeight: "500px", maxHeight: "80vh" }}
                  />
                </div>
              </div>
            </div>
    
            {/* Shortcuts Section */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 px-2 md:px-6 mb-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Keyboard Shortcuts
              </h3>
              <div className="text-slate-600 dark:text-slate-400 space-y-4">
                {/* Tree Editor Shortcuts */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Tree Editor
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">
                    The tree editor allows you to edit JSON data in a tree structure.
                    Use the following keyboard shortcuts:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-700">
                          <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-medium text-slate-700 dark:text-slate-300">
                            Key
                          </th>
                          <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-medium text-slate-700 dark:text-slate-300">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800">
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Enter
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Edit the selected field
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Ctrl+E
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Expand or collapse field
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Alt+End
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Move the caret to the last field
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Ctrl+F
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Find
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            F3, Ctrl+G
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Find next
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Shift+F3, Ctrl+Shift+G
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Find previous
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Alt+Home
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Move the caret to the first field
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Ctrl+M
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Show actions menu
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Ctrl+Z
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Undo last action
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
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
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Code Editor
                  </h4>
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
                    Additionally, there are shortcut keys to format/compact the code:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-600">
                      <thead>
                        <tr className="bg-slate-100 dark:bg-slate-700">
                          <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-medium text-slate-700 dark:text-slate-300">
                            Key
                          </th>
                          <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-medium text-slate-700 dark:text-slate-300">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800">
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                            Ctrl+I
                          </td>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                            Format JSON data, set proper indentation
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
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
            </div>
    
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 px-2 md:px-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                About JSON Prettifier
              </h3>
              <div className="text-slate-600 dark:text-slate-400 space-y-2">
                <p>
                  This enhanced JSON prettifier provides real-time formatting and
                  validation using the powerful JSONEditor library. Features include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Real-time JSON validation as you type</li>
                  <li>Instant formatting with customizable indentation</li>
                  <li>Precise error location and detailed error messages</li>
                  <li>Professional code editor with syntax highlighting</li>
                  <li>Copy formatted JSON to clipboard</li>
                  <li>Dynamic indent control (1-8 spaces)</li>
                  <li>Resizable editors for better workflow</li>
                </ul>
              </div>
            </div>
        </div>
        )
      }

    </ToolContainer>
  );
};

export default JsonPrettifier;
