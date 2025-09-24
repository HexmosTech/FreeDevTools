---
title: "ALSA Mixer - Control Soundcard Audio Levels | Online Free DevTools by Hexmos"
name: alsamixer
path: /freedevtools/tldr/linux/alsamixer
canonical: "https://hexmos.com/freedevtools/tldr/linux/alsamixer/"
description: "Control soundcard audio levels easily with ALSA Mixer. Adjust volume, select devices and manage audio settings directly from the command line. Free online tool, no registration required."
category: linux
keywords:
  - ALSA mixer
  - soundcard mixer
  - audio level control
  - command line audio
  - ALSA sound settings
  - linux audio mixer
  - terminal volume control
  - soundcard volume adjust
  - alsamixer commands
  - audio device selection
features:
  - Control audio levels for ALSA soundcards
  - Select specific soundcards to control
  - Choose mixer devices to manage
  - Increase and decrease volume levels
  - Navigate the interface using keyboard shortcuts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# alsamixer

> Graphical mixer for ALSA soundcard driver.
> More information: <https://manned.org/alsamixer>.

- Select the soundcard to use:

`alsamixer {{[-c|--card]}} {{soundcard_number}}`

- Select mixer device to control:

`alsamixer {{[-D|--device]}} {{device_name}}`

- Increase volume:

`<w>`

- Decrease volume:

`<x>`

- Quit alsamixer:

`<Esc>`
