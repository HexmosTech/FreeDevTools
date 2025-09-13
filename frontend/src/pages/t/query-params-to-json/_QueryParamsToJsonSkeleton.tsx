import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";

const QueryParamsToJsonSkeleton: React.FC = () => {
  return (
    <ToolBody>
      <ToolGridContainer>
        <ToolCardWrapper>
          <Card className="tool-card-bg-grid">
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-32 w-full" />
              </div>
              <Skeleton className="h-10 w-20" />
            </CardContent>
          </Card>
        </ToolCardWrapper>

        <ToolContentCardWrapper>
          <Card className="tool-content-card-bg-grid">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-8 rounded" />
              </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-48 w-full" />
            </CardContent>
          </Card>
        </ToolContentCardWrapper>

        <ToolContentCardWrapper>
          <Card className="tool-content-card-bg-grid">
            <CardHeader>
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-48 mt-2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        </ToolContentCardWrapper>

        <ToolContentCardWrapper>
          <Card className="tool-content-card-bg-grid">
            <CardHeader>
              <Skeleton className="h-6 w-20" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Skeleton className="h-4 w-4 mt-0.5" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ToolContentCardWrapper>
      </ToolGridContainer>
    </ToolBody>
  );
};

export default QueryParamsToJsonSkeleton;
