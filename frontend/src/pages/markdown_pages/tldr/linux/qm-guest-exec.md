---
title: "qm guest exec - Execute Guest Commands | Online Free DevTools by Hexmos"
name: qm-guest-exec
path: /freedevtools/tldr/linux/qm-guest-exec
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-guest-exec/"
description: "Execute commands within Proxmox VMs using qm guest exec.  Manage guest agents and control virtual machine processes easily. Free online tool, no registration required."
category: linux
keywords:
  - proxmox command execution
  - qm guest exec command
  - virtual machine command line
  - proxmox guest agent control
  - linux virtual machine management
  - command execution tool
  - remote command execution
  - proxmox vm management
  - asynchronous command execution
  - stdin redirection in proxmox
features:
  - Execute commands directly within a Proxmox virtual machine guest.
  - Run commands asynchronously for non-blocking operations.
  - Set timeouts for command execution to prevent indefinite hangs.
  - Pass input from stdin to the guest agent for interactive commands.
  - Manage and control guest agents through a simple command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm guest exec

> Execute a specific command via a guest agent.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Execute a specific command via a guest agent:

`qm {{[g|guest]}} exec {{vm_id}} {{command}} {{argument1 argument2 ...}}`

- Execute a specific command via a guest agent asynchronously:

`qm {{[g|guest]}} exec {{vm_id}} {{argument1 argument2 ...}} --synchronous 0`

- Execute a specific command via a guest agent with a specified timeout of 10 seconds:

`qm {{[g|guest]}} exec {{vm_id}} {{argument1 argument2...}} --timeout {{10}}`

- Execute a specific command via a guest agent and forward input from `stdin` until EOF to the guest agent:

`qm {{[g|guest]}} exec {{vm_id}} {{argument1 argument2 ...}} --pass-stdin 1`
