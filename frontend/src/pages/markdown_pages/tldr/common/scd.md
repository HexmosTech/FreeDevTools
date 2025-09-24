---
title: "Control Directory - Shell Directory Changer | Online Free DevTools by Hexmos"
name: scd
path: /freedevtools/tldr/common/scd
canonical: "https://hexmos.com/freedevtools/tldr/common/scd/"
description: "Control your Shell Directory with scd, a command-line tool for fast navigation. Quickly jump to recent or aliased directories. Free online tool, no registration required."
category: common
keywords:
- shell directory changer
- command line navigation
- terminal file manager
- scd directory navigation
- shell alias manager
- linux directory changer
- macos directory changer
- zsh directory navigation
- bash directory navigation
- shell history navigation
features:
- Index directories recursively
- Change to a directory by path or pattern
- Display a ranked selection menu
- Add aliases for quick directory access
- Navigate directories using aliases
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# scd

> File manager focused on shell integration.
> More information: <https://github.com/cshuaimin/scd>.

- Index paths recursively for the very first run:

`scd -ar {{path/to/directory}}`

- Change to a specific directory:

`scd {{path/to/directory}}`

- Change to a path matching specific patterns:

`scd "{{pattern1 pattern2 ...}}"`

- Show selection menu and ranking of 20 most likely directories:

`scd -v`

- Add a specific alias for the current directory:

`scd --alias={{word}}`

- Change to a directory using a specific alias:

`scd {{word}}`
