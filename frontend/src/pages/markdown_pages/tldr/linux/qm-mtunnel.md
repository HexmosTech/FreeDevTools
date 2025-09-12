---
title: "QM Mtunnel - Migrate VMs Quickly | Free DevTools"
name: qm-mtunnel
path: /freedevtools/tldr/linux/qm-mtunnel
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-mtunnel/"
description: "Migrate virtual machines quickly with QM Mtunnel. Transfer VM data efficiently across hosts and ensure seamless migration. Free online tool, no registration required."
category: linux
keywords:
- VM migration
- Virtual machine migration
- Data migration tool
- Linux VM migration
- Proxmox VM migration
- Qmigrate data transfer
- QM Mtunnel
- Virtualization migration
- Command-line VM tool
- Host data transfer
features:
- Migrates VM data between hosts
- Transfers data using SSH tunnels
- Used internally by qmigrate
- Automates VM migration process
- Supports live migration of VMs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm mtunnel

> Used by `qmigrate`.
> It should not be invoked manually.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Command used by `qmigrate` during data migration from a VM to another host:

`qm {{[mt|mtunnel]}}`
