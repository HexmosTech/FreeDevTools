---
title: "Create Debian Systems - debootstrap Command | Online Free DevTools by Hexmos"
name: debootstrap
path: /freedevtools/tldr/linux/debootstrap
canonical: "https://hexmos.com/freedevtools/tldr/linux/debootstrap/"
description: "Create Debian systems quickly with the debootstrap command.  Bootstrap minimal or full systems, specify releases, and manage dependencies effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - debian installer
  - debian bootstrapper
  - linux system creation
  - debootstrap command
  - minimal debian install
  - debian system setup
  - ubuntu installer
  - chroot environment
  - system bootstrapping
  - linux package management
features:
  - Create minimal Debian systems with the --variant=minbase option.
  - Bootstrap Debian systems from various release versions (stable, testing, unstable).
  - Use a local mirror for faster bootstrapping.
  - Create chroot environments for easy system administration.
  - Install Debian systems to a specified directory.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# debootstrap

> Create a basic Debian system.
> More information: <https://wiki.debian.org/Debootstrap>.

- Create a Debian stable release system inside the `debian-root` directory:

`sudo debootstrap stable {{path/to/debian-root}}/ http://deb.debian.org/debian`

- Create a minimal system including only required packages:

`sudo debootstrap --variant=minbase stable {{path/to/debian-root}}/`

- Create an Ubuntu 20.04 system inside the `focal-root` directory with a local mirror:

`sudo debootstrap focal {{path/to/focal-root}}/ {{file:///path/to/mirror/}}`

- Switch to a bootstrapped system:

`sudo chroot {{path/to/root}}`

- List available releases:

`ls /usr/share/debootstrap/scripts/`
