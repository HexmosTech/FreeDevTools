import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const RgbToHexSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Color Conversion Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RGB Input Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-5 w-20 mb-2" />
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Skeleton className="h-4 w-8 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-10 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-8 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>

        {/* HEX Output Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-5 w-16 mb-2" />
          <div className="flex items-center space-x-4">
            <Skeleton className="flex-1 h-10" />
            <Skeleton className="w-12 h-12 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Actions Skeleton */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <Skeleton className="h-10 w-16" />
        <Skeleton className="h-8 w-20" />
      </div>

      {/* Format Outputs Skeleton */}
      <div className="space-y-4">
        <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
        <Skeleton className="h-5 w-24 mb-3" />
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4 py-2">
              <Skeleton className="h-4 w-12" />
              <div className="flex-1 flex items-center space-x-2">
                <Skeleton className="flex-1 h-10" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Banner Skeleton */}
      <Skeleton className="h-16 w-full rounded-lg" />
    </div>
  );
};

export default RgbToHexSkeleton;
