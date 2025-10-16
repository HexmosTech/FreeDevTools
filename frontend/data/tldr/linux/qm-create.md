---
title: "Create Virtual Machine - QEMU/KVM VM Manager | Online Free DevTools by Hexmos"
name: qm-create
path: "/freedevtools/tldr/linux/qm-create/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qm-create/"
description: "Create virtual machines instantly with QEMU/KVM Virtual Machine Manager. Restore VMs, allocate resources, and configure OS types with this free online tool, no registration required."
category: linux
keywords:
  - qemu kvm create virtual machine
  - virtual machine manager command
  - proxmox vm creator
  - kvm machine configuration
  - qemu guest os setup
  - vm disk image management
  - linux vm creation
  - command line vm tool
  - virtual environment builder
  - qemu vm restore
features:
  - Create new QEMU/KVM virtual machines
  - Restore virtual machines from archives
  - Allocate memory and CPU cores to VMs
  - Configure the operating system type for VMs
  - Attach ISO install media to virtual machines
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qm create

> Create or restore a virtual machine on QEMU/KVM Virtual Machine Manager.
> More information: <https://pve.proxmox.com/pve-docs/qm.1.html>.

- Create a virtual machine with access to 512MiB of memory and 1 CPU core:

`qm {{[cr|create]}} {{100}}`

- Give the virtual machine a name and automatically start the machine after creation:

`qm {{[cr|create]}} {{100}} --name {{vm_name}} --start`

- Give a virtual machine specified amount of memory and CPUs:

`qm {{[cr|create]}} {{100}} --memory {{8192}} --cores {{4}}`

- Specify the type of operating system on the machine:

`qm {{[cr|create]}} {{100}} --ostype {{win10}}`

- Replace an existing machine (requires archiving it):

`qm {{[cr|create]}} {{100}} --archive {{path/to/backup_file.tar}} --force 1`

- Specify a script that is executed automatically depending on the state of the virtual machine:

`qm {{[cr|create]}} {{100}} --hookscript {{path/to/script.pl}}`

- Specify the install media:

`qm {{[cr|create]}} {{100}} --cdrom {{local:iso/install-media.iso}}`

- Create a VM that bridges itself to the host network:

`qm {{[cr|create]}} {{100}} --net{{0}} virtio,bridge=vmbr{{0}}`
