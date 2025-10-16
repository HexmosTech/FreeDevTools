---
title: "HandBrakeCLI - Convert Videos | Online Free DevTools by Hexmos"
name: handbrakecli
path: "/freedevtools/tldr/common/handbrakecli/"
canonical: "https://hexmos.com/freedevtools/tldr/common/handbrakecli/"
description: "Convert videos with HandBrakeCLI. Compress video files and rip DVDs using this powerful command-line interface. Free online tool, no registration required."
category: common
keywords:
- video converter cli
- handbrakecli command line
- dvd ripping linux
- video compression macos
- mkv converter
- mp4 converter
- x264 encoder
- video resizing tool
- handbrake presets
- batch video conversion
features:
- Convert video files to various formats
- Rip DVDs using command line
- Resize video dimensions
- Apply HandBrake presets for optimized conversion
- Extract CSS keys from DVDs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# handbrakecli

> Command-line interface to the HandBrake video conversion and DVD ripping tool.
> More information: <https://handbrake.fr/docs/en/latest/cli/command-line-reference.html>.

- Convert a video file to MKV (AAC 160kbit audio and x264 CRF20 video):

`handbrakecli {{[-i|--input]}} {{input.avi}} {{[-o|--output]}} {{output.mkv}} {{[-e|--encoder]}} x264 {{[-q|--quality]}} 20 {{[-B|--ab]}} 160`

- Resize a video file to 320x240:

`handbrakecli {{[-i|--input]}} {{input.mp4}} {{[-o|--output]}} {{output.mp4}} {{[-w|--width]}} 320 {{[-l|--height]}} 240`

- List available presets:

`handbrakecli {{[-z|--preset-list]}}`

- Convert an AVI video to MP4 using the Android preset:

`handbrakecli {{[-Z|--preset]}} "Android" {{[-i|--input]}} {{input.ext}} {{[-o|--output]}} {{output.mp4}}`

- Print the content of a DVD, getting the CSS keys in the process:

`handbrakecli {{[-i|--input]}} {{/dev/sr0}} {{[-t|--title]}} 0`

- Rip the first track of a DVD in the specified device. Audiotracks and subtitle languages are specified as lists:

`handbrakecli {{[-i|--input]}} {{/dev/sr0}} {{[-t|--title]}} 1 {{[-o|--output]}} {{out.mkv}} {{[-f|--format]}} av_mkv {{[-e|--encoder]}} x264 {{[-s|--subtitle]}} {{1,4,5}} {{[-a|--audio]}} {{1,2}} {{[-E|--aencoder]}} copy {{[-q|--quality]}} {{23}}`
