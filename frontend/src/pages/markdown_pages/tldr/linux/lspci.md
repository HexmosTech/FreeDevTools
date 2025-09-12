---
title: "Lspci - List PCI Devices | Free DevTools"
name: lspci
path: /freedevtools/tldr/unknown/lspci
canonical: "https://hexmos.com/freedevtools/tldr/unknown/lspci/"
description: "List PCI devices instantly with Lspci. Identify hardware components and troubleshoot system issues using command line. Free online tool, no registration required."
category: unknown
keywords:
- pci device list
- list pci devices linux
- pci device information
- pci hardware identification
- lspci command line
- lspci linux
- pci bus enumeration
- hardware device details
- system hardware information
- device driver details
features:
- List all PCI devices connected to the system
- Display detailed information about PCI devices
- Show device drivers and modules in use
- Identify specific PCI devices by address
- Output PCI device information in a machine-readable format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lspci

> List all PCI devices.
> More information: <https://manned.org/lspci>.

- Show a brief list of devices:

`lspci`

- Display additional information (Note: the `-v` flag can be repeated to increase verbosity):

`lspci -v`

- Display drivers and modules handling each device:

`lspci -k`

- Show a specific device:

`lspci -s {{00:18.3}}`

- Dump info in a readable form:

`lspci -vm`

- Show PCI vendor and device codes alongside its name:

`lspci -nn`
