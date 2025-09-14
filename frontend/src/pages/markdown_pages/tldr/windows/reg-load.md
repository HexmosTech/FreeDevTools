---
title: "Reg Load - Manage Registry Keys | Free DevTools"
name: reg-load
path: /freedevtools/tldr/windows/reg-load
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-load/"
description: "Manage registry keys with Reg Load. Load and unload saved registry hives for troubleshooting and temporary key management. Free online tool, no registration required."
category: windows
keywords:
- windows registry load
- registry key manager
- reg load hive
- windows registry editor
- registry troubleshooting tool
- windows registry backup
- registry key import
- windows registry hive
- windows reg command
- command line registry
features:
- Load registry hives from files
- Mount saved registry subkeys
- Manage temporary registry configurations
- Restore registry settings from backups
- Load registry keys via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# reg load

> Load saved subkeys into a different subkey in the registry.
> Note: This is intended for troubleshooting and temporary keys.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-load>.

- Load a backup file into the specified key:

`reg load {{key_name}} {{path\to\file.hiv}}`
