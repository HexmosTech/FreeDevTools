---
title: "Get Linux Distro Info - lsb_release Command | Free DevTools"
name: lsb_release
path: /freedevtools/tldr/linux/lsb_release
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsb_release/"
description: "Get Linux distribution information quickly with the lsb_release command.  Retrieve details like description, ID, release, and codename. Free online tool, no registration required."
category: linux
keywords:
  - linux distro information
  - lsb_release command
  - linux system information
  - linux release details
  - linux distribution details
  - get linux version
  - linux os information
  - linux codename
  - linux release number
  - check linux version
features:
  - Retrieve the full description of the Linux distribution.
  - Display the distribution ID (name).
  - Show the release number of the distribution.
  - Obtain the codename of the distribution.
  - Print all available information in a single command.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lsb_release

> Get LSB (Linux Standard Base) and distribution-specific information.
> More information: <https://manned.org/lsb_release>.

- Print all available information:

`lsb_release {{[-a|--all]}}`

- Print a description (usually the full name) of the operating system:

`lsb_release {{[-d|--description]}}`

- Print only the operating system name (ID), suppressing the field name:

`lsb_release {{[-is|--id --short]}}`

- Print the release number and codename of the distribution, suppressing the field names:

`lsb_release {{[-rcs|--release --codename --short]}}`
