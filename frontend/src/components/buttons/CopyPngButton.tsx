import Konva from 'konva';
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

interface CopyPngButtonProps {
  iconData: {
    name: string;
    originalSvgContent: string;
    svgContent: string;
  };
  size?: number;
}

const CopyPngButton: React.FC<CopyPngButtonProps> = ({ iconData, size = 512 }) => {
  const copyAsPNG = useCallback(async () => {
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
        toast.error('Failed to load SVG data');
        return;
      }
    }

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

            // Convert data URL to blob
            const response = await fetch(dataURL);
            const blob = await response.blob();

            if (blob && blob.size > 0) {
              console.log('Konva PNG blob created, size:', blob.size);

              // Create a proper image file for clipboard
              const file = new File([blob], `${iconData?.name || 'icon'}.png`, {
                type: 'image/png'
              });

              // Check if modern clipboard API is supported
              if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
                try {
                  await navigator.clipboard.write([
                    new ClipboardItem({
                      'image/png': file
                    })
                  ]);
                  toast.success('PNG copied to clipboard!');
                } catch (err) {
                  console.error('Clipboard error:', err);
                  // Fallback: try with blob instead of file
                  try {
                    await navigator.clipboard.write([
                      new ClipboardItem({
                        'image/png': blob
                      })
                    ]);
                    toast.success('PNG copied to clipboard!');
                  } catch (fallbackErr) {
                    console.error('Fallback clipboard error:', fallbackErr);
                    toast.error('Failed to copy PNG to clipboard');
                  }
                }
              } else {
                // Fallback for older browsers - create a temporary download
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${iconData?.name || 'icon'}.png`;
                link.click();
                URL.revokeObjectURL(url);
                toast.info('PNG downloaded (clipboard not supported)');
              }
            } else {
              console.error('Failed to create blob or blob is empty');
              toast.error('Failed to create PNG image');
            }

            // Cleanup
            stage.destroy();
            document.body.removeChild(container);
            resolve(undefined);
          } catch (error) {
            console.error('Error in Konva image processing:', error);
            toast.error('Failed to process PNG image');
            stage.destroy();
            document.body.removeChild(container);
            reject(error);
          }
        }, (error) => {
          console.error('Konva image load error:', error);
          toast.error('Failed to load SVG image');
          stage.destroy();
          document.body.removeChild(container);
          reject(error);
        });
      });
    } catch (error) {
      console.error('PNG copy error:', error);
      toast.error('Failed to copy PNG to clipboard');
    }
  }, [iconData, size]);

  return (
    <button
      onClick={copyAsPNG}
      className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
    >
      Copy PNG
    </button>
  );
};

export default CopyPngButton;
