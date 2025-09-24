---
title: "Convert MM to GV - Graph Format Converter | Online Free DevTools by Hexmos"
name: mm2gv
path: /freedevtools/tldr/common/mm2gv
canonical: "https://hexmos.com/freedevtools/tldr/common/mm2gv/"
description: "Convert Matrix Market (MM) graph format to Graphviz (GV) format with mm2gv. Easily transform graph data for visualization and analysis. Free online tool, no registration required."
category: common
keywords:
- MM to GV converter
- Matrix Market to Graphviz
- graph format conversion
- graph visualization tool
- mm2gv online
- convert graph data
- graph data conversion
- MM graph converter
- GV graph generator
- graph format tool
features:
- Convert Matrix Market (.mm) graph files to Graphviz (.gv) files
- Transform graph data for visualization and analysis
- Support conversion using standard input and output (stdin/stdout)
- Provide command-line help and usage instructions
- Facilitate graph data exchange between different formats
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mm2gv

> Convert a graph from Matrix Market `mm` format to `gv` format.
> Converters: `gml2gv`, `gv2gml`, `gv2gxl`, `gxl2gv`, `graphml2gv` & `mm2gv`.
> More information: <https://graphviz.org/pdf/mm2gv.1.pdf>.

- Convert a graph from `mm` to `gv` format:

`mm2gv -o {{output.gv}} {{input.mm}}`

- Convert a graph using `stdin` and `stdout`:

`cat {{input.mm}} | mm2gv > {{output.gv}}`

- Display help:

`mm2gv -?`
