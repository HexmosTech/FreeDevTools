import React, { useEffect, useState } from 'react';

// Proper enum for theme types
enum ThemeType {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark'
}

// Interface for theme configuration
interface ThemeConfig {
  type: ThemeType;
  icon: React.ReactNode;
  label: string;
}

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeType>(ThemeType.SYSTEM);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to system
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && Object.values(ThemeType).includes(savedTheme)) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // On mobile, default to dark theme instead of system
      const isMobile = window.innerWidth < 768; // md breakpoint
      const defaultTheme = isMobile ? ThemeType.DARK : ThemeType.SYSTEM;
      setTheme(defaultTheme);
      applyTheme(defaultTheme);
    }
  }, []);

  const applyTheme = (newTheme: ThemeType) => {
    if (newTheme === ThemeType.SYSTEM) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeType.DARK : ThemeType.LIGHT;
      if (systemTheme === ThemeType.DARK) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (newTheme === ThemeType.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Theme configurations
  const themeConfigs: ThemeConfig[] = [
    {
      type: ThemeType.SYSTEM,
      icon: (
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H8.5C7.94772 17.5 7.5 17.0523 7.5 16.5V8.5Z" stroke="currentColor"></path>
          <path d="M7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H19.5C20.5 7.5 20.5 8.5V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H8.5C7.94772 15.5 7.5 15.0523 7.5 14.5V8.5Z" stroke="currentColor"></path>
          <path d="M16.5 20.5V17.5H11.5V20.5M16.5 20.5H11.5M16.5 20.5H17.5M11.5 20.5H10.5" stroke="currentColor" strokeLinecap="round"></path>
        </svg>
      ),
      label: 'System theme'
    },
    {
      type: ThemeType.LIGHT,
      icon: (
        <svg viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="3.5" stroke="currentColor"></circle>
          <path d="M14 8.5V6.5" stroke="currentColor" strokeLinecap="round"></path>
          <path d="M17.889 10.1115L19.3032 8.69727" stroke="currentColor" strokeLinecap="round"></path>
          <path d="M19.5 14L21.5 14" stroke="currentColor" strokeLinecap="round"></path>
          <path d="M17.889 17.8885L19.3032 19.3027" stroke="currentColor" strokeLinecap="round"></path>
          <path d="M14 21.5V19.5" stroke="currentColor" strokeLinecap="round"></path>
          <path d="M8.69663 19.3029L10.1108 17.8887" stroke="currentColor" strokeLinecap="round"></path>
          <path d="M6.5 14L8.5 14" stroke="currentColor" strokeLinecap="round"></path>
          <path d="M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" strokeLinecap="round"></path>
        </svg>
      ),
      label: 'Light theme'
    },
    {
      type: ThemeType.DARK,
      icon: (
        <svg viewBox="0 0 28 28" fill="none">
          <path d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z" stroke="currentColor" strokeLinejoin="round"></path>
          <path d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      label: 'Dark theme'
    }
  ];

  // Don't render until mounted to prevent SSR issues
  if (!mounted) {
    return (
      <div className="grid grid-cols-1">
        <div className="relative z-0 inline-grid grid-cols-2 md:grid-cols-3 gap-0.5 rounded-full bg-gray-950/5 p-0.75 text-gray-950 dark:bg-white/10 dark:text-white">
          <div className="relative rounded-full p-1.5 *:size-7 bg-white ring ring-gray-950/10 sm:p-0">
            {themeConfigs[1].icon}
          </div>
        </div>
      </div>
    );
  }

  // Filter themes based on screen size - hide system theme on mobile
  const visibleThemes = themeConfigs.filter(config =>
    config.type !== ThemeType.SYSTEM || window.innerWidth >= 768
  );

  return (
    <div className="grid grid-cols-1">
      <div className="relative z-0 inline-grid gap-0.5 rounded-full bg-gray-950/5 p-0.5 sm:p-0.75 text-gray-950 dark:bg-white/10 dark:text-white"
        style={{ gridTemplateColumns: `repeat(${visibleThemes.length}, minmax(0, 1fr))` }}>
        {visibleThemes.map((config) => (
          <div
            key={config.type}
            className={`relative rounded-full cursor-pointer transition-all duration-200 ${
              // Smaller size on mobile, reasonable size on desktop
              'p-0.5 *:size-4 sm:p-1 sm:*:size-5 lg:p-1 lg:*:size-6'
              } ${theme === config.type
                ? 'bg-white ring ring-gray-950/10 dark:bg-gray-600 dark:ring-white/10'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            onClick={() => handleThemeChange(config.type)}
            title={config.label}
          >
            {config.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
