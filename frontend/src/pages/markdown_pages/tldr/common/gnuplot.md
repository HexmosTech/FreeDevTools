---
title: "Gnuplot - Generate Graphs in Multiple Formats | Online Free DevTools by Hexmos"
name: gnuplot
path: /freedevtools/tldr/common/gnuplot
canonical: "https://hexmos.com/freedevtools/tldr/common/gnuplot/"
description: "Generate plots with Gnuplot, a versatile graphing tool capable of outputting various formats. Create visualizations with this command-line utility. Free online tool, no registration required."
category: common
keywords:
- graph plotting tool
- command-line graph plotter
- gnuplot script execution
- data visualization
- plot generation
- graph definition file
- png graph output
- interactive plotting shell
- linux gnuplot
- macos gnuplot
features:
- Start an interactive graph plotting session.
- Plot graphs from a specified definition file.
- Set the output format and size before plotting.
- Persist the plot preview window after exiting.
- Generate graphs in multiple image and data formats.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gnuplot

> A graph plotter that outputs in several formats.
> More information: <https://manned.org/gnuplot>.

- Start the interactive graph plotting shell:

`gnuplot`

- Plot the graph for the specified graph definition file:

`gnuplot {{path/to/definition.plt}}`

- Set the output format by executing a command before loading the definition file:

`gnuplot -e "{{set output "path/to/filename.png" size 1024,768}}" {{path/to/definition.plt}}`

- Persist the graph plot preview window after gnuplot exits:

`gnuplot {{[-p|--persist]}} {{path/to/definition.plt}}`
