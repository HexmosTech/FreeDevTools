---
title: "Speaker-Test - Generate Audio Test Tones | Online Free DevTools by Hexmos"
name: speaker-test
path: "/freedevtools/tldr/linux/speaker-test/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/speaker-test/"
description: "Generate audio test tones with Speaker-Test. Verify audio output, troubleshoot sound issues and ensure proper speaker function. Free online tool, no registration required."
category: linux
keywords:
  - audio test tone generator
  - speaker test command
  - ALSA speaker test
  - sound card test
  - command line audio test
  - linux audio test
  - audio troubleshooting tool
  - audio calibration tool
  - speaker diagnostics
  - audio device verification
features:
  - Generate pink noise test tones
  - Generate sine wave test tones
  - Play predefined WAV file test tones
  - Specify custom WAV file for testing
  - Test default audio output devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# speaker-test

> Speaker test tone generator for ALSA.
> See also: `aplay`, `arecord`, `amixer`.
> More information: <https://manned.org/speaker-test>.

- Test the default speakers with pink noise:

`speaker-test`

- Test the default speakers with a sine wave:

`speaker-test {{[-t|--test]}} sine {{[-f|--frequency]}} {{frequency}}`

- Test the default speakers with a predefined WAV file:

`speaker-test {{[-t|--test]}} wav`

- Test the default speakers with a WAV file:

`speaker-test {{[-t|--test]}} wav {{[-w|--wavfile]}} {{path/to/file}}`
