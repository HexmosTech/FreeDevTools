---
title: "Control urxvt Terminal - Customize Terminal Emulator | Online Free DevTools by Hexmos"
name: urxvt
path: /freedevtools/tldr/linux/urxvt
canonical: "https://hexmos.com/freedevtools/tldr/linux/urxvt/"
description: "Control terminal behavior with urxvt, a highly customizable terminal emulator. Tailor your command-line experience with advanced configurations. Free online tool, no registration required."
category: linux
keywords:
  - urxvt terminal
  - customize terminal
  - terminal emulator
  - linux terminal
  - command line interface
  - rxvt-unicode
  - terminal configuration
  - terminal appearance
  - command execution
  - shell integration
features:
  - Open new urxvt terminal windows
  - Execute commands in specific directories
  - Run commands within a new terminal instance
  - Keep terminal windows open after command execution
  - Integrate commands within a sh shell
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# urxvt

> Rxvt-unicode.
> A customizable terminal emulator.
> More information: <https://manned.org/urxvt>.

- Open a new urxvt window:

`urxvt`

- Run in a specific directory:

`urxvt -cd {{path/to/directory}}`

- Run a command in a new urxvt window:

`urxvt -e {{command}}`

- Run a command and keep the window open:

`urxvt --hold -e {{command}}`

- Run a command within the `sh` shell:

`urxvt -e {{sh}} -c {{command}}`
