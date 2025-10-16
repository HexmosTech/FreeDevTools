---
title: "Flatpak Mask - Control Updates with Flatpak | Online Free DevTools by Hexmos"
name: flatpak-mask
path: "/freedevtools/tldr/linux/flatpak-mask/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/flatpak-mask/"
description: "Control Flatpak updates easily with Flatpak Mask. Manage application updates and prevent automatic installations using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - flatpak update management
  - flatpak mask command
  - linux package management
  - flatpak update control
  - linux flatpak updates
  - command-line flatpak
  - flatpak application control
  - manage flatpak packages
  - flatpak update blocker
  - system flatpak updates
features:
  - Ignore updates for specific Flatpak applications.
  - Remove update masking for specific applications.
  - List all currently masked update patterns.
  - Control both user and system-level updates.
  - Manage updates via simple command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# flatpak mask

> Mask out updates and automatic installation.
> More information: <https://docs.flatpak.org/en/latest/flatpak-command-reference.html#flatpak-mask>.

- Ignore updates for a specific flatpak:

`flatpak mask {{com.example.app}}`

- Undo ignore updates:

`flatpak mask --remove {{com.example.app}}`

- List all currently masked patterns:

`flatpak mask {{--system|--user}}`
