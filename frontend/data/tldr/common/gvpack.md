---
title: "Graphviz Pack - Combine Graph Layouts | Online Free DevTools by Hexmos"
name: gvpack
path: "/freedevtools/tldr/common/gvpack/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gvpack/"
description: "Combine graph layouts with Graphviz Pack. Integrate multiple Graphviz layouts into a single, cohesive graph visualization. Free online tool, no registration required."
category: common
keywords:
- graphviz pack
- graph layout combiner
- graph merging tool
- dot graph pack
- graph visualization
- graphviz tools
- layout integration
- graphviz editor
- command line graph tools
- gvpack command
features:
- Combine multiple graphviz layouts.
- Pack graphs at the graph or node level.
- Merge layouts while keeping graphs separate.
- Combine without packing for specific adjustments.
- Simplify graph visualization workflows.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gvpack

> Combine several graph layouts (that already have layout information).
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://graphviz.org/pdf/gvpack.1.pdf>.

- Combine several graph layouts (that already have layout information):

`gvpack {{path/to/layout1.gv path/to/layout2.gv ...}} > {{path/to/output.gv}}`

- Combine several graph layouts at the graph level, keeping graphs separate:

`gvpack -g {{path/to/layout1.gv path/to/layout2.gv ...}} > {{path/to/output.gv}}`

- Combine several graph layouts at the node level, ignoring clusters:

`gvpack -n {{path/to/layout1.gv path/to/layout2.gv ...}} > {{path/to/output.gv}}`

- Combine several graph layouts without packing:

`gvpack -u {{path/to/layout1.gv path/to/layout2.gv ...}} > {{path/to/output.gv}}`

- Display help:

`gvpack -?`
