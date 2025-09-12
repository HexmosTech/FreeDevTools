---
title: "List Files - Control File Listing with eza | Free DevTools"
name: eza
path: /freedevtools/tldr/common/eza
canonical: "https://hexmos.com/freedevtools/tldr/common/eza/"
description: "Control file listing and directory navigation with eza, a modern replacement for ls. Explore files, sort by size, and view git status with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- file listing eza
- directory navigation eza
- ls alternative
- command-line file explorer
- terminal file manager
- eza linux
- eza macos
- sort files by size
- show hidden files eza
- git status file listing
features:
- List files and directories with enhanced formatting
- Sort files by size, date, or name
- Display git status for files and directories
- Show hidden files and directories
- Render file system as a tree structure
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eza

> Modern, maintained replacement for `ls`, built on `exa`.
> More information: <https://github.com/eza-community/eza>.

- List files one per line:

`eza {{[-1|--oneline]}}`

- List all files, including hidden files:

`eza {{[-a|--all]}}`

- Long format list (permissions, ownership, size and modification date) of all files:

`eza {{[-al|--all --long]}}`

- List files with the largest at the top:

`eza {{[-r|--reverse]}} {{[-s|--sort]}} {{size}}`

- Display a tree of files, three levels deep:

`eza {{[-lT|--long --tree]}} {{[-L|--level]}} {{3}}`

- List files sorted by modification date (oldest first):

`eza {{[-l|--long]}} {{[-s|--sort]}} {{modified}}`

- List files with their headers, icons, and Git statuses:

`eza {{[-lh|--long --header]}} --icons --git`

- Don't list files mentioned in `.gitignore`:

`eza --git-ignore`
