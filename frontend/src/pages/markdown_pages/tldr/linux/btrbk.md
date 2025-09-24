---
title: "Create Btrfs Snapshots - Backup Btrfs Subvolumes | Online Free DevTools by Hexmos"
name: btrbk
path: /freedevtools/tldr/linux/btrbk
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrbk/"
description: "Create Btrfs snapshots with btrbk for reliable data backup. Manage subvolumes and schedule backups on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- Btrfs snapshot creation
- Btrfs subvolume backup
- Linux btrbk utility
- Btrfs data recovery
- Btrfs backup scheduling
- Linux volume snapshotting
- Btrfs incremental backup
- Btrfs remote backup
- Linux btrfs management
- Btrfs filesystem tools
features:
- Create Btrfs snapshots for subvolumes
- Schedule regular Btrfs backups
- Perform remote backups of Btrfs volumes
- Display statistics about Btrfs snapshots
- Simulate backup routines with dry-run mode
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# btrbk

> Create snapshots and remote backups of btrfs subvolumes.
> More information: <https://digint.ch/btrbk/doc/readme.html>.

- Print statistics about configured subvolumes and snapshots:

`sudo btrbk stats`

- List configured subvolumes and snapshots:

`sudo btrbk list`

- Print what would happen in a run without making the displayed changes:

`sudo btrbk {{[-v|--verbose]}} dryrun`

- Run backup routines verbosely, show progress bar:

`sudo btrbk --progress {{[-v|--verbose]}} run`

- Only create snapshots for configured subvolumes:

`sudo btrbk snapshot`
