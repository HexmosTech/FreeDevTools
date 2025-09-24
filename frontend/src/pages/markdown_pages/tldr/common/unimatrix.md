---
title: "Simulate Matrix Effect - Unimatrix | Online Free DevTools by Hexmos"
name: unimatrix
path: /freedevtools/tldr/common/unimatrix
canonical: "https://hexmos.com/freedevtools/tldr/common/unimatrix/"
description: "Simulate the Matrix digital rain effect with Unimatrix. Customize colors, speed, and character sets. Command-line tool, free online tool, no registration required."
category: common
keywords:
- matrix effect simulator
- unimatrix command line
- unicode matrix rain
- terminal matrix animation
- linux matrix effect
- macos matrix effect
- character stream simulation
- digital rain generator
- ansi art generator
- terminal customization
features:
- Customize character color
- Control animation speed
- Select character sets
- Mimic cmatrix output
- Disable bold characters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unimatrix

> Simulate the Matrix look with Unicode characters.
> See also: `cmatrix`.
> More information: <https://github.com/will8211/unimatrix>.

- Mimic the default output of `cmatrix` (no unicode, works in a TTY):

`unimatrix --no-bold --speed {{96}} --character-list {{o}}`

- No bold characters, slowly, with emojis, numbers, and a few symbols:

`unimatrix --no-bold --speed {{50}} --character-list {{ens}}`

- Change the color of characters:

`unimatrix --color {{red|green|blue|white|...}}`

- Select character set(s) using letter codes (see `unimatrix --help` for available character sets):

`unimatrix --character-list {{character_sets}}`

- Change the scrolling speed:

`unimatrix --speed {{number}}`
