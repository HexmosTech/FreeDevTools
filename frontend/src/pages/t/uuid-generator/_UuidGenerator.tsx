import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import UuidGeneratorSkeleton from "./_UuidGeneratorSkeleton";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

// UUID Versions and their characteristics
const UUID_VERSIONS = {
  v4: {
    name: "Version 4 (Random)",
    description: "Random UUIDs - most commonly used",
    generator: () => crypto.randomUUID(),
  },
  v1: {
    name: "Version 1 (Timestamp)",
    description: "Timestamp-based UUIDs (simulated)",
    generator: () => generateUUIDv1(),
  },
  nil: {
    name: "Nil UUID",
    description: "All zeros UUID",
    generator: () => "00000000-0000-0000-0000-000000000000",
  },
  max: {
    name: "Max UUID",
    description: "All ones UUID",
    generator: () => "ffffffff-ffff-ffff-ffff-ffffffffffff",
  },
};

// Generate UUID v1 (timestamp-based) - simplified implementation
function generateUUIDv1(): string {
  const timestamp = Date.now();
  const clockSeq = Math.floor(Math.random() * 0x4000);
  const node = Math.floor(Math.random() * 0xffffffffffff);

  // Convert timestamp to UUID format (simplified)
  const timeHex = timestamp.toString(16).padStart(16, "0");
  const timeLow = timeHex.slice(-8);
  const timeMid = timeHex.slice(-12, -8);
  const timeHi = "1" + timeHex.slice(-15, -12); // Version 1

  const clockSeqHex = clockSeq.toString(16).padStart(4, "0");
  const nodeHex = node.toString(16).padStart(12, "0");

  return `${timeLow}-${timeMid}-${timeHi}-${clockSeqHex}-${nodeHex}`;
}

// Validate UUID format
function isValidUUID(uuid: string): boolean {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const nilUuid = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/;
  const maxUuid = /^[f]{8}-[f]{4}-[f]{4}-[f]{4}-[f]{12}$/i;

  return uuidRegex.test(uuid) || nilUuid.test(uuid) || maxUuid.test(uuid);
}

// Extract UUID information
function analyzeUUID(uuid: string) {
  if (!isValidUUID(uuid)) {
    return { valid: false, error: "Invalid UUID format" };
  }

  const parts = uuid.split("-");
  const version = parseInt(parts[2][0], 16);
  const variant = parseInt(parts[3][0], 16);

  let versionInfo = "Unknown";
  switch (version) {
    case 1:
      versionInfo = "Version 1 (Timestamp-based)";
      break;
    case 2:
      versionInfo = "Version 2 (DCE Security)";
      break;
    case 3:
      versionInfo = "Version 3 (MD5 hash)";
      break;
    case 4:
      versionInfo = "Version 4 (Random)";
      break;
    case 5:
      versionInfo = "Version 5 (SHA-1 hash)";
      break;
    default:
      versionInfo = `Version ${version} (Unknown)`;
  }

  let variantInfo = "Unknown";
  if ((variant & 0x8) === 0) variantInfo = "Reserved (NCS)";
  else if ((variant & 0xc) === 0x8) variantInfo = "RFC 4122";
  else if ((variant & 0xe) === 0xc) variantInfo = "Microsoft";
  else variantInfo = "Reserved (Future)";

  return {
    valid: true,
    version: versionInfo,
    variant: variantInfo,
    timestamp: version === 1 ? "Timestamp-based" : "N/A",
    node: version === 1 ? parts[4] : "N/A",
    parts: {
      timeLow: parts[0],
      timeMid: parts[1],
      timeHi: parts[2],
      clockSeq: parts[3],
      node: parts[4],
    },
  };
}

