---
title: "Convert GV to GML - Format Graph Data | Free DevTools"
name: gv2gml
path: "/freedevtools/tldr/common/gv2gml"
canonical: "https://hexmos.com/freedevtools/tldr/common/gv2gml/"
description: "Convert graph data from GV to GML with gv2gml. Transform graph files for visualization and analysis. Free online tool, no registration required."
category: common
keywords:
- gv to gml converter
- graphviz to gml
- graph data conversion
- gv file format
- gml file format
- graph format conversion
- linux graph tools
- command line graph converter
- graphviz command line
- gv2gml command
features:
- Converts GV graph files to GML format
- Supports standard input and output for piping
- Provides help documentation via command line
- Transforms graph structures for various applications
- Facilitates graph visualization and analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gv2gml

> Convert a graph from `gv` to `gml` format.
> Converters: `gml2gv`, `gv2gml`, `gv2gxl`, `gxl2gv`, `graphml2gv` & `mm2gv`.
> More information: <https://graphviz.org/pdf/gml2gv.1.pdf>.

- Convert a graph from `gv` to `gml` format:

`gv2gml -o {{output.gml}} {{input.gv}}`

- Convert a graph using `stdin` and `stdout`:

`cat {{input.gv}} | gv2gml > {{output.gml}}`

- Display help:

`gv2gml -?`
