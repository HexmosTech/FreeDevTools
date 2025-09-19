---
title: "aplay Sound Player - Play Audio Files | Online Free DevTools by Hexmos"
name: aplay
path: /freedevtools/tldr/linux/aplay
canonical: "https://hexmos.com/freedevtools/tldr/linux/aplay/"
description: "Play audio files with aplay, a versatile command-line sound player.  Control audio playback, specifying duration, sample rate, and format. Free online tool, no registration required."
category: linux
keywords:
  - audio file player
  - linux audio player
  - alsa audio player
  - command line audio player
  - aplay audio playback
  - raw audio playback
  - audio file format
  - sample rate control
  - audio channel control
  - aplay command
features:
  - Plays various audio file formats automatically.
  - Allows specifying playback duration.
  - Enables control over sample rate and bit depth.
  - Supports raw audio file playback with format specification.
  - Lists available audio devices for playback.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aplay

> Sound player for ALSA soundcard driver.
> More information: <https://manned.org/aplay>.

- Play a specific file (sampling rate, bit depth, etc. will be automatically determined for the file format):

`aplay {{path/to/file}}`

- Play the first 10 seconds of a specific file at 2500 Hz:

`aplay {{[-d|--duration]}} {{10}} {{[-r|--rate]}} {{2500}} {{path/to/file}}`

- Play the raw file as a 22050 Hz, mono, 8-bit, Mu-Law `.au` file:

`aplay {{[-c|--channels]}} {{1}} {{[-t|--file-type]}} {{raw}} {{[-r|--rate]}} {{22050}} {{[-f|--format]}} {{mu_law}} {{path/to/file}}`

- List available audio devices:

`aplay {{[-l|--list-devices]}}`
