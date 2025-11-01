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

  const widthValue = typeof width === 'number' ? `${width}px` : width;
  const heightValue = typeof height === 'number' ? `${height}px` : height;

  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
      className={className}
      style={{ width: widthValue, height: heightValue, flexShrink: 0 }}
      dangerouslySetInnerHTML={{ __html: iconBody }}
    />
  );
};

