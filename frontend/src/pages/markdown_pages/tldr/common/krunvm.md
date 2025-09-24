---
title: "Create MicroVMs - Control Virtual Machines with krunvm | Online Free DevTools by Hexmos"
name: krunvm
path: /freedevtools/tldr/common/krunvm
canonical: "https://hexmos.com/freedevtools/tldr/common/krunvm/"
description: "Create MicroVMs instantly with krunvm. Manage virtual machine images and control their resources efficiently. Free online tool, no registration required."
category: common
keywords:
- MicroVM creation
- Virtual machine manager
- OCI image MicroVM
- Linux MicroVM
- Command line MicroVM
- Krun MicroVM
- Container virtualization
- VM image management
- Lightweight virtualization
- Virtual Machine control
features:
- Create MicroVMs from OCI images
- Start and manage virtual machine instances
- List available virtual machine images
- Modify virtual machine configurations
- Delete virtual machine images
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# krunvm

> Create MicroVMs from OCI images.
> More information: <https://github.com/containers/krunvm>.

- Create MicroVM based on Fedora:

`krunvm create {{docker.io/fedora}} --cpus {{number_of_vcpus}} --mem {{memory_in_megabytes}} --name "{{name}}"`

- Start a specific image:

`krunvm start "{{image_name}}"`

- List images:

`krunvm list`

- Change a specific image:

`krunvm changevm --cpus {{number_of_vcpus}} --mem {{memory_in_megabytes}} --name "{{new_vm_name}}" "{{current_vm_name}}"`

- Delete a specific image:

`krunvm delete "{{image_name}}"`
