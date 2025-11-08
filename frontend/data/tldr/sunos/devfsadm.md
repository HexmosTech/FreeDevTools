---
title: "Manage Device Filesystem - Control /dev | Online Free DevTools by Hexmos"
name: devfsadm
path: "/freedevtools/tldr/sunos/devfsadm/"
canonical: "https://hexmos.com/freedevtools/tldr/sunos/devfsadm/"
description: "Control /dev filesystem with devfsadm on SunOS. Dynamically manage device nodes, scan for new devices, and clean up dangling links. Free online tool, no registration required."
category: sunos
keywords:
  - device filesystem management
  - SunOS device management
  - /dev directory control
  - dynamic device creation
  - device node administration
  - persistent device naming
  - hardware discovery SunOS
  - hotplug device configuration
  - system device setup
  - /dev namespace maintenance
features:
  - Scan for new device nodes in /dev
  - Clean up dangling symbolic links in /dev
  - Perform dry-run device management operations
  - Manage disk devices within the filesystem
  - Maintain the integrity of the /dev namespace
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
