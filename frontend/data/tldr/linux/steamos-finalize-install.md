---
title: "SteamOS Finalize - Complete System Setup | Online Free DevTools by Hexmos"
name: steamos-finalize-install
path: "/freedevtools/tldr/linux/steamos-finalize-install/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/steamos-finalize-install/"
description: "Complete system setup with SteamOS Finalize. Set up bootloaders and apply updates to finalize SteamOS installations. Free online tool, no registration required."
category: linux
keywords:
- steamos finalize
- linux steamOS installation
- linux system setup
- linux bootloader configuration
- steamOS update
- steamos system migration
- linux roothash setting
- linux kernel update
- steamos finalize install command
- linux system configuration
features:
- Finalize a SteamOS installation.
- Update bootloaders and kernel during finalization.
- Skip migration steps during system setup.
- Set a specific root hash for security.
- Force system migration regardless of environment.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# steamos-finalize-install

> Complete a SteamOS installation by setting up bootloaders and applying system updates.
> More information: <https://gitlab.com/users/evlaV/projects>.

- Finalize the installation:

`sudo steamos-finalize-install`

- Finalize without updating bootloaders or kernel:

`sudo steamos-finalize-install --no-bootloaders --no-kernel`

- Skip all migration steps:

`sudo steamos-finalize-install --no-migrate`

- Set a specific root hash during finalization:

`sudo steamos-finalize-install --roothash {{hash}}`

- Force system migration steps regardless of environment:

`sudo steamos-finalize-install --force`
