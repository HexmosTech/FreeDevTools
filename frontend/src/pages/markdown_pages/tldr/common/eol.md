---
title: "Show End-of-Life Dates - Check Product EOL Status | Free DevTools"
name: eol
path: /freedevtools/tldr/common/eol
canonical: "https://hexmos.com/freedevtools/tldr/common/eol/"
description: "Check product End-of-Life (EOL) dates with eol. Get EOL status and product lifecycle information. Free online tool, no registration required."
category: common
keywords:
- product eol dates
- software lifecycle
- end of life checker
- eol status lookup
- product support timeline
- hardware eol dates
- check product lifecycle
- common command eol
- norwegianblue eol
- product obsolescence
features:
- Display end-of-life dates for various products
- Retrieve EOL information in multiple formats (HTML, JSON, Markdown, etc.)
- Open the product's webpage directly
- Generate markdown reports of EOL data
- List all available products for EOL checks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eol

> Show end-of-life dates (EoLs) for a number of products.
> More information: <https://github.com/hugovk/norwegianblue>.

- List all available products:

`eol`

- Get EoLs of one or more products:

`eol {{product1 product2 ...}}`

- Open the product webpage:

`eol {{product}} --web`

- Get EoLs of a one or more products in a specific format:

`eol {{product1 product2 ...}} --format {{html|json|md|markdown|pretty|rst|csv|tsv|yaml}}`

- Get EoLs of one or more products as a single markdown file:

`eol {{product1 product2 ...}} --format {{markdown}} > {{eol_report.md}}`

- Display help:

`eol --help`
