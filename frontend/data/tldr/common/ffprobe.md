---
title: "Analyze Multimedia Streams - ffprobe | Online Free DevTools by Hexmos"
name: ffprobe
path: "/freedevtools/tldr/common/ffprobe/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ffprobe/"
description: "Analyze multimedia streams with ffprobe. Extract video metadata, check frame rates, and determine bitrates effortlessly. Free online tool, no registration required."
category: common
keywords:
- multimedia stream analyzer
- ffprobe metadata extraction
- video bitrate analysis
- frame rate detection
- media duration checker
- video width height check
- ffmpeg stream analysis
- audio stream information
- mp4 metadata reader
- video stream inspection
features:
- Display all stream information for a media file.
- Extract media duration.
- Determine video frame rate.
- Display video width and height.
- Analyze average video bit rate.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ffprobe

> Multimedia stream analyzer.
> More information: <https://ffmpeg.org/ffprobe.html>.

- Display all available stream info for a media file:

`ffprobe {{[-v|-loglevel]}} error -show_streams {{input.mp4}}`

- Display media duration:

`ffprobe {{[-v|-loglevel]}} error -show_entries format=duration {{[-of|-output_format]}} default=noprint_wrappers=1:nokey=1 {{input.mp4}}`

- Display the frame rate of a video:

`ffprobe {{[-v|-loglevel]}} error -select_streams v:0 -show_entries stream=avg_frame_rate {{[-of|-output_format]}} default=noprint_wrappers=1:nokey=1 {{input.mp4}}`

- Display the width or height of a video:

`ffprobe {{[-v|-loglevel]}} error -select_streams v:0 -show_entries stream={{width|height}} {{[-of|-output_format]}} default=noprint_wrappers=1:nokey=1 {{input.mp4}}`

- Display the average bit rate of a video:

`ffprobe {{[-v|-loglevel]}} error -select_streams v:0 -show_entries stream=bit_rate {{[-of|-output_format]}} default=noprint_wrappers=1:nokey=1 {{input.mp4}}`
