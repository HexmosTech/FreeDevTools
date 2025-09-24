---
title: "PlatformIO Update - Control Core Packages | Online Free DevTools by Hexmos"
name: pio-update
path: /freedevtools/tldr/pio/pio-update
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-update/"
description: "Control PlatformIO core packages, platforms, and libraries with PlatformIO Update. Manage dependencies and ensure your environment is up-to-date. Free online tool, no registration required."
category: common
keywords:
- PlatformIO package update
- PlatformIO library update
- PlatformIO core update
- PIO package manager
- PlatformIO dependency management
- Embedded system update
- IoT development update
- PIO platform update
- PlatformIO CLI update
- PlatformIO environment management
features:
- Update all PlatformIO packages, platforms, and libraries
- Update only PlatformIO core packages
- Check for available updates without installing
- Manage embedded development environment
- Keep PlatformIO environment up-to-date
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pio update

> Update installed PlatformIO Core packages, development platforms and global libraries.
> See also: `pio platform update`, `pio lib update`.
> More information: <https://docs.platformio.org/en/latest/core/userguide/cmd_update.html>.

- Perform a full update of all packages, development platforms and global libraries:

`pio update`

- Update core packages only (skips platforms and libraries):

`pio update --core-packages`

- Check for new versions of packages, platforms and libraries but do not actually update them:

`pio update --dry-run`
