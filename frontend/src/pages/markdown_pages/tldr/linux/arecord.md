---
title: "Record Audio - Control Audio Recording with arecord | Online Free DevTools by Hexmos"
name: arecord
path: /freedevtools/tldr/linux/arecord
canonical: "https://hexmos.com/freedevtools/tldr/linux/arecord/"
description: "Control audio recording with arecord. Record WAV and MP3 formats using command line. Free online tool, no registration required."
category: linux
keywords:
  - wav audio recording
  - mp3 audio recording
  - alsa soundcard recording
  - command line audio recorder
  - linux audio recording
  - arecord audio capture
  - arecord sound recorder
  - record audio snippet
  - record microphone audio
  - arecord duration control
features:
  - Record audio in WAV format.
  - Record audio in MP3 format using LAME encoder.
  - List available sound cards and audio devices.
  - Set recording duration.
  - Interact with the recording process using space or enter to pause.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# arecord

> Sound recorder for ALSA soundcard driver.
> More information: <https://manned.org/arecord>.

- Record a snippet in "CD" quality (finish with `<Ctrl c>` when done):

`arecord {{[-vv|--verbose --verbose]}} {{[-f|--format]}} cd {{path/to/file.wav}}`

- Record a snippet in "CD" quality, with a fixed duration of 10 seconds:

`arecord {{[-vv|--verbose --verbose]}} {{[-f|--format]}} cd {{[-d|--duration]}} {{10}} {{path/to/file.wav}}`

- Record a snippet and save it as an MP3 (finish with `<Ctrl c>` when done):

`arecord {{[-vv|--verbose --verbose]}} {{[-f|--format]}} cd {{[-t|--file-type]}} raw | lame -r - {{path/to/file.mp3}}`

- List all sound cards and digital audio devices:

`arecord {{[-l|--list-devices]}}`

- Allow interactive interface (e.g. use `<Space>` or `<Enter>` to play or pause):

`arecord {{[-i|--interactive]}}`

- Test your microphone by recording a 5 second sample and playing it back:

`arecord {{[-d|--duration]}} 5 test-mic.wav && aplay test-mic.wav && rm test-mic.wav`
