# BaseLayout JSON-LD Usage Examples

This document shows how to use the improved BaseLayout with comprehensive JSON-LD structured data for different page types.

## Overview

The BaseLayout now automatically detects page types and generates appropriate JSON-LD schemas based on the URL path and provided props. It supports:

- **ImageObject** - Individual SVG icon pages
- **SoftwareApplication** - Tool pages
- **TechArticle** - Command/Cheatsheet pages
- **CollectionPage** - Category/List pages
- **WebPage** - Default fallback

## Page Type Detection

The layout automatically detects page types based on URL patterns:

```typescript
// SVG Icon pages
/svg_icons/                    → CollectionPage (main page)
/svg_icons/category/           → CollectionPage (category page)
/svg_icons/category/icon/      → ImageObject (individual icon)

// Tool pages
/t/tool-name/                  → SoftwareApplication

// Cheatsheet pages
/c/                            → CollectionPage (main page)
/c/category/                   → CollectionPage (category page)
/c/category/cheatsheet/        → TechArticle (individual cheatsheet)

// TLDR pages
/tldr/                         → CollectionPage (main page)
/tldr/platform/                → CollectionPage (platform page)
/tldr/platform/command/        → TechArticle (individual command)

// Emoji pages
/emojis/                       → CollectionPage (main page)
/emojis/category/              → CollectionPage (category page)
```

## Usage Examples

### 1. Individual SVG Icon Page

```astro
---
// Individual icon page: /svg_icons/category/icon
const { iconData } = Astro.props;
---

<BaseLayout
  name={iconData.name}
  path={`/freedevtools/svg_icons/${category}/${icon}`}
  title={`Free ${iconData.name} SVG Icon Download | Online Free DevTools by Hexmos`}
  description={`Download ${iconData.name} SVG icon for free. PNG icon. No registration required.`}
  canonical={`https://hexmos.com/freedevtools/svg_icons/${category}/${icon}`}

  // Image-specific props
  imgWidth={svgDimensions.width}
  imgHeight={svgDimensions.height}
  thumbnailUrl={`https://hexmos.com/freedevtools/svg_icons/${category}/${icon}.svg`}
  encodingFormat="image/svg+xml"

  // Icon-specific props
  iconName={iconData.name}
  iconCategory={iconData.category}
  iconTags={iconData.tags}
  author={iconData.author}
  license={iconData.license}

  // Hierarchical structure
  partOf={`${iconData.category} Icons`}
  partOfUrl={`https://hexmos.com/freedevtools/svg_icons/${category}`}
  category={iconData.category}
  keywords={iconData.tags}
>
  <!-- Page content -->
</BaseLayout>
```

**Generated JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "name": "icon-name",
  "description": "Download icon-name SVG icon for free...",
  "contentUrl": "https://hexmos.com/freedevtools/svg_icons/category/icon",
  "thumbnailUrl": "https://hexmos.com/freedevtools/svg_icons/category/icon.svg",
  "encodingFormat": "image/svg+xml",
  "width": 24,
  "height": 24,
  "keywords": "icon, svg, free, download",
  "about": {
    "@type": "Thing",
    "name": "category"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### 2. SVG Icons Category Page

```astro
---
// Category page: /svg_icons/category
const { category, totalIcons } = Astro.props;
---

<BaseLayout
  name={`${category} SVG Icons`}
  path={`/freedevtools/svg_icons/${category}`}
  title={`${category} SVG Icons - Free Download & Edit | Online Free DevTools by Hexmos`}
  description={`Download free ${category} SVG icons instantly. ${totalIcons} icons available.`}
  canonical={`https://hexmos.com/freedevtools/svg_icons/${category}`}

  // Collection page props
  totalItems={totalIcons}
  category={category}
  partOf="SVG Icons"
  partOfUrl="https://hexmos.com/freedevtools/svg_icons/"
  keywords={[category, "svg icons", "vector graphics", "free icons"]}
>
  <!-- Page content -->
</BaseLayout>
```

**Generated JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "category SVG Icons",
  "description": "Download free category SVG icons instantly...",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 150
  }
}
```

### 3. Tools Collection Page

```astro
---
// Tools main page: /t/
const tools = getAllUniqueTools();
---

<BaseLayout
  name="Free DevTools"
  path="/freedevtools/t/"
  title="Free DevTools - Essential Developer Utilities Online | No Registration Required"
  description="Collection of free, open-source developer tools including Base64 converter, JSON prettifier, and more."
  canonical="https://hexmos.com/freedevtools/t/"

  // Collection page props
  totalItems={tools.length}
  keywords={["developer tools", "online tools", "free tools", "productivity", "utilities"]}
  features={["No registration", "Free to use", "Online tools", "Developer utilities"]}
  toolCategory="Developer Tools"
>
  <!-- Page content -->
</BaseLayout>
```

