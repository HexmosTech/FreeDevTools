---
title: "Btrfs Subvolume - Manage Snapshots | Online Free DevTools by Hexmos"
name: btrfs-subvolume
path: /freedevtools/tldr/linux/btrfs-subvolume
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-subvolume/"
description: "Manage Btrfs subvolumes with Btrfs Subvolume command. Create snapshots, list existing subvolumes, and delete subvolumes. Free online tool, no registration required."
category: linux
keywords:
  - btrfs subvolume manager
  - btrfs snapshot tool
  - linux btrfs subvolume
  - btrfs subvolume create
  - btrfs subvolume delete
  - btrfs subvolume list
  - btrfs subvolume snapshot
  - btrfs subvolume show
  - btrfs filesystem manager
  - btrfs partition tool
features:
  - Create new Btrfs subvolumes
  - List all subvolumes in a Btrfs filesystem
  - Delete specified Btrfs subvolumes
  - Create read-only snapshots of subvolumes
  - Display detailed information about a subvolume
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# btrfs subvolume

> Manage btrfs subvolumes and snapshots.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-subvolume.html>.

- Create a new empty subvolume:

`sudo btrfs {{[su|subvolume]}} {{[c|create]}} {{path/to/new_subvolume}}`

- List all subvolumes and snapshots in the specified filesystem:

`sudo btrfs {{[su|subvolume]}} {{[l|list]}} {{path/to/btrfs_filesystem}}`

- Delete a subvolume:

`sudo btrfs {{[su|subvolume]}} {{[d|delete]}} {{path/to/subvolume}}`

- Create a [r]ead-only snapshot of an existing subvolume:

`sudo btrfs {{[su|subvolume]}} {{[sn|snapshot]}} -r {{path/to/source_subvolume}} {{path/to/target}}`

- Create a read-write snapshot of an existing subvolume:

`sudo btrfs {{[su|subvolume]}} {{[sn|snapshot]}} {{path/to/source_subvolume}} {{path/to/target}}`

- Show detailed information about a subvolume:

`sudo btrfs {{[su|subvolume]}} {{[sh|show]}} {{path/to/subvolume}}`
