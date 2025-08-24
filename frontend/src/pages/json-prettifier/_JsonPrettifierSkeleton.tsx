import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";

const JsonPrettifierSkeleton: React.FC = () => {
  return (
    <ToolContainer>
      <ToolHead
        name="JSON Prettifier"
        description="Real-time JSON formatting, validation, and error detection"
      />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mb-4">
        {/* Left Panel - Input Editor Skeleton */}
        <div className="xl:col-span-5">
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-9 w-16" />
          </div>
          <Skeleton className="h-[500px] w-full rounded-lg" />
          <div className="mt-2">
            <Skeleton className="h-4 w-20" />
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
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-[500px] w-full rounded-lg" />
        </div>
      </div>

      {/* Shortcuts Section Skeleton */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 px-2 md:px-6 mb-6 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center mb-3">
          <Skeleton className="w-2 h-2 rounded-full mr-3" />
          <Skeleton className="h-6 w-32" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      {/* About Section Skeleton */}
      <div className="text-sm md:text-md bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 px-2 md:px-6 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center mb-3">
          <Skeleton className="w-2 h-2 rounded-full mr-3" />
          <Skeleton className="h-6 w-40" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    </ToolContainer>
  );
};

export default JsonPrettifierSkeleton;
