---
title: "Manage TeX Live Packages - Update TeX Distributions | Online Free DevTools by Hexmos"
name: tlmgr
path: "/freedevtools/tldr/tlmgr/tlmgr/"
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr/"
description: "Manage TeX Live packages easily with tlmgr. Install, update, and remove TeX packages effortlessly. Free online tool, no registration required."
category: common
keywords:
- TeX Live package manager
- TeX package management
- TeX distribution update
- tlmgr install package
- tlmgr remove package
- TeX Live configuration
- TeX package update list
- TeX package information
- command line package manager
- texlive linux
features:
- Install and manage TeX Live packages
- Remove unnecessary TeX packages
- Update all installed TeX Live packages
- Display information about specific TeX packages
- Configure TeX Live settings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr

> Manage packages and configuration options of an existing TeX Live installation.
> Some subcommands such as `paper` have their own usage documentation.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#ACTIONS>.

- Install a package and its dependencies:

`tlmgr install {{package}}`

- Remove a package and its dependencies:

`tlmgr remove {{package}}`

- Display information about a package:

`tlmgr info {{package}}`

- Update all packages:

`tlmgr update --all`

- Show possible updates without updating anything:

`tlmgr update --list`

- Start a GUI version of tlmgr:

`tlmgr gui`

- List all TeX Live configurations:

`tlmgr conf`
