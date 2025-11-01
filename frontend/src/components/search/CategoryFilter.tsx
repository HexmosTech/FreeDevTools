import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import React from 'react';
import CategoryButton from './CategoryButton';

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
        <Button
          variant={activeCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryClick('all')}
          onContextMenu={(e) => onCategoryRightClick(e, 'all')}
          className="text-xs lg:text-sm w-full flex items-center justify-center gap-1 px-2"
        >
          All{' '}
          {activeCategory === 'all' &&
            Object.keys(availableCategories).length > 0 &&
            `(${getAllCount()})`}
        </Button>

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

            return (
              <CategoryButton
                key={category.key}
                category={category.key}
                icon={category.icon}
                label={category.label}
                count={
                  isActive || activeCategory === 'all' ? count : undefined
                }
                isActive={isActive}
                isSelected={selectedCategories.includes(category.key)}
                onClick={() => onCategoryClick(category.key)}
                onRightClick={(e) => onCategoryRightClick(e, category.key)}
              />
            );
          })}
      </div>
    </TooltipProvider>
  );
};

export default CategoryFilter;

