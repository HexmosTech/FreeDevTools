---
title: "Reg Copy - Copy Registry Keys | Free DevTools"
name: reg-copy
path: /freedevtools/tldr/windows/reg-copy
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-copy/"
description: "Copy Registry keys easily with Reg Copy, a command-line tool for Windows. Back up, transfer, or replicate registry data quickly. Free online tool, no registration required."
category: windows
keywords:
- windows registry copy
- registry key backup
- reg copy command
- registry key replication
- registry data transfer
- windows registry management
- registry key export
- registry key import
- windows command line
- regedit command line
features:
- Copy registry keys to new locations.
- Recursively copy registry keys, including subkeys.
- Forcefully copy registry keys without prompting.
- Transfer registry settings between systems.
- Backup registry keys for safekeeping.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# reg copy

> Copy keys and their values in the registry.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-copy>.

- Copy a registry key to a new registry location:

`reg copy {{old_key_name}} {{new_key_name}}`

- Copy a registry key recursively (with all [s]ubkeys) to a new registry location:

`reg copy {{old_key_name}} {{new_key_name}} /s`

- [f]orcefully (without a prompt) copy a registry key:

`reg copy {{old_key_name}} {{new_key_name}} /f`
