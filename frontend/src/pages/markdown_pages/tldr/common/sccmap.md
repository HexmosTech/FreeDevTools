---
title: "SCC Graph Extraction - Extract Graph Components | Free DevTools"
name: sccmap
path: /freedevtools/tldr/common/sccmap
canonical: "https://hexmos.com/freedevtools/tldr/common/sccmap/"
description: "Extract SCC graph components with sccmap. Analyze directed graphs, identify strongly connected components, and visualize graph structure. Free online tool, no registration required."
category: common
keywords:
- graph extraction
- graph components
- directed graph analysis
- SCC decomposition
- Graphviz sccmap
- Graph structure visualization
- command line graph tool
- acyclic graph filtering
- graph statistics
- graph connected components
features:
- Extract strongly connected components from directed graphs
- Analyze graph structure and identify cyclic dependencies
- Generate statistics about graph characteristics
- Filter graphs to remove acyclic components
- Visualize graph components using Graphviz filters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sccmap

> Extract strongly connected components of directed graphs.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://www.graphviz.org/pdf/sccmap.1.pdf>.

- Extract strongly connected components of one or more directed graphs:

`sccmap -S {{path/to/input1.gv path/to/input2.gv ...}} > {{path/to/output.gv}}`

- Print statistics about a graph, producing no output graph:

`sccmap -v -s {{path/to/input1.gv path/to/input2.gv ...}}`

- Display help:

`sccmap -?`
