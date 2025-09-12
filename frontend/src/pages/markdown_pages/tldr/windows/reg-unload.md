---
title: "Reg Unload - Remove Registry Data | Free DevTools"
name: reg-unload
path: /freedevtools/tldr/windows/reg-unload
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg-unload/"
description: "Unload registry data with Reg Unload. Remove registry keys loaded by reg load to manage system configuration. Free online tool, no registration required."
category: windows
keywords:
- registry unload
- registry data removal
- reg unload command
- windows registry management
- windows reg unload
- registry key manipulation
- command line registry
- unload registry key
- windows configuration
- reg command
features:
- Unload specified registry keys
- Remove loaded registry data
- Manage system registry configuration
- Control access to registry keys
- Prevent registry conflicts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# reg unload

> Remove data from the registry that was loaded using the `reg load` command.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg-unload>.

- Remove data from the registry for a specified key:

`reg unload {{key_name}}`
