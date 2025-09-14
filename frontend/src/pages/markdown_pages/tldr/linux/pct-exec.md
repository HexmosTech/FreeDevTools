---
title: "PCT Exec - Launch Commands in Linux Containers | Free DevTools"
name: pct-exec
path: /freedevtools/tldr/linux/pct-exec
canonical: "https://hexmos.com/freedevtools/tldr/linux/pct-exec/"
description: "Launch commands inside Linux containers with PCT Exec. Easily manage and control processes within your Proxmox VE environments. Free online tool, no registration required."
category: linux
keywords:
- linux container command execution
- proxmox pct exec
- container process management
- command line container control
- linux container bash shell
- pct exec arguments
- proxmox container shell access
- linux container interaction
- pct container commands
- linux proxmox command execution
features:
- Execute commands within Proxmox containers.
- Open an interactive bash shell in a container.
- Pass arguments to commands executed in containers.
- Manage processes inside Linux containers.
- Provide command-line access to Proxmox container environments.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pct exec

> Launch a command inside a specified container.
> More information: <https://pve.proxmox.com/pve-docs/pct.1.html>.

- Launch a command in a container:

`pct {{[ex|exec]}} {{100}} {{command}}`

- Open a bash shell in a container:

`pct {{[ex|exec]}} {{100}} bash`

- Pass arguments to the command:

`pct {{[ex|exec]}} {{100}} -- {{command}} {{arguments}}`
