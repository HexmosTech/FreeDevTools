---
title: "Manage Software - Update and Install Apps | Free DevTools"
name: gnome-software
path: /freedevtools/tldr/linux/gnome-software
canonical: "https://hexmos.com/freedevtools/tldr/linux/gnome-software/"
description: "Manage software effortlessly with gnome-software on Linux. Update system packages, install new applications, and browse the app store. Free online tool, no registration required."
category: linux
keywords:
- linux software manager
- gnome software center
- application installer linux
- system updater linux
- linux package manager
- install apps linux
- update apps linux
- gnome app store
- software repository linux
- linux software updates
features:
- Install applications via GUI
- Update system packages via GUI
- Browse and search for available software
- View package details and dependencies
- Launch with specific modes (updates, installed, overview)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gnome-software

> Add and remove applications and update your system.
> More information: <https://manned.org/gnome-software>.

- Launch the GNOME Software GUI if it's not already running:

`gnome-software`

- Launch the GNOME Software GUI if it's not open, and navigate to the specified page:

`gnome-software --mode {{updates|updated|installed|overview}}`

- Launch the GNOME Software GUI if it's not open and view the details of the specified package:

`gnome-software --details {{package}}`

- Display the version:

`gnome-software --version`
