---
title: "Display UV Dependencies - Analyze Project Tree | Online Free DevTools by Hexmos"
name: uv-tree
path: "/freedevtools/tldr/uv/uv-tree/"
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-tree/"
description: "Analyze project dependencies with UV Tree. Inspect your Python project's dependency graph to understand relationships and identify potential issues. Free online tool, no registration required."
category: common
keywords:
- uv dependency tree
- python package analyzer
- project dependency graph
- uv package management
- dependency resolution tool
- python dependency inspector
- uv tree command
- uv package tree
- python package graph
- universal package manager
features:
- Visualize project dependencies in a tree format
- Display dependencies for all environments
- Limit the depth of the dependency tree
- Identify outdated packages
- Exclude development dependencies
- Invert the dependency tree to show dependents
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uv tree

> Display project dependencies in a tree format.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-tree>.

- Show dependency tree for current environment:

`uv tree`

- Show dependency tree for all environments:

`uv tree --universal`

- Show dependency tree up to a certain depth:

`uv tree {{[-d|--depth]}} {{n}}`

- Show the latest available version for all outdated packages:

`uv tree --outdated`

- Exclude dependencies from the dev group:

`uv tree --no-dev`

- Show the inverted tree, so children are dependents instead of dependencies:

`uv tree --invert`
