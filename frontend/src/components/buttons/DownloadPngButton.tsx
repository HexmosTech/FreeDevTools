import React, { useCallback, useRef } from 'react';

interface DownloadPngButtonProps {
  iconData: {
    name: string;
    originalSvgContent: string;
    svgContent: string;
  };
}

const DownloadPngButton: React.FC<DownloadPngButtonProps> = ({ iconData }) => {
  const pngSizeSelectRef = useRef<HTMLSelectElement>(null);

  const downloadAsPNG = useCallback((size = 512) => {
    // Use original SVG content for downloads to maintain quality
    const svgData = iconData?.originalSvgContent || iconData?.svgContent || '';
    if (!svgData) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    canvas.width = size;
    canvas.height = size;

    img.onload = () => {
      ctx?.drawImage(img, 0, 0, size, size);
      const pngData = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.download = `${iconData?.name || 'icon'}-${size}px.png`;
      link.href = pngData;
      link.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  }, [iconData]);

  const handleClick = () => {
    const size = parseInt(pngSizeSelectRef.current?.value || '512');
    downloadAsPNG(size);
  };

  return (
    <div className="inline-flex rounded overflow-hidden w-full">
      <button
        onClick={handleClick}
        className="flex-1 px-4 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
      >
        Download PNG
      </button>
      <div className="relative">
        <select
          ref={pngSizeSelectRef}
          className="px-3 py-3 text-sm font-medium text-white bg-green-700 hover:bg-green-800 transition-colors appearance-none cursor-pointer border-l border-green-500 min-w-[80px] focus:outline-none focus:ring-0 focus:border-green-500"
          defaultValue="512"
        >
          <option value="512">512px</option>
          <option value="256">256px</option>
          <option value="128">128px</option>
          <option value="64">64px</option>
          <option value="32">32px</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DownloadPngButton;
