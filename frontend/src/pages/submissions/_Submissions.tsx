import { toast } from "@/components/ToastProvider";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import ToolHead from "@/components/tool/ToolHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createIssue, formatDate, getIssueStatus, listSubmissionIssues, type GitHubIssue } from "@/lib/github-api";
import React, { useEffect, useState } from "react";
import SubmissionsSkeleton from "./_SubmissionsSkeleton";

const Submissions: React.FC = () => {
  const [toolName, setToolName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submissions, setSubmissions] = useState<GitHubIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await listSubmissionIssues();
      if (response.success && response.issues) {
        setSubmissions(response.issues);
      } else {
        const errorMsg = response.error || "Failed to load submissions";
        setError(errorMsg);
        toast.error(errorMsg);
      }
    } catch (err) {
      const errorMsg = "An error occurred while loading submissions";
      setError(errorMsg);
      toast.error(errorMsg);
      console.error("Error loading submissions:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!toolName.trim() || !description.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await createIssue({
        title: toolName.trim(),
        body: description.trim(),
        email: email.trim() || undefined
      });

      if (response.success) {
        toast.success("Tool request submitted successfully!");
        setToolName("");
        setEmail("");
        setDescription("");
        // Reload submissions to show the new one
        await loadSubmissions();
      } else {
        setError(response.error || "Failed to submit request");
        toast.error("Failed to submit request");
      }
    } catch (err) {
      setError("An error occurred while submitting");
      toast.error("Failed to submit request");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClear = () => {
    setToolName("");
    setEmail("");
    setDescription("");
    setError("");
  };

  if (loading) {
    return <SubmissionsSkeleton />;
  }

  return (
    <ToolContainer className="mt-16">
      <ToolHead
        showAdBanner={false}
        name="Tool Submissions"
        description="Submit your tool ideas and feature requests for Free DevTools. Help us build better developer tools by sharing your suggestions and requirements."
      />

      <ToolBody>
        <ToolGridContainer>
          {/* Submission Form */}
          <ToolCardWrapper>
            <Card className="tool-card-bg-grid">
              <CardHeader>
                <CardTitle>Submit Your Request</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Tool Name *
                    </label>
                    <Input
                      type="text"
                      value={toolName}
                      onChange={(e) => setToolName(e.target.value)}
                      placeholder="e.g., Password Generator, QR Code Creator, Color Palette Tool"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email (optional)
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Description *
                    </label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe what this tool should do, how it would be useful, and any specific features you'd like to see..."
                      rows={4}
                      required
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                      {error}
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <Button
                      type="submit"
                      disabled={submitting || !toolName.trim() || !description.trim()}
                      className="flex-1"
                    >
                      {submitting ? "Submitting..." : "Submit Request"}
                    </Button>
                    <Button
                      type="button"
                      onClick={handleClear}
                      variant="outline"
                    >
                      Clear
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* Recent Submissions */}
          <ToolContentCardWrapper>
            <Card className="tool-content-card-bg-grid">
              <CardHeader>
                <CardTitle>Recent Tool Requests</CardTitle>
              </CardHeader>
              <CardContent>
                {error ? (
                  <div className="text-center py-8">
                    <div className="text-red-600 dark:text-red-400 mb-4">
                      {error}
                    </div>
                    <Button
                      onClick={() => {
                        setRetryCount(prev => prev + 1);
                        loadSubmissions();
                      }}
                      variant="outline"
                    >
                      Retry Loading Submissions
                    </Button>
                  </div>
                ) : submissions.length === 0 ? (
                  <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                    No submissions yet. Be the first to submit a tool request!
                  </div>
                ) : (
                  <div className="space-y-4">
                    {submissions.map((submission) => (
                      <div
                        key={submission.id}
                        className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-slate-900 dark:text-slate-100">
                            {submission.title}
                          </h4>
                          <Badge
                            variant={submission.state === 'open' ? 'default' : 'destructive'}
                            className={`ml-2 ${submission.state === 'open'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                              }`}
                          >
                            {getIssueStatus(submission)}
                          </Badge>
                        </div>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                          {submission.body.length > 150
                            ? `${submission.body.substring(0, 150)}...`
                            : submission.body
                          }
                        </p>

                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                          <span>Submitted: {formatDate(submission.created_at)}</span>
                          <a
                            href={submission.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            View on GitHub →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolGridContainer>
      </ToolBody>
    </ToolContainer>
  );
};

export default Submissions;
