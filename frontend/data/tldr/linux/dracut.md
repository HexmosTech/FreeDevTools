---
title: "Dracut - Generate Initramfs Images | Online Free DevTools by Hexmos"
name: dracut
path: "/freedevtools/tldr/linux/dracut/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/dracut/"
description: "Generate initramfs images with Dracut, ensuring proper Linux kernel booting. Create custom initramfs images for specific kernels. Free online tool, no registration required."
category: linux
keywords:
  - initramfs image generation
  - linux boot image creation
  - dracut command
  - kernel module loading
  - dracut configuration
  - initramfs customization
  - boot sequence management
  - linux boot process
  - system recovery images
  - kernel initialization
features:
  - Generate initramfs images for the current kernel
  - Overwrite existing initramfs images with force option
  - Create initramfs images for a specific kernel version
  - List available dracut modules for customization
  - Configure initramfs images using dracut configuration files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dracut

> Generate initramfs images to boot the Linux kernel.
> Dracut uses options from configuration files in `/etc/dracut.conf`, `/etc/dracut.conf.d/*.conf` and `/usr/lib/dracut/dracut.conf.d/*.conf` by default.
> More information: <https://github.com/dracut-ng/dracut-ng/blob/main/man/dracut.8.adoc>.

- Generate an initramfs image for the current kernel without overriding any options:

`dracut`

- Generate an initramfs image for the current kernel and overwrite the existing one:

`dracut {{[-f|--force]}}`

- Generate an initramfs image for a specific kernel:

`dracut --kver {{kernel_version}}`

- List available modules:

`dracut --list-modules`
