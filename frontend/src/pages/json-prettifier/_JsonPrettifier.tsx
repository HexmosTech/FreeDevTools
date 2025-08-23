import React, { useEffect, useRef, useState } from "react";
import AdBanner from "../../components/AdBanner";

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
            },
            onValidationError: (errors: readonly any[]) => {
              if (errors.length > 0) {
                setError(errors[0].message || "Validation error");
                setIsValid(false);
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
  }, [isClient]);

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
  };

  const handleCopy = () => {
    if (outputEditorInstanceRef.current && isValid) {
      try {
        const currentJson = inputEditorInstanceRef.current?.get();
        if (currentJson) {
          const formatted = JSON.stringify(currentJson, null, indentSize);
          navigator.clipboard.writeText(formatted);
        }
      } catch (err) {
        // Ignore copy errors
      }
    }
  };

  if (!isClient) {
    return (
      <div className="json-prettifier max-w-7xl mx-auto py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            JSON Prettifier
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="json-prettifier max-w-7xl mx-auto py-8 pt-0 bg-background">
      {/* Ad Banner */}
      <div className="mb-6">
        <AdBanner />
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          JSON Prettifier
        </h1>
        <p className="text-muted-foreground text-lg">
          Real-time JSON formatting, validation, and error detection
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mb-6">
        {/* Left Panel - Input Editor */}
        <div className="xl:col-span-5">
          <div className="flex items-center justify-between mb-4">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-300">
              Input JSON
            </label>
            <button
              onClick={handleClear}
              className="px-3 py-1 text-sm border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="relative">
            <div
              ref={inputEditorRef}
              className="h-screen border border-slate-300 rounded-lg dark:border-slate-600 resize-y overflow-hidden shadow-lg"
              style={{ minHeight: "500px", maxHeight: "80vh" }}
            />
            {isValid !== null && (
              <div className="mt-2 text-sm">
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
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
              Indent
            </label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleIndentChange(false)}
                disabled={indentSize <= 1}
                className="w-8 h-8 flex items-center justify-center text-lg font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                -
              </button>
              <span className="text-lg font-mono text-slate-900 dark:text-slate-100 min-w-[2rem] text-center">
                {indentSize}
              </span>
              <button
                onClick={() => handleIndentChange(true)}
                disabled={indentSize >= 8}
                className="w-8 h-8 flex items-center justify-center text-lg font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                +
              </button>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
              spaces
            </span>
          </div>

          <div className="text-center">
            <button
              onClick={handleCopy}
              disabled={!isValid}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-muted text-white font-medium rounded-lg transition-all duration-200 disabled:cursor-not-allowed hover:shadow-lg"
            >
              Copy Formatted
            </button>
          </div>
        </div>

        {/* Right Panel - Output Editor */}
        <div className="xl:col-span-5">
          <div className="flex items-center justify-between mb-4">
            <label className="text-lg font-semibold text-slate-700 dark:text-slate-300">
              Formatted Output
            </label>
            {error && (
              <span className="text-sm text-red-600 dark:text-red-400 flex items-center">
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

          {error && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              <div className="font-medium mb-1">JSON Error:</div>
              <div className="text-sm">{error}</div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 mb-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
          Shortcut Keys
        </h3>

        <div className="space-y-6">
          {/* Tree Editor Shortcuts */}
          <div>
            <h4 className="text-md font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Tree Editor
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse border border-slate-300 dark:border-slate-600">
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
                      Alt+Arrows
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                      Move the caret up/down/left/right between fields
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                      Ctrl+Shift+Arrow Up/Down
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                      Select multiple fields
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                      Shift+Alt+Arrows
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                      Move current field or selected fields up/down/left/right
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                      Ctrl+D
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                      Duplicate field
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                      Ctrl+Del
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                      Remove field
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                      Ctrl+Enter
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                      Open link when on a field containing an url
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                      Ctrl+Ins
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                      Insert a new field with type auto
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2 font-mono text-slate-600 dark:text-slate-400">
                      Ctrl+Shift+Ins
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
                      Append a new field with type auto
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
            <h4 className="text-md font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Code Editor
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
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
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Additionally, there are shortcut keys to format/compact the code:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse border border-slate-300 dark:border-slate-600">
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

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center">
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
  );
};

export default JsonPrettifier;
