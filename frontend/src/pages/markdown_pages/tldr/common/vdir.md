---
title: "List Directory - Verbose Listing with vdir | Free DevTools"
name: vdir
path: /freedevtools/tldr/common/vdir
canonical: "https://hexmos.com/freedevtools/tldr/common/vdir/"
description: "List directory contents with vdir for detailed file information. Quickly analyze file sizes and modification times on Linux, macOS, and Unix. Free online tool, no registration required."
category: common
keywords:
- verbose directory listing
- directory content analyzer
- linux file listing
- macOS directory command
- unix vdir command
- file size analysis
- modification time sort
- hidden files listing
- recursive directory listing
- directory grouping command
features:
- Display verbose directory information
- Sort files by size or modification time
- List hidden files and directories
- Recursively list directory contents
- Group directories before files in output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vdir

> Verbosely list directory contents.
> Drop-in replacement for `ls -l -b`.
> More information: <https://manned.org/vdir>.

- List files and directories in the current directory, one per line, with details:

`vdir`

- List with sizes displayed in human-readable units (KB, MB, GB):

`vdir {{[-h|--human-readable]}}`

- List including hidden files (starting with a dot):

`vdir {{[-a|--all]}}`

- List files and directories sorting entries by size (largest first):

`vdir -S`

- List files and directories sorting entries by modification time (newest first):

`vdir -t`

- List grouping directories first:

`vdir --group-directories-first`

- Recursively list all files and directories in a specific directory:

`vdir {{[-R|--recursive]}} {{path/to/directory}}`
