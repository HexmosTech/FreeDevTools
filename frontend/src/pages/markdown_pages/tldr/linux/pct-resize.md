---
title: "Resize Container Storage - pct resize | Free DevTools"
name: pct-resize
path: /freedevtools/tldr/linux/pct-resize
canonical: "https://hexmos.com/freedevtools/tldr/linux/pct-resize/"
description: "Resize container storage with pct resize command.  Manage container disk space easily and efficiently using this powerful command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - container storage resize
  - pct resize command
  - linux container management
  - proxmox container size
  - virtual machine storage
  - command line container tools
  - pct command examples
  - resize container rootfs
  - manage container disk
  - increase container space
features:
  - Resize container storage to a specific size.
  - Add or subtract storage space from a container.
  - Modify the rootfs partition size.
  - Manage container disk space efficiently.
  - Works with Proxmox VE containers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pct resize

> Resize container storage.
> More information: <https://pve.proxmox.com/pve-docs/pct.1.html>.

- Resize the container size to 20GB:

`pct {{[resi|resize]}} {{100}} rootfs 20G`

- Add 10GB to the container storage:

`pct {{[resi|resize]}} {{100}} rootfs +10G`
