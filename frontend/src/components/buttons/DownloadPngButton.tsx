import Konva from 'konva';
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

  const downloadAsPNG = useCallback(async (size = 512) => {
    // Use original SVG content for downloads to maintain quality
    const svgData = iconData?.originalSvgContent || iconData?.svgContent || '';
    if (!svgData) return;

    try {
      // Create a temporary Konva stage for high-quality rendering
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '-9999px';
      document.body.appendChild(container);

      const stage = new Konva.Stage({
        container: container,
        width: size,
        height: size,
      });

      const layer = new Konva.Layer();
      stage.add(layer);

      // Create transparent background (no background rect needed)
      // The stage will have a transparent background by default

      // Load SVG as image using Konva's method
      await new Promise<void>((resolve, reject) => {
        // Ensure SVG has proper namespace and encoding
        const svgWithNamespace = svgData.includes('xmlns=')
          ? svgData
          : svgData.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');

        // Create data URL
        const svgDataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgWithNamespace);

        // Use Konva's Image.fromURL for better SVG handling
        Konva.Image.fromURL(svgDataUrl, async (imageNode) => {
          try {
            // Scale image to fit within the canvas while maintaining aspect ratio
            const imageAspect = imageNode.width() / imageNode.height();
            const canvasAspect = size / size;

            let imageWidth, imageHeight;
            if (imageAspect > canvasAspect) {
              imageWidth = size * 0.8; // 80% of canvas size
              imageHeight = imageWidth / imageAspect;
            } else {
              imageHeight = size * 0.8;
              imageWidth = imageHeight * imageAspect;
            }

            // Center the image
            imageNode.setAttrs({
              x: (size - imageWidth) / 2,
              y: (size - imageHeight) / 2,
              width: imageWidth,
              height: imageHeight,
              listening: false,
            });

            layer.add(imageNode);
            layer.draw();

            // Export using Konva's built-in method with transparency
            const dataURL = stage.toDataURL({
              mimeType: 'image/png',
              quality: 1,
              pixelRatio: 2, // High DPI
              // No backgroundColor specified = transparent
            });

            // Create download link
            const link = document.createElement('a');
            link.download = `${iconData?.name || 'icon'}-${size}px.png`;
            link.href = dataURL;
            link.click();

            // Cleanup
            stage.destroy();
            document.body.removeChild(container);
            resolve(undefined);
          } catch (error) {
            console.error('Error in Konva image processing:', error);
            stage.destroy();
            document.body.removeChild(container);
            reject(error);
          }
        }, (error) => {
          console.error('Konva image load error:', error);
          stage.destroy();
          document.body.removeChild(container);
          reject(error);
        });
      });
    } catch (error) {
      console.error('PNG download error:', error);
    }
  }, [iconData]);

  const handleClick = () => {
    const size = parseInt(pngSizeSelectRef.current?.value || '512');
    downloadAsPNG(size);
  };

  return (
    <div className="inline-flex rounded overflow-hidden w-full">
      <button
        onClick={handleClick}
        className="flex-1 px-2 sm:px-4 py-3 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
      >
        <span className="hidden sm:inline">Download PNG</span>
        <span className="sm:hidden">PNG</span>
      </button>
      <div className="relative">
        <select
          ref={pngSizeSelectRef}
          className="px-2 sm:px-3 py-3 text-xs sm:text-sm font-medium text-white bg-green-700 hover:bg-green-800 transition-colors appearance-none cursor-pointer border-l border-green-500 min-w-[60px] sm:min-w-[80px] focus:outline-none focus:ring-0 focus:border-green-500 h-full"
          defaultValue="512"
          style={{ minHeight: '48px' }}
        >
          <option value="512">512px</option>
          <option value="256">256px</option>
          <option value="128">128px</option>
          <option value="64">64px</option>
          <option value="32">32px</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-1 sm:pr-2 pointer-events-none">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DownloadPngButton;
