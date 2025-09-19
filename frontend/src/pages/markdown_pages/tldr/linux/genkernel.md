---
title: "Generate Linux Kernel - Compile Kernels | Online Free DevTools by Hexmos"
name: genkernel
path: /freedevtools/tldr/linux/genkernel
canonical: "https://hexmos.com/freedevtools/tldr/linux/genkernel/"
description: "Generate Linux kernels with genkernel. Quickly compile and install custom kernels on Gentoo Linux distributions. Free online tool, no registration required."
category: linux
keywords:
- linux kernel compilation
- genkernel configuration
- gentoo kernel building
- custom kernel generation
- linux kernel installer
- bzImage creation linux
- initramfs generation linux
- kernel module compilation
- kernel source management
- kernel configuration utility
features:
- Compile a generic Linux kernel automatically
- Build specific kernel components (bzImage, initramfs, kernel, ramdisk)
- Apply configuration changes before compiling the kernel
- Generate kernels with custom names
- Use external kernel source directories for compilation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# genkernel

> Gentoo Linux utility to compile and install kernels.
> More information: <https://wiki.gentoo.org/wiki/Genkernel>.

- Automatically compile and install a generic kernel:

`sudo genkernel all`

- Build and install the bzImage|initramfs|kernel|ramdisk only:

`sudo genkernel {{bzImage|initramfs|kernel|ramdisk}}`

- Apply changes to the kernel configuration before compiling and installing:

`sudo genkernel --menuconfig all`

- Generate a kernel with a custom name:

`sudo genkernel --kernname={{custom_name}} all`

- Use a kernel source outside the default directory `/usr/src/linux`:

`sudo genkernel --kerneldir={{path/to/directory}} all`
