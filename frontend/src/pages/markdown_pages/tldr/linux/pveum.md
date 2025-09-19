---
title: "Manage Proxmox Users - pveum Command | Online Free DevTools by Hexmos"
name: pveum
path: /freedevtools/tldr/linux/pveum
canonical: "https://hexmos.com/freedevtools/tldr/linux/pveum/"
description: "Manage Proxmox users with the pveum command.  Easily add, delete, and list users. Free online tool, no registration required."
category: linux
keywords:
  - proxmox user management
  - pveum command
  - proxmox user add
  - proxmox user delete
  - proxmox user list
  - linux user management
  - proxmox command line
  - pve administration
  - proxmox virtual environment
  - system administration
features:
  - List all existing Proxmox users.
  - Add new users to the Proxmox system.
  - Delete users from the Proxmox system.
  - Manage user accounts via the command line.
  - Simplify Proxmox user administration tasks.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pveum

> Manage proxmox users.
> More information: <https://pve.proxmox.com/pve-docs/pveum.1.html>.

- List users:

`pveum {{[u|user]}} {{[l|list]}}`

- Add a user:

`pveum {{[u|user]}} {{[a|add]}} {{username}}@pve`

- Delete a user:

`pveum {{[u|user]}} {{[d|delete]}} {{username}}@pve`
