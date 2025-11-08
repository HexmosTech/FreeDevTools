---
title: "Optimize SVG - Optimize Vector Graphics with SVGO | Online Free DevTools by Hexmos"
name: svgo
path: "/freedevtools/tldr/common/svgo/"
canonical: "https://hexmos.com/freedevtools/tldr/common/svgo/"
description: "Optimize SVG vector graphics with SVGO. Reduce file sizes and improve website performance with this versatile optimizer. Free online tool, no registration required."
category: common
keywords:
- SVG optimizer
- vector graphics optimization
- SVG compression
- command line SVG tools
- lossless image optimization
- Node.js SVG optimizer
- SVG minification
- front-end performance
- image file size reduction
- SVG cleanup
features:
- Optimizes SVG files using a variety of plugins
- Compresses and minifies SVG code for smaller file sizes
- Supports batch processing of multiple SVG files
- Configurable with custom plugin sets
- Integrates with command-line workflows
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# svgo

> SVG Optimizer: optimizing Scalable Vector Graphics files. Based in Node.js.
> It applies a series of transformation rules (plugins), which can be toggled individually.
> More information: <https://github.com/svg/svgo>.

- Optimize a file using the default plugins (overwrites the original file):

`svgo {{test.svg}}`

- Optimize a file and save the result to another file:

`svgo {{test.svg}} {{[-o|--output]}} {{test.min.svg}}`

- Optimize all SVG files within a directory (overwrites the original files):

`svgo {{[-f|--folder]}} {{path/to/directory/with/svg/files}}`

- Optimize all SVG files within a directory and save the resulting files to another directory:

`svgo {{[-f|--folder]}} {{path/to/input/directory}} {{[-o|--output]}} {{path/to/output/directory}}`

- Optimize SVG content passed from another command, and save the result to a file:

`{{cat test.svg}} | svgo {{[-i|--input]}} - {{[-o|--output]}} {{test.min.svg}}`

- Optimize a file and print out the result:

`svgo {{test.svg}} {{[-o|--output]}} -`

- Show available plugins:

`svgo --show-plugins`
