---
title: "Btrfs Restore - Salvage Files from Btrfs Filesystem | Online Free DevTools by Hexmos"
name: btrfs-restore
path: /freedevtools/tldr/linux/btrfs-restore
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-restore/"
description: "Salvage Btrfs data with Btrfs Restore. Recover files from corrupted or damaged Btrfs filesystems. Free online tool, no registration required."
category: linux
keywords:
- btrfs filesystem restore
- linux btrfs data recovery
- btrfs damaged filesystem salvage
- btrfs file extraction
- btrfs data recovery tool
- linux filesystem repair
- btrfs volume recovery
- btrfs snapshot restore
- btrfs recovery linux command
- btrfs file system backup
features:
- Restore files from a damaged Btrfs filesystem to a specified directory
- List files that can be restored without performing the actual restore operation
- Restore files based on a regular expression matching the file path
- Restore files using a specific root tree bytenr for recovery
- Restore files along with metadata, extended attributes, and symlinks, with overwrite option
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# btrfs restore

> Try to salvage files from a damaged btrfs filesystem.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-restore.html>.

- Restore all files from a btrfs filesystem to a given directory:

`sudo btrfs {{[rest|restore]}} {{path/to/btrfs_device}} {{path/to/target_directory}}`

- List (don't write) files to be restored from a btrfs filesystem:

`sudo btrfs {{[rest|restore]}} {{[-D|--dry-run]}} {{path/to/btrfs_device}} {{path/to/target_directory}}`

- Restore files matching a given `regex` ([c]ase-insensitive) files to be restored from a btrfs filesystem (all parent directories of target file(s) must match as well):

`sudo btrfs {{[rest|restore]}} --path-regex {{regex}} -c {{path/to/btrfs_device}} {{path/to/target_directory}}`

- Restore files from a btrfs filesystem using a specific root [t]ree `bytenr` (see `btrfs-find-root`):

`sudo btrfs {{[rest|restore]}} -t {{bytenr}} {{path/to/btrfs_device}} {{path/to/target_directory}}`

- Restore files from a btrfs filesystem (along with metadata, extended attributes, and Symlinks), overwriting files in the target:

`sudo btrfs {{[rest|restore]}} {{[-m|--metadata]}} {{[-x|--xattr]}} {{[-S|--symlinks]}} {{[-o|--overwrite]}} {{path/to/btrfs_device}} {{path/to/target_directory}}`
