---
title: "Generate Graphviz Image - Render Network Graphs | Free DevTools"
name: osage
path: /freedevtools/tldr/common/osage
canonical: "https://hexmos.com/freedevtools/tldr/common/osage/"
description: "Generate Graphviz image files with Osage. Render network graphs and diagrams from dot files. Free online tool, no registration required."
category: common
keywords:
  - graphviz image generator
  - network graph renderer
  - dot file converter
  - graphviz layout engine
  - clustered graph visualization
  - graphviz to PNG
  - graphviz to SVG
  - osage graph layout
  - graphviz command line tool
  - graphviz image creation
features:
  - Render clustered network graphs from Graphviz files.
  - Support multiple layout algorithms including dot, neato, and circo.
  - Process Graphviz code from standard input.
  - Generate image files based on the input filename.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# osage

> Render an image of a `clustered` network graph from a `graphviz` file.
> Layouts: `dot`, `neato`, `twopi`, `circo`, `fdp`, `sfdp`, `osage` & `patchwork`.
> More information: <https://graphviz.org/doc/info/command.html>.

- Render a PNG image with a filename based on the input filename and output format (uppercase -O):

`osage -T {{png}} -O {{path/to/input.gv}}`

- Render a SVG image with the specified output filename (lowercase -o):

`osage -T {{svg}} -o {{path/to/image.svg}} {{path/to/input.gv}}`

- Render the output in PS, PDF, SVG, Fig, PNG, GIF, JPEG, JSON, or DOT format:

`osage -T {{format}} -O {{path/to/input.gv}}`

- Render a GIF image using `stdin` and `stdout`:

`echo "{{digraph {this -> that} }}" | osage -T {{gif}} > {{path/to/image.gif}}`

- Display help:

`osage -?`
