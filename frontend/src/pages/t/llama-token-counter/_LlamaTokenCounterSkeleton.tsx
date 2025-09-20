import React from "react";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import { Card, CardContent } from "@/components/ui/card";

const LlamaTokenCounterSkeleton: React.FC = () => (
  <ToolBody>
    <ToolCardWrapper>
      <Card className="tool-card-bg animate-pulse">
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-2" />
              <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded" />
            </div>
            <div className="lg:col-span-1 space-y-4">
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-2" />
              <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded" />
            </div>
          </div>
          <div className="p-6 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-between">
            <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
          <div className="flex space-x-3">
            <div className="h-10 flex-1 bg-slate-200 dark:bg-slate-700 rounded" />
            <div className="h-10 flex-1 bg-slate-200 dark:bg-slate-700 rounded" />
          </div>
          <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto" />
          </div>
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

export default LlamaTokenCounterSkeleton;
