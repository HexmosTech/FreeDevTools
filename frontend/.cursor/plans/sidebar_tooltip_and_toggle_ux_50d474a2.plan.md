---
name: Sidebar Tooltip and Toggle UX
overview: Implement custom tooltips with immediate show and 1s hide delay, increase collapsed sidebar width, replace toggle with panel SVG icons, and change collapsed-mode expand UX to show expand icon on logo hover (ChatGPT-style).
todos: []
isProject: false
---

# Sidebar Tooltip and Toggle UX Improvements

## 1. Custom Tooltips (Immediate Show, 1s Hide Delay)

**Limitation**: Native `title` cannot control timing. We need custom tooltips.

**Approach**: Replace `title` with custom tooltip elements. Use CSS:

```css
.sidebar-tooltip-wrap { position: relative; }
.sidebar-tooltip-wrap .sidebar-tooltip {
  position: absolute; left: 100%; top: 50%; transform: translateY(-50%);
  margin-left: 0.5rem; padding: 0.25rem 0.5rem; background: #1e293b; color: white;
  border-radius: 0.25rem; font-size: 0.75rem; white-space: nowrap; z-index: 100;
  visibility: hidden; opacity: 0;
  transition: opacity 0.15s 1s, visibility 0s 1s; /* Hide: 1s delay then fade */
}
.sidebar-tooltip-wrap:hover .sidebar-tooltip {
  visibility: visible; opacity: 1;
  transition: opacity 0.15s 0s, visibility 0s 0s; /* Show: immediate */
}
```

- **Show**: 0ms delay (immediate on hover)
- **Hide**: 1s delay before fading out (transition-delay on the non-hover state)

**Files**: [sidebar.templ](components/common/sidebar.templ). Wrap each nav link and the search icon button in a tooltip container, add `<span class="sidebar-tooltip">Label</span>`, remove `title`. Add dark mode tooltip styling. SidebarProfile uses `title` for its collapsed avatar - consider custom tooltip there too or leave as-is if scope is sidebar-only.

## 2. Collapsed Sidebar Width

Current: `4rem` (64px). Icons (20px) + padding overflow.

**Change**: Increase to `5rem` (80px) in [sidebar.templ](components/common/sidebar.templ) CSS:

```css
#sidebar.sidebar-collapsed {
  width: 5rem !important;
}
```

## 3. Panel Icons for Toggle (Expanded vs Collapsed)

Replace the chevron SVG with:

- **Expanded mode**: `panel-left-close.svg` (click to collapse)
- **Collapsed mode**: `panel-left-open.svg` (click to expand)

Files exist at:

- `/freedevtools/svg_icons/panel/panel-left-close.svg`
- `/freedevtools/svg_icons/panel/panel-left-open.svg`

Use `<img>` tags with `src` switching via JS, or two `<img>` elements toggled by CSS based on `.sidebar-collapsed`. The toggle button shows one icon when expanded, the other when collapsed.

## 4. Collapsed Mode: Expand on Logo Hover (ChatGPT-style)

**Current**: Collapsed shows logo + toggle button side-by-side; toggle is always visible and causes width issues.

**New**:

- **Collapsed**: Hide the toggle button. Logo section shows only the logo image, centered.
- **On hover of logo** (when collapsed): Show the expand icon (`panel-left-open.svg`) - e.g. replace logo with icon or overlay it.
- **On click of logo** (when collapsed): Expand sidebar (prevent navigation to homepage).

**Implementation**:

- Structure: Logo section when collapsed contains logo `<img>` and expand icon `<img>`. Both in a wrapper. Default: logo visible, icon `display: none`. Hover: logo hidden, icon visible. Single click target.
- Make the logo section a `<div>` or `<button>` when collapsed instead of `<a>` - or keep `<a>` but add JS: when collapsed, `click` handler calls `preventDefault()` and `setCollapsed(false)`, does not navigate.
- CSS: `#sidebar.sidebar-collapsed #sidebar-collapse-toggle { display: none !important; }` - hide toggle in collapsed.
- Add `#sidebar-collapsed-expand-hint` - an img that appears on logo hover when collapsed. Use `#sidebar-logo-section:hover #sidebar-collapsed-expand-hint { display: block }` and `#sidebar-collapsed-expand-hint { display: none }` by default when collapsed.
- Logo link: In collapsed mode, the logo section needs to be clickable to expand. Option A: Wrap logo + hint in a div, use `role="button"` and click handler. Option B: Keep the `<a>`, add `data-collapsed-click` behavior - JS intercepts click when collapsed.

**Recommended structure**:

```html
<div id="sidebar-logo-section">
  <a id="sidebar-logo-link" href="/freedevtools/">
    <img id="sidebar-logo-img" ... />
    <img id="sidebar-collapsed-expand-hint" src=".../panel-left-open.svg" 
         style="display:none" alt="Expand" />  <!-- shown on hover when collapsed -->
    <div id="sidebar-logo-text-container">...</div>
  </a>
  <button id="sidebar-collapse-toggle">  <!-- visible only when expanded -->
    <img src=".../panel-left-close.svg" alt="Collapse" />
  </button>
</div>
```

- When collapsed: hide `#sidebar-logo-text-container`, hide `#sidebar-collapse-toggle`, show `#sidebar-logo-img` by default. On `#sidebar-logo-section:hover` when collapsed: hide logo img, show expand hint img.
- Click on logo section when collapsed: JS handler prevents default, calls setCollapsed(false). Need to ensure the `<a>` doesn't navigate - either use a div with click handler when collapsed, or add `event.preventDefault()` in click handler when collapsed.

Simpler: When collapsed, the logo link's href could be `#` or we use a click handler that checks `isCollapsed()` and preventsDefault + expand. The link wraps both logo and expand hint.

## 5. Files to Modify


| File                                             | Changes                                                                                                                                                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [sidebar.templ](components/common/sidebar.templ) | Custom tooltip CSS + wrap nav links and search btn; width 5rem; replace chevron with panel img tags; collapsed: hide toggle, add expand-hint img, logo-section hover shows it, click handler to expand |


## 6. JS Updates

In the collapse init script:

- Replace chevron with two `<img>` elements (or single img with src swap). Toggle button shows `panel-left-close.svg` when expanded.
- When collapsed: add click listener to `#sidebar-logo-section` or `#sidebar-logo-link` that checks `isCollapsed()` and if true, `e.preventDefault()`, `setCollapsed(false)`. Remove or adjust so it only fires when collapsed.
- Collapsed hover: pure CSS can handle `.sidebar-collapsed #sidebar-logo-section:hover #sidebar-logo-img { display: none }` and `.sidebar-collapsed #sidebar-logo-section:hover #sidebar-collapsed-expand-hint { display: block }` - but the hint needs to be a sibling or descendant of the hover target.

