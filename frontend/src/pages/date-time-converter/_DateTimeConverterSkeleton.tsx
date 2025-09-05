import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";

const DateTimeConverterSkeleton: React.FC = () => {
  return (
    <ToolContainer>
      <ToolHead
        name="Date Time Converter"
        description="Instantly convert any date or time between UTC, ISO, Unix, and other popular formats. Enter a date, pick from the calendar, or paste a timestamp to see all formats at once."
      />
      
      <div className="space-y-8">
        {/* Input Section Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-4 w-80" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Skeleton className="w-full h-10 rounded-md" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="w-[140px] h-10 rounded-md" />
                <Skeleton className="w-10 h-10 rounded-md" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Results Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-4 w-72" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Skeleton className="w-[160px] h-4" />
                  <div className="flex-1">
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

        {/* Footer Skeleton */}
        <div className="text-center">
          <Skeleton className="w-64 h-4 mx-auto" />
        </div>

        {/* Informational Sections Skeleton */}
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-7 w-80" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </ToolContainer>
  );
};

export default DateTimeConverterSkeleton;
