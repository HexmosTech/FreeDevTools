---
title: "Control Audio Volume - Pamixer Command | Online Free DevTools by Hexmos"
name: pamixer
path: /freedevtools/tldr/common/pamixer
canonical: "https://hexmos.com/freedevtools/tldr/common/pamixer/"
description: "Control audio volume effortlessly with Pamixer. Adjust PulseAudio settings, toggle mute, and manage audio streams with command-line. Free online tool, no registration required."
category: common
keywords:
- PulseAudio volume control
- linux audio mixer
- command line audio
- pamixer volume control
- linux volume control
- audio stream control
- volume boost control
- pulseaudio command
- terminal audio control
- audio mute toggle
features:
- Set audio volume to a specific percentage
- Toggle mute for audio sinks and sources
- Increase or decrease volume incrementally
- Control volume beyond 100% with allow-boost
- List available audio sinks and sources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamixer

> A simple command-line mixer for PulseAudio.
> More information: <https://github.com/cdemoulins/pamixer#installation>.

- List all sinks and sources with their corresponding IDs:

`pamixer --list-sinks --list-sources`

- Set the volume to 75% on the default sink:

`pamixer --set-volume {{75}}`

- Toggle mute on a sink other than the default:

`pamixer --toggle-mute --sink {{ID}}`

- Increase the volume on default sink by 5%:

`pamixer {{[-i|--increase]}} {{5}}`

- Decrease the volume on a source by 5%:

`pamixer {{[-d|--decrease]}} {{5}} --source {{ID}}`

- Use the allow boost option to increase, decrease, or set the volume above 100%:

`pamixer --set-volume {{105}} --allow-boost`

- Mute the default sink (use `--unmute` instead to unmute):

`pamixer {{[-m|--mute]}}`
