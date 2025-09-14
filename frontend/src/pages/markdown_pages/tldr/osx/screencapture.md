---
title: "Screencapture - Create Screenshots and Recordings | Free DevTools"
name: screencapture
path: /freedevtools/tldr/osx/screencapture
canonical: "https://hexmos.com/freedevtools/tldr/osx/screencapture/"
description: "Create screenshots and screen recordings with Screencapture. Capture your screen with options for delay, cursor, and area selection. Free online tool, no registration required."
category: osx
keywords:
- screenshot capture macos
- screen recording osx
- macos screenshot command line
- osx screen capture tool
- screencapture video recording
- timed screenshot macos
- selected area screenshot
- command line screenshot
- macos screen grab utility
- screencapture with cursor
features:
- Capture full screen or selected area
- Record screen activity to video file
- Capture screenshots with a specified delay
- Include or exclude the mouse cursor in captures
- Open screenshots directly in Preview application
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# screencapture

> Utility to take screenshots and screen recordings.
> More information: <https://keith.github.io/xcode-man-pages/screencapture.1.html>.

- Take a screenshot and save it to a file:

`screencapture {{path/to/file.png}}`

- Take a screenshot including the mouse cursor:

`screencapture -C {{path/to/file.png}}`

- Take a screenshot and open it in Preview, instead of saving:

`screencapture -P`

- Take a screenshot of a selected rectangular area:

`screencapture -i {{path/to/file.png}}`

- Take a screenshot after a delay:

`screencapture -T {{seconds}} {{path/to/file.png}}`

- Make a screen recording and save it to a file:

`screencapture -v {{path/to/file.mp4}}`
