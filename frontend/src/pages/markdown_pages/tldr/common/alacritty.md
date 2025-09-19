---
title: "Alacritty Terminal - Control Terminal Emulation | Online Free DevTools by Hexmos"
name: alacritty
path: /freedevtools/tldr/common/alacritty
canonical: "https://hexmos.com/freedevtools/tldr/common/alacritty/"
description: "Control terminal emulation with Alacritty Terminal Emulator. Manage windows, execute commands, and configure profiles easily. Free online tool, no registration required."
category: common
keywords:
- alacritty terminal emulator
- gpu accelerated terminal
- cross platform terminal
- command line terminal
- alacritty configuration
- terminal window management
- linux terminal
- macos terminal
- windows terminal
- alacritty commands
features:
- Launch a new Alacritty terminal window.
- Start the Alacritty daemon in the background.
- Create new windows within an existing Alacritty process.
- Specify a working directory for the shell.
- Execute commands directly in a new Alacritty window.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# alacritty

> Cross-platform, GPU-accelerated terminal emulator.
> More information: <https://manned.org/alacritty>.

- Start a new Alacritty process and create a window:

`alacritty`

- Start the Alacritty daemon (without creating a window):

`alacritty --daemon`

- Create a new window using the already running Alacritty process:

`alacritty msg create-window`

- Start the shell in a specific directory (also works with `alacritty msg create-window`):

`alacritty --working-directory {{path/to/directory}}`

- Execute a command in a new Alacritty window (also works with `alacritty msg create-window`):

`alacritty {{[-e|--command]}} {{command}}`

- Use an alternative configuration file (defaults to `$XDG_CONFIG_HOME/alacritty/alacritty.toml`):

`alacritty --config-file {{path/to/config.toml}}`
