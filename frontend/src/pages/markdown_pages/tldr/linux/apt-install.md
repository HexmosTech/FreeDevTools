---
title: "Install Packages - Manage APT Packages | Online Free DevTools by Hexmos"
name: apt-install
path: /freedevtools/tldr/linux/apt-install
canonical: "https://hexmos.com/freedevtools/tldr/linux/apt-install/"
description: "Install packages easily with APT Package Manager. Update, upgrade, and manage software on Debian-based systems. Free online tool, no registration required."
category: linux
keywords:
  - apt package manager
  - debian package install
  - ubuntu apt install
  - linux package management
  - command line apt
  - software installation linux
  - apt update package
  - apt upgrade package
  - debian software repository
  - apt package dependencies
features:
  - Install packages from repositories
  - Update existing packages to the latest version
  - Manage package dependencies automatically
  - Display verbose version information during installation
  - Upgrade all outdated packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apt install

> Install packages for Debian-based distributions.
> More information: <https://manned.org/apt.8>.

- Install a package, or update it to the latest version:

`sudo apt install {{package}}`

- Display verbose package version information during installation or update:

`sudo apt install {{[-V|--verbose-versions]}} {{package}}`
