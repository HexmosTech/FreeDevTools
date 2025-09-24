---
title: "Tree - Generate Directory Structure | Online Free DevTools by Hexmos"
name: tree
path: /freedevtools/tldr/windows/tree
canonical: "https://hexmos.com/freedevtools/tldr/windows/tree/"
description: "Generate directory structure diagrams with the Tree command. Visualize file system organization and navigate folders efficiently. Free online tool, no registration required."
category: windows
keywords:
  - directory tree generator
  - file system tree
  - folder structure diagram
  - command line tree
  - ascii tree output
  - directory visualization
  - windows tree command
  - command line directory structure
  - tree command options
  - recursive directory listing
features:
  - Display directory structure graphically
  - Visualize file system organization
  - Output tree in ASCII format
  - Include files in the directory tree
  - Specify a target directory for tree generation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tree

> Display a graphical tree of the directory structure for a path.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/tree>.

- Display the tree for the current directory:

`tree`

- Display the tree for a specific directory:

`tree {{path\to\directory}}`

- Display the tree for a directory including [f]iles:

`tree {{path\to\directory}} /f`

- Display the tree using [a]SCII characters instead of extended characters:

`tree {{path\to\directory}} /a`
