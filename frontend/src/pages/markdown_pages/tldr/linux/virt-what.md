---
title: "Virt-What - Detect Virtual Machines | Free DevTools"
name: virt-what
path: /freedevtools/tldr/linux/virt-what
canonical: "https://hexmos.com/freedevtools/tldr/linux/virt-what/"
description: "Detect virtual machines instantly with virt-what. Identify virtualization technologies and improve system security. Free online tool, no registration required."
category: linux
keywords:
  - virtual machine detection
  - virtualization technology identifier
  - system virtualization checker
  - linux virtualization detection
  - vm detection script
  - command line vm detection
  - shell script vm detection
  - virt-what command
  - hypervisor detection
  - guest os detection
features:
  - Detects various virtualization technologies (e.g., KVM, Xen, VMware, VirtualBox).
  - Provides specific output codes for identified virtual machines.
  - Offers a simple command-line interface for easy usage.
  - Enables quick assessment of system virtualization status.
  - Supports logging output to a file for further analysis.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-what

> Shell script that detects if you are running in a virtual machine.
> Outputs a specific code for a virtual machine if detected.
> More information: <https://manned.org/virt-what>.

- Detect if you are running in a virtual machine:

`virt-what`

- Log output of `virt-what` into a file:

`virt-what > {{path/to/file}}`

- Display version:

`virt-what --version`
