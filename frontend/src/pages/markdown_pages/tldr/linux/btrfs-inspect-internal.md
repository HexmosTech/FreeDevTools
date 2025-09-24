---
title: "Btrfs Inspect - Query Filesystem | Online Free DevTools by Hexmos"
name: btrfs-inspect-internal
path: /freedevtools/tldr/linux/btrfs-inspect-internal
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-inspect-internal/"
description: "Query filesystem details with Btrfs Inspect-Internal on Linux. Analyze metadata and troubleshoot your Btrfs file system. Free online tool, no registration required."
category: linux
keywords:
- btrfs filesystem query
- btrfs metadata analysis
- btrfs superblock dump
- btrfs tree stats
- btrfs inode resolve
- btrfs logical resolve
- linux btrfs inspect
- btrfs filesystem debugging
- btrfs partition inspection
- btrfs internal information
features:
- Dump Btrfs superblock information
- Resolve file inodes in a Btrfs filesystem
- Resolve logical addresses in a Btrfs filesystem
- Print Btrfs filesystem metadata information
- Print Btrfs tree statistics
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# btrfs inspect-internal

> Query internal information of a btrfs filesystem.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-inspect-internal.html>.

- Print superblock's information:

`sudo btrfs {{[i|inspect-internal]}} {{[dump-s|dump-super]}} {{path/to/partition}}`

- Print superblock's and all of its copies' information:

`sudo btrfs {{[i|inspect-internal]}} {{[dump-s|dump-super]}} {{[-a|--all]}} {{path/to/partition}}`

- Print filesystem's metadata information:

`sudo btrfs {{[i|inspect-internal]}} {{[dump-t|dump-tree]}} {{path/to/partition}}`

- Print list of files in inode `n`-th:

`sudo btrfs {{[i|inspect-internal]}} {{[i|inode-resolve]}} {{n}} {{path/to/btrfs_mount}}`

- Print list of files at a given logical address:

`sudo btrfs {{[i|inspect-internal]}} {{[lo|logical-resolve]}} {{logical_address}} {{path/to/btrfs_mount}}`

- Print stats of root, extent, csum and fs trees:

`sudo btrfs {{[i|inspect-internal]}} {{[t|tree-stats]}} {{path/to/partition}}`
