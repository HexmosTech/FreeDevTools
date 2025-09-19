---
title: "MP4 Container - Muxe Streams into MP4 with mp4box | Online Free DevTools by Hexmos"
name: mp4box
path: /freedevtools/tldr/common/mp4box
canonical: "https://hexmos.com/freedevtools/tldr/common/mp4box/"
description: "Muxe streams into MP4 container with mp4box. Combine audio and video, add subtitles, and display file information. Free online tool, no registration required."
category: common
keywords:
- MP4 container muxing
- MP4 stream combining
- MP4 subtitle adding
- MP4 file information
- MP4 muxing utility
- Audio video merging
- SRT to MP4 converter
- GPAC mp4box tool
- MP4 command line
- Video stream manipulation
features:
- Combine audio and video streams into an MP4 container
- Add SRT subtitle tracks to existing MP4 files
- Display detailed information about MP4 file structure
- Extract specific streams from MP4 files (audio, video)
- Muxe multiple media streams into a single MP4 file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mp4box

> MPEG-4 Systems Toolbox: muxe streams into MP4 container.
> More information: <https://gpac.wp.imt.fr/mp4box>.

- Display information about an existing MP4 file:

`mp4box -info {{path/to/file}}`

- Add an SRT subtitle file into an MP4 file:

`mp4box -add {{input_subs.srt}}:lang=eng -add {{input.mp4}} {{output.mp4}}`

- Combine audio from one file and video from another:

`mp4box -add {{input1.mp4}}#audio -add {{input2.mp4}}#video {{output.mp4}}`
