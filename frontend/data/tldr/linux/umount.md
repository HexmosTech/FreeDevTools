---
title: "Unmount Filesystem - Control Disk Mounts | Online Free DevTools by Hexmos"
name: umount
path: "/freedevtools/tldr/linux/umount/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/umount/"
description: "Control disk mounts with the umount command. Unmount filesystems, manage device access, and resolve mount issues. Free online tool, no registration required."
category: linux
keywords:
  - filesystem unmount command
  - linux unmount command
  - unmount device linux
  - unmount directory linux
  - recursive unmount command
  - umount all filesystems
  - force unmount filesystem
  - read-only unmount
  - unix unmount command
  - macOS unmount command
features:
  - Unmounts filesystems from specified mount points.
  - Handles both device file and mount point paths.
  - Supports recursive unmounting of directories.
  - Offers a read-only unmount option for resolving issues.
  - Provides a command to unmount all filesystems (excluding proc).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# umount

> Unlink a filesystem from its mount point, making it no longer accessible.
> A filesystem cannot be unmounted when it is busy.
> More information: <https://manned.org/umount.8>.

- Unmount a filesystem, by passing the path to the source it is mounted from:

`sudo umount {{path/to/device_file}}`

- Unmount a filesystem, by passing the path to the target where it is mounted:

`sudo umount {{path/to/mounted_directory}}`

- When an unmount fails, try to remount the filesystem read-only:

`sudo umount {{[-r|--read-only]}} {{path/to/mounted_directory}}`

- Recursively unmount each specified directory:

`sudo umount {{[-R|--recursive]}} {{path/to/mounted_directory}}`

- Unmount all mounted filesystems (except the `proc` filesystem):

`sudo umount {{[-a|--all]}}`
