---
title: "Reg Save - Backup Registry Keys to File | Free DevTools"
name: reg-save
path: /freedevtools/tldr/windows/reg-save
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-save/"
description: "Backup registry keys with Reg Save command. Quickly save and restore Windows registry settings to a file. Free online tool, no registration required."
category: windows
keywords:
- registry backup command
- reg save hive file
- windows registry export
- registry key to file
- windows regedit backup
- registry save utility
- command line registry tool
- windows cmd registry
- registry hive backup
- reg save windows
features:
- Save a registry key to a .hiv file
- Back up an entire registry branch
- Force overwrite existing registry files
- Save registry settings from the command line
- Create a registry backup for disaster recovery
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# reg save

> Save a registry key, its subkeys and values to a native `.hiv` file.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-save>.

- Save a registry key, its subkeys and values to a specific file:

`reg save {{key_name}} {{path\to\file.hiv}}`

- Forcefully (assuming [y]es) overwrite an existing file:

`reg save {{key_name}} {{path\to\file.hiv}} /y`
