const LoadingState = () => {
  return (
    <div className="text-center p-8">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      <p className="mt-2 text-muted-foreground">Searching...</p>
    </div>
  );
};

export default LoadingState;

