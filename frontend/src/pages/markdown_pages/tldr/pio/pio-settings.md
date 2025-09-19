---
title: "PIO Settings - Control PlatformIO Configuration | Online Free DevTools by Hexmos"
name: pio-settings
path: /freedevtools/tldr/pio/pio-settings
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-settings/"
description: "Control PlatformIO settings with PIO Settings. Manage PlatformIO configuration, display settings, and reset defaults using the command line. Free online tool, no registration required."
category: common
keywords:
- PlatformIO settings
- PIO configuration management
- PlatformIO command line
- PIO settings get
- PIO settings set
- PIO settings reset
- PlatformIO environment variables
- PIO ini file settings
- PIO project configuration
- PlatformIO build options
features:
- Display the values of all PlatformIO settings
- Get the value of a specific PlatformIO setting
- Set the value of a specific PlatformIO setting
- Reset all modified settings to factory defaults
- Manage PlatformIO project configuration from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio settings

> View and modify PlatformIO settings.
> More information: <https://docs.platformio.org/en/latest/core/userguide/cmd_settings.html>.

- Display the names, values and descriptions of all PlatformIO settings:

`pio settings get`

- Display the name, value and description of a specific PlatformIO setting:

`pio settings get {{setting}}`

- Set a specific setting value:

`pio settings set {{setting}} {{value}}`

- Reset the values of all modified settings to their factory defaults:

`pio settings reset`
