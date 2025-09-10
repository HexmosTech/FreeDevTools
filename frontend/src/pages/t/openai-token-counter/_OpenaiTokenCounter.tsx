import React, { useState, useEffect, useRef } from "react";
import ToolContainer from "../../../components/tool/ToolContainer";
import ToolHead from "../../../components/tool/ToolHead";
import LlmTokenCounterSkeleton from "./_OpenaiTokenCounterSkeleton";
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
        description="Count tokens accurately for OpenAI GPT models using tiktoken. Get exact token counts for all OpenAI models including GPT-4, GPT-3.5, o1, o3, and embedding models."
      />

      {!loaded ? (
        <LlmTokenCounterSkeleton />
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

Exact token counting using OpenAI's tiktoken.
All calculations happen locally in your browser."
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
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default OpenaiTokenCounter;
