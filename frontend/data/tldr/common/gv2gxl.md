---
title: "Convert GV to GXL - Generate GXL Files | Online Free DevTools by Hexmos"
name: gv2gxl
path: "/freedevtools/tldr/common/gv2gxl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gv2gxl/"
description: "Generate GXL files with gv2gxl. Convert GV graph files to GXL format using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- GV to GXL Converter
- GraphViz to GXL
- Graph file converter
- GXL file generator
- Convert graph format
- GV to GXL conversion
- Graphviz command line
- Linux graph tools
- MacOS graph tools
- GXL from GV
features:
- Convert GV graph files to GXL format
- Process GV files using standard input/output
- Generate GXL output from GV input
- Support command-line options for conversion
- Output GXL format graph data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gv2gxl

> Convert a graph from `gv` to `gxl` format.
> Converters: `gml2gv`, `gv2gml`, `gv2gxl`, `gxl2gv`, `graphml2gv` & `mm2gv`.
> More information: <https://graphviz.org/pdf/gxl2gv.1.pdf>.

- Convert a graph from `gv` to `gxl` format:

`gv2gxl -o {{output.gxl}} {{input.gv}}`

- Convert a graph using `stdin` and `stdout`:

`cat {{input.gv}} | gv2gxl > {{output.gxl}}`

- Display help:

`gv2gxl -?`
