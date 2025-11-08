import ResultCard from './ResultCard';
import type { SearchResult } from './types';

interface ResultsGridProps {
  results: SearchResult[];
}

const ResultsGrid = ({ results }: ResultsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((result, index) => (
        <ResultCard key={result.id || index} result={result} />
      ))}
    </div>
  );
};

export default ResultsGrid;
