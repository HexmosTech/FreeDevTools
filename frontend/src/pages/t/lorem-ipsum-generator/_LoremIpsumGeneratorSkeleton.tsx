import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import React from "react";

const LoremIpsumGeneratorSkeleton: React.FC = () => {
  return (
    <ToolBody>
      <ToolCardWrapper>
        <Card className="tool-card-bg">
          <CardHeader>
            <Skeleton className="h-6 w-64" />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Generation Controls Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: Controls */}
              <div className="space-y-6">
                {/* Amount and Unit */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="space-y-3">
                  <Skeleton className="h-4 w-24" />
                  <div className="grid grid-cols-2 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} className="h-8 w-full" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Statistics */}
              <div className="space-y-4">
                <Skeleton className="h-4 w-28" />
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-center"
                    >
                      <Skeleton className="h-8 w-16 mx-auto mb-2" />
                      <Skeleton className="h-3 w-16 mx-auto" />
                    </div>
                  ))}
                </div>

                {/* Current Settings */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-28 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Text Output */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-32" />
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-8" />
                </div>
              </div>
              <Skeleton className="h-48 w-full rounded-lg" />
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <Skeleton className="h-9 w-32" />
              <Skeleton className="h-9 w-28" />
            </div>
          </CardContent>
        </Card>
      </ToolCardWrapper>

      <ToolContentCardWrapper>
        {/* About Lorem Ipsum Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-40" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Skeleton className="h-5 w-40" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <Skeleton className="h-4 flex-1" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <Skeleton className="h-5 w-32" />
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <Skeleton className="h-4 flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Skeleton className="h-20 w-full rounded" />
          </CardContent>
        </Card>

        {/* Features Card Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Tabs Skeleton */}
            <div className="w-full">
              <div className="grid w-full grid-cols-3 gap-2 mb-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-9 w-full" />
                ))}
              </div>

              {/* Tab Content Skeleton */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex items-center">
                        <Skeleton className="w-8 h-8 rounded-lg mr-3" />
                        <Skeleton className="h-5 w-40" />
                      </div>
                      <div className="ml-11 space-y-2">
                        {Array.from({ length: 4 }).map((_, j) => (
                          <Skeleton key={j} className="h-3 w-full" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ToolContentCardWrapper>
    </ToolBody>
  );
};

export default LoremIpsumGeneratorSkeleton;
