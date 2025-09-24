---
title: "Bash Bind - Control Command Hotkeys | Online Free DevTools by Hexmos"
name: bind
path: /freedevtools/tldr/common/bind
canonical: "https://hexmos.com/freedevtools/tldr/common/bind/"
description: "Control command hotkeys with Bash Bind. Customize keyboard shortcuts and manage bash variables efficiently. Free online tool, no registration required."
category: common
keywords:
- bash bind command
- linux hotkey configuration
- command key binding
- bash keyboard shortcut
- shell key mapping
- bash variable management
- keyboard binding configuration
- bash command alias
- linux command customization
- bash key sequence
features:
- List all bound commands and their hotkeys
- Query commands for associated hotkeys
- Bind custom key sequences to commands
- List user-defined key bindings
- Access help documentation for the bind command
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bind

> Bash builtin to manage bash hotkeys and variables.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-bind>.

- List all bound commands and their hotkeys:

`bind {{-p|-P}}`

- Query a command for its hotkey:

`bind -q {{command}}`

- Bind a key:

`bind -x '"{{key_sequence}}":{{command}}'`

- List user defined bindings:

`bind -X`

- Display help:

`help bind`
