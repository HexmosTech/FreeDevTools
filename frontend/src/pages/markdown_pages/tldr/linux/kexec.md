---
title: "Kexec - Reboot Kernel Directly | Online Free DevTools by Hexmos"
name: kexec
path: /freedevtools/tldr/linux/kexec
canonical: "https://hexmos.com/freedevtools/tldr/linux/kexec/"
description: "Reboot directly into a new kernel with kexec.  Manage kernel loading, execution, and unloading efficiently. Free online tool, no registration required."
category: linux
keywords:
  - kexec linux
  - kexec reboot
  - kernel loading linux
  - kernel execution kexec
  - linux kernel management
  - kexec command line
  - system reboot kexec
  - initrd kexec
  - kexec unload
  - direct kernel reboot
features:
  - Load a new kernel image with specified initrd and command-line arguments.
  - Load a new kernel image reusing the current boot parameters.
  - Execute a previously loaded kernel image.
  - Unload a currently loaded kexec target kernel.
  - Directly control system reboots at the kernel level.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kexec

> Directly reboot into a new kernel.
> More information: <https://manned.org/kexec>.

- Load a new kernel:

`kexec {{[-l|--load]}} {{path/to/kernel}} --initrd={{path/to/initrd}} --command-line={{arguments}}`

- Load a new kernel with current boot parameters:

`kexec {{[-l|--load]}} {{path/to/kernel}} --initrd={{path/to/initrd}} --reuse-cmdline`

- Execute a currently loaded kernel:

`kexec {{[-e|--exec]}}`

- Unload current kexec target kernel:

`kexec {{[-u|--unload]}}`
