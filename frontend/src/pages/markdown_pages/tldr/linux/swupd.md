---
title: "Swupd Package Manager - Manage Clear Linux Packages | Online Free DevTools by Hexmos"
name: swupd
path: /freedevtools/tldr/linux/swupd
canonical: "https://hexmos.com/freedevtools/tldr/linux/swupd/"
description: "Manage Clear Linux packages efficiently with swupd. Update, install, remove, and verify bundles effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - clear linux swupd
  - swupd update command
  - swupd bundle management
  - linux software management
  - swupd package installation
  - swupd package removal
  - linux system update
  - clear linux tools
  - swupd bundle list
features:
  - Update Clear Linux system packages to the latest versions.
  - Check for available updates and display current version information.
  - List all installed software bundles.
  - Search for specific packages within installed bundles.
  - Add, remove, and verify the integrity of software bundles.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# swupd

> Package management utility for Clear Linux.
> More information: <https://www.clearlinux.org/clear-linux-documentation/guides/clear/swupd.html>.

- Update to the latest version:

`sudo swupd update`

- Show current version, and check whether a newer one exists:

`swupd check-update`

- List installed bundles:

`swupd bundle-list`

- Locate the bundle where a wanted package exists:

`swupd search -b {{package}}`

- Install a new bundle:

`sudo swupd bundle-add {{bundle}}`

- Remove a bundle:

`sudo swupd bundle-remove {{bundle}}`

- Correct broken or missing files:

`sudo swupd verify`
