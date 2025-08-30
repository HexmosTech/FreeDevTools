import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";


const JsonPrettifierSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mb-4">
        {/* Left Panel - Input Editor Skeleton */}
        <div className="xl:col-span-5">
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-9 w-16" />
          </div>
          <Skeleton className="h-[500px] w-full rounded-lg" />
          <div className="mt-2">
            <Skeleton className="h-6 w-20" />
          </div>
        </div>

        {/* Center Panel - Controls Skeleton */}
        <div className="xl:col-span-2 flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <Skeleton className="h-4 w-16 mb-3 mx-auto" />
            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="h-6 w-8" />
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
            <Skeleton className="h-3 w-12 mt-1 mx-auto" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Right Panel - Output Editor Skeleton */}
        <div className="xl:col-span-5">
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>
      </div>

      {/* Shortcuts Section Skeleton */}
      <Card className="bg-slate-50 dark:bg-slate-800/50 mb-6 border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <div className="flex items-center">
            <Skeleton className="w-2 h-2 rounded-full mr-3" />
            <Skeleton className="h-6 w-40" />
          </div>
        </CardHeader>
        <CardContent className="px-2 md:px-6">
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </CardContent>
      </Card>

      {/* About Section Skeleton */}
      <Card className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
        <CardHeader>
          <div className="flex items-center">
            <Skeleton className="w-2 h-2 rounded-full mr-3" />
            <Skeleton className="h-6 w-40" />
          </div>
        </CardHeader>
        <CardContent className="px-2 md:px-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JsonPrettifierSkeleton;
