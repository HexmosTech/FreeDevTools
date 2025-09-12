---
title: "Control QMMP Audio - Play Music | Free DevTools"
name: qmmp
path: /freedevtools/tldr/common/qmmp
canonical: "https://hexmos.com/freedevtools/tldr/common/qmmp/"
description: "Control QMMP audio playback with command-line tools. Manage music, adjust volume, and seek through tracks quickly. Free online tool, no registration required."
category: common
keywords:
- qmmp audio control
- qmmp command line
- music player control
- audio playback manager
- linux audio player
- winamp alternative
- xmms alternative
- qmmp volume control
- qmmp seek command
- qmmp play pause
features:
- Play or pause audio tracks via command line
- Seek forward or backward in a track by specific time
- Adjust volume incrementally via command line
- Play the next or previous audio file in a playlist
- Display current volume status in the terminal
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qmmp

> An audio player with an interface similar to Winamp or XMMS.
> See also: `clementine`, `ncmpcpp`, `cmus`.
> More information: <https://manned.org/qmmp>.

- Launch the GUI:

`qmmp`

- Start or stop the currently playing audio:

`qmmp {{[-t|--play-pause]}}`

- Seek [f]or[w]ar[d]s or [b]ack[w]ar[d]s a specific amount of time in seconds:

`qmmp --seek-{{fwd|bwd}} {{time_in_seconds}}`

- Play the next audio file:

`qmmp --next`

- Play the previous audio file:

`qmmp --previous`

- Display the current volume:

`qmmp --volume-status`

- [inc]rease or [dec]rease the volume of the currently playing audio by 5%:

`qmmp --volume-{{inc|dec}}`
