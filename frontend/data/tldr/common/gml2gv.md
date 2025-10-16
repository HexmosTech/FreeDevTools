---
title: "Convert GML to GV - Format Graph Files | Online Free DevTools by Hexmos"
name: gml2gv
path: "/freedevtools/tldr/common/gml2gv/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gml2gv/"
description: "Convert GML to GV with gml2gv, a free online graph file converter. Easily format graph data, no registration required."
category: common
keywords:
- gml to gv converter
- graph file converter
- gml file format
- gv file format
- graphviz gml
- graphviz gv
- gml graph conversion
- gv graph conversion
- command line graph converter
- common command gml2gv
features:
- Convert GML graph files to GV format
- Support conversion via standard input and output
- Enable command-line graph file formatting
- Process multiple graph conversions using scripting
- Convert between graph formats
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gml2gv

> Convert a graph from `gml` to `gv` format.
> Converters: `gml2gv`, `gv2gml`, `gv2gxl`, `gxl2gv`, `graphml2gv` & `mm2gv`.
> More information: <https://graphviz.org/pdf/gml2gv.1.pdf>.

- Convert a graph from `gml` to `gv` format:

`gml2gv -o {{output.gv}} {{input.gml}}`

- Convert a graph using `stdin` and `stdout`:

`cat {{input.gml}} | gml2gv > {{output.gv}}`

- Display help:

`gml2gv -?`
