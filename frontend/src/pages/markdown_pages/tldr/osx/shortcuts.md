---
title: "Shortcuts - Manage MacOS Shortcuts | Free DevTools"
name: shortcuts
path: /freedevtools/tldr/osx/shortcuts
canonical: "https://hexmos.com/freedevtools/tldr/osx/shortcuts/"
description: "Manage MacOS shortcuts quickly with Shortcuts command. List, run, and view shortcuts directly from the command line. Free online tool, no registration required."
category: osx
keywords:
- macos shortcuts manager
- command line shortcuts
- osx shortcuts cli
- apple shortcuts terminal
- shortcuts automation mac
- run shortcuts osx
- list shortcuts macos
- view shortcuts terminal
- manage shortcuts command
- shortcuts app alternative
features:
- Execute specified MacOS shortcuts from the command line.
- List all available shortcuts in the system.
- Display all shortcut folders for organization.
- Open a specified shortcut directly in the Shortcuts editor.
- Automate tasks by integrating shortcuts into scripts.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# shortcuts

> Manage shortcuts.
> Note: You can also use the `Shortcuts` app.
> More information: <https://support.apple.com/guide/shortcuts-mac/run-shortcuts-from-the-command-line-apd455c82f02/mac>.

- Run the specified shortcut (`Count holidays`):

`shortcuts run "{{Count holidays}}"`

- Print all shortcuts:

`shortcuts list`

- Print all shortcut folders:

`shortcuts list --folders`

- Open the specified shortcut (`Count holidays`) in the Shortcuts editor:

`shortcuts view "{{Count holidays}}"`
