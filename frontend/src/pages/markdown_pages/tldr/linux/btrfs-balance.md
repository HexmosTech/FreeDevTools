---
title: "Btrfs Balance - Manage Block Groups | Free DevTools"
name: btrfs-balance
path: /freedevtools/tldr/linux/btrfs-balance
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-balance/"
description: "Balance Btrfs filesystem block groups efficiently with btrfs-balance.  Control disk space utilization and optimize performance. Free online tool, no registration required."
category: linux
keywords:
  - btrfs filesystem balance
  - btrfs block group management
  - linux btrfs optimization
  - btrfs data balance command
  - btrfs metadata balance
  - btrfs raid conversion
  - btrfs performance tuning
  - btrfs space management
  - btrfs balance status check
  - linux btrfs tool
features:
  - Show status of balance operations.
  - Balance all block groups for optimal distribution.
  - Balance data blocks based on utilization percentage.
  - Balance metadata chunks based on utilization and device.
  - Convert data and metadata blocks to different RAID levels.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# btrfs balance

> Balance block groups on a btrfs filesystem.
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-balance.html>.

- Show the status of a running or paused balance operation:

`sudo btrfs {{[b|balance]}} status {{path/to/btrfs_filesystem}}`

- Balance all block groups (slow; rewrites all blocks in filesystem):

`sudo btrfs {{[b|balance]}} start {{path/to/btrfs_filesystem}}`

- Balance data block groups which are less than 15% utilized, running the operation in the background:

`sudo btrfs {{[b|balance]}} start {{[--bg|--background]}} -dusage={{15}} {{path/to/btrfs_filesystem}}`

- Balance a max of 10 metadata chunks with less than 20% utilization and at least 1 chunk on a given device `devid` (see `btrfs filesystem show`):

`sudo btrfs {{[b|balance]}} start -musage={{20}},limit={{10}},devid={{devid}} {{path/to/btrfs_filesystem}}`

- Convert data blocks to the raid6 and metadata to raid1c3 (see mkfs.btrfs(8) for profiles):

`sudo btrfs {{[b|balance]}} start -dconvert={{raid6}} -mconvert={{raid1c3}} {{path/to/btrfs_filesystem}}`

- Convert data blocks to raid1, skipping already converted chunks (e.g. after a previous cancelled conversion operation):

`sudo btrfs {{[b|balance]}} start -dconvert={{raid1}},soft {{path/to/btrfs_filesystem}}`

- Cancel, pause, or resume a running or paused balance operation:

`sudo btrfs {{[b|balance]}} {{cancel|pause|resume}} {{path/to/btrfs_filesystem}}`
