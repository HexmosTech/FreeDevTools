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
        <button
          onClick={onViewAll}
          className="mt-2 text-primary underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          View all results
        </button>
      )}
    </div>
  );
};

export default EmptyState;

