---
title: "pveam - Manage LXC Templates | Online Free DevTools by Hexmos"
name: pveam
path: "/freedevtools/tldr/linux/pveam/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pveam/"
description: "Manage LXC container templates with pveam.  Update, download, list, and remove templates easily. Free online tool, no registration required."
category: linux
keywords:
  - LXC template manager
  - Proxmox LXC templates
  - pveam command
  - LXC template download
  - LXC template update
  - LXC template list
  - LXC template remove
  - Linux container templates
  - Proxmox VE LXC
  - manage LXC containers
features:
  - Update the LXC container template database.
  - List available LXC container templates.
  - Download LXC container templates.
  - List downloaded LXC container templates.
  - Remove LXC container templates.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pveam

> Manage LXC container templates.
> More information: <https://pve.proxmox.com/pve-docs/pveam.1.html>.

- Update container template database:

`pveam {{[u|update]}}`

- List available templates:

`pveam {{[a|available]}}`

- Download a template:

`pveam {{[d|download]}} {{local}} {{template_name}}`

- List downloaded templates:

`pveam {{[l|list]}} {{local}}`

- List available templates in a specific section:

`pveam {{[a|available]}} --section {{system|turnkeylinux|mail}}`

- Remove a template:

`pveam {{[r|remove]}} {{local}}:{{vztmpl}}/{{template_name}}`
