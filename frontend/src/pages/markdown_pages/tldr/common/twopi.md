---
title: "Generate Graph Image - Render Radial Network with Twopi | Online Free DevTools by Hexmos"
name: twopi
path: /freedevtools/tldr/common/twopi
canonical: "https://hexmos.com/freedevtools/tldr/common/twopi/"
description: "Generate graph images with Twopi, a radial network graph layout tool. Convert Graphviz files to PNG, SVG, and other formats. Free online tool, no registration required."
category: common
keywords:
  - graph image generator
  - radial network layout
  - graphviz renderer
  - dot file converter
  - svg graph generator
  - png graph renderer
  - twopi graph layout
  - network diagram tool
  - graph visualization software
  - graph file conversion
features:
  - Render radial network graphs from Graphviz files
  - Convert graph layouts to PNG, SVG, and other formats
  - Generate graph images from standard input
  - Create custom graph visualizations using command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# twopi

> Render an image of a `radial` network graph from a `graphviz` file.
> Layouts: `dot`, `neato`, `twopi`, `circo`, `fdp`, `sfdp`, `osage` & `patchwork`.
> More information: <https://graphviz.org/doc/info/command.html>.

- Render a PNG image with a filename based on the input filename and output format (uppercase -O):

`twopi -T {{png}} -O {{path/to/input.gv}}`

- Render a SVG image with the specified output filename (lowercase -o):

`twopi -T {{svg}} -o {{path/to/image.svg}} {{path/to/input.gv}}`

- Render the output in PS, PDF, SVG, Fig, PNG, GIF, JPEG, JSON, or DOT format:

`twopi -T {{format}} -O {{path/to/input.gv}}`

- Render a GIF image using `stdin` and `stdout`:

`echo "{{digraph {this -> that} }}" | twopi -T {{gif}} > {{path/to/image.gif}}`

- Display help:

`twopi -?`
