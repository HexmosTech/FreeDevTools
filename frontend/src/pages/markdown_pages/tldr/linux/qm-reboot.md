---
title: "Reboot Virtual Machine - Control VMs with qm-reboot | Free DevTools"
name: qm-reboot
path: /freedevtools/tldr/linux/qm-reboot
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-reboot/"
description: "Control virtual machines with qm-reboot. Reboot VMs, manage pending changes and ensure smooth server operations. Free online tool, no registration required."
category: linux
keywords:
  - virtual machine reboot
  - proxmox vm reboot
  - qm reboot command
  - proxmox qm-reboot
  - linux vm management
  - server restart tool
  - vm command line
  - proxmox command line
  - virtual machine control
  - proxmox server management
features:
  - Gracefully reboot virtual machines
  - Apply pending configuration changes during reboot
  - Control VM reboot timeout
  - Manage Proxmox virtual machines via command line
  - Ensure proper VM shutdown and startup sequence
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm reboot

> Reboot a virtual machine by shutting it down, and starting it again after applying pending changes.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Reboot a virtual machine:

`qm {{[reb|reboot]}} {{vm_id}}`

- Reboot a virtual machine after wait for at most 10 seconds:

`qm {{[reb|reboot]}} --timeout {{10}} {{vm_id}}`
