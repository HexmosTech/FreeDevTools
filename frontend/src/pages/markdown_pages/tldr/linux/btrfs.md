---
title: "Create Btrfs Subvolumes - Manage Linux Filesystems | Online Free DevTools by Hexmos"
name: btrfs
path: /freedevtools/tldr/linux/btrfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs/"
description: "Create Btrfs subvolumes with Btrfs. Manage Linux filesystems efficiently using copy-on-write. Free online tool, no registration required."
category: linux
keywords:
  - btrfs subvolume creation
  - linux filesystem management
  - btrfs quota control
  - btrfs space usage
  - btrfs subvolume list
  - btrfs enable quota
  - btrfs show quota
  - cow filesystem linux
  - btrfs command line
  - linux btrfs tools
features:
  - Create btrfs subvolumes for data isolation.
  - List existing btrfs subvolumes on a mount point.
  - Display space usage information for a btrfs filesystem.
  - Enable quota for a specific btrfs subvolume.
  - Show quota group information for a btrfs subvolume.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# btrfs

> A filesystem based on the copy-on-write (COW) principle for Linux.
> Some subcommands such as `device` have their own usage documentation.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs.html>.

- Create subvolume:

`sudo btrfs {{[su|subvolume]}} {{[c|create]}} {{path/to/subvolume}}`

- List subvolumes:

`sudo btrfs {{[su|subvolume]}} {{[l|list]}} {{path/to/mount_point}}`

- Show space usage information:

`sudo btrfs {{[f|filesystem]}} df {{path/to/mount_point}}`

- Enable quota:

`sudo btrfs {{[qu|quota]}} {{[e|enable]}} {{path/to/subvolume}}`

- Show quota:

`sudo btrfs {{[qg|qgroup]}} {{[s|show]}} {{path/to/subvolume}}`
