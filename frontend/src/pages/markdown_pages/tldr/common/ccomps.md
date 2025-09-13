---
title: "Decompose Graph - Analyze Connected Components | Free DevTools"
name: ccomps
path: /freedevtools/tldr/common/ccomps
canonical: "https://hexmos.com/freedevtools/tldr/common/ccomps/"
description: "Decompose graphs into connected components with ccomps. Analyze graph structure and identify subgraphs. Free online tool, no registration required."
category: common
keywords:
- graph decomposition
- connected components analysis
- graphviz ccomps
- graph algorithms
- graph structure analysis
- subgraph identification
- graph analysis tools
- linux graph decomposition
- macos graph decomposition
- windows graph decomposition
features:
- Decompose graphs into connected components
- Print graph statistics (nodes, edges, components)
- Output connected components to separate files
- Analyze graph structure for connectivity
- Visualize connected components using Graphviz
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ccomps

> Decompose graphs into their connected components.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://graphviz.org/pdf/ccomps.1.pdf>.

- Decompose one or more graphs into their connected components:

`ccomps {{path/to/input1.gv path/to/input2.gv ...}} > {{path/to/output.gv}}`

- Print the number of nodes, edges, and connected components in one or more graphs:

`ccomps -v -s {{path/to/input1.gv path/to/input2.gv ...}}`

- Write each connected component to numbered filenames based on `output.gv`:

`ccomps -x -o {{path/to/output.gv}} {{path/to/input1.gv path/to/input2.gv ...}}`

- Display help:

`ccomps -?`
