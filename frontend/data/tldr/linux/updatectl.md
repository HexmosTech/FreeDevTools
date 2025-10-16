---
title: "Updatectl - Control System Updates | Online Free DevTools by Hexmos"
name: updatectl
path: "/freedevtools/tldr/linux/updatectl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/updatectl/"
description: "Control system updates with Updatectl. Manage updates, check for available versions, and clean up old versions. Free online tool, no registration required."
category: linux
keywords:
  - system update manager
  - update control utility
  - linux system updates
  - updatectl command
  - systemd update tool
  - update target manager
  - offline update checker
  - system update cli
  - version control system
  - software update manager
features:
  - Check for available system updates
  - Update to the latest system version
  - Manage and list update targets
  - Clean up old versions of system packages
  - Apply updates and reboot the system
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# updatectl

> System update utility.
> More information: <https://www.freedesktop.org/software/systemd/man/updatectl.html>.

- Check to see if the system has any available updates:

`updatectl check`

- Update to the latest version:

`updatectl update`

- Show update targets:

`updatectl list`

- Show data about a target and its versions:

`updatectl list {{target}}`

- Return local data about a target without fetching from the network:

`updatectl --offline list {{target}}`

- Apply an update to a target and then reboot the system:

`updatectl --reboot update {{target}}`

- Clean up old versions of a specified target:

`updatectl vacuum {{target}}`

- Display help:

`updatectl {{[-h|--help]}}`
