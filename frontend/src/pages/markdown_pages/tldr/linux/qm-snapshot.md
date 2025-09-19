---
title: "Create VM Snapshots - qm snapshot | Online Free DevTools by Hexmos"
name: qm-snapshot
path: /freedevtools/tldr/linux/qm-snapshot
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-snapshot/"
description: "Create virtual machine snapshots with qm snapshot.  Manage and rollback VM states easily using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - vm snapshot creation
  - proxmox snapshot
  - qm command snapshot
  - virtual machine snapshot
  - linux vm snapshot
  - command line snapshot
  - rollback vm snapshot
  - list vm snapshots
  - snapshot management
  - vmstate snapshot
features:
  - Create snapshots of virtual machines.
  - Add descriptions to snapshots for better organization.
  - Include VM state in snapshots for complete restoration.
  - List all snapshots for a given VM.
  - Rollback VMs to previous snapshot states.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qm snapshot

> Create virtual machine snapshots.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Create a snapshot of a specific virtual machine (name must start with a letter):

`qm {{[sn|snapshot]}} {{vm_id}} {{snapshot_name}}`

- Create a snapshot with a specific description:

`qm {{[sn|snapshot]}} {{vm_id}} {{snapshot_name}} --description {{description}}`

- Create a snapshot including the vmstate:

`qm {{[sn|snapshot]}} {{vm_id}} {{snapshot_name}} --description {{description}} --vmstate 1`

- List snapshots of a VM:

`qm {{[lists|listsnapshot]}} {{100}}`

- Rollback the state of a specific VM to a specified snapshot:

`qm {{[ro|rollback]}} {{vm_id}} {{snap_name}}`
