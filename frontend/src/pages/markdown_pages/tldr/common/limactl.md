---
title: "LimaCTL - Create Linux VMs on MacOS | Free DevTools"
name: limactl
path: /freedevtools/tldr/common/limactl
canonical: "https://hexmos.com/freedevtools/tldr/common/limactl/"
description: "Create and manage Linux virtual machines with LimaCTL, featuring multiple VM templates on macOS. Run containers and generic VMs easily. Free online tool, no registration required."
category: common
keywords:
- Linux virtual machine manager
- macOS VM creation
- LimaCTL Linux VMs
- Command-line VM management
- Virtual machine templates
- Containerization on macOS
- Linux VM on macOS
- LimaCTL CLI tool
- Virtual machine automation
- LimaCTL tutorial
features:
- Create Linux virtual machines with custom templates.
- Start and stop virtual machines from the command line.
- Access remote shells within the virtual machines.
- Execute commands directly inside running virtual machines.
- List and manage existing virtual machine instances.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# limactl

> Virtual machine manager for Linux guests, with multiple VM templates available.
> Can be used to run containers on macOS, but also for generic virtual machine use cases on macOS and Linux hosts.
> More information: <https://github.com/lima-vm/lima>.

- List VMs:

`limactl list`

- Create a VM using the default settings and optionally provide a name and/or a template (see `limactl create --list-templates` for available templates):

`limactl create --name {{vm_name}} template://{{debian|fedora|ubuntu|...}}`

- Start a VM (this might install some dependencies in it and take a few minutes):

`limactl start {{vm_name}}`

- Open a remote shell inside a VM:

`limactl shell {{vm_name}}`

- Run a command inside a VM:

`limactl shell {{vm_name}} {{command}}`

- Stop/shutdown a VM:

`limactl stop {{vm_name}}`

- Delete a VM:

`limactl remove {{vm_name}}`
