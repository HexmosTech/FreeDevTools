import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const McpSkeleton: React.FC = () => {
  return (
    <ToolBody>
      {/* Overview Stats */}
      <ToolContentCardWrapper>
        <Card className="p-6">
          <div className="text-center space-y-4">
            <Skeleton className="h-8 w-80 mx-auto" />
            <Skeleton className="h-6 w-96 mx-auto" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-12 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </ToolContentCardWrapper>

      {/* Main Navigation */}
      <ToolGridContainer>
        {[...Array(3)].map((_, i) => (
          <ToolCardWrapper key={i}>
            <Card className="tool-card-bg-grid p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-8 w-24" />
                </div>
              </div>
            </Card>
          </ToolCardWrapper>
        ))}
      </ToolGridContainer>

      {/* Features */}
      <ToolContentCardWrapper>
        <Card className="p-6">
          <Skeleton className="h-6 w-64 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton className="h-8 w-8 mx-auto" />
                <Skeleton className="h-5 w-24 mx-auto" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </Card>
      </ToolContentCardWrapper>

      {/* About MCP */}
      <ToolContentCardWrapper>
        <Card className="p-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </Card>
      </ToolContentCardWrapper>
    </ToolBody>
  );
};

export default McpSkeleton;
