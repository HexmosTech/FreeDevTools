---
title: "Transcode Video - Convert Media Formats | Online Free DevTools by Hexmos"
name: transcode
path: /freedevtools/tldr/common/transcode
canonical: "https://hexmos.com/freedevtools/tldr/common/transcode/"
description: "Transcode video and audio formats with Transcode. Convert between media formats and apply stabilization filters. Free online tool, no registration required."
category: common
keywords:
- video transcode
- audio transcode
- media format conversion
- video codec conversion
- audio codec conversion
- video stabilization
- ffmpeg alternative
- command line transcode
- video editor linux
- audio converter macos
features:
- Convert video between various codecs
- Convert audio between various codecs
- Create stabilization files for video
- Remove camera shake from video files
- Resize video to specific dimensions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# transcode

> Transcode video and audio codecs, and convert between media formats.
> More information: <https://manned.org/transcode>.

- Create stabilization file to be able to remove camera shakes:

`transcode -J stabilize -i {{input_file}}`

- Remove camera shakes after creating stabilization file, transform video using XviD:

`transcode -J transform -i {{input_file}} -y xvid -o {{output_file}}`

- Resize the video to 640x480 pixels and convert to MPEG4 codec using XviD:

`transcode -Z 640x480 -i {{input_file}} -y xvid -o {{output_file}}`
