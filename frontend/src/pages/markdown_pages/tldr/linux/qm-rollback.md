---
title: "QM Rollback - Restore VM Snapshots | Free DevTools"
name: qm-rollback
path: /freedevtools/tldr/linux/qm-rollback
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-rollback/"
description: "Rollback Proxmox VM states to specific snapshots with QM Rollback.  Quickly restore previous VM configurations using a simple command. Free online tool, no registration required."
category: linux
keywords:
  - proxmox vm rollback
  - qm rollback command
  - virtual machine restore
  - snapshot revert proxmox
  - linux vm management
  - pve qm command
  - rollback virtual machine
  - restore vm state
  - proxmox command line
  - vm snapshot management
features:
  - Reverts a virtual machine to a chosen snapshot.
  - Restores previous VM configurations quickly.
  - Uses the Proxmox command-line interface (CLI).
  - Supports specific VM ID and snapshot name targeting.
  - Offers efficient state restoration for troubleshooting and recovery.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm rollback

> Rollback the VM state to a specified snapshot.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Rollback the state of a specific VM to a specified snapshot:

`qm {{[ro|rollback]}} {{vm_id}} {{snap_name}}`
