import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import React from "react";

const DiffCheckerSkeleton: React.FC = () => {
  return (
    <ToolBody>
      <ToolCardWrapper>
        <Card className="tool-card-bg">
          <CardContent className="space-y-6 pt-6">
            {/* Main Comparison Interface Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Text - Original */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-8 w-24" />
                </div>
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="h-4 w-32" />
              </div>

              {/* Right Text - Modified */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-8 w-20" />
                </div>
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>

            {/* Comparison Options Skeleton */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-40" />
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
            </div>

            {/* Diff Results Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-px w-full" />

              {/* Statistics Skeleton */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-3 w-12 mx-auto" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-3 w-16 mx-auto" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-3 w-16 mx-auto" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-3 w-20 mx-auto" />
                </div>
              </div>

              {/* Diff Display Skeleton */}
              <div className="border border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden">
                <div className="bg-slate-100 dark:bg-slate-700 px-4 py-2 border-b">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-8" />
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Info Banner Skeleton */}
            <Skeleton className="h-12 w-full rounded-lg" />
          </CardContent>
        </Card>
      </ToolCardWrapper>

      <ToolContentCardWrapper>
        {/* About Diff Checking Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-64" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <Skeleton className="h-5 w-32" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <Skeleton className="h-8 w-full" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-5 w-32" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <Skeleton className="h-8 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Skeleton className="h-5 w-40 mb-2" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center">
                    <Skeleton className="w-4 h-4 rounded mr-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Features Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-64" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Skeleton className="w-8 h-8 rounded-lg mr-3" />
                  <Skeleton className="h-5 w-40" />
                </div>
                <div className="ml-11 space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <Skeleton className="h-8 w-full" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Skeleton className="w-8 h-8 rounded-lg mr-3" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <div className="ml-11 space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <Skeleton className="h-8 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Skeleton className="h-16 w-full rounded-lg" />
          </CardContent>
        </Card>
      </ToolContentCardWrapper>
    </ToolBody>
  );
};

export default DiffCheckerSkeleton;
