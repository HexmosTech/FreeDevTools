---
title: "Disk Utility - Manage Disks and Volumes | Online Free DevTools by Hexmos"
name: diskutil
path: /freedevtools/tldr/osx/diskutil
canonical: "https://hexmos.com/freedevtools/tldr/osx/diskutil/"
description: "Manage disks with Disk Utility, a command-line tool for macOS. Repair volumes, unmount disks, and eject media using command prompts. Free online tool, no registration required."
category: osx
keywords:
- disk volume manager
- disk partition tool
- macOS disk utility
- disk repair command
- volume unmount command
- disk eject command
- disk formatting tool
- command line disk tool
- osx disk manager
- terminal disk utility
features:
- List all available disks, partitions, and mounted volumes.
- Repair filesystem data structures of a specified volume.
- Unmount a specified disk or volume.
- Eject removable media from a specified device.
- Manage and control disks via command line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# diskutil

> Utility to manage local disks and volumes.
> Some subcommands such as `partitiondisk` have their own usage documentation.
> More information: <https://keith.github.io/xcode-man-pages/diskutil.8.html>.

- List all currently available disks, partitions and mounted volumes:

`diskutil list`

- Repair the filesystem data structures of a volume:

`diskutil repairVolume {{/dev/disk}}`

- Unmount a volume:

`diskutil unmountDisk {{/dev/disk}}`

- Eject a CD/DVD (unmount first):

`diskutil eject {{/dev/diskX}}`
