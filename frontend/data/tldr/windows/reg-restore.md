---
title: "Reg Restore - Restore Registry from .hiv File | Online Free DevTools by Hexmos"
name: reg-restore
path: "/freedevtools/tldr/windows/reg-restore/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-restore/"
description: "Restore Windows registry keys with Reg Restore. Recover system settings and data from .hiv files using this command-line utility. Free online tool, no registration required."
category: windows
keywords:
- Windows registry restore
- .hiv file restore
- registry backup recovery
- command line registry tool
- reg-restore command
- registry key recovery
- windows registry editor
- hive file restore
- registry data recovery
- windows command-line tools
features:
- Overwrite registry keys from .hiv files
- Restore system settings from backups
- Recover registry data using the command line
- Utilize .hiv files for registry restoration
- Implement command-line based registry management
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reg restore

> Restore a key and its values from a native `.hiv` file.
> See `reg-save` for more information.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-restore>.

- Overwrite a specified key with data from a backup file:

`reg restore {{key_name}} {{path\to\file.hiv}}`
