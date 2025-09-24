---
title: "DNF Package Manager - Manage Linux Packages | Online Free DevTools by Hexmos"
name: dnf
path: /freedevtools/tldr/linux/dnf
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnf/"
description: "Manage Linux packages efficiently with DNF. Upgrade, install, remove, and search packages easily. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - dnf commands
  - fedora package manager
  - centos package manager
  - rhel package manager
  - linux package installation
  - linux package removal
  - dnf upgrade
  - dnf search
  - dnf install
features:
  - Upgrade installed packages to their latest versions.
  - Search for packages using keywords.
  - Install new packages with automatic confirmation.
  - Remove unwanted packages from the system.
  - List all installed packages on the system.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dnf

> Package management utility for RHEL, Fedora, and CentOS (replaces yum).
> Some subcommands such as `group` and `config-manager` have their own usage documentation.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://dnf.readthedocs.io>.

- Upgrade installed packages to the newest available versions:

`sudo dnf {{[up|upgrade]}}`

- Search packages via keywords:

`dnf {{[se|search]}} {{keyword1 keyword2 ...}}`

- Display details about a package:

`dnf {{[if|info]}} {{package}}`

- Install a new package (use `--assumeyes` to confirm all prompts automatically):

`sudo dnf {{[in|install]}} {{package1 package2 ...}}`

- Remove a package:

`sudo dnf {{[rm|remove]}} {{package1 package2 ...}}`

- List installed packages:

`dnf {{[ls|list]}} --installed`

- Find which packages provide a given command:

`dnf {{[wp|provides]}} {{command}}`

- View all past operations:

`dnf {{[hist|history]}}`
