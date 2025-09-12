---
title: "Run QEMU Virtual Machines - Create VMs Easily | Free DevTools"
name: virt-qemu-run
path: /freedevtools/tldr/common/virt-qemu-run
canonical: "https://hexmos.com/freedevtools/tldr/common/virt-qemu-run/"
description: "Run QEMU virtual machines with virt-qemu-run. Streamline VM creation and management on Linux. Free online tool, no registration required."
category: common
keywords:
- QEMU virtual machine
- Virtual machine runner
- QEMU guest manager
- Linux virtualization
- KVM guest launcher
- Command line VM
- XML configuration VM
- Verbose VM startup
- VM state management
- Libvirt alternative
features:
- Run QEMU virtual machines from XML configuration files
- Specify a directory to store VM state
- Display verbose information during VM startup
- Manage virtual machine lifecycle without libvirtd
- Execute QEMU VMs from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-qemu-run

> Experimental tool to run a QEMU Guest VM independent of `libvirtd`.
> More information: <https://libvirt.org/manpages/virt-qemu-run.html>.

- Run a QEMU virtual machine:

`virt-qemu-run {{path/to/guest.xml}}`

- Run a QEMU virtual machine and store the state in a specific directory:

`virt-qemu-run {{[-r|--root]}} {{path/to/directory}} {{path/to/guest.xml}}`

- Run a QEMU virtual machine and display verbose information about the startup:

`virt-qemu-run {{[-v|--verbose]}} {{path/to/guest.xml}}`

- Display help:

`virt-qemu-run {{[-h|--help]}}`
