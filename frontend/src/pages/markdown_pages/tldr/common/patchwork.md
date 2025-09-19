---
title: "Patchwork - Render Graphviz Images | Online Free DevTools by Hexmos"
name: patchwork
path: /freedevtools/tldr/common/patchwork
canonical: "https://hexmos.com/freedevtools/tldr/common/patchwork/"
description: "Render graph network diagrams with Patchwork. Convert Graphviz DOT files to various image formats. Free online tool, no registration required."
category: common
keywords:
- graphviz image renderer
- dot file converter
- network graph generator
- squareified treemap
- graph layout tool
- image format conversion
- graph visualization
- graphviz to png
- graphviz to svg
- patchwork command line
features:
- Render graphviz DOT files to images
- Convert graphs to PNG, SVG, PDF, and other formats
- Layout graphs using dot, neato, twopi, circo, fdp, sfdp, osage, & patchwork
- Generate images from stdin/stdout
- Create squareified treemap network graphs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# patchwork

> Render an image of a `squareified treemap` network graph from a `graphviz` file.
> Layouts: `dot`, `neato`, `twopi`, `circo`, `fdp`, `sfdp`, `osage` & `patchwork`.
> More information: <https://graphviz.org/doc/info/command.html>.

- Render a PNG image with a filename based on the input filename and output format (uppercase -O):

`patchwork -T {{png}} -O {{path/to/input.gv}}`

- Render a SVG image with the specified output filename (lowercase -o):

`patchwork -T {{svg}} -o {{path/to/image.svg}} {{path/to/input.gv}}`

- Render the output in PS, PDF, SVG, Fig, PNG, GIF, JPEG, JSON, or DOT format:

`patchwork -T {{format}} -O {{path/to/input.gv}}`

- Render a `gif` image using `stdin` and `stdout`:

`echo "{{digraph {this -> that} }}" | patchwork -T {{gif}} > {{path/to/image.gif}}`

- Display help:

`patchwork -?`
