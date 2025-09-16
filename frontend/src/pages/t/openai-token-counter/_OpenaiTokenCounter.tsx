import React, { useState, useEffect, useRef } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import LlmTokenCounterSkeleton from "./_OpenaiTokenCounterSkeleton";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolVideo from "@/components/tool/ToolVideo";
import { Tiktoken } from "js-tiktoken";

// OpenAI Models Configuration
const OPENAI_MODELS = {
  "gpt-5": {
    name: "GPT-5",
    context: 400000,
  },
  "o4-mini": {
    name: "o4-mini",
    context: 200000,
  },
  o3: {
    name: "o3",
    context: 200000,
  },
  "o3-mini": {
    name: "o3-mini",
    context: 200000,
  },
  o1: {
    name: "o1",
    context: 200000,
  },
  "o1-pro": {
    name: "o1-pro",
    context: 200000,
  },
  "gpt-4.1": {
    name: "GPT-4.1",
    context: 1047576,
  },
  "gpt-4o": {
    name: "GPT-4o",
    context: 128000,
  },
  "gpt-4o-mini": {
    name: "GPT-4o mini",
    context: 128000,
  },
  "gpt-4-turbo": {
    name: "GPT-4 Turbo",
    context: 128000,
  },
  "gpt-4": {
    name: "GPT-4",
    context: 8192,
  },
  "gpt-3.5-turbo": {
    name: "GPT-3.5 Turbo",
    context: 16385,
  },
  "text-embedding-3-large": {
    name: "Embedding V3 large",
    context: 8191,
  },
  "text-embedding-3-small": {
    name: "Embedding V3 small",
    context: 8191,
  },
  "text-embedding-ada-002": {
    name: "Embedding Ada 002",
    context: 8191,
  },
};

// Custom debounce hook
const useDebouncedCallback = (
  callback: () => void,
  delay: number,
  deps: any[]
) => {
  useEffect(() => {
    const timeoutId = setTimeout(callback, delay);
    return () => clearTimeout(timeoutId);
  }, [...deps, delay]);
};

