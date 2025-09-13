---
title: "Vzdump - Backup Virtual Machines & Containers | Free DevTools"
name: vzdump
path: /freedevtools/tldr/linux/vzdump
canonical: "https://hexmos.com/freedevtools/tldr/linux/vzdump/"
description: "Backup virtual machines with Vzdump. Securely backup, restore, and manage Proxmox containers with this command-line utility. Free online tool, no registration required."
category: linux
keywords:
  - virtual machine backup
  - container backup
  - proxmox vzdump
  - vm backup vzdump
  - vzdump command
  - vzdump container backup
  - vzdump vm backup
  - vzdump exclude
  - vzdump snapshot
  - vzdump suspend
features:
  - Backup virtual machines to a specified directory
  - Exclude specific VMs from the backup process
  - Utilize suspend mode for minimal downtime
  - Create backups in snapshot mode for zero downtime
  - Backup all guest systems with email notifications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vzdump

> Backup Utility for virtual machines and containers.
> More information: <https://pve.proxmox.com/pve-docs/vzdump.1.html>.

- Dump a guest virtual machine into the default dump directory (usually `/var/lib/vz/dump/`), excluding snapshots:

`vzdump {{vm_id}}`

- Back up the guest virtual machines with the IDs 101, 102, and 103:

`vzdump {{101 102 103}}`

- Dump a guest virtual machine using a specific mode:

`vzdump {{vm_id}} --mode {{suspend|snapshot}}`

- Back up all guest systems and send an notification email to the root and admin users:

`vzdump --all --mode {{suspend}} --mailto {{root}} --mailto {{admin}}`

- Use snapshot mode (no downtime required) and a non-default dump directory:

`vzdump {{vm_id}} --dumpdir {{path/to/directory}} --mode {{snapshot}}`

- Back up all guest virtual machines excluding the IDs 101 and 102:

`vzdump --mode {{suspend}} --exclude {{101, 102}}`