### 4. Individual Tool Page

```astro
---
// Individual tool page: /t/tool-name
const { toolData } = Astro.props;
---

<BaseLayout
  name={toolData.name}
  path={`/freedevtools/t/${toolData.slug}`}
  title={`${toolData.name} - Free Online Tool | Free DevTools by Hexmos`}
  description={toolData.description}
  canonical={`https://hexmos.com/freedevtools/t/${toolData.slug}`}

  // Tool-specific props
  toolType={toolData.type}
  toolCategory={toolData.category}
  features={toolData.features}
  keywords={toolData.keywords}
  softwareVersion={toolData.version}
>
  <!-- Page content -->
</BaseLayout>
```

**Generated JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Base64 Encoder",
  "description": "Encode and decode Base64 strings online...",
  "applicationCategory": "DeveloperTool",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "softwareVersion": "1.0.0",
  "featureList": ["Encode", "Decode", "Copy to clipboard"],
  "keywords": "base64, encode, decode, online tool",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

### 5. Command/Cheatsheet Page

```astro
---
// Individual command page: /tldr/platform/command
const { commandData } = Astro.props;
---

<BaseLayout
  name={commandData.name}
  path={`/freedevtools/tldr/${platform}/${command}`}
  title={`${commandData.name} Command - ${platform} Documentation | Free DevTools`}
  description={`Learn how to use the ${commandData.name} command on ${platform}. Examples and usage.`}
  canonical={`https://hexmos.com/freedevtools/tldr/${platform}/${command}`}

  // Command-specific props
  commandName={commandData.name}
  platform={platform}
  commandCategory={commandData.category}
  keywords={[commandData.name, platform, "command", "documentation", "cli"]}
>
  <!-- Page content -->
</BaseLayout>
```

**Generated JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "git Command",
  "description": "Learn how to use the git command on Linux...",
  "articleBody": "Learn how to use the git command on Linux...",
  "keywords": "git, linux, command, documentation, cli",
  "about": {
    "@type": "Thing",
    "name": "git"
  },
  "mentions": {
    "@type": "Thing",
    "name": "Linux"
  },
  "articleSection": "Version Control"
}
```

## Available Props

### Basic SEO Props

- `name` (required) - Page name
- `title` (required) - Page title
- `path` (required) - Page path
- `description` - Page description
- `canonical` - Canonical URL
- `keywords` - Array of keywords
- `ogImage` - Open Graph image
- `twitterImage` - Twitter card image

### Content Metadata Props

- `datePublished` - Publication date
- `dateModified` - Last modified date
- `author` - Content author
- `license` - Content license
- `category` - Content category
- `softwareVersion` - Software version

### Image/Media Props

- `imgWidth` - Image width
- `imgHeight` - Image height
- `thumbnailUrl` - Thumbnail URL
- `encodingFormat` - Media encoding format

### Hierarchical Structure Props

- `partOf` - Parent collection name
- `partOfUrl` - Parent collection URL

### Collection/List Props

- `totalItems` - Total number of items
- `itemsPerPage` - Items per page
- `currentPage` - Current page number

### Type-Specific Props

#### Icon Props

- `iconName` - Icon name
- `iconCategory` - Icon category
- `iconTags` - Icon tags

#### Tool Props

- `toolType` - Tool type
- `toolCategory` - Tool category

#### Emoji Props

- `emojiCode` - Emoji code
- `emojiCategory` - Emoji category

#### Command Props

- `commandName` - Command name
- `platform` - Platform name
- `commandCategory` - Command category

## Benefits

1. **Automatic Schema Detection** - No need to manually specify schema types
2. **SEO Optimized** - Rich structured data for better search visibility
3. **Type Safety** - Full TypeScript support with comprehensive prop interface
4. **Flexible** - Works with all page types in your application
5. **Consistent** - Standardized JSON-LD across all pages
6. **Extensible** - Easy to add new page types and props

## Best Practices

1. **Always provide required props** - `name`, `title`, `path` are required
2. **Use descriptive descriptions** - Help search engines understand your content
3. **Include relevant keywords** - Improve search discoverability
4. **Set proper canonical URLs** - Avoid duplicate content issues
5. **Use hierarchical structure** - Help search engines understand page relationships
6. **Provide image dimensions** - Improve image search visibility
7. **Include pagination info** - For collection pages with pagination
