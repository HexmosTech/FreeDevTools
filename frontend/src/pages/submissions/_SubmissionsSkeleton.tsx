import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import ToolHead from "@/components/tool/ToolHead";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SubmissionsSkeleton: React.FC = () => {
  return (
    <ToolContainer className="mt-16">
      <ToolHead
        showAdBanner={false}
        name="Tool Submissions"
        description="Submit your tool ideas and feature requests for Free DevTools. Help us build better developer tools by sharing your suggestions and requirements."
      />

      <ToolBody>
        <ToolGridContainer>
          {/* Submission Form Skeleton */}
          <ToolCardWrapper>
            <Card className="tool-card-bg-grid">
              <CardHeader>
                <Skeleton className="h-6 w-40" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-4 w-20 mb-2" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                  <div className="flex space-x-3">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 w-20" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* Recent Submissions Skeleton */}
          <ToolContentCardWrapper>
            <Card className="tool-content-card-bg-grid">
              <CardHeader>
                <Skeleton className="h-6 w-48" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-6 w-20 ml-2" />
                      </div>
                      <Skeleton className="h-4 w-full mb-1" />
                      <Skeleton className="h-4 w-2/3 mb-3" />
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-3 w-24" />
                        <Skeleton className="h-3 w-32" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolGridContainer>
      </ToolBody>
    </ToolContainer>
  );
};

export default SubmissionsSkeleton;
