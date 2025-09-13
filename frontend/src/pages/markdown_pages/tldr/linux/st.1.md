---
title: "Control Terminal Sessions with st - Simple Terminal Emulator | Free DevTools"
name: st.1
path: /freedevtools/tldr/linux/st.1
canonical: "https://hexmos.com/freedevtools/tldr/linux/st.1/"
description: "Control terminal sessions efficiently with the st terminal emulator.  Open terminals, execute commands, and manage output with ease. Free online tool, no registration required."
category: linux
keywords:
  - terminal emulator linux
  - st terminal command
  - x window system terminal
  - terminal customization linux
  - command line terminal st
  - st terminal shortcuts
  - open terminal window
  - execute command terminal
  - redirect terminal output
  - terminal font size control
features:
  - Open new terminal windows quickly.
  - Customize terminal titles for better organization.
  - Execute commands and redirect output to files.
  - Adjust font size using keyboard shortcuts.
  - Copy and paste text via keyboard shortcuts.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# st

> A simple terminal emulator for the X Window System.
> More information: <https://manned.org/st>.

- Open a terminal:

`st`

- Open a terminal with a specific title:

`st -T {{title}}`

- Open a terminal, execute a given command, and write the output to a file:

`st -o {{path/to/file}} -e {{command argument1 argument2}}`

- Increase/decrease the font size:

`<Ctrl Shift {{PageUp|PageDown}}>`

- Copy/paste from the clipboard:

`<Ctrl Shift {{c|v}}>`
