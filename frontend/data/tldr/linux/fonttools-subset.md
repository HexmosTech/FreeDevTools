---
title: "Subset Fonts - Generate Font Subsets | Online Free DevTools by Hexmos"
name: fonttools-subset
path: "/freedevtools/tldr/linux/fonttools-subset/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/fonttools-subset/"
description: "Generate font subsets with fonttools subset. Optimize font file sizes and customize font features for web and application development. Free online tool, no registration required."
category: linux
keywords:
  - font subset generator
  - fonttools subset command
  - ttf font subsetting
  - woff2 font conversion
  - opentype font features
  - font optimization tool
  - unicode font subsetting
  - command-line font tool
  - font file manipulation
  - font subset creation
features:
  - Subset fonts to specific Unicode ranges.
  - Convert font file formats (e.g., TTF to WOFF2).
  - Customize OpenType layout features (e.g., kerning, oldstyle figures).
  - Specify output file names for subsets.
  - Optimize font file sizes by removing unused glyphs.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fonttools subset

> Generate subsets of fonts or optimize file sizes.
> More information: <https://fonttools.readthedocs.io/en/latest/subset/index.html>.

- Subset a TTF font file to the Basic Latin Unicode block:

`fonttools subset {{path/to/font.ttf}} --unicodes=U+0000-007F`

- Change the file type to WOFF2:

`fonttools subset {{path/to/font.ttf}} --unicodes=U+0000-007F --flavor=woff2`

- Keep only the onum (oldstyle figures) and kern (kerning) OpenType font features:

`fonttools subset {{path/to/font.ttf}} --unicodes=U+0000-007F --layout-features=onum,kern`

- Set the output file's name:

`fonttools subset {{path/to/font.ttf}} --unicodes=U+0000-007F --output-file={{path/to/subset.ttf}}`
