---
title: "Control Xclip Clipboard - Linux Data Transfer | Free DevTools"
name: xclip
path: /freedevtools/tldr/linux/xclip
canonical: "https://hexmos.com/freedevtools/tldr/linux/xclip/"
description: "Control clipboard data with Xclip, a versatile Linux command-line tool. Transfer data between applications efficiently. Free online tool, no registration required."
category: linux
keywords:
- xclip clipboard
- linux clipboard manager
- x11 clipboard
- command line clipboard
- clipboard data transfer
- linux data transfer
- xclip copy paste
- terminal clipboard
- primary selection
- system clipboard
features:
- Copy command output to X11 clipboard
- Paste clipboard content to console
- Transfer data between applications
- Manipulate primary and secondary selections
- Integrate with system clipboard for cut and paste
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xclip

> X11 clipboard manipulation tool, similar to `xsel`.
> Handles the X primary and secondary selections, plus the system clipboard (`<Ctrl c>`/`<Ctrl v>`).
> See also: `wl-copy`.
> More information: <https://manned.org/xclip>.

- Copy the output from a command to the X11 primary selection area (clipboard):

`echo 123 | xclip`

- Copy the output from a command to a given X11 selection area:

`echo 123 | xclip {{[-se|-selection]}} {{primary|secondary|clipboard}}`

- Copy the output from a command to the system clipboard, using short notation:

`echo 123 | xclip {{[-se|-selection]}} {{[c|clipboard]}}`

- Copy the contents of a file into the system clipboard:

`xclip {{[-se|-selection]}} {{[c|clipboard]}} {{input_file.txt}}`

- Copy the contents of a PNG into the system clipboard (can be pasted in other programs correctly):

`xclip {{[-se|-selection]}} {{[c|clipboard]}} {{[-t|-target]}} image/png {{input_file.png}}`

- Copy the user input in the console into the system clipboard:

`xclip {{[-i|-in]}}`

- Paste the contents of the X11 primary selection area to the console:

`xclip {{[-o|-out]}}`

- Paste the contents of the system clipboard to the console:

`xclip {{[-o|-out]}} {{[-se|-selection]}} {{[c|clipboard]}}`
