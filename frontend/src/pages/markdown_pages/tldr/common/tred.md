---
title: "Compute Graph Transitive Reduction - tred | Online Free DevTools by Hexmos"
name: tred
path: "/freedevtools/tldr/common/tred"
canonical: "https://hexmos.com/freedevtools/tldr/common/tred/"
description: "Compute graph transitive reduction with tred. Reduce directed graphs, optimize graph structure, and enhance graph visualization. Free online tool, no registration required."
category: common
keywords:
- graph transitive reduction
- directed graph reduction
- graphviz filter tred
- transitive closure algorithm
- graph optimization
- graph visualization
- dot graph processing
- graph analysis
- acyclic graph computation
- graph data structure
features:
- Compute the transitive reduction of directed graphs
- Optimize graph structure by removing redundant edges
- Support multiple input graph files
- Generate reduced graphs in Graphviz dot format
- Display help information about command options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tred

> Compute the transitive reduction of directed graphs.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://www.graphviz.org/pdf/tred.1.pdf>.

- Construct the transitive reduction graph of one or more directed graphs:

`tred {{path/to/input1.gv path/to/input2.gv ...}} > {{path/to/output.gv}}`

- Display help:

`tred -?`
