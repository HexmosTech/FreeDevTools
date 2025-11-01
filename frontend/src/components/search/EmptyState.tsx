import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  query: string;
  activeCategory: string;
  hasResults: boolean;
  onViewAll?: () => void;
}

const EmptyState = ({
  query,
  activeCategory,
  hasResults,
  onViewAll,
}: EmptyStateProps) => {
  if (!hasResults) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">
          No results found for &quot;{query}&quot;
        </p>
      </div>
    );
  }

  return (
    <div className="text-center p-8">
      <p className="text-muted-foreground">
        No results found in category <strong>{activeCategory}</strong>
      </p>
      {onViewAll && (
        <Button variant="link" onClick={onViewAll} className="mt-2">
          View all results
        </Button>
      )}
    </div>
  );
};

export default EmptyState;

