---
title: "Delete VM Snapshot - Control Virtual Machine Snapshots | Online Free DevTools by Hexmos"
name: qm-delsnapshot
path: /freedevtools/tldr/linux/qm-delsnapshot
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-delsnapshot/"
description: "Delete VM snapshots with qm-delsnapshot. Manage virtual machine backups and revert to previous states easily using Proxmox. Free online tool, no registration required."
category: linux
keywords:
  - vm snapshot deletion
  - virtual machine snapshot manager
  - proxmox vm snapshot
  - qm delsnapshot command
  - kvm snapshot removal
  - delete proxmox snapshot
  - virtual machine backup management
  - proxmox command line tools
  - snapshot configuration file deletion
  - force snapshot removal
features:
  - Delete specified virtual machine snapshots
  - Force deletion of snapshots, even if disk removal fails
  - Manage virtual machine backups via command line
  - Revert virtual machines to previous snapshot states
  - Remove snapshots from Proxmox configuration files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm delsnapshot

> Delete virtual machine snapshots.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Delete a snapshot:

`qm {{[del|delsnapshot]}} {{vm_id}} {{snapshot_name}}`

- Delete a snapshot from a configuration file (even if removing the disk snapshot fails):

`qm {{[del|delsnapshot]}} {{vm_id}} {{snapshot_name}} --force 1`
