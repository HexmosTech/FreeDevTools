---
title: "APT Repository - Manage Package Sources on Linux | Online Free DevTools by Hexmos"
name: add-apt-repository
path: /freedevtools/tldr/linux/add-apt-repository
canonical: "https://hexmos.com/freedevtools/tldr/linux/add-apt-repository/"
description: "Manage APT package repositories with add-apt-repository. Quickly add or remove software sources on Linux for easy package management. Free online tool, no registration required."
category: linux
keywords:
- apt repository manager
- linux package source
- add apt repository
- remove apt repository
- debian package management
- ubuntu apt sources
- software repository linux
- linux add ppa
- apt package update
- apt repository command
features:
- Add new APT repositories to the system
- Remove existing APT repositories
- Update package cache after adding a repository
- Enable source package downloads from repositories
- Manage software sources on Debian-based systems
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# add-apt-repository

> Manage `apt` repository definitions.
> More information: <https://manned.org/add-apt-repository>.

- Add a new `apt` repository:

`add-apt-repository {{repository_spec}}`

- Remove an `apt` repository:

`add-apt-repository {{[-r|--remove]}} {{repository_spec}}`

- Update the package cache after adding a repository:

`add-apt-repository --update {{repository_spec}}`

- Allow source packages to be downloaded from the repository:

`add-apt-repository {{[-s|--enable-source]}} {{repository_spec}}`
