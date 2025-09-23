import React, { useState, useEffect } from "react";
import ToolBody from "@/components/tool/ToolBody";
import ToolHead from "@/components/tool/ToolHead";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import ToolVideo from "@/components/tool/ToolVideo";
import JsonToXmlSkeleton from "./_JsonToXmlSkeleton";

const JsonToXml: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConvert = () => {
    setError("");
    toast.info("Processing your input...");
    try {
      const json = JSON.parse(input);
      const xml = jsonToXml(json);
      setOutput(xml);
      toast.success("Conversion completed!");
    } catch (err) {
      setError("Invalid JSON format. Please check your input.");
      setOutput("");
      toast.error("Processing failed");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  // Simple JSON to XML converter
  function jsonToXml(obj: any, root = "root"): string {
    let xml = "";
    if (typeof obj === "object" && !Array.isArray(obj)) {
      xml += `<${root}>`;
      for (const key in obj) {
        xml += jsonToXml(obj[key], key);
      }
      xml += `</${root}>`;
    } else if (Array.isArray(obj)) {
      for (const item of obj) {
        xml += jsonToXml(item, root);
      }
    } else {
      xml += `<${root}>${String(obj)}</${root}>`;
    }
    return xml;
  }

  return (
    <ToolBody>
      {!loaded ? (
        <JsonToXmlSkeleton />
      ) : (
        <ToolGridContainer>
          <ToolHead
            name="JSON to XML Converter"
            description="Convert JSON data to XML format instantly. Fast, secure, and accurate conversion for developers and data analysts. No installation required."
          />
          <ToolCardWrapper>
            <Card className="tool-card-bg-grid">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="json-input">JSON Input</Label>
                  <Textarea
                    id="json-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`{\n  "name": "John",\n  "age": 30\n}`}
                    className="min-h-[180px] font-mono text-sm"
                  />
                  <div className="flex gap-2 mt-3">
                    <Button onClick={handleConvert} disabled={!input.trim()}>
                      Convert to XML
                    </Button>
                    <Button onClick={handleClear} variant="outline">
                      Clear
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="xml-output">XML Output</Label>
                    {output && (
                      <CopyButton
                        text={output}
                        className="ml-3"
                        title="Copy to clipboard"
                      />
                    )}
                  </div>
                  <Textarea
                    id="xml-output"
                    value={output}
                    readOnly
                    placeholder="XML output will appear here..."
                    className="min-h-[180px] font-mono text-sm bg-slate-50 dark:bg-slate-800"
                  />
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400 mt-2">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </ToolCardWrapper>
          <ToolContentCardWrapper>
            <Card>
              <h2>About JSON to XML Converter</h2>
              <p>
                Instantly convert JSON data to XML format with this free online
                tool. Paste your JSON, click convert, and get well-formed XML
                for use in APIs, configuration files, and more.
              </p>
              <ToolVideo
                videoUrl="https://www.youtube.com/embed/iiADhChRriM"
                title="Learn JSON in 10 Minutes"
                description="A quick tutorial on the basics of JSON."
              />
              <ul>
                <li>
                  <strong>Common uses:</strong> API data transformation, config
                  file conversion, data migration.
                </li>
              </ul>
            </Card>
          </ToolContentCardWrapper>
        </ToolGridContainer>
      )}
    </ToolBody>
  );
};

export default JsonToXml;
