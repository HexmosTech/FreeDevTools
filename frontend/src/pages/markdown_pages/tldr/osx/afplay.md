---
title: "Audio Player - Play Sound Files with afplay | Online Free DevTools by Hexmos"
name: afplay
path: /freedevtools/tldr/osx/afplay
canonical: "https://hexmos.com/freedevtools/tldr/osx/afplay/"
description: "Play sound files quickly with afplay on MacOS. Control playback rate and duration. Free online tool, no registration required."
category: osx
keywords:
- audio file player
- sound file player
- afplay command line
- macos audio playback
- command line audio player
- audio player mac
- audio control osx
- audio file playback mac
- afplay audio tool
- terminal audio player
features:
- Play sound files from the command line
- Control audio playback rate
- Specify playback duration in seconds
- Play audio on macOS
- Control audio through command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# afplay

> Command-line audio player.
> More information: <https://keith.github.io/xcode-man-pages/afplay.1.html>.

- Play a sound file (waits until playback ends):

`afplay {{path/to/file}}`

- Play a sound file at 2x speed (playback rate):

`afplay --rate {{2}} {{path/to/file}}`

- Play a sound file at half speed:

`afplay --rate {{0.5}} {{path/to/file}}`

- Play the first N seconds of a sound file:

`afplay --time {{seconds}} {{path/to/file}}`
