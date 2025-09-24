---
title: "Play Audio Files - Control Sound with SoX | Online Free DevTools by Hexmos"
name: play
path: /freedevtools/tldr/common/play
canonical: "https://hexmos.com/freedevtools/tldr/common/play/"
description: "Control audio files with SoX Play. Play, reverse, and adjust the speed of audio files effortlessly using command line. Free online tool, no registration required."
category: common
keywords:
- audio player
- sox play
- sound exchange
- command line audio
- audio file playback
- terminal audio player
- sox audio control
- audio speed control
- audio reverse
- linux audio
features:
- Play audio files from the command line
- Control playback speed of audio files
- Reverse audio playback
- Support various audio formats based on file extension
- Play multiple audio files sequentially
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# play

> Audio player of SoX - Sound eXchange.
> Plays any audio, with audio formats identified by the extension.
> More information: <https://sox.sourceforge.net>.

- Play the given audio file:

`play {{path/to/audio_file}}`

- Play the given audio files:

`play {{path/to/audio_file1 path/to/audio_file2 ...}}`

- Play the given audio at twice the speed:

`play {{path/to/audio_file}} speed 2.0`

- Play the given audio in reverse:

`play {{path/to/audio_file}} reverse`
