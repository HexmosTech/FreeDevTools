
import React, { useState, useMemo } from 'react';

// Extract filename without extension and format it
function formatFilename(filename: string): string {
  const nameWithoutExt = filename.replace('.json', '');
  const parts = nameWithoutExt.split('_');

  if (parts[0] === 'freedevtools') {
    if (parts.length === 3) {
      return ''; // freedevtools__desktop_20251012_114320.json -> (empty)
    } else {
      return parts.slice(1, -2).join('_'); // freedevtools_emojis_activities__desktop_20251012_114724.json -> emojis_activities
    }
  }
  return nameWithoutExt;
}

// Get metric value with tooltip
function MetricCell({ metric, title }: { metric: any; title: string }) {
  if (!metric) {
    return <span className="text-gray-400">-</span>;
  }

  const displayValue = metric.displayValue || metric.numericValue || '-';
  const tooltipContent = metric ? JSON.stringify(metric, null, 2) : 'No data';

  return (
    <div className="group relative">
      <span className="cursor-help text-sm font-medium">{displayValue}</span>
      <div className="absolute bottom-full left-0 mb-2 w-96 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none">
        <div className="font-semibold mb-1">{title}</div>
        <pre className="whitespace-pre-wrap break-words">{tooltipContent}</pre>
        <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
}

interface JsonFile {
  filename: string;
  url: string;
  timestamp: string;
  data: any;
}

interface PageSpeedAnalyticsProps {
  jsonFiles: JsonFile[];
}

export default function PageSpeedAnalytics({ jsonFiles }: PageSpeedAnalyticsProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">PageSpeed Analytics</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-5">Hover over values to see detailed metrics</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Device</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Speed Index</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">FCP</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">LCP</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">TBT</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">CLS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {jsonFiles.map((file, index) => {
              const data = file.data;
              const audits = data?.lighthouseResult?.audits || {};

              return (
                <tr key={file.filename} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {formatFilename(file.filename)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    Desktop
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <MetricCell
                      metric={audits['speed-index']}
                      title="Speed Index"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <MetricCell
                      metric={audits['first-contentful-paint']}
                      title="First Contentful Paint"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <MetricCell
                      metric={audits['largest-contentful-paint']}
                      title="Largest Contentful Paint"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <MetricCell
                      metric={audits['total-blocking-time']}
                      title="Total Blocking Time"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <MetricCell
                      metric={audits['cumulative-layout-shift']}
                      title="Cumulative Layout Shift"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}