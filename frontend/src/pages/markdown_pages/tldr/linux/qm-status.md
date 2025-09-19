---
title: "QM Status - Control Virtual Machines | Online Free DevTools by Hexmos"
name: qm-status
path: /freedevtools/tldr/linux/qm-status
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-status/"
description: "Control virtual machine status with QM Status. Monitor performance and manage virtual machines effectively via the command line. Free online tool, no registration required."
category: linux
keywords:
- virtual machine status
- qm status linux
- proxmox vm status
- linux vm monitoring
- virtual machine performance
- qm command line
- proxmox qm
- vm status command
- linux qemu monitor
- proxmox virtual environment
features:
- Display the status of a specific virtual machine
- Show detailed status using verbose mode
- Monitor virtual machine performance metrics
- Manage virtual machine lifecycle
- Integrate with Proxmox virtual environment
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm status

> Show virtual machine status.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Display the status of a specific virtual machine:

`qm {{[stat|status]}} {{vm_id}}`

- Display detailed status of a specific virtual machine:

`qm {{[stat|status]}} --verbose {{true}} {{vm_id}}`
