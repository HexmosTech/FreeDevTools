---
title: "Manage Packages - Control Apt with apt-mark | Online Free DevTools by Hexmos"
name: apt-mark
path: /freedevtools/tldr/linux/apt-mark
canonical: "https://hexmos.com/freedevtools/tldr/linux/apt-mark/"
description: "Control package installations with apt-mark.  Manage updates, hold packages, and view installation status efficiently. Free online tool, no registration required."
category: linux
keywords:
  - linux package management
  - apt package control
  - apt-mark commands
  - linux apt-mark tutorial
  - manage linux packages
  - apt package hold
  - apt package auto
  - apt-mark unhold
  - linux system administration
  - debian package management
features:
  - Mark packages for automatic installation.
  - Prevent updates to specific packages (hold).
  - Allow updates for previously held packages (unhold).
  - List manually installed packages.
  - Display packages currently held from updates.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apt-mark

> Utility to change the status of installed packages.
> More information: <https://manned.org/apt-mark.8>.

- Mark a package as automatically installed:

`sudo apt-mark auto {{package}}`

- Hold a package at its current version and prevent updates to it:

`sudo apt-mark hold {{package}}`

- Allow a package to be updated again:

`sudo apt-mark unhold {{package}}`

- Show manually installed packages:

`apt-mark showmanual`

- Show held packages that aren't being updated:

`apt-mark showhold`
