---
title: "Nala Package Manager - Manage Packages Efficiently | Free DevTools"
name: nala
path: /freedevtools/tldr/linux/nala
canonical: "https://hexmos.com/freedevtools/tldr/linux/nala/"
description: "Manage packages efficiently with Nala, a powerful package manager.  Install, remove, update, and search packages with ease. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - apt package manager
  - nala install
  - nala remove
  - nala upgrade
  - nala search
  - nala autoremove
  - linux system management
  - package management utility
  - python-apt frontend
features:
  - Installs and updates packages from repositories.
  - Removes packages and their configuration files.
  - Searches for packages by name or description.
  - Upgrades the entire system to the latest package versions.
  - Auto removes unused dependencies to keep your system clean.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nala

> Package management utility with better formatting.
> Front-end for the `python-apt` API.
> More information: <https://gitlab.com/volian/nala>.

- Install a package, or update it to the latest available version:

`sudo nala install {{package}}`

- Remove a package:

`sudo nala remove {{package}}`

- Remove a package and its configuration files:

`nala purge {{package}}`

- Search package names and descriptions using a word, `regex` (default) or glob:

`nala search "{{pattern}}"`

- Update the list of available packages and upgrade the system:

`sudo nala upgrade`

- Remove all unused packages and dependencies from your system:

`sudo nala autoremove`

- Fetch fast mirrors to improve download speeds:

`sudo nala fetch`

- Display the history of all transactions:

`nala history`
