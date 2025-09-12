---
title: "Manage Synology Packages - Control DSM with synopkg | Free DevTools"
name: synopkg
path: /freedevtools/tldr/linux/synopkg
canonical: "https://hexmos.com/freedevtools/tldr/linux/synopkg/"
description: "Manage Synology packages effortlessly with synopkg. Install, uninstall, upgrade, and check the status of your DSM packages. Free online tool, no registration required."
category: linux
keywords:
  - Synology package manager
  - DSM package management
  - synopkg commands
  - Synology package installation
  - Synology package upgrade
  - Synology package removal
  - Synology package status
  - DiskStation package control
  - synopkg dependency check
  - Synology SPK management
features:
  - List installed Synology packages
  - Manage dependencies between packages
  - Start and stop Synology packages
  - Check the status of individual packages
  - Upgrade all installed packages to the latest versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# synopkg

> Package management utility for Synology DiskStation Manager.
> More information: <https://www.synology.com/dsm>.

- List the names of installed packages:

`synopkg list --name`

- List packages which depend on a specific package:

`synopkg list --depend-on {{package}}`

- Start/Stop a package:

`sudo synopkg {{start|stop}} {{package}}`

- Print the status of a package:

`synopkg status {{package}}`

- Uninstall a package:

`sudo synopkg uninstall {{package}}`

- Check if updates are available for a package:

`synopkg checkupdate {{package}}`

- Upgrade all packages to the latest version:

`sudo synopkg upgradeall`

- Install a package from a synopkg file:

`sudo synopkg install {{path/to/package.spk}}`
