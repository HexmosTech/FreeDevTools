import { Skeleton } from "src/components/ui/skeleton";
import React from "react";

const RsaKeyPairGeneratorSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-3 w-40" />
          </div>
          <div className="flex items-end">
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border">
        <Skeleton className="h-6 w-32 mb-4" />
        <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
        </div>
      </div>

    </div>
  );
};

export default RsaKeyPairGeneratorSkeleton;