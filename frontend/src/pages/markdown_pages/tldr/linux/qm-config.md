---
title: "QM Config - Control VM Configuration | Online Free DevTools by Hexmos"
name: qm-config
path: /freedevtools/tldr/linux/qm-config
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-config/"
description: "Control VM configuration with QM Config, a powerful command-line tool for managing Proxmox virtual machines. Free online tool, no registration required."
category: linux
keywords:
- Proxmox VM configuration
- QM configuration management
- Linux virtual machine config
- VM snapshot configuration
- Proxmox CLI config
- Qm config current values
- VM pending changes
- proxmox vm config linux
- vm id config linux
- qm config snapshot
features:
- Display the virtual machine configuration
- Show pending configuration changes
- Display current configuration values
- Fetch configuration from a snapshot
- Manage Proxmox VM configuration
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm config

> Display the virtual machine configuration with pending configuration changes applied.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Display the virtual machine configuration:

`qm {{[co|config]}} {{vm_id}}`

- Display the current configuration values instead of pending values for the virtual machine:

`qm {{[co|config]}} --current {{true}} {{vm_id}}`

- Fetch the configuration values from the given snapshot:

`qm {{[co|config]}} --snapshot {{snapshot_name}} {{vm_id}}`
