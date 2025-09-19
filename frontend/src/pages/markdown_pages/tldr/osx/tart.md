---
title: "Tart - Manage macOS VMs on Apple Silicon | Online Free DevTools by Hexmos"
name: tart
path: /freedevtools/tldr/osx/tart
canonical: "https://hexmos.com/freedevtools/tldr/osx/tart/"
description: "Manage macOS and Linux virtual machines with Tart on Apple Silicon. Streamline VM creation, cloning, and execution with ease. Free online tool, no registration required."
category: osx
keywords:
- macOS virtual machine manager
- Apple Silicon VM tart
- Linux VM on macOS
- Tart command line tool
- VM image pull tool
- Virtual machine cloning utility
- macOS ipsw VM creation
- tart list VMs command
- tart set display resolution
- Apple Silicon virtualization
features:
- Pull remote virtual machine images
- Clone VMs from local or remote sources
- Create Mac VMs from specific ipsw files
- List available virtual machines
- Set VM display resolution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tart

> Build, run and manage macOS and Linux virtual machines (VMs) on Apple Silicon.
> More information: <https://github.com/cirruslabs/tart>.

- Pull a remote VM image:

`tart pull {{acme.io/org/name:tag}}`

- Clone a VM from a local or remote image source:

`tart clone {{source-vm}} {{vm-name}}`

- Create a new Mac VM from a specific ipsw file:

`tart create --from-ipsw {{latest|path/to/file.ipsw}} {{vm-name}}`

- Run an existing VM:

`tart run {{vm-name}}`

- Run an existing VM with a specific mounted directory:

`tart run --dir={{path/to/directory}}:/{{path/to/local_directory}} {{vm-name}}`

- List VMs:

`tart list`

- Get IP address of a running VM:

`tart ip {{vm-name}}`

- Change a VM's display resolution:

`tart set {{vm-name}} --display {{640}}x{{400}}`
