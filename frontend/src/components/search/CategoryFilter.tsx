import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Icon } from '@iconify-icon/react';
import React from 'react';

interface CategoryFilterProps {
  activeCategory: string;
  selectedCategories: string[];
  availableCategories: { [key: string]: number };
  onCategoryClick: (category: string) => void;
  onCategoryRightClick: (e: React.MouseEvent, category: string) => void;
}

const CategoryFilter = ({
  activeCategory,
  selectedCategories,
  availableCategories,
  onCategoryClick,
  onCategoryRightClick,
}: CategoryFilterProps) => {
  const categories = [
    { key: 'all', icon: null, label: 'All' },
    { key: 'tools', icon: 'ph:wrench', label: 'Tools' },
    { key: 'tldr', icon: 'ic:baseline-menu-book', label: 'TLDR' },
    { key: 'cheatsheets', icon: 'pepicons-pencil:file', label: 'Cheatsheets' },
    { key: 'png_icons', icon: 'ph:file-png', label: 'PNG Icons' },
    { key: 'svg_icons', icon: 'ph:file-svg', label: 'SVG Icons' },
    { key: 'emoji', icon: 'ic:outline-emoji-emotions', label: 'Emojis' },
    { key: 'mcp', icon: 'ic:outline-settings-suggest', label: 'MCP' },
  ];

  const getAllCount = () => {
    if (Object.keys(availableCategories).length === 0) return undefined;
    return Object.values(availableCategories).reduce((sum, count) => sum + count, 0);
  };

  return (
    <TooltipProvider>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:flex lg:space-x-2 gap-2 lg:gap-0 pb-2">
        {/* All button */}
        <button
          onClick={() => onCategoryClick('all')}
          onContextMenu={(e) => onCategoryRightClick(e, 'all')}
          className={`text-xs lg:text-sm w-full flex items-center justify-center gap-1 px-2 h-9 rounded-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeCategory === 'all'
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-blue-500/50'
            : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
            }`}
        >
          All{' '}
          {activeCategory === 'all' &&
            Object.keys(availableCategories).length > 0 &&
            `(${getAllCount()})`}
        </button>

        {/* Category buttons */}
        {categories
          .filter((cat) => cat.key !== 'all')
          .map((category) => {
            const isActive =
              activeCategory === category.key ||
              selectedCategories.includes(category.key);
            const count = availableCategories[category.key] ||
              (activeCategory === 'all' ? availableCategories[category.key] : undefined);

            if (!category.icon) return null;

            const buttonContent = (
              <>
                <Icon
                  icon={category.icon}
                  width="18"
                  height="16"
                  className="lg:w-4 lg:h-4 flex-shrink-0"
                />
                <span className="truncate">{category.label}</span>
                {count !== undefined && (
                  <span className="flex-shrink-0 ml-0.5">({count.toLocaleString()})</span>
                )}
              </>
            );

            const buttonClassName = `text-xs lg:text-sm w-full flex items-center gap-1 px-2 h-9 rounded-md whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive || selectedCategories.includes(category.key)
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-blue-500/50'
              : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50'
              }`;

            if (isActive || selectedCategories.includes(category.key)) {
              return (
                <button
                  key={category.key}
                  onClick={() => onCategoryClick(category.key)}
                  onContextMenu={(e) => onCategoryRightClick(e, category.key)}
                  className={buttonClassName}
                >
                  {buttonContent}
                </button>
              );
            }

            return (
              <Tooltip key={category.key}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => onCategoryClick(category.key)}
                    onContextMenu={(e) => onCategoryRightClick(e, category.key)}
                    className={buttonClassName}
                  >
                    {buttonContent}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <span className="text-xs">Right-click to multi-select</span>
                </TooltipContent>
              </Tooltip>
            );
          })}
      </div>
    </TooltipProvider>
  );
};

export default CategoryFilter;

