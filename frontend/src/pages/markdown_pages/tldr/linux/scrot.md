---
title: "Scrot Screenshot - Capture Screens Easily | Online Free DevTools by Hexmos"
name: scrot
path: /freedevtools/tldr/linux/scrot
canonical: "https://hexmos.com/freedevtools/tldr/linux/scrot/"
description: "Capture screenshots easily with scrot.  Take full-screen, region-specific, or window-focused screenshots with simple commands. Free online tool, no registration required."
category: linux
keywords:
  - screenshot capture command
  - linux screenshot tool
  - scrot command line
  - screen capture utility
  - image capture scrot
  - command line screenshot
  - interactive screenshot
  - focused window capture
  - timed screenshot scrot
  - desktop screenshot capture
features:
  - Capture full-screen screenshots
  - Capture screenshots of selected regions
  - Capture screenshots of the focused window
  - Set custom filenames and save locations
  - Use a countdown timer before capturing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# scrot

> Screen capture utility.
> More information: <https://github.com/resurrecting-open-source-projects/scrot>.

- Capture a screenshot and save it to the current directory with the current date as the filename:

`scrot`

- Capture a screenshot and save it as `capture.png`:

`scrot {{capture.png}}`

- Capture a screenshot interactively:

`scrot --select`

- Capture a screenshot interactively without exiting on keyboard input, press `<Esc>` to exit:

`scrot --select --ignorekeyboard`

- Capture a screenshot interactively delimiting the region with a colored line:

`scrot --select --line color={{x11_color|rgb_color}}`

- Capture a screenshot from the currently focused window:

`scrot --focused`

- Display a countdown of 10 seconds before taking a screenshot:

`scrot --count --delay {{10}}`
