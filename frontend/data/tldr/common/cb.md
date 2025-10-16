---
title: "Clipboard Manager - Control Terminal Clipboard | Online Free DevTools by Hexmos"
name: cb
path: "/freedevtools/tldr/common/cb/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cb/"
description: "Control clipboard actions easily with Clipboard Manager. Copy, paste, and manage clipboard history directly from your terminal. Free online tool, no registration required."
category: common
keywords:
- clipboard manager
- terminal clipboard
- command line clipboard
- copy paste command line
- clipboard history linux
- clipboard manager macos
- clipboard manager windows
- shell clipboard
- cb command
- terminal copy paste
features:
- Copy files to the system clipboard.
- Paste clipboard content to the terminal.
- View and manage clipboard history.
- Pipe data directly to the clipboard.
- Show detailed clipboard information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cb

> Cut, copy, and paste anything in the terminal.
> More information: <https://github.com/Slackadays/Clipboard>.

- Show all clipboards:

`cb`

- Copy a file to the clipboard:

`cb copy {{path/to/file}}`

- Copy some text to the clipboard:

`cb copy "{{Some example text}}"`

- Copy piped data to the clipboard:

`echo "{{Some example text}}" | cb`

- Paste clipboard content:

`cb paste`

- Pipe out clipboard content:

`cb | cat`

- Show clipboard history:

`cb history`

- Show clipboard information:

`cb info`
