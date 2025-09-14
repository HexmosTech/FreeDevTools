---
title: "Record Screen - Capture Screen Recordings with Byzanz-record | Free DevTools"
name: byzanz-record
path: /freedevtools/tldr/linux/byzanz-record
canonical: "https://hexmos.com/freedevtools/tldr/linux/byzanz-record/"
description: "Record screen activity with Byzanz-record. Create GIFs, FLVs, and more with this simple screen recording command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - Screen recording
  - Byzanz-record screen capture
  - GIF recorder
  - FLV recorder
  - Command line screen recorder
  - Linux screen recording
  - Terminal screen recorder
  - Byzanz animation
  - Screen capture tool
  - Video capture
features:
  - Capture screen recordings to various formats
  - Control recording duration
  - Delay recording start time
  - Display verbose recording information
  - Record specific areas of the screen
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# byzanz-record

> Record the screen.
> More information: <https://manned.org/byzanz-record>.

- Record the screen and write the recording to a file (by default, `byzanz-record` will only record for 10 seconds):

`byzanz-record {{path/to/file.[byzanz|flv|gif|ogg|ogv|webm]}}`

- Show information while and after recording:

`byzanz-record {{[-v|--verbose]}} {{path/to/file.[byzanz|flv|gif|ogg|ogv|webm]}}`

- Record the screen for a minute:

`byzanz-record {{[-d|--duration]}} 60 {{path/to/file.[byzanz|flv|gif|ogg|ogv|webm]}}`

- Delay recording for 10 seconds:

`byzanz-record --delay 10 {{path/to/file.[byzanz|flv|gif|ogg|ogv|webm]}}`
