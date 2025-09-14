---
title: "BTRFS Rescue - Recover Filesystem | Free DevTools"
name: btrfs-rescue
path: /freedevtools/tldr/linux/btrfs-rescue
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-rescue/"
description: "Recover damaged BTRFS filesystems with btrfs-rescue.  Repair superblocks, fix device size issues, and recover from interrupted transactions. Free online tool, no registration required."
category: linux
keywords:
  - btrfs filesystem recovery
  - btrfs rescue command
  - linux btrfs repair
  - btrfs superblock recovery
  - btrfs chunk recovery
  - btrfs device size repair
  - btrfs log recovery
  - btrfs filesystem repair tool
  - btrfs data recovery
  - linux filesystem rescue
features:
  - Rebuilds the BTRFS filesystem metadata tree.
  - Fixes device size alignment problems.
  - Recovers corrupted superblocks from backups.
  - Recovers from interrupted transactions.
  - Creates a `/dev/btrfs-control` control device if needed.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# btrfs rescue

> Try to recover a damaged btrfs filesystem.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-rescue.html>.

- Rebuild the filesystem metadata tree (very slow):

`sudo btrfs {{[resc|rescue]}} {{[ch|chunk-recover]}} {{path/to/partition}}`

- Fix device size alignment related problems (e.g. unable to mount the filesystem with super total bytes mismatch):

`sudo btrfs {{[resc|rescue]}} {{[fix-de|fix-device-size]}} {{path/to/partition}}`

- Recover a corrupted superblock from correct copies (recover the root of filesystem tree):

`sudo btrfs {{[resc|rescue]}} {{[s|super-recover]}} {{path/to/partition}}`

- Recover from an interrupted transactions (fixes log replay problems):

`sudo btrfs {{[resc|rescue]}} {{[z|zero-log]}} {{path/to/partition}}`

- Create a `/dev/btrfs-control` control device when `mknod` is not installed:

`sudo btrfs {{[resc|rescue]}} {{[c|create-control-device]}}`
