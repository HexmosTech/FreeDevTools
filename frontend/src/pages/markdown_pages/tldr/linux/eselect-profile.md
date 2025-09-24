---
title: "Eselect Profile - Manage System Profile | Online Free DevTools by Hexmos"
name: eselect-profile
path: /freedevtools/tldr/linux/eselect-profile
canonical: "https://hexmos.com/freedevtools/tldr/linux/eselect-profile/"
description: "Manage your Gentoo system profile using eselect profile. Control make.profile symlink settings, list available profiles, and view your current profile. Free online tool, no registration required."
category: linux
keywords:
  - gentoo profile management
  - linux system profile selector
  - eselect profile command
  - linux package profile manager
  - gentoo system configuration
  - linux profile listing
  - gentoo package manager tools
  - eselect profile setting
  - linux command line tools
  - system profile display
features:
  - List available system profiles with their corresponding numbers.
  - Set the active system profile by name or number.
  - Display the current system profile in use.
  - Manage the /etc/portage/make.profile symlink.
  - Control Gentoo's system profile through the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eselect profile

> An `eselect` module for managing the `/etc/portage/make.profile` symlink, which sets the system profile.
> More information: <https://wiki.gentoo.org/wiki/Eselect#Profile>.

- List available profile symlink targets with their numbers:

`eselect profile list`

- Set the `/etc/portage/make.profile` symlink by name or number from the `list` command:

`eselect profile set {{name|number}}`

- Show the current system profile:

`eselect profile show`
