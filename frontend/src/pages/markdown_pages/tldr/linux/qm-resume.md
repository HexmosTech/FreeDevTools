---
title: "VM Resume - Control Virtual Machines on Linux | Free DevTools"
name: qm-resume
path: /freedevtools/tldr/linux/qm-resume
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-resume/"
description: "Control virtual machines with VM Resume. Manage virtual machines, ignoring locks on Proxmox via command line. Free online tool, no registration required."
category: linux
keywords:
- vm resume
- virtual machine resume
- proxmox vm control
- linux vm management
- qm resume command
- kvm virtual machine
- proxmox virtual environment
- vm id resume
- linux virtual machine
- proxmox qm command
features:
- Resume a specific virtual machine by ID
- Force resume a virtual machine, ignoring locks
- Control virtual machine state via command line
- Integrate with Proxmox Virtual Environment (PVE)
- Manage KVM-based virtual machines
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm resume

> Resume a virtual machine.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Resume a specific virtual machine:

`qm {{[resu|resume]}} {{vm_id}}`

- Resume a specific virtual machine ignoring locks (requires root):

`sudo qm {{[resu|resume]}} {{vm_id}} --skiplock true`
