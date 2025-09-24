---
title: "Lint tldr Pages - Format & Validate | Online Free DevTools by Hexmos"
name: tldr-lint
path: /freedevtools/tldr/common/tldr-lint
canonical: "https://hexmos.com/freedevtools/tldr/common/tldr-lint/"
description: "Format tldr pages with tldr-lint. Validate syntax, ensure consistency, and maintain high-quality documentation. Free online tool, no registration required."
category: common
keywords:
- tldr pages linter
- tldr pages formatter
- tldr documentation linting
- tldr documentation formatting
- command line linter
- markdown linter
- documentation validator
- tldr style checker
- markdown formatter
- tldr pages syntax checker
features:
- Lint all tldr pages in a directory
- Format a specific tldr page
- Format tldr pages in-place
- Check tldr page syntax
- Ensure tldr page consistency
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tldr-lint

> Lint and format `tldr` pages.
> More information: <https://github.com/tldr-pages/tldr-lint>.

- Lint all pages:

`tldr-lint {{pages_directory}}`

- Format a specific page to `stdout`:

`tldr-lint --format {{page.md}}`

- Format all pages in place:

`tldr-lint --format --in-place {{pages_directory}}`