const UuidGenerator: React.FC = () => {
  const [currentUuids, setCurrentUuids] = useState<string[]>([
    "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  ]);
  const [selectedVersion, setSelectedVersion] = useState<string>("v4");
  const [bulkCount, setBulkCount] = useState<number>(1);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [removeDashes, setRemoveDashes] = useState<boolean>(false);
  const [analyzeInput, setAnalyzeInput] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const generateUUIDs = useCallback(() => {
    const generator =
      UUID_VERSIONS[selectedVersion as keyof typeof UUID_VERSIONS]?.generator;
    if (!generator) return;

    const count = Math.min(bulkCount, 1000); // Limit to 1000 UUIDs
    const newUuids = Array.from({ length: count }, () => {
      let uuid = generator();

      if (uppercase) {
        uuid = uuid.toUpperCase();
      }

      if (removeDashes) {
        uuid = uuid.replace(/-/g, "");
      }

      return uuid;
    });

    setCurrentUuids(newUuids);
    toast.success(
      `Generated ${count} UUID${count > 1 ? "s" : ""} successfully!`
    );
  }, [selectedVersion, bulkCount, uppercase, removeDashes]);

  const handleAnalyze = useCallback(() => {
    if (!analyzeInput.trim()) {
      setAnalysisResult(null);
      return;
    }

    const result = analyzeUUID(analyzeInput.trim());
    setAnalysisResult(result);
  }, [analyzeInput]);

  // Trigger analysis when input changes
  useEffect(() => {
    handleAnalyze();
  }, [handleAnalyze]);

  const copyAllUuids = () => {
    const allUuids = currentUuids.join("\n");
    navigator.clipboard.writeText(allUuids);
    toast.success(
      `Copied ${currentUuids.length} UUID${currentUuids.length > 1 ? "s" : ""} to clipboard!`
    );
  };

  const formatUuidForDisplay = (uuid: string) => {
    // Add dashes back for display if they were removed
    if (removeDashes && uuid.length === 32) {
      return `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`;
    }
    return uuid;
  };

  return (
    <ToolContainer>
      <ToolHead
        name="UUID Generator"
        description="Generate secure UUIDs instantly with our free online UUID generator. Create random v4 UUIDs, timestamp-based v1 UUIDs, or special nil/max UUIDs. Bulk generation and analysis tools included."
      />

      {!loaded ? (
        <UuidGeneratorSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* UUID Generation Controls */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Version Selection - Left */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      UUID Version
                    </Label>
                    <Select
                      value={selectedVersion}
                      onValueChange={setSelectedVersion}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(UUID_VERSIONS).map(([key, version]) => (
                          <SelectItem key={key} value={key}>
                            {version.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {
                        UUID_VERSIONS[
                          selectedVersion as keyof typeof UUID_VERSIONS
                        ]?.description
                      }
                    </div>
                  </div>

                  {/* Bulk Count - Center */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Quantity
                    </Label>
                    <Input
                      type="number"
                      min={1}
                      max={1000}
                      value={bulkCount}
                      onChange={(e) =>
                        setBulkCount(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      placeholder="1"
                    />
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Generate up to 1000 UUIDs at once
                    </div>
                  </div>

                  {/* Options - Right */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Format Options
                    </Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uppercase"
                          checked={uppercase}
                          onCheckedChange={(checked) =>
                            setUppercase(checked as boolean)
                          }
                        />
                        <Label htmlFor="uppercase" className="text-sm">
                          Uppercase
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="removeDashes"
                          checked={removeDashes}
                          onCheckedChange={(checked) =>
                            setRemoveDashes(checked as boolean)
                          }
                        />
                        <Label htmlFor="removeDashes" className="text-sm">
                          Remove dashes
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="flex justify-center">
                  <Button onClick={generateUUIDs} size="lg" className="px-8">
                    Generate UUID{bulkCount > 1 ? "s" : ""}
                  </Button>
                </div>

                {/* Generated UUIDs Display */}
                {currentUuids.length > 0 && (
                  <div className="space-y-4">
                    <div className="h-px bg-slate-200 dark:bg-slate-700"></div>

                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Generated UUID{currentUuids.length > 1 ? "s" : ""} (
                        {currentUuids.length})
                      </Label>
                      <div className="flex gap-2">
                        <CopyButton text={currentUuids.join("\n")} size="sm" />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={generateUUIDs}
                        >
                          Regenerate
                        </Button>
                      </div>
                    </div>

                    {/* Single UUID Display */}
                    {currentUuids.length === 1 ? (
                      <div className="space-y-2">
                        <Input
                          value={currentUuids[0]}
                          readOnly
                          className="font-mono text-sm text-center bg-slate-50 dark:bg-slate-800"
                        />
                        <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
                          Click the copy button above to copy this UUID
                        </div>
                      </div>
                    ) : (
                      /* Multiple UUIDs Display */
                      <Textarea
                        value={currentUuids.join("\n")}
                        readOnly
                        className="h-40 font-mono text-sm bg-slate-50 dark:bg-slate-800 resize-none"
                        placeholder="Generated UUIDs will appear here..."
                      />
                    )}
                  </div>
                )}

                {/* Info Banner */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 All UUIDs are generated locally in your browser. No data
                    is sent to our servers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* UUID Analyzer Card */}
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle>UUID Analyzer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Analyze UUID
                  </Label>
                  <Input
                    value={analyzeInput}
                    onChange={(e) => setAnalyzeInput(e.target.value)}
                    placeholder="Paste a UUID to analyze..."
                    className="font-mono text-sm"
                  />
                </div>

                {/* Analysis Results */}
                {analysisResult && (
                  <div className="space-y-3">
                    {analysisResult.valid ? (
                      <div className="space-y-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="text-green-800 dark:text-green-200">
                          <div className="font-medium mb-2">✅ Valid UUID</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="font-medium">Version:</span>{" "}
                              {analysisResult.version}
                            </div>
                            <div>
                              <span className="font-medium">Variant:</span>{" "}
                              {analysisResult.variant}
                            </div>
                            <div>
                              <span className="font-medium">Timestamp:</span>{" "}
                              {analysisResult.timestamp}
                            </div>
                            <div>
                              <span className="font-medium">Node:</span>{" "}
                              {analysisResult.node}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="text-red-800 dark:text-red-200">
                          <div className="font-medium">❌ Invalid UUID</div>
                          <div className="text-sm mt-1">
                            {analysisResult.error}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* About UUIDs */}
            <Card>
              <CardHeader>
                <CardTitle>
                  About Universally Unique Identifiers (UUIDs)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    A Universally Unique Identifier (UUID) is a 128-bit label
                    used for information in computer systems. The term globally
                    unique identifier (GUID) is also used, mostly in Microsoft
                    systems. UUIDs are designed to be unique across space and
                    time, making them ideal for distributed systems.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        UUID Versions
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Version 1:</strong> Time-based UUIDs using
                            MAC address and timestamp
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Version 4:</strong> Random or pseudo-random
                            UUIDs (most common)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Nil UUID:</strong> Special UUID with all
                            bits set to zero
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Max UUID:</strong> Special UUID with all
                            bits set to one
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Common Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Database primary keys</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Session identifiers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>File and object naming</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>API request tracking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Distributed system identifiers</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // UUID Format Structure
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-red-600 dark:text-red-400">
                        xxxxxxxx
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        -
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        xxxx
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        -
                      </span>
                      <span className="text-blue-600 dark:text-blue-400">
                        Mxxx
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        -
                      </span>
                      <span className="text-purple-600 dark:text-purple-400">
                        Nxxx
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        -
                      </span>
                      <span className="text-orange-600 dark:text-orange-400">
                        xxxxxxxxxxxx
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      M = Version digit, N = Variant bits
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UUID Best Practices */}
            <Card>
              <CardHeader>
                <CardTitle>
                  UUID Best Practices and Security Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    While UUIDs are designed to be unique, there are important
                    considerations for their use in production systems,
                    especially regarding security and performance.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ✅
                          </span>
                        </span>
                        Best Practices
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use Version 4 for most cases:</strong>{" "}
                            Random UUIDs provide the best balance of uniqueness
                            and unpredictability
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>
                              Use cryptographically secure generators:
                            </strong>{" "}
                            Ensure your UUID generator uses a proper random
                            number source
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Consider database indexing:</strong> UUIDs
                            can impact database performance; consider using ULID
                            for better ordering
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Validate UUID format:</strong> Always
                            validate UUIDs on the server side to prevent
                            injection attacks
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-red-600 dark:text-red-400">
                            ⚠️
                          </span>
                        </span>
                        Security Considerations
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Version 1 privacy concerns:</strong> V1
                            UUIDs contain MAC addresses and timestamps, which
                            can leak information
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Don't rely on UUIDs for security:</strong>{" "}
                            UUIDs are identifiers, not access tokens or
                            passwords
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>URL exposure:</strong> UUIDs in URLs can be
                            logged and cached; use proper authorization
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Database enumeration:</strong> Random UUIDs
                            prevent resource enumeration attacks
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> For database primary keys,
                      consider using UUIDs with a custom ordering scheme or ULID
                      (Universally Unique Lexicographically Sortable Identifier)
                      for better performance and natural sorting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UUID Formats and Standards */}
            <Card>
              <CardHeader>
                <CardTitle>UUID Formats and Technical Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    UUIDs follow specific formatting standards defined in RFC
                    4122. Understanding these formats helps in choosing the
                    right UUID type for your specific use case and ensuring
                    compatibility across different systems and programming
                    languages.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Standard UUID Format
                      </h4>
                      <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                        <div className="grid grid-cols-1 gap-2">
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">
                              Standard:
                            </span>
                            <span className="ml-2 text-slate-800 dark:text-slate-200">
                              550e8400-e29b-41d4-a716-446655440000
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">
                              Uppercase:
                            </span>
                            <span className="ml-2 text-slate-800 dark:text-slate-200">
                              550E8400-E29B-41D4-A716-446655440000
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">
                              No dashes:
                            </span>
                            <span className="ml-2 text-slate-800 dark:text-slate-200">
                              550e8400e29b41d4a716446655440000
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">
                              URN format:
                            </span>
                            <span className="ml-2 text-slate-800 dark:text-slate-200">
                              urn:uuid:550e8400-e29b-41d4-a716-446655440000
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                          Programming Language Examples
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                            <div className="text-slate-600 dark:text-slate-400 mb-1">
                              JavaScript:
                            </div>
                            <code className="text-slate-800 dark:text-slate-200">
                              crypto.randomUUID()
                            </code>
                          </div>
                          <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                            <div className="text-slate-600 dark:text-slate-400 mb-1">
                              Python:
                            </div>
                            <code className="text-slate-800 dark:text-slate-200">
                              import uuid; uuid.uuid4()
                            </code>
                          </div>
                          <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                            <div className="text-slate-600 dark:text-slate-400 mb-1">
                              Java:
                            </div>
                            <code className="text-slate-800 dark:text-slate-200">
                              UUID.randomUUID()
                            </code>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                          Database Storage
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                            <div className="text-slate-600 dark:text-slate-400 mb-1">
                              PostgreSQL:
                            </div>
                            <code className="text-slate-800 dark:text-slate-200">
                              UUID type (native)
                            </code>
                          </div>
                          <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                            <div className="text-slate-600 dark:text-slate-400 mb-1">
                              MySQL:
                            </div>
                            <code className="text-slate-800 dark:text-slate-200">
                              CHAR(36) or BINARY(16)
                            </code>
                          </div>
                          <div className="bg-slate-100 dark:bg-slate-700 rounded p-3 text-sm">
                            <div className="text-slate-600 dark:text-slate-400 mb-1">
                              MongoDB:
                            </div>
                            <code className="text-slate-800 dark:text-slate-200">
                              BinData(4, "base64...")
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                      <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                        📚 Technical References
                      </h5>
                      <div className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                        <div>
                          <a
                            href="https://tools.ietf.org/html/rfc4122"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            RFC 4122
                          </a>
                          {
                            " - A Universally Unique Identifier (UUID) URN Namespace"
                          }
                        </div>
                        <div>
                          <a
                            href="https://en.wikipedia.org/wiki/Universally_unique_identifier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            Wikipedia UUID
                          </a>
                          {" - Comprehensive overview and examples"}
                        </div>
                        <div>
                          <a
                            href="https://www.uuidgenerator.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            UUID Validation
                          </a>
                          {" - Online UUID testing and validation"}
                        </div>
                      </div>
                    </div>
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

export default UuidGenerator;
