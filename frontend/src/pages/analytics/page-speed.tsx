
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

// Get metric value with tooltip
function MetricCell({ metric, title, isLastColumn = false }: { metric: any; title: string; isLastColumn?: boolean }) {
  if (!metric) {
    return <span className="text-gray-400">-</span>;
  }

  const displayValue = metric.displayValue || metric.numericValue || '-';
  const tooltipContent = metric ? JSON.stringify(metric, null, 2) : 'No data';

  return (
    <div className="group relative">
      <span className="cursor-help text-sm font-medium">{displayValue}</span>
      <div className={`absolute bottom-full mb-2 w-96 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none ${isLastColumn ? 'right-0' : 'left-0'
        }`}>
        <div className="font-semibold mb-1">{title}</div>
        <pre className="whitespace-pre-wrap break-words">{tooltipContent}</pre>
        <div className={`absolute top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 ${isLastColumn ? 'right-4' : 'left-4'
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
      <div className="overflow-x-auto">
        <table className="mt-44 min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
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