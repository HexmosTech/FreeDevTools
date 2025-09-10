import ToolBody from "@/components/tool/ToolBody";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const DateTimeConverterSkeleton: React.FC = () => {
  return (
    <ToolBody>
      <ToolGridContainer>
        {/* Input Section Skeleton */}
        <Card className="w-full break-inside-avoid mb-6 dark:bg-slate-900">
          <CardHeader>
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-4 w-80" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 min-w-0">
                  <Skeleton className="w-full h-10 rounded-md" />
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Skeleton className="min-w-[140px] w-full sm:w-auto h-10 rounded-md" />
                  <Skeleton className="w-10 h-10 rounded-md" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Results Skeleton */}
        <Card className="w-full break-inside-avoid mb-6 dark:bg-slate-900">
          <CardHeader>
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-4 w-72" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Skeleton className="w-[140px] sm:w-[160px] h-4" />
                  <div className="flex-1 min-w-0">
                    <div className="bg-muted rounded-lg p-3 flex flex-col sm:flex-row sm:items-center gap-3 border">
                      <div className="flex-1 min-w-0">
                        <Skeleton className="w-full h-4" />
                      </div>
                      <Skeleton className="w-8 h-8 rounded-md" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Best Practices for Time Zones Skeleton */}
        <Card className="w-full break-inside-avoid mb-6 bg-slate-200 dark:bg-slate-950">
          <CardHeader>
            <Skeleton className="h-7 w-80" />
          </CardHeader>
          <CardContent className="space-y-4 max-h-[500px] overflow-y-auto">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-32 w-full rounded" />
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>

        {/* Timestamps Section Skeleton */}
        <Card className="w-full break-inside-avoid mb-6 bg-slate-200 dark:bg-slate-950">
          <CardHeader>
            <Skeleton className="h-7 w-64" />
          </CardHeader>
          <CardContent className="space-y-4 max-h-[500px] overflow-y-auto">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-16 w-full rounded" />
          </CardContent>
        </Card>

        {/* Past and Future Events Section Skeleton */}
        <Card className="w-full break-inside-avoid mb-6 bg-slate-200 dark:bg-slate-950">
          <CardHeader>
            <Skeleton className="h-7 w-96" />
          </CardHeader>
          <CardContent className="space-y-4 max-h-[500px] overflow-y-auto">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-16 w-full rounded" />
          </CardContent>
        </Card>
      </ToolGridContainer>

      {/* Footer Skeleton */}
      <div className="text-center text-muted-foreground mt-6">
        <Skeleton className="w-80 h-4 mx-auto" />
      </div>
    </ToolBody>
  );
};

export default DateTimeConverterSkeleton;
