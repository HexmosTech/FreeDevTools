import React, { useEffect, useState } from 'react';

interface HTMLContentProps {
  filename: string;
  className?: string;
}

const HTMLContent: React.FC<HTMLContentProps> = ({ filename, className = '' }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHTMLContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch the HTML file from the public directory
        const url = `/freedevtools/md_html/${filename}.html`;
        console.log('Fetching HTML from:', url);
        const response = await fetch(url);
        
        if (!response.ok) {
          console.error('Fetch failed:', response.status, response.statusText);
          throw new Error(`Failed to load ${filename}.html: ${response.statusText}`);
        }
        
        const content = await response.text();
        setHtmlContent(content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    if (filename) {
      fetchHTMLContent();
    }
  }, [filename]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-slate-600 dark:text-slate-400">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-8 text-center ${className}`}>
        <div className="text-red-600 dark:text-red-400">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`prose prose-slate dark:prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HTMLContent;
