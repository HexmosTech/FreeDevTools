import { Skeleton } from 'src/components/ui/skeleton';
import React from 'react';

const HtmlToMarkdownSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-8 w-32" />
            </div>
            <Skeleton className="w-full h-64 rounded-lg" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-8 w-16" />
            </div>
            <Skeleton className="w-full h-64 rounded-lg" />
          </div>
        </div>
        <div className="flex justify-end">
            <Skeleton className="h-8 w-16" />
        </div>
      </div>
    </div>
  );
};

export default HtmlToMarkdownSkeleton;