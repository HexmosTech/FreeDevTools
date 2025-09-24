---
title: "Generate Network Graph - Force Directed Layout | Online Free DevTools by Hexmos"
name: fdp
path: /freedevtools/tldr/common/fdp
canonical: "https://hexmos.com/freedevtools/tldr/common/fdp/"
description: "Generate network graph images with FDP, a force-directed layout tool. Visualize complex data structures and relationships using graphviz files. Free online tool, no registration required."
category: common
keywords:
- network graph generator
- force directed layout
- graphviz image render
- dot file to png
- svg graph generation
- fdp command line
- linux graph tool
- graph visualization tool
- data visualization software
- graph layout algorithms
features:
- Render network graphs from graphviz files
- Generate images in various formats (PNG, SVG, etc.)
- Utilize force-directed layout algorithms for graph visualization
- Support different layout engines like dot, neato, twopi, circo
- Process graph data via standard input and output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fdp

> Render an image of a `force-directed` network graph from a `graphviz` file.
> Layouts: `dot`, `neato`, `twopi`, `circo`, `fdp`, `sfdp`, `osage` & `patchwork`.
> More information: <https://graphviz.org/doc/info/command.html>.

- Render a PNG image with a filename based on the input filename and output format (uppercase -O):

`fdp -T png -O {{path/to/input.gv}}`

- Render a SVG image with the specified output filename (lowercase -o):

`fdp -T svg -o {{path/to/image.svg}} {{path/to/input.gv}}`

- Render the output in a specific format:

`fdp -T {{ps|pdf|svg|fig|png|gif|jpg|json|dot}} -O {{path/to/input.gv}}`

- Render a `gif` image using `stdin` and `stdout`:

`echo "{{digraph {this -> that} }}" | fdp -T gif > {{path/to/image.gif}}`

- Display help:

`fdp -?`
