---
title: "Play MIDI Files - Convert MIDI Audio | Online Free DevTools by Hexmos"
name: timidity
path: /freedevtools/tldr/common/timidity
canonical: "https://hexmos.com/freedevtools/tldr/common/timidity/"
description: "Play MIDI files with Timidity. Convert MIDI files to WAV and FLAC audio formats using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- MIDI player
- MIDI converter
- MIDI to WAV
- MIDI to FLAC
- command line MIDI player
- linux MIDI
- play MIDI
- convert MIDI
- MIDI loop
- change MIDI key
features:
- Play MIDI files from the command line.
- Convert MIDI files to WAV audio format.
- Convert MIDI files to FLAC audio format.
- Loop playback of MIDI files continuously.
- Adjust the key signature of MIDI files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# timidity

> Play and convert MIDI files.
> More information: <https://timidity.sourceforge.net>.

- Play a MIDI file:

`timidity {{path/to/file.mid}}`

- Play a MIDI file in a loop:

`timidity --loop {{path/to/file.mid}}`

- Play a MIDI file in a specific key (0 = C major/A minor, -1 = F major/D minor, +1 = G major/E minor, etc.):

`timidity --force-keysig={{-flats|+sharps}} {{path/to/file.mid}}`

- Convert a MIDI file to PCM (WAV) audio:

`timidity --output-mode={{w}} --output-file={{path/to/file.wav}} {{path/to/file.mid}}`

- Convert a MIDI file to FLAC audio:

`timidity --output-mode={{F}} --output-file={{path/to/file.flac}} {{path/to/file.mid}}`
