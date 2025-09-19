---
title: "Pacstrap - Install Arch Packages | Online Free DevTools by Hexmos"
name: pacstrap
path: /freedevtools/tldr/linux/pacstrap
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacstrap/"
description: "Install Arch Linux packages efficiently with Pacstrap.  Manage base systems, kernels, and specific packages using a command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - linux package installer
  - arch linux pacstrap
  - pacman package management
  - linux system installation
  - base system installation linux
  - linux kernel installation
  - pacstrap command guide
  - arch linux setup guide
  - linux package manager
  - install linux packages
features:
  - Installs Arch Linux base system packages.
  - Supports installation of specific packages.
  - Allows for custom configuration file usage.
  - Provides options for managing the pacman keyring and cache.
  - Offers interactive mode for confirmation of installations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacstrap

> Install Arch Linux packages in the specified new root directory.
> More information: <https://manned.org/pacstrap>.

- Install the `base` package, the Linux kernel and firmware for common hardware:

`pacstrap {{path/to/new/root}} {{base}} {{linux}} {{linux-firmware}}`

- Install the `base` package, the Linux LTS kernel and `base-devel` build tools:

`pacstrap {{path/to/new/root}} {{base}} {{base-devel}} {{linux-lts}}`

- Install packages and copy the host's Pacman config to the target:

`pacstrap -P {{path/to/new/root}} {{packages}}`

- Install packages without copying the host's mirrorlist to the target:

`pacstrap -M {{path/to/new/root}} {{packages}}`

- Use an alternate configuration file for Pacman:

`pacstrap -C {{path/to/pacman.conf}} {{path/to/new/root}} {{packages}}`

- Install packages using the package cache on the host instead of on the target:

`pacstrap -c {{path/to/new/root}} {{packages}}`

- Initialize an empty `pacman` keyring in the target without copying it from the host:

`pacstrap -K {{path/to/new/root}} {{packages}}`

- Install packages in interactive mode (prompts for confirmation):

`pacstrap -i {{path/to/new/root}} {{packages}}`
