---
title: "Systemd-mount - Mount Filesystems | Free DevTools"
name: systemd-mount
path: /freedevtools/tldr/linux/systemd-mount
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-mount/"
description: "Mount filesystems instantly with systemd-mount on Linux. Automate transient mounts, manage block devices, and configure mount options. Free online tool, no registration required."
category: linux
keywords:
- linux mount filesystem
- systemd mount
- block device mount
- transient mount linux
- automount linux
- mount image linux
- filesystem mount options
- umount command linux
- mount block device linux
- systemd mount automount
features:
- Mount filesystems at specified mount points
- Create transient mount points on demand
- Automatically mount filesystems on access
- Unmount devices or mount points easily
- Specify filesystem type and mount options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-mount

> Establish and destroy transient mount or auto-mount points.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-mount.html>.

- Mount a file system (image or block device) at `/run/media/system/LABEL` where LABEL is the filesystem label or the device name if there is no label:

`systemd-mount {{path/to/file_or_device}}`

- Mount a file system (image or block device) at a specific location:

`systemd-mount {{path/to/file_or_device}} {{path/to/mount_point}}`

- List all local, known block devices with file systems that may be mounted:

`systemd-mount --list`

- Create an automount point that mounts the actual file system at the time of first access:

`systemd-mount --automount yes {{path/to/file_or_device}}`

- Unmount one or more devices:

`systemd-mount {{[-u|--umount]}} {{path/to/mount_point_or_device1 path/to/mount_point_or_device2 ...}}`

- Mount a file system (image or block device) with a specific file system type:

`systemd-mount {{[-t|--type]}} {{file_system_type}} {{path/to/file_or_device}} {{path/to/mount_point}}`

- Mount a file system (image or block device) with additional mount options:

`systemd-mount {{[-o|--options]}} {{mount_options}} {{path/to/file_or_device}} {{path/to/mount_point}}`
