import { Card } from '@/components/ui/card';
import { getBadgeVariant } from './utils';
import type { SearchResult } from './types';

interface ResultCardProps {
  result: SearchResult;
  index: number;
}

const ResultCard = ({ result, _index }: ResultCardProps) => {
  const category = result.category?.toLowerCase();

  // Emoji card
  if (category === 'emojis') {
    return (
      <a
        href={result.path ? `https://hexmos.com${result.path}` : '#'}
        className="block no-underline"
      >
        <Card className="cursor-pointer hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all overflow-hidden h-full flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
            {result.category && (
              <div
                className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
              >
                {result.category}
              </div>
            )}
            <div className="emoji-preview text-6xl mb-4">{result.code}</div>
            <span className="font-medium text-center text-xs">
              {result.name || result.title || 'Untitled'}
            </span>
          </div>
        </Card>
      </a>
    );
  }

  // Icon card (SVG or PNG)
  if (category === 'svg_icons' || category === 'png_icons') {
    return (
      <a
        href={result.path ? `https://hexmos.com${result.path}` : '#'}
        className="block no-underline"
      >
        <Card className="cursor-pointer hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all h-full flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
            {result.category && (
              <div
                className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
              >
                {result.category === 'svg_icons' ? 'SVG Icons' : 'PNG Icons'}
              </div>
            )}
            <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white dark:bg-gray-100 rounded-md p-2">
              <img
                src={`https://hexmos.com/freedevtools${result.image}`}
                alt={result.name || result.title || 'Icon'}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="text-center text-xs text-gray-700 dark:text-gray-300">
              {result.name || result.title || 'Untitled'}
            </span>
          </div>
        </Card>
      </a>
    );
  }

  // Regular card (tools, tldr, cheatsheets, mcp)
  return (
    <a
      href={result.path ? `https://hexmos.com${result.path}` : '#'}
      className="block no-underline"
    >
      <Card className="cursor-pointer hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-900 transition-all h-full flex flex-col">
        <div className="p-4 flex flex-col h-full relative">
          {result.category && (
            <div
              className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(result.category)}`}
            >
              {result.category}
            </div>
          )}
          <div className="pr-16 mb-2">
            <span className="font-bold text-md">
              {result.name || result.title || 'Untitled'}
            </span>
          </div>
          {result.description && (
            <p className="text-sm text-muted-foreground mb-2 line-clamp-3 flex-grow">
              {result.description}
            </p>
          )}
        </div>
      </Card>
    </a>
  );
};

export default ResultCard;
