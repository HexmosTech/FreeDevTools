---
title: "List SCSI Devices - Inspect Device Attributes | Free DevTools"
name: lsscsi
path: /freedevtools/tldr/linux/lsscsi
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsscsi/"
description: "List SCSI devices quickly with lsscsi. Display device attributes and disk capacity. Free online tool, no registration required. Use it for disk management."
category: linux
keywords:
  - SCSI device list
  - list SCSI drives
  - SCSI device attributes
  - disk capacity information
  - lsscsi command
  - linux SCSI devices
  - inspect SCSI devices
  - storage device details
  - command-line disk info
  - SCSI enumeration
features:
  - List all connected SCSI devices
  - Display detailed device attributes
  - Show human-readable disk capacity
  - Identify SCSI hosts and targets
  - Provide storage device information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lsscsi

> List SCSI devices (or hosts) and their attributes.
> More information: <https://manned.org/lsscsi>.

- List all SCSI devices:

`lsscsi`

- List all SCSI devices with detailed attributes:

`lsscsi {{[-L|--list]}}`

- List all SCSI devices with human-readable disk capacity:

`lsscsi {{[-s|--size]}}`
