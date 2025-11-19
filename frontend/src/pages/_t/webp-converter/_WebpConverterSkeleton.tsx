import React from "react";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const WebpConverterSkeleton: React.FC = () => {
  return (
    <ToolBody>
      {/* TOOL CARDS SECTION */}
      <ToolCardWrapper>
        <Card className="tool-card-bg">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-48" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload Area */}
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8">
                <Skeleton className="h-12 w-12 mx-auto mb-4" />
                <div className="space-y-2 text-center">
                  <Skeleton className="h-4 w-64 mx-auto" />
                  <Skeleton className="h-3 w-48 mx-auto" />
                </div>
              </div>
            </div>

            {/* Selected Files */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-24 mt-1" />
                </div>
                <Skeleton className="h-9 w-20" />
              </div>

              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 border rounded-lg bg-muted/30"
                  >
                    <div className="flex items-center min-w-0 flex-1">
                      <Skeleton className="h-8 w-8 mr-3" />
                      <div className="min-w-0 flex-1">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-16 mt-1" />
                      </div>
                    </div>
                    <Skeleton className="h-8 w-8" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Settings */}
            <div className="space-y-4 pt-4 border-t">
              <div className="space-y-3">
                <Skeleton className="h-5 w-20" />
                <div className="flex items-center gap-4">
                  <Skeleton className="h-2 flex-1" />
                  <Skeleton className="h-10 w-20" />
                </div>
                <Skeleton className="h-3 w-full" />
              </div>

              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>

            {/* Convert Actions */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex gap-3">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>

            {/* Conversion Results */}
            <div className="space-y-4 pt-4 border-t">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Skeleton className="h-6 w-64 mx-auto mb-4" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <Skeleton className="h-4 w-20 mb-1 mx-auto" />
                    <Skeleton className="h-6 w-16 mx-auto" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Skeleton className="h-6 w-6" />
                  </div>
                  <div>
                    <Skeleton className="h-4 w-16 mb-1 mx-auto" />
                    <Skeleton className="h-6 w-16 mx-auto" />
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <Skeleton className="h-8 w-32 mx-auto mb-2" />
                  <Skeleton className="h-5 w-24 mx-auto" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ToolCardWrapper>

      {/* CONTENT CARDS SECTION */}
      <ToolContentCardWrapper>
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-64" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <Skeleton className="h-5 w-28" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                    <Skeleton className="h-3 w-4/5" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-5 w-24" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                    <Skeleton className="h-3 w-4/5" />
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 mt-6">
                <Skeleton className="h-5 w-32 mb-2" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-80" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-8 w-8 rounded-lg" />
                      <Skeleton className="h-5 w-32" />
                    </div>
                    <div className="ml-11 space-y-3">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-5/6" />
                      <Skeleton className="h-3 w-4/5" />
                      <Skeleton className="h-3 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                <Skeleton className="h-5 w-48 mb-3" />
                <div className="bg-slate-800 dark:bg-slate-900 rounded p-4">
                  <Skeleton className="h-3 w-full mb-2" />
                  <Skeleton className="h-3 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </ToolContentCardWrapper>
    </ToolBody>
  );
};

export default WebpConverterSkeleton;
