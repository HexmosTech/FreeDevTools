---
title: "Fluidsynth Synthesizer - Play MIDI Files | Free DevTools"
name: fluidsynth
path: /freedevtools/tldr/linux/fluidsynth
canonical: "https://hexmos.com/freedevtools/tldr/linux/fluidsynth/"
description: "Synthesize audio from MIDI files with Fluidsynth.  Easily play MIDI files using command-line options and specify audio drivers like PulseAudio or Pipewire. Free online tool, no registration required."
category: linux
keywords:
  - midi synthesizer
  - midi playback
  - fluidsynth command
  - soundfont player
  - audio synthesis
  - command-line audio
  - linux audio
  - sf2 player
  - pipewire audio
  - pulseaudio audio
features:
  - Plays MIDI files using specified soundfonts.
  - Allows selection of audio output drivers (Pipewire, PulseAudio).
  - Supports various soundfont formats (.sf2).
  - Provides command-line interface for easy use.
  - Enables control over audio playback parameters (indirectly through soundfont settings).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fluidsynth

> Synthesize audio from MIDI files.
> More information: <https://github.com/FluidSynth/fluidsynth/wiki/UserManual>.

- Play a MIDI file:

`fluidsynth {{path/to/soundfont.sf2}} {{path/to/file.midi}}`

- Specify the audio driver:

`fluidsynth {{[-a|--audio-driver]}} {{pipewire|pulseaudio}} {{path/to/soundfont.sf2}} {{path/to/file.midi}}`

- Display help:

`fluidsynth {{[-h|--help]}}`
