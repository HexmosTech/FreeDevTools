import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SqlMinifierSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Tool Card Skeleton */}
      <div className="border rounded-lg p-6 bg-white dark:bg-slate-800 space-y-6">
        {/* Input and Output Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SQL Input - Left */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-8 w-32" />
            </div>
            <Skeleton className="w-full h-80 rounded-lg" />
          </div>

          {/* Minified Output - Right */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-8 w-16" />
            </div>
            <Skeleton className="w-full h-80 rounded-lg" />
          </div>
        </div>

        {/* Statistics and Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {/* Options */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>

          {/* Statistics */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>

          {/* Action Button */}
          <Skeleton className="h-9 w-16" />
        </div>

        {/* Info Banner */}
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      {/* Content Cards Skeleton */}
      <div className="space-y-6">
        {/* About Card */}
        <div className="border rounded-lg p-6 bg-white dark:bg-slate-800">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-3">
              <Skeleton className="h-5 w-40" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-5 w-36" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Card */}
        <div className="border rounded-lg p-6 bg-white dark:bg-slate-800">
          <Skeleton className="h-6 w-64 mb-4" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Skeleton className="h-5 w-48" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-5 w-44" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SqlMinifierSkeleton;
