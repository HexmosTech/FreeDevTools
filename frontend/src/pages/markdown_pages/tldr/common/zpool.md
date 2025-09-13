---
title: "Zpool - Manage ZFS Pools | Free DevTools"
name: zpool
path: /freedevtools/tldr/common/zpool
canonical: "https://hexmos.com/freedevtools/tldr/common/zpool/"
description: "Manage ZFS pools easily with Zpool. Control storage configuration and status of ZFS. Free online tool, no registration required."
category: common
keywords:
- zfs pool manager
- zfs storage management
- zpool command line
- zpool status check
- zpool import export
- zfs mirroring setup
- zfs cache configuration
- zfs data integrity
- zfs history review
- linux zfs tools
features:
- Display ZFS pool configuration and status
- Scrub a ZFS pool for data integrity checks
- Import and export ZFS pools for portability
- Create mirrored ZFS pools for redundancy
- Add cache devices to ZFS pools
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zpool

> Manage ZFS pools.
> More information: <https://manned.org/zpool>.

- Show the configuration and status of all ZFS zpools:

`zpool status`

- Check a ZFS pool for errors (verifies the checksum of EVERY block). Very CPU and disk intensive:

`zpool scrub {{pool_name}}`

- List zpools available for import:

`zpool import`

- Import a zpool:

`zpool import {{pool_name}}`

- Export a zpool (unmount all filesystems):

`zpool export {{pool_name}}`

- Show the history of all pool operations:

`zpool history {{pool_name}}`

- Create a mirrored pool:

`zpool create {{pool_name}} mirror {{disk1}} {{disk2}} mirror {{disk3}} {{disk4}}`

- Add a cache (L2ARC) device to a zpool:

`zpool add {{pool_name}} cache {{cache_disk}}`
