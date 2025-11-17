# SSR Mode Conversion Guide

This document details the process of converting Astro static pages to SSR (Server-Side Rendering) mode, specifically for the TLDR section. Use this guide when converting other sections (MCP, SVG icons, etc.) to SSR mode.

## Table of Contents

1. [Overview](#overview)
2. [Key Changes Required](#key-changes-required)
3. [Route Structure Changes](#route-structure-changes)
4. [Removing Static Generation Code](#removing-static-generation-code)
5. [Content Collection Usage](#content-collection-usage)
6. [Middleware for Route Priority](#middleware-for-route-priority)
7. [Step-by-Step Conversion Process](#step-by-step-conversion-process)
8. [Common Issues and Solutions](#common-issues-and-solutions)

---

## Overview

### What Changed

- **Before**: Pages were pre-rendered at build time using `getStaticPaths()`
- **After**: Pages are rendered on-demand at request time (SSR mode)

### Why SSR?

- Dynamic content that changes frequently
- Large number of pages that would be slow to pre-render
- Need for real-time data fetching

---

## Key Changes Required

### 1. Remove `getStaticPaths()`

**Static Mode (Before):**

```typescript
export async function getStaticPaths() {
  const items = await getCollection('collection');
  return items.map((item) => ({
    params: { id: item.id },
    props: { data: item.data },
  }));
}

const { data } = Astro.props; // Data from getStaticPaths
```

**SSR Mode (After):**

```typescript
export const prerender = false; // Explicitly disable prerendering

const { id } = Astro.params; // Get params directly
const entry = await getCollection('collection');
const item = entry.find((e) => e.id === id); // Fetch data directly
```

### 2. Fetch Data Directly in Component

In SSR mode, you cannot use `Astro.props` from `getStaticPaths()`. Instead:

- Fetch data directly using `getCollection()` or other data sources
- Use `Astro.params` to get route parameters
- Handle data fetching asynchronously in the frontmatter

---

## Route Structure Changes

### Problem: Route Collisions in SSR

In SSR mode, Astro cannot have ambiguous dynamic routes. For example:

- `/tldr/[platform]/[command].astro`
- `/tldr/[platform]/[page].astro`

Both match the pattern `/tldr/[platform]/[something]`, causing collisions.

### Solution: Consolidate Routes

**Before (2 separate files):**

```
src/pages/tldr/[platform]/
  ├── [command].astro  (handles /tldr/platform/command)
  └── [page].astro     (handles /tldr/platform/2)
```

**After (1 consolidated file):**

```
src/pages/tldr/[platform]/
  └── [slug].astro     (handles both /tldr/platform/command AND /tldr/platform/2)
```

### Implementation Pattern

```typescript
// src/pages/tldr/[platform]/[slug].astro
---
const { platform, slug } = Astro.params;

// Check if slug is numeric (pagination) or a string (command)
const isNumericPage = slug && /^\d+$/.test(slug);
const pageNumber = isNumericPage ? parseInt(slug, 10) : null;
const command = !isNumericPage ? slug : null;

if (pageNumber !== null) {
  // Handle pagination route
  // ... pagination logic
} else if (command) {
  // Handle command route
  // ... command logic
}
---
```

---

## Removing Static Generation Code

### Files to Remove/Modify

1. **Remove `getStaticPaths()` functions** from all SSR pages
2. **Remove `export const prerender = true`** (or set to `false`)
3. **Remove utility functions** that generate static paths (if only used for static generation)

### Example: Before and After

**Before (Static):**

```typescript
// src/pages/tldr/[platform]/[command].astro
export async function getStaticPaths() {
  const entries = await getCollection('tldr');
  return entries.map((entry) => ({
    params: { platform: '...', command: '...' },
  }));
}

const { platform, command } = Astro.params;
const { data } = Astro.props; // ❌ Won't work in SSR
```

**After (SSR):**

```typescript
// src/pages/tldr/[platform]/[slug].astro
export const prerender = false; // ✅ Explicitly SSR

const { platform, slug } = Astro.params;
const entries = await getCollection('tldr'); // ✅ Fetch directly
const entry = entries.find(/* ... */);
```

---

## Content Collection Usage

### How Content Collections Work in SSR

Content collections are defined in `src/content.config.ts` and work the same in both static and SSR modes:

```typescript
// src/content.config.ts
const tldr = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: 'data/tldr',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // ... other fields
  }),
});
```

### Accessing Collections in SSR

```typescript
import { getCollection } from 'astro:content';

// Get all entries
const allEntries = await getCollection('tldr');

// Filter entries
const platformEntries = allEntries.filter((entry) => {
  const pathParts = entry.id.split('/');
  return pathParts[pathParts.length - 2] === platform;
});

// Access entry data (validated by schema)
const title = entry.data.title; // ✅ Type-safe
const description = entry.data.description; // ✅ Type-safe
const keywords = entry.data.keywords; // ✅ Optional, type-safe
```

### Rendering Content

```typescript
import { render } from 'astro:content';

const { Content } = await render(entry);
// Use <Content /> in template
```

---

## Middleware for Route Priority

### Problem: Route Priority in SSR

In SSR mode, route priority doesn't always work as expected. For example:

- `/tldr/[page].astro` might match `/tldr/adb/` before `/tldr/[platform]/index.astro`

### Solution: Handle in Route File (Recommended)

**Avoid middleware rewrites** - they can cause redirect loops. Instead, handle route priority directly in the route file that matches first:

```typescript
// src/pages/tldr/[page].astro
---
const { page } = Astro.params;
const urlPath = Astro.url.pathname;

// Early return if no page param
if (!page) {
  return new Response(null, { status: 404 });
}

// Check if page param is numeric
if (!/^\d+$/.test(page)) {
  // If not numeric, it might be a platform name
  // Redirect to add trailing slash if missing (BEFORE checking platform)
  if (!urlPath.endsWith('/')) {
    return Astro.redirect(`${urlPath}/`, 301);
  }

  const allPlatforms = await getAllTldrPlatforms();
  const isPlatform = allPlatforms.some((p) => p.name === page);

  if (isPlatform) {
    // This is a platform index route - render it here
    // This is a workaround for route priority not working as expected
    const platform = page!;
    const allCommands = await getTldrPlatformCommands(platform);
    // ... render platform index content
  } else {
    // Not a valid platform - 404
    return new Response(null, { status: 404 });
  }
} else {
  // Handle pagination route
  // ...
}
---
```

### Alternative: Minimal Middleware (If Needed)

If you must use middleware, keep it simple and avoid rewrites that conflict with route handling:

```typescript
// src/middleware.ts
import type { MiddlewareHandler } from 'astro';

// Minimal middleware - just pass through
// Route files handle their own logic to avoid conflicts
export const onRequest: MiddlewareHandler = async (context, next) => {
  return next();
};
```

### Why Avoid Middleware Rewrites?

1. **Redirect Loops**: Middleware rewrites can conflict with route file redirects, causing infinite loops
2. **Route Priority**: Astro's route matching happens after middleware, so rewrites may not work as expected
3. **Complexity**: Handling logic in the route file is simpler and more maintainable
4. **Performance**: Avoiding middleware lookups reduces overhead on every request

---

## Step-by-Step Conversion Process

### Step 1: Identify Route Collisions

Check for routes that could match the same URL pattern:

```bash
# Look for conflicting dynamic routes
find src/pages/section -name "*.astro" | grep -E "\[.*\]"
```

Common collisions:

- `[page].astro` vs `[category]/index.astro`
- `[id].astro` vs `[slug].astro`
- `[name].astro` vs `[category]/[name].astro`

### Step 2: Consolidate Conflicting Routes

**Option A: Merge into single route with logic**

```typescript
// [slug].astro - handles both cases
const isNumeric = /^\d+$/.test(slug);
if (isNumeric) {
  // Handle pagination
} else {
  // Handle content
}
```

**Option B: Use different path structures**

```
Before: /section/[page].astro and /section/[category]/index.astro
After:  /section/page/[page].astro and /section/[category]/index.astro
```

### Step 3: Remove Static Generation Code

For each page file:

1. **Add SSR flag:**

   ```typescript
   export const prerender = false;
   ```

2. **Remove `getStaticPaths()`:**

   ```typescript
   // ❌ Remove this
   export async function getStaticPaths() { ... }
   ```

3. **Replace `Astro.props` with direct fetching:**

   ```typescript
   // ❌ Before
   const { data } = Astro.props;

   // ✅ After
   const { id } = Astro.params;
   const entries = await getCollection('collection');
   const item = entries.find((e) => e.id === id);
   ```

### Step 4: Update Data Fetching

**Before:**

```typescript
// Data passed via props from getStaticPaths
const { platforms, items } = Astro.props;
```

**After:**

```typescript
// Fetch data directly
const allPlatforms = await getAllPlatforms();
const items = await getItems();
```

### Step 5: Handle Route Priority Issues

If route priority doesn't work correctly:

**Option A: Handle in Route File (Recommended)**

- Check if route should be handled by another route in the file that matches first
- If so, render that route's content directly
- Handle trailing slash redirects **before** checking route validity
- Example: `[page].astro` detecting platform routes and rendering platform index

```typescript
// In [page].astro - handles both pagination and platform routes
if (!/^\d+$/.test(page)) {
  // Redirect trailing slash FIRST
  if (!urlPath.endsWith('/')) {
    return Astro.redirect(`${urlPath}/`, 301);
  }

  // Then check if it's a platform
  const isPlatform = await checkIfPlatform(page);
  if (isPlatform) {
    // Render platform index content directly
    return renderPlatformIndex(page);
  }
}
```

**Option B: Minimal Middleware (Only if absolutely necessary)**

- Keep middleware simple - just pass through
- Avoid `context.rewrite()` as it can cause redirect loops
- Let route files handle their own logic

### Step 6: Update Utility Functions

Remove or modify utility functions that only generate static paths:

**Before:**

```typescript
// Only used for getStaticPaths
export async function generateStaticPaths() {
  return paths.map(p => ({ params: p, props: {...} }));
}
```

**After:**

```typescript
// Used for direct data fetching
export async function getAllItems() {
  const entries = await getCollection('collection');
  return entries.map((entry) => ({
    id: entry.id,
    data: entry.data,
    // ... transform as needed
  }));
}
```

### Step 7: Test All Routes

Test every route type:

```bash
# Test main index
curl http://localhost:4321/freedevtools/section/

# Test pagination
curl http://localhost:4321/freedevtools/section/2/

# Test category index
curl http://localhost:4321/freedevtools/section/category/

# Test category pagination
curl http://localhost:4321/freedevtools/section/category/2/

# Test item pages
curl http://localhost:4321/freedevtools/section/category/item/
```

---

## Common Issues and Solutions

### Issue 1: Route Collision Warnings

**Error:**

```
[WARN] [router] The route "/section/[id]" is defined in both
"src/pages/section/[id].astro" and "src/pages/section/[slug].astro"
using SSR mode. A dynamic SSR route cannot be defined more than once.
```

**Solution:**

- Consolidate into single route file
- Use logic to distinguish between different types
- Example: Check if param is numeric vs string

### Issue 2: `getStaticPaths()` Ignored Warning

**Error:**

```
[WARN] [router] getStaticPaths() ignored in dynamic page
/src/pages/section/[page].astro. Add `export const prerender = true;`
to prerender the page as static HTML during the build process.
```

**Solution:**

- Remove `getStaticPaths()` function
- Add `export const prerender = false;`
- Fetch data directly in component

### Issue 3: `Astro.props` is Undefined

**Error:**

```
TypeError: Cannot read properties of undefined (reading 'length')
```

**Solution:**

- `Astro.props` only works with `getStaticPaths()` in static mode
- In SSR, fetch data directly:

  ```typescript
  // ❌ Won't work in SSR
  const { items } = Astro.props;

  // ✅ Works in SSR
  const items = await getItems();
  ```

### Issue 4: Redirect Loops

**Error:**

```
ERR_TOO_MANY_REDIRECTS
HTTP 508: Astro detected a loop where you tried to call the rewriting logic more than four times
```

**Solution:**

The most common cause is middleware trying to rewrite routes while the route file also handles redirects. **Fix: Remove middleware rewrites and handle redirects directly in the route file.**

1. **Simplify or remove middleware:**

   ```typescript
   // src/middleware.ts - Keep it simple
   export const onRequest: MiddlewareHandler = async (context, next) => {
     return next(); // Just pass through
   };
   ```

2. **Handle trailing slashes in route file BEFORE other logic:**

   ```typescript
   // In [page].astro or similar route file
   const { page } = Astro.params;
   const urlPath = Astro.url.pathname;

   // Check if page param is numeric
   if (!/^\d+$/.test(page)) {
     // Redirect to add trailing slash FIRST (before platform detection)
     if (!urlPath.endsWith('/')) {
       return Astro.redirect(`${urlPath}/`, 301);
     }

     // Then check if it's a platform
     const allPlatforms = await getAllPlatforms();
     const isPlatform = allPlatforms.some((p) => p.name === page);
     // ... rest of logic
   }
   ```

3. **Key principles:**
   - Handle trailing slash redirects **before** checking if route is valid
   - Don't use `context.rewrite()` in middleware if route files also handle redirects
   - One redirect per request - avoid multiple redirects in the same flow

### Issue 5: Route Priority Not Working

**Symptom:**

- Wrong route handles a URL
- Expected: `/section/[category]/index.astro`
- Actual: `/section/[page].astro` matches first
- OR: Expected: `/section/[page].astro`
- Actual: `/section/[category]/index.astro` matches first (more specific route)

**Solution:**

**Option A: Handle in the route file that matches first (Recommended)**

When a more specific (nested) route matches first, handle the conflicting case directly:

```typescript
// In [category]/index.astro (matches first for /section/category/)
if (/^\d+$/.test(category)) {
  // This is actually a pagination route - render it here
  const currentPage = parseInt(category, 10);
  // ... fetch and render pagination content directly
  return <BaseLayout>...</BaseLayout>;
}
// Otherwise handle as category index
```

**Option B: Handle in the less specific route file**

When a less specific route matches first, detect and handle the more specific case:

```typescript
// In [page].astro (matches first for /section/page/)
if (!/^\d+$/.test(page)) {
  // This might be a category - check and handle
  const allCategories = await getAllCategories();
  if (allCategories.includes(page)) {
    // Render category index content directly
    return <CategoryIndex category={page} />;
  }
}
// Otherwise handle as pagination
```

**Key Principle:** Handle the conflicting case in whichever route file matches first, rather than trying to redirect or rewrite.

---

## TLDR-Specific Implementation Details

### Route Structure

```
src/pages/tldr/
├── index.astro                    # Main index (/tldr/)
├── [page].astro                   # Main pagination (/tldr/2/)
│   └── Handles platform routes too (workaround for route priority)
├── [platform]/
│   ├── index.astro                # Platform index (/tldr/adb/)
│   └── [slug].astro               # Platform pagination + commands
│       └── Handles both /tldr/adb/2/ and /tldr/adb/command/
└── credits.astro                  # Static page
```

### Key Files Modified

1. **`src/pages/tldr/[platform]/[slug].astro`**
   - Consolidated `[command].astro` and `[page].astro`
   - Checks if slug is numeric (pagination) or string (command)
   - Fetches data directly using `getCollection('tldr')`

2. **`src/pages/tldr/[page].astro`**
   - Removed `getStaticPaths()`
   - Fetches platforms directly using `getAllTldrPlatforms()`
   - Handles platform index routes as workaround for route priority
   - **Handles trailing slash redirects BEFORE platform detection** (prevents redirect loops)
   - Early return for missing page param

3. **`src/pages/tldr/[platform]/index.astro`**
   - Removed `getStaticPaths()`
   - Fetches commands directly using `getTldrPlatformCommands()`

4. **`src/lib/tldr-utils.ts`**
   - Kept utility functions but they now return data directly
   - Removed static path generation functions (or made them SSR-compatible)

5. **`src/middleware.ts`**
   - Simplified to just pass through (no rewrites)
   - Route files handle their own logic to avoid redirect loops
   - Middleware rewrites were removed to prevent conflicts

### Content Collection Usage

```typescript
// Get all tldr entries
const tldrEntries = await getCollection('tldr');

// Access validated data (from content.config.ts schema)
entry.data.title; // string (required)
entry.data.description; // string (required)
entry.data.keywords; // string[] (optional)
entry.data.relatedTools; // array (optional)

// Render markdown content
const { Content } = await render(entry);
```

---

## Checklist for Converting Other Sections

When converting MCP, SVG icons, or other sections:

- [ ] Identify all dynamic route files
- [ ] Check for route collisions (same URL pattern)
- [ ] Consolidate conflicting routes into single files
- [ ] Remove all `getStaticPaths()` functions
- [ ] Add `export const prerender = false;` to all SSR pages
- [ ] Replace `Astro.props` with direct data fetching
- [ ] Update utility functions to return data instead of static paths
- [ ] Test all route types (index, pagination, category, items)
- [ ] Handle route priority in route files (avoid middleware rewrites)
- [ ] Handle trailing slash redirects BEFORE checking route validity
- [ ] Verify content collection access works correctly
- [ ] Check for any build warnings about ignored `getStaticPaths()`
- [ ] Test redirects don't cause loops
- [ ] Verify all pages render correctly in SSR mode

---

## MCP-Specific Implementation Details

### Route Structure

```
src/pages/mcp/
├── index.astro                    # Main index (/mcp/)
├── [page].astro                   # Main pagination (/mcp/2/)
│   └── Handles category detection (redirects to /category/1/)
├── [category]/
│   ├── index.astro                # Category index (/mcp/category/)
│   │   └── Handles numeric categories (pagination) directly
│   └── [slug].astro               # Category pagination + repositories
│       └── Handles both /mcp/category/1/ and /mcp/category/repo-name/
└── credits.astro                  # Static page
```

### Key Files Modified

1. **`src/pages/mcp/[category]/[slug].astro`**
   - Consolidated `[page].astro` and `[repositoryId].astro`
   - Checks if slug is numeric (pagination) or string (repository)
   - Fetches data directly using `getEntry('mcpCategoryData', category)`
   - Uses `Object.entries()` to map repositories with IDs

2. **`src/pages/mcp/[page].astro`**
   - Removed `getStaticPaths()`
   - Fetches categories directly using `getAllMcpCategories()`
   - Handles category detection (redirects to `/category/1/` if it's a category name)
   - Handles trailing slash redirects BEFORE checking category validity

3. **`src/pages/mcp/[category]/index.astro`**
   - Removed `getStaticPaths()`
   - **Handles numeric categories directly** - renders pagination content when category is numeric
   - This is a workaround for route priority: `[category]/index.astro` matches `/mcp/1/` before `[page].astro`
   - Validates category exists before redirecting to page 1

4. **`src/lib/mcp-utils.ts`**
   - Added SSR utility functions:
     - `getAllMcpCategories()` - Get all categories for directory pagination
     - `getAllMcpCategoryIds()` - Get category IDs for validation
     - `getMcpCategoryById()` - Get category by ID
     - `getMcpCategoryRepositories()` - Get repositories for a category
     - `getMcpMetadata()` - Get MCP metadata

### Route Priority Solution for MCP

**Problem:** `/mcp/[category]` route collision between `[category]/index.astro` and `[page].astro`

**Solution:** Handle numeric categories directly in `[category]/index.astro`:

```typescript
// src/pages/mcp/[category]/index.astro
---
const { category } = Astro.params;

// If category is numeric, this is actually a pagination route
// Render pagination content directly (workaround for route priority)
if (/^\d+$/.test(category)) {
  const currentPage = parseInt(category, 10);
  // ... fetch and render pagination content
  return <BaseLayout>...</BaseLayout>;
}

// Otherwise, validate category and redirect to page 1
const allCategoryIds = await getAllMcpCategoryIds();
if (!allCategoryIds.includes(category)) {
  return new Response(null, { status: 404 });
}
return Astro.redirect(`/freedevtools/mcp/${category}/1/`, 301);
---
```

**Key Learning:** When a more specific (nested) route matches first, handle the conflicting case directly in that route file rather than trying to redirect or rewrite.

### Content Collection Usage

```typescript
// Get category entry directly (more efficient than getCollection + find)
const categoryEntry = await getEntry('mcpCategoryData', category);

// Access category data
const categoryData = categoryEntry.data;
const repositories = categoryData.repositories;

// Map repositories with IDs
const allRepositories = Object.entries(repositories).map(
  ([repositoryId, server]) => ({
    ...server,
    repositoryId: repositoryId,
  })
);
```

---

## Example: Converting MCP Pages (Actual Implementation)

### Step 1: Identify Collisions

- `/mcp/[category]` collision: `[category]/index.astro` vs `[page].astro`
- `/mcp/[category]/[page]` collision: `[page].astro` vs `[repositoryId].astro`

### Step 2: Consolidate Routes

**Consolidate `[page].astro` and `[repositoryId].astro` into `[slug].astro`:**

```typescript
// [slug].astro - handles both pagination and repositories
const isNumericPage = /^\d+$/.test(slug);
const pageNumber = isNumericPage ? parseInt(slug, 10) : null;
const repositoryId = !isNumericPage ? slug : null;

if (pageNumber !== null) {
  // Handle pagination route
} else if (repositoryId) {
  // Handle repository route
}
```

**Handle route priority in `[category]/index.astro`:**

```typescript
// [category]/index.astro - handles numeric categories directly
if (/^\d+$/.test(category)) {
  // Render pagination content directly
  // This prevents [page].astro from needing to handle it
}
```

### Step 3: Remove Static Code

- Remove all `getStaticPaths()` functions
- Add `export const prerender = false;` to all files
- Replace `Astro.props` with direct data fetching

### Step 4: Test

```bash
# Test main pagination
curl http://localhost:4321/freedevtools/mcp/1/
curl http://localhost:4321/freedevtools/mcp/2/

# Test category index
curl http://localhost:4321/freedevtools/mcp/apis-and-http-requests/

# Test category pagination
curl http://localhost:4321/freedevtools/mcp/apis-and-http-requests/1/
curl http://localhost:4321/freedevtools/mcp/apis-and-http-requests/2/

# Test repository pages
curl http://localhost:4321/freedevtools/mcp/scheduling-and-calendars/mumunha--cal_dot_com_mcpserver/
```

---

## Performance Considerations

### Caching in Middleware

Middleware runs on every request, so cache expensive operations:

```typescript
let cache: string[] | null = null;

async function getExpensiveData() {
  if (cache) return cache;
  // Expensive operation
  cache = await expensiveOperation();
  return cache;
}
```

### Content Collection Caching

Astro automatically caches content collections, but be mindful of:

- Large collections (consider pagination)
- Complex filtering operations
- Multiple `getCollection()` calls (cache results when possible)

---

## Summary

**Key Takeaways:**

1. SSR mode requires direct data fetching, not `getStaticPaths()`
2. Route collisions must be resolved by consolidating routes
3. **Handle route priority in route files, not middleware** (avoids redirect loops)
4. **Handle conflicting cases in whichever route matches first** (more specific routes match before less specific ones)
5. **Handle trailing slash redirects BEFORE checking route validity**
6. **Use `getEntry()` for direct lookups** instead of `getCollection()` + `find()` when you know the ID
7. Content collections work the same in both modes
8. Always test all route types after conversion
9. Keep middleware simple - avoid rewrites that conflict with route handling

**Files Typically Modified:**

- Route files: Remove `getStaticPaths()`, add `prerender = false`, handle route priority directly
- Utility files: Change from path generation to data fetching
- Middleware: Keep simple (pass through) or remove entirely
- No changes needed to `content.config.ts` (collections work in both modes)

**Critical Pattern for Redirect Loops:**

Always handle trailing slash redirects **before** checking if a route is valid:

```typescript
// ✅ CORRECT: Redirect first, then check
if (!urlPath.endsWith('/')) {
  return Astro.redirect(`${urlPath}/`, 301);
}
const isValid = await checkRoute(page);

// ❌ WRONG: Check first, then redirect (can cause loops)
const isValid = await checkRoute(page);
if (isValid && !urlPath.endsWith('/')) {
  return Astro.redirect(`${urlPath}/`, 301);
}
```
