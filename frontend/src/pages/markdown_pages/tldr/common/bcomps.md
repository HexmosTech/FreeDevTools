---
title: "Decompose Graph - Biconnected Components | Free DevTools"
name: bcomps
path: /freedevtools/tldr/common/bcomps
canonical: "https://hexmos.com/freedevtools/tldr/common/bcomps/"
description: "Decompose graphs into biconnected components with bcomps. Analyze graph connectivity and identify articulation points effortlessly. Free online tool, no registration required."
category: common
keywords:
- graph decomposition
- biconnected components finder
- graph analysis tool
- articulation point identifier
- graph connectivity checker
- graphviz bcomps
- command line graph tools
- graphviz filters
- graph processing
- block cutvertex tree
features:
- Decomposes graphs into biconnected components.
- Identifies articulation points in graphs.
- Generates block-cutvertex trees.
- Provides statistics on blocks and cutvertices.
- Supports multiple input graph files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bcomps

> Decompose graphs into their biconnected components.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://graphviz.org/pdf/bcomps.1.pdf>.

- Decompose one or more graphs into their biconnected components:

`bcomps {{path/to/input1.gv path/to/input2.gv ...}} > {{path/to/output.gv}}`

- Print the number of blocks and cutvertices in one or more graphs:

`bcomps -v -s {{path/to/input1.gv path/to/input2.gv ...}}`

- Write each block and block-cutvertex tree to multiple numbered filenames based on `output.gv`:

`bcomps -x -o {{path/to/output.gv}} {{path/to/input1.gv path/to/input2.gv ...}}`

- Display help:

`bcomps -?`
