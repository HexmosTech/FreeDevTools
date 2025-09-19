---
title: "Wezterm Emulator - Create Terminal Windows | Online Free DevTools by Hexmos"
name: wezterm
path: /freedevtools/tldr/common/wezterm
canonical: "https://hexmos.com/freedevtools/tldr/common/wezterm/"
description: "Create terminal windows with Wezterm Emulator, a cross-platform terminal multiplexer. Enhance your command-line workflow with session recording and image output. Free online tool, no registration required."
category: common
keywords:
- terminal emulator
- cross platform terminal
- wezterm multiplexer
- terminal session recording
- wezterm configuration
- ssh terminal
- terminal image output
- terminal window manager
- terminal emulator linux
- terminal emulator macos
features:
- Create new wezterm terminal windows
- Establish SSH sessions in new windows
- Connect to the wezterm multiplexer server
- Output images directly to the terminal
- Record and replay terminal sessions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wezterm

> Wez's Terminal Emulator - a powerful cross-platform terminal emulator and multiplexer.
> Some subcommands such as `cli` have their own usage documentation.
> More information: <https://wezterm.org/cli/general>.

- Start a new Wezterm process and create a window:

`wezterm`

- Establish an `ssh` session in a new Wezterm window:

`wezterm ssh {{user}}@{{host}}:{{port}}`

- Connect to the multiplexer (`wezterm-mux-server`):

`wezterm connect {{domain_name}}`

- Output an image to the terminal:

`wezterm imgcat {{path/to/image}}`

- Record a terminal session as an asciicast (by default recordings are saved to `/tmp`):

`wezterm record`

- Replay an asciicast terminal session:

`wezterm replay {{path/to/cast_file}}`

- Specify the configuration file to use (overrides the normal configuration file resolution):

`wezterm --config-file {{path/to/config_file}}`

- Display help:

`wezterm help`
