---
title: "Destroy Container - PCT Command | Online Free DevTools by Hexmos"
name: pct-destroy
path: /freedevtools/tldr/linux/pct-destroy
canonical: "https://hexmos.com/freedevtools/tldr/linux/pct-destroy/"
description: "Destroy Proxmox containers quickly with the PCT command.  Manage and delete containers efficiently using this powerful command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - container destruction command
  - pct destroy command
  - proxmox container management
  - linux container removal
  - virtual machine destruction
  - pct command line
  - proxmox virtual environment
  - remove containers
  - delete containers
  - pct purge command
features:
  - Destroy a single Proxmox container.
  - Forcefully destroy a running container.
  - Completely remove all traces of a container.
  - Manage Proxmox containers via the command line.
  - Efficiently delete unwanted containers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pct destroy

> Destroy a container.
> More information: <https://pve.proxmox.com/pve-docs/pct.1.html>.

- Destroy a container:

`pct {{[des|destroy]}} {{100}}`

- Destroy a container even if it's running:

`pct {{[des|destroy]}} {{100}} --force`

- Also delete all references to this container:

`pct {{[des|destroy]}} {{100}} --purge`
