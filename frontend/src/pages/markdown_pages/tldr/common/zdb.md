---
title: "ZFS Debugger - Analyze ZFS Pools | Online Free DevTools by Hexmos"
name: zdb
path: /freedevtools/tldr/common/zdb
canonical: "https://hexmos.com/freedevtools/tldr/common/zdb/"
description: "Analyze ZFS pools with ZFS Debugger (zdb). Troubleshoot storage issues, recover data, and examine pool configurations effectively. Free online tool, no registration required."
category: common
keywords:
- zfs debugger
- zfs pool analysis
- zfs data recovery
- zfs configuration inspection
- zfs troubleshooting tool
- zfs block statistics
- zfs storage management
- zfs command line
- zfs linux
- zfs macos
features:
- Show detailed configuration of ZFS zpools
- Display configuration for a specific ZFS pool
- Show statistics about the number of blocks
- Show statistics about the size of blocks
- Show statistics about deduplication of blocks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zdb

> ZFS debugger.
> More information: <https://manned.org/zdb>.

- Show detailed configuration of all mounted ZFS zpools:

`zdb`

- Show detailed configuration for a specific ZFS pool:

`zdb {{[-C|--config]}} {{poolname}}`

- Show statistics about number, size and deduplication of blocks:

`zdb {{[-b|--block-stats]}} {{poolname}}`
