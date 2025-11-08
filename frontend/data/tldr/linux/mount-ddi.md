---
title: "Mount Disk Images - Control DDI Mounts | Online Free DevTools by Hexmos"
name: mount.ddi
path: "/freedevtools/tldr/linux/mount-ddi/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/mount-ddi/"
description: "Mount disk images easily with mount.ddi.  Manage and access discoverable disk images (DDI) using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - disk image mounting
  - ddi mount command
  - systemd-dissect ddi
  - linux disk image
  - mount ddi linux
  - raw image mounting
  - command-line disk mounting
  - ddi management
  - systemd ddi
  - discoverable disk image
features:
  - Mounts raw disk images (.raw)
  - Integrates with systemd-dissect
  - Provides command-line access to DDIs
  - Enables manipulation of OS images
  - Supports various image formats (depending on underlying filesystem)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mount.ddi

> Mount Discoverable Disk Images.
> See also: `systemd-dissect` for other commands relevant to DDIs.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-dissect.html>.

- Mount an OS image:

`mount.ddi {{path/to/image.raw}} {{/mnt/image}}`
