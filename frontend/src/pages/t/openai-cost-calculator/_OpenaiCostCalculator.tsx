import React, { useState, useEffect } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import OpenaiCostCalculatorSkeleton from "./_OpenaiCostCalculatorSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ToolVideo from "@/components/tool/ToolVideo";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Tiktoken } from "js-tiktoken";

const OPENAI_MODELS = [
	{ name: "gpt-5", input: 1.25, cachedInput: 0.125, output: 10.0 },
	{ name: "gpt-5-mini", input: 0.25, cachedInput: 0.025, output: 2.0 },
	{ name: "gpt-5-nano", input: 0.05, cachedInput: 0.005, output: 0.4 },
	{ name: "gpt-5-chat-latest", input: 1.25, cachedInput: 0.125, output: 10.0 },
	{ name: "gpt-4.1", input: 2.0, cachedInput: 0.5, output: 8.0 },
	{ name: "gpt-4.1-mini", input: 0.4, cachedInput: 0.1, output: 1.6 },
	{ name: "gpt-4.1-nano", input: 0.1, cachedInput: 0.025, output: 0.4 },
	{ name: "gpt-4o", input: 2.5, cachedInput: 1.25, output: 10.0 },
	{ name: "gpt-4o-2024-05-13", input: 5.0, cachedInput: null, output: 15.0 },
	{ name: "gpt-4o-mini", input: 0.15, cachedInput: 0.075, output: 0.6 },
	{ name: "gpt-realtime", input: 4.0, cachedInput: 0.4, output: 16.0 },
	{ name: "gpt-4o-realtime-preview", input: 5.0, cachedInput: 2.5, output: 20.0 },
	{ name: "gpt-4o-mini-realtime-preview", input: 0.6, cachedInput: 0.3, output: 2.4 },
	{ name: "gpt-audio", input: 2.5, cachedInput: null, output: 10.0 },
	{ name: "gpt-4o-audio-preview", input: 2.5, cachedInput: null, output: 10.0 },
	{ name: "gpt-4o-mini-audio-preview", input: 0.15, cachedInput: null, output: 0.6 },
	{ name: "o1", input: 15.0, cachedInput: 7.5, output: 60.0 },
	{ name: "o1-pro", input: 150.0, cachedInput: null, output: 600.0 },
	{ name: "o3-pro", input: 20.0, cachedInput: null, output: 80.0 },
	{ name: "o3", input: 2.0, cachedInput: 0.5, output: 8.0 },
	{ name: "o3-deep-research", input: 10.0, cachedInput: 2.5, output: 40.0 },
	{ name: "o4-mini", input: 1.1, cachedInput: 0.275, output: 4.4 },
	{ name: "o4-mini-deep-research", input: 2.0, cachedInput: 0.5, output: 8.0 },
	{ name: "o3-mini", input: 1.1, cachedInput: 0.55, output: 4.4 },
	{ name: "o1-mini", input: 1.1, cachedInput: 0.55, output: 4.4 },
	{ name: "codex-mini-latest", input: 1.5, cachedInput: 0.375, output: 6.0 },
	{ name: "gpt-4o-mini-search-preview", input: 0.15, cachedInput: null, output: 0.6 },
	{ name: "gpt-4o-search-preview", input: 2.5, cachedInput: null, output: 10.0 },
	{ name: "computer-use-preview", input: 3.0, cachedInput: null, output: 12.0 },
	{ name: "gpt-image-1", input: 5.0, cachedInput: 1.25, output: null },
];

const tokenOptions = Array.from({ length: 11 }, (_, i) => i * 1000);
const apiCallOptions = Array.from({ length: 11 }, (_, i) => i);
const PAPER_SIZES = {
	A4: 2500, // average chars per page
	A3: 5000,
	A5: 1250,
};

