---
title: "Manage Packages with Aptitude - Debian/Ubuntu Package Manager | Online Free DevTools by Hexmos"
name: aptitude
path: /freedevtools/tldr/linux/aptitude
canonical: "https://hexmos.com/freedevtools/tldr/linux/aptitude/"
description: "Manage Debian and Ubuntu packages efficiently with Aptitude.  Install, remove, update, and search for packages easily. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - aptitude commands
  - debian package management
  - ubuntu package management
  - aptitude install
  - aptitude update
  - aptitude search
  - aptitude remove
  - aptitude upgrade
  - linux software management
features:
  - Install new packages and their dependencies
  - Remove packages and their dependents
  - Update package lists to the latest versions
  - Upgrade installed packages to their newest versions
  - Search for installed or available packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aptitude

> Debian and Ubuntu package management utility.
> More information: <https://manned.org/aptitude.8>.

- Synchronize list of packages and versions available. This should be run first, before running subsequent `aptitude` commands:

`aptitude update`

- Install a new package and its dependencies:

`aptitude install {{package}}`

- Search for a package:

`aptitude search {{package}}`

- Search for an installed package (`?installed` is an `aptitude` search term):

`aptitude search '?installed({{package}})'`

- Remove a package and all packages depending on it:

`aptitude remove {{package}}`

- Upgrade installed packages to the newest available versions:

`aptitude upgrade`

- Upgrade installed packages (like `aptitude upgrade`) including removing obsolete packages and installing additional packages to meet new package dependencies:

`aptitude full-upgrade`

- Put an installed package on hold to prevent it from being automatically upgraded:

`aptitude hold '?installed({{package}})'`
