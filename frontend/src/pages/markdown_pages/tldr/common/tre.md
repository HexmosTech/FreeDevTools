---
title: "Tree Command - Visualize Directory Structure | Online Free DevTools by Hexmos"
name: tre
path: /freedevtools/tldr/common/tre
canonical: "https://hexmos.com/freedevtools/tldr/common/tre/"
description: "Visualize directory structure with Tree Command. Explore file hierarchies and manage files efficiently using the tre command. Free online tool, no registration required."
category: common
keywords:
- directory structure visualization
- tre command line tool
- file system tree view
- gitignore aware tree
- linux directory tree
- macos directory tree
- command line file browser
- hierarchical file explorer
- console file manager
- terminal tree generator
features:
- Display directory structure as a tree.
- Limit tree depth for focused views.
- Filter files based on regular expressions.
- Customize output format (JSON, tree diagram).
- Integrate with shell editor for file access.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tre

> Show the contents of the current directory as a tree.
> Respects the `.gitignore` settings by default.
> More information: <https://github.com/dduan/tre>.

- Print directories only:

`tre --directories`

- Print JSON containing files in the tree hierarchy instead of the normal tree diagram:

`tre --json`

- Print files and directories up to the specified depth limit (where 1 means the current directory):

`tre --limit {{depth}}`

- Print all hidden files and directories using the specified colorization mode:

`tre --all --color {{automatic|always|never}}`

- Print files within the tree hierarchy, assigning a shell alias to each file that, when called, will open the associated file using the provided `command` (or in `$EDITOR` by default):

`tre --editor {{command}}`

- Print files within the tree hierarchy, excluding all paths that match the provided `regex`:

`tre --exclude {{regex}}`

- Display version:

`tre --version`

- Display help:

`tre --help`
