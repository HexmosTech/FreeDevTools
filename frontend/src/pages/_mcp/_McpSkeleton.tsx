import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const McpSkeleton: React.FC = () => {
  return (
    <ToolContainer>
      {/* Overview Stats */}
      <div className="text-center">
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="text-center">
            <Skeleton className="h-8 w-16 mx-auto mb-2" />
            <Skeleton className="h-4 w-20 mx-auto" />
          </div>
          <div className="text-center">
            <Skeleton className="h-8 w-20 mx-auto mb-2" />
            <Skeleton className="h-4 w-24 mx-auto" />
          </div>
        </div>
      </div>

      {/* Pagination Info */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6 mt-6">
        <div className="text-center">
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="mt-10 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="block p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-transparent rounded-lg"
            >
              <div className="text-center space-y-3">
                <Skeleton className="h-12 w-12 mx-auto mb-3" />
                <Skeleton className="h-6 w-32 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
                <Skeleton className="h-6 w-20 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-20" />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Skeleton className="h-4 w-48" />
        </div>
      </div>

      {/* Features */}
      <div className="mb-10 mt-6">
        <ToolContentCardWrapper>
          <Card className="p-6">
            <Skeleton className="h-6 w-64 mx-auto mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="text-center space-y-2">
                  <Skeleton className="h-8 w-8 mx-auto" />
                  <Skeleton className="h-5 w-24 mx-auto" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </Card>
        </ToolContentCardWrapper>
      </div>

      {/* Credits Section */}
      <div className="mt-10 pt-6 mb-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap gap-4">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-48" />
        </div>
      </div>
    </ToolContainer >
  );
};

export default McpSkeleton;
