---
title: "Clone Container - pct clone Command | Online Free DevTools by Hexmos"
name: pct-clone
path: /freedevtools/tldr/linux/pct-clone
canonical: "https://hexmos.com/freedevtools/tldr/linux/pct-clone/"
description: "Clone Proxmox containers quickly with the pct clone command.  Create copies of your containers easily and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - pct clone command
  - proxmox container clone
  - container replication
  - virtual machine cloning
  - pct command line
  - proxmox command-line interface
  - linux container management
  - virtual machine management
  - container copy
  - proxmox virtual environment
features:
  - Create exact copies of existing containers.
  - Specify a custom name for the cloned container.
  - Efficiently replicate container configurations and data.
  - Maintain consistent container environments.
  - Simplify container deployment and backups.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pct clone

> Clone a container.
> More information: <https://pve.proxmox.com/pve-docs/pct.1.html>.

- Clone a container:

`pct clone {{template_id}} {{copy_id}}`

- Clone a container with a custom name:

`pct {{[cl|clone]}} {{template_id}} {{copy_id}} --hostname {{host_name}}`
