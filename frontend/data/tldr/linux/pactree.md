---
title: "View Package Dependency - Control Linux Packages | Online Free DevTools by Hexmos"
name: pactree
path: "/freedevtools/tldr/linux/pactree/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pactree/"
description: "Control Linux package dependencies easily with Pactree. Analyze package relationships and identify dependencies quickly. Free online tool, no registration required."
category: linux
keywords:
- Linux package dependency
- Pacman dependency tree
- Pacman package manager
- Pactree dependency viewer
- Linux dependency analysis
- Package relationship graph
- Software dependency control
- Reverse dependency lookup
- Unique dependency list
- Optional dependency inclusion
features:
- Display the dependency tree of a specific package.
- List packages that depend on a specific package.
- Output dependencies one per line, skipping duplicates.
- Include optional dependencies in the dependency tree.
- Colorize the dependency tree output for better readability.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pactree

> Package dependency tree viewer for pacman.
> More information: <https://manned.org/pactree.8>.

- Print the dependency tree of a specific package:

`pactree {{package}}`

- Print what packages depend on a specific package:

`pactree {{[-r|--reverse]}} {{package}}`

- Dump dependencies one per line, skipping duplicates:

`pactree {{[-u|--unique]}} {{package}}`

- Include optional dependencies of a specific package and colorize the output:

`pactree {{[-co|--color --optional]}} {{package}}`

- Display help:

`pactree`
