---
title: "Guest Password Control - Manage VM Passwords | Online Free DevTools by Hexmos"
name: qm-guest-passwd
path: /freedevtools/tldr/linux/qm-guest-passwd
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-guest-passwd/"
description: "Control guest passwords for virtual machines with Guest Password Control. Set and manage user credentials using command-line tools. Free online tool, no registration required."
category: linux
keywords:
- vm password manager
- linux guest password control
- qemu guest password reset
- kvm guest password change
- proxmox vm password tool
- command-line password management
- virtual machine password editor
- linux user password tool
- guest os password control
- qm guest passwd
features:
- Set user passwords on QEMU/KVM virtual machines
- Set already hashed passwords on guest operating systems
- Interact with virtual machines through the command line
- Manage user credentials on Linux virtual machines
- Integrate with Proxmox Virtual Environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm guest passwd

> Set the password for a user on QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Set a password for a specific user in a virtual machine interactively:

`qm {{[g|guest]}} {{[p|passwd]}} {{vm_id}} {{username}}`

- Set an already hashed password for a specific user in a virtual machine interactively:

`qm {{[g|guest]}} {{[p|passwd]}} {{vm_id}} {{username}} --crypted 1`
