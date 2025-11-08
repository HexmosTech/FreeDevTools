---
title: "Firmware Update Tool - Update Device Firmware | Online Free DevTools by Hexmos"
name: fwupdtool
path: "/freedevtools/tldr/linux/fwupdtool/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/fwupdtool/"
description: "Update device firmware with fwupdtool. Manage device firmware installation and discovery on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- firmware update
- linux firmware update
- fwupdtool update
- device firmware management
- fwupd firmware manager
- firmware installation linux
- linux system update
- command line firmware tool
- open source firmware tool
- fwupd device discovery
features:
- Display detected devices
- Install firmware from a file
- Provide detailed help documentation
- Manage device firmware updates
- Interact with the fwupd daemon
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fwupdtool

> Update device firmware manually or manipulate firmware files.
> See also: `fwupdmgr`.
> More information: <https://github.com/fwupd/fwupd/blob/main/src/fwupdtool.md>.

- Display all devices detected by `fwupd`:

`fwupdtool get-devices`

- Install firmware from a file:

`fwupdtool install {{path/to/firmware}}`

- Display help:

`fwupdtool {{[-h|--help]}}`
