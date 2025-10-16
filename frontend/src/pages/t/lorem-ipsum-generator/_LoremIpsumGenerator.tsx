import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import LoremIpsumGeneratorSkeleton from "./_LoremIpsumGeneratorSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ToolVideo from "@/components/tool/ToolVideo";
import AdBanner from "../../../components/banner/AdBanner";

// Lorem Ipsum word bank
const words = [
  "ad",
  "adipisicing",
  "aliqua",
  "aliquip",
  "amet",
  "anim",
  "aute",
  "cillum",
  "commodo",
  "consectetur",
  "consequat",
  "culpa",
  "cupidatat",
  "deserunt",
  "do",
  "dolor",
  "dolore",
  "duis",
  "ea",
  "eiusmod",
  "elit",
  "enim",
  "esse",
  "est",
  "et",
  "eu",
  "ex",
  "excepteur",
  "exercitation",
  "fugiat",
  "id",
  "in",
  "incididunt",
  "ipsum",
  "irure",
  "labore",
  "laboris",
  "laborum",
  "lorem",
  "magna",
  "minim",
  "mollit",
  "nisi",
  "non",
  "nostrud",
  "nulla",
  "occaecat",
  "officia",
  "pariatur",
  "proident",
  "qui",
  "quis",
  "reprehenderit",
  "sint",
  "sed",
  "sit",
  "sunt",
  "tempor",
  "ullamco",
  "ut",
  "velit",
  "veniam",
  "voluptate",
];

const standardSentence =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

type GenerationUnit = "words" | "sentences" | "paragraphs";

interface GenerationOptions {
  generationUnit: GenerationUnit;
  inputAmount: number;
  startWithStandard: boolean;
  asHTML: boolean;
}

// Utility functions
const capitalizeFirstLetter = (sentence: string): string =>
  sentence.charAt(0).toUpperCase() + sentence.slice(1);

const getRandomBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomWords = (amount: number): string =>
  Array.from(
    { length: amount },
    () => words[getRandomBetween(0, words.length - 1)]
  ).join(" ");

const generateSentence = (startWithStandard: boolean): string => {
  if (startWithStandard) {
    return standardSentence;
  } else {
    return capitalizeFirstLetter(getRandomWords(getRandomBetween(7, 14)));
  }
};

const generateSentences = (
  amount: number,
  startWithStandard: boolean
): string => {
  const sentences = Array.from({ length: amount }, () =>
    generateSentence(false)
  );
  if (startWithStandard) sentences[0] = standardSentence;
  return sentences.join(". ") + ".";
};

const generateParagraphs = (
  amount: number,
  startWithStandard: boolean,
  asHTML: boolean
): string =>
  Array.from({ length: amount }, () => {
    const paragraph = generateSentences(
      getRandomBetween(3, 6),
      startWithStandard
    );
    return asHTML ? `<p>${paragraph}</p>` : paragraph;
  }).join("\n\n");

const generateLoremIpsum = (options: GenerationOptions): string => {
  const { generationUnit, inputAmount, startWithStandard, asHTML } = options;

  if (inputAmount <= 0 || inputAmount > 100) {
    return "Invalid input: Please enter a number between 1 and 100.";
  }

  const units: Record<GenerationUnit, () => string> = {
    words: () => getRandomWords(inputAmount),
    sentences: () => generateSentences(inputAmount, startWithStandard),
    paragraphs: () =>
      generateParagraphs(inputAmount, startWithStandard, asHTML),
  };

  const text = units[generationUnit]();

  return asHTML && generationUnit !== "paragraphs" ? `<p>${text}</p>` : text;
};

