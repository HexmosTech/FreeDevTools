---
title: "Registry Add - Create Registry Keys | Online Free DevTools by Hexmos"
name: reg-add
path: "/freedevtools/tldr/windows/reg-add/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-add/"
description: "Create registry keys with Registry Add on Windows. Manage registry values, force overwrites, and specify data types quickly. Free online tool, no registration required."
category: windows
keywords:
- windows registry add
- registry key creation
- reg add command
- registry value editor
- windows registry editor
- reg add windows 10
- registry data types
- reg add overwrite
- registry command line tool
- windows regedit alternative
features:
- Add new registry keys on Windows
- Create new values under specific keys
- Specify data types for new registry values
- Forcefully overwrite existing registry values
- Manage Windows registry via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reg add

> Add new keys and their values to the registry.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-add>.

- Add a new registry key:

`reg add {{key_name}}`

- Add a new [v]alue under a specific key:

`reg add {{key_name}} /v {{value}}`

- Add a new value with specific [d]ata:

`reg add {{key_name}} /d {{data}}`

- Add a new value to a key with a specific data [t]ype:

`reg add {{key_name}} /t REG_{{SZ|MULTI_SZ|DWORD_BIG_ENDIAN|DWORD|BINARY|DWORD_LITTLE_ENDIAN|LINK|FULL_RESOURCE_DESCRIPTOR|EXPAND_SZ}}`

- [f]orcefully (without a prompt) overwrite the existing registry value:

`reg add {{key_name}} /f`
