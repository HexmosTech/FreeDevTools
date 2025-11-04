import { toast } from '@/components/ToastProvider';
import { ClipboardCopyIcon } from '@radix-ui/react-icons';
import React, { useCallback } from 'react';

interface CopySvgButtonProps {
  iconData: {
    name: string;
    originalSvgContent: string;
    svgContent: string;
    category?: string;
    iconName?: string;
  };
}

const CopySvgButton: React.FC<CopySvgButtonProps> = ({ iconData }) => {
  const copyAsSVG = useCallback(async () => {
    console.log('CopySvgButton clicked!', { iconData });

    // Load SVG content client-side if not available
    let svgData = iconData?.originalSvgContent || iconData?.svgContent || '';

    if (!svgData) {
      // Use iconData props if available, otherwise extract from URL
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      const category = iconData?.category || pathParts[pathParts.length - 2];
      const iconName = iconData?.iconName || pathParts[pathParts.length - 1];

      console.log('Fetching SVG:', { category, iconName });

      try {
        const response = await fetch(
          `/freedevtools/svg_icons/${category}/${iconName}.svg`
        );
        svgData = await response.text();
        console.log('SVG loaded successfully');
      } catch (error) {
        console.error('Failed to load SVG:', error);
        toast.error('Failed to load SVG data');
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(svgData);
      toast.success('SVG copied to clipboard!');
    } catch (error) {
      console.log(error);
      toast.error('Failed to copy SVG to clipboard');
    }
  }, [iconData]);

  return (
    <button
      onClick={copyAsSVG}
      className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
    >
      <ClipboardCopyIcon
        width="16"
        height="16"
        className="mr-2"
      />
      Copy SVG
    </button>
  );
};

export default CopySvgButton;
