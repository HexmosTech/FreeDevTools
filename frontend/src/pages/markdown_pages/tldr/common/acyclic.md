---
title: "Graph Acyclic - Generate Acyclic Graphs | Online Free DevTools by Hexmos"
name: acyclic
path: /freedevtools/tldr/common/acyclic
canonical: "https://hexmos.com/freedevtools/tldr/common/acyclic/"
description: "Generate acyclic graphs with Graph Acyclic. Reverse edges in directed graphs for cycle removal using this graphviz filter. Free online tool, no registration required."
category: common
keywords:
- graph acyclic
- directed graph
- cycle removal
- graphviz filter
- graph manipulation
- acyclic graph generator
- graph processing
- graph edge reversal
- graph visualization
- graph analysis
features:
- Reverse edges to create acyclic graphs
- Identify cycles within directed graphs
- Analyze graph structure
- Print graph acyclicity status
- Process graphs using Graphviz
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# acyclic

> Make a directed graph acyclic by reversing some edges.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://graphviz.org/pdf/acyclic.1.pdf>.

- Make a directed graph acyclic by reversing some edges:

`acyclic {{path/to/input.gv}} > {{path/to/output.gv}}`

- Print if a graph is acyclic, has a cycle, or is undirected, producing no output graph:

`acyclic -v -n {{path/to/input.gv}}`

- Display help:

`acyclic -?`
