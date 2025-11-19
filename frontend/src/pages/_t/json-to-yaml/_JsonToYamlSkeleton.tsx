import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const JsonToYamlSkeleton: React.FC = () => {
  return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Skeleton className="h-5 w-16 mb-2" />
              <Skeleton className="w-full h-32 rounded-lg" />
            </div>

            <div className="flex space-x-3">
              <Skeleton className="flex-1 h-10 rounded-lg" />
              <Skeleton className="w-20 h-10 rounded-lg" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Skeleton className="h-5 w-20 mb-2" />
              <Skeleton className="w-full h-32 rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <Skeleton className="h-6 w-32 mb-3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
  );
};

export default JsonToYamlSkeleton;
