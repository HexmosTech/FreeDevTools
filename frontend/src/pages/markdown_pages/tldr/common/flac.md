---
title: "FLAC Encode/Decode - Create Lossless Audio Files | Online Free DevTools by Hexmos"
name: flac
path: /freedevtools/tldr/common/flac
canonical: "https://hexmos.com/freedevtools/tldr/common/flac/"
description: "Encode FLAC files effortlessly with flac. Convert WAV to FLAC and decode FLAC to WAV, ensuring high-quality audio conversion. Free online tool, no registration required."
category: common
keywords:
- flac encoder
- flac decoder
- wav to flac
- flac to wav
- lossless audio encoding
- audio file conversion
- flac command line
- flac linux
- flac macos
- flac audio tool
features:
- Encode WAV files to FLAC format losslessly
- Decode FLAC files back to WAV format
- Specify output file names for encoding and decoding
- Test FLAC files for data integrity
- Process audio files using command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flac

> Encodes, decodes and tests FLAC files.
> More information: <https://xiph.org/flac>.

- Encode a WAV file to FLAC (this will create a FLAC file in the same location as the WAV file):

`flac {{path/to/file.wav}}`

- Encode a WAV file to FLAC, specifying the output file:

`flac {{[-o|--output-name]}} {{path/to/output.flac}} {{path/to/file.wav}}`

- Decode a FLAC file to WAV, specifying the output file:

`flac {{[-d|--decode]}} {{[-o|--output-name]}} {{path/to/output.wav}} {{path/to/file.flac}}`

- Test a FLAC file for the correct encoding:

`flac {{[-t|--test]}} {{path/to/file.flac}}`
