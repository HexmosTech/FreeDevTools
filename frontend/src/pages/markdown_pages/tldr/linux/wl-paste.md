---
title: "Paste Clipboard - Control Wayland Clipboard | Free DevTools"
name: wl-paste
path: /freedevtools/tldr/unknown/wl-paste
canonical: "https://hexmos.com/freedevtools/tldr/unknown/wl-paste/"
description: "Control content pasting with wl-paste. Manage Wayland clipboard access and pipe output to other commands efficiently. Free online tool, no registration required."
category: unknown
keywords:
- wayland clipboard paste
- clipboard content manager
- wl-paste wayland
- wayland paste command
- command line clipboard
- linux clipboard tool
- paste to file wayland
- primary clipboard wayland
- wayland copy paste
- clipboard data handling
features:
- Paste content from the Wayland clipboard.
- Paste the contents of the primary selection.
- Write clipboard content to a specified file.
- Pipe clipboard data to another command.
- Access clipboard via command-line interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wl-paste

> Paste content in Wayland clipboard.
> See also: `wl-copy`, `xclip`.
> More information: <https://github.com/bugaevc/wl-clipboard>.

- Paste the contents of the clipboard:

`wl-paste`

- Paste the contents of the primary clipboard (highlighted text):

`wl-paste --primary`

- Write the contents of the clipboard to a file:

`wl-paste > {{path/to/file}}`

- Pipe the contents of the clipboard to a command:

`wl-paste | {{command}}`
