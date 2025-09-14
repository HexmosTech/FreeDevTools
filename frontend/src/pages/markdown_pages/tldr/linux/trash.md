---
title: "Trash Manager - Control Recycling Bin | Free DevTools"
name: trash
path: /freedevtools/tldr/linux/trash
canonical: "https://hexmos.com/freedevtools/tldr/linux/trash/"
description: "Control trash management with Trash Manager on Linux. Effortlessly manage, restore, and empty your trash, reclaiming disk space easily. Free online tool, no registration required."
category: linux
keywords:
- linux trash manager
- recycle bin controller
- trash CLI tool
- file deletion tool
- linux trash restore
- command line trash
- trashcan management
- linux file recovery
- trash-cli linux
- empty trash command
features:
- Send files to the trash from the command line
- List all files currently in the trash
- Interactively restore files from the trash
- Empty the trash of all files or files older than a specific number of days
- Remove specific files or files matching a pattern from the trash
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trash

> Manage the trashcan/recycling bin.
> More information: <https://github.com/andreafrancia/trash-cli>.

- Send a file to the trash:

`trash {{path/to/file}}`

- List all files in the trash:

`trash-list`

- Interactively restore a file from the trash:

`trash-restore`

- Empty the trash:

`trash-empty`

- Permanently delete all files in the trash which are older than 10 days:

`trash-empty 10`

- Remove all files in the trash, which match a specific blob pattern:

`trash-rm "{{*.o}}"`

- Remove all files with a specific original location:

`trash-rm /{{path/to/file_or_directory}}`
