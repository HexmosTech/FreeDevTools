---
title: "Reg Export - Create Registry Backups | Free DevTools"
name: reg-export
path: /freedevtools/tldr/windows/reg-export
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-export/"
description: "Create registry backups with Reg Export. Save and restore Windows registry keys for system recovery or configuration transfer. Free online tool, no registration required."
category: windows
keywords:
- registry export
- reg export windows
- windows registry backup
- registry key backup
- registry file export
- reg file generator
- windows regedit export
- registry export command line
- registry configuration backup
- windows registry editor
features:
- Export specific registry keys to a .reg file.
- Forcefully overwrite existing .reg files during export.
- Create complete backups of registry subkeys and values.
- Automate registry backup processes via command line.
- Save registry configurations for system restoration.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# reg export

> Export the specified subkeys and values to a `.reg` file.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-export>.

- Export all subkeys and values of a specific key:

`reg export {{key_name}} {{path\to\file.reg}}`

- Forcefully (assuming [y]es) overwrite of an existing file:

`reg export {{key_name}} {{path\to\file.reg}} /y`
