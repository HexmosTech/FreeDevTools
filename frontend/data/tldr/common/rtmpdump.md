---
title: "Download RTMP Streams - Dump Media Content | Online Free DevTools by Hexmos"
name: rtmpdump
path: "/freedevtools/tldr/common/rtmpdump/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rtmpdump/"
description: "Download RTMP streams with RTMPdump. Capture media content streamed over the Real Time Messaging Protocol (RTMP). Free online tool, no registration required."
category: common
keywords:
- RTMP stream downloader
- RTMP capture tool
- RTMP dump utility
- Media stream grabber
- Flash video downloader
- RTMP recording software
- Live stream ripper
- RTMP stream analyzer
- Command line stream downloader
- RTMP protocol sniffer
features:
- Download media streamed via RTMP
- Capture RTMP streams from Flash players
- Specify connection parameters for RTMP streams
- Download streams requiring a referrer URL
- Save downloaded RTMP streams to FLV files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rtmpdump

> Dump media content streamed over the RTMP protocol.
> More information: <https://rtmpdump.mplayerhq.hu/rtmpdump.1.html>.

- Download a file:

`rtmpdump {{[-r|--rtmp]}} {{rtmp://example.com/path/to/video}} {{[-o|--flv]}} {{file.ext}}`

- Download a file from a Flash player:

`rtmpdump {{[-r|--rtmp]}} {{rtmp://example.com/path/to/video}} {{[-W|--swfVfy]}} {{http://example.com/player}} {{[-f|--flashVer]}} "{{LNX 10,0,32,18}}" {{[-o|--flv]}} {{file.ext}}`

- Specify connection parameters if they are not detected correctly:

`rtmpdump {{[-r|--rtmp]}} {{rtmp://example.com/path/to/video}} {{[-a|--app]}} {{app_name}} {{[-y|--playpath]}} {{path/to/video}} {{[-o|--flv]}} {{file.ext}}`

- Download a file from a server that requires a referrer:

`rtmpdump {{[-r|--rtmp]}} {{rtmp://example.com/path/to/video}} {{[-p|--pageUrl]}} {{http://example.com/webpage}} {{[-o|--flv]}} {{file.ext}}`
