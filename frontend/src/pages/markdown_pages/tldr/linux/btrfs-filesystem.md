---
title: "btrfs Filesystem - Manage Filesystem with btrfs | Online Free DevTools by Hexmos"
name: btrfs-filesystem
path: /freedevtools/tldr/linux/btrfs-filesystem
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-filesystem/"
description: "Manage btrfs filesystems efficiently with the btrfs command.  Show usage, defragment files and directories, force sync data, and create swap files. Free online tool, no registration required."
category: linux
keywords:
  - btrfs filesystem management
  - btrfs disk usage
  - btrfs defragmentation
  - btrfs data synchronization
  - btrfs swap file creation
  - linux filesystem management
  - btrfs command line tool
  - btrfs filesystem analysis
  - btrfs file system utilities
  - btrfs performance optimization
features:
  - Show detailed filesystem usage information.
  - Defragment individual files and directories.
  - Force synchronization of unwritten data blocks.
  - Create swap files with custom size and UUID.
  - Summarize disk usage recursively for directories.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# btrfs filesystem

> Manage btrfs filesystems.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-filesystem.html>.

- Show filesystem usage (optionally run as root to show detailed information):

`btrfs {{[f|filesystem]}} {{[u|usage]}} {{path/to/btrfs_mount}}`

- Show usage by individual devices:

`sudo btrfs {{[f|filesystem]}} {{[sh|show]}} {{path/to/btrfs_mount}}`

- Defragment a single file on a btrfs filesystem (avoid while a deduplication agent is running):

`sudo btrfs {{[f|filesystem]}} {{[de|defragment]}} {{[-v|--verbose]}} {{path/to/file}}`

- Defragment a directory recursively (does not cross subvolume boundaries):

`sudo btrfs {{[f|filesystem]}} {{[de|defragment]}} {{[-v|--verbose]}} -r {{path/to/directory}}`

- Force syncing unwritten data blocks to disk(s):

`sudo btrfs {{[f|filesystem]}} {{[sy|sync]}} {{path/to/btrfs_mount}}`

- Summarize disk usage for the files in a directory recursively:

`sudo btrfs {{[f|filesystem]}} du {{[-s|--summarize]}} {{path/to/directory}}`

- Create a swap file:

`sudo btrfs {{[f|filesystem]}} {{[m|mkswapfile]}} --size {{8g}} --uuid {{clear|random|time|UUID_value}} {{path/to/swapfile}}`
