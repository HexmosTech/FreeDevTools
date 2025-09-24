---
title: "Reg Query - Display Registry Values | Online Free DevTools by Hexmos"
name: reg-query
path: /freedevtools/tldr/windows/reg-query
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-query/"
description: "Display registry values with Reg Query, a powerful Windows command-line tool. Retrieve specific values, search keys, and manage registry settings easily. Free online tool, no registration required."
category: windows
keywords:
- registry value query
- windows registry access
- reg query command
- registry key retrieval
- windows registry search
- command line registry tool
- reg query windows
- registry data extraction
- cmd registry lookup
- registry value display
features:
- Display all values of a specified registry key.
- Retrieve the value of a specific registry key.
- Search for registry keys and values matching a pattern.
- Filter registry queries by data type.
- Perform case-sensitive, exact-match registry searches.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reg query

> Display the values of keys and subkeys in the registry.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-query>.

- Display all values of a key:

`reg query {{key_name}}`

- Display a specific [v]alue of a key:

`reg query {{key_name}} /v {{value}}`

- Display all values of a key and its [s]ubkeys:

`reg query {{key_name}} /s`

- Search [f]or keys and values matching a specific pattern:

`reg query {{key_name}} /f "{{query_pattern}}"`

- Display a value of a key matching a specified data [t]ype:

`reg query {{key_name}} /t REG_{{SZ|MULTI_SZ|EXPAND_SZ|DWORD|BINARY|NONE}}`

- Only search in [d]ata:

`reg query {{key_name}} /d`

- Only search in [k]ey names:

`reg query {{key_name}} /f "{{query_pattern}}" /k`

- [c]ase-sensitively search for an [e]xact match:

`reg query {{key_name}} /c /e`
