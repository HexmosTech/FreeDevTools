---
title: "Lbu - Manage APK Overlays on Linux | Free DevTools"
name: lbu
path: /freedevtools/tldr/linux/lbu
canonical: "https://hexmos.com/freedevtools/tldr/linux/lbu/"
description: "Manage apk overlays with lbu, a Linux utility for Alpine systems. Commit changes, revert to backups and control file inclusion and exclusion. Free online tool, no registration required."
category: linux
keywords:
- apk overlay manager
- alpine linux backup
- lbu commit changes
- linux overlay control
- alpine package management
- etc directory backup
- diskless system backup
- linux file exclusion
- alpine system revert
- backup overlay manager
features:
- Commit changes to persistent storage in Alpine Linux.
- List files tracked for backup with lbu status.
- Include or exclude specific files or directories.
- List available backups for system reversion.
- Revert to a specific backup overlay file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lbu

> Manage `apk` overlay files on a diskless Alpine Linux system.
> Note: Subcommands like `include` write to `/etc`, which is stored in RAM. You need to run `lbu commit` to save the changes.
> More information: <https://wiki.alpinelinux.org/wiki/Alpine_local_backup>.

- Commit changes to persistent storage (only files in `/etc` by default):

`lbu {{[ci|commit]}}`

- List files that would be saved using `commit`:

`lbu {{[st|status]}}`

- Display changes in tracked files that would be saved using `commit`:

`lbu diff`

- Include a specific file or directory in the `apk` overlay:

`lbu {{[inc|include]}} {{path/to/file_or_directory}}`

- Exclude a specific file or directory in `/etc` from the `apk` overlay:

`lbu {{[ex|exclude]}} {{path/to/file_or_directory}}`

- Display the list of manually included/excluded files:

`lbu {{include|exclude}} -l`

- List backups (previously created overlays):

`lbu {{[lb|list-backup]}}`

- Revert to a backup overlay:

`lbu revert {{overlay_filename.tar.gz}}`
