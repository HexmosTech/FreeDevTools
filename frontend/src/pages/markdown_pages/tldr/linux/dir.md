---
title: "List Directory - Manage Linux Files | Free DevTools"
name: dir
path: /freedevtools/tldr/linux/dir
canonical: "https://hexmos.com/freedevtools/tldr/linux/dir/"
description: "List directory contents quickly with DIR command. Manage Linux files and directories efficiently, including hidden files and subdirectories. Free online tool, no registration required."
category: linux
keywords:
- linux directory listing
- linux file management
- linux hidden files
- linux subdirectories
- linux escape sequences
- linux command line tool
- file listing linux
- directory management linux
- ls alternative linux
- command line file explorer
features:
- List all files including hidden files
- List files with author information
- Exclude files using a specified pattern
- List subdirectories recursively
- Display help information for the command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dir

> List directory contents using one line per file, special characters are represented by backslash escape sequences.
> Works as `ls -C --escape`.
> More information: <https://manned.org/dir>.

- List all files, including hidden files:

`dir {{[-a|--all]}}`

- List files including their author (`-l` is required):

`dir -l --author`

- List files excluding those that match a specified blob pattern:

`dir --hide {{pattern}}`

- List subdirectories recursively:

`dir {{[-R|--recursive]}}`

- Display help:

`dir --help`
