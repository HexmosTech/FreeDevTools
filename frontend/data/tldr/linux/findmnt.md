---
title: "Find Filesystem - Locate Mount Points | Online Free DevTools by Hexmos"
name: findmnt
path: "/freedevtools/tldr/linux/findmnt/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/findmnt/"
description: "Locate filesystems with Findmnt on Linux. Quickly identify mount points and device information. Analyze mount tables effectively. Free online tool, no registration required."
category: linux
keywords:
- linux findmnt
- filesystem finder
- mount point location
- mount table analysis
- device identification linux
- linux mount information
- find filesystem type linux
- find filesystem label linux
- linux mount verification
- etc fstab check linux
features:
- List all mounted filesystems
- Search for a specific device by path
- Search for a specific mountpoint
- Find filesystems based on type
- Find filesystems with a specific label
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# findmnt

> Find your filesystem.
> More information: <https://manned.org/findmnt>.

- List all mounted filesystems:

`findmnt`

- Search for a device:

`findmnt {{/dev/sdb1}}`

- Search for a mountpoint:

`findmnt {{/}}`

- Find filesystems in specific type:

`findmnt {{[-t|--types]}} {{ext4,virtiofs,btrfs,...}}`

- Find filesystems with specific label:

`findmnt LABEL={{BigStorage}}`

- Check mount table content in detail and verify `/etc/fstab`:

`findmnt {{[-x|--verify]}} --verbose`
