import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "../../../components/tool/ToolContainer";
import ToolHead from "../../../components/tool/ToolHead";
import ToolBody from "../../../components/tool/ToolBody";
import ToolCardWrapper from "../../../components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "../../../components/tool/ToolContentCardWrapper";
import YamlToJsonSkeleton from "./_YamlToJsonSkeleton";
import CopyButton from "../../../components/ui/copy-button";
import { toast } from "../../../components/ToastProvider";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Textarea } from "../../../components/ui/textarea";
import { Label } from "../../../components/ui/label";

// YAML to JSON conversion utility using js-yaml
const convertYamlToJson = async (yamlString: string): Promise<string> => {
  // Dynamically import js-yaml for better performance
  const { load, loadAll } = await import("js-yaml");

  try {
    // Try to load as a single document first
    const result = load(yamlString);
    return JSON.stringify(result, null, 2);
  } catch (singleDocError) {
    try {
      // If single document fails, try loading all documents
      const results = loadAll(yamlString);

      // If only one document, return it directly
      if (results.length === 1) {
        return JSON.stringify(results[0], null, 2);
      }

      // If multiple documents, return as array
      return JSON.stringify(results, null, 2);
    } catch (multiDocError) {
      const errorMessage =
        singleDocError instanceof Error
          ? singleDocError.message
          : "Unknown error";
      throw new Error(`Invalid YAML: ${errorMessage}`);
    }
  }
};

