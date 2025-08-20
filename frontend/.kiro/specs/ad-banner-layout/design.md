# Design Document

## Overview

This design transforms the current sidebar-based layout into a banner-advertisement layout. The sidebar will be temporarily commented out while preserving the code for future use. A new advertisement banner component will be introduced using the Swiper library to display rotating ads with a responsive design that adapts to different screen sizes.

## Architecture

### Layout Structure Changes

**Current Layout:**
```
┌─────────────┬─────────────────────────┐
│   Sidebar   │      Main Content       │
│             │                         │
└─────────────┴─────────────────────────┘
```

**New Layout (Desktop/Laptop):**
```
┌─────────────────────────┬─────────────┐
│      Main Content       │  Ad Banner  │
│                         │   (Fixed)   │
└─────────────────────────┴─────────────┘
```

**New Layout (Tablet/Mobile):**
```
┌─────────────────────────┐
│      Ad Banner          │
│      (Top Fixed)        │
├─────────────────────────┤
│      Main Content       │
│                         │
└─────────────────────────┘
```

### Component Architecture

1. **BaseLayout.astro** - Modified to include ad banner and comment out sidebar
2. **AdBanner.tsx** - New React component for advertisement display
3. **Swiper Integration** - Using swiper library for ad rotation

## Components and Interfaces

### AdBanner Component

**Props Interface:**
```typescript
interface AdBannerProps {
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
}

interface AdData {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}
```

**Component Features:**
- Responsive design with different layouts for desktop/mobile
- Auto-advancing slides with manual navigation
- Uses existing site color scheme (neon colors, slate backgrounds)
- Fixed positioning that doesn't interfere with content scrolling

### Layout Integration

**BaseLayout Modifications:**
- Comment out sidebar rendering while preserving the code
- Add AdBanner component with responsive positioning
- Adjust main content area to accommodate banner
- Maintain existing theme and styling system

## Data Models

### Advertisement Data Structure

```typescript
const adData: AdData[] = [
  {
    id: 'ad1',
    title: 'Sample Ad 1',
    description: 'This is a sample advertisement description',
    image: '/src/assets/ad1.png',
    link: '#'
  },
  // ... additional ads
];
```

### Responsive Breakpoints

- **Desktop/Laptop (lg+):** Banner on right side, fixed width ~300px
- **Tablet (md):** Banner at top, full width, reduced height
- **Mobile (sm and below):** Banner at top, full width, compact design

## Error Handling

### Swiper Integration
- Graceful fallback if swiper fails to load
- Static display of first ad if JavaScript is disabled
- Error boundaries around the AdBanner component

### Image Loading
- Lazy loading for ad images
- Fallback placeholder if images fail to load
- Proper alt text for accessibility

### Responsive Design
- CSS-only fallbacks for critical layout elements
- Progressive enhancement for swiper functionality

## Testing Strategy

### Component Testing
- Unit tests for AdBanner component props and rendering
- Test responsive behavior at different breakpoints
- Verify swiper functionality and auto-advance

### Integration Testing
- Test banner integration with BaseLayout
- Verify layout doesn't break on different screen sizes
- Test with and without JavaScript enabled

### Visual Regression Testing
- Screenshot tests for different device sizes
- Verify color scheme consistency
- Test dark/light theme compatibility

## Implementation Details

### Color Scheme Integration
The design will use the existing site colors:
- **Primary Colors:** Blue variants (#1e40af theme color)
- **Background:** Slate colors (slate-50/slate-900 for light/dark)
- **Accent:** Neon colors (need to be defined in tailwind config)
- **Text:** Slate variants for contrast

### Neon Color Definitions
The neon colors use the Kiro purple theme and are defined in tailwind.config.js:
```javascript
neon: {
  DEFAULT: '#8129D9',
  light: '#9d4edd',
  dark: '#6a1b9a'
}
```

### Swiper Configuration
- **Autoplay:** 5-second intervals
- **Loop:** Infinite loop through ads
- **Pagination:** Dots indicator
- **Navigation:** Arrow buttons on hover
- **Effect:** Slide transition

### Performance Considerations
- Lazy load swiper library
- Optimize ad images for web
- Use CSS transforms for smooth animations
- Minimize layout shifts during banner loading

## Accessibility

- Proper ARIA labels for swiper controls
- Keyboard navigation support
- Screen reader friendly ad content
- Respect prefers-reduced-motion for animations
- Sufficient color contrast ratios

## Mobile-First Approach

The design follows a mobile-first responsive strategy:
1. Base styles for mobile devices
2. Progressive enhancement for tablets
3. Desktop-specific positioning and sizing
4. Touch-friendly controls on mobile devices



┌───────────────────────────────-───────────────┐
│                  Page Title                   │
│                Page Description               │
├───────────────────────────────-───────────────┤
│          Main Content         │    Banner     │
│                               │    (Fixed)    │
└───────────────────────────────┴───────────────┘

┌───────────────────────────────┐
│           Page Title          │
│        Page Description       │
├───────────────────────────────┤
│            Banner             │
├───────────────────────────────┤
│         Main Content          │
└───────────────────────────────┘


what is happening is

The banner is coming on the right that is true, but the heading is also moving to left. 

That ahoudlnt happen.



The title & description of the page should always be in center. 



The content can be on the left side and banner on right.



See the image, the title has also moved to left. WHich is wrong. 

The layouting has issue.



it should be like

┌───────────────────────────────-───────────────┐

│                  Page Title                   │

│                Page Description               │

├───────────────────────────────-───────────────┤

│          Main Content         │    Banner     │

│                               │    (Fixed)    │

└───────────────────────────────┴───────────────┘



i think you may need to make changes in the baselayout file, and tools present in the tools directory to pass page title and page description as props or something not sure. But yeah



then in phone view it should be like this

┌───────────────────────────────┐

│           Page Title          │

│        Page Description       │

├───────────────────────────────┤

│            Banner             │

├───────────────────────────────┤

│         Main Content          │

└───────────────────────────────┘



