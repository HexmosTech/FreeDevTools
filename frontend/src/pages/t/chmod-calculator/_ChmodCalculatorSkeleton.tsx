import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ChmodCalculatorSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Main Tool Card */}
      <Card className="tool-card-bg">
        <CardContent className="space-y-6 pt-6">
          {/* Permission Matrix Header */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-8 w-20" />
          </div>

          {/* Desktop Table Skeleton */}
          <div className="hidden md:block">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 p-3">
                <div className="grid grid-cols-4 gap-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
              <div className="space-y-3 p-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 items-center">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-4 w-4 mx-auto" />
                    <Skeleton className="h-4 w-4 mx-auto" />
                    <Skeleton className="h-4 w-4 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Cards Skeleton */}
          <div className="md:hidden space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="space-y-3 pt-4">
                  <Skeleton className="h-5 w-24" />
                  <div className="grid grid-cols-3 gap-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Section */}
          <div className="space-y-4 pt-4 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center space-y-3">
                <Skeleton className="h-4 w-24 mx-auto" />
                <Skeleton className="h-16 w-32 mx-auto" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-32 mx-auto" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              <div className="text-center space-y-3">
                <Skeleton className="h-4 w-32 mx-auto" />
                <Skeleton className="h-16 w-40 mx-auto" />
                <div className="space-y-1">
                  <Skeleton className="h-3 w-20 mx-auto" />
                  <Skeleton className="h-3 w-20 mx-auto" />
                  <Skeleton className="h-3 w-20 mx-auto" />
                </div>
              </div>
            </div>

            {/* Command Section */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <div className="flex gap-2">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 w-10" />
              </div>
              <Skeleton className="h-8 w-full" />
            </div>

            {/* Presets */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-32" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <Skeleton className="h-4 w-80 mx-auto" />
          </div>
        </CardContent>
      </Card>

      {/* Content Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <Skeleton className="h-6 w-48" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <Skeleton className="h-6 w-56" />
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-3 w-64" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChmodCalculatorSkeleton;
