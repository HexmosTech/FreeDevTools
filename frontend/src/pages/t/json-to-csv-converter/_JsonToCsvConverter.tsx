import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import JsonToCsvConverterSkeleton from "./_JsonToCsvConverterSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Download } from "lucide-react";

// JSON to CSV conversion utility
function convertJsonToCsv(
  jsonString: string,
  options: { flatten: boolean; includeEmptyFields: boolean } = {
    flatten: false,
    includeEmptyFields: true,
  }
): string {
  try {
    const data = JSON.parse(jsonString);

    if (!Array.isArray(data)) {
      // If it's a single object, wrap it in an array
      const singleObject = data;
      if (typeof singleObject === "object" && singleObject !== null) {
        return objectToCsv([singleObject], options);
      }
      throw new Error("JSON must be an array of objects or a single object");
    }

    if (data.length === 0) {
      return "";
    }

    return objectToCsv(data, options);
  } catch (error) {
    throw new Error(
      `Invalid JSON: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

function objectToCsv(
  data: any[],
  options: { flatten: boolean; includeEmptyFields: boolean }
): string {
  if (data.length === 0) return "";

  // Flatten objects if requested
  const processedData = options.flatten ? data.map(flattenObject) : data;

  // Get all unique keys from all objects
  const allKeys = new Set<string>();
  processedData.forEach((obj) => {
    if (typeof obj === "object" && obj !== null) {
      Object.keys(obj).forEach((key) => allKeys.add(key));
    }
  });

  const headers = Array.from(allKeys);

  // Create CSV header
  const csvRows = [headers.map(escapeCSVField).join(",")];

  // Create CSV rows
  processedData.forEach((obj) => {
    const row = headers.map((header) => {
      let value = obj && typeof obj === "object" ? obj[header] : "";

      // Handle different data types
      if (value === null || value === undefined) {
        value = options.includeEmptyFields ? "" : "";
      } else if (typeof value === "object") {
        value = JSON.stringify(value);
      } else {
        value = String(value);
      }

      return escapeCSVField(value);
    });
    csvRows.push(row.join(","));
  });

  return csvRows.join("\n");
}

function flattenObject(obj: any, prefix = ""): any {
  const flattened: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flattened, flattenObject(value, newKey));
      } else {
        flattened[newKey] = value;
      }
    }
  }

  return flattened;
}

function escapeCSVField(field: string): string {
  // Convert to string if not already
  const str = String(field);

  // If field contains comma, quote, or newline, wrap in quotes and escape quotes
  if (
    str.includes(",") ||
    str.includes('"') ||
    str.includes("\n") ||
    str.includes("\r")
  ) {
    return `"${str.replace(/"/g, '""')}"`;
  }

  return str;
}