const YamlToJson: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [isConverting, setIsConverting] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConversion = useCallback(async (yamlInput: string) => {
    if (!yamlInput.trim()) {
      setOutput("");
      setError("");
      return;
    }

    setIsConverting(true);
    setError("");

    try {
      const jsonResult = await convertYamlToJson(yamlInput.trim());
      setOutput(jsonResult);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Conversion failed";
      setError(errorMessage);
      setOutput("");
    } finally {
      setIsConverting(false);
    }
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setInput(value);
      handleConversion(value);
    },
    [handleConversion]
  );

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
    toast.success("Cleared all fields");
  };

  const handleSampleYaml = () => {
    const sampleYaml = `# Sample YAML Configuration
app:
  name: "My Application"
  version: "1.0.0"
  debug: true
  
server:
  host: "localhost"
  port: 3000
  ssl:
    enabled: false
    certificate: null

database:
  type: "postgresql"
  host: "localhost"
  port: 5432
  name: "myapp_db"
  credentials:
    username: "admin"
    password: "secret123"

features:
  - authentication
  - authorization
  - logging
  - monitoring

environments:
  development:
    debug: true
    log_level: "debug"
  production:
    debug: false
    log_level: "error"`;

    setInput(sampleYaml);
    handleConversion(sampleYaml);
  };

  return (
    <ToolContainer>
      <ToolHead
        name="YAML to JSON Converter"
        description="Convert YAML to JSON format instantly with our free online converter. Transform YAML configuration files to JSON with real-time validation and formatting. Secure browser-based processing."
      />

      {!loaded ? (
        <YamlToJsonSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Main Conversion Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* YAML Input Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        YAML Input
                      </Label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSampleYaml}
                      >
                        Load Sample YAML
                      </Button>
                    </div>
                    <Textarea
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Paste your YAML here...

Example:
name: John Doe
age: 30
skills:
  - JavaScript
  - Python
  - Docker
address:
  street: 123 Main St
  city: New York"
                      className="h-48 font-mono text-sm resize-none"
                    />
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {input.length} characters • {input.split("\n").length}{" "}
                        lines
                      </div>
                      <Button onClick={handleClear} variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>

                  {/* JSON Output Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        JSON Output
                      </Label>
                      {output && !error && (
                        <CopyButton text={output} size="sm" />
                      )}
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="JSON output will appear here..."
                      className="h-48 font-mono text-sm bg-slate-50 dark:bg-slate-800 resize-none"
                    />
                    {isConverting && (
                      <div className="text-xs text-blue-600 dark:text-blue-400">
                        Converting...
                      </div>
                    )}
                  </div>
                </div>

                {/* Error Display */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                    <div className="flex items-start">
                      <span className="font-medium mr-2">⚠️ Error:</span>
                      <span>{error}</span>
                    </div>
                  </div>
                )}

                {/* Success Status */}
                {output && !error && input.trim() && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">✅ Success:</span>
                      <span>YAML converted to JSON successfully</span>
                    </div>
                  </div>
                )}

                {/* Info Banner */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    🔒 All conversion happens locally in your browser. Your data
                    never leaves your device.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* About YAML to JSON */}
            <Card>
              <CardHeader>
                <CardTitle>About YAML to JSON Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    YAML (Yet Another Markup Language) and JSON (JavaScript
                    Object Notation) are both popular data serialization
                    formats. Our converter transforms YAML configuration files
                    into JSON format while preserving data structure and types.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        YAML Features
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Human-readable and easy to write</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Supports comments and multi-line strings</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Indentation-based structure</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Supports multiple documents</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        JSON Benefits
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Widely supported across languages</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Native JavaScript object format</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Compact and fast to parse</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Perfect for APIs and data exchange</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Conversion Example
                    </h5>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-1 font-medium">
                          YAML:
                        </p>
                        <pre className="text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded overflow-x-auto">
                          {`name: John Doe
age: 30
skills:
  - JavaScript
  - Python`}
                        </pre>
                      </div>
                      <div>
                        <p className="text-slate-600 dark:text-slate-400 mb-1 font-medium">
                          JSON:
                        </p>
                        <pre className="text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded overflow-x-auto">
                          {`{
  "name": "John Doe",
  "age": 30,
  "skills": [
    "JavaScript",
    "Python"
  ]
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Use Cases */}
            <Card>
              <CardHeader>
                <CardTitle>Common Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Configuration Management */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            ⚙️
                          </span>
                        </span>
                        Configuration Management
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Docker Compose:</strong> Convert
                            docker-compose.yml files to JSON for programmatic
                            processing
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Kubernetes:</strong> Transform YAML
                            manifests to JSON for API interactions
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>CI/CD Pipelines:</strong> Convert YAML
                            pipeline configs to JSON for dynamic processing
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Development & Integration */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            🔧
                          </span>
                        </span>
                        Development & Integration
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>API Development:</strong> Convert YAML API
                            specs (OpenAPI) to JSON for tooling
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data Migration:</strong> Transform YAML data
                            files to JSON for database import
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Application Config:</strong> Convert app
                            settings from YAML to JSON format
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Data Processing */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            📊
                          </span>
                        </span>
                        Data Processing
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Analytics:</strong> Convert YAML datasets to
                            JSON for analysis tools
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Backup & Export:</strong> Transform YAML
                            backups to JSON for universal compatibility
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Web Applications:</strong> Convert YAML
                            content to JSON for frontend consumption
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* DevOps & Automation */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            🚀
                          </span>
                        </span>
                        DevOps & Automation
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Infrastructure as Code:</strong> Convert
                            Terraform or Ansible YAML to JSON
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Monitoring:</strong> Transform YAML
                            monitoring configs to JSON for tools
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Deployment:</strong> Convert YAML deployment
                            configs for automated systems
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>💡 Pro Tip:</strong> YAML supports comments and
                      multi-line strings which will be lost during JSON
                      conversion. Consider preserving important comments
                      separately if needed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* YAML Syntax Guide */}
            <Card>
              <CardHeader>
                <CardTitle>YAML Syntax Quick Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Understanding YAML syntax helps ensure successful conversion
                    to JSON. Here are the key concepts and common patterns:
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Basic Data Types
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
                            Strings:
                          </p>
                          <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-x-auto">
                            {`name: "John Doe"
title: 'Software Engineer'
description: Plain string`}
                          </pre>
                        </div>
                        <div>
                          <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
                            Numbers & Booleans:
                          </p>
                          <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-x-auto">
                            {`age: 30
price: 19.99
active: true
disabled: false`}
                          </pre>
                        </div>
                        <div>
                          <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
                            Null Values:
                          </p>
                          <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-x-auto">
                            {`value: null
empty: ~
blank:`}
                          </pre>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Collections
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
                            Arrays/Lists:
                          </p>
                          <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-x-auto">
                            {`skills:
  - JavaScript
  - Python
  - Docker

# Inline format
colors: [red, green, blue]`}
                          </pre>
                        </div>
                        <div>
                          <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
                            Objects/Maps:
                          </p>
                          <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-xs overflow-x-auto">
                            {`person:
  name: John
  age: 30
  address:
    street: 123 Main St
    city: New York`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Advanced Features
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
                          Multi-line Strings:
                        </p>
                        <pre className="bg-slate-50 dark:bg-slate-800 p-2 rounded text-xs overflow-x-auto">
                          {`description: |
  This is a multi-line
  string that preserves
  line breaks.

summary: >
  This is a folded
  string that converts
  line breaks to spaces.`}
                        </pre>
                      </div>
                      <div>
                        <p className="font-medium text-slate-600 dark:text-slate-400 mb-1">
                          Comments & Anchors:
                        </p>
                        <pre className="bg-slate-50 dark:bg-slate-800 p-2 rounded text-xs overflow-x-auto">
                          {`# This is a comment
default: &default
  timeout: 30
  retries: 3

prod:
  <<: *default
  host: prod.example.com`}
                        </pre>
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

export default YamlToJson;
