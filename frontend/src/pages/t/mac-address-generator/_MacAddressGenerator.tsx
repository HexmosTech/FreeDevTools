import React, { useState, useEffect } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import MacAddressGeneratorSkeleton from "./_MacAddressGeneratorSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ToolVideo from "@/components/tool/ToolVideo";

const CASE_OPTIONS = [
  { label: "Uppercase", value: "upper" },
  { label: "Lowercase", value: "lower" },
];
const SEPARATOR_OPTIONS = [
  { label: ":", value: ":" },
  { label: "-", value: "-" },
  { label: ".", value: "." },
  { label: "None", value: "none" },
];

function generateRandomMacAddress(
  prefix: string,
  separator: string,
  caseType: string
) {
  // Clean prefix and split
  let cleanPrefix = prefix.replace(/[^a-fA-F0-9]/g, "");
  let prefixArr = [];
  for (let i = 0; i < cleanPrefix.length; i += 2) {
    prefixArr.push(cleanPrefix.slice(i, i + 2));
  }
  // Fill up to 6 octets
  while (prefixArr.length < 6) {
    prefixArr.push(
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0")
    );
  }
  // Use empty string if separator is "none"
  const actualSeparator = separator === "none" ? "" : separator;
  let mac = prefixArr.slice(0, 6).join(actualSeparator);
  if (caseType === "upper") return mac.toUpperCase();
  return mac.toLowerCase();
}

const MacAddressGenerator: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [prefix, setPrefix] = useState("");
  const [caseType, setCaseType] = useState("upper");
  const [separator, setSeparator] = useState(":");
  const [output, setOutput] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleGenerate = () => {
    if (quantity < 1 || quantity > 100) {
      toast.error("Quantity must be between 1 and 100");
      return;
    }
    let macs: string[] = [];
    for (let i = 0; i < quantity; i++) {
      macs.push(generateRandomMacAddress(prefix, separator, caseType));
    }
    setOutput(macs.join("\n"));
    toast.success("MAC addresses generated!");
  };

  const handleClear = () => {
    setOutput("");
  };

  return (
    <ToolContainer>
      <ToolHead
        name="MAC Address Generator"
        description="Generate random MAC addresses with custom prefix, separator, and case. Bulk generate up to 100 MAC addresses for testing and development."
      />
      {!loaded ? (
        <MacAddressGeneratorSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader></CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Quantity</Label>
                      <Input
                        type="number"
                        min={1}
                        max={100}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        placeholder="1-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Prefix (optional)</Label>
                      <Input
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value)}
                        placeholder="e.g. 64:16:7F"
                        maxLength={8}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Case</Label>
                      <Select value={caseType} onValueChange={setCaseType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CASE_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Separator</Label>
                      <Select value={separator} onValueChange={setSeparator}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {SEPARATOR_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col h-full">
                    <Label>Generated MAC Addresses</Label>
                    <textarea
                      value={output}
                      readOnly
                      className="w-full h-48 p-3 border border-slate-300 rounded-lg resize-none bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-sm"
                      placeholder="Generated MAC addresses will appear here..."
                    />
                    <div className="flex gap-2 mt-2">
                      <Button onClick={handleGenerate} className="flex-1">
                        Generate
                      </Button>
                      <Button onClick={handleClear} variant="outline">
                        Clear
                      </Button>
                      {output && <CopyButton text={output} />}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>About MAC Address Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Instantly generate random MAC addresses for testing,
                    simulation, and development. Customize the prefix,
                    separator, and case to match your requirements. This tool is
                    ideal for network engineers, QA testers, and developers who
                    need valid MAC addresses for device emulation, automation,
                    or documentation.
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Bulk generate up to 100 MAC addresses at once</li>
                    <li>Set a custom prefix for vendor-specific addresses</li>
                    <li>Choose separator: colon, dash, dot, or none</li>
                    <li>Output in uppercase or lowercase</li>
                  </ul>
                  <ToolVideo
                    title="Learn More: MAC Address Explained"
                    description="This video explains what a MAC address is, its structure, and how it is used in networking to identify devices."
                    videoUrl="https://www.youtube.com/embed/TIiQiw7fpsU"
                  />
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default MacAddressGenerator;
