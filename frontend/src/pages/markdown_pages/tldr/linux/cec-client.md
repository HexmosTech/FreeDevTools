---
title: "Control CEC Devices - Manage CEC Connections | Online Free DevTools by Hexmos"
name: cec-client
path: /freedevtools/tldr/linux/cec-client
canonical: "https://hexmos.com/freedevtools/tldr/linux/cec-client/"
description: "Manage and control Consumer Electronics Control (CEC) devices with cec-client.  List adapters, send commands, and interact with CEC devices directly. Free online tool, no registration required."
category: linux
keywords:
  - CEC control commands
  - CEC device management
  - Linux CEC client
  - cec-client commands
  - consumer electronics control
  - manage CEC devices
  - list CEC adapters
  - send CEC commands
  - interactive CEC session
  - OSD name setting
features:
  - List all connected CEC adapters.
  - Initiate interactive sessions with CEC devices.
  - Set the On-Screen Display (OSD) name for devices.
  - Send single commands to control CEC devices.
  - Control device power states (standby and on).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cec-client

> Manage serial bus CEC connections.
> See also: `cec-ctl`.
> More information: <https://manned.org/man/cec-client>.

- List all CEC adapters:

`cec-client {{[-l|--list-devices]}}`

- Start an interactive CEC session:

`sudo cec-client`

- Set the On-Screen Display name:

`sudo cec-client {{[-o|--osd-name]}} {{name}}`

- Send a single command:

`echo {{on 0}} | sudo cec-client {{[-s|--single-command]}}`

- Set a device to standby in interactive mode:

`standby {{0}}`

- Turn a device on in interactive mode:

`on {{0}}`
