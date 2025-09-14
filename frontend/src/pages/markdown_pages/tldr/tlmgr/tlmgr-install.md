---
title: "TeX Live Install - Install Packages | Free DevTools"
name: tlmgr-install
path: /freedevtools/tldr/tlmgr/tlmgr-install
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-install/"
description: "Install TeX Live packages efficiently with tlmgr-install. Manage your TeX Live environment by installing and reinstalling packages. Free online tool, no registration required."
category: common
keywords:
- TeX Live package install
- TeX Live package manager
- tlmgr install package
- TeX package installation
- TeX Live dependency management
- LaTeX package install
- CTAN package install
- TeX package reinstall
- Linux TeX Live
- macOS TeX Live
features:
- Install TeX Live packages and dependencies
- Reinstall existing TeX Live packages
- Simulate package installations with dry-run
- Install packages without dependencies
- Install packages from local files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tlmgr install

> Install TeX Live packages.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#install-option...-pkg>.

- Install a package and its dependencies:

`sudo tlmgr install {{package}}`

- Reinstall a package:

`sudo tlmgr install --reinstall {{package}}`

- Simulate installing a package without making any changes:

`tlmgr install --dry-run {{package}}`

- Install a package without its dependencies:

`sudo tlmgr install --no-depends {{package}}`

- Install a package from a specific file:

`sudo tlmgr install --file {{path/to/package}}`
