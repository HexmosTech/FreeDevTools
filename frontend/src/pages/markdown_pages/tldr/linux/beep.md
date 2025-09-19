---
title: "Beep Generator - Create PC Speaker Sounds | Online Free DevTools by Hexmos"
name: beep
path: /freedevtools/tldr/linux/beep
canonical: "https://hexmos.com/freedevtools/tldr/linux/beep/"
description: "Generate PC speaker sounds with Beep Generator. Control frequency, duration, and repetition of beeps via the command line. Free online tool, no registration required."
category: linux
keywords:
  - pc speaker sound generator
  - beep command line tool
  - terminal beep sound
  - frequency sound generator
  - duration sound control
  - beep sequence creation
  - pc speaker control
  - custom beep generation
  - sound effect command
  - system beep utility
features:
  - Play a single beep sound
  - Repeat a beep sound multiple times
  - Control beep frequency in Hertz
  - Control beep duration in milliseconds
  - Generate a sequence of different beeps
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# beep

> A utility to beep the PC speaker.
> More information: <https://github.com/spkr-beep/beep>.

- Play a beep:

`beep`

- Play a beep that repeats:

`beep -r {{repetitions}}`

- Play a beep at a specified frequency (Hz) and duration (milliseconds):

`beep -f {{frequency}} -l {{duration}}`

- Play each new frequency and duration as a distinct beep:

`beep -f {{frequency}} -l {{duration}} {{[-n|--new]}} -f {{frequency}} -l {{duration}}`

- Play the C major scale:

`beep -f {{262}} {{[-n|--new]}} -f {{294}} {{[-n|--new]}} -f {{330}} {{[-n|--new]}} -f {{349}} {{[-n|--new]}} -f {{392}} {{[-n|--new]}} -f {{440}} {{[-n|--new]}} -f {{494}} {{[-n|--new]}} -f {{523}}`
