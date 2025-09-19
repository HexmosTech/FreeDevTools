---
title: "Scriptreplay - Replay Terminal Sessions | Online Free DevTools by Hexmos"
name: scriptreplay
path: /freedevtools/tldr/linux/scriptreplay
canonical: "https://hexmos.com/freedevtools/tldr/linux/scriptreplay/"
description: "Replay terminal sessions accurately with Scriptreplay. Analyze recorded terminal activity and reproduce it at varying speeds. Free online tool, no registration required."
category: linux
keywords:
  - terminal session replay
  - typescript playback
  - command line replay
  - script recording analysis
  - terminal recording tool
  - script timing analysis
  - tty recording replay
  - command replay tool
  - shell session replay
  - scriptreplay tool
features:
  - Replay terminal sessions at original speed
  - Adjust playback speed for faster or slower replay
  - Analyze and reproduce recorded terminal activity
  - Support replay of typescript files created by the `script` command
  - Replay terminal interaction for auditing and debugging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scriptreplay

> Replay a typescript created by the `script` command to `stdout`.
> More information: <https://manned.org/scriptreplay>.

- Replay a typescript at the speed it was recorded:

`scriptreplay {{path/to/timing_file}} {{path/to/typescript}}`

- Replay a typescript at double the original speed:

`scriptreplay {{path/to/timingfile}} {{path/to/typescript}} 2`

- Replay a typescript at half the original speed:

`scriptreplay {{path/to/timingfile}} {{path/to/typescript}} 0.5`
