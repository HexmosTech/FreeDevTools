---
title: "OBS Studio - Control Video Recording & Streaming | Online Free DevTools by Hexmos"
name: obs
path: "/freedevtools/tldr/common/obs/"
canonical: "https://hexmos.com/freedevtools/tldr/common/obs/"
description: "Control video recording and live streaming with OBS Studio. Start recording, streaming, and manage replay buffers using command line. Free online tool, no registration required."
category: common
keywords:
- video recording
- live streaming
- obs studio
- obs command line
- streaming software
- screen recorder
- video broadcaster
- linux streaming
- macos streaming
- windows streaming
features:
- Start recording video automatically on launch
- Begin live streaming directly from the command line
- Automatically start the replay buffer upon program start
- Minimize OBS Studio to the system tray on startup
- Launch OBS in portable mode for flexibility
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# obs

> Open Broadcaster Software.
> Video recording and livestreaming program.
> More information: <https://obsproject.com/kb/launch-parameters>.

- Launch OBS:

`obs`

- Launch OBS in portable mode:

`obs {{[-p|--portable]}}`

- Automatically start recording a video on launch:

`obs --startrecording`

- Automatically start the replay buffer on launch:

`obs --startreplaybuffer`

- Automatically start streaming on launch:

`obs --startstreaming`

- Minimise to the system tray on launch:

`obs --minimize-to-tray`

- Make the log more verbose (for debugging):

`obs --verbose`
