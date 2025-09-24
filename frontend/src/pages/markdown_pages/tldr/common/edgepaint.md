---
title: "Colorize Graph Edges - Clarify Graph Layouts | Online Free DevTools by Hexmos"
name: edgepaint
path: /freedevtools/tldr/common/edgepaint
canonical: "https://hexmos.com/freedevtools/tldr/common/edgepaint/"
description: "Clarify graph layouts with Edgepaint. Colorize graph edges to enhance visualization and understand crossing edges. Free online tool, no registration required."
category: common
keywords:
- graph edge colorization
- graph layout clarification
- graphviz edgepaint
- crossing edge visualization
- graph coloring tool
- graph edge styling
- acyclic graph processing
- dot graph processing
- command-line graph tools
- graph data processing
features:
- Colorize graph edges for enhanced clarity
- Process multiple graph layout files simultaneously
- Apply customizable color schemes to edges
- Integrate with dot for graph layout generation
- Simplify complex graph structures by visually distinguishing edges
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# edgepaint

> Colorize edges of a graph layout to clarify crossing edges.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://graphviz.org/pdf/edgepaint.1.pdf>.

- Colorize edges of one or more graph layouts (that already have layout information) to clarify crossing edges:

`edgepaint {{path/to/layout1.gv path/to/layout2.gv ...}} > {{path/to/output.gv}}`

- Colorize edges using a color scheme. (See <https://graphviz.org/doc/info/colors.html#brewer>):

`edgepaint -color-scheme={{accent7}} {{path/to/layout.gv}} > {{path/to/output.gv}}`

- Lay out a graph and colorize its edges, then convert to a PNG image:

`dot {{path/to/input.gv}} | edgepaint | dot -T {{png}} > {{path/to/output.png}}`

- Display help:

`edgepaint -?`
