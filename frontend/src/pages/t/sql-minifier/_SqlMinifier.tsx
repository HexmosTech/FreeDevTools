import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import SqlMinifierSkeleton from "./_SqlMinifierSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import ToolVideo from "@/components/tool/ToolVideo";

// SQL Minification utility functions
const minifySQL = (
  sql: string,
  options: { preserveComments: boolean } = { preserveComments: false }
): string => {
  if (!sql || typeof sql !== "string") {
    throw new Error("Invalid SQL input");
  }

  let result = sql;

  // Remove single-line comments (-- comments) unless preserving
  if (!options.preserveComments) {
    result = result.replace(/--.*$/gm, "");
  }

  // Remove multi-line comments (/* comments */) unless preserving
  if (!options.preserveComments) {
    result = result.replace(/\/\*[\s\S]*?\*\//g, "");
  }

  // Remove extra whitespace and normalize spacing
  result = result
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/\s*;\s*/g, ";") // Remove spaces around semicolons
    .replace(/\s*,\s*/g, ",") // Remove spaces around commas
    .replace(/\s*\(\s*/g, "(") // Remove spaces around opening parentheses
    .replace(/\s*\)\s*/g, ")") // Remove spaces around closing parentheses
    .replace(/\s*=\s*/g, "=") // Remove spaces around equals
    .replace(/\s*<\s*/g, "<") // Remove spaces around less than
    .replace(/\s*>\s*/g, ">") // Remove spaces around greater than
    .replace(/\s*<=\s*/g, "<=") // Remove spaces around less than or equal
    .replace(/\s*>=\s*/g, ">=") // Remove spaces around greater than or equal
    .replace(/\s*<>\s*/g, "<>") // Remove spaces around not equal
    .replace(/\s*\+\s*/g, "+") // Remove spaces around plus
    .replace(/\s*-\s*/g, "-") // Remove spaces around minus
    .replace(/\s*\*\s*/g, "*") // Remove spaces around multiplication
    .replace(/\s*\/\s*/g, "/") // Remove spaces around division
    .trim();

  // Add back necessary spaces around SQL keywords
  const keywords = [
    "SELECT",
    "FROM",
    "WHERE",
    "JOIN",
    "INNER",
    "LEFT",
    "RIGHT",
    "OUTER",
    "ON",
    "AS",
    "AND",
    "OR",
    "NOT",
    "IN",
    "EXISTS",
    "BETWEEN",
    "LIKE",
    "IS",
    "NULL",
    "ORDER",
    "BY",
    "GROUP",
    "HAVING",
    "UNION",
    "INSERT",
    "INTO",
    "VALUES",
    "UPDATE",
    "SET",
    "DELETE",
    "CREATE",
    "TABLE",
    "ALTER",
    "DROP",
    "INDEX",
    "VIEW",
    "CASE",
    "WHEN",
    "THEN",
    "ELSE",
    "END",
    "IF",
    "DISTINCT",
    "ALL",
    "LIMIT",
    "OFFSET",
    "ASC",
    "DESC",
  ];

  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    result = result.replace(regex, ` ${keyword} `);
  });

  // Clean up extra spaces that might have been added
  result = result.replace(/\s+/g, " ").trim();

  return result;
};

const validateSQLInput = (
  sql: string
): { isValid: boolean; error?: string } => {
  if (!sql || typeof sql !== "string") {
    return { isValid: false, error: "SQL input is required" };
  }

  const trimmed = sql.trim();
  if (trimmed.length === 0) {
    return { isValid: false, error: "SQL input cannot be empty" };
  }

  // Basic SQL validation - check for common SQL keywords
  const sqlKeywords = [
    "SELECT",
    "INSERT",
    "UPDATE",
    "DELETE",
    "CREATE",
    "ALTER",
    "DROP",
    "WITH",
    "SHOW",
    "DESCRIBE",
    "EXPLAIN",
    "CALL",
    "SET",
  ];

  const hasValidKeyword = sqlKeywords.some((keyword) =>
    trimmed.toUpperCase().includes(keyword)
  );

  if (!hasValidKeyword) {
    return {
      isValid: false,
      error: "Input does not appear to contain valid SQL statements",
    };
  }

  return { isValid: true };
};

