---
title: "Umount Filesystem - Disconnect Filesystems | Online Free DevTools by Hexmos"
name: umount
path: "/freedevtools/tldr/common/umount/"
canonical: "https://hexmos.com/freedevtools/tldr/common/umount/"
description: "Disconnect filesystem partitions with Umount Filesystem, making data inaccessible. Unmount various devices and network shares easily. Free online tool, no registration required."
category: common
keywords:
- filesystem unmount
- mount point removal
- partition disconnection
- linux umount command
- macos umount command
- bsd umount command
- device unmounting
- network share disconnect
- volume unmounting
- busy filesystem unmount
features:
- Disconnect a filesystem from a specified device path
- Disconnect a filesystem from a designated mount point
- Forcefully unmount a filesystem when necessary
- Unmount all mounted filesystems excluding specific types
- Safely detach a filesystem, ensuring data integrity
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# umount

> Unlink a filesystem from its mount point, making it no longer accessible.
> A filesystem cannot be unmounted when it is busy.
> More information: <https://man.openbsd.org/umount>.

- Unmount a filesystem, by passing the path to the source it is mounted from:

`umount {{path/to/device_file}}`

- Unmount a filesystem, by passing the path to the target where it is mounted:

`umount {{path/to/mounted_directory}}`

- Unmount all mounted filesystems (except the `proc` filesystem):

`umount -a`
