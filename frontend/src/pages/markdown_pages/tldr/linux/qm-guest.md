---
title: "Manage VM Guest Agent - Control Virtual Machines | Online Free DevTools by Hexmos"
name: qm-guest
path: /freedevtools/tldr/linux/qm-guest
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-guest/"
description: "Control virtual machine guest agent with qm-guest. Execute commands, manage passwords, and freeze filesystems. Free online tool, no registration required."
category: linux
keywords:
  - vm guest agent control
  - qemu guest agent management
  - virtual machine command execution
  - proxmox vm control
  - qm guest password reset
  - vm filesystem freeze
  - guest agent command line
  - virtual machine status check
  - qm command exec
  - proxmox qm guest agent
features:
  - Execute commands within a virtual machine via the guest agent
  - Manage and reset passwords for users within a virtual machine
  - Control and monitor the filesystem state using fsfreeze
  - Retrieve filesystem information from the guest operating system
  - Check the status of a specific process within the virtual machine
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm guest

> Manage a VM guest agent.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Print the status of a specific PID:

`qm {{[g|guest]}} {{[exec-s|exec-status]}} {{vm_id}} {{pid}}`

- Set a password for a specific user in a virtual machine interactively:

`qm {{[g|guest]}} {{[p|passwd]}} {{vm_id}} {{username}}`

- Execute a specific QEMU Guest Agent command:

`qm {{[g|guest]}} {{[c|cmd]}} {{virtual_machine_id}} {{fsfreeze-freeze|fsfreeze-status|fsfreeze-thaw|fstrim|get-fsinfo|...}}`

- Execute a specific command via a guest agent:

`qm {{[g|guest]}} exec {{vm_id}} {{command}} {{argument1 argument2 ...}}`
