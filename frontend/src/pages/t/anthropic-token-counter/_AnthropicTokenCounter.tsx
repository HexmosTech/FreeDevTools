import React, { useState, useEffect, useRef } from "react";
import ToolContainer from "../../../components/tool/ToolContainer";
import ToolHead from "../../../components/tool/ToolHead";
import AnthropicTokenCounterSkeleton from "./AnthropicTokenCounterSkeleton";
import { toast } from "../../../components/ToastProvider";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import ToolBody from "../../../components/tool/ToolBody";
import ToolCardWrapper from "../../../components/tool/ToolCardWrapper";

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
        description="Count tokens accurately for Anthropic Claude models using official tokenizers. Get exact token counts for all Claude models from Opus to Haiku variants."
      />

      {!loaded ? (
        <AnthropicTokenCounterSkeleton />
      ) : (
        <ToolBody>
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

Exact token counting using Anthropic's official tokenizer.
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
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default AnthropicTokenCounter;
