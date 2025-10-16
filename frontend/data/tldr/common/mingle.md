---
title: "Mingle - Bundle Graph Edges | Online Free DevTools by Hexmos"
name: mingle
path: "/freedevtools/tldr/common/mingle/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mingle/"
description: "Bundle graph edges with Mingle. Optimize graph layouts and create cleaner visualizations by grouping related edges. Free online tool, no registration required."
category: common
keywords:
- graph edge bundling
- graph layout optimization
- graph visualization tool
- graphviz mingle
- graphviz filter
- edge bundling algorithm
- graph network analysis
- graph drawing software
- graph layout command
- graph data processing
features:
- Bundle edges in graph layouts
- Optimize graph visualizations for clarity
- Integrate with Graphviz layout tools
- Process multiple graph layouts simultaneously
- Output bundled graphs for further processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mingle

> Bundle the edges of a graph layout.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://www.graphviz.org/pdf/mingle.1.pdf>.

- Bundle the edges of one or more graph layouts (that already have layout information):

`mingle {{path/to/layout1.gv path/to/layout2.gv ...}} > {{path/to/output.gv}}`

- Perform layout, bundling, and output to a picture with one command:

`dot {{path/to/input.gv}} | mingle | dot -T {{png}} > {{path/to/output.png}}`

- Display help:

`mingle -?`
