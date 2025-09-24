---
title: "Control Terminal - Set Options | Online Free DevTools by Hexmos"
name: stty
path: /freedevtools/tldr/st/stty
canonical: "https://hexmos.com/freedevtools/tldr/st/stty/"
description: "Control terminal settings with stty. Set terminal size, echoing, and modes, instantly using command line. Free online tool, no registration required."
category: common
keywords:
- terminal settings
- stty command
- linux terminal control
- macos terminal settings
- unix terminal configuration
- terminal size adjustment
- character echo management
- raw mode control
- cooked mode control
- terminal speed configuration
features:
- Display current terminal size
- Set number of rows and columns
- Get device transfer speed
- Reset terminal to sane defaults
- Control character echoing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# stty

> Set options for a terminal device interface.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/stty-invocation.html>.

- Display current terminal size:

`stty size`

- Display all settings for the current terminal:

`stty {{[-a|--all]}}`

- Set the number of rows or columns:

`stty {{rows|cols}} {{count}}`

- Get the actual transfer speed of a device:

`stty {{[-F|--file]}} {{path/to/device_file}} speed`

- Reset all modes to reasonable values for the current terminal:

`stty sane`

- Switch between raw and normal mode:

`stty {{raw|cooked}}`

- Turn character echoing off or on:

`stty {{-echo|echo}}`

- Display help:

`stty --help`
