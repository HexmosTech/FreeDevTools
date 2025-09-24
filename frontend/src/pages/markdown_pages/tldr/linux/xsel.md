---
title: "Control X11 Clipboard with Xsel | Online Free DevTools by Hexmos"
name: xsel
path: /freedevtools/tldr/linux/xsel
canonical: "https://hexmos.com/freedevtools/tldr/linux/xsel/"
description: "Control clipboard interactions with the Xsel command-line tool.  Manage X11 selections, copy and paste text from the terminal, and manipulate clipboard content easily. Free online tool, no registration required."
category: linux
keywords:
  - X11 clipboard control
  - Linux clipboard management
  - xsel command-line tool
  - Linux copy-paste command
  - X11 selection manipulation
  - clipboard interaction linux
  - command-line clipboard copy
  - terminal clipboard control
  - xsel copy paste linux
  - primary selection control
features:
  - Copy command output to the X11 clipboard
  - Paste clipboard content to the terminal
  - Copy file contents to the X11 clipboard
  - Paste clipboard content to a file
  - Clear the X11 clipboard and primary selection
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
