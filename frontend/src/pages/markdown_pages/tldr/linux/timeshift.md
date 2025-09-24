---
title: "Timeshift - Restore System Snapshots | Online Free DevTools by Hexmos"
name: timeshift
path: /freedevtools/tldr/linux/timeshift
canonical: "https://hexmos.com/freedevtools/tldr/linux/timeshift/"
description: "Restore system snapshots with Timeshift. Back up and recover your Linux system with ease using this powerful utility. Free online tool, no registration required."
category: linux
keywords:
  - system restore linux
  - linux snapshot manager
  - timeshift backup linux
  - system recovery linux
  - linux system imaging
  - snapshot restore utility
  - timeshift command line
  - linux system rollback
  - system backup and recovery
  - linux data protection
features:
  - Create system snapshots on demand
  - Restore system to a previous snapshot
  - List available snapshots for review
  - Delete specific snapshots to manage disk space
  - Schedule automatic snapshot creation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# timeshift

> System restore utility.
> More information: <https://github.com/linuxmint/timeshift>.

- List snapshots:

`sudo timeshift --list`

- Create a new snapshot (if scheduled):

`sudo timeshift --check`

- Create a new snapshot (even if not scheduled):

`sudo timeshift --create`

- Restore a snapshot (selecting which snapshot to restore interactively):

`sudo timeshift --restore`

- Restore a specific snapshot:

`sudo timeshift --restore --snapshot '{{snapshot}}'`

- Delete a specific snapshot:

`sudo timeshift --delete --snapshot '{{snapshot}}'`
