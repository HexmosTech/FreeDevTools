---
title: "MediaInfo - Extract Media Metadata | Free DevTools"
name: mediainfo
path: /freedevtools/tldr/common/mediainfo
canonical: "https://hexmos.com/freedevtools/tldr/common/mediainfo/"
description: "Extract media metadata with MediaInfo. Analyze video and audio files to retrieve detailed technical information. Free online tool, no registration required."
category: common
keywords:
- video metadata extraction
- audio metadata analysis
- media file inspection
- video technical details
- audio technical details
- mediainfo command line
- media file analyzer
- container format details
- codec information
- video stream metadata
features:
- Display comprehensive metadata for video and audio files
- Output metadata to the console
- Save metadata to a log file
- List all available metadata attributes
- Support a wide range of media formats
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mediainfo

> Display metadata from video and audio files.
> More information: <https://mediaarea.net/MediaInfo>.

- Display metadata for a given file in the console:

`mediainfo {{file}}`

- Store the output to a given file along with displaying in the console:

`mediainfo --Logfile={{out.txt}} {{file}}`

- List metadata attributes that can be extracted:

`mediainfo --Info-Parameters`
