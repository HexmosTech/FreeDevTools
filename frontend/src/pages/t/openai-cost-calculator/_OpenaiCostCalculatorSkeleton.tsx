import React from "react";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import { Card, CardContent } from "@/components/ui/card";

const OpenaiCostCalculatorSkeleton: React.FC = () => (
  <ToolBody>
    <ToolCardWrapper>
      <Card className="tool-card-bg animate-pulse">
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
            <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
            <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
          </div>
          <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded w-full mb-4" />
        </CardContent>
      </Card>
    </ToolCardWrapper>
    <ToolContentCardWrapper>
      <Card className="animate-pulse">
        <CardContent className="space-y-4">
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
          <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded" />
        </CardContent>
      </Card>
      <Card className="animate-pulse">
        <CardContent className="space-y-4">
          <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
          <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded" />
        </CardContent>
      </Card>
    </ToolContentCardWrapper>
  </ToolBody>
);

export default OpenaiCostCalculatorSkeleton;
