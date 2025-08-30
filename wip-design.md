# Accessibility & Asset Guidelines

## Button Accessibility

- All buttons must have an accessible name (visible text or aria-label)
- Screen readers should announce the button's purpose clearly
- Use descriptive aria-labels for icon-only buttons

❌ if any fails: Add visible text or aria-label to the button  
Example:  
```jsx
<button aria-label="Close">...</button>
```

## Heading Structure
- Use heading elements (h1, h2, h3, etc.) in sequential order (no skipped levels)
- Each page must have exactly ONE h1 tag
- Headings should describe the section or page purpose
- Do not use div or p for headings unless purely decorative (then use aria-hidden="true")
❌ if any fails: Fix heading order and structure
Example:

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

## Image Optimization
- All images must be in WebP format for performance
- Use the make command to convert images:
- make convert-to-webp src=path/to/image.png out=path/to/image.webp
- Place images in the public directory

❌ if any fails: Convert images to WebP and update references


## Image Path Usage
- Always use the base path + filename for image src
- Do not include /public in the path
- For sites with a base path (e.g., /freedevtools/t/), use:

```html
<img src="/freedevtools/t/freedevtool-logo.webp" alt="..." />
```
- Ensure the image exists in the public directory and matches the path exactly

❌ if any fails: Update image src to use the correct base path and filename


## Contrast

- All text and interactive elements must have sufficient contrast against their background.
- The minimum contrast ratio is:
  - 4.5:1 for normal text
  - 3:1 for large text (18pt/24px or bold 14pt/18.66px)
- Use accessible color combinations for backgrounds, text, buttons, and links.

❌ if any fails: Adjust colors to meet the minimum contrast ratio.

Example:
- Avoid light gray text on white backgrounds.
- Use dark text on light backgrounds or light text on dark backgrounds for best readability.