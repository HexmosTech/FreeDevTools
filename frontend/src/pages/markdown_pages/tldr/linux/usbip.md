---
title: "USBIP - Control USB Devices Remotely | Online Free DevTools by Hexmos"
name: usbip
path: /freedevtools/tldr/linux/usbip
canonical: "https://hexmos.com/freedevtools/tldr/linux/usbip/"
description: "Control USB devices remotely with usbip. Manage and share USB devices across networks using command-line instructions. Free online tool, no registration required."
category: linux
keywords:
  - usb device control
  - usbip commands
  - remote usb access
  - linux usbip
  - usb device sharing
  - usbip daemon
  - usbip bind
  - usbip attach
  - usbip detach
  - usbip unbind
features:
  - List local USB devices and their bus IDs.
  - Start and manage a usbip daemon on a server.
  - Bind USB devices to the usbip daemon.
  - Attach to remote USB devices from a client machine.
  - Detach and unbind USB devices from the usbip system.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# usbip

> Use USB devices remotely.
> More information: <https://usbip.sourceforge.net>.

- List all local USB devices and their bus ID's:

`usbip list {{[-l|--local]}}`

- Start a `usbip` daemon on the server:

`systemctl start usbipd`

- Bind a USB device to `usbip` on the server:

`sudo usbip bind {{[-b|--busid]}} {{bus_id}}`

- Load the kernel module required by `usbip` on the client:

`sudo modprobe vhci-hcd`

- Attach to the `usbip` device on the client (bus ID is the same as on the server):

`sudo usbip attach {{[-r|--remote]}} {{ip_address}} {{[-b|--busid]}} {{bus_id}}`

- List attached devices:

`usbip port`

- Detach from a device:

`sudo usbip detach {{[-p|--port]}} {{port}}`

- Unbind a device:

`usbip unbind {{[-b|--busid]}} {{bus_id}}`
