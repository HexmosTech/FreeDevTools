import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const DockerfileLinterSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left Column - Input */}
        <div className="space-y-4">
          <div>
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="w-full h-80 rounded-lg" />
          </div>

          <div className="flex space-x-3">
            <Skeleton className="w-40 h-10 rounded-lg" />
            <Skeleton className="w-20 h-10 rounded-lg" />
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="w-8 h-8 rounded-md" />
          </div>

          {/* Summary Section */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
            <Skeleton className="h-6 w-20 mb-3" />
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Skeleton className="w-4 h-4 rounded" />
                <Skeleton className="w-16 h-4" />
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="w-4 h-4 rounded" />
                <Skeleton className="w-20 h-4" />
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="w-4 h-4 rounded" />
                <Skeleton className="w-12 h-4" />
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="border border-slate-300 dark:border-slate-600 rounded-lg">
            <div className="p-4">
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Skeleton className="w-6 h-6 rounded" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Skeleton className="w-16 h-4" />
                        <Skeleton className="w-20 h-6 rounded-full" />
                        <Skeleton className="w-24 h-4" />
                      </div>
                      <Skeleton className="w-full h-4" />
                      <Skeleton className="w-3/4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
        <Skeleton className="h-6 w-48 mb-3" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          
          <div className="space-y-2">
            <Skeleton className="h-5 w-24 mb-2" />
            <div className="ml-4 space-y-1">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-4 w-full" />
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Skeleton className="h-5 w-20 mb-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Skeleton className="w-4 h-4 rounded" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DockerfileLinterSkeleton;
