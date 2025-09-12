---
title: "Font Tools - Manipulate Fonts | Free DevTools"
name: fonttools
path: /freedevtools/tldr/unknown/fonttools
canonical: "https://hexmos.com/freedevtools/tldr/unknown/fonttools/"
description: "Manipulate font files with Fonttools. Subset, convert, and inspect font formats. Free online tool, no registration required."
category: unknown
keywords:
- font manipulation
- ttf subsetting
- font conversion
- font inspection
- python font tools
- font editor
- font optimizer
- glyph manipulation
- font hinting
- unicode subsetting
features:
- Subset font files by Unicode ranges
- Inspect font file metadata
- Convert between different font formats
- Optimize font files for web usage
- Display font help information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fonttools

> Manipulate fonts in Python.
> More information: <https://fonttools.readthedocs.io/en/latest/>.

- Subset a TTF font file to the Basic Latin Unicode block:

`fonttools subset {{path/to/font.ttf}} --unicodes=U+0000-007F`

- Display help:

`fonttools --help`
