---
title: "Show Proxmox VM Command - Display VM Startup Command | Online Free DevTools by Hexmos"
name: qm-showcmd
path: /freedevtools/tldr/linux/qm-showcmd
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-showcmd/"
description: "Display Proxmox VM startup commands with qm showcmd.  Quickly view the command-line used to start a virtual machine. Free online tool, no registration required."
category: linux
keywords:
  - Proxmox command line
  - qm showcmd command
  - virtual machine command
  - Proxmox VM startup
  - showcmd Proxmox
  - Linux VM command
  - virtual machine debug
  - Proxmox command reference
  - qm command options
  - virtual machine information
features:
  - Displays the command-line used to start a virtual machine.
  - Supports specifying a specific virtual machine ID.
  - Provides a human-readable output using the --pretty option.
  - Allows fetching configuration from a specific snapshot.
  - Offers valuable debugging information for Proxmox virtual machines.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm showcmd

> Show command-line which is used to start the VM (debug info).
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Show command-line for a specific virtual machine:

`qm {{[sho|showcmd]}} {{vm_id}}`

- Put each option on a new line to enhance human readability:

`qm {{[sho|showcmd]}} --pretty {{true}} {{vm_id}}`

- Fetch configuration values from a specific snapshot:

`qm {{[sho|showcmd]}} --snapshot {{string}} {{vm_id}}`
