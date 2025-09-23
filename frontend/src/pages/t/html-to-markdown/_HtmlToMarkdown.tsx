import React, { useState, useEffect, useCallback } from 'react';
import ToolContainer from 'src/components/tool/ToolContainer';
import ToolHead from 'src/components/tool/ToolHead';
import ToolBody from 'src/components/tool/ToolBody';
import ToolCardWrapper from 'src/components/tool/ToolCardWrapper';
import ToolContentCardWrapper from 'src/components/tool/ToolContentCardWrapper';
import HtmlToMarkdownSkeleton from 'src/pages/t/html-to-markdown/_HtmlToMarkdownSkeleton';
import CopyButton from 'src/components/ui/copy-button';
import { toast } from 'src/components/ToastProvider';
import { Button } from 'src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from 'src/components/ui/card';
import { Textarea } from 'src/components/ui/textarea';
import { Label } from 'src/components/ui/label';
import ToolVideo from 'src/components/tool/ToolVideo';
import showdown from 'showdown';

const converter = new showdown.Converter();

const HtmlToMarkdown: React.FC = () => {
  const [html, setHtml] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConversion = useCallback((htmlInput: string) => {
    if (!htmlInput.trim()) {
      setMarkdown('');
      return;
    }
    const markdownOutput = converter.makeMarkdown(htmlInput);
    setMarkdown(markdownOutput);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setHtml(value);
      handleConversion(value);
    },
    [handleConversion]
  );

  const handleClear = () => {
    setHtml('');
    setMarkdown('');
    toast.success('Cleared all fields');
  };

  const handleSampleHtml = () => {
    const sampleHtml = `<h1>HTML to Markdown Converter</h1>

<p>This is a sample HTML text.</p>

<h2>Features</h2>

<ul>
  <li>Converts HTML to markdown</li>
  <li>Real-time conversion</li>
  <li>Easy to use</li>
</ul>

<h3>Code block</h3>

<pre><code class="language-javascript">console.log("Hello, world!");</code></pre>
`;
    setHtml(sampleHtml);
    handleConversion(sampleHtml);
  };

  return (
    <ToolContainer>
      <ToolHead
        name="HTML to Markdown Converter"
        description="Convert HTML to Markdown instantly with this free online tool. See the converted Markdown in real-time as you type."
      />

      {!loaded ? (
        <HtmlToMarkdownSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>HTML</Label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSampleHtml}
                      >
                        Load Sample
                      </Button>
                    </div>
                    <Textarea
                      value={html}
                      onChange={handleInputChange}
                      placeholder="Enter HTML here..."
                      className="h-64 font-mono"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Markdown</Label>
                      <CopyButton text={markdown} />
                    </div>
                    <Textarea
                      value={markdown}
                      readOnly
                      placeholder="Markdown output will be shown here..."
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
              title="Learn HTML in 12 Minutes"
              description="A quick tutorial on the basics of HTML."
              videoUrl="https://www.youtube.com/embed/bWPMSSsVdPk"
            />
            <Card>
              <CardHeader>
                <CardTitle>About HTML to Markdown Conversion</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 dark:text-slate-400 space-y-4">
                <p>
                  This tool converts HTML into Markdown, a lightweight markup language. This is useful for converting rich text content into a simpler, more readable format.
                </p>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default HtmlToMarkdown;