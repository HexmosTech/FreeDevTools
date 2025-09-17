import React, { useEffect } from 'react';

interface PreviewAreaProps {
  svgContent: string;
  iconName: string;
  svgRef: React.RefObject<HTMLDivElement | null>;
  extractedColors: string[];
}

const PreviewArea: React.FC<PreviewAreaProps> = ({ svgContent, iconName, svgRef, extractedColors }) => {
  console.log('🔍 DEBUG: PreviewArea rendering with svgContent:', svgContent);
  console.log('🔍 DEBUG: PreviewArea svgContent length:', svgContent.length);

  // Fix currentColor values to make SVG visible, but keep fill="none" as is
  // Use the first extracted color, or default to black if none available
  const defaultColor = extractedColors.length > 0 ? extractedColors[0] : '#000000';

  const processedSvgContent = svgContent
    .replace(/stroke="currentColor"/g, `stroke="${defaultColor}"`)
    .replace(/fill="currentColor"/g, `fill="${defaultColor}"`);

  console.log('🔍 DEBUG: Processed SVG content:', processedSvgContent);

  // Debug: Check if SVG is rendered in DOM
  useEffect(() => {
    if (svgRef.current) {
      const svgElement = svgRef.current.querySelector('svg');
      console.log('🔍 DEBUG: SVG element found in DOM:', svgElement);
      if (svgElement) {
        console.log('🔍 DEBUG: SVG element innerHTML:', svgElement.outerHTML);
        console.log('🔍 DEBUG: SVG element computed styles:', window.getComputedStyle(svgElement));
      }
    }
  }, [processedSvgContent]);

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-8">
      <div className="relative bg-slate-50">
        {/* Checkered background pattern */}
        <div className="absolute inset-0 opacity-20 ">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="checkerboard" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="10" height="10" fill="currentColor" className="text-slate-300" />
                <rect x="10" y="10" width="10" height="10" fill="currentColor" className="text-slate-300" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#checkerboard)" />
          </svg>
        </div>

        {/* SVG Content */}
        <div
          ref={svgRef}
          className="relative z-10 max-w-md max-h-md"
          style={{ minHeight: '200px', minWidth: '200px' }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: processedSvgContent }}
            style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewArea;
