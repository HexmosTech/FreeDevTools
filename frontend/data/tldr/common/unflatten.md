---
title: "Unflatten Graphs - Improve Layout Aspect Ratio | Online Free DevTools by Hexmos"
name: unflatten
path: "/freedevtools/tldr/common/unflatten/"
canonical: "https://hexmos.com/freedevtools/tldr/common/unflatten/"
description: "Improve directed graph layout with Unflatten. Adjust aspect ratio, refine graph visualization and enhance readability. Free online tool, no registration required."
category: common
keywords:
- graph unflattening
- graph layout improvement
- directed graph optimization
- graph aspect ratio
- graphviz unflatten
- graph visualization
- command line graph tools
- graph preprocessing
- graph postprocessing
- dot graph layout
features:
- Adjusts directed graphs for better layout aspect ratio
- Acts as a preprocessor for graph layout tools like dot
- Optimizes graph visualization
- Handles multiple input graph files
- Improves graph readability
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unflatten

> Adjust directed graphs to improve the layout aspect ratio.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://www.graphviz.org/pdf/unflatten.1.pdf>.

- Adjust one or more directed graphs to improve the layout aspect ratio:

`unflatten {{path/to/input1.gv path/to/input2.gv ...}} > {{path/to/output.gv}}`

- Use `unflatten` as a preprocessor for `dot` layout to improve aspect ratio:

`unflatten {{path/to/input.gv}} | dot -T {{png}} {{path/to/output.png}}`

- Display help:

`unflatten -?`
