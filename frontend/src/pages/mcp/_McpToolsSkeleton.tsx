import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import ToolBody from "@/components/tool/ToolBody";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import { Card } from "@/components/ui/card";

const McpToolsSkeleton: React.FC = () => {
  return (
    <ToolBody>
      <ToolContentCardWrapper>
        <Card className="p-6">
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-10 w-40" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </ToolContentCardWrapper>

      <ToolGridContainer>
        {[...Array(12)].map((_, i) => (
          <ToolCardWrapper key={i}>
            <Card className="tool-card-bg-grid p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="h-5 w-5" />
                      <Skeleton className="h-6 w-32" />
                    </div>
                    <Skeleton className="h-4 w-40" />
                  </div>
                  <Skeleton className="h-8 w-8" />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>

                {/* Category and License */}
                <div className="flex justify-between">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-20" />
                </div>

                {/* Server Info */}
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            </Card>
          </ToolCardWrapper>
        ))}
      </ToolGridContainer>

      {/* Pagination */}
      <ToolContentCardWrapper>
        <Card className="p-6">
          <div className="flex justify-center">
            <div className="flex gap-2">
              <Skeleton className="h-10 w-20" />
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-16" />
            </div>
          </div>
        </Card>
      </ToolContentCardWrapper>
    </ToolBody>
  );
};

export default McpToolsSkeleton;
