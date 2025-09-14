---
title: "List Directory - View Files with lsd | Free DevTools"
name: lsd
path: /freedevtools/tldr/common/lsd
canonical: "https://hexmos.com/freedevtools/tldr/common/lsd/"
description: "List directory contents with lsd, a next-generation `ls` command. Quickly view files, including hidden ones, sorted by various criteria. Free online tool, no registration required."
category: common
keywords:
- directory listing
- file viewer
- lsd command
- ls replacement
- rust ls
- linux directory
- macos directory
- unix file system
- command line file manager
- recursive directory tree
features:
- Display directory contents in a single line format
- Show all files, including hidden files and directories
- Classify file types by appending a trailing character
- Output long format with permissions, ownership, and size
- Recursively list directories in a tree structure
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lsd

> List directory contents.
> The next generation `ls` command, written in Rust.
> More information: <https://github.com/Peltoche/lsd>.

- List files and directories, one per line:

`lsd {{[-1|--oneline]}}`

- List all files and directories, including hidden ones, in the current directory:

`lsd {{[-a|--all]}}`

- List files and directories with trailing `/` added to directory names:

`lsd {{[-F|--classify]}}`

- List all files and directories in long format (permissions, ownership, size in human-readable format, and modification date):

`lsd {{[-lha|--long --human-readable --all]}}`

- List files and directories in long format, sorted by size (descending):

`lsd {{[-lS|--long --sizesort]}}`

- List files and directories in long format, sorted by modification date (oldest first):

`lsd {{[-ltr|--long --timesort --reverse]}}`

- Only list directories:

`lsd {{[-d|--directory-only]}} {{*/}}`

- Recursively list all directories in a tree format:

`lsd --tree {{[-d|--directory-only]}}`
