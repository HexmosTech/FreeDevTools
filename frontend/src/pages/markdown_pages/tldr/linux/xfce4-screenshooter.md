---
title: "Screenshooter - Capture Screenshots with XFCE4 | Free DevTools"
name: xfce4-screenshooter
path: /freedevtools/tldr/linux/xfce4-screenshooter
canonical: "https://hexmos.com/freedevtools/tldr/linux/xfce4-screenshooter/"
description: "Capture screenshots instantly with xfce4-screenshooter. Control the capture area and delay, save to file, copy to clipboard and integrate with image editors. Free online tool, no registration required."
category: linux
keywords:
- xfce4-screenshooter screenshot
- linux screenshot tool
- command line screenshot
- xfce4 screenshot capture
- screenshot to clipboard
- timed screenshot linux
- region screenshot xfce4
- active window screenshot
- screenshot save directory
- linux gui screenshot
features:
- Capture the entire screen
- Capture a selected region of the screen
- Capture the active window
- Delay screenshot capture for a specified time
- Save screenshots to a specified directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xfce4-screenshooter

> The XFCE4 screenshot tool.
> More information: <https://docs.xfce.org/apps/xfce4-screenshooter/start>.

- Launch the screenshooter GUI:

`xfce4-screenshooter`

- Take a screenshot of the entire screen and launch the GUI to ask how to proceed:

`xfce4-screenshooter {{[-f|--fullscreen]}}`

- Take a screenshot of the entire screen and save it in the specified directory:

`xfce4-screenshooter {{[-f|--fullscreen]}} {{[-s|--save]}} {{path/to/directory}}`

- Wait some time before taking the screenshot:

`xfce4-screenshooter {{[-d|--delay]}} {{seconds}}`

- Take a screenshot of a region of the screen (select using the mouse):

`xfce4-screenshooter {{[-r|--region]}}`

- Take a screenshot of the active window, and copy it to the clipboard:

`xfce4-screenshooter {{[-w|--window]}} {{[-c|--clipboard]}}`

- Take a screenshot of the active window, and open it with a chosen program:

`xfce4-screenshooter {{[-w|--window]}} {{[-o|--open]}} {{gimp}}`
