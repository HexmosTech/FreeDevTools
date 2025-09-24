---
title: "Defragment Ext4 Filesystem - e4defrag Command | Online Free DevTools by Hexmos"
name: e4defrag
path: /freedevtools/tldr/linux/e4defrag
canonical: "https://hexmos.com/freedevtools/tldr/linux/e4defrag/"
description: "Defragment ext4 filesystems easily with the e4defrag command.  Check filesystem fragmentation and optimize performance for faster read/write speeds. Free online tool, no registration required."
category: linux
keywords:
  - ext4 defragmentation
  - ext4 defragmenter
  - linux defragmentation
  - e4defrag command
  - filesystem defragmentation
  - linux filesystem tools
  - ext4 filesystem optimization
  - disk defragmentation linux
  - e4defrag usage
  - file system analysis
features:
  - Defragments ext4 filesystems to improve performance.
  - Analyzes filesystem fragmentation levels.
  - Provides verbose output showing fragmentation before and after defragmentation.
  - Allows checking fragmentation without performing defragmentation.
  - Supports specifying the target filesystem device.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# e4defrag

> Defragment an ext4 filesystem.
> More information: <https://manned.org/e4defrag>.

- Defragment the filesystem:

`e4defrag {{/dev/sdXN}}`

- See how fragmented a filesystem is:

`e4defrag -c {{/dev/sdXN}}`

- Print errors and the fragmentation count before and after each file:

`e4defrag -v {{/dev/sdXN}}`
