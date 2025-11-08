---
title: "Generate Topological Sort - Dependency Order | Online Free DevTools by Hexmos"
name: tsort
path: "/freedevtools/tldr/common/tsort/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tsort/"
description: "Generate a topological sort with tsort. Determine the dependency order in a directed acyclic graph using command line tools. Free online tool, no registration required."
category: common
keywords:
- topological sort
- directed acyclic graph sort
- dependency resolution
- command line sort
- linux topological sort
- gnu coreutils sort
- dependency order generator
- graph dependency sort
- sort algorithm
- partial order sort
features:
- Perform topological sorting from input data
- Resolve dependencies in directed acyclic graphs
- Determine the order of nodes based on dependencies
- Process partial orderings specified by blanks
- Read dependency data from a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tsort

> Perform a topological sort.
> A common use is to show the dependency order of nodes in a directed acyclic graph.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/tsort-invocation.html>.

- Perform a topological sort consistent with a partial sort per line of input separated by blanks:

`tsort {{path/to/file}}`

- Perform a topological sort consistent on strings:

`echo -e "{{UI Backend\nBackend Database\nDocs UI}}" | tsort`
