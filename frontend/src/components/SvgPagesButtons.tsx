import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

interface SvgPagesButtonsProps {
  iconData: {
    name: string;
    originalSvgContent: string;
    svgContent: string;
  };
}

const SvgPagesButtons: React.FC<SvgPagesButtonsProps> = ({ iconData }) => {
  const pngSizeSelectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    // Event listeners using event delegation
    function setupEventListeners() {
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!target) return;

        // Download PNG button
        if (target.id === 'download-png-btn') {
          console.log('🔍 DEBUG: Download PNG button clicked');
          const size = parseInt(pngSizeSelectRef.current?.value || '512');
          downloadAsPNG(size);
          return;
        }

        // Download SVG button
        if (target.id === 'download-svg-btn') {
          console.log('🔍 DEBUG: Download SVG button clicked');
          downloadAsSVG();
          return;
        }

        // Copy PNG button
        if (target.id === 'copy-png-btn') {
          console.log('🔍 DEBUG: Copy PNG button clicked');
          copyAsPNG();
          return;
        }

        // Copy SVG button
        if (target.id === 'copy-svg-btn') {
          console.log('🔍 DEBUG: Copy SVG button clicked');
          copyAsSVG();
          return;
        }
      });
    }

    // Setup event listeners
    setupEventListeners();

    // Cleanup
    return () => {
      document.removeEventListener('click', setupEventListeners);
    };
  }, []);

  // Functions
  const downloadAsPNG = (size = 512) => {
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
  };

  const downloadAsSVG = () => {
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
  };

  const copyAsPNG = async () => {
    // Use original SVG content for copying to maintain quality
    const svgData = iconData?.originalSvgContent || iconData?.svgContent || '';
    if (!svgData) {
      toast.error('No SVG data available');
      return;
    }

    try {
      // Create a canvas with proper DPI scaling
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      // Set canvas size for high quality
      const size = 512;
      const dpi = window.devicePixelRatio || 1;
      canvas.width = size * dpi;
      canvas.height = size * dpi;

      // Scale context for high DPI
      ctx?.scale(dpi, dpi);

      // Set white background
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, size, size);
      }

      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          console.log('Image loaded, dimensions:', img.width, 'x', img.height);

          // Draw the image on canvas
          ctx?.drawImage(img, 0, 0, size, size);

          // Debug: Check if canvas has content
          const imageData = ctx?.getImageData(0, 0, size, size);
          const hasContent = imageData?.data.some((value, index) => index % 4 !== 3 && value !== 0);
          console.log('Canvas has content:', hasContent);

          // Convert canvas to blob
          canvas.toBlob((blob) => {
            if (blob && blob.size > 0) {
              console.log('Blob created, size:', blob.size);

              // Create a proper image file for clipboard
              const file = new File([blob], `${iconData?.name || 'icon'}.png`, {
                type: 'image/png'
              });

              // Check if modern clipboard API is supported
              if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
                navigator.clipboard.write([
                  new ClipboardItem({
                    'image/png': file
                  })
                ]).then(() => {
                  toast.success('PNG copied to clipboard!');
                }).catch((err) => {
                  console.error('Clipboard error:', err);
                  // Fallback: try with blob instead of file
                  navigator.clipboard.write([
                    new ClipboardItem({
                      'image/png': blob
                    })
                  ]).then(() => {
                    toast.success('PNG copied to clipboard!');
                  }).catch(() => {
                    toast.error('Failed to copy PNG to clipboard');
                  });
                });
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
            resolve(undefined);
          }, 'image/png', 0.95); // High quality PNG
        };
        img.onerror = (error) => {
          console.error('Image load error:', error);
          toast.error('Failed to load SVG image');
          reject(error);
        };

        // Ensure SVG has proper namespace and encoding
        const svgWithNamespace = svgData.includes('xmlns=')
          ? svgData
          : svgData.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');

        console.log('Loading SVG:', svgWithNamespace.substring(0, 100) + '...');
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgWithNamespace);
      });
    } catch (error) {
      console.error('PNG copy error:', error);
      toast.error('Failed to copy PNG to clipboard');
    }
  };

  const copyAsSVG = async () => {
    // Use original SVG content for copying to maintain quality
    const svgData = iconData?.originalSvgContent || iconData?.svgContent || '';
    if (!svgData) return;

    try {
      await navigator.clipboard.writeText(svgData);
      toast.success('SVG copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy SVG to clipboard');
    }
  };

  return (
    <>
      {/* Hidden ref for PNG size select */}
      <select
        ref={pngSizeSelectRef}
        id="png-size-select"
        className="hidden"
        defaultValue="512"
      >
        <option value="128">128px</option>
        <option value="256">256px</option>
        <option value="512">512px</option>
        <option value="1024">1024px</option>
        <option value="2048">2048px</option>
      </select>
    </>
  );
};

export default SvgPagesButtons;
