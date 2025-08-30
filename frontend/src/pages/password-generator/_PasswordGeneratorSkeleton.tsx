import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const PasswordGeneratorSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Generated Password Display Skeleton */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-9 w-32" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4">
            <Skeleton className="w-full h-16 rounded-lg" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="w-full h-2 rounded-full" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Presets Skeleton */}
      <div>
        <Skeleton className="h-6 w-32 mb-3" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-20 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Password Type Selection Skeleton */}
      <div>
        <Skeleton className="h-6 w-32 mb-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Options Skeleton */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-8 w-40" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Skeleton className="h-16 w-full rounded-lg" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-6 w-full" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="space-y-2">
              {[1, 2].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Educational Video Skeleton */}
      <div>
        <Skeleton className="h-6 w-64 mb-4" />
        <Card>
          <CardContent className="p-6">
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="w-full h-64 rounded-lg" />
          </CardContent>
        </Card>
      </div>

      {/* Security Information Skeleton */}
      <div className="space-y-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-80" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PasswordGeneratorSkeleton;
