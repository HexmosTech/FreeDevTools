---
title: "Pw-cat - Play and Record Audio | Online Free DevTools by Hexmos"
name: pw-cat
path: "/freedevtools/tldr/linux/pw-cat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-cat/"
description: "Play audio files with pw-cat, a powerful PipeWire command-line tool. Control audio playback and recording on Linux systems with ease. Free online tool, no registration required."
category: linux
keywords:
- PipeWire audio player
- Linux audio recording
- Command-line audio tool
- pw-cat audio control
- WAV file playback
- Audio sample rate control
- Audio volume adjustment
- PipeWire audio utility
- Linux command-line audio
- Audio recording tool
features:
- Play audio files through PipeWire
- Record audio files through PipeWire
- Control audio sample rate
- Adjust audio volume levels
- Specify resampler quality for playback
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pw-cat

> Play and record audio files through PipeWire.
> See also: `wpctl`, `pw-cli`.
> More information: <https://docs.pipewire.org/page_man_pw-cat_1.html>.

- Play a WAV file over the default target:

`pw-cat {{[-p|--playback]}} {{path/to/file.wav}}`

- Play a WAV file with a specified resampler quality (4 by default):

`pw-cat {{[-q|--quality]}} {{0..15}} {{[-p|--playback]}} {{path/to/file.wav}}`

- Record a sample recording at a volume level of 125%:

`pw-cat {{[-r|--record]}} --volume {{1.25}} {{path/to/file.wav}}`

- Record a sample recording using a different sample rate:

`pw-cat {{[-r|--record]}} --rate {{6000}} {{path/to/file.wav}}`

- Display help:

`pw-cat {{[-h|--help]}}`
