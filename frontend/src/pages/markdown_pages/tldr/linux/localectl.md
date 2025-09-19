---
title: "Localectl - Control System Locale | Online Free DevTools by Hexmos"
name: localectl
path: /freedevtools/tldr/linux/localectl
canonical: "https://hexmos.com/freedevtools/tldr/linux/localectl/"
description: "Control system locale settings with Localectl. Manage keyboard layouts and system languages on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux locale control
- system locale manager
- keyboard layout configuration
- freedesktop localectl
- linux language settings
- locale variable editor
- set system keymap
- list available locales
- linux keyboard mapping
- localectl command line
features:
- Set system locale variables
- List available locales
- Configure keyboard mapping for console
- Configure keyboard mapping for X11
- Display current system locale settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# localectl

> Control the system locale and keyboard layout settings.
> More information: <https://www.freedesktop.org/software/systemd/man/localectl.html>.

- Show the current settings of the system locale and keyboard mapping:

`localectl`

- List available locales:

`localectl list-locales`

- Set a system locale variable:

`localectl set-locale {{LANG}}={{en_US.UTF-8}}`

- List available keymaps:

`localectl list-keymaps`

- Set the system keyboard mapping for the console and X11:

`localectl set-keymap {{us}}`
