import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import DiffCheckerSkeleton from "./_DiffCheckerSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

// Diff algorithm options
const DIFF_MODES = {
  chars: { name: "Character", description: "Compare character by character" },
  words: { name: "Word", description: "Compare word by word" },
  lines: { name: "Line", description: "Compare line by line" },
  sentences: { name: "Sentence", description: "Compare sentence by sentence" },
} as const;

// Diff change interface
interface DiffChange {
  count?: number;
  value: string;
  added?: boolean;
  removed?: boolean;
}

// Diff result interface
interface DiffResult {
  changes: DiffChange[];
  stats: {
    additions: number;
    deletions: number;
    modifications: number;
    unchanged: number;
  };
  unified: string;
}

const DiffChecker: React.FC = () => {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [diffResult, setDiffResult] = useState<DiffResult | null>(null);
  const [diffMode, setDiffMode] = useState<keyof typeof DIFF_MODES>("lines");
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic import for diff library
  const performDiff = useCallback(
    async (oldText: string, newText: string) => {
      try {
        const { diffChars, diffWords, diffLines, diffSentences, createPatch } =
          await import("diff");

        let changes: DiffChange[] = [];

        // Process texts based on options
        let processedOldText = oldText;
        let processedNewText = newText;

        if (ignoreCase) {
          processedOldText = oldText.toLowerCase();
          processedNewText = newText.toLowerCase();
        }

        if (ignoreWhitespace) {
          processedOldText = processedOldText.replace(/\s+/g, " ").trim();
          processedNewText = processedNewText.replace(/\s+/g, " ").trim();
        }

        // Select diff algorithm based on mode
        switch (diffMode) {
          case "chars":
            changes = diffChars(processedOldText, processedNewText);
            break;
          case "words":
            changes = diffWords(processedOldText, processedNewText);
            break;
          case "lines":
            changes = diffLines(processedOldText, processedNewText);
            break;
          case "sentences":
            changes = diffSentences(processedOldText, processedNewText);
            break;
        }

        // Calculate statistics
        const stats = {
          additions: changes.filter((change) => change.added).length,
          deletions: changes.filter((change) => change.removed).length,
          modifications: changes.filter(
            (change) => change.added || change.removed
          ).length,
          unchanged: changes.filter(
            (change) => !change.added && !change.removed
          ).length,
        };

        // Generate unified diff
        const unified = createPatch(
          "comparison",
          oldText,
          newText,
          "Original",
          "Modified",
          {
            context: 3,
          }
        );

        setDiffResult({ changes, stats, unified });
      } catch (error) {
        console.error("Diff calculation failed:", error);
        toast.error("Failed to calculate differences");
      }
    },
    [diffMode, ignoreCase, ignoreWhitespace]
  );

  // Auto-diff when inputs change
  useEffect(() => {
    if (leftText.trim() || rightText.trim()) {
      performDiff(leftText, rightText);
    } else {
      setDiffResult(null);
    }
  }, [leftText, rightText, performDiff]);

  const handleClear = () => {
    setLeftText("");
    setRightText("");
    setDiffResult(null);
    toast.success("Cleared all content");
  };

  const handleSampleText = () => {
    const sampleLeft = `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

const user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};`;

    const sampleRight = `function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

const user = {
  name: "Jane Smith",
  age: 25,
  email: "jane@example.com",
  isActive: true
};`;

    setLeftText(sampleLeft);
    setRightText(sampleRight);
    toast.success("Sample code loaded for comparison");
  };

  const renderDiffView = () => {
    if (!diffResult) return null;

    return (
      <div className="space-y-4">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              +{diffResult.stats.additions}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Added
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              -{diffResult.stats.deletions}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Removed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {diffResult.stats.modifications}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Changed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
              {diffResult.stats.unchanged}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Unchanged
            </div>
          </div>
        </div>

        {/* Diff Display */}
        <div className="border border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-700 px-4 py-2 border-b border-slate-300 dark:border-slate-600">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Visual Diff</Label>
              <CopyButton
                text={diffResult.unified}
                size="sm"
                title="Copy unified diff"
              />
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-slate-800 max-h-96 overflow-auto">
            <div className="font-mono text-sm space-y-1">
              {diffResult.changes.map((change, index) => (
                <div
                  key={index}
                  className={`whitespace-pre-wrap ${
                    change.added
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                      : change.removed
                        ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                        : "text-slate-700 dark:text-slate-300"
                  } ${change.added || change.removed ? "px-1" : ""}`}
                >
                  {change.added && "+ "}
                  {change.removed && "- "}
                  {change.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ToolContainer>
      <ToolHead
        name="Diff Checker"
        description="Compare text and code differences instantly with our free online diff checker. Visualize changes character by character, word by word, or line by line with advanced comparison options and unified diff export."
      />

      {!loaded ? (
        <DiffCheckerSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Main Comparison Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Text - Original */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Original Text
                      </Label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSampleText}
                      >
                        Load Sample
                      </Button>
                    </div>
                    <Textarea
                      value={leftText}
                      onChange={(e) => setLeftText(e.target.value)}
                      placeholder="Paste your original text here...

Examples:
- Code files
- Configuration files
- Documents
- Any text content"
                      className="h-80 font-mono text-sm resize-none"
                    />
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Characters: {leftText.length} | Lines:{" "}
                      {leftText.split("\n").length}
                    </div>
                  </div>

                  {/* Right Text - Modified */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Modified Text
                      </Label>
                      <Button variant="outline" size="sm" onClick={handleClear}>
                        Clear All
                      </Button>
                    </div>
                    <Textarea
                      value={rightText}
                      onChange={(e) => setRightText(e.target.value)}
                      placeholder="Paste your modified text here...

The differences will be highlighted 
automatically as you type."
                      className="h-80 font-mono text-sm resize-none"
                    />
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Characters: {rightText.length} | Lines:{" "}
                      {rightText.split("\n").length}
                    </div>
                  </div>
                </div>

                {/* Comparison Options */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Diff Mode Selection */}
                  <div className="flex items-center space-x-4">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Compare by:
                    </Label>
                    <Select
                      value={diffMode}
                      onValueChange={(value) =>
                        setDiffMode(value as keyof typeof DIFF_MODES)
                      }
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(DIFF_MODES).map(([key, mode]) => (
                          <SelectItem key={key} value={key}>
                            {mode.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Comparison Options */}
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="ignoreCase"
                        checked={ignoreCase}
                        onCheckedChange={(checked) =>
                          setIgnoreCase(checked as boolean)
                        }
                      />
                      <Label htmlFor="ignoreCase" className="text-sm">
                        Ignore case
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="ignoreWhitespace"
                        checked={ignoreWhitespace}
                        onCheckedChange={(checked) =>
                          setIgnoreWhitespace(checked as boolean)
                        }
                      />
                      <Label htmlFor="ignoreWhitespace" className="text-sm">
                        Ignore whitespace
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Diff Results */}
                {diffResult && (leftText.trim() || rightText.trim()) && (
                  <div className="space-y-4">
                    <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                    {renderDiffView()}
                  </div>
                )}

                {/* Info Banner */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 All comparisons happen in real-time as you type. Your
                    data stays private - everything is processed in your
                    browser.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* About Diff Checking */}
            <Card>
              <CardHeader>
                <CardTitle>About Text and Code Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    A diff checker (difference checker) is a tool that compares
                    two pieces of text and highlights the differences between
                    them. It's essential for software development, document
                    editing, and content management, showing exactly what has
                    been added, removed, or modified.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Common Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Code Reviews:</strong> Compare different
                            versions of source code
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Document Editing:</strong> Track changes in
                            text documents
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Configuration Files:</strong> Compare server
                            configs and settings
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Data Migration:</strong> Verify data
                            consistency after transfers
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Comparison Modes
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Character:</strong> Most detailed, shows
                            every character change
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Word:</strong> Compares word by word, good
                            for text
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Line:</strong> Best for code and structured
                            text
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Sentence:</strong> Ideal for prose and
                            documents
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Color Coding Explained
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-200 dark:bg-green-900/50 rounded mr-2"></div>
                        <span>Green: Added content</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-200 dark:bg-red-900/50 rounded mr-2"></div>
                        <span>Red: Removed content</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-slate-200 dark:bg-slate-600 rounded mr-2"></div>
                        <span>Gray: Unchanged content</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Features and Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Advanced Features and Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            ⚙️
                          </span>
                        </span>
                        Comparison Options
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Ignore Case:</strong> Treats uppercase and
                            lowercase letters as identical, useful for
                            case-insensitive comparisons
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Ignore Whitespace:</strong> Normalizes
                            spaces, tabs, and line breaks for cleaner
                            comparisons
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Unified Diff:</strong> Export results in
                            standard patch format for version control systems
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            💡
                          </span>
                        </span>
                        Pro Tips
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use Line Mode:</strong> Best for code,
                            configuration files, and structured text
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Character Mode:</strong> Perfect for finding
                            small typos and subtle changes
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Export Unified Diff:</strong> Copy the
                            unified diff format for patch files and Git
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>🔒 Privacy Note:</strong> All text comparison
                      happens locally in your browser. Your content never leaves
                      your device, ensuring complete privacy and security for
                      sensitive documents and code.
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

export default DiffChecker;
