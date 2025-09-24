---
title: "OrbStack - Control Linux VMs on macOS | Online Free DevTools by Hexmos"
name: orb
path: /freedevtools/tldr/osx/orb
canonical: "https://hexmos.com/freedevtools/tldr/osx/orb/"
description: "Control Linux virtual machines on macOS with OrbStack. Create, manage, and execute commands in VMs directly from your terminal. Free online tool, no registration required."
category: osx
keywords:
- orbstack
- orbstack commands
- macos vm manager
- linux vm control
- docker macos alternative
- container management macos
- virtual machine command line
- lightweight vm macos
- orbstack cli
- orbstack ubuntu
features:
- Create and manage Linux virtual machines
- Execute commands directly within VMs
- Start and stop VMs with a simple command
- Connect to VMs via SSH
- List all running containers and VMs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# orb

> Interface for OrbStack, a fast and lightweight container and virtual machine runtime for macOS.
> Provides Docker-compatible commands and Linux VM management.
> More information: <https://docs.orbstack.dev/>.

- List all containers and VMs:

`orb list`

- Create and start a Linux virtual machine:

`orb create {{vm_name}}`

- Create a VM with a specific Linux distribution:

`orb create {{vm_name}} {{ubuntu|fedora|arch|debian}}`

- Start or stop a virtual machine:

`orb {{start|stop}} {{vm_name}}`

- Connect to a VM via SSH:

`orb ssh {{vm_name}}`

- Execute a command in a VM:

`orb exec {{vm_name}} {{command}}`

- Delete a virtual machine:

`orb delete {{vm_name}}`

- Show system status and resource usage:

`orb status`
