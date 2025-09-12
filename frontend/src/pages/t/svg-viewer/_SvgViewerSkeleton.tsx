import React from "react";
import ToolBody from "../../../components/tool/ToolBody";
import ToolCardWrapper from "../../../components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "../../../components/tool/ToolContentCardWrapper";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Skeleton } from "../../../components/ui/skeleton";

const SvgViewerSkeleton: React.FC = () => {
  return (
    <ToolBody>
      <ToolCardWrapper>
        {/* Main Tool Card Skeleton */}
        <Card className="tool-card-bg">
          <CardContent className="space-y-6 pt-6">
            {/* Tabs Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-10 w-full rounded-lg" />

              {/* Input Section */}
              <div className="space-y-3">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-40 w-full rounded-lg" />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-4">
                <Skeleton className="h-4 w-20" />
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-16 rounded-md" />
                  <Skeleton className="h-9 w-24 rounded-md" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preview Card Skeleton */}
        <Card className="tool-card-bg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-32" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8 rounded-md" />
                <Skeleton className="h-8 w-20 rounded-md" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* SVG Info Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>

              {/* Preview Area Skeleton */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-900">
                <div className="flex items-center justify-center min-h-[200px]">
                  <Skeleton className="h-32 w-32 rounded-lg" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ToolCardWrapper>

      <ToolContentCardWrapper>
        {/* About SVG Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-80" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-16 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
            <Skeleton className="h-20 w-full rounded" />
          </CardContent>
        </Card>

        {/* Optimization Tips Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-96" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
              <div className="space-y-3">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-16 w-full" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
            <Skeleton className="h-16 w-full rounded" />
          </CardContent>
        </Card>

        {/* SVG Elements Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-72" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
              <div className="space-y-3">
                <Skeleton className="h-5 w-36" />
                <div className="space-y-2">
                  <Skeleton className="h-12 w-full rounded" />
                  <Skeleton className="h-12 w-full rounded" />
                  <Skeleton className="h-12 w-full rounded" />
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-5 w-32" />
                <div className="space-y-2">
                  <Skeleton className="h-12 w-full rounded" />
                  <Skeleton className="h-12 w-full rounded" />
                  <Skeleton className="h-12 w-full rounded" />
                </div>
              </div>
            </div>
            <Skeleton className="h-20 w-full rounded" />
          </CardContent>
        </Card>
      </ToolContentCardWrapper>

      {/* Info Banner Skeleton */}
      <div className="mt-6">
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
    </ToolBody>
  );
};

export default SvgViewerSkeleton;