const JsonToCsvConverter: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [flatten, setFlatten] = useState(false);
  const [includeEmptyFields, setIncludeEmptyFields] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Real-time conversion when input changes
  const handleConversion = useCallback(() => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }

    try {
      const csv = convertJsonToCsv(input, { flatten, includeEmptyFields });
      setOutput(csv);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed");
      setOutput("");
    }
  }, [input, flatten, includeEmptyFields]);

  // Trigger conversion whenever input or options change
  useEffect(() => {
    handleConversion();
  }, [handleConversion]);

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleDownload = () => {
    if (!output) {
      toast.error("No CSV data to download");
      return;
    }

    try {
      const blob = new Blob([output], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "converted_data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        toast.success("CSV file downloaded successfully!");
      }
    } catch (err) {
      toast.error("Failed to download CSV file");
    }
  };

  const handleFillSampleData = () => {
    const sampleData = JSON.stringify(
      [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          age: 30,
          address: {
            street: "123 Main St",
            city: "New York",
            zipCode: "10001",
          },
          hobbies: ["reading", "cycling"],
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          age: 25,
          address: {
            street: "456 Oak Ave",
            city: "Los Angeles",
            zipCode: "90210",
          },
          hobbies: ["painting", "cooking", "traveling"],
        },
      ],
      null,
      2
    );
    setInput(sampleData);
  };

  return (
    <ToolContainer>
      <ToolHead
        name="JSON to CSV Converter"
        description="Convert JSON data to CSV format instantly. Transform arrays of objects to spreadsheet-ready CSV files with real-time preview and advanced formatting options."
      />

      {!loaded ? (
        <JsonToCsvConverterSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Main Conversion Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* JSON Input - Left Side */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        JSON Input
                      </Label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleFillSampleData}
                      >
                        Fill Sample Data
                      </Button>
                    </div>
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Paste your JSON data here..."
                      className="h-80 font-mono text-sm"
                    />
                  </div>

                  {/* CSV Output - Right Side */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        CSV Output
                      </Label>
                      {output && (
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleDownload}
                            className="flex items-center gap-1"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                          <CopyButton text={output} size="sm" />
                        </div>
                      )}
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="CSV result will appear here..."
                      className="h-80 font-mono text-sm bg-slate-50 dark:bg-slate-800"
                    />
                  </div>
                </div>

                {/* Error Display */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                    {error}
                  </div>
                )}

                {/* Options and Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Options */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="flatten"
                        checked={flatten}
                        onCheckedChange={(checked) =>
                          setFlatten(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="flatten"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        Flatten nested objects
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="includeEmpty"
                        checked={includeEmptyFields}
                        onCheckedChange={(checked) =>
                          setIncludeEmptyFields(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="includeEmpty"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        Include empty fields
                      </Label>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleClear}>
                      Clear
                    </Button>
                  </div>
                </div>

                {/* Info Banner */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 Conversion happens in real-time as you type. Your data
                    stays private - everything is processed in your browser.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* Benefits of JSON to CSV Conversion */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits of JSON to CSV Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 dark:text-green-400 text-sm">📊</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Excel & Spreadsheet Compatibility</h4>
                          <p className="text-sm">Open your JSON data directly in Excel, Google Sheets, or any spreadsheet application for advanced analysis and visualization.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 dark:text-blue-400 text-sm">⚡</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Faster Data Processing</h4>
                          <p className="text-sm">CSV files are lightweight and load faster than JSON, making them ideal for large datasets and quick data operations.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-purple-600 dark:text-purple-400 text-sm">🔄</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Universal Data Exchange</h4>
                          <p className="text-sm">CSV is supported by virtually every data tool, database, and analytics platform, ensuring seamless data sharing and migration.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-orange-600 dark:text-orange-400 text-sm">📈</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Enhanced Data Analysis</h4>
                          <p className="text-sm">Leverage powerful spreadsheet functions, pivot tables, charts, and statistical analysis tools that work best with tabular CSV data.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 dark:text-red-400 text-sm">🎯</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Business Intelligence Integration</h4>
                          <p className="text-sm">Import directly into BI tools like Tableau, Power BI, or Looker for creating dashboards and business reports.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-indigo-600 dark:text-indigo-400 text-sm">💾</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Database Import Optimization</h4>
                          <p className="text-sm">Most databases offer optimized CSV import functions that are faster and more reliable than JSON imports.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use Cases for JSON to CSV Conversion */}
            <Card>
              <CardHeader>
                <CardTitle>Use Cases for JSON to CSV Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Development & API Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">🔧</span>
                        </span>
                        Development & API Integration
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Response Analysis:</strong> Convert REST API responses to CSV for performance monitoring, error tracking, and usage analytics.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Log Data Processing:</strong> Transform application logs from JSON format to CSV for better analysis in log management tools.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Database Migration:</strong> Export JSON documents from NoSQL databases and import them into relational databases via CSV.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Configuration Management:</strong> Convert complex JSON configuration files to CSV for bulk editing and validation.
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Business & Analytics Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">📊</span>
                        </span>
                        Business & Analytics
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>E-commerce Analytics:</strong> Convert product catalogs, order data, and customer information from JSON APIs to CSV for sales analysis.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Social Media Data:</strong> Transform social media API responses (Twitter, Facebook) to CSV for sentiment analysis and engagement tracking.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Financial Reporting:</strong> Convert financial data from accounting APIs to CSV for creating detailed financial reports and audits.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Customer Survey Data:</strong> Transform survey responses from JSON format to CSV for statistical analysis and visualization.
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Data Science & Research Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">🔬</span>
                        </span>
                        Data Science & Research
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Machine Learning Datasets:</strong> Prepare training data by converting JSON datasets to CSV format for ML frameworks like scikit-learn.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>IoT Sensor Data:</strong> Convert time-series JSON data from IoT devices to CSV for analysis in specialized analytics tools.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Academic Research:</strong> Transform research data from JSON format to CSV for statistical analysis in R, SPSS, or Python pandas.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Web Scraping Results:</strong> Convert scraped data from JSON to CSV for easier manipulation and analysis in data science workflows.
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Content & Media Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">🎨</span>
                        </span>
                        Content & Media Management
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Content Management Systems:</strong> Export blog posts, articles, and metadata from headless CMS JSON APIs to CSV for content audits.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Media Asset Management:</strong> Convert image, video, and document metadata from JSON to CSV for asset inventory and organization.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>SEO Analytics:</strong> Transform search engine performance data from JSON APIs to CSV for comprehensive SEO reporting and analysis.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Event Management:</strong> Convert event registration and attendee data from JSON to CSV for event planning and follow-up activities.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> Use the "Flatten nested objects" option when dealing with complex JSON structures to create more manageable CSV files for analysis. This converts nested objects like <code>{`{\"user\": {\"name\": \"John\", \"age\": 30}}"`}</code> into flat columns like <code>user.name</code> and <code>user.age</code>.
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

export default JsonToCsvConverter;
