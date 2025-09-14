---
title: "Screenshot Capture - Take Screenshots with Gnome | Free DevTools"
name: gnome-screenshot
path: /freedevtools/tldr/linux/gnome-screenshot
canonical: "https://hexmos.com/freedevtools/tldr/linux/gnome-screenshot/"
description: "Capture screenshots instantly with Gnome Screenshot, a powerful linux tool. Save to file or clipboard, delay capture, and launch GUI. Free online tool, no registration required."
category: linux
keywords:
- linux screenshot capture
- gnome screenshot tool
- command line screenshot
- screenshot to file linux
- screenshot to clipboard linux
- delayed screenshot linux
- gnome screenshot gui
- linux image capture
- screenshot utility linux
- linux terminal screenshot
features:
- Capture full screen, specific windows, or selected areas.
- Save screenshots directly to a specified file path.
- Copy screenshots to the clipboard for easy sharing.
- Delay screenshot capture by a specified number of seconds.
- Launch the interactive GNOME Screenshot graphical interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gnome-screenshot

> Capture the screen, a window, or a user-defined area and save the image to a file.
> More information: <https://manned.org/gnome-screenshot>.

- Take a screenshot and save it to the default location, normally `~/Pictures`:

`gnome-screenshot`

- Take a screenshot and save it to the named file location:

`gnome-screenshot {{[-f|--file]}} {{path/to/file}}`

- Take a screenshot and save it to the clipboard:

`gnome-screenshot {{[-c|--clipboard]}}`

- Take a screenshot after the specified number of seconds:

`gnome-screenshot {{[-d|--delay]}} {{5}}`

- Launch the GNOME Screenshot GUI:

`gnome-screenshot {{[-i|--interactive]}}`

- Take a screenshot of the current window and save it to the specified file location:

`gnome-screenshot {{[-w|--window]}} {{[-f|--file]}} {{path/to/file}}`

- Take a screenshot after the specified number of seconds and save it to the clipboard:

`gnome-screenshot {{[-d|--delay]}} {{10}} {{[-c|--clipboard]}}`

- Display the version:

`gnome-screenshot --version`
