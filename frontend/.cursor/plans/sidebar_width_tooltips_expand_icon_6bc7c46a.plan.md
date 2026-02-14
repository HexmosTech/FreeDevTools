---
name: Sidebar Width Tooltips Expand Icon
overview: Increase expanded sidebar width, fix collapsed expand-icon vertical alignment so nav icons do not shift, and fix nav link tooltips not showing (likely overflow clipping or fallback to native title).
todos: []
isProject: false
---

# Sidebar: Width, Expand Icon Position, and Tooltip Fixes

## 1. Expanded sidebar width

**Current**: In [sidebar.templ](components/common/sidebar.templ) the aside uses inline `width: 20rem` and the desktop media query sets `#sidebar { width: 20rem !important; }` (around line 499). If your copy still has 14rem, increase it.

**Change**: Make the expanded sidebar a bit wider. Update both places to the same value (e.g. **16rem** if currently 14rem, or **22rem** if you want wider than 20rem). No change needed in [base_layout.templ](components/layouts/base_layout.templ) unless it sets a sidebar width (it does not).

- Inline style on `<aside id="sidebar">`: set `width: <value>rem`.
- In `@media (min-width: 1024px)`, rule `#sidebar { ... width: <value>rem !important; }`: set the same value.

---

## 2. Collapsed mode: expand icon same position as logo (no layout shift)

**Issue**: The expand hint icon is smaller (1.25rem) than the logo (2rem), so on hover the row shrinks and the nav icons below move up.

**Fix**: Keep the logo row height the same when swapping logo and expand icon.

**Option A (recommended)**  
When collapsed and on hover, make the expand hint occupy the same 2rem×2rem box as the logo and center the icon inside:

- In [sidebar.templ](components/common/sidebar.templ), in the collapsed + hover CSS block, target `#sidebar-collapsed-expand-hint` when it is shown:
  - Set a fixed size: `width: 2rem; height: 2rem;` (same as logo).
  - Center the graphic: e.g. `display: flex !important; align-items: center; justify-content: center;` (then the `<img>` inside will need to be a direct child, or wrap the img in a span; currently the hint is an `<img>` inside the link, so the link would need to be the flex container when the hint is visible, or make the img `object-fit: contain` and give the img `width: 1.25rem; height: 1.25rem; margin: auto;` and the expand hint container 2rem×2rem).

Simpler: keep the expand hint as an `<img>` and in CSS when collapsed + hover:

- `#sidebar.sidebar-collapsed #sidebar-logo-section:hover #sidebar-collapsed-expand-hint`:  
`display: flex !important; width: 2rem; height: 2rem; align-items: center; justify-content: center;`  
But an `<img>` cannot be a flex container. So either:
  - Give the **link** when collapsed a fixed min-height (e.g. `min-height: 2rem`) and center its content, and make the expand hint img `width: 2rem; height: 2rem; object-fit: contain;`, so the icon sits in a 2rem box and the row height stays the same, or
  - Add a wrapper span around the expand-hint img with `display: flex; width: 2rem; height: 2rem; align-items: center; justify-content: center;` and show that on hover.

**Concrete approach**  

- When collapsed, give `#sidebar-logo-link` a fixed height so the row does not change: e.g. `min-height: 2.5rem` or `height: 2.5rem` in the collapsed block.
- When collapsed + hover, make `#sidebar-collapsed-expand-hint` take the same space as the logo: `width: 2rem; height: 2rem; object-fit: contain;` (and ensure it’s shown with `display: block !important` or `flex` as now). That keeps the icon visually in the same vertical band and prevents the shift.

Optional: add a bit of padding-top to the logo section when collapsed (e.g. `padding-top: 1.25rem`) so the logo/expand icon row is slightly lower and alignment with the rest of the layout is consistent.

---

## 3. Nav link tooltips not showing

**Context**: Custom tooltips (`.sidebar-tooltip-wrap` and `.sidebar-tooltip`) were added; Search and Sign In still show tooltips (likely `title` or a different implementation). Nav link tooltips (VS Code extension, My Bookmarks, etc.) no longer show.

**Likely cause**: The tooltip is positioned with `left: 100%` (to the right of the link). The nav has `overflow-y: auto` (`#sidebar-nav`). In CSS, when one overflow axis is not `visible`, the other is often computed as `auto`, so horizontal overflow can be clipped and the tooltip never visible.

**Fix options** (in order of preference):

**A. Stop clipping: move scroll to an inner wrapper**  

- In [sidebar.templ](components/common/sidebar.templ), change structure to:
  - `<nav id="sidebar-nav" style="flex: 1 1 0%; overflow: visible; display: flex; flex-direction: column; min-height: 0;">`
  - Inside it, add a scroll wrapper: `<div id="sidebar-nav-scroll" style="overflow-y: auto; overflow-x: visible; flex: 1; min-height: 0;">` (or `overflow: visible` if you accept no scroll on this div).
  - Put the current `#sidebar-nav-container` and all nav groups inside `#sidebar-nav-scroll`.

Note: Many engines treat `overflow-x: visible` with `overflow-y: auto` as both `auto`, so the tooltips might still be clipped. If so, use B or C.

**B. Tooltips with `position: fixed**`  

- Keep the same hover trigger, but give `.sidebar-tooltip` `position: fixed` and remove `left: 100%`.
- Add a small script (e.g. in the same sidebar script block): on `mouseenter` of `.sidebar-tooltip-wrap`, read the link’s `getBoundingClientRect()`, set the tooltip’s `left`/`top`, and show it; on `mouseleave` hide it (with your 1s delay). Then the tooltip is not inside any overflow container and will show.

**C. Restore native `title` as fallback**  

- Re-add `title="..."` on each nav link (and keep the custom `.sidebar-tooltip` for when it’s not clipped). Then at least the browser tooltip appears after a delay when the custom one is clipped.

**Additional checks**  

- Ensure `.sidebar-tooltip` has a high enough `z-index` (e.g. 1000) so it appears above main content.
- Ensure tooltip background/color has enough contrast (current dark bg is fine; keep it).

---

## Files to touch


| File                                                               | Changes                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [components/common/sidebar.templ](components/common/sidebar.templ) | (1) Bump expanded width in aside + desktop media query. (2) Collapsed: fix expand-hint size/alignment (same 2rem box or min-height on logo link + padding if needed). (3) Tooltips: either add inner scroll wrapper and try overflow-x: visible, or switch tooltips to fixed + JS positioning, or re-add `title` on nav links. |


No changes to [components/layouts/base_layout.templ](components/layouts/base_layout.templ) for sidebar width unless you have layout-specific overrides there.