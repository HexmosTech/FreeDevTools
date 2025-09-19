---
title: "DNF Group - Manage Package Collections | Online Free DevTools by Hexmos"
name: dnf-group
path: /freedevtools/tldr/linux/dnf-group
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnf-group/"
description: "Manage package collections with DNF Group, a powerful Fedora package manager.  Install, remove, and upgrade groups of packages effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - dnf group management
  - fedora package groups
  - linux package collection
  - dnf group install
  - dnf group remove
  - fedora package manager
  - rpm package groups
  - dnf group upgrade
  - command line package management
  - fedora server management
features:
  - List available and installed DNF groups.
  - Display detailed information about a specific DNF group.
  - Install a specified DNF group and its associated packages.
  - Remove a DNF group and its associated packages.
  - Upgrade all packages within a DNF group to their latest versions.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dnf group

> Manage virtual collections of packages on Fedora-based systems.
> More information: <https://dnf.readthedocs.io/en/latest/command_ref.html#group-command>.

- List DNF groups, showing installed and uninstalled status in a table:

`dnf {{[grp|group]}} list`

- Show DNF group info, including repository and optional packages:

`dnf {{[grp|group]}} info {{group_name}}`

- Install DNF group:

`dnf {{[grp|group]}} install {{group_name}}`

- Remove DNF group:

`dnf {{[grp|group]}} remove {{group_name}}`

- Upgrade DNF group:

`dnf {{[grp|group]}} upgrade {{group_name}}`
