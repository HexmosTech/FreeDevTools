import { DownloadIcon } from '@radix-ui/react-icons';
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
      const pathParts = window.location.pathname.split('/').filter(Boolean);
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
      className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-black bg-yellow-300 hover:bg-yellow-400 rounded transition-colors"
    >
      <DownloadIcon
        width="16"
        height="16"
        className="mr-2"
      />
      Download SVG
    </button>
  );
};

export default DownloadSvgButton;
