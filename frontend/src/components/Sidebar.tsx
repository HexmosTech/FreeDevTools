import React, { useMemo, useState } from "react";
import { getAllTools } from "../config/tools";
import ThemeSwitcher from "./theme/ThemeSwitcher";

interface SidebarProps {
  currentPath?: string;
  basePath?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentPath = "/",
  basePath = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);
  const tools = getAllTools();

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return tools;

    const query = searchQuery.toLowerCase();
    return tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query) ||
        tool.keywords.some((keyword) => keyword.toLowerCase().includes(query))
    );
  }, [tools, searchQuery]);

  return (
    <div
      className={`bg-white dark:bg-black border-r border-slate-200 dark:border-slate-700 transition-all duration-300 ${
        isExpanded ? "w-80" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          {isExpanded && (
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Tools
            </h2>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isExpanded ? "◀" : "▶"}
          </button>
        </div>
      </div>

      {/* Search */}
      {isExpanded && (
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 pl-10 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Tools List */}
      <div className="flex-1 overflow-y-auto">
        {filteredTools.length === 0 ? (
          <div className="p-4 text-center text-slate-500 dark:text-slate-400">
            No tools found matching "{searchQuery}"
          </div>
        ) : (
          <div className="p-2">
            {filteredTools.map((tool) => {
              const isActive = currentPath === tool.path;
              return (
                <div key={tool.path} className="group relative">
                  <a
                    href={tool.path}
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span className="text-xl mr-3">{tool.icon}</span>
                    {isExpanded && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{tool.name}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 truncate">
                          {tool.description}
                        </div>
                      </div>
                    )}
                  </a>

                  {/* Tooltip for collapsed state */}
                  {!isExpanded && (
                    <div className="absolute left-full ml-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-slate-300">{tool.description}</div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-900"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      {isExpanded && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center mb-3">
            {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""}{" "}
            available
          </div>

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
