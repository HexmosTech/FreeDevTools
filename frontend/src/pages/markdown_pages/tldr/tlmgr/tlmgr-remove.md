---
title: "Remove TeX Live Packages - Uninstall TLMGR | Free DevTools"
name: tlmgr-remove
path: /freedevtools/tldr/tlmgr/tlmgr-remove
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-remove/"
description: "Uninstall TeX Live packages with TLMGR. Manage and remove packages, dependencies, and backups efficiently. Free online tool, no registration required."
category: common
keywords:
- tex live package removal
- tlmgr package uninstall
- tex live dependency management
- tlmgr backup directory
- tex live package manager
- tlmgr command line
- tex package remove
- tlmgr remove all
- tex live uninstall
- tex live backup packages
features:
- Uninstall specific TeX Live packages
- Simulate package removal without changes
- Remove packages without dependencies
- Backup packages to a specified directory
- Uninstall the entire TeX Live distribution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tlmgr remove

> Uninstall TeX Live packages.
> By default, removed packages will be backed up to `./tlpkg/backups` under the TL installation directory.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#remove-option...-pkg>.

- Uninstall a TeX Live package:

`sudo tlmgr remove {{package}}`

- Simulate uninstalling a package without making any changes:

`tlmgr remove --dry-run {{package}}`

- Uninstall a package without its dependencies:

`sudo tlmgr remove --no-depends {{package}}`

- Uninstall a package and back it up to a specific directory:

`sudo tlmgr remove --backupdir {{path/to/directory}} {{package}}`

- Uninstall all of TeX Live, asking for confirmation:

`sudo tlmgr remove --all`
