---
title: "Bind Key - Add Zsh Keybindings | Online Free DevTools by Hexmos"
name: bindkey
path: /freedevtools/tldr/common/bindkey
canonical: "https://hexmos.com/freedevtools/tldr/common/bindkey/"
description: "Add keybindings with Bind Key for Zsh shells. Customize shell interactions and boost command-line efficiency. Free online tool, no registration required."
category: common
keywords:
- zsh keybinding
- zsh shortcut
- zsh customization
- bindkey zsh
- zsh hotkey
- shell keybinding
- command line shortcut
- terminal keybinding
- zsh config
- bindkey example
features:
- Bind specific keys to commands
- Create custom keyboard shortcuts
- List available keymaps
- View hotkeys within specific keymaps
- Define key sequences for complex commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bindkey

> Add keybindings to Z-Shell.
> More information: <https://zsh.sourceforge.io/Guide/zshguide04.html>.

- Bind a hotkey to a specific command:

`bindkey "{{^k}}" {{kill-line}}`

- Bind a hotkey to a specific key [s]equence:

`bindkey -s '^o' 'cd ..\n'`

- [l]ist keymaps:

`bindkey -l`

- View the hotkey in a key[M]ap:

`bindkey -M main`
