---
title: "Exa - List Directory Contents | Online Free DevTools by Hexmos"
name: exa
path: "/freedevtools/tldr/common/exa/"
canonical: "https://hexmos.com/freedevtools/tldr/common/exa/"
description: "List directory contents with Exa, a modern replacement for `ls`.  Easily view file permissions, sizes, and modification dates. Free online tool, no registration required."
category: common
keywords:
- list directory contents
- exa command line tool
- ls alternative linux
- file listing command
- modern ls replacement
- terminal file browser
- directory tree viewer
- file sorting command
- git aware file listing
- linux file manager
features:
- Display directory contents in a grid or long format.
- Show hidden files and directories.
- Sort files by name, size, or modification date.
- Visualize directory structure as a tree.
- Integrate with Git to display file status.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# exa

> A modern replacement for `ls` (List directory contents).
> More information: <https://github.com/ogham/exa#command-line-options>.

- List files one per line:

`exa {{[-1|--oneline]}}`

- List all files, including hidden files:

`exa {{[-a|--all]}}`

- Long format list (permissions, ownership, size and modification date) of all files:

`exa {{[-l|--long]}} {{[-a|--all]}}`

- List files with the largest at the top:

`exa {{[-r|--reverse]}} {{[-s|--sort]}} {{size}}`

- Display a tree of files, three levels deep:

`exa {{[-l|--long]}} {{[-T|--tree]}} {{[-L|--level]}} {{3}}`

- List files sorted by modification date (oldest first):

`exa {{[-l|--long]}} {{[-s|--sort]}} {{modified}}`

- List files with their headers, icons, and Git statuses:

`exa {{[-l|--long]}} {{[-h|--header]}} --icons --git`

- Don't list files mentioned in `.gitignore`:

`exa --git-ignore`
