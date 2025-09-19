---
title: "Create Virtual Machines - Using Virt-install | Online Free DevTools by Hexmos"
name: virt-install
path: /freedevtools/tldr/virt/virt-install
canonical: "https://hexmos.com/freedevtools/tldr/virt/virt-install/"
description: "Create virtual machines easily with Virt-install. Quickly set up and manage virtualized environments using command line. Free online tool, no registration required."
category: common
keywords:
- virtual machine creation
- virt-install command
- libvirt virtual machine
- kvm virtual machine
- qemu virtual machine
- linux virtualization
- virtual machine manager
- command line virtualization
- os installation virt-install
- virt-install examples
features:
- Create virtual machines with specified memory and storage.
- Configure virtual machine architecture and boot options.
- Create diskless virtual machines for live environments.
- Automate virtual machine deployments using Kickstart.
- Define CPU topology and model for optimal performance.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-install

> Create virtual machines with libvirt and begin OS installation.
> More information: <https://manned.org/virt-install>.

- Create a virtual machine with 1 GB RAM and 12 GB storage and start a Debian installation:

`virt-install {{[-n|--name]}} {{vm_name}} --memory {{1024}} --disk path={{path/to/image.qcow2}},size={{12}} {{[-c|--cdrom]}} {{path/to/debian.iso}}`

- Create a x86-64, KVM-accelerated, UEFI-based virtual machine with the Q35 chipset, 4 GiB RAM, 16 GiB RAW storage, and start a Fedora installation:

`virt-install {{[-n|--name]}} {{vm_name}} --arch {{x86_64}} --virt-type {{kvm}} --machine {{q35}} --boot {{uefi}} --memory {{4096}} --disk path={{path/to/image.raw}},size={{16}} {{[-c|--cdrom]}} {{path/to/fedora.iso}}`

- Create a diskless live virtual machine without an emulated sound device or a USB controller. Don't start an installation and don't autoconnect to console but attach a cdrom to it (might be useful for when using a live CD like tails):

`virt-install {{[-n|--name]}} {{vm_name}} --memory {{512}} --disk {{none}} --controller {{type=usb,model=none}} --sound {{none}} --autoconsole {{none}} --install {{no_install=yes}} {{[-c|--cdrom]}} {{path/to/tails.iso}}`

- Create a virtual machine with 16 GiB RAM, 250 GiB storage, 8 cores with hyperthreading, a specific CPU topology, and a CPU model that shares most features with the host CPU:

`virt-install {{[-n|--name]}} {{vm_name}} --cpu {{host-model}},topology.sockets={{1}},topology.cores={{4}},topology.threads={{2}} --memory {{16384}} --disk path={{path/to/image.qcow2}},size={{250}} {{[-c|--cdrom]}} {{path/to/debian.iso}}`

- Create a virtual machine and kickstart an automated deployment based on Fedora 35 using only remote resources (no ISO required):

`virt-install {{[-n|--name]}} {{vm_name}} --memory {{2048}} --disk path={{path/to/image.qcow2}},size={{20}} {{[-l|--location]}} {{https://download.fedoraproject.org/pub/fedora/linux/releases/35/Everything/x86_64/os/}} {{[-x|--extra-args]}} "{{inst.ks=https://path/to/valid/kickstart.org}}"`
