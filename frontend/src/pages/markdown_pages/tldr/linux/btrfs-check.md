---
title: "Btrfs Check - Repair Filesystems | Online Free DevTools by Hexmos"
name: btrfs-check
path: /freedevtools/tldr/linux/btrfs-check
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-check/"
description: "Repair Btrfs filesystems with Btrfs Check. Identify and fix errors, rebuild trees, and verify checksums. Free online tool, no registration required."
category: linux
keywords:
- btrfs filesystem check
- btrfs repair tool
- linux filesystem repair
- btrfs checksum verification
- btrfs superblock recovery
- btrfs extent tree repair
- btrfs data integrity check
- btrfs error correction
- linux btrfs maintenance
- btrfs recovery linux
features:
- Check a Btrfs filesystem for errors
- Repair a Btrfs filesystem with error correction
- Verify data checksums within the filesystem
- Rebuild the checksum tree for data integrity
- Initialize and rebuild the extent tree
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# btrfs check

> Check or repair a btrfs filesystem.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-check.html>.

- Check a btrfs filesystem:

`sudo btrfs {{[c|check]}} {{path/to/partition}}`

- Check and repair a btrfs filesystem (dangerous):

`sudo btrfs {{[c|check]}} --repair {{path/to/partition}}`

- Show the progress of the check:

`sudo btrfs {{[c|check]}} {{[-p|--progress]}} {{path/to/partition}}`

- Verify the checksum of each data block (if the filesystem is good):

`sudo btrfs {{[c|check]}} --check-data-csum {{path/to/partition}}`

- Use the `n`-th superblock (`n` can be 0, 1 or 2):

`sudo btrfs {{[c|check]}} {{[-s|--super]}} {{n}} {{path/to/partition}}`

- Rebuild the checksum tree:

`sudo btrfs {{[c|check]}} --repair --init-csum-tree {{path/to/partition}}`

- Rebuild the extent tree:

`sudo btrfs {{[c|check]}} --repair --init-extent-tree {{path/to/partition}}`
