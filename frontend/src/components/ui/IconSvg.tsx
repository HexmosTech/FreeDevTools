import React from 'react';
import iconsData from '../../../data/lucify_icons.json';

interface IconSvgProps {
  iconName: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
}

function getIconSvgBody(iconName: string): string | null {
  const icon = (iconsData as { icons: Record<string, { body: string }> })?.icons?.[iconName];
  return icon?.body || null;
}

/**
 * Renders an icon as an inline SVG from local icons.json
 * Replaces @iconify-icon/react for local icons
 */
export const IconSvg: React.FC<IconSvgProps> = ({
  iconName,
  className = '',
  width = 16,
  height = 16,
  fill = 'currentColor',
}) => {
  const iconBody = getIconSvgBody(iconName);

  if (!iconBody) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
      className={className}
      dangerouslySetInnerHTML={{ __html: iconBody }}
    />
  );
};

