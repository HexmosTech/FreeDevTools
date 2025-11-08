---
title: "Reg Delete - Delete Registry Keys | Online Free DevTools by Hexmos"
name: reg-delete
path: "/freedevtools/tldr/windows/reg-delete/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-delete/"
description: "Delete registry keys with Reg Delete. Remove specific keys, values, and subkeys from the Windows registry using this command-line tool. Free online tool, no registration required."
category: windows
keywords:
- registry key delete
- windows registry delete
- reg delete command
- windows reg delete
- registry value removal
- delete registry subkeys
- command line registry
- windows registry editor
- reg delete force
- registry cleanup windows
features:
- Delete specific registry keys
- Remove values from registry keys
- Recursively delete all values under a key
- Forcefully delete registry keys without prompt
- Delete all subkeys and values from a specified key
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reg delete

> Delete keys or their values from the registry.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-delete>.

- Delete a specific registry key:

`reg delete {{key_name}}`

- Delete a [v]alue under a specific key:

`reg delete {{key_name}} /v {{value}}`

- Delete [a]ll [v]alues recursively under the specified key:

`reg delete {{key_name}} /va`

- [f]orcefully (without a prompt) delete [a]ll [v]alues recursively under a key:

`reg delete {{key_name}} /f /va`
