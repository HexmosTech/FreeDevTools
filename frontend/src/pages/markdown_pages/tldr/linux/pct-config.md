---
title: "PCT Config - Display Container Configuration | Online Free DevTools by Hexmos"
name: pct-config
path: /freedevtools/tldr/linux/pct-config
canonical: "https://hexmos.com/freedevtools/tldr/linux/pct-config/"
description: "Display container configurations with PCT Config.  View saved and running configurations, and access specific snapshot details. Free online tool, no registration required."
category: linux
keywords:
  - container configuration display
  - pct configuration command
  - proxmox container config
  - linux container management
  - pct snapshot configuration
  - virtual machine configuration
  - container config viewer
  - pct command line tool
  - proxmox command line
  - system configuration display
features:
  - Displays saved container configurations.
  - Shows the current running configuration without pending changes.
  - Allows viewing configuration of specific snapshots.
  - Provides detailed information about container settings.
  - Uses a simple and intuitive command-line interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pct config

> Print the configuration of a container.
> More information: <https://pve.proxmox.com/pve-docs/pct.1.html>.

- Display the saved configuration:

`pct config {{100}}`

- Display the running configuration without pending changes:

`pct config {{100}} --current`

- Display configuration of a specific snapshot:

`pct config {{100}} --snapshot {{snapshot_name}}`
