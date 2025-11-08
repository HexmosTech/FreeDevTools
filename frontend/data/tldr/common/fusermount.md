---
title: "Mount Filesystems - Control FUSE Mounts | Online Free DevTools by Hexmos"
name: fusermount
path: "/freedevtools/tldr/common/fusermount/"
canonical: "https://hexmos.com/freedevtools/tldr/common/fusermount/"
description: "Control FUSE filesystem mounts with fusermount. Unmount filesystems, manage mount points, and display version information. Free online tool, no registration required."
category: common
keywords:
- FUSE filesystem mount
- Filesystem unmount command
- Linux mount options
- Mount point manager
- FUSE unmount options
- Filesystem utility linux
- Linux command line tool
- FUSE filesystem control
- Mount manager linux
- FUSE filesystem version
features:
- Unmount FUSE filesystems by path
- Force unmount FUSE filesystems on disuse
- Display fusermount version information
- Control FUSE filesystem behavior
- Manage Linux mount points
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fusermount

> Mount and unmount FUSE filesystems.
> More information: <https://manned.org/fusermount>.

- Unmount a FUSE filesystem:

`fusermount -u {{path/to/mount_point}}`

- Unmount a FUSE filesystem as soon as it becomes unused:

`fusermount -z {{path/to/mount_point}}`

- Display version:

`fusermount --version`
