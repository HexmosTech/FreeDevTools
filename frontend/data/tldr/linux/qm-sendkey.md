---
title: "QM Sendkey - Control VM Key Events | Online Free DevTools by Hexmos"
name: qm-sendkey
path: "/freedevtools/tldr/linux/qm-sendkey/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-sendkey/"
description: "Control virtual machine key events with QM Sendkey. Automate guest OS interactions and streamline VM management on Linux. Free online tool, no registration required."
category: linux
keywords:
- qm sendkey command
- linux vm key injection
- kvm key press simulation
- proxmox virtual machine control
- qemu monitor key events
- vm key code sender
- virtual machine automation linux
- sendkey script linux
- qm keyboard input
- linux guest os control
features:
- Send key events to a specific virtual machine.
- Bypass locks when sending key events as root.
- Simulate keyboard input in QEMU virtual machines.
- Automate guest OS interactions via command line.
- Control virtual machines without a graphical interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm sendkey

> Send QEMU monitor encoding key event to a virtual machine.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Send the specified key event to a specific virtual machine:

`qm {{[sen|sendkey]}} {{vm_id}} {{key}}`

- Allow root user to send key event and ignore locks:

`qm {{[sen|sendkey]}} --skiplock {{true}} {{vm_id}} {{key}}`
