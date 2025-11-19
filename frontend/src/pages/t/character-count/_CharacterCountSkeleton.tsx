import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CharacterCountSkeleton: React.FC = () => (
  <Card className="tool-card-bg">
    <CardContent className="space-y-6 pt-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>
      <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded mb-6" />
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto" />
    </CardContent>
  </Card>
);

export default CharacterCountSkeleton;
