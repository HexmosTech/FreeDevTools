import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UuidGeneratorSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* UUID Generation Controls Skeleton */}
      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Version Selection */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-3 w-32" />
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-3 w-40" />
          </div>

          {/* Format Options */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center mb-6">
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Generated UUIDs Display */}
        <div className="space-y-4">
          <Skeleton className="h-px w-full" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-32" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
          <Skeleton className="h-10 w-full" />
        </div>

        {/* Info Banner */}
        <Skeleton className="h-12 w-full mt-6" />
      </div>

      {/* UUID Analyzer Skeleton */}
      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border">
        <Skeleton className="h-6 w-32 mb-4" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* Content Cards Skeleton */}
      <div className="space-y-6">
        {/* About UUIDs Card */}
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border">
          <Skeleton className="h-6 w-80 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-3">
              <Skeleton className="h-5 w-32" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start">
                    <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-5 w-32" />
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-start">
                    <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Skeleton className="h-20 w-full mt-6" />
        </div>

        {/* Best Practices Card */}
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border">
          <Skeleton className="h-6 w-96 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <Skeleton className="w-8 h-8 rounded-lg mr-3" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="ml-11 space-y-3">
                {[1, 2, 3, 4].map((i) => (
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
                <Skeleton className="h-5 w-40" />
              </div>
              <div className="ml-11 space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start">
                    <Skeleton className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Skeleton className="h-16 w-full mt-6" />
        </div>

        {/* Technical Standards Card */}
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border">
          <Skeleton className="h-6 w-72 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div className="space-y-6 mt-6">
            <div>
              <Skeleton className="h-5 w-40 mb-3" />
              <Skeleton className="h-24 w-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Skeleton className="h-5 w-48 mb-3" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              </div>
              <div>
                <Skeleton className="h-5 w-32 mb-3" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              </div>
            </div>

            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UuidGeneratorSkeleton;
