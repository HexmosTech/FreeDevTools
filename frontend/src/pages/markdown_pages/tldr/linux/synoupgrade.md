---
title: "Synology DSM Upgrade - Manage Updates | Free DevTools"
name: synoupgrade
path: /freedevtools/tldr/linux/synoupgrade
canonical: "https://hexmos.com/freedevtools/tldr/linux/synoupgrade/"
description: "Manage Synology DSM updates efficiently with synoupgrade. Check for updates, download, and install the latest DSM version or patches. Free online tool, no registration required."
category: linux
keywords:
  - Synology DSM upgrade
  - DSM update manager
  - Synology NAS update
  - synoupgrade command
  - DSM version check
  - Synology patch management
  - automated DSM upgrade
  - manual DSM upgrade
  - DSM update download
  - Synology command-line tool
features:
  - Checks for available DSM updates and patches.
  - Downloads the latest DSM updates and patches.
  - Installs DSM updates and patches.
  - Allows for automatic or manual upgrades.
  - Supports applying updates from a patch file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# synoupgrade

> Upgrade Synology DiskStation Manager (DSM) - the Synology NAS operating system.
> More information: <https://www.synology.com/dsm>.

- Check if upgrades are available:

`sudo synoupgrade --check`

- Check for patches without upgrading the DSM version:

`sudo synoupgrade --check-smallupdate`

- Download the latest upgrade available (use `--download-smallupdate` for patches):

`sudo synoupgrade --download`

- Start the upgrade process:

`sudo synoupgrade --start`

- Upgrade to the latest version automatically:

`sudo synoupgrade --auto`

- Apply patches without upgrading the DSM version automatically:

`sudo synoupgrade --auto-smallupdate`

- Upgrade the DSM using a patch file (should be an absolute path):

`sudo synoupgrade --patch /{{path/to/file.pat}}`

- Display help:

`synoupgrade`
