---
title: "Manage PXE Boot - Control Network Booting with Pixiecore | Online Free DevTools by Hexmos"
name: pixiecore
path: /freedevtools/tldr/pixi/pixiecore
canonical: "https://hexmos.com/freedevtools/tldr/pixi/pixiecore/"
description: "Manage PXE boot images with Pixiecore. Easily control network booting of machines using command line. Free online tool, no registration required."
category: common
keywords:
- pxe boot manager
- network boot server
- netboot image creation
- linux pxe boot
- ubuntu pxe boot
- command line boot utility
- pxe boot configuration
- dhcp server boot
- network bootloader
- pixiecore commands
features:
- Start a PXE boot server with a netboot.xyz image.
- Start a PXE boot server with an Ubuntu boot image.
- List available boot images for quick mode.
- Provide network boot images.
- Manage network booting of machines.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pixiecore

> Manage the network booting of machines.
> More information: <https://github.com/danderson/netboot/tree/master/pixiecore>.

- Start a PXE boot server which provides a `netboot.xyz` boot image:

`pixiecore {{quick}} xyz --dhcp-no-bind`

- Start a new PXE boot server which provides an Ubuntu boot image:

`pixiecore {{quick}} ubuntu --dhcp-no-bind`

- List all available boot images for quick mode:

`pixiecore quick --help`
