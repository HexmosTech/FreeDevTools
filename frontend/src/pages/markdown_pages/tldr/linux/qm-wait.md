---
title: "Proxmox VM Wait - Control VM Shutdown | Free DevTools"
name: qm-wait
path: /freedevtools/tldr/linux/qm-wait
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-wait/"
description: "Control Proxmox virtual machine shutdown with qm wait.  Monitor VM status and manage shutdown processes efficiently. Free online tool, no registration required."
category: linux
keywords:
  - proxmox vm wait
  - qm wait command
  - proxmox virtual machine shutdown
  - proxmox vm control
  - linux vm management
  - qm shutdown command
  - virtual machine monitoring
  - proxmox command line
  - server virtualization
  - vm status check
features:
  - Waits for a virtual machine to stop.
  - Allows specifying a timeout for the wait operation.
  - Can be combined with a shutdown command for automated process.
  - Provides command-line control over VM shutdown.
  - Monitors VM status until shutdown is complete.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm wait

> Wait until the virtual machine is stopped.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Wait until the virtual machine is stopped:

`qm {{[w|wait]}} {{vm_id}}`

- Wait until the virtual machine is stopped with a 10 second timeout:

`qm {{[w|wait]}} --timeout {{10}} {{vm_id}}`

- Send a shutdown request, then wait until the virtual machine is stopped with a 10 second timeout:

`qm {{[shu|shutdown]}} {{vm_id}} && qm {{[w|wait]}} --timeout {{10}} {{vm_id}}`
