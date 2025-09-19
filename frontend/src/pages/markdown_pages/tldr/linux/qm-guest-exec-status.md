---
title: "QM Guest Exec Status - Monitor Processes | Online Free DevTools by Hexmos"
name: qm-guest-exec-status
path: /freedevtools/tldr/linux/qm-guest-exec-status
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-guest-exec-status/"
description: "Monitor guest process status with QM Guest Exec Status on Proxmox. Track PID execution within virtual machines. Free online tool, no registration required."
category: linux
keywords:
- Proxmox VM guest process status
- QEMU KVM execution monitor
- Linux VM process tracker
- Virtual machine PID status
- QM guest agent command
- Proxmox qm exec-status
- Linux qm-guest-exec-status command
- VM process debugging tool
- QEMU guest process management
- Proxmox virtual environment
features:
- Display the status of a given PID in a guest VM.
- Track execution progress of guest agent started processes.
- Retrieve status information for processes started via qm guest exec.
- Monitor process states within QEMU/KVM virtual machines.
- Identify running, exited, or terminated processes in a VM.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm guest exec-status

> Print the status of a pid started by the guest-agent on QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Print the status of a specific PID:

`qm {{[g|guest]}} {{[exec-s|exec-status]}} {{vm_id}} {{pid}}`
