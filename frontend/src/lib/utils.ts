import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

export function formatRepositoryName(name: string): string {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function getIconClasses(iconPath: string): string {
  // For SVG icons that need color manipulation
  if (
    iconPath.includes('star_empty.svg') ||
    iconPath.includes('github/star.svg')
  ) {
    return 'w-4 h-4 star-icon';
  }

  // For other icons that need dark mode inversion
  if (iconPath.includes('github.svg') || iconPath.includes('npm.svg')) {
    return 'w-4 h-4 dark:brightness-0 dark:invert';
  }

  // Default classes
  return 'w-4 h-4';
}
