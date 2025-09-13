import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import JsonToYamlSkeleton from "./_JsonToYamlSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// JSON to YAML conversion utility using js-yaml
const convertJsonToYaml = async (jsonString: string): Promise<string> => {
  // Dynamically import js-yaml for better performance
  const { dump } = await import("js-yaml");

  try {
    // Parse JSON string
    const jsonObject = JSON.parse(jsonString.trim());
    // Convert to YAML
    const yamlOutput = dump(jsonObject, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      sortKeys: false,
    });
    return yamlOutput;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("Invalid JSON format. Please check your JSON syntax.");
    }
    throw new Error(
      "Failed to convert JSON to YAML. Please verify your input."
    );
  }
};

const JsonToYaml: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = useCallback(async (value: string) => {
    setInput(value);
    setError("");

    if (!value.trim()) {
      setOutput("");
      return;
    }

    try {
      const yamlOutput = await convertJsonToYaml(value);
      setOutput(yamlOutput);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to convert JSON to YAML";
      setError(errorMessage);
      setOutput("");
    }
  }, []);

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const sampleJson = `{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  },
  "hobbies": ["reading", "swimming", "coding"],
  "isActive": true
}`;

  return (
    <ToolContainer>
      <ToolHead
        name="JSON to YAML Converter"
        description="Convert JSON to YAML format instantly with our free online converter. Transform JSON configuration files to YAML with real-time validation and formatting. Secure browser-based processing."
      />

      {!loaded ? (
        <JsonToYamlSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle>JSON to YAML Converter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input and Output Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* JSON Input - Left Side */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      JSON Input
                    </Label>
                    <Textarea
                      value={input}
                      onChange={(e) => handleInputChange(e.target.value)}
                      placeholder="Paste your JSON here..."
                      className="min-h-[200px] font-mono text-sm"
                    />
                  </div>

                  {/* YAML Output - Right Side */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        YAML Output
                      </Label>
                      <CopyButton text={output} disabled={!output} />
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="Converted YAML will appear here..."
                      className="min-h-[200px] font-mono text-sm bg-muted/50"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button onClick={handleClear} variant="outline">
                    Clear
                  </Button>
                  <Button
                    onClick={() => handleInputChange(sampleJson)}
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
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Understanding JSON to YAML Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    JSON (JavaScript Object Notation) and YAML (YAML Ain't
                    Markup Language) are both popular data serialization formats
                    used extensively in web development, configuration
                    management, and data exchange. Converting between these
                    formats is essential for developers working with different
                    systems and tools.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        JSON Characteristics
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Compact syntax:</strong> Uses brackets and
                            braces for structure
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Machine-readable:</strong> Easy for
                            computers to parse and generate
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Web standard:</strong> Native support in
                            JavaScript and web APIs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Strict syntax:</strong> Requires quotes
                            around keys and strings
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        YAML Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Human-readable and intuitive indentation-based
                            syntax
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Supports comments for documentation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>No quotes required for most string values</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Popular for configuration files and CI/CD</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Supports multi-line strings and advanced data types
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example conversion comparison
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-blue-600 dark:text-blue-400 mb-1">
                          JSON:
                        </div>
                        <div className="text-slate-800 dark:text-slate-200">
                          {`{
  "name": "Project",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}`}
                        </div>
                      </div>
                      <div>
                        <div className="text-green-600 dark:text-green-400 mb-1">
                          YAML:
                        </div>
                        <div className="text-slate-800 dark:text-slate-200">
                          {`name: Project
version: 1.0.0
dependencies:
  react: ^18.0.0`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>JSON to YAML Conversion Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Data Structure Considerations */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            🏗️
                          </span>
                        </span>
                        Data Structure Tips
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Nested Objects:</strong> JSON's nested
                            objects convert cleanly to YAML's indented structure
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Arrays:</strong> JSON arrays become YAML
                            lists with dash notation
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data Types:</strong> Boolean, number, and
                            null values are preserved accurately
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>String Handling:</strong> Special characters
                            are properly escaped in YAML
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Use Cases */}
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
                            <strong>Configuration Migration:</strong> Convert
                            API configs from JSON to YAML
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>CI/CD Pipelines:</strong> Transform workflow
                            definitions for different platforms
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Documentation:</strong> Create
                            human-readable config examples
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Infrastructure as Code:</strong> Convert
                            Terraform or Kubernetes manifests
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Quality Assurance */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            ✅
                          </span>
                        </span>
                        Validation & Quality
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Syntax Validation:</strong> Ensure JSON is
                            valid before conversion
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Output Verification:</strong> Test converted
                            YAML in target systems
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data Integrity:</strong> Verify all values
                            are preserved accurately
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Format Consistency:</strong> Use consistent
                            indentation and style
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Development Workflow */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            ⚡
                          </span>
                        </span>
                        Development Integration
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Build Automation:</strong> Integrate
                            conversion into build pipelines
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Version Control:</strong> Track changes when
                            migrating between formats
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Team Collaboration:</strong> Use YAML for
                            better code review readability
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Documentation:</strong> Generate YAML
                            examples from JSON schemas
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> When converting large JSON
                      files to YAML, consider the target use case. YAML is
                      excellent for configuration files that humans will read
                      and edit, while JSON remains better for API data exchange
                      and automated processing.
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

export default JsonToYaml;
