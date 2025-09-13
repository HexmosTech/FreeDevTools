---
title: "FFplay - Play Media Files Easily | Free DevTools"
name: ffplay
path: /freedevtools/tldr/common/ffplay
canonical: "https://hexmos.com/freedevtools/tldr/common/ffplay/"
description: "Play media files with FFplay, a versatile and portable media player using FFmpeg libraries. Supports various formats and codecs. Free online tool, no registration required."
category: common
keywords:
- ffplay media player
- ffmpeg media playback
- video playback linux
- audio playback command line
- media format player
- codec view ffplay
- motion vector analysis
- keyframe video extraction
- stdin media playback
- command line video player
features:
- Play media files from local paths
- Play audio without a graphical interface
- Play media piped through stdin from ffmpeg
- Display motion vectors in real time
- Show only video keyframes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ffplay

> A simple and portable media player using the FFmpeg libraries and the SDL library.
> More information: <https://ffmpeg.org/ffplay-all.html>.

- Play a media file:

`ffplay {{path/to/file}}`

- Play audio from a media file without a GUI:

`ffplay -nodisp {{path/to/file}}`

- Play media passed by `ffmpeg` through `stdin`:

`ffmpeg -i {{path/to/file}} -c {{copy}} -f {{media_format}} - | ffplay -`

- Play a video and show motion vectors in real time:

`ffplay -flags2 +export_mvs -vf codecview=mv=pf+bf+bb {{path/to/file}}`

- Show only video keyframes:

`ffplay -vf select="{{eq(pict_type\,PICT_TYPE_I)}}" {{path/to/file}}`
