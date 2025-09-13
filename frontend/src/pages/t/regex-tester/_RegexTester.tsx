import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import RegexTesterSkeleton from "./_RegexTesterSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

// Regex testing utility functions
interface RegexMatch {
  match: string;
  index: number;
  groups?: string[];
}

interface RegexResult {
  isValid: boolean;
  matches: RegexMatch[];
  matchCount: number;
  error?: string;
  flags: string;
}

const createRegex = (pattern: string, flags: string = ""): RegExp => {
  try {
    // Remove leading/trailing slashes and extract flags if pattern includes them
    let cleanPattern = pattern;
    let extractedFlags = flags;

    if (pattern.startsWith("/") && pattern.includes("/", 1)) {
      const lastSlash = pattern.lastIndexOf("/");
      cleanPattern = pattern.substring(1, lastSlash);
      extractedFlags = pattern.substring(lastSlash + 1) || flags;
    }

    return new RegExp(cleanPattern, extractedFlags);
  } catch (error) {
    throw new Error(
      `Invalid regex pattern: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};

const testRegex = (
  pattern: string,
  testString: string,
  flags: string = ""
): RegexResult => {
  try {
    if (!pattern.trim()) {
      return {
        isValid: false,
        matches: [],
        matchCount: 0,
        error: "Pattern cannot be empty",
        flags: "",
      };
    }

    const regex = createRegex(pattern, flags);
    const matches: RegexMatch[] = [];

    if (flags.includes("g") || regex.flags.includes("g")) {
      // Global match
      let match;
      const globalRegex = new RegExp(regex.source, regex.flags);
      while ((match = globalRegex.exec(testString)) !== null) {
        matches.push({
          match: match[0],
          index: match.index,
          groups: match.length > 1 ? match.slice(1) : undefined,
        });

        // Prevent infinite loop for zero-width matches
        if (match[0] === "") {
          globalRegex.lastIndex++;
        }
      }
    } else {
      // Single match
      const match = testString.match(regex);
      if (match) {
        matches.push({
          match: match[0],
          index: match.index || 0,
          groups: match.length > 1 ? match.slice(1) : undefined,
        });
      }
    }

    return {
      isValid: true,
      matches,
      matchCount: matches.length,
      flags: regex.flags,
    };
  } catch (error) {
    return {
      isValid: false,
      matches: [],
      matchCount: 0,
      error: error instanceof Error ? error.message : "Unknown error",
      flags: "",
    };
  }
};

// Component for highlighting matches in text
interface RegexHighlightTextProps {
  text: string;
  matches: RegexMatch[];
}

const RegexHighlightText: React.FC<RegexHighlightTextProps> = ({
  text,
  matches,
}) => {
  if (matches.length === 0) {
    return <span className="text-slate-600 dark:text-slate-400">{text}</span>;
  }

  // Sort matches by index to avoid overlap issues
  const sortedMatches = [...matches].sort((a, b) => a.index - b.index);
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  sortedMatches.forEach((match, index) => {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(
        <span
          key={`text-${index}`}
          className="text-slate-600 dark:text-slate-400"
        >
          {text.substring(lastIndex, match.index)}
        </span>
      );
    }

    // Add highlighted match
    parts.push(
      <span
        key={`match-${index}`}
        className="bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 px-1 rounded"
      >
        {match.match}
      </span>
    );

    lastIndex = match.index + match.match.length;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(
      <span key="text-end" className="text-slate-600 dark:text-slate-400">
        {text.substring(lastIndex)}
      </span>
    );
  }

  return (
    <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
      {parts}
    </div>
  );
};

const RegexTester: React.FC = () => {
  const [pattern, setPattern] = useState("");
  const [testString, setTestString] = useState("");
  const [flags, setFlags] = useState("");
  const [result, setResult] = useState<RegexResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Flag options
  const flagOptions = [
    { key: "g", label: "Global", description: "Find all matches" },
    { key: "i", label: "Ignore case", description: "Case insensitive" },
    { key: "m", label: "Multiline", description: "^ and $ match line breaks" },
    { key: "s", label: "Dot all", description: ". matches newlines" },
    { key: "u", label: "Unicode", description: "Unicode support" },
    { key: "y", label: "Sticky", description: "Match from lastIndex" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTest = useCallback(() => {
    if (!pattern.trim()) {
      setResult(null);
      return;
    }

    const testResult = testRegex(pattern, testString, flags);
    setResult(testResult);
  }, [pattern, testString, flags]);

  // Real-time testing when inputs change
  useEffect(() => {
    handleTest();
  }, [handleTest]);

  const handleFlagChange = (flagKey: string, checked: boolean) => {
    if (checked) {
      setFlags((prev) => (prev.includes(flagKey) ? prev : prev + flagKey));
    } else {
      setFlags((prev) => prev.replace(flagKey, ""));
    }
  };

  const handleClear = () => {
    setPattern("");
    setTestString("");
    setFlags("");
    setResult(null);
    toast.success("Cleared all fields");
  };

  const handleSampleRegex = () => {
    const samplePattern =
      "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b";
    const sampleText = `Contact us at support@example.com or sales@company.org
For urgent matters, reach out to admin@test.net
Invalid emails: notanemail@, @domain.com, user@.com`;

    setPattern(samplePattern);
    setTestString(sampleText);
    setFlags("g");
    toast.success("Sample email regex pattern loaded");
  };

  const copyMatches = () => {
    if (!result || result.matches.length === 0) return;

    const matchesText = result.matches.map((m) => m.match).join("\n");
    navigator.clipboard.writeText(matchesText);
    toast.success("Matches copied to clipboard!");
  };

  return (
    <ToolContainer>
      <ToolHead
        name="Regex Tester"
        description="Test and validate regular expressions instantly with our free online regex tester. Match patterns, highlight results, and debug regex with real-time feedback and comprehensive pattern matching."
      />

      {!loaded ? (
        <RegexTesterSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Pattern Input */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Regular Expression Pattern
                    </Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleSampleRegex}
                    >
                      Load Sample
                    </Button>
                  </div>
                  <Input
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    placeholder="Enter regex pattern (e.g., \d+|[a-z]+ or /pattern/flags)"
                    className="font-mono"
                  />
                </div>

                {/* Flags */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Flags
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {flagOptions.map((flag) => (
                      <div
                        key={flag.key}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={flag.key}
                          checked={flags.includes(flag.key)}
                          onCheckedChange={(checked) =>
                            handleFlagChange(flag.key, !!checked)
                          }
                        />
                        <Label
                          htmlFor={flag.key}
                          className="text-sm cursor-pointer"
                          title={flag.description}
                        >
                          {flag.label} ({flag.key})
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Test String */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Test String
                  </Label>
                  <Textarea
                    value={testString}
                    onChange={(e) => setTestString(e.target.value)}
                    placeholder="Enter the text you want to test against your regex pattern..."
                    className="h-32 font-mono text-sm resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {result && result.isValid && (
                      <span>
                        {result.matchCount} match
                        {result.matchCount !== 1 ? "es" : ""} found
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={handleClear}>
                      Clear
                    </Button>
                    {result && result.matches.length > 0 && (
                      <Button variant="outline" onClick={copyMatches}>
                        Copy Matches
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card className="tool-card-bg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Results</CardTitle>
                  {result && result.isValid && (
                    <Badge
                      variant={result.matchCount > 0 ? "default" : "secondary"}
                    >
                      {result.matchCount} match
                      {result.matchCount !== 1 ? "es" : ""}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {result?.error ? (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                    <p className="font-medium">Error:</p>
                    <p className="text-sm">{result.error}</p>
                  </div>
                ) : result?.isValid ? (
                  <div className="space-y-4">
                    {/* Pattern Info */}
                    {result.flags && (
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-medium">Active flags:</span>{" "}
                        {result.flags}
                      </div>
                    )}

                    {/* Highlighted Text */}
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-800">
                      <Label className="text-xs text-slate-600 dark:text-slate-400 mb-2 block">
                        Text with matches highlighted:
                      </Label>
                      {testString ? (
                        <RegexHighlightText
                          text={testString}
                          matches={result.matches}
                        />
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500 italic">
                          Enter test string to see matches
                        </span>
                      )}
                    </div>

                    {/* Matches List */}
                    {result.matches.length > 0 && (
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Matches:</Label>
                        <div className="max-h-32 overflow-y-auto space-y-1">
                          {result.matches.map((match, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded text-sm"
                            >
                              <span className="font-mono">{match.match}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-slate-500">
                                  Index: {match.index}
                                </span>
                                <CopyButton text={match.match} size="sm" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                    <p>Enter a regex pattern to start testing</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* About Regex Card */}
            <Card>
              <CardHeader>
                <CardTitle>About Regular Expressions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400">
                  Regular expressions (regex) are powerful patterns used to
                  match character combinations in strings. They're essential for
                  text processing, validation, and search operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Common Patterns
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                          \d+
                        </code>{" "}
                        - One or more digits
                      </div>
                      <div>
                        <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                          \w+
                        </code>{" "}
                        - One or more word characters
                      </div>
                      <div>
                        <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                          [a-z]+
                        </code>{" "}
                        - One or more lowercase letters
                      </div>
                      <div>
                        <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                          ^start
                        </code>{" "}
                        - Line starts with "start"
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Special Characters
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                          .
                        </code>{" "}
                        - Any character
                      </div>
                      <div>
                        <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                          *
                        </code>{" "}
                        - Zero or more
                      </div>
                      <div>
                        <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                          +
                        </code>{" "}
                        - One or more
                      </div>
                      <div>
                        <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">
                          ?
                        </code>{" "}
                        - Zero or one
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Tip:</strong> Use the flags to modify how your regex
                    behaves. The 'g' flag finds all matches, 'i' ignores case,
                    and 'm' treats each line separately.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Common Use Cases Card */}
            <Card>
              <CardHeader>
                <CardTitle>Common Use Cases & Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Email Validation
                    </h4>
                    <code className="block p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                      [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{`{2,}`}
                    </code>

                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      Phone Numbers
                    </h4>
                    <code className="block p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                      \(?\d{`{3}`}\)?[-.\s]?\d{`{3}`}[-.\s]?\d{`{4}`}
                    </code>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      URL Matching
                    </h4>
                    <code className="block p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                      https?:\/\/[^\s]+
                    </code>

                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      IP Address
                    </h4>
                    <code className="block p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                      \b(?:\d{`{1,3}`}\.){`{3}`}\d{`{1,3}`}\b
                    </code>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Best Practice:</strong> Test your regex patterns
                    thoroughly with various inputs to ensure they work as
                    expected and don't have unintended matches.
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

export default RegexTester;
