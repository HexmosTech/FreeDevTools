---
title: "SFDP Graph Renderer - Generate Network Images | Free DevTools"
name: sfdp
path: /freedevtools/tldr/common/sfdp
canonical: "https://hexmos.com/freedevtools/tldr/common/sfdp/"
description: "Generate network graph images with SFDP Graph Renderer. Visualize complex data structures and layouts with ease. Free online tool, no registration required."
category: common
keywords:
- graphviz sfdp
- network graph renderer
- force-directed layout
- graph image generation
- graph drawing tool
- layout engine
- dot graph generator
- graphviz alternative
- image converter
- graph visualization
features:
- Render network graphs from Graphviz files
- Support multiple output formats including PNG, SVG, and PDF
- Customize layouts using dot, neato, twopi, circo, fdp, osage, and patchwork
- Generate images from standard input and output
- Visualize data structures and relationships
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdp

> Render an image of a `scaled force-directed` network graph from a `graphviz` file.
> Layouts: `dot`, `neato`, `twopi`, `circo`, `fdp`, `sfdp`, `osage` & `patchwork`.
> More information: <https://graphviz.org/doc/info/command.html>.

- Render a PNG image with a filename based on the input filename and output format (uppercase -O):

`sfdp -T {{png}} -O {{path/to/input.gv}}`

- Render a SVG image with the specified output filename (lowercase -o):

`sfdp -T {{svg}} -o {{path/to/image.svg}} {{path/to/input.gv}}`

- Render the output in PS, PDF, SVG, Fig, PNG, GIF, JPEG, JSON, or DOT format:

`sfdp -T {{format}} -O {{path/to/input.gv}}`

- Render a GIF image using `stdin` and `stdout`:

`echo "{{digraph {this -> that} }}" | sfdp -T {{gif}} > {{path/to/image.gif}}`

- Display help:

`sfdp -?`
