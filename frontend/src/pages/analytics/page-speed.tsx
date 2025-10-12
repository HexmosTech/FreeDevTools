
import { useMemo, useState } from 'react';

// Crop first word "freedevtools" and last 21 characters
function formatFilename(filename: string): string {
  // Remove "freedevtools_" from the beginning
  let cropped = filename.replace(/^freedevtools_/, '');

  // Remove last 21 characters (timestamp and extension)
  if (cropped.length > 21) {
    cropped = cropped.slice(0, -21);
  }

  return cropped;
}

// Metric definitions with descriptions and thresholds
const METRIC_DEFINITIONS = {
  'Speed Index': {
    description: 'Loading: How quickly the contents of a page are visibly populated.',
    thresholds: { good: '≤3400', needsImprovement: '3400−5800', poor: '>5800' }
  },
  'First Contentful Paint': {
    description: 'Perceived Load: Time until the first visual element (text, image, etc.) is rendered on the screen.',
    thresholds: { good: '≤1800', needsImprovement: '1800−3000', poor: '>3000' }
  },
  'Largest Contentful Paint': {
    description: 'Loading: The time it takes for the largest visual element (e.g., hero image, main text block) to load.',
    thresholds: { good: '≤2500', needsImprovement: '2500−4000', poor: '>4000' }
  },
  'Total Blocking Time': {
    description: 'Responsiveness (Lab Data): The total time the main thread was blocked, preventing responsiveness to user input.',
    thresholds: { good: '≤200', needsImprovement: '200−600', poor: '>600' }
  },
  'Cumulative Layout Shift': {
    description: 'Visual Stability: Measures the unexpected shifting of content on the page as it loads.',
    thresholds: { good: '≤0.1', needsImprovement: '0.1−0.25', poor: '>0.25' }
  }
};

// Get performance color based on metric value and thresholds
function getPerformanceColor(numericValue: number, thresholds: any): string {
  const goodThreshold = parseFloat(thresholds.good.replace(/[^\d.]/g, ''));
  const needsImprovementMax = parseFloat(thresholds.needsImprovement.split('−')[1].replace(/[^\d.]/g, ''));

  if (numericValue <= goodThreshold) {
    return 'text-green-600 dark:text-green-400';
  } else if (numericValue <= needsImprovementMax) {
    return 'text-yellow-600 dark:text-yellow-400';
  } else {
    return 'text-red-600 dark:text-red-400';
  }
}

