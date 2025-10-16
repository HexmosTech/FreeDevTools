---
title: "Control Locale - Manage System Language with eselect | Online Free DevTools by Hexmos"
name: eselect-locale
path: "/freedevtools/tldr/linux/eselect-locale/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/eselect-locale/"
description: "Manage system language instantly with eselect-locale. Configure the LANG environment variable, list available locales and set your preferred system language. Free online tool, no registration required."
category: linux
keywords:
  - system language manager
  - locale configuration tool
  - eselect locale settings
  - linux language environment
  - LANG variable control
  - gentoo locale management
  - command line locale tool
  - system language selection
  - profile environment setup
  - linux eselect-locale
features:
  - List available system locales
  - Set LANG environment variable
  - Update system language settings
  - Show current LANG variable value
  - Manage system language from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eselect locale

> An `eselect` module for managing the `LANG` environment variable, which sets the system language.
> More information: <https://wiki.gentoo.org/wiki/Eselect#Locale>.

- List available locales:

`eselect locale list`

- Set the `LANG` environment variable in `/etc/profile.env` by name or index from the `list` command:

`eselect locale set {{name|index}}`

- Display the value of `LANG` in `/etc/profile.env`:

`eselect locale show`
