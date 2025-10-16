import React from "react";

const SvgIconsSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats skeleton */}
      <div className="text-center">
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="text-center">
            <div className="h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-2"></div>
            <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
          </div>
          <div className="text-center">
            <div className="h-8 w-20 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-2"></div>
            <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Pagination info skeleton */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6 mt-6">
        <div className="h-4 w-64 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
      </div>

      {/* Categories grid skeleton */}
      <div className="mt-10 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="block p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-transparent rounded-lg"
            >
              <div className="text-center space-y-3">
                <div className="h-12 w-12 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-3"></div>
                <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
                <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
                <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination skeleton */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-8 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-8 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
        <div className="h-4 w-48 bg-slate-200 dark:bg-slate-700 rounded mx-auto"></div>
      </div>
    </div >
  );
};

export default SvgIconsSkeleton;