// Get metric value with enhanced tooltip
function MetricCell({ metric, title, isLastColumn = false }: { metric: any; title: string; isLastColumn?: boolean }) {
  if (!metric) {
    return <span className="text-gray-400">-</span>;
  }

  const displayValue = metric.displayValue || metric.numericValue || '-';
  const numericValue = metric.numericValue;
  const definition = METRIC_DEFINITIONS[title as keyof typeof METRIC_DEFINITIONS];

  let performanceColor = 'text-gray-900 dark:text-gray-100';
  if (definition && numericValue !== undefined) {
    performanceColor = getPerformanceColor(numericValue, definition.thresholds);
  }

  return (
    <div className="group relative">
      <span className={`cursor-help text-sm font-medium ${performanceColor}`}>{displayValue}</span>
      <div className={`absolute top-full mt-2 w-96 p-4 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none ${isLastColumn ? 'right-0' : 'left-0'
        }`}>
        <div className="font-semibold mb-2 text-base">{title}</div>

        {definition && (
          <div className="mb-3">
            <div className="text-gray-300 mb-2">{definition.description}</div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-green-400">Good:</span>
                <span className="text-green-400">{definition.thresholds.good}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-400">Needs Improvement:</span>
                <span className="text-yellow-400">{definition.thresholds.needsImprovement}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-400">Poor:</span>
                <span className="text-red-400">{definition.thresholds.poor}</span>
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-gray-700 pt-2">
          <div className="text-gray-400 text-xs mb-1">Raw Data:</div>
          <pre className="whitespace-pre-wrap break-words text-xs bg-gray-800 p-2 rounded">
            {JSON.stringify(metric, null, 2)}
          </pre>
        </div>

        <div className={`absolute bottom-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900 ${isLastColumn ? 'right-4' : 'left-4'
          }`}></div>
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

type SortField = 'name' | 'device' | 'speedIndex' | 'fcp' | 'lcp' | 'tbt' | 'cls';
type SortDirection = 'asc' | 'desc';

export default function PageSpeedAnalytics({ jsonFiles }: PageSpeedAnalyticsProps) {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  // Debug: Log the files being processed
  console.log('PageSpeedAnalytics received files:', jsonFiles.length);
  console.log('Sample files:', jsonFiles.slice(0, 3).map(f => ({ filename: f.filename, url: f.url })));

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedFiles = useMemo(() => {
    // Debug: Log all files before sorting
    console.log('All files before sorting:', jsonFiles.map(f => ({ filename: f.filename, url: f.url })));

    // Remove duplicates based on filename
    const uniqueFiles = jsonFiles.filter((file, index, self) =>
      index === self.findIndex(f => f.filename === file.filename)
    );

    console.log('Unique files after deduplication:', uniqueFiles.length);

    return [...uniqueFiles].sort((a, b) => {
      const dataA = a.data?.lighthouseResult?.audits || {};
      const dataB = b.data?.lighthouseResult?.audits || {};

      let valueA: any;
      let valueB: any;

      switch (sortField) {
        case 'name':
          valueA = a.filename.toLowerCase();
          valueB = b.filename.toLowerCase();
          break;
        case 'device':
          valueA = a.filename.includes('_desktop_') ? 'Desktop' : 'Mobile';
          valueB = b.filename.includes('_desktop_') ? 'Desktop' : 'Mobile';
          break;
        case 'speedIndex':
          valueA = dataA['speed-index']?.numericValue ?? Number.MAX_VALUE;
          valueB = dataB['speed-index']?.numericValue ?? Number.MAX_VALUE;
          break;
        case 'fcp':
          valueA = dataA['first-contentful-paint']?.numericValue ?? Number.MAX_VALUE;
          valueB = dataB['first-contentful-paint']?.numericValue ?? Number.MAX_VALUE;
          break;
        case 'lcp':
          valueA = dataA['largest-contentful-paint']?.numericValue ?? Number.MAX_VALUE;
          valueB = dataB['largest-contentful-paint']?.numericValue ?? Number.MAX_VALUE;
          break;
        case 'tbt':
          valueA = dataA['total-blocking-time']?.numericValue ?? Number.MAX_VALUE;
          valueB = dataB['total-blocking-time']?.numericValue ?? Number.MAX_VALUE;
          break;
        case 'cls':
          valueA = dataA['cumulative-layout-shift']?.numericValue ?? Number.MAX_VALUE;
          valueB = dataB['cumulative-layout-shift']?.numericValue ?? Number.MAX_VALUE;
          break;
        default:
          return 0;
      }

      if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [jsonFiles, sortField, sortDirection]);

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };
  return (
    <div className="">
      <div className="">
        <table className="mt-44 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 select-none"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center space-x-1">
                  <span>Name</span>
                  <span className="text-lg">{getSortIcon('name')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 select-none"
                onClick={() => handleSort('device')}
              >
                <div className="flex items-center space-x-1">
                  <span>Device</span>
                  <span className="text-lg">{getSortIcon('device')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 select-none"
                onClick={() => handleSort('speedIndex')}
              >
                <div className="flex items-center space-x-1">
                  <span>Speed Index</span>
                  <span className="text-lg">{getSortIcon('speedIndex')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 select-none"
                onClick={() => handleSort('fcp')}
              >
                <div className="flex items-center space-x-1">
                  <span>FCP</span>
                  <span className="text-lg">{getSortIcon('fcp')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 select-none"
                onClick={() => handleSort('lcp')}
              >
                <div className="flex items-center space-x-1">
                  <span>LCP</span>
                  <span className="text-lg">{getSortIcon('lcp')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 select-none"
                onClick={() => handleSort('tbt')}
              >
                <div className="flex items-center space-x-1">
                  <span>TBT</span>
                  <span className="text-lg">{getSortIcon('tbt')}</span>
                </div>
              </th>
              <th
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 select-none"
                onClick={() => handleSort('cls')}
              >
                <div className="flex items-center space-x-1">
                  <span>CLS</span>
                  <span className="text-lg">{getSortIcon('cls')}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {sortedFiles.map((file, index) => {
              const data = file.data;
              const audits = data?.lighthouseResult?.audits || {};

              return (
                <tr key={file.filename} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                    {formatFilename(file.filename)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {file.filename.includes('_desktop_') ? 'Desktop' : 'Mobile'}
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
                      isLastColumn={true}
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