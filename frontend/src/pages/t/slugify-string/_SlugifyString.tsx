import React, { useState, useEffect } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import SlugifyStringSkeleton from "./_SlugifyStringSkeleton";
import ToolVideo from "@/components/tool/ToolVideo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CopyButton from "@/components/ui/copy-button";

const simpleSlugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const SlugifyString: React.FC = () => {
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const slug = simpleSlugify(input);

  return (
    <ToolContainer>
      <ToolHead
        name="Slugify String"
        description="Convert any string to a clean, URL-friendly slug instantly. Enter your text and get a slugified output for SEO, file names, and web development."
      />
      {!loaded ? (
        <SlugifyStringSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your string to slugify
                  </label>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Put your string here (ex: My file path)"
                    rows={3}
                    className="w-full p-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                  />
                </div>
                <div className="mt-6">
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your slug
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      value={slug}
                      readOnly
                      placeholder="Your slug will be generated here (ex: my-file-path)"
                      className="w-full p-3 border border-slate-300 rounded-lg bg-slate-100 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                    />
                    <CopyButton text={slug} disabled={slug.length === 0} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>
          <ToolContentCardWrapper>
            <ToolVideo
              title="Learn More: URL Slug Best Practices"
              description="Explore best practices for creating SEO-friendly slugs from domain objects."
              videoUrl="https://www.youtube.com/embed/Q8Q3_KxhNxg"
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  What is Slugification?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Slugification converts any string into a clean, URL-friendly
                    format. Use this tool to instantly generate slugs for SEO,
                    file names, and web development.
                  </p>
                  <p>
                    Enter your string above and copy the generated slug for use
                    in your projects. Slugs help create readable, SEO-friendly
                    URLs and file names.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>💡 Tip:</strong> Use slugs for better SEO and
                      cleaner URLs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Official Resources
                </CardTitle>
                <CardDescription>
                  Explore documentation and guides
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
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
                  <a
                    href="https://en.wikipedia.org/wiki/Semantic_URL"
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
                        Semantic URL - Wikipedia
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Learn about semantic URLs and slugs
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
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
                        String - MDN Docs
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        JavaScript string manipulation documentation
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

export default SlugifyString;
