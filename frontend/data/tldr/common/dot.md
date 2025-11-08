---
title: "Generate Graphviz Images - DOT Render Online | Online Free DevTools by Hexmos"
name: dot
path: "/freedevtools/tldr/common/dot/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dot/"
description: "Generate graphviz images instantly with DOT render online. Create directed graphs, control layout, and export to various formats with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- graphviz render
- directed graph generator
- dot layout engine
- graphviz image converter
- dot to png
- dot to svg
- graphviz online
- graph visualization tool
- command line graph render
- network graph generator
features:
- Render directed network graphs from Graphviz files.
- Supports layouts like dot, neato, twopi, circo, fdp, sfdp, osage & patchwork.
- Convert DOT files to PNG, SVG, PS, PDF, GIF, JPEG, JSON formats.
- Render graphs directly from standard input/output.
- Customize output filename and format via command line arguments.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dot

> Render an image of a `linear directed` network graph from a `graphviz` file.
> Layouts: `dot`, `neato`, `twopi`, `circo`, `fdp`, `sfdp`, `osage` & `patchwork`.
> More information: <https://graphviz.org/doc/info/command.html>.

- Render a PNG image with a filename based on the input filename and output format (uppercase -O):

`dot -T {{png}} -O {{path/to/input.gv}}`

- Render a SVG image with the specified output filename (lowercase -o):

`dot -T {{svg}} -o {{path/to/image.svg}} {{path/to/input.gv}}`

- Render the output in PS, PDF, SVG, Fig, PNG, GIF, JPEG, JSON, or DOT format:

`dot -T {{format}} -O {{path/to/input.gv}}`

- Render a GIF image using `stdin` and `stdout`:

`echo "{{digraph {this -> that} }}" | dot -T {{gif}} > {{path/to/image.gif}}`

- Display help:

`dot -?`
