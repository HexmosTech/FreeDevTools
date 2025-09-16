import React, { useEffect, useRef, useState } from "react";
import { toast } from "@/components/ToastProvider";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
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
import AnthropicTokenCounterSkeleton from "./_AnthropicTokenCounterSkeleton";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolVideo from "@/components/tool/ToolVideo";

// Anthropic Models Configuration
const ANTHROPIC_MODELS = {
  "claude-opus-4": {
    name: "Claude Opus 4",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-sonnet-4": {
    name: "Claude Sonnet 4",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-3.7-sonnet": {
    name: "Claude 3.7 Sonnet",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-3.5-sonnet": {
    name: "Claude 3.5 Sonnet",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-3.5-haiku": {
    name: "Claude 3.5 Haiku",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-3-opus": {
    name: "Claude 3 Opus",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-3-sonnet": {
    name: "Claude 3 Sonnet",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-3-haiku": {
    name: "Claude 3 Haiku",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-2.1": {
    name: "Claude 2.1",
    context: 200000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-2.0": {
    name: "Claude 2.0",
    context: 100000,
    hub: "Xenova/claude-tokenizer",
  },
  "claude-instant-1.2": {
    name: "Claude Instant 1.2",
    context: 100000,
    hub: "Xenova/claude-tokenizer",
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

const AnthropicTokenCounter: React.FC = () => {
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("claude-3.5-sonnet");
  const [tokens, setTokens] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [tokenizerLoading, setTokenizerLoading] = useState(false);

  const tokenizerRef = useRef<any>(); // PreTrainedTokenizer from transformers

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Initialize tokenizer when model is selected
  useEffect(() => {
    const initTokenizer = async () => {
      setTokenizerLoading(true);
      try {
        const { AutoTokenizer } = await import("@huggingface/transformers");
        const modelConfig =
          ANTHROPIC_MODELS[selectedModel as keyof typeof ANTHROPIC_MODELS];

        if (modelConfig?.hub) {
          tokenizerRef.current = await AutoTokenizer.from_pretrained(
            modelConfig.hub
          );

          // Initial token count calculation
          if (input.trim() && tokenizerRef.current) {
            const encoding = tokenizerRef.current.encode(input);
            setTokens(encoding.length);
          }
        }
      } catch (error) {
        console.error("Failed to load Anthropic tokenizer:", error);
        toast.error("Failed to load Anthropic tokenizer. Please try again.");
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
      ANTHROPIC_MODELS[selectedModel as keyof typeof ANTHROPIC_MODELS];

    const results = `Token Count: ${tokens}
Model: ${selectedModelConfig?.name || selectedModel}
Company: Anthropic
Context Limit: ${selectedModelConfig?.context.toLocaleString()} tokens
Text Length: ${input.length} characters
Words: ${input.trim() ? input.split(/\s+/).length : 0}`;

    navigator.clipboard.writeText(results);
    toast.success("Token count copied to clipboard!");
  };

  return (
    <ToolContainer>
      <ToolHead
        name="Anthropic Token Counter"
        description="Count tokens accurately for Anthropic Claude models. Get exact token counts for all Claude models from Opus to Haiku variants."
      />

      {!loaded ? (
        <AnthropicTokenCounterSkeleton />
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
  - Chat messages

                      All calculations happen locally in your browser."
                      className="w-full h-48 p-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                    />
                  </div>

                  {/* Model Selection - Right Side (Takes 1/3 width) */}
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Claude Model
                    </label>
                    <Select
                      value={selectedModel}
                      onValueChange={setSelectedModel}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(ANTHROPIC_MODELS).map(
                          ([key, model]) => (
                            <SelectItem key={key} value={key}>
                              {model.name}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Token Count Display - Clean without buttons */}
                <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  {tokenizerLoading ? (
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                        <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                          Loading tokenizer...
                        </div>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Initializing Claude tokenizer
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      {/* Left Side - Token Count */}
                      <div className="text-center flex-1">
                        <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
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
                            ANTHROPIC_MODELS[
                              selectedModel as keyof typeof ANTHROPIC_MODELS
                            ]?.name
                          }
                        </div>
                        <div className="text-xs text-slate-700 dark:text-slate-400 mb-1">
                          Max context:{" "}
                          {ANTHROPIC_MODELS[
                            selectedModel as keyof typeof ANTHROPIC_MODELS
                          ]?.context.toLocaleString()}{" "}
                          tokens
                        </div>
                        {tokens > 0 && (
                          <div className="text-xs text-slate-700 dark:text-slate-500">
                            {(
                              (tokens /
                                ANTHROPIC_MODELS[
                                  selectedModel as keyof typeof ANTHROPIC_MODELS
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
                <div className="p-3 bg-purple-50 text-center dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    💡 All calculations happen in your browser - your data stays
                    private.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* How Claude Models Calculate Tokens - Content Card */}
            <ToolVideo
              title="Learn More: Anthropic's Claude Code Plus a Million Tokens"
              description="This video explains how Anthropic's Claude model uses tokens and discusses the 1 million token context window."
              videoUrl="https://www.youtube.com/embed/2qHxfwvIx-I"
            />

            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  How Claude Models Calculate Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Anthropic's Claude models use a sophisticated tokenization
                    process to break down text into manageable units called{" "}
                    <strong>tokens</strong>. Unlike simple word-based splitting,
                    tokens can represent complete words, parts of words,
                    punctuation marks, or even special characters.
                  </p>

                  <p>
                    Claude's tokenizer is designed to efficiently handle diverse
                    content types, from natural language conversations to
                    complex code snippets. Each token serves as a fundamental
                    unit that the model processes, influencing both{" "}
                    <strong>API costs</strong> and{" "}
                    <strong>context limitations</strong>.
                  </p>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-purple-800 dark:text-purple-200 text-sm">
                      <strong>💡 Claude Advantage:</strong> Claude's tokenizer
                      is optimized for longer contexts and maintains consistent
                      performance across different languages and content types.
                    </p>
                  </div>

                  <p>
                    Our tool uses the same tokenization approach as Anthropic's
                    API, ensuring that your token counts exactly match what
                    you'll be charged for when using Claude through the official
                    API.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Understanding Claude Pricing and Context Windows - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Understanding Claude Pricing and Context Windows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Anthropic's pricing model is based on tokens consumed, with
                    separate rates for input and output tokens. Claude models
                    offer some of the largest context windows in the industry,
                    allowing for extensive conversations and document analysis.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Claude 3 Haiku
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Fastest model with 200K context window. Ideal for quick
                        responses and high-frequency tasks.
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Claude 3.5 Sonnet
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Balanced performance and speed with 200K context. Great
                        for most applications.
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Claude 3 Opus
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Most capable model with 200K context. Best for complex
                        reasoning and analysis.
                      </p>
                    </div>
                  </div>

                  <p>
                    Use our token counter to estimate costs and ensure your
                    prompts and documents fit comfortably within Claude's
                    generous context limits.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Optimization Strategies for Claude Usage - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Optimization Strategies for Claude Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Maximizing efficiency with Claude requires understanding how
                    to leverage its strengths while managing token consumption.
                    Here are proven strategies for optimal Claude usage:
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Context Management
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>
                            Leverage Claude's large context window for
                            comprehensive documents
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>
                            Include relevant context in single requests vs.
                            multiple calls
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>
                            Use structured prompts with clear sections
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>
                            Maintain conversation history for coherent
                            interactions
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Model Selection
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Use Haiku for simple, high-volume tasks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Choose Sonnet for balanced performance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Reserve Opus for complex reasoning tasks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Consider cost vs. quality trade-offs</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    <strong>Pro Tip:</strong> Claude's excellent instruction
                    following means you can often achieve better results with
                    clearer prompts rather than longer ones, leading to both
                    cost savings and improved responses.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Official Anthropic Resources and Documentation - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Official Anthropic Resources and Documentation
                </CardTitle>
                <CardDescription>
                  Explore Anthropic's official guides and developer resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <a
                    href="https://docs.anthropic.com/claude/docs/intro-to-claude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                        📖
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        Introduction to Claude
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Official guide to Claude's capabilities and best
                        practices
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://docs.anthropic.com/claude/docs/models-overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        🤖
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        Models Overview
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Compare Claude models and their capabilities
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://docs.anthropic.com/claude/docs/prompt-engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                        ✨
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                        Prompt Engineering Guide
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Learn how to write effective prompts for Claude
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://console.anthropic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                        🚀
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                        Anthropic Console
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Try Claude directly in Anthropic's web interface
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://docs.anthropic.com/claude/reference/getting-started-with-the-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                        ⚡
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        API Documentation
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Technical reference for integrating Claude API
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

export default AnthropicTokenCounter;
