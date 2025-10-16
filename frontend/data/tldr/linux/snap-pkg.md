---
title: "Snap Package Manager - Manage Linux Software | Online Free DevTools by Hexmos"
name: snap.pkg
path: "/freedevtools/tldr/linux/snap-pkg/"
canonical: "https://hexmos-com/freedevtools/tldr/linux/snap-pkg/"
description: "Manage Linux software packages with the Snap Package Manager.  Easily install, update, and remove applications. Free online tool, no registration required."
category: linux
keywords:
  - snap package manager
  - linux snap
  - snap install
  - snap update
  - snap remove
  - snap list
  - snap refresh
  - snap find
  - linux software management
  - ubuntu snap
features:
  - Install and manage software packages.
  - Update packages to the latest versions.
  - Uninstall unwanted packages.
  - Search for available packages.
  - Manage different channels (tracks) for packages.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# snap

> Manage the "snap" self-contained software packages.
> Similar to what `apt` is for `.deb`.
> More information: <https://manned.org/snap>.

- Search for a package:

`snap find {{query}}`

- Install a package:

`snap install {{package}}`

- Update a package:

`snap refresh {{package}}`

- Update a package to another channel (track, risk, or branch):

`snap refresh {{package}} --channel={{channel}}`

- Update all packages:

`snap refresh`

- Display basic information about installed snap software:

`snap list`

- Uninstall a package:

`snap remove {{package}}`

- Check for recent snap changes in the system:

`snap changes`
