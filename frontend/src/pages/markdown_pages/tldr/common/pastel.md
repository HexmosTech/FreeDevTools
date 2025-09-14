---
title: "Generate Colors - Pastel Color Tool | Free DevTools"
name: pastel
path: /freedevtools/tldr/common/pastel
canonical: "https://hexmos.com/freedevtools/tldr/common/pastel/"
description: "Generate and analyze colors with Pastel Color Tool. Convert between formats like RGB and HSL, pick colors from screen. Free online tool, no registration required."
category: common
keywords:
- color generator
- color converter
- color palette generator
- rgb to hsl conversion
- command line color tool
- terminal color picker
- x11 color names
- css color names
- distinct color generator
- pastel color scheme
features:
- Convert colors between various formats (RGB, HSL, etc.)
- Analyze colors and display their properties in the terminal
- Pick colors directly from the screen
- Generate sets of visually distinct colors
- List available X11/CSS color names
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pastel

> Generate, analyze, convert and manipulate colors.
> More information: <https://github.com/sharkdp/pastel>.

- Convert colors from one format to another. Here from RGB to HSL:

`pastel format {{hsl}} {{ff8000}}`

- Show and analyze colors on the terminal:

`pastel color "{{rgb(255,50,127)}}"`

- Pick a color from somewhere on the screen:

`pastel pick`

- Generate a set of N visually distinct colors:

`pastel distinct {{8}}`

- List all X11/CSS color names:

`pastel list`
