---
title: "Screenshot Capture - Create Linux Screenshots | Online Free DevTools by Hexmos"
name: maim
path: "/freedevtools/tldr/linux/maim/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/maim/"
description: "Capture screenshots with maim, a lightweight Linux screenshot utility. Easily save screen captures to files or the clipboard. Free online tool, no registration required."
category: linux
keywords:
- linux screenshot capture
- command line screenshot
- maim screenshot tool
- image capture utility
- screenshot to file
- screenshot to clipboard
- terminal screenshot linux
- linux image grab
- active window screenshot
- region selection screenshot
features:
- Capture full screen screenshots
- Select and capture specific screen regions
- Save screenshots to specified file paths
- Capture screenshots of active windows
- Copy screenshots directly to the clipboard
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# maim

> Screenshot utility.
> More information: <https://manned.org/maim>.

- Capture a screenshot and save it to the given path:

`maim {{path/to/screenshot.png}}`

- Capture a screenshot of the selected region:

`maim {{[-s|--select]}} {{path/to/screenshot.png}}`

- Capture a screenshot of the selected region and save it in the clipboard (requires `xclip`):

`maim {{[-s|--select]}} | xclip {{[-se|-selection]}} {{[c|clipboard]}} {{[-t|-target]}} image/png`

- Capture a screenshot of the current active window (requires `xdotool`):

`maim {{[-i|--window]}} $(xdotool getactivewindow) {{path/to/screenshot.png}}`
