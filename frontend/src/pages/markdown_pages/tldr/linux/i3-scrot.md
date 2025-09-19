---
title: "i3-scrot Screenshot - Capture Screen on i3 | Online Free DevTools by Hexmos"
name: i3-scrot
path: /freedevtools/tldr/linux/i3-scrot
canonical: "https://hexmos.com/freedevtools/tldr/linux/i3-scrot/"
description: "Capture screenshots with i3-scrot, a wrapper for scrot. Take full-screen, window, or selection screenshots and copy to clipboard. Free online tool, no registration required."
category: linux
keywords:
  - i3 screenshot
  - i3 window manager screenshot
  - linux screenshot
  - scrot wrapper
  - i3-scrot command
  - screenshot utility i3
  - command-line screenshot
  - i3 screenshot tool
  - desktop screenshot i3
  - full-screen screenshot i3
features:
  - Capture full-screen screenshots
  - Capture screenshots of individual windows
  - Capture screenshots of selected regions
  - Copy screenshots to the clipboard
  - Utilize a configurable save location via config file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# i3-scrot

> Wrapper script around the screenshot utility `scrot` for the i3 window manager.
> The default save location is `~/Pictures` and can be changed in `~/.config/i3-scrot.conf`.
> More information: <https://gitlab.manjaro.org/packages/community/i3/i3-scrot>.

- Capture a screenshot of the whole screen and save it to the default directory:

`i3-scrot`

- Capture a screenshot of the active window:

`i3-scrot --window`

- Capture a screenshot of a specific rectangular selection:

`i3-scrot --select`

- Capture a screenshot of the whole screen and copy it to the clipboard:

`i3-scrot --desk-to-clipboard`

- Capture a screenshot of the active window and copy it to the clipboard:

`i3-scrot --window-to-clipboard`

- Capture a screenshot of a specific selection and copy it to the clipboard:

`i3-scrot --select-to-clipboard`

- Capture a screenshot of the active window after a delay of 5 seconds:

`i3-scrot --window {{5}}`
