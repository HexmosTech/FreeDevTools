import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const UserAgentParserSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Main Tool Card */}
      <Card className="tool-card-bg">
        <CardContent className="space-y-6 pt-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-3 w-80" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-8 w-36" />
              <Skeleton className="h-8 w-28" />
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4 pt-4 border-t">
            <Skeleton className="h-4 w-32" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i}>
                  <CardContent className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-20" />
                    </div>

                    <div className="space-y-3">
                      {[1, 2].map((j) => (
                        <div key={j} className="space-y-1">
                          <Skeleton className="h-3 w-16" />
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-4 w-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Banner */}
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
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

export default UserAgentParserSkeleton;
