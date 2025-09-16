import React, { useState, useEffect, useCallback, useRef } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import CsvToJsonSkeleton from "./_CsvToJsonSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import ToolVideo from "@/components/tool/ToolVideo";

// CSV to JSON conversion utility
const convertCsvToJson = (
  csvData: string,
  lowercaseKeys: boolean = false
): string => {
  if (!csvData.trim()) {
    return "";
  }

  try {
    const lines = csvData.trim().split("\n");
    if (lines.length < 2) {
      throw new Error("CSV must have at least a header row and one data row");
    }

    // Parse header row
    const headers = parseCSVLine(lines[0]);
    if (headers.length === 0) {
      throw new Error("Invalid CSV header row");
    }

    // Process headers (lowercase if requested)
    const processedHeaders = headers.map((header) =>
      lowercaseKeys ? header.toLowerCase().trim() : header.trim()
    );

    // Parse data rows
    const jsonData = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue; // Skip empty lines

      const values = parseCSVLine(line);
      const rowObject: Record<string, string> = {};

      // Map values to headers
      for (let j = 0; j < processedHeaders.length; j++) {
        const value = values[j] || ""; // Use empty string for missing values
        rowObject[processedHeaders[j]] = value.trim();
      }

      jsonData.push(rowObject);
    }

    return JSON.stringify(jsonData, null, 2);
  } catch (error) {
    throw new Error(
      `CSV parsing error: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};

// Parse a single CSV line handling quoted values
const parseCSVLine = (line: string): string[] => {
  const result = [];
  let current = "";
  let inQuotes = false;
  let i = 0;

  while (i < line.length) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        current += '"';
        i += 2;
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
        i++;
      }
    } else if (char === "," && !inQuotes) {
      // Field separator
      result.push(current);
      current = "";
      i++;
    } else {
      current += char;
      i++;
    }
  }

  // Add the last field
  result.push(current);
  return result;
};

const CsvToJson: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [lowercaseKeys, setLowercaseKeys] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = useCallback(
    (value: string) => {
      setInput(value);
      setError("");

      if (!value.trim()) {
        setOutput("");
        return;
      }

      try {
        const jsonOutput = convertCsvToJson(value, lowercaseKeys);
        setOutput(jsonOutput);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to convert CSV to JSON";
        setError(errorMessage);
        setOutput("");
      }
    },
    [lowercaseKeys]
  );

  const handleLowercaseToggle = useCallback(
    (checked: boolean) => {
      setLowercaseKeys(checked);
      if (input.trim()) {
        handleInputChange(input);
      }
    },
    [input, handleInputChange]
  );

  const handleFileUpload = useCallback(
    (file: File) => {
      if (
        !file.name.endsWith(".csv") &&
        !file.type.includes("csv") &&
        !file.type.includes("text")
      ) {
        setError("Please upload a valid CSV file");
        toast.error("Invalid file type. Please upload a CSV file.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        handleInputChange(content);
        toast.success("CSV file uploaded successfully");
      };
      reader.onerror = () => {
        setError("Failed to read the file");
        toast.error("Failed to read the file");
      };
      reader.readAsText(file);
    },
    [handleInputChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileUpload(file);
      }
    },
    [handleFileUpload]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const sampleCsv = `Name,Age,Country,Email
John Doe,25,USA,john@example.com
Alice Smith,30,Canada,alice@example.com
Bob Johnson,35,UK,bob@example.com
Maria Garcia,28,Spain,maria@example.com
David Wilson,32,Australia,david@example.com`;

  return (
    <ToolContainer>
      <ToolHead
        name="CSV to JSON Converter"
        description="Convert CSV files to JSON format instantly with our free online converter. Upload CSV files or paste CSV data to transform into structured JSON objects with customizable formatting options."
      />

      {!loaded ? (
        <CsvToJsonSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader></CardHeader>
              <CardContent className="space-y-6">
                {/* Input and Output Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* CSV Input - Left Side */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        CSV Input
                      </Label>
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        size="sm"
                      >
                        Upload CSV
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".csv,text/csv,application/csv"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file);
                        }}
                        className="hidden"
                      />
                    </div>

                    {/* Drag and Drop Zone for CSV */}
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      className={`relative border-2 border-dashed rounded-lg p-3 transition-colors ${
                        isDragging
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    >
                      <Textarea
                        value={input}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Paste CSV data here or drag & drop a CSV file...&#10;&#10;Name,Age,Country&#10;John,25,USA&#10;Alice,30,Canada"
                        className="min-h-[250px] font-mono text-sm border-0 resize-none focus:ring-0 bg-transparent"
                      />
                      {isDragging && (
                        <div className="absolute inset-0 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="text-blue-600 dark:text-blue-400 font-medium">
                            Drop your CSV file here
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* JSON Output - Right Side */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        JSON Output
                      </Label>
                      <CopyButton text={output} disabled={!output} />
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="Converted JSON will appear here..."
                      className="min-h-[250px] font-mono text-sm bg-muted/50"
                    />
                  </div>
                </div>

                {/* Options and Actions */}
                <div className="space-y-4">
                  {/* Checkbox Option */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="lowercase"
                      checked={lowercaseKeys}
                      onCheckedChange={handleLowercaseToggle}
                    />
                    <Label
                      htmlFor="lowercase"
                      className="text-sm text-slate-700 dark:text-slate-300 cursor-pointer"
                    >
                      Convert keys to lowercase
                    </Label>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button onClick={handleClear} variant="outline">
                      Clear
                    </Button>
                    <Button
                      onClick={() => handleInputChange(sampleCsv)}
                      variant="secondary"
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
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Understanding CSV to JSON Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    CSV (Comma-Separated Values) to JSON (JavaScript Object
                    Notation) conversion is a fundamental data transformation
                    process in modern web development. CSV files store tabular
                    data in plain text format, while JSON provides a structured,
                    hierarchical format that's ideal for APIs, databases, and
                    web applications.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        CSV Format Features
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Header Row:</strong> First row contains
                            column names/field headers
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Comma Delimited:</strong> Fields separated
                            by commas (or other delimiters)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Quoted Values:</strong> Support for quoted
                            strings with special characters
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Plain Text:</strong> Human-readable and
                            lightweight file format
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        JSON Benefits
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Native JavaScript object notation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Structured data with nested objects and arrays
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Wide API and database support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Type safety and validation capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Easy parsing and manipulation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example conversion
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-blue-600 dark:text-blue-400 mb-1">
                          CSV:
                        </div>
                        <div className="text-slate-800 dark:text-slate-200">
                          {`Name,Age,Country
John,25,USA
Alice,30,Canada`}
                        </div>
                      </div>
                      <div>
                        <div className="text-green-600 dark:text-green-400 mb-1">
                          JSON:
                        </div>
                        <div className="text-slate-800 dark:text-slate-200">
                          {`[
  {
    "Name": "John",
    "Age": "25",
    "Country": "USA"
  },
  {
    "Name": "Alice",
    "Age": "30",
    "Country": "Canada"
  }
]`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CSV Data Processing and Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Data Preparation */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            📋
                          </span>
                        </span>
                        Data Preparation Tips
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Clean Headers:</strong> Ensure column
                            headers are descriptive and consistent
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Handle Special Characters:</strong> Quote
                            fields containing commas, quotes, or newlines
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Consistent Encoding:</strong> Use UTF-8
                            encoding for international characters
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Remove Empty Rows:</strong> Clean up any
                            blank lines or incomplete records
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Common Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            🎯
                          </span>
                        </span>
                        Common Use Cases
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Data Import:</strong> Convert
                            spreadsheet data for REST API consumption
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Database Migration:</strong> Transform
                            legacy CSV exports to JSON for modern databases
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Web Development:</strong> Convert Excel
                            exports to JSON for front-end applications
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data Analysis:</strong> Prepare CSV data for
                            JavaScript-based analytics tools
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Format Specifications */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            ⚙️
                          </span>
                        </span>
                        Format Specifications
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>RFC 4180 Compliance:</strong> Follows
                            standard CSV specification rules
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Quoted Field Support:</strong> Handles
                            double quotes and escape sequences
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Mixed Data Types:</strong> Preserves text
                            representation of all values
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Unicode Support:</strong> Handles
                            international characters and symbols
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Performance Considerations */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            ⚡
                          </span>
                        </span>
                        Performance & Limits
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Browser Processing:</strong> Client-side
                            conversion for privacy and speed
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Memory Efficient:</strong> Handles large
                            files through streaming processing
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Real-time Updates:</strong> Instant
                            conversion as you type or paste data
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Error Handling:</strong> Clear feedback for
                            malformed CSV data
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> When working with large CSV
                      files, consider breaking them into smaller chunks for
                      better performance. Use the "lowercase keys" option to
                      ensure consistent property naming in your JSON objects,
                      especially when integrating with APIs that expect specific
                      key formats.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: How to convert a CSV file to JSON in 1 minute / CSV to JSON"
              description="This video provides a quick tutorial on converting a CSV file to JSON, outlining the process and tools involved."
              videoUrl="https://www.youtube.com/embed/hyV71RJeuOI"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default CsvToJson;
