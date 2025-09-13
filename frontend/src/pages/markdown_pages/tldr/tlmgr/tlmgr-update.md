---
title: "TeX Live Update - Manage Packages | Free DevTools"
name: tlmgr-update
path: /freedevtools/tldr/tlmgr/tlmgr-update
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-update/"
description: "Manage TeX Live packages with tlmgr update. Update packages, exclude specific packages, and create backups effortlessly. Free online tool, no registration required."
category: common
keywords:
- TeX Live package manager
- TeX Live update command
- TeX Live package update
- tlmgr update all
- tlmgr update exclude
- TeX Live package backup
- LaTeX package update
- TeX package manager
- TeX Live command line
- Linux TeX Live update
features:
- Update all TeX Live packages
- Update tlmgr itself
- Exclude specific packages from updates
- Create backups before updating
- Simulate updates with a dry run
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tlmgr update

> Update TeX Live packages.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#update-option...-pkg>.

- Update all TeX Live packages:

`sudo tlmgr update --all`

- Update tlmgr itself:

`sudo tlmgr update --self`

- Update a specific package:

`sudo tlmgr update {{package}}`

- Update all except a specific package:

`sudo tlmgr update --all --exclude {{package}}`

- Update all packages, making a backup of the current packages:

`sudo tlmgr update --all --backup`

- Update a specific package without updating its dependencies:

`sudo tlmgr update --no-depends {{package}}`

- Simulate updating all packages without making any changes:

`sudo tlmgr update --all --dry-run`
