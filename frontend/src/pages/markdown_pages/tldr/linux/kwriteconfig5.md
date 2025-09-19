---
title: "Control KConfig - Write KDE Plasma Settings | Online Free DevTools by Hexmos"
name: kwriteconfig5
path: /freedevtools/tldr/linux/kwriteconfig5
canonical: "https://hexmos.com/freedevtools/tldr/linux/kwriteconfig5/"
description: "Control KDE Plasma configuration settings with KWriteConfig5.  Modify KConfig entries and customize your desktop environment. Free online tool, no registration required."
category: linux
keywords:
  - kconfig writer
  - kde plasma settings
  - plasma configuration
  - kwriteconfig5 linux
  - kde settings command line
  - kde customization
  - desktop environment settings
  - qt configuration
  - systemd boot settings
  - kwinrc configuration
features:
  - Set global configuration keys for KDE Plasma
  - Modify configuration files for specific applications
  - Delete existing configuration keys
  - Configure systemd to start Plasma session
  - Customize window behavior in KWin
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kwriteconfig5

> Write KConfig entries for KDE Plasma.
> More information: <https://userbase.kde.org/KDE_System_Administration/Configuration_Files>.

- Display help:

`kwriteconfig5 --help`

- Set a global configuration key:

`kwriteconfig5 --group {{group_name}} --key {{key}} {{value}}`

- Set a key in a specific configuration file:

`kwriteconfig5 --file {{path/to/file}} --group {{group_name}} --key {{key}} {{value}}`

- Delete a key:

`kwriteconfig5 --group {{group_name}} --key {{key}} --delete`

- Use systemd to start the Plasma session when available:

`kwriteconfig5 --file {{startkderc}} --group {{General}} --key {{systemdBoot}} {{true}}`

- Hide the title bar when a window is maximized (like Ubuntu):

`kwriteconfig5 --file {{~/.config/kwinrc}} --group {{Windows}} --key {{BorderlessMaximizedWindows}} {{true}}`

- Configure KRunner to open with the Meta (Command/Windows) global hotkey:

`kwriteconfig5 --file {{~/.config/kwinrc}} --group {{ModifierOnlyShortcuts}} --key {{Meta}} "{{org.kde.kglobalaccel,/component/krunner_desktop,org.kde.kglobalaccel.Component,invokeShortcut,_launch}}"`
