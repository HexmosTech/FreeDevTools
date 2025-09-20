import React, { useState, useEffect, useRef } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import LlamaTokenCounterSkeleton from "./_LlamaTokenCounterSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ToolVideo from "@/components/tool/ToolVideo";

const LLAMA_MODELS = {
  "llama-4": {
    name: "Llama 4",
    context: 1000000,
    hub: "Xenova/llama-tokenizer",
  },
  "llama-3.3": {
    name: "Llama 3.3",
    context: 128000,
    hub: "Xenova/llama-tokenizer",
  },
  "llama-3.2": {
    name: "Llama 3.2",
    context: 128000,
    hub: "Xenova/llama-tokenizer",
  },
  "llama-3.1": {
    name: "Llama 3.1",
    context: 128000,
    hub: "Xenova/llama-tokenizer",
  },
  "llama-3": {
    name: "Llama 3",
    context: 8192,
    hub: "Xenova/llama-tokenizer",
  },
  "llama-2": {
    name: "Llama 2",
    context: 4096,
    hub: "Xenova/llama-tokenizer",
  },
  "code-llama": {
    name: "Code Llama",
    context: 16384,
    hub: "Xenova/llama-tokenizer",
  },
};

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

const LlamaTokenCounter: React.FC = () => {
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("llama-3-70b");
  const [tokens, setTokens] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [tokenizerLoading, setTokenizerLoading] = useState(false);
  const tokenizerRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const initTokenizer = async () => {
      setTokenizerLoading(true);
      try {
        const { AutoTokenizer } = await import("@huggingface/transformers");
        const modelConfig = LLAMA_MODELS[selectedModel as keyof typeof LLAMA_MODELS];
        if (modelConfig?.hub) {
          tokenizerRef.current = await AutoTokenizer.from_pretrained(modelConfig.hub);
          if (input.trim() && tokenizerRef.current) {
            const encoding = tokenizerRef.current.encode(input);
            setTokens(encoding.length);
          }
        }
      } catch (error) {
        console.error("Failed to load Llama tokenizer:", error);
        toast.error("Failed to load Llama tokenizer. Please try again.");
        tokenizerRef.current = undefined;
      }
      setTokenizerLoading(false);
    };
    initTokenizer();
  }, [selectedModel]);

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
    const selectedModelConfig = LLAMA_MODELS[selectedModel as keyof typeof LLAMA_MODELS];
    const results = `Token Count: ${tokens}\nModel: ${selectedModelConfig?.name || selectedModel}\nCompany: Meta\nContext Limit: ${selectedModelConfig?.context.toLocaleString()} tokens\nText Length: ${input.length} characters\nWords: ${input.trim() ? input.split(/\s+/).length : 0}`;
    navigator.clipboard.writeText(results);
    toast.success("Token count copied to clipboard!");
  };

  return (
    <ToolContainer>
      <ToolHead
        name="Llama Token Counter"
        description="Count tokens instantly for Meta Llama models. Get accurate token counts for Llama 3 and Llama 2 models. Estimate API costs, manage context limits, and optimize your prompts for Meta AI. Free, fast, and secure browser-based tool."
      />
      {!loaded ? (
        <LlamaTokenCounterSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block font-medium text-slate-700 dark:text-slate-300">
                        Text Input
                      </label>
                      <div className="text-slate-500 dark:text-slate-400">
                        {input.length} characters • {input.trim() ? input.split(/\s+/).length : 0} words
                      </div>
                    </div>
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Paste your prompt, code, or document here...\nAll calculations happen locally in your browser."
                      className="w-full h-48 p-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Llama Model
                    </label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                    >
                      {Object.entries(LLAMA_MODELS).map(([key, model]) => (
                        <option key={key} value={key}>{model.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  {tokenizerLoading ? (
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                        <div className="font-bold text-blue-600 dark:text-blue-400">
                          Loading tokenizer...
                        </div>
                      </div>
                      <div className="text-slate-500 dark:text-slate-400">
                        Initializing Llama tokenizer
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {tokens.toLocaleString()}
                        </div>
                        <div className="text-slate-700 dark:text-slate-300">
                          Tokens
                        </div>
                      </div>
                      <div className="w-px h-16 bg-slate-300 dark:bg-slate-600 mx-6"></div>
                      <div className="text-center flex-1">
                        <div className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                          {LLAMA_MODELS[selectedModel as keyof typeof LLAMA_MODELS]?.name}
                        </div>
                        <div className="text-xs text-slate-700 dark:text-slate-400 mb-1">
                          Max context: {LLAMA_MODELS[selectedModel as keyof typeof LLAMA_MODELS]?.context.toLocaleString()} tokens
                        </div>
                        {tokens > 0 && (
                          <div className="text-xs text-slate-700 dark:text-slate-500">
                            {((tokens / LLAMA_MODELS[selectedModel as keyof typeof LLAMA_MODELS]?.context) * 100).toFixed(1)}% used
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex space-x-3">
                  <Button onClick={copyTokenCount} disabled={tokens === 0} className="flex-1">
                    Copy Token Count
                  </Button>
                  <Button onClick={handleClear} variant="outline">
                    Clear
                  </Button>
                </div>
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200">
                    💡 All calculations happen in your browser - your data stays private.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>
          <ToolContentCardWrapper>
            <ToolVideo
              title="Meta Llama 3: Tokenization and Model Overview"
              description="Learn how Meta's Llama models tokenize text and why accurate token counting matters for API usage and cost."
              videoUrl="https://www.youtube.com/embed/Tmdk_H2WDj4"
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  How Llama Models Calculate Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Meta's Llama models use advanced tokenization to break text into units called <strong>tokens</strong>. Tokens may represent words, subwords, punctuation, or special characters. This process impacts API costs and context limits.
                  </p>
                  <p>
                    The Llama tokenizer is optimized for code, natural language, and long context windows. Our tool uses the same tokenizer as Meta's API, so your token counts match what you'll be charged for.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>💡 Llama Advantage:</strong> Llama supports up to 8K context, making it ideal for long documents and code.
                    </p>
                  </div>
                  <p>
                    Use this tool to estimate costs and ensure your prompts fit within Llama's context limits.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Optimization Strategies for Llama Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    To maximize efficiency with Llama, manage your context and select the right model for your task. Here are some tips:
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Context Management
                      </h4>
                      <ul className="space-y-2">
                        <li>Leverage Llama's context for long documents</li>
                        <li>Use structured prompts for clarity</li>
                        <li>Keep conversation history for coherent interactions</li>
                        <li>Trim unnecessary text to save tokens</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Model Selection
                      </h4>
                      <ul className="space-y-2">
                        <li>Use Llama 3 70B for maximum context</li>
                        <li>Choose Llama 2 13B for code-heavy tasks</li>
                        <li>Pick Llama 2 7B for general language tasks</li>
                        <li>Balance cost and quality for your use case</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    <strong>Pro Tip:</strong> Clear, concise prompts often yield better results and lower token usage.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Official Meta Llama Resources and Documentation
                </CardTitle>
                <CardDescription>
                  Explore Meta's official guides and developer resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <a
                    href="https://github.com/facebookresearch/llama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">🔗</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        Meta Llama GitHub
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Official Meta Llama repository and documentation
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://huggingface.co/meta-llama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-semibold text-sm">🤖</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                        Meta Llama on HuggingFace
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Explore Meta Llama models and tokenizers
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">📋</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        Clipboard API Docs
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Learn about browser clipboard functionality
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Xenova/transformers.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">⚡</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                        Transformers.js
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Tokenizer library powering this tool
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

export default LlamaTokenCounter;
