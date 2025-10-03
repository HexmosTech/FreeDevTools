import { Clock, Package, Star, Wrench } from "lucide-react";
import type { ProcessedServer } from "../../lib/mcp-data-processor";

// Repository Card Component using Lucide React
const RepositoryCard = ({ server, formattedName }: { server: ProcessedServer, formattedName: string }) => (
  <a
    href={`/freedevtools/mcp/${server.id}`}
    className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    data-repo-name={server.name}
    data-repo-description={server.description}
    data-repo-license={server.license}
  >
    <div className="space-y-3">
      {/* Row 1: Image + Title and Description */}
      <div className="flex items-center space-x-4">
        {/* Repository Image */}
        <div className="flex-shrink-0">
          {server.imageUrl ? (
            <img
              src={server.imageUrl}
              alt={`${formattedName} logo`}
              className="w-16 h-16 rounded-lg object-cover border border-slate-200 dark:border-slate-700"
            />
          ) : (
            <div className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <img
                src="/freedevtools/svg_icons/automation/mcp-server-stroke-rounded.svg"
                alt="MCP Server"
                className="w-8 h-8 text-slate-400"
              />
            </div>
          )}
        </div>

        {/* Title and Description */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {formattedName}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
            {server.description}
          </p>
        </div>

        {/* Arrow Icon */}
        <div className="flex items-center ml-4 flex-shrink-0">
          <span className="text-gray-400 dark:text-gray-500">→</span>
        </div>
      </div>

      {/* Row 2: Stats and License (Full Width) */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>{server.stats.githubStars}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Package className="w-4 h-4" />
            <span>{server.stats.weeklyDownloads}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Wrench className="w-4 h-4" />
            <span>{server.stats.tools} tools</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{server.stats.lastUpdated}</span>
          </div>
        </div>
        {/* License Badge (Right side) */}
        <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex-shrink-0">
          {server.license}
        </span>
      </div>
    </div>
  </a>
);

export default RepositoryCard;