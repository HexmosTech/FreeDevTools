---
title: "Audio Split - Split Audio Files with shnsplit | Online Free DevTools by Hexmos"
name: shnsplit
path: /freedevtools/tldr/linux/shnsplit
canonical: "https://hexmos.com/freedevtools/tldr/linux/shnsplit/"
description: "Split audio files with shnsplit, a powerful command-line utility for Linux. Divide audio based on CUE sheets for efficient management. Free online tool, no registration required."
category: linux
keywords:
- cue sheet splitter
- audio file splitter
- shnsplit linux
- wav splitter linux
- flac splitter linux
- cue to wav converter
- audio track separation
- linux audio tools
- command line audio splitter
- split audio by cue
features:
- Split audio files based on CUE sheet data
- Support WAV and FLAC audio formats
- Customize output file names and formats
- Show supported audio formats
- Process batch audio splitting
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# shnsplit

> Splits audio files according to a `.cue` file.
> More information: <http://shnutils.freeshell.org/shntool/>.

- Split a `.wav` + `.cue` file into multiple files:

`shnsplit -f {{path/to/file.cue}} {{path/to/file.wav}}`

- Show supported formats:

`shnsplit -a`

- Split a `.flac` file into multiple files:

`shnsplit -f {{path/to/file.cue}} -o flac {{path/to/file.flac}}`

- Split a `.wav` file into files of the form "track-number - album - title":

`shnsplit -f {{path/to/file.cue}} {{path/to/file.wav}} -t "%n - %a - %t"`
