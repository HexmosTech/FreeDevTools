import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ZstdCompressSkeleton: React.FC = () => {
  return (
    <ToolBody>
      <ToolGridContainer>
        <ToolCardWrapper>
          <Card className="tool-card-bg-grid">
            <CardHeader>
              <Skeleton className="h-6 w-1/3" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="w-full h-48" />
              <div className="flex space-x-3">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 w-20" />
              </div>
            </CardContent>
          </Card>
        </ToolCardWrapper>
        <ToolCardWrapper>
          <Card className="tool-card-bg-grid">
            <CardHeader>
              <Skeleton className="h-6 w-1/3" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="w-full h-32" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        </ToolCardWrapper>
        <ToolContentCardWrapper>
          <Card className="tool-content-card-bg-grid">
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </CardContent>
          </Card>
        </ToolContentCardWrapper>
      </ToolGridContainer>
    </ToolBody>
  );
};

export default ZstdCompressSkeleton;
