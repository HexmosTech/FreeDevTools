---
title: "Ghostty Terminal - Control Cross-Platform Terminal | Online Free DevTools by Hexmos"
name: ghostty
path: /freedevtools/tldr/common/ghostty
canonical: "https://hexmos.com/freedevtools/tldr/common/ghostty/"
description: "Control terminal sessions with Ghostty Terminal, a fast, GPU-accelerated cross-platform terminal emulator. Configure keybindings and browse themes easily. Free online tool, no registration required."
category: common
keywords:
- terminal emulator
- cross-platform terminal
- gpu accelerated terminal
- terminal configuration
- command line terminal
- terminal themes
- keybinding configuration
- ghostty configuration
- linux terminal
- macos terminal
features:
- Open a new Ghostty window
- Execute commands in a new Ghostty window
- List default and configured keybindings
- List available actions
- Browse interactive themes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ghostty

> A fast, feature-rich, and cross-platform terminal emulator that uses platform-native UI and GPU acceleration.
> Note: All options from the configuration file can also be used on the command-line (using `--option=argument`).
> More information: <https://ghostty.org/docs/config/reference>.

- Open a new Ghostty window (not supported on macOS):

`ghostty`

- Run a specific command in a new Ghostty window (not supported on macOS):

`ghostty -e {{command}}`

- List all default and configured keybindings:

`ghostty +list-keybinds`

- List all actions (i.e. what can be triggered via keybindings):

`ghostty +list-actions`

- Browse an interactive list of themes:

`ghostty +list-themes`

- Print the default configuration (including comments):

`ghostty +show-config --default --docs`
