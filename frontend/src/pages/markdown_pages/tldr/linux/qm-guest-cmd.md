---
title: "Control QEMU Guest - Execute Agent Commands | Online Free DevTools by Hexmos"
name: qm-guest-cmd
path: /freedevtools/tldr/linux/qm-guest-cmd
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-guest-cmd/"
description: "Control QEMU guest agent commands with Qm Guest Cmd. Execute freeze, thaw, and fstrim commands. Free online tool, no registration required."
category: linux
keywords:
- QEMU Guest Agent control
- Linux QEMU guest commands
- VM guest command execution
- Proxmox QEMU guest management
- QEMU fsfreeze commands
- QEMU fstrim command
- Virtual machine guest interaction
- Linux virtual machine control
- Proxmox VM agent commands
- QEMU guest file system operations
features:
- Execute QEMU Guest Agent commands on VMs
- Freeze and thaw guest file systems
- Perform file system trimming within the guest OS
- Retrieve file system information from guests
- Communicate directly with QEMU Guest Agent
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm guest cmd

> Execute QEMU Guest Agent commands.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Execute a specific QEMU Guest Agent command:

`qm {{[g|guest]}} {{[c|cmd]}} {{virtual_machine_id}} {{fsfreeze-freeze|fsfreeze-status|fsfreeze-thaw|fstrim|get-fsinfo|...}}`
