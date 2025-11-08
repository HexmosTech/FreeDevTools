---
title: "Generate Package Graph - Pacgraph | Online Free DevTools by Hexmos"
name: pacgraph
path: "/freedevtools/tldr/linux/pacgraph/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacgraph/"
description: "Generate dependency graphs with Pacgraph, a powerful Linux package visualization tool. Analyze software dependencies and system architecture easily. Free online tool, no registration required."
category: linux
keywords:
- linux package graph generator
- pacman package dependency graph
- visualize package dependencies
- arch linux dependency analysis
- linux software architecture
- package manager graph
- command line graph tool
- system dependency mapping
- svg package graph
- png package graph
features:
- Generate package dependency graphs in SVG format
- Produce package graphs in PNG format
- Print package dependency summary to console
- Customize node and link colors in the graph
- Override default filename and location for graph output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pacgraph

> Draw a graph of installed packages to PNG/SVG/GUI/console.
> More information: <https://github.com/keenerd/pacgraph>.

- Produce an SVG and PNG graph:

`pacgraph`

- Produce an SVG graph:

`pacgraph --svg`

- Print summary to console:

`pacgraph --console`

- Override the default filename/location (Note: Do not specify the file extension):

`pacgraph --file={{path/to/file}}`

- Change the color of packages that are not dependencies:

`pacgraph --top={{color}}`

- Change the color of package dependencies:

`pacgraph --dep={{color}}`

- Change the background color of a graph:

`pacgraph --background={{color}}`

- Change the color of links between packages:

`pacgraph --link={{color}}`
