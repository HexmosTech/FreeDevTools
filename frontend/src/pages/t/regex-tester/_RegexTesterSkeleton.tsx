import React from "react";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const RegexTesterSkeleton: React.FC = () => {
  return (
    <ToolBody>
      <ToolCardWrapper>
        {/* Main Tool Card Skeleton */}
        <Card className="tool-card-bg">
          <CardContent className="space-y-6 pt-6">
            {/* Pattern Input Skeleton */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-8 w-24 rounded-md" />
              </div>
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>

            {/* Flags Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-16" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
              </div>
            </div>

            {/* Test String Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>

            {/* Actions Skeleton */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <Skeleton className="h-4 w-32" />
              <div className="flex space-x-2">
                <Skeleton className="h-9 w-16 rounded-md" />
                <Skeleton className="h-9 w-24 rounded-md" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Card Skeleton */}
        <Card className="tool-card-bg">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 w-40" />

              {/* Highlighted Text Skeleton */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-800">
                <Skeleton className="h-3 w-48 mb-2" />
                <Skeleton className="h-20 w-full" />
              </div>

              {/* Matches List Skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <div className="space-y-1">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded"
                      >
                        <Skeleton className="h-4 w-32" />
                        <div className="flex items-center space-x-2">
                          <Skeleton className="h-3 w-16" />
                          <Skeleton className="h-6 w-6" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ToolCardWrapper>

      <ToolContentCardWrapper>
        {/* About Regex Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Skeleton className="h-5 w-32" />
                <div className="space-y-2">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-5 w-32" />
                <div className="space-y-2">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>
              </div>
            </div>

            <Skeleton className="h-20 w-full rounded-lg" />
          </CardContent>
        </Card>

        {/* Use Cases Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-64" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                {Array(2)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-16 w-full rounded" />
                    </div>
                  ))}
              </div>
              <div className="space-y-4">
                {Array(2)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-16 w-full rounded" />
                    </div>
                  ))}
              </div>
            </div>
            <Skeleton className="h-16 w-full rounded-lg" />
          </CardContent>
        </Card>
      </ToolContentCardWrapper>
    </ToolBody>
  );
};

export default RegexTesterSkeleton;
