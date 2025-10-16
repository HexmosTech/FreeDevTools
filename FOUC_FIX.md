# Theme Toggle FOUC Fix

## Problem
The dark mode/light mode theme toggle button appeared large and unstyled during initial page load on slow network connections, causing a "Flash of Unstyled Content" (FOUC).

## Root Cause
The theme toggle button was rendering before the main CSS stylesheet (`global.css`) loaded. This caused the SVG icons to display at their default size without proper styling, creating a jarring visual experience.

## Solution Implemented

### 1. Critical CSS Inline Styles (BaseLayout.astro)
Added critical CSS directly in the `<head>` section to ensure the theme toggle is styled immediately, even before Tailwind CSS loads:

```html
<style>
  /* Prevent theme toggle FOUC by inlining critical styles */
  #theme-switcher-container {
    display: grid;
    grid-template-columns: 1fr;
  }
  
  /* Container styling with responsive padding */
  #theme-switcher-container > div {
    position: relative;
    z-index: 0;
    display: inline-grid;
    gap: 0.125rem;
    border-radius: 9999px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.125rem;
    color: rgb(9, 9, 11);
  }
  
  /* Dark mode styles */
  .dark #theme-switcher-container > div {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgb(255, 255, 255);
  }
  
  /* Button/icon container sizing */
  #theme-switcher-container button,
  #theme-switcher-container > div > div {
    position: relative;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s;
    padding: 0.125rem;
  }
  
  /* SVG icon sizing - responsive */
  #theme-switcher-container svg {
    width: 1rem;
    height: 1rem;
  }
  
  /* Tablet sizing */
  @media (min-width: 640px) {
    #theme-switcher-container > div {
      padding: 0.1875rem;
    }
    
    #theme-switcher-container button,
    #theme-switcher-container > div > div {
      padding: 0.25rem;
    }
    
    #theme-switcher-container svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  
  /* Desktop sizing */
  @media (min-width: 1024px) {
    #theme-switcher-container svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  
  /* Active theme button styling */
  #theme-switcher-container .theme-active {
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
  
  .dark #theme-switcher-container .theme-active {
    background-color: rgb(75, 85, 99);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
</style>
```

### 2. Improved ThemeSwitcher Component (ThemeSwitcher.tsx)

#### Added ID for targeting
- Added `id="theme-switcher-container"` to both the skeleton and mounted states
- Added `theme-active` class to the active button state

#### Enhanced Skeleton State
The skeleton now displays both light and dark mode buttons with proper sizing, preventing layout shift:

```tsx
if (!mounted) {
  return (
    <div id="theme-switcher-container" className="grid grid-cols-1">
      <div className="relative z-0 inline-grid grid-cols-2 gap-0.5 rounded-full bg-gray-950/5 p-0.5 sm:p-0.75 text-gray-950 dark:bg-white/10 dark:text-white">
        <div className="relative rounded-full p-0.5 sm:p-1 lg:p-1 theme-active">
          {/* Light mode icon with proper sizing */}
        </div>
        <div className="relative rounded-full p-0.5 sm:p-1 lg:p-1">
          {/* Dark mode icon with proper sizing */}
        </div>
      </div>
    </div>
  );
}
```

## Benefits

1. **Instant Styling**: The theme toggle is styled immediately, even on slow connections
2. **No Layout Shift**: The skeleton state matches the final state exactly, preventing Cumulative Layout Shift (CLS)
3. **Consistent Experience**: Users see a properly sized button from the first paint
4. **Performance**: Critical CSS is minimal (~1KB) and doesn't block page rendering
5. **Responsive**: Works correctly across all device sizes (mobile, tablet, desktop)

## Testing

To verify the fix:

1. **Throttle Network**: Open Chrome DevTools > Network tab > Throttle to "Slow 3G"
2. **Hard Refresh**: Press Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. **Observe**: The theme toggle should appear at its correct size immediately, without any flash or size change

## Files Modified

- `/Users/tirth/FreeDevTools/frontend/src/layouts/BaseLayout.astro` - Added critical inline CSS
- `/Users/tirth/FreeDevTools/frontend/src/components/theme/ThemeSwitcher.tsx` - Enhanced skeleton state and added IDs

## Technical Notes

- The critical CSS uses exact pixel values matching Tailwind's sizing system
- Responsive breakpoints match Tailwind's default breakpoints (sm: 640px, lg: 1024px)
- Dark mode styles are duplicated in critical CSS to ensure immediate application
- The `theme-active` class allows the inline CSS to target the active button state
