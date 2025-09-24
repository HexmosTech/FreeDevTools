---
title: "LMMS - Create Music Tracks with Open Source DAW | Online Free DevTools by Hexmos"
name: lmms
path: /freedevtools/tldr/common/lmms
canonical: "https://hexmos.com/freedevtools/tldr/common/lmms/"
description: "Create music tracks with LMMS, the free and open-source digital audio workstation. Edit, render, and compose music with this cross-platform tool. Free online tool, no registration required."
category: common
keywords:
- MMPZ Project Editor
- Digital Audio Workstation
- Music Composition Software
- Audio Rendering Tool
- Open Source DAW
- Cross-Platform Music Production
- LMMS Audio Editor
- LMMS Project Renderer
- Music Arrangement Software
- MIDI Import LMMS
features:
- Render LMMS project files to audio
- Dump LMMS project files as XML
- Import MIDI and Hydrogen files
- Start the LMMS GUI with custom configurations
- Render individual tracks from a project file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lmms

> Free, open source, cross-platform digital audio workstation.
> Render a `.mmp` or `.mmpz` project file, dump a `.mmpz` as XML, or start the GUI.
> See also: `mixxx`.
> More information: <https://lmms.io>.

- Start the GUI:

`lmms`

- Start the GUI and load external config:

`lmms --config {{path/to/config.xml}}`

- Start the GUI and import MIDI or Hydrogen file:

`lmms --import {{path/to/midi/or/hydrogen/file}}`

- Start the GUI with a specified window size:

`lmms --geometry {{x_size}}x{{y_size}}+{{x_offset}}+{{y_offset}}`

- Dump a `.mmpz` file:

`lmms dump {{path/to/mmpz/file.mmpz}}`

- Render a project file:

`lmms render {{path/to/mmpz_or_mmp/file}}`

- Render the individual tracks of a project file:

`lmms rendertracks {{path/to/mmpz_or_mmp/file}} {{path/to/dump/directory}}`

- Render with custom samplerate, format, and as a loop:

`lmms render --samplerate {{88200}} --format {{ogg}} --loop --output {{path/to/output/file.ogg}}`
