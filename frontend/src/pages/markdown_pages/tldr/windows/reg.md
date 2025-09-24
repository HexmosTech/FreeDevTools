---
title: "Registry Manager - Control Windows Registry | Online Free DevTools by Hexmos"
name: reg
path: /freedevtools/tldr/windows/reg
canonical: "https://hexmos.com/freedevtools/tldr/windows/reg/"
description: "Control Windows Registry with Registry Manager. Add, delete, query, export, and import registry keys and values quickly. Free online tool, no registration required."
category: windows
keywords:
- windows registry management
- registry key editor
- registry value modification
- windows reg command
- registry compare tool
- registry export windows
- registry import windows
- reg add command
- reg delete command
- registry backup and restore
features:
- Add new registry keys and values
- Delete existing registry keys and values
- Export registry keys to a file
- Import registry keys from a file
- Query and compare registry keys and values
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reg

> Manage keys and their values in the Windows registry.
> Some subcommands such as `add` have their own usage documentation.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/reg>.

- Execute a registry command:

`reg {{command}}`

- View documentation for adding and copying subkeys:

`tldr reg {{add|copy}}`

- View documentation for deleting keys and subkeys:

`tldr reg {{delete|unload}}`

- View documentation for searching, viewing, and comparing keys:

`tldr reg {{compare|query}}`

- View documentation for exporting and importing registry keys not preserving the key ownerships and ACLs:

`tldr reg {{export|import}}`

- View documentation for saving, restoring registry and unloading keys preserving the key ownerships and ACLs:

`tldr reg {{save|restore|load|unload}}`

- Display help:

`reg /?`

- Display help for a specific command:

`reg {{command}} /?`