const OpenaiCostCalculator: React.FC = () => {
	const [mode, setMode] = useState("code");
	const [lines, setLines] = useState(0);
	const [charsPerLine, setCharsPerLine] = useState(70);
	const [pages, setPages] = useState(0);
	const [paperSize, setPaperSize] = useState<keyof typeof PAPER_SIZES>("A4");
	const [inputTokens, setInputTokens] = useState(0);
	const [outputTokens, setOutputTokens] = useState(0);
	const [apiCalls, setApiCalls] = useState(1);
	const [loaded, setLoaded] = useState(false);
	const [tokenizer, setTokenizer] = useState<Tiktoken | null>(null);
	const [tokenizerLoading, setTokenizerLoading] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoaded(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		const loadTokenizer = async () => {
			setTokenizerLoading(true);
			try {
				const { encodingForModel } = await import("js-tiktoken");
				setTokenizer(encodingForModel("gpt-4o"));
			} catch (err) {
				setTokenizer(null);
			}
			setTokenizerLoading(false);
		};
		loadTokenizer();
	}, []);

	useEffect(() => {
		let chars = 0;
		if (mode === "code") {
			chars = lines * charsPerLine;
		} else {
			chars = pages * PAPER_SIZES[paperSize];
		}
		if (tokenizer) {
			// Use tiktoken to estimate tokens from generated string
			const fakeText = "a".repeat(chars);
			setInputTokens(tokenizer.encode(fakeText).length);
		} else {
			setInputTokens(Math.ceil(chars / 4));
		}
	}, [tokenizer, mode, lines, charsPerLine, pages, paperSize]);

	const calculateCostPerCall = (model: any) => {
		// Prices are per 1M tokens
		const inputCost = (inputTokens / 1_000_000) * (model.input || 0);
		const outputCost = (outputTokens / 1_000_000) * (model.output || 0);
		return +(inputCost + outputCost).toFixed(6);
	};

	const calculateTotalCost = (model: any) => {
		return +(calculateCostPerCall(model) * apiCalls).toFixed(6);
	};

	return (
		<ToolContainer>
			<ToolHead
				name="OpenAI Cost Calculator"
				description="Estimate API costs for all OpenAI models. Enter code or document details to see dynamic pricing for GPT-4, GPT-4o, GPT-5, o1, o3, and more."
			/>
			{!loaded ? (
				<OpenaiCostCalculatorSkeleton />
			) : (
				<ToolBody>
					<ToolCardWrapper>
						<Card className="tool-card-bg">
							<CardContent className="space-y-6 pt-6">
								<Tabs value={mode} onValueChange={setMode} className="mb-6">
									<TabsList>
										<TabsTrigger value="code">Code</TabsTrigger>
										<TabsTrigger value="document">Document</TabsTrigger>
									</TabsList>
									<TabsContent value="code">
										<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
											<div>
												<label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">Lines of Code</label>
												<Input
													type="number"
													min={0}
													value={lines}
													onChange={e => setLines(Number(e.target.value))}
												/>
											</div>
											<div>
												<label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">Characters per Line</label>
												<Input
													type="number"
													min={1}
													value={charsPerLine}
													onChange={e => setCharsPerLine(Number(e.target.value))}
												/>
											</div>
											<div>
												<label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">API Calls</label>
												<Input
													type="number"
													min={0}
													value={apiCalls}
													onChange={e => setApiCalls(Number(e.target.value))}
												/>
											</div>
										</div>
									</TabsContent>
									<TabsContent value="document">
										<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
											<div>
												<label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">Pages</label>
												<Input
													type="number"
													min={0}
													value={pages}
													onChange={e => setPages(Number(e.target.value))}
												/>
											</div>
											<div>
												<label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">Paper Size</label>
												<Select value={paperSize} onValueChange={v => setPaperSize(v as keyof typeof PAPER_SIZES)}>
													<SelectTrigger className="w-full">
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="A4">A4</SelectItem>
														<SelectItem value="A3">A3</SelectItem>
														<SelectItem value="A5">A5</SelectItem>
													</SelectContent>
												</Select>
											</div>
											<div>
												<label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">API Calls</label>
												<Input
													type="number"
													min={0}
													value={apiCalls}
													onChange={e => setApiCalls(Number(e.target.value))}
												/>
											</div>
										</div>
									</TabsContent>
								</Tabs>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
									<div>
										<label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">Input Tokens</label>
										<Input type="number" value={inputTokens} onChange={e => setInputTokens(Number(e.target.value))} />
									</div>
									<div>
										<label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">Output Tokens</label>
										<Input
											type="number"
											min={0}
											value={outputTokens}
											onChange={e => setOutputTokens(Number(e.target.value))}
										/>
									</div>
								</div>
								<div className="overflow-x-auto">
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Model Name</TableHead>
												<TableHead>Input Price ($/1M)</TableHead>
												<TableHead>Output Price ($/1M)</TableHead>
												<TableHead>Cost per Call ($)</TableHead>
												<TableHead>Total Estimated Cost ($)</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{OPENAI_MODELS.map((model) => (
												<TableRow key={model.name}>
													<TableCell>{model.name}</TableCell>
													<TableCell>{model.input}</TableCell>
													<TableCell>{model.output !== null ? model.output : '-'}</TableCell>
													<TableCell className="font-bold">{calculateCostPerCall(model)}</TableCell>
													<TableCell className="font-bold">{calculateTotalCost(model)}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
									<div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
										<strong>Disclaimer:</strong> Prices are based on data as of September 21, 2025. Please check official OpenAI documentation for the latest rates.
									</div>
								</div>
							</CardContent>
						</Card>
					</ToolCardWrapper>
					<ToolContentCardWrapper>
						<ToolVideo
							title="OpenAI API Cost Explained"
							description="Analysis on OpenAI api costs"
							videoUrl="https://www.youtube.com/embed/Dxq223X0kxM"
						/>
						<Card>
							<CardHeader>
								<CardTitle className="text-slate-700 dark:text-slate-300">
									How OpenAI Model Pricing Works
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="text-slate-800 dark:text-slate-400 space-y-4">
									<p>
										OpenAI models are priced per 1,000 tokens for both input and
										output. Use this calculator to estimate costs for GPT-4,
										GPT-4o, GPT-5, o1, o3, and more. Enter your expected token
										usage and API calls to see dynamic pricing for all available
										models.
									</p>
									<p>
										Pricing may vary by model version and date. Always check the
										official OpenAI documentation for the latest rates and
										details.
									</p>
									<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
										<p className="text-blue-800 dark:text-blue-200 text-sm">
											<strong>💡 Tip:</strong> Lower token usage and fewer API
											calls can help reduce your costs.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-slate-700 dark:text-slate-300">
									Official OpenAI Resources
								</CardTitle>
								<CardDescription>
									Explore OpenAI's official pricing and API documentation
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid gap-3">
									<a
										href="https://platform.openai.com/docs/guides/pricing"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
									>
										<div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
											<span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
												🔗
											</span>
										</div>
										<div className="flex-1">
											<div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
												OpenAI Pricing Guide
											</div>
											<div className="text-sm text-slate-500 dark:text-slate-400">
												Official OpenAI pricing documentation
											</div>
										</div>
									</a>
									<a
										href="https://platform.openai.com/docs/api-reference"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
									>
										<div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
											<span className="text-green-600 dark:text-green-400 font-semibold text-sm">
												🤖
											</span>
										</div>
										<div className="flex-1">
											<div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">
												OpenAI API Reference
											</div>
											<div className="text-sm text-slate-500 dark:text-slate-400">
												API endpoints and usage details
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
											<span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
												📋
											</span>
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
								</div>
							</CardContent>
						</Card>
					</ToolContentCardWrapper>
				</ToolBody>
			)}
		</ToolContainer>
	);
};

export default OpenaiCostCalculator;
