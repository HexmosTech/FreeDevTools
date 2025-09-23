import React, { useCallback } from 'react';

interface DownloadSvgButtonProps {
  iconData: {
    name: string;
    originalSvgContent: string;
    svgContent: string;
  };
}

const DownloadSvgButton: React.FC<DownloadSvgButtonProps> = ({ iconData }) => {
  const downloadAsSVG = useCallback(async () => {
    // Load SVG content client-side if not available
    let svgData = iconData?.originalSvgContent || iconData?.svgContent || '';

    if (!svgData) {
      // Extract category and icon name from current URL
      const pathParts = window.location.pathname.split('/');
      const category = pathParts[pathParts.length - 2];
      const iconName = pathParts[pathParts.length - 1];

      try {
        const response = await fetch(`/freedevtools/svg_icons/${category}/${iconName}.svg`);
        svgData = await response.text();
      } catch (error) {
        console.error('Failed to load SVG:', error);
        return;
      }
    }

    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.download = `${iconData?.name || 'icon'}.svg`;
    link.href = url;
    link.click();

    URL.revokeObjectURL(url);
  }, [iconData]);

  return (
    <button
      onClick={downloadAsSVG}
      className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded transition-colors"
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
      </svg>
      Download SVG
    </button>
  );
};

export default DownloadSvgButton;
