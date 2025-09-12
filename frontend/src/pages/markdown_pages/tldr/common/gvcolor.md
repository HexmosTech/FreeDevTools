---
title: "Colorize Graph - Colorize Ranked Digraphs | Free DevTools"
name: gvcolor
path: /freedevtools/tldr/common/gvcolor
canonical: "https://hexmos.com/freedevtools/tldr/common/gvcolor/"
description: "Colorize ranked digraphs with gvcolor. Enhance graph visualization with dynamic color ranges, improving data analysis and presentation. Free online tool, no registration required."
category: common
keywords:
- graph colorization
- digraph coloring
- graphviz color
- ranked graph color
- dot graph color
- graph layout color
- linux graph tools
- command line graph color
- graph visualization color
- gvcolor graphviz
features:
- Colorize directed graphs based on ranking
- Apply a range of colors to nodes and edges
- Integrate with dot layout engine
- Output colorized graph in Graphviz format
- Enhance graph readability through color coding
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gvcolor

> Colorize a ranked digraph with a range of colors.
> Graphviz filters: `acyclic`, `bcomps`, `comps`, `edgepaint`, `gvcolor`, `gvpack`, `mingle`, `nop`, `sccmap`, `tred`, & `unflatten`.
> More information: <https://graphviz.org/pdf/gvcolor.1.pdf>.

- Colorize one or more ranked digraph (that were already processed by `dot`):

`gvcolor {{path/to/layout1.gv path/to/layout2.gv ...}} > {{path/to/output.gv}}`

- Lay out a graph and colorize it, then convert to a PNG image:

`dot {{path/to/input.gv}} | gvcolor | dot -T {{png}} > {{path/to/output.png}}`

- Display help:

`gvcolor -?`
