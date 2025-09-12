---
title: "Pvesh - Interface Proxmox VE API | Free DevTools"
name: pvesh
path: /freedevtools/tldr/linux/pvesh
canonical: "https://hexmos.com/freedevtools/tldr/linux/pvesh/"
description: "Interface with the Proxmox VE API using Pvesh. Explore nodes, manage containers/VMs, and discover API paths effortlessly. Free online tool, no registration required."
category: linux
keywords:
- proxmox api interface
- pvesh command
- linux proxmox manager
- virtual environment control
- container management linux
- proxmox command line
- pvesh get command
- pvesh list command
- pvesh discover api
- proxmox ve api
features:
- List available Proxmox VE nodes
- Display detailed information about containers
- Display detailed information about virtual machines
- Discover available API paths
- Interface with the Proxmox VE API
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pvesh

> Interface with the Proxmox VE API.
> More information: <https://pve.proxmox.com/pve-docs/pvesh.1.html>.

- List available nodes:

`pvesh {{[g|get]}} /nodes`

- Display detailed information about containers or virtual machines:

`pvesh {{[g|get]}} /nodes/{{node_name}}/{{lxc|qemu}}`

- Discover API paths:

`pvesh {{[l|ls]}} {{/}}`
