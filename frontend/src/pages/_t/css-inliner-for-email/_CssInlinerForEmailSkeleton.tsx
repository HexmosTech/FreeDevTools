import React from "react";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CssInlinerForEmailSkeleton: React.FC = () => {
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
            {/* Input and Output Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Section - Left Side */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-[200px] w-full" />
                </div>

                <div className="space-y-3">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-[200px] w-full" />
                </div>
              </div>

              {/* Output Section - Right Side */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-8 w-16" />
                </div>
                <Skeleton className="h-[420px] w-full" />
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <Skeleton className="h-10 w-16" />
                <Skeleton className="h-10 w-24" />
              </div>
              <Skeleton className="h-10 w-20" />
            </div>

            {/* Conversion Stats */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-3 w-12" />
                </div>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-3 w-18" />
                  <Skeleton className="h-3 w-12" />
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
              <Skeleton className="h-6 w-56" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <Skeleton className="h-5 w-24" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                    <Skeleton className="h-3 w-4/5" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-5 w-28" />
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
                <Skeleton className="h-3 w-32 mb-2" />
                <Skeleton className="h-3 w-full mb-4" />
                <Skeleton className="h-3 w-32 mb-2" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-72" />
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

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
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

export default CssInlinerForEmailSkeleton;
