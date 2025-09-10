---
title: settings
name: settings
path: /freedevtools/tldr/android/settings
canonical: "https://hexmos.com/freedevtools/tldr/android/settings/"
description: Get information about the Android OS settings.
category: android
keywords:
- android system configuration
- modify system settings
- retrieve settings values
- android global settings management
- android secure settings manipulation
- android system settings modification
- airplane mode configuration
- screen brightness control
- screensaver settings management
- android settings namespace interaction
features:
- list settings in a namespace
- get the value of a specific setting
- set a specific setting value
- delete a specific setting
- manage various android system configurations
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