const SqlMinifier: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [preserveComments, setPreserveComments] = useState(false);
  const [compressionRatio, setCompressionRatio] = useState<number | null>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Real-time minification when input changes
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setInput(value);
      setError("");
      setCompressionRatio(null);

      if (!value.trim()) {
        setOutput("");
        return;
      }

      const validation = validateSQLInput(value);
      if (!validation.isValid) {
        setError(validation.error || "Invalid SQL input");
        setOutput("");
        return;
      }

      try {
        const minified = minifySQL(value, { preserveComments });
        setOutput(minified);

        // Calculate compression ratio
        const originalSize = value.length;
        const minifiedSize = minified.length;
        const ratio = ((originalSize - minifiedSize) / originalSize) * 100;
        setCompressionRatio(Math.max(0, ratio));
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to minify SQL";
        setError(errorMessage);
        setOutput("");
      }
    },
    [preserveComments]
  );

  // Re-minify when preserve comments option changes
  useEffect(() => {
    if (input.trim()) {
      const validation = validateSQLInput(input);
      if (validation.isValid) {
        try {
          const minified = minifySQL(input, { preserveComments });
          setOutput(minified);

          const originalSize = input.length;
          const minifiedSize = minified.length;
          const ratio = ((originalSize - minifiedSize) / originalSize) * 100;
          setCompressionRatio(Math.max(0, ratio));
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to minify SQL");
          setOutput("");
        }
      }
    }
  }, [preserveComments, input]);

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
    setCompressionRatio(null);
  };

  const handleSampleSQL = () => {
    const sampleSQL = `-- Get user information with orders
SELECT 
    u.user_id,
    u.username,
    u.email,
    u.created_at,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS total_spent
FROM 
    users u
LEFT JOIN 
    orders o ON u.user_id = o.user_id
WHERE 
    u.status = 'active'
    AND u.created_at >= '2023-01-01'
    /* Only include users with recent activity */
    AND u.last_login >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY 
    u.user_id, u.username, u.email, u.created_at
HAVING 
    total_orders > 0
ORDER BY 
    total_spent DESC, u.created_at ASC
LIMIT 100;`;

    setInput(sampleSQL);
  };

  return (
    <ToolContainer>
      <ToolHead
        name="SQL Minifier"
        description="Minify SQL queries instantly with our free online SQL minifier. Remove comments, extra spaces, and optimize SQL formatting for better performance and smaller file sizes. Secure browser-based processing."
      />

      {!loaded ? (
        <SqlMinifierSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Main Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* SQL Input - Left Side */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        SQL Query
                      </Label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSampleSQL}
                      >
                        Load Sample SQL
                      </Button>
                    </div>
                    <Textarea
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Paste your SQL query here...

Example:
SELECT * FROM users 
WHERE status = 'active' 
  AND created_at > '2023-01-01';"
                      className="h-80 font-mono text-sm resize-none"
                    />
                  </div>

                  {/* Minified Output - Right Side */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Minified SQL
                      </Label>
                      {output && <CopyButton text={output} size="sm" />}
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="Minified SQL will appear here..."
                      className="h-80 font-mono text-sm bg-slate-50 dark:bg-slate-800 resize-none"
                    />
                  </div>
                </div>

                {/* Error Display */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                    <span className="font-medium">Error:</span> {error}
                  </div>
                )}

                {/* Statistics and Options */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Options */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="preserveComments"
                        checked={preserveComments}
                        onCheckedChange={(checked) =>
                          setPreserveComments(checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="preserveComments"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        Preserve comments
                      </Label>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    {input && <span>Original: {input.length} chars</span>}
                    {output && <span>Minified: {output.length} chars</span>}
                    {compressionRatio !== null && (
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        Saved: {compressionRatio.toFixed(1)}%
                      </span>
                    )}
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
                    💡 All SQL processing happens locally in your browser. Your
                    queries never leave your device.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* About SQL Minification */}
            <Card>
              <CardHeader>
                <CardTitle>About SQL Minification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    SQL minification is the process of removing unnecessary
                    characters from SQL queries without changing their
                    functionality. This includes removing comments, extra
                    whitespace, and formatting to create more compact SQL
                    statements.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Benefits of SQL Minification
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Reduced File Size:</strong> Smaller SQL
                            files save storage space and bandwidth
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Faster Transmission:</strong> Smaller
                            queries transfer faster over networks
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Cleaner Logs:</strong> Minified SQL creates
                            more compact database logs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Code Obfuscation:</strong> Makes SQL code
                            less readable for security
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        What Gets Removed
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Single-line comments (-- comments)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Multi-line comments (/* comments */)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Extra whitespace and indentation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Unnecessary line breaks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Spaces around operators and punctuation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Example Transformation
                    </h5>
                    <div className="grid grid-cols-1 gap-3 text-sm font-mono">
                      <div>
                        <span className="text-slate-600 dark:text-slate-400">
                          Before:
                        </span>
                        <div className="bg-white dark:bg-slate-800 p-2 rounded mt-1">
                          {`-- Get active users
SELECT 
    u.name, 
    u.email 
FROM users u 
WHERE u.status = 'active';`}
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-600 dark:text-slate-400">
                          After:
                        </span>
                        <div className="bg-white dark:bg-slate-800 p-2 rounded mt-1">
                          {`SELECT u.name,u.email FROM users u WHERE u.status='active';`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Use Cases */}
            <Card>
              <CardHeader>
                <CardTitle>Common Use Cases for SQL Minification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Development & Deployment */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            🚀
                          </span>
                        </span>
                        Development & Deployment
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Production Deployment:</strong> Minify SQL
                            scripts before deploying to production environments
                            for better performance
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Migration Scripts:</strong> Reduce the size
                            of database migration files for faster execution and
                            storage
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Stored Procedures:</strong> Optimize stored
                            procedure definitions by removing unnecessary
                            formatting
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Build Automation:</strong> Integrate SQL
                            minification into CI/CD pipelines for automated
                            optimization
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Performance & Optimization */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ⚡
                          </span>
                        </span>
                        Performance & Optimization
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Network Optimization:</strong> Reduce
                            bandwidth usage when transmitting SQL queries over
                            networks
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Memory Usage:</strong> Lower memory
                            consumption in applications that store SQL queries
                            in memory
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Cache Efficiency:</strong> Smaller SQL
                            statements improve database query cache utilization
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Log Management:</strong> Reduce database log
                            file sizes for easier monitoring and analysis
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Security & Code Protection */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            🔒
                          </span>
                        </span>
                        Security & Code Protection
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Code Obfuscation:</strong> Make SQL code
                            less readable to protect business logic and database
                            structure
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Comment Removal:</strong> Strip sensitive
                            information and internal notes from production SQL
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Source Code Protection:</strong> Prepare SQL
                            for distribution without revealing implementation
                            details
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Reverse Engineering Prevention:</strong>{" "}
                            Make it harder to understand database schema from
                            SQL files
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Distribution & Packaging */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            📦
                          </span>
                        </span>
                        Distribution & Packaging
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Software Packaging:</strong> Reduce
                            application package sizes by minifying embedded SQL
                            resources
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Optimization:</strong> Minimize SQL
                            payload sizes in database API requests and responses
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Documentation Tools:</strong> Create compact
                            SQL examples for technical documentation
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Code Samples:</strong> Prepare concise SQL
                            snippets for tutorials and educational materials
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>⚠️ Important Note:</strong> While minification
                      reduces file size and can improve performance, always test
                      minified SQL thoroughly in development environments.
                      Consider keeping original formatted versions for debugging
                      and maintenance purposes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: What is Bundling and Minification in MVC?"
              description="This video explains the concept of minification in the context of web development, a process that removes unnecessary characters from code."
              videoUrl="https://www.youtube.com/embed/-Rj6h9B0Kzg"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default SqlMinifier;
