import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "src/components/tool/ToolContainer";
import ToolHead from "src/components/tool/ToolHead";
import ToolBody from "src/components/tool/ToolBody";
import ToolCardWrapper from "src/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "src/components/tool/ToolContentCardWrapper";
import MarkdownToHtmlConverterSkeleton from "src/pages/t/markdown-to-html-converter/_MarkdownToHtmlConverterSkeleton";
import CopyButton from "src/components/ui/copy-button";
import { toast } from "src/components/ToastProvider";
import { Button } from "src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import { Textarea } from "src/components/ui/textarea";
import { Label } from "src/components/ui/label";
import ToolVideo from "src/components/tool/ToolVideo";
import showdown from "showdown";
import AdBanner from "../../../components/banner/AdBanner";

const converter = new showdown.Converter();

const MarkdownToHtmlConverter: React.FC = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConversion = useCallback((markdownInput: string) => {
    if (!markdownInput.trim()) {
      setHtml("");
      return;
    }
    const htmlOutput = converter.makeHtml(markdownInput);
    setHtml(htmlOutput);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setMarkdown(value);
      handleConversion(value);
    },
    [handleConversion]
  );

  const handleClear = () => {
    setMarkdown("");
    setHtml("");
    toast.success("Cleared all fields");
  };

  const handleSampleMarkdown = () => {
    const sampleMarkdown = `# Markdown to HTML Converter\n\nThis is a sample markdown text.\n\n## Features\n\n- Converts markdown to HTML\n- Real-time conversion\n- Easy to use\n\n### Code block\n\n\`\`\`javascript\nconsole.log("Hello, world!");\n\`\`\`\n`;
    setMarkdown(sampleMarkdown);
    handleConversion(sampleMarkdown);
  };

  return (
    <ToolContainer>
            <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="Markdown to HTML Converter"
        description="Convert Markdown to HTML instantly. See the rendered HTML in real-time as you type."
      />

      {!loaded ? (
        <MarkdownToHtmlConverterSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Markdown</Label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSampleMarkdown}
                      >
                        Load Sample
                      </Button>
                    </div>
                    <Textarea
                      value={markdown}
                      onChange={handleInputChange}
                      placeholder="Enter Markdown here..."
                      className="h-64 font-mono"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>HTML</Label>
                      <CopyButton text={html} />
                    </div>
                    <Textarea
                      value={html}
                      readOnly
                      placeholder="HTML output will be shown here..."
                      className="h-64 font-mono bg-slate-50 dark:bg-slate-800"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                    <Button onClick={handleClear} variant="outline" size="sm">
                        Clear
                    </Button>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          <ToolContentCardWrapper>
            <ToolVideo
              title="Learn Markdown in 30 Minutes"
              description="A quick tutorial on the basics of Markdown syntax."
              videoUrl="https://www.youtube.com/embed/bTVIMt3XllM"
            />
            <Card>
              <CardHeader>
                <CardTitle>Markdown Syntax Guide</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 dark:text-slate-400 space-y-4">
              <p>
                  Markdown is a simple and intuitive markup language. Here are some of the most common elements you'll use:
                </p>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Headers</h4>
                <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-sm">
                  # This is an H1
                  ## This is an H2
                  ### This is an H3
                </pre>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Emphasis</h4>
                <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-sm">
                  *This text will be italic*
                  _This will also be italic_
                  **This text will be bold**
                  __This will also be bold__
                </pre>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Lists</h4>
                <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-sm">
                  1. First ordered list item
                  2. Another item
                  
                  - Unordered list can use asterisks
                  * Or minuses
                  + Or pluses
                </pre>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Links</h4>
                <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-sm">
                  [I'm an inline-style link](https://www.google.com)
                </pre>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Images</h4>
                <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-sm">
                  ![alt text](https://via.placeholder.com/150 "Logo Title Text 1")
                </pre>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Blockquotes</h4>
                <pre className="bg-slate-100 dark:bg-slate-700 p-2 rounded text-sm">
                   Blockquotes are very handy in email to emulate reply text.
                </pre>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default MarkdownToHtmlConverter;