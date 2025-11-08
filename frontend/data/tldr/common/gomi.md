---
title: "Manage Trashcan - Safely Remove Files with Gomi | Online Free DevTools by Hexmos"
name: gomi
path: "/freedevtools/tldr/common/gomi/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gomi/"
description: "Safely manage files with Gomi trashcan manager. Easily remove files and folders, restore deleted items, and prune old trash. Free online tool, no registration required."
category: common
keywords:
- trashcan manager
- command line trash
- file deletion linux
- gomi trash tool
- linux trash utility
- restore deleted files
- prune trashcan files
- remove orphaned trashinfo
- command line file manager
- delete files safely
features:
- Safely delete files and folders to the trashcan
- Restore files from the trashcan interactively
- Prune files older than a specified time period
- Remove orphaned .trashinfo files
- Manage trashcan from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gomi

> Manage the trashcan.
> See also: `trash`, `rm`.
> More information: <https://github.com/babarot/gomi>.

- Safely delete specific files or folders:

`gomi {{path/to/file1 path/to/file2 path/to/folder1 path/to/folder2 ...}}`

- Open an interactive menu to restore one or more files:

`gomi {{[-b|--restore]}}`

- Remove files that have been in the trashcan longer than the specified time ([d]ay, [w]eek, [m]onth, [y]ear):

`gomi --prune {{1d|1w|1m|1y|...}}`

- Remove orphaned `.trashinfo` files:

`gomi --prune {{orphans}}`
