---
title: "Convert GraphML to GV - Graph Conversion | Free DevTools"
name: graphml2gv
path: "/freedevtools/tldr/common/graphml2gv"
canonical: "https://hexmos.com/freedevtools/tldr/common/graphml2gv/"
description: "Convert GraphML to GV with graphml2gv. Efficient graph conversion for visualization and analysis using command-line. Free online tool, no registration required."
category: common
keywords:
- GraphML to GV converter
- Graph conversion tool
- Command-line graph converter
- Graph visualization tool
- GraphML file converter
- GV file format
- graphviz tool
- linux graph tools
- data format converter
- graph analytics tool
features:
- Convert GraphML files to GV format
- Support standard input and output streams
- Integrate with Graphviz tools
- Command-line interface for automated conversion
- Simplify graph visualization workflows
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# graphml2gv

> Convert a graph from `graphml` to `gv` format.
> Converters: `gml2gv`, `gv2gml`, `gv2gxl`, `gxl2gv`, `graphml2gv` & `mm2gv`.
> More information: <https://graphviz.org/pdf/graphml2gv.1.pdf>.

- Convert a graph from `gml` to `gv` format:

`graphml2gv -o {{output.gv}} {{input.gml}}`

- Convert a graph using `stdin` and `stdout`:

`cat {{input.gml}} | graphml2gv > {{output.gv}}`

- Display help:

`graphml2gv -?`
