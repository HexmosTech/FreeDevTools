import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Icon } from '@iconify-icon/react';
import React from 'react';

interface CategoryButtonProps {
  category: string;
  icon: string;
  label: string;
  count?: number;
  isActive: boolean;
  isSelected: boolean;
  onClick: () => void;
  onRightClick: (e: React.MouseEvent) => void;
}

const CategoryButton = ({
  category: _category,
  icon,
  label,
  count,
  isActive,
  isSelected,
  onClick,
  onRightClick,
}: CategoryButtonProps) => {
  const buttonContent = (
    <>
      <Icon
        icon={icon}
        width="18"
        height="16"
        className="lg:w-4 lg:h-4 flex-shrink-0"
      />
      <span className="truncate">{label}</span>
      {count !== undefined && (
        <span className="flex-shrink-0 ml-0.5">({count.toLocaleString()})</span>
      )}
    </>
  );

  const buttonClassName = `text-xs lg:text-sm w-full flex items-center gap-1 px-2 ${isActive || isSelected
    ? 'shadow-md shadow-blue-500/50'
    : 'hover:shadow-md hover:shadow-gray-500/30 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/50'
    }`;

  if (isActive || isSelected) {
    return (
      <Button
        variant="default"
        size="sm"
        onClick={onClick}
        onContextMenu={onRightClick}
        className={buttonClassName}
      >
        {buttonContent}
      </Button>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          onClick={onClick}
          onContextMenu={onRightClick}
          className={buttonClassName}
        >
          {buttonContent}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span className="text-xs">Right-click to multi-select</span>
      </TooltipContent>
    </Tooltip>
  );
};

export default CategoryButton;

