---
title: "mkosi - Create Linux Images | Online Free DevTools by Hexmos"
name: mkosi
path: /freedevtools/tldr/linux/mkosi
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkosi/"
description: "Create Linux images with mkosi, a systemd tool for building modern, legacy-free operating system images. Easily configure and deploy custom Linux distributions. Free online tool, no registration required."
category: linux
keywords:
  - linux image creation
  - systemd mkosi
  - os image builder
  - legacy-free linux image
  - custom linux distribution
  - linux image configuration
  - bootable image creation
  - mkosi build tool
  - container image generation
  - linux distribution deployment
features:
  - Build modern, legacy-free Linux images
  - Generate bootable images from command line
  - Configure image builds with summary command
  - Run images in systemd-nspawn containers
  - Boot images in QEMU virtual machines
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkosi

> Build modern, legacy-free Linux images.
> Part of `systemd`.
> More information: <https://manned.org/mkosi>.

- Show current build configuration to verify what would be built:

`mkosi summary`

- Build an image with default settings (if no distribution is selected, the distribution of the host system is used):

`mkosi build --distribution {{fedora|debian|ubuntu|arch|opensuse|...}}`

- Build an image and run an interactive shell in a systemd-nspawn container of the image:

`mkosi shell`

- Boot an image in a virtual machine using QEMU (only supported for disk images or CPIO images when a kernel is provided):

`mkosi qemu`

- Display help:

`mkosi help`
