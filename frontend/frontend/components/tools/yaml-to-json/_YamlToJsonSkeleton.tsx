import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const YamlToJsonSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Main conversion interface skeleton */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* YAML Input Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-8 w-32" />
            </div>
            <Skeleton className="w-full h-48 rounded-lg" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-8 w-16" />
            </div>
          </div>

          {/* JSON Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-8 w-16" />
            </div>
            <Skeleton className="w-full h-48 rounded-lg" />
          </div>
        </div>

        {/* Info Banner */}
        <Skeleton className="w-full h-12 rounded-lg" />
      </div>

      {/* Content Cards Section */}
      <div className="space-y-6">
        {/* About YAML to JSON Card */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <Skeleton className="h-6 w-64 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-3">
              <Skeleton className="h-5 w-32" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-5 w-32" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Skeleton className="h-5 w-48 mb-3" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-24 w-full rounded" />
              </div>
              <div>
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-24 w-full rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Common Use Cases Card */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <Skeleton className="h-6 w-40 mb-4" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center">
                  <Skeleton className="w-8 h-8 rounded-lg mr-3" />
                  <Skeleton className="h-5 w-48" />
                </div>
                <div className="ml-11 space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
          <Skeleton className="h-16 w-full rounded-lg mt-6" />
        </div>

        {/* YAML Syntax Guide Card */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <Skeleton className="h-6 w-56 mb-4" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <Skeleton className="h-5 w-32" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-20 mb-1" />
                    <Skeleton className="h-16 w-full rounded" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-5 w-24" />
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-20 mb-1" />
                    <Skeleton className="h-20 w-full rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Skeleton className="h-5 w-40 mb-3" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-20 w-full rounded" />
              </div>
              <div>
                <Skeleton className="h-4 w-40 mb-2" />
                <Skeleton className="h-20 w-full rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YamlToJsonSkeleton;
