---
title: "Merge Multimedia Streams - Control mkvmerge | Online Free DevTools by Hexmos"
name: mkvmerge
path: "/freedevtools/tldr/common/mkvmerge/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mkvmerge/"
description: "Merge multimedia streams easily with mkvmerge. Combine video, audio, and subtitles into Matroska files. Free online tool, no registration required."
category: common
keywords:
- Matroska merge tool
- MKV merge command
- multimedia stream combiner
- Matroska video editor
- audio video muxer
- subtitle adder
- MKV extraction tool
- Matroska track extractor
- command line MKV tool
- video container editor
features:
- Merge video and audio into MKV files
- Extract audio tracks from Matroska files
- Extract subtitle tracks from MKV files
- Add subtitle tracks to existing MKV files
- Identify information about Matroska files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkvmerge

> Merge and extract multimedia streams.
> More information: <https://mkvtoolnix.download/doc/mkvmerge.html>.

- Display information about a Matroska file:

`mkvmerge --identify {{path/to/file.mkv}}`

- Extract the audio from track 1 of a specific file:

`mkvextract tracks {{path/to/file.mkv}} {{1}}:{{path/to/output.webm}}`

- Extract the subtitle from track 3 of a specific file:

`mkvextract tracks {{path/to/file.mkv}} {{3}}:{{path/to/subs.srt}}`

- Add a subtitle track to a file:

`mkvmerge --output {{path/to/output.mkv}} {{path/to/file.mkv}} {{path/to/subs.srt}}`
