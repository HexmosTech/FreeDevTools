---
title: "Control X11 Clipboard - Xsel Clipboard Tool | Free DevTools"
name: xsel
path: /freedevtools/tldr/linux/xsel
canonical: "https://hexmos.com/freedevtools/tldr/linux/xsel/"
description: "Control clipboard interactions with Xsel. A powerful X11 selection and clipboard manipulation tool for Linux systems. Free online tool, no registration required."
category: linux
keywords:
  - X11 clipboard manager
  - Linux clipboard tool
  - Xsel clipboard control
  - Command-line clipboard
  - X11 selection tool
  - Copy paste command line
  - Linux copy paste
  - Clipboard manipulation linux
  - X server clipboard
  - Mouse selection clipboard
features:
  - Copy command output to clipboard
  - Copy file content to clipboard
  - Paste clipboard content to terminal
  - Paste clipboard content to file
  - Clear the X11 clipboard
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xsel

> X11 selection and clipboard manipulation tool.
> More information: <https://manned.org/xsel>.

- Use a command's output as input of the clipboard (equivalent to `<Ctrl c>`):

`echo 123 | xsel {{[-ib|--input --clipboard]}}`

- Use the contents of a file as input of the clipboard:

`cat {{path/to/file}} | xsel {{[-ib|--input --clipboard]}}`

- Output the clipboard's contents into the terminal (equivalent to `<Ctrl v>`):

`xsel {{[-ob|--output --clipboard]}}`

- Output the clipboard's contents into a file:

`xsel {{[-ob|--output --clipboard]}} > {{path/to/file}}`

- Clear the clipboard:

`xsel {{[-cb|--clear --clipboard]}}`

- Output the X11 primary selection's contents into the terminal (equivalent to a mouse `<MiddleClick>`):

`xsel {{[-op|--output --primary]}}`
