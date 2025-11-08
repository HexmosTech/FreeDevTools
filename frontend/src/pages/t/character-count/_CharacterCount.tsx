import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead from "@/components/tool/ToolHead";
import ToolVideo from "@/components/tool/ToolVideo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import AdBanner from "../../../components/banner/AdBanner";
import CharacterCountSkeleton from "./_CharacterCountSkeleton";

const CharacterCount: React.FC = () => {
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lineCount = text.trim() ? text.split(/\r\n|\r|\n/).length : 0;
  const byteCount = new Blob([text]).size;

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="Character Count"
        description="Count characters, words, lines, and byte size instantly."
      />
      {!loaded ? (
        <CharacterCountSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                <div>
                  <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Text
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here..."
                    rows={5}
                    className="w-full p-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                  <div>
                    <div className="font-medium text-slate-700 dark:text-slate-300">
                      Characters
                    </div>
                    <div>{charCount}</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700 dark:text-slate-300">
                      Words
                    </div>
                    <div>{wordCount}</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700 dark:text-slate-300">
                      Lines
                    </div>
                    <div>{lineCount}</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700 dark:text-slate-300">
                      Byte Size
                    </div>
                    <div>{byteCount}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>
          <ToolContentCardWrapper>
            <ToolVideo
              title="Learn More: The History of Alphabets"
              description="Explore the fascinating history of alphabets and how they evolved over time."
              videoUrl="https://www.youtube.com/embed/w6yonf-SAXw"
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  How Character Counting Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Character counting tools help you quickly measure the length
                    of your text, code, or documents. This tool instantly shows
                    character, word, line, and byte count for any input.
                  </p>
                  <p>
                    Use the input above to type or paste your text. The
                    statistics below update in real time as you edit.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>💡 Tip:</strong> Use this tool to check limits for
                      tweets, meta descriptions, or code comments.
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
                    href="https://en.wikipedia.org/wiki/Character_(computing)"
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
                        Character (Computing) - Wikipedia
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Learn about characters in computing
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length"
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
                        String.length - MDN Docs
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        How to count string length in JavaScript
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

export default CharacterCount;
