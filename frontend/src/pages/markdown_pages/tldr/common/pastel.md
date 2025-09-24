---
title: "Generate Colors - Pastel Color Tool | Online Free DevTools by Hexmos"
name: pastel
path: /freedevtools/tldr/common/pastel
canonical: "https://hexmos.com/freedevtools/tldr/common/pastel/"
description: "Generate and analyze colors with the Pastel Color Tool. Convert between RGB, HSL, and other formats; pick colors from your screen; and generate distinct color palettes. Free online tool, no registration required."
category: common
keywords:
  - color generator command line
  - color converter terminal
  - RGB to HSL converter
  - terminal color picker
  - HSL to RGB converter
  - command line color palette generator
  - screen color picker
  - distinct color generator command
  - X11 color names command line
  - CSS color names terminal
features:
  - Convert colors between RGB, HSL, and other formats.
  - Analyze color properties and display them in the terminal.
  - Pick colors directly from your screen using your cursor.
  - Generate palettes of visually distinct colors for design projects.
  - List all available X11 and CSS color names.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
