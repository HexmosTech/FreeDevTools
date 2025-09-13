---
title: "PlatformIO System - Control PlatformIO | Free DevTools"
name: pio-system
path: /freedevtools/tldr/pio/pio-system
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-system/"
description: "Control PlatformIO system configurations with pio system. Manage PlatformIO installations, completions, and data with ease. Free online tool, no registration required."
category: common
keywords:
- PlatformIO system
- PlatformIO completion
- PlatformIO info
- PlatformIO prune
- PlatformIO uninstall
- PlatformIO install
- PlatformIO cache
- PlatformIO data management
- PlatformIO configuration
- PlatformIO environment
features:
- Install shell completions
- Uninstall shell completions
- Display system information
- Remove unused data
- Manage cached data
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio system

> Miscellaneous system commands for PlatformIO.
> More information: <https://docs.platformio.org/en/latest/core/userguide/system/>.

- Install shell completion for the current shell (supports Bash, fish, Zsh and PowerShell):

`pio system completion install`

- Uninstall shell completion for the current shell:

`pio system completion uninstall`

- Display system-wide PlatformIO information:

`pio system info`

- Remove unused PlatformIO data:

`pio system prune`

- Remove only cached data:

`pio system prune --cache`

- List unused PlatformIO data that would be removed but do not actually remove it:

`pio system prune --dry-run`