const LoremIpsumGenerator: React.FC = () => {
  const [inputAmount, setInputAmount] = useState(3);
  const [output, setOutput] = useState("");
  const [generationUnit, setGenerationUnit] =
    useState<GenerationUnit>("paragraphs");
  const [asHTML, setAsHTML] = useState(false);
  const [startWithStandard, setStartWithStandard] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const generateText = useCallback(() => {
    try {
      const text = generateLoremIpsum({
        generationUnit,
        inputAmount,
        startWithStandard,
        asHTML,
      });
      setOutput(text);
    } catch (error) {
      toast.error("Failed to generate Lorem Ipsum text");
    }
  }, [inputAmount, generationUnit, asHTML, startWithStandard]);

  // Auto-generate when options change
  useEffect(() => {
    generateText();
  }, [generateText]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 100) {
      setInputAmount(value);
    }
  };

  const handleClear = () => {
    setInputAmount(3);
    setOutput("");
    setGenerationUnit("paragraphs");
    setAsHTML(false);
    setStartWithStandard(true);
    toast.success("Settings reset to defaults");
  };

  const getWordCount = (text: string): number => {
    return text.trim() ? text.split(/\s+/).length : 0;
  };

  const getCharacterCount = (text: string): number => {
    return text.length;
  };

  const getParagraphCount = (text: string): number => {
    return text.trim() ? text.split(/\n\n/).length : 0;
  };

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      toast.success("Lorem Ipsum text copied to clipboard!");
    } else {
      toast.error("No text to copy");
    }
  };

  const downloadAsFile = () => {
    if (!output) {
      toast.error("No text to download");
      return;
    }

    const fileName = asHTML ? "lorem-ipsum.html" : "lorem-ipsum.txt";
    const mimeType = asHTML ? "text/html" : "text/plain";
    const blob = new Blob([output], { type: mimeType });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success(`Downloaded as ${fileName}`);
  };

  const handlePreset = (preset: {
    unit: GenerationUnit;
    amount: number;
    standard: boolean;
    html: boolean;
  }) => {
    setGenerationUnit(preset.unit);
    setInputAmount(preset.amount);
    setStartWithStandard(preset.standard);
    setAsHTML(preset.html);
    toast.success("Preset applied successfully");
  };

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="Lorem Ipsum Generator"
        description="Generate placeholder Lorem Ipsum text instantly for your design projects. Create words, sentences, or paragraphs with customizable options including HTML format and classic Lorem Ipsum opening."
      />

      {!loaded ? (
        <LoremIpsumGeneratorSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6">
                {/* Generation Controls */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column: Controls */}
                  <div className="space-y-6">
                    {/* Amount and Unit */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="amount-input"
                          className="text-sm font-medium"
                        >
                          Amount
                        </Label>
                        <Input
                          id="amount-input"
                          type="number"
                          min="1"
                          max="100"
                          value={inputAmount}
                          onChange={handleAmountChange}
                          className="text-center"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Generate</Label>
                        <Select
                          value={generationUnit}
                          onValueChange={(value: GenerationUnit) =>
                            setGenerationUnit(value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="words">Words</SelectItem>
                            <SelectItem value="sentences">Sentences</SelectItem>
                            <SelectItem value="paragraphs">
                              Paragraphs
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="start-standard"
                          checked={startWithStandard}
                          onCheckedChange={(checked) =>
                            setStartWithStandard(!!checked)
                          }
                          disabled={generationUnit === "words"}
                        />
                        <Label
                          htmlFor="start-standard"
                          className="text-sm cursor-pointer"
                        >
                          Start with "Lorem ipsum dolor sit amet..."
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="as-html"
                          checked={asHTML}
                          onCheckedChange={(checked) => setAsHTML(!!checked)}
                        />
                        <Label
                          htmlFor="as-html"
                          className="text-sm cursor-pointer"
                        >
                          Generate as HTML
                        </Label>
                      </div>
                    </div>

                    {/* Quick Presets */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">
                        Quick Presets
                      </Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handlePreset({
                              unit: "paragraphs",
                              amount: 3,
                              standard: true,
                              html: false,
                            })
                          }
                        >
                          3 Paragraphs
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handlePreset({
                              unit: "sentences",
                              amount: 5,
                              standard: true,
                              html: false,
                            })
                          }
                        >
                          5 Sentences
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handlePreset({
                              unit: "words",
                              amount: 50,
                              standard: false,
                              html: false,
                            })
                          }
                        >
                          50 Words
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handlePreset({
                              unit: "paragraphs",
                              amount: 2,
                              standard: true,
                              html: true,
                            })
                          }
                        >
                          HTML Format
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Statistics */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium">
                      Text Statistics
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {getCharacterCount(output).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          Characters
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {getWordCount(output).toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          Words
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {output.split(".").filter((s) => s.trim()).length}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          Sentences
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                          {getParagraphCount(output)}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          Paragraphs
                        </div>
                      </div>
                    </div>

                    {/* Current Settings */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Current Settings
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">
                          {inputAmount} {generationUnit}
                        </Badge>
                        {startWithStandard && generationUnit !== "words" && (
                          <Badge variant="outline">Classic Start</Badge>
                        )}
                        {asHTML && <Badge variant="outline">HTML Format</Badge>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Generated Text Output */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">
                      Generated Text
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={downloadAsFile}
                        disabled={!output}
                      >
                        Download
                      </Button>
                      <CopyButton text={output} disabled={!output} />
                    </div>
                  </div>
                  <Textarea
                    value={output}
                    readOnly
                    placeholder="Generated Lorem Ipsum text will appear here..."
                    className="min-h-[200px] font-mono text-sm bg-slate-50 dark:bg-slate-800"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button variant="outline" onClick={handleClear}>
                    Reset to Defaults
                  </Button>
                  <Button onClick={generateText}>Regenerate Text</Button>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>About Lorem Ipsum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Why Use Lorem Ipsum?
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Focus on Design:</strong> Prevents
                            distraction from content when designing layouts
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Standard Practice:</strong> Industry
                            standard for placeholder text since the 1960s
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Neutral Content:</strong> Meaningless text
                            that doesn't influence design decisions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Realistic Length:</strong> Approximates
                            natural language for accurate layout testing
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
                          <span>Website and app mockups</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Print design layouts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Typography testing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Content management systems</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Email template design</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Classic Lorem Ipsum beginning
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris..."
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generator Features & Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="formats">Formats</TabsTrigger>
                      <TabsTrigger value="tips">Tips</TabsTrigger>
                    </TabsList>

                    <TabsContent value="features" className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                            <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-blue-600 dark:text-blue-400">
                                ⚙️
                              </span>
                            </span>
                            Customization Options
                          </h4>
                          <ul className="space-y-2 text-sm ml-11">
                            <li>
                              • Generate 1-100 words, sentences, or paragraphs
                            </li>
                            <li>• Classic Lorem Ipsum starting text option</li>
                            <li>• HTML format with proper paragraph tags</li>
                            <li>• Real-time text statistics and word count</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center">
                            <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-green-600 dark:text-green-400">
                                🚀
                              </span>
                            </span>
                            Quick Actions
                          </h4>
                          <ul className="space-y-2 text-sm ml-11">
                            <li>• One-click copy to clipboard</li>
                            <li>• Download as text or HTML file</li>
                            <li>• Preset templates for common needs</li>
                            <li>• Instant regeneration with same settings</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="formats" className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Text Format</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Plain text perfect for content placeholders
                          </p>
                          <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                            Lorem ipsum dolor sit amet...
                          </code>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">HTML Format</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Ready-to-use HTML with paragraph tags
                          </p>
                          <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                            &lt;p&gt;Lorem ipsum dolor sit amet...&lt;/p&gt;
                          </code>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="tips" className="space-y-4">
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Design Workflow
                          </h4>
                          <p className="text-sm">
                            Use 2-3 paragraphs for hero sections, 5-7 sentences
                            for card descriptions, and 20-50 words for button or
                            link text testing.
                          </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Content Length
                          </h4>
                          <p className="text-sm">
                            Test your designs with both short and long content
                            to ensure layouts work in all scenarios. Generate
                            varying lengths to stress-test responsive designs.
                          </p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            HTML Integration
                          </h4>
                          <p className="text-sm">
                            Use HTML format when working with content management
                            systems or when you need proper semantic markup for
                            testing.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: History of Lorem Ipsum and What It Means"
              description="This video explains the origin and meaning of Lorem Ipsum placeholder text, and why it is so widely used in design and publishing."
              videoUrl="https://www.youtube.com/embed/CmzKQ3PSrow"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default LoremIpsumGenerator;
