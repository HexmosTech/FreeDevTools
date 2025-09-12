---
title: "Sox - Convert Audio Files | Free DevTools"
name: sox
path: /freedevtools/tldr/common/sox
canonical: "https://hexmos.com/freedevtools/tldr/common/sox/"
description: "Convert audio files easily with Sox. Modify, normalize, and reverse audio using command line interface. Free online tool, no registration required."
category: common
keywords:
- audio converter
- audio file conversion
- sound exchange
- sox command
- audio manipulation
- audio processing
- audio normalization
- command line audio
- audio file trimming
- audio file reversing
features:
- Convert between different audio file formats
- Trim audio files by specifying start and duration
- Normalize audio volume to prevent clipping
- Reverse the playback direction of audio files
- Print statistical data about audio files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sox

> Sound eXchange: play, record and convert audio files.
> Audio formats are identified by the extension.
> More information: <https://manned.org/sox>.

- Merge two audio files into one:

`sox {{[-m|--combine mix]}} {{path/to/input_audio1}} {{path/to/input_audio2}} {{path/to/output_audio}}`

- Trim an audio file to the specified times:

`sox {{path/to/input_audio}} {{path/to/output_audio}} trim {{start}} {{duration}}`

- Normalize an audio file (adjust volume to the maximum peak level, without clipping):

`sox --norm {{path/to/input_audio}} {{path/to/output_audio}}`

- Reverse and save an audio file:

`sox {{path/to/input_audio}} {{path/to/output_audio}} reverse`

- Print statistical data of an audio file:

`sox {{path/to/input_audio}} {{[-n|--null]}} stat`

- Increase the volume of an audio file by 2x:

`sox {{[-v|--volume]}} 2.0 {{path/to/input_audio}} {{path/to/output_audio}}`
