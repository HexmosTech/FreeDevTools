---
title: "Convert Audio Files - vgmstream_cli Audio Converter | Online Free DevTools by Hexmos"
name: vgmstream_cli
path: /freedevtools/tldr/common/vgmstream_cli
canonical: "https://hexmos.com/freedevtools/tldr/common/vgmstream_cli/"
description: "Convert audio files effortlessly with vgmstream_cli. Decode various video game audio formats to WAV with advanced looping and fade options. Free online tool, no registration required."
category: common
keywords:
- Video Game Audio Converter
- Audio Format Decoder
- vgmstream Audio Conversion
- ADC to WAV Converter
- Loopable Audio Extraction
- Command Line Audio Tool
- Batch Audio Conversion
- Game Audio Rip
- Linux Audio Converter
- Cross Platform Audio Tool
features:
- Decode a wide range of video game audio formats
- Convert audio files to WAV format
- Extract audio with custom looping configurations
- Print audio metadata without decoding
- Perform batch audio conversions from command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vgmstream_cli

> Play a wide variety of audio formats used in video games and convert them into `wav`.
> More information: <https://github.com/vgmstream/vgmstream/blob/master/doc/USAGE.md>.

- Decode an `adc` file to `wav`. (Default output name is `input.wav`):

`vgmstream_cli {{path/to/input.adc}} -o {{path/to/output.wav}}`

- Print metadata without decoding the audio:

`vgmstream_cli {{path/to/input.adc}} -m`

- Decode an audio file without loops:

`vgmstream_cli {{path/to/input.adc}} -o {{path/to/output.wav}} -i`

- Decode with three loops, then add a 3s delay followed by a 5s fadeout:

`vgmstream_cli {{path/to/input.adc}} -o {{path/to/output.wav}} -l {{3.0}} -f {{5.0}} -d {{3.0}}`

- Convert multiple files to `bgm_(original name).wav` (Default `-o` pattern is `?f.wav`):

`vgmstream_cli -o {{path/to/bgm_?f.wav}} {{path/to/file1.adc path/to/file2.adc ...}}`

- Play the file looping endlessly (`channels` and `rate` must match metadata):

`vgmstream_cli {{path/to/input.adc}} -pec | aplay --format cd --channels {{1}} --rate {{44100}}`
