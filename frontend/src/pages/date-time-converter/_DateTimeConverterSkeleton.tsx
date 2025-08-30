import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";

const DateTimeConverterSkeleton: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Input Section Skeleton */}
      <div className="max-w-6xl">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Skeleton className="w-full h-10 rounded-md" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="w-[140px] h-10 rounded-md" />
              <Skeleton className="w-10 h-10 rounded-md" />
            </div>
          </div>
        </div>

        {/* Conversion Results Skeleton */}
        <div className="space-y-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex flex-row items-center gap-3">
              <Skeleton className="w-[160px] h-4" />
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-row items-center gap-3 border border-gray-300 dark:border-gray-700">
                  <div className="flex-1 min-w-0">
                    <Skeleton className="w-full h-4" />
                  </div>
                  <Skeleton className="w-8 h-8 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Skeleton */}
        <div className="mt-8 text-center">
          <Skeleton className="w-64 h-4 mx-auto" />
        </div>
      </div>

      {/* Informational Sections Skeleton */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <Skeleton className="h-6 w-64 mb-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DateTimeConverterSkeleton;
