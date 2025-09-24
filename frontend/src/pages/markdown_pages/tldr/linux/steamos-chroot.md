---
title: "SteamOS Chroot - Switch Root Directories | Online Free DevTools by Hexmos"
name: steamos-chroot
path: /freedevtools/tldr/linux/steamos-chroot
canonical: "https://hexmos.com/freedevtools/tldr/linux/steamos-chroot/"
description: "Switch root directories with SteamOS Chroot, allowing you to easily transition between A/B partitions and different drives in a SteamOS environment. Free online tool, no registration required."
category: linux
keywords:
- steamos chroot
- linux chroot
- steamos root directory
- linux root directory
- steamos partition switch
- linux partition switch
- steamos ab partition
- linux ab partition
- steamos drive switch
- linux drive switch
features:
- Switch between SteamOS A/B partitions
- Switch to a SteamOS partition on another drive
- Change the root directory in SteamOS
- Mount a different filesystem as root
- Access the SteamOS environment from an alternative root filesystem
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# steamos-chroot

> Switch root directory in a SteamOS environment.
> More information: <https://gitlab.com/users/evlaV/projects>.

- Switch to the other A/B partition:

`steamos-chroot {{[-p|--partset]}} other`

- Switch to a partition on another drive:

`steamos-chroot {{[-d|--disk]}} {{/dev/sdX}} {{[-p|--partset]}} {{A|B}}`

- Display help:

`steamos-chroot {{[-h|--help]}}`
