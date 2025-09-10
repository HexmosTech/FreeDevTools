---
title: devfsadm
name: devfsadm
path: /freedevtools/tldr/sunos/devfsadm
canonical: "https://hexmos.com/freedevtools/tldr/sunos/devfsadm/"
description: Administration command for /dev. Maintains the /dev namespace.
category: sunos
keywords:
- device filesystem management
- dynamic device creation
- /dev directory administration
- device node management
- system device configuration
- hardware discovery and setup
- operating system device handling
- persistent device naming
- device driver integration
- hotplug device support
features:
- scan for new devices
- cleanup dangling /dev links
- perform dry-run device management
- manage disk devices
- maintain /dev namespace
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# devfsadm

> Administration command for `/dev`. Maintains the `/dev` namespace.
> More information: <https://www.unix.com/man-page/sunos/1m/devfsadm>.

- Scan for new disks:

`devfsadm -c disk`

- Cleanup any dangling /dev links and scan for new device:

`devfsadm -C -v`

- Dry-run - output what would be changed but make no modifications:

`devfsadm -C -v -n`
