---
title: "Android Settings - Control System Configuration | Free DevTools"
name: settings
path: /freedevtools/tldr/unknown/settings
canonical: "https://hexmos.com/freedevtools/tldr/unknown/settings/"
description: "Control Android settings with the settings command. Modify system configuration, retrieve settings values, and manage Android parameters. Free online tool, no registration required."
category: unknown
keywords:
- android settings control
- adb settings management
- system configuration android
- modify android settings
- android global settings
- android secure settings
- retrieve settings values
- android configuration management
- airplane mode settings
- screen brightness settings
features:
- list settings within a specified namespace
- retrieve the value of a specific setting
- set a specific setting to a new value
- delete a specific setting from the system
- manage android system configurations through command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# settings

> Get information about the Android OS.
> More information: <https://web.archive.org/web/20240525010124/https://adbinstaller.com/commands/adb-shell-settings-5b670d5ee7958178a2955536>.

- List the settings in the `global` namespace:

`settings list {{global}}`

- Get a value of a specific setting:

`settings get {{global}} {{airplane_mode_on}}`

- Set a specific value of a setting:

`settings put {{system}} {{screen_brightness}} {{42}}`

- Delete a specific setting:

`settings delete {{secure}} {{screensaver_enabled}}`
