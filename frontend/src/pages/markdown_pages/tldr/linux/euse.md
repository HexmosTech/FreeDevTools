---
title: "euse - Manage Gentoo USE Flags | Online Free DevTools by Hexmos"
name: euse
path: /freedevtools/tldr/linux/euse
canonical: "https://hexmos.com/freedevtools/tldr/linux/euse/"
description: "Manage Gentoo USE flags efficiently with euse. Enable, disable, and list global and local flags for customized package configurations. Free online tool, no registration required."
category: linux
keywords:
  - gentoo use flags
  - euse command
  - gentoo package management
  - linux package manager
  - use flag management
  - enable use flags
  - disable use flags
  - gentoo configuration
  - system administration
  - linux system tools
features:
  - Enable global USE flags for customized package builds.
  - Disable global USE flags to remove unwanted features.
  - List active global and local USE flags for easy overview.
  - Prune global USE flags to clean up your configuration.
  - Manage Gentoo system packages effectively through command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# euse

> Enable, disable, and obtain information about Gentoo USE flags.
> More information: <https://wiki.gentoo.org/wiki/Euse>.

- List active global USE flags:

`euse {{[-a|--active]}} {{[-g|--global]}}`

- List active local USE flags:

`euse {{[-a|--active]}} {{[-l|--local]}}`

- Enable a global USE flag:

`sudo euse {{[-E|--enable]}} {{use_flag}}`

- Disable a global USE flag (put a '-' sign in front of the USE flag):

`sudo euse {{[-D|--disable]}} {{use_flag}}`

- Remove a global USE flag:

`sudo euse {{[-P|--prune]}} {{use_flag}}`
