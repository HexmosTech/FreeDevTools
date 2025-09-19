---
title: "ZFS Manager - Control ZFS Filesystems | Online Free DevTools by Hexmos"
name: zfs
path: /freedevtools/tldr/common/zfs
canonical: "https://hexmos.com/freedevtools/tldr/common/zfs/"
description: "Control ZFS filesystems with ZFS Manager. Create snapshots, enable compression, and change mountpoints for efficient data management. Free online tool, no registration required."
category: common
keywords:
- ZFS filesystem management
- ZFS snapshot creation
- ZFS pool management
- ZFS compression control
- ZFS mountpoint configuration
- ZFS command line tool
- ZFS data storage
- ZFS Linux
- ZFS FreeBSD
- ZFS administration
features:
- List available ZFS filesystems
- Create new ZFS filesystems with custom names
- Destroy ZFS filesystems to free up space
- Create point-in-time snapshots of ZFS filesystems
- Enable data compression on ZFS filesystems for optimized storage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zfs

> Manage ZFS filesystems.
> More information: <https://manned.org/zfs>.

- List all available zfs filesystems:

`zfs list`

- Create a new ZFS filesystem:

`zfs create {{pool_name/filesystem_name}}`

- Delete a ZFS filesystem:

`zfs destroy {{pool_name/filesystem_name}}`

- Create a Snapshot of a ZFS filesystem:

`zfs snapshot {{pool_name/filesystem_name}}@{{snapshot_name}}`

- Enable compression on a filesystem:

`zfs set compression=on {{pool_name/filesystem_name}}`

- Change mountpoint for a filesystem:

`zfs set mountpoint=/{{path/to/mount_point}} {{pool_name/filesystem_name}}`
