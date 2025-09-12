---
title: "Loadkeys Command - Control Linux Keyboard Layouts | Free DevTools"
name: loadkeys
path: /freedevtools/tldr/linux/loadkeys
canonical: "https://hexmos.com/freedevtools/tldr/linux/loadkeys/"
description: "Control Linux keyboard layouts with the loadkeys command.  Manage keymaps,  set specific layouts for consoles, and create custom keymaps. Free online tool, no registration required."
category: linux
keywords:
  - linux keymap command
  - loadkeys linux
  - linux keyboard layout
  - console keymap
  - linux console configuration
  - kernel keymap
  - loadkeys tutorial
  - set keyboard layout linux
  - manage keymaps linux
  - customize keyboard linux
features:
  - Load default or specific keyboard layouts.
  - Create kernel source and binary keymap tables.
  - Set keymaps for individual consoles (tty).
  - Load keymaps from specified files.
  - Suppress output during keymap loading.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# loadkeys

> Load the kernel keymap for the console.
> See also: `localectl`.
> More information: <https://manned.org/loadkeys>.

- Load a specific keyboard layout for the current console:

`sudo loadkeys {{en|de|fi|dvorak|defkeymap|...}}`

- Load a default keymap:

`sudo loadkeys {{[-d|--default]}}`

- Create a kernel source table:

`loadkeys {{[-m|--mktable]}}`

- Create a binary keymap:

`loadkeys {{[-b|--bkeymap]}}`

- Search and parse keymap without action:

`loadkeys {{[-p|--parse]}}`

- Load the keymap suppressing all output:

`loadkeys {{[-q|--quiet]}}`

- Set a keymap for a specific console:

`sudo loadkeys {{[-C|--console]}} {{/dev/ttyN}} {{uk}}`

- Load a keymap from the specified file for the console:

`loadkeys {{[-C|--console]}} {{/dev/ttyN}} /{{path/to/file}}`
