---
title: "GIO Trash - Manage Files in Trash Bin | Free DevTools"
name: gio-trash
path: /freedevtools/tldr/linux/gio-trash
canonical: "https://hexmos.com/freedevtools/tldr/linux/gio-trash/"
description: "Manage files in trash bin with GIO Trash. Restore deleted files and empty the trash directly from the command line. Free online tool, no registration required."
category: linux
keywords:
- trash manager
- file deletion linux
- gio trash command
- linux trash cli
- gnome trash utility
- command line trash
- trash bin management
- file recovery linux
- restore deleted files
- gio linux
features:
- Move files and directories to the trash bin.
- List the contents of the trash bin.
- Restore specific files from the trash bin by ID.
- Manage trash from the command line.
- Delete files permanently by bypassing the trash.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gio trash

> Move files to the trash bin.
> Used by GNOME to handle trash.
> More information: <https://manned.org/gio.1>.

- Move specific files to the trash bin:

`gio trash {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- List trash bin items:

`gio trash --list`

- Restore a specific item from trash using its ID:

`gio trash trash://{{id}}`
