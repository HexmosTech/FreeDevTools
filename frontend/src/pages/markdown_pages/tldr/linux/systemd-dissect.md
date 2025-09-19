---
title: "Systemd Dissect - Inspect Disk Images | Online Free DevTools by Hexmos"
name: systemd-dissect
path: /freedevtools/tldr/linux/systemd-dissect
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-dissect/"
description: "Inspect and interact with OS disk images using Systemd Dissect. Mount, unmount, list files, and manage loopback devices. Free online tool, no registration required."
category: linux
keywords:
  - disk image inspection
  - systemd disk image tool
  - linux disk image analysis
  - systemd-dissect commands
  - raw image manipulation
  - loopback device management
  - os image mounting
  - file system introspection
  - ddi analysis
  - systemd dissect tutorial
features:
  - Inspect general information about OS disk images.
  - Mount and unmount OS images.
  - List files within mounted OS images.
  - Attach and detach OS images to/from loopback devices.
  - Manage discoverable disk images (DDIs).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-dissect

> Introspect and interact with file system OS disk images, specifically Discoverable Disk Images (DDIs).
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-dissect.html>.

- Show general image information about the OS image:

`systemd-dissect {{path/to/image.raw}}`

- Mount an OS image:

`systemd-dissect {{[-m|--mount]}} {{path/to/image.raw}} {{/mnt/image}}`

- Unmount an OS image:

`systemd-dissect {{[-u|--umount]}} {{/mnt/image}}`

- List files in an image:

`systemd-dissect {{[-l|--list]}} {{path/to/image.raw}}`

- Attach an OS image to an automatically allocated loopback block device and print its path:

`systemd-dissect --attach {{path/to/image.raw}}`

- Detach an OS image from a loopback block device:

`systemd-dissect --detach {{path/to/device}}`
