import React, { useCallback } from 'react';

interface DownloadSvgButtonProps {
  iconData: {
    name: string;
    originalSvgContent: string;
    svgContent: string;
  };
}

const DownloadSvgButton: React.FC<DownloadSvgButtonProps> = ({ iconData }) => {
  const downloadAsSVG = useCallback(() => {
    // Use original SVG content for downloads to maintain quality
    const svgData = iconData?.originalSvgContent || iconData?.svgContent || '';
    if (!svgData) return;

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
