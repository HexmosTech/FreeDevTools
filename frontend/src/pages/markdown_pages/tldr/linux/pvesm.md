---
title: "Manage Proxmox Storage - Control Datastores | Free DevTools"
name: pvesm
path: /freedevtools/tldr/linux/pvesm
canonical: "https://hexmos.com/freedevtools/tldr/linux/pvesm/"
description: "Manage Proxmox storage with pvesm. Control datastores, list storage contents, and add or remove storage. Free online tool, no registration required."
category: linux
keywords:
- proxmox storage management
- proxmox datastore control
- pvesm command-line tool
- linux storage management
- virtual environment storage
- storage content listing
- directory storage creation
- storage content setting
- proxmox file deletion
- pvesm storage removal
features:
- Get the status of all Proxmox datastores
- List the contents of a specified storage
- Add a new directory storage to Proxmox
- Set the allowed content types for a storage
- Delete a file from a Proxmox storage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pvesm

> Manage Proxmox storage.
> More information: <https://pve.proxmox.com/pve-docs/pvesm.1.html>.

- Get status for all datastores:

`pvesm {{[st|status]}}`

- List storage contents:

`pvesm {{[l|list]}} {{storage_name}}`

- Add a directory storage:

`pvesm add {{[d|dir]}} {{storage_name}} --path {{path/to/directory}}`

- Set a storage to contain specific content:

`pvesm set {{storage_name}} --content {{iso,images,backup,vztmpl,...}}`

- Delete a file from storage:

`pvesm free {{local:iso/archlinux-2025.08.01-x86_64.iso}}`

- Remove a storage:

`pvesm {{[r|remove]}} {{storage_name}}`
