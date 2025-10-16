---
title: "Opus Encode Audio - Convert Audio to Opus Format | Online Free DevTools by Hexmos"
name: opusenc
path: "/freedevtools/tldr/common/opusenc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/opusenc/"
description: "Encode audio to Opus format with Opusenc. Compress WAV and FLAC files into Opus audio files using command line. Free online tool, no registration required."
category: common
keywords:
- audio to opus converter
- wav to opus encoding
- flac to opus encoding
- opus audio compression
- command line audio encoder
- opus command line tool
- audio format conversion
- opus encoder linux
- opus encoder windows
- opus audio bitrate control
features:
- Convert WAV audio files to Opus format
- Convert FLAC audio files to Opus format
- Control audio bitrate during encoding
- Downmix stereo audio to mono during conversion
- Encode audio with specific quality levels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# opusenc

> Convert WAV or FLAC audio to Opus.
> More information: <https://opus-codec.org/docs/opus-tools/opusenc.html>.

- Convert WAV to Opus using default options:

`opusenc {{path/to/input.wav}} {{path/to/output.opus}}`

- Convert stereo audio at the highest quality level:

`opusenc --bitrate {{512}} {{path/to/input.wav}} {{path/to/output.opus}}`

- Convert 5.1 surround sound audio at the highest quality level:

`opusenc --bitrate {{1536}} {{path/to/input.flac}} {{path/to/output.opus}}`

- Convert speech audio at the lowest quality level:

`opusenc {{path/to/input.wav}} --downmix-mono --bitrate {{6}} {{path/to/out.opus}}`
