---
title: "DNF5 Package Manager - Manage Linux Packages | Online Free DevTools by Hexmos"
name: dnf5
path: /freedevtools/tldr/linux/dnf5
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnf5/"
description: "Manage Linux packages efficiently with DNF5 package manager.  Upgrade, install, remove, and search packages with ease. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - dnf5 commands
  - rhel package management
  - fedora package manager
  - centos package manager
  - linux software installation
  - linux software removal
  - dnf5 upgrade
  - dnf5 search
  - dnf5 install
features:
  - Upgrade installed packages to their newest versions.
  - Search for packages using keywords.
  - Install new packages from repositories.
  - Remove unwanted packages from the system.
  - Manage cached package data efficiently.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dnf5

> Package management utility for RHEL, Fedora, and CentOS (it replaces dnf, which in turn replaced yum).
> DNF5 is a C++ rewrite of the DNF package manager featuring improved performance and a smaller size.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://dnf5.readthedocs.io>.

- Upgrade installed packages to the newest available versions:

`sudo dnf5 upgrade`

- Search packages via keywords:

`dnf5 search {{keyword1 keyword2 ...}}`

- Display details about a package:

`dnf5 info {{package}}`

- Install new packages (Note: Use `-y` to confirm all prompts automatically):

`sudo dnf5 install {{package1 package2 ...}}`

- Remove packages:

`sudo dnf5 remove {{package1 package2 ...}}`

- List installed packages:

`dnf5 list --installed`

- Find which packages provide a given command:

`dnf5 provides {{command}}`

- Remove or expire cached data:

`sudo dnf5 clean all`
