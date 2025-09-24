---
title: "Pacstall Package Manager - Control Ubuntu Packages | Online Free DevTools by Hexmos"
name: pacstall
path: /freedevtools/tldr/linux/pacstall
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacstall/"
description: "Control Ubuntu package management with Pacstall Package Manager. Install, remove, and update packages effortlessly on your Linux system. Free online tool, no registration required."
category: linux
keywords:
- pacstall package manager
- ubuntu package manager
- linux package installer
- AUR package manager ubuntu
- pacstall repository manager
- linux package upgrade
- ubuntu pacstall commands
- pacstall search
- linux software installation
- debian package management
features:
- Install packages from repositories
- Remove installed packages easily
- Update Pacstall's scripts efficiently
- Upgrade all packages simultaneously
- List all currently installed packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pacstall

> An AUR package manager for Ubuntu.
> More information: <https://github.com/pacstall/pacstall>.

- Search the package database for a package name:

`pacstall --search {{query}}`

- Install a package:

`pacstall --install {{package}}`

- Remove a package:

`pacstall --remove {{package}}`

- Add a repository to the database (only GitHub and GitLab are supported):

`pacstall --add-repo {{remote_repository_location}}`

- Update pacstall's scripts:

`pacstall --update`

- Update all packages:

`pacstall --upgrade`

- Display information about a package:

`pacstall --cache-info {{package}}`

- List all installed packages:

`pacstall --list`