const OpenaiTokenCounter: React.FC = () => {
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
  const [tokens, setTokens] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [tokenizerLoading, setTokenizerLoading] = useState(false);

  const tokenizerRef = useRef<Tiktoken>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Initialize tiktoken when model is selected
  useEffect(() => {
    const initTokenizer = async () => {
      setTokenizerLoading(true);
      try {
        const { encodingForModel } = await import("js-tiktoken");

        // Use the model value directly, fallback for newer models
        let tokenizerModel = selectedModel;
        const supportedModels = [
          "gpt-3.5-turbo",
          "gpt-4",
          "gpt-4-turbo",
          "gpt-4o",
          "gpt-4o-mini",
          "text-embedding-3-large",
          "text-embedding-3-small",
          "text-embedding-ada-002",
        ];
        if (!supportedModels.includes(selectedModel)) {
          // Use gpt-4o as fallback for newer models
          tokenizerModel = "gpt-4o";
        }

        tokenizerRef.current = encodingForModel(tokenizerModel as any);

        // Initial token count calculation
        if (input.trim() && tokenizerRef.current) {
          const encoding = tokenizerRef.current.encode(input);
          setTokens(encoding.length);
        }
      } catch (error) {
        console.error("Failed to load tiktoken:", error);
        toast.error("Failed to load OpenAI tokenizer. Please try again.");
        tokenizerRef.current = undefined;
      }
      setTokenizerLoading(false);
    };

    initTokenizer();
  }, [selectedModel]);

  // Debounced token calculation
  useDebouncedCallback(
    () => {
      if (!input.trim()) {
        setTokens(0);
        return;
      }

      if (tokenizerRef.current) {
        try {
          const encoding = tokenizerRef.current.encode(input);
          setTokens(encoding.length);
        } catch (error) {
          console.error("Tokenization error:", error);
          setTokens(0);
        }
      }
    },
    300,
    [input, tokenizerRef.current]
  );

  const handleClear = () => {
    setInput("");
    setTokens(0);
    toast.success("Cleared input text");
  };

  const copyTokenCount = () => {
    const selectedModelConfig =
      OPENAI_MODELS[selectedModel as keyof typeof OPENAI_MODELS];

    const results = `Token Count: ${tokens}
Model: ${selectedModelConfig?.name || selectedModel}
Company: OpenAI
Context Limit: ${selectedModelConfig?.context.toLocaleString()} tokens
Text Length: ${input.length} characters
Words: ${input.trim() ? input.split(/\s+/).length : 0}`;

    navigator.clipboard.writeText(results);
    toast.success("Token count copied to clipboard!");
  };

  return (
    <ToolContainer>
      <ToolHead
        name="OpenAI Token Counter"
        description="Count tokens accurately for OpenAI GPT models. Get exact token counts for all OpenAI models including GPT-5, GPT-4, GPT-3.5, o1, o3, and embedding models."
      />

      {!loaded ? (
        <LlmTokenCounterSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Top Row: Text Input and Model Selection */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Text Input - Left Side (Takes 2/3 width) */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Text Input
                      </label>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {input.length} characters •{" "}
                        {input.trim() ? input.split(/\s+/).length : 0} words
                      </div>
                    </div>
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter your text to count tokens... 

                      Try pasting:
                      - API prompts
                      - Code snippets
                      - Long documents
                      - Chat messages"
                      className="w-full h-48 p-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                    />
                  </div>

                  {/* Model Selection - Right Side (Takes 1/3 width) */}
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      OpenAI Model
                    </label>
                    <Select
                      value={selectedModel}
                      onValueChange={setSelectedModel}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(OPENAI_MODELS).map(([key, model]) => (
                          <SelectItem key={key} value={key}>
                            {model.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Token Count Display - Clean without buttons */}
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  {tokenizerLoading ? (
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          Loading tokenizer...
                        </div>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Initializing OpenAI tokenizer
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      {/* Left Side - Token Count */}
                      <div className="text-center flex-1">
                        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {tokens.toLocaleString()}
                        </div>
                        <div className="text-lg text-slate-700 dark:text-slate-300">
                          Tokens
                        </div>
                      </div>

                      {/* Gray Separator Bar */}
                      <div className="w-px h-16 bg-slate-300 dark:bg-slate-600 mx-6"></div>

                      {/* Right Side - Model Details */}
                      <div className="text-center flex-1">
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          {
                            OPENAI_MODELS[
                              selectedModel as keyof typeof OPENAI_MODELS
                            ]?.name
                          }
                        </div>
                        <div className="text-xs text-slate-700 dark:text-slate-400 mb-1">
                          Max context:{" "}
                          {OPENAI_MODELS[
                            selectedModel as keyof typeof OPENAI_MODELS
                          ]?.context.toLocaleString()}{" "}
                          tokens
                        </div>
                        {tokens > 0 && (
                          <div className="text-xs text-slate-700 dark:text-slate-500">
                            {(
                              (tokens /
                                OPENAI_MODELS[
                                  selectedModel as keyof typeof OPENAI_MODELS
                                ]?.context) *
                              100
                            ).toFixed(1)}
                            % used
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Banner - Bottom */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 All calculations happen in your browser - your data stays
                    private.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <ToolVideo
              title="Learn More: What is an AI Token? | LLM Tokens explained in 2 minutes!"
              description="This video explains what AI tokens are and how they are used by Large Language "
              videoUrl="https://www.youtube.com/embed/OjrGu0L5K7M"
            />
            {/* How OpenAI Models Calculate Tokens - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  How OpenAI Models Calculate Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    When you use OpenAI's API, the text you send and receive is
                    broken down into smaller chunks called{" "}
                    <strong>tokens</strong>. Tokens can be words, parts of
                    words, or even punctuation. Think of tokens as the building
                    blocks that the model reads and writes.
                  </p>

                  <p>
                    Typically, one token is about{" "}
                    <strong>four characters</strong> or{" "}
                    <strong>three-quarters of a word</strong> in English. Before
                    generating a response, the API counts how many tokens are in
                    your prompt and the generated output. This helps manage how
                    much text the model processes and also affects pricing.
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>💡 Quick Rule:</strong> 1 token ≈ 4 characters ≈
                      0.75 words in English
                    </p>
                  </div>

                  <p>
                    OpenAI provides a handy tokenizer tool and libraries like{" "}
                    <strong>Tiktoken</strong> to see how text is split into
                    tokens, making it easier to estimate usage and costs. Our
                    tool uses the same Tiktoken library that OpenAI uses
                    internally for accurate token counting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Understanding Token Pricing and Context Limits - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Understanding Token Pricing and Context Limits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    OpenAI charges based on the number of tokens processed,
                    which includes both your input (prompt) and the model's
                    output (completion). Different models have different pricing
                    per token and context limits.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Context Window
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        The maximum number of tokens (input + output) a model
                        can process in a single request. Newer models have
                        larger context windows.
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Token Pricing
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Input tokens are typically cheaper than output tokens.
                        More capable models cost more per token.
                      </p>
                    </div>
                  </div>

                  <p>
                    Use our token counter to estimate costs before making API
                    calls and to ensure your prompts fit within the model's
                    context limits.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tiktoken Library and Technical Implementation - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Tiktoken Library and Technical Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    <strong>Tiktoken</strong> is OpenAI's official tokenizer
                    library that provides exact token counting for all OpenAI
                    models. Our tool uses the JavaScript version of Tiktoken to
                    provide accurate, real-time token counting directly in your
                    browser.
                  </p>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example tokenization process
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      Text: "Hello, world!"
                      <br />
                      Tokens: ["Hello", ",", " world", "!"]
                      <br />
                      Count: 4 tokens
                    </div>
                  </div>

                  <p>
                    Each OpenAI model uses a specific encoding scheme. Our tool
                    automatically selects the correct tokenizer for your chosen
                    model, ensuring 100% accuracy with OpenAI's billing and API
                    behavior.
                  </p>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      <strong>🔒 Privacy Note:</strong> All tokenization happens
                      locally in your browser. Your text never leaves your
                      device.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Optimization Tips for Token Usage - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Optimization Tips for Token Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Efficiently managing your token usage can significantly
                    reduce API costs and improve response times. Here are proven
                    strategies for token optimization:
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Prompt Optimization
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Use concise, clear language</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Remove unnecessary words and filler</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Use abbreviations where appropriate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Structure prompts with bullet points</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Response Management
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Set appropriate max_tokens limits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Use stop sequences to control output</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Choose the right model for your task</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Cache common responses when possible</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Remember: Using a more capable model efficiently is often
                    more cost-effective than using a cheaper model
                    inefficiently.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Official Resources and Tools - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Official OpenAI Resources and Tools
                </CardTitle>
                <CardDescription>
                  Explore OpenAI's official documentation and interactive tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <a
                    href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        📖
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        OpenAI Official Token Guide
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Comprehensive guide on what tokens are and how to count
                        them
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://platform.openai.com/tokenizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                        🛠️
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                        Interactive Tokenizer Demo
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        OpenAI's official web-based tokenizer tool
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/openai/tiktoken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                        ⚡
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        Tiktoken Library
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Official tokenizer library source code and documentation
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://platform.openai.com/docs/guides/text-generation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                        🎯
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                        Text Generation Guide
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Best practices for working with OpenAI's text generation
                        models
                      </div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default OpenaiTokenCounter;
