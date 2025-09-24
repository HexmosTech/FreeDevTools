---
title: "Validate Graph - Format Graphviz Files | Online Free DevTools by Hexmos"
name: nop
path: /freedevtools/tldr/common/nop
canonical: "https://hexmos.com/freedevtools/tldr/common/nop/"
description: "Validate graphs with nop, a Graphviz file formatter. Checks syntax, pretty-prints, and ensures canonical format. Free online tool, no registration required."
category: common
keywords:
- graphviz format
- graph validator
- dot language
- graph pretty print
- graph canonical form
- graph syntax check
- graphviz filter
- acyclic graph
- graph error check
- graph format tool
features:
- Check graph validity
- Pretty-print graphs
- Convert graphs to canonical format
- Apply Graphviz filters
- Produce no output graph for validation only
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nop

> Check validity and pretty-print graphs in canonical format.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://www.graphviz.org/pdf/nop.1.pdf>.

- Pretty-print one or more graphs in canonical format:

`nop {{path/to/input1.gv path/to/input2.gv ...}} > {{path/to/output.gv}}`

- Check one or more graphs for validity, producing no output graph:

`nop -p {{path/to/input1.gv path/to/input2.gv ...}}`

- Display help:

`nop -?`
