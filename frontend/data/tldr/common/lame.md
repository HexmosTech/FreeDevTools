---
title: "Encode MP3 Audio - Convert WAV to MP3 with LAME | Online Free DevTools by Hexmos"
name: lame
path: "/freedevtools/tldr/common/lame/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lame/"
description: "Encode MP3 audio with LAME. Convert WAV files to MP3 and AAC formats using command-line options. Free online tool, no registration required."
category: common
keywords:
- WAV to MP3 encoder
- audio file converter
- MP3 encoding command-line
- LAME audio encoder
- WAV to AAC converter
- MP3 file creation
- audio format conversion
- command-line audio tool
- audio compression utility
- LAME command examples
features:
- Encode WAV files to MP3 format
- Convert WAV files to AAC format
- Specify bitrate for MP3 encoding
- Use presets for MP3 quality
- Control audio encoding via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lame

> Encode WAV to MP3 files.
> More information: <https://svn.code.sf.net/p/lame/svn/trunk/lame/USAGE>.

- Encode an audio file to MP3 using CBR 320 kbit/second:

`lame -b 320 {{path/to/file}}.wav {{path/to/output}}.mp3`

- Encode an audio file to MP3 using the V0 preset:

`lame -V 0 {{path/to/file}}.wav {{path/to/output}}.mp3`

- Encode an audio file to AAC:

`lame {{path/to/file}}.wav {{path/to/output}}.aac`
