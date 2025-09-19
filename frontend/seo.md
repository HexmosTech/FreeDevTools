# SEO Check List and Guideline

## Keyword Validation

### Finding the Correct Primary Keyword

A **primary keyword** is the main search term that users type into search engines to find the specific tool. It represents the core function of the tool and should match exactly what developers search for.

### Primary Keyword Formula

**Format**: `[Data/Format Type] + [Action/Tool Type]`

### Requirements Checklist:

- Primary keyword appears in title
- Keywords match user search intent
- No keyword stuffing (max 2-3% density)
- Uses related/synonym keywords naturally
- Keywords relevant to tool function

### Examples:

**✅ Good:**

- Primary: "datetime converter"
- Secondary: ["timestamp converter", "UTC converter", "free date converter", "online datetime converter", "unix timestamp converter"]

**❌ Bad:**

- Primary: "time tool" (too vague)
- Secondary: ["tool", "helper", "utility", "thing", "converter"] (generic, keyword stuffing)

❌ if any fails: Keyword strategy needs optimization
Give a list of 5 SEO friendly keywords for the tool based on requirement

## Title Validation

- Format: [Tool Name] - [Primary Function]
- Length: 50-60 characters
- Keywords: Primary keyword in first 3 words
- Action words: Use verbs like Convert, Generate, Format, Validate, Create

### Examples:

**Good:**

- "JSON Formatter - Beautify & Validate JSON | Online Free DevTools by Hexmos" (59 chars)
- "Password Generator - Create Secure Passwords by Hexmos" (54 chars)
- "Date Converter - Transform UTC, ISO & Unix Times Free" (53 chars)

**Bad:**

- "JSON Tool for Developers Online" (missing brand, no action verb)
- "Free DevTools - The Best JSON Formatter Website Tool" (brand first, too long)
- "Password Generator" (too short, no brand)

❌ if any fails: Title needs optimization
Give a list of 5 SEO friendly titles based on requirement

## Meta Description Validation

### Format: `[Primary keyword action] with [Tool Name]`

- Length is 140-160 characters
- Contains primary keyword
- Contains 1 secondary keyword
- Has clear call-to-action

### Examples:

**Good:**

- "Convert datetime formats instantly with Date Time Converter from Hexmos. Transform UTC, ISO, Unix timestamps easily. Free, fast, no registration required." (159 chars)
- "Format JSON data beautifully with JSON Formatter. Validate, minify, and beautify JSON instantly. Free online tool, no registration needed." (152 chars)

**Bad:**

- "This is a JSON tool that helps developers format their code" (no brand, no CTA, no primary keyword early)
- "Free DevTools by Hexmos offers the ultimate JSON formatting solution for all developers worldwide" (brand first, too generic, no CTA)

❌ if any fails: Rewrite meta description
Give optimized meta description based on requirement

## Heading Validation

### H1: Simple tool name (handled by ToolHead component)

- Format: `[Tool Name]` (e.g., "JSON Formatter", "Password Generator")

- Has exactly ONE H1 tag per page
- H1 contains primary keyword from title
- H1 describes main page purpose clearly

### Examples:

**Good**

- "JSON Formatter"
- "Password Generator"

**Bad**

- "Free JSON Formatting Tool Online" (too long, keyword stuffing)
- "Tool for JSON" (vague, poor grammar)
- "JSON Formatter by Hexmos - Free Online Tool" (too long, brand in H1)

❌ if any fails: Rewrite heading
Give optimized heading based on requirement

## Heading Structure Check

- Has exactly ONE H1 tag
- H1 contains primary keyword from title
- Each H2 has different secondary keywords
- No skipped heading levels (H1→H3 without H2)

❌ if any fails: Fix heading structure
Give H1 and 4 H2 headings based on requirement

## Tool Description Validation

- Tool description exists on the page
- Length is 100-200 words
- Contains primary keyword in first sentence
- Contains 2-3 secondary keywords naturally
- Explains tool purpose clearly

### Examples:

**Good:**
"Instantly convert dates and times with Date Time Converter by Hexmos. Transform UTC, ISO, Unix, and more formats. Paste or pick a date to see all formats at once."

**Bad:**
"This tool converts dates and times. It's useful for developers who need to work with different formats. You can use it online for free."

❌ if any fails: Rewrite tool description
Give optimized tool description based on requirement

## Social Media Meta Tags Validation

### Open Graph (Facebook) Tags

- og:title exists and matches page title
- og:title is 50-60 characters
- og:description exists and matches meta description
- og:description is 150-160 characters
- og:image exists with valid image URL
- og:url exists with correct page URL

### Twitter Card Tags

- twitter:title exists and matches page title
- twitter:title is 50-60 characters
- twitter:description exists and matches meta description
- twitter:description is 150-160 characters
- twitter:image exists with valid image URL
- twitter:card is set to "summary" or "summary_large_image"

### Banner Generation for Social Media

#### Creating Tool Banners

Use the automated banner generation system to create high-quality social media images for each tool:

**Setup:**

```bash

# Generate banner for a tool
npm run banner:generate "JSON Prettifier" json-prettifier ./screenshot.png
```

#### Additional Requirements

- All URLs are absolute (https://)
- Image URLs are accessible and valid
- Titles and descriptions contain primary keywords
- Content is consistent across all meta tags

❌ if any fails: Add missing social media meta tags
Generate complete Open Graph and Twitter Card tags based on requirement

## Links Ratio Validation

- Has 2-5 outbound links to relevant resources
- Links point to high-authority domains (government, education, reputable sites)
- All external links are relevant to tool functionality

### External Link Examples

#### Required High-Authority Domains:

- **Documentation**: developer.mozilla.org, w3.org
- **Standards**: iso.org, ietf.org, rfc-editor.org
- **Education**: stackoverflow.com (questions), github.com

#### Tool-Specific Link Examples:

**JSON Tools**: json.org, MDN JSON docs, RFC 7159
**Date Tools**: ISO 8601 spec, MDN Date docs, timeanddate.com
**Security Tools**: OWASP guidelines, NIST standards

❌ if any fails: Add relevant high-quality external links
Suggest 3-5 relevant external resources to link to based on tool requirement

## Text-to-Code Ratio Validation

- Ensure the page has a healthy text-to-code ratio (recommended: at least 10% text content).
- Content should be at least 800 words for main tool pages.
- Add explanatory paragraphs, usage instructions, and educational content to increase text.
- Avoid pages that are mostly code or UI with minimal descriptive content.

❌ if any fails: Add more user-facing content, explanations, and relevant text to improve the ratio and meet minimum word count.
