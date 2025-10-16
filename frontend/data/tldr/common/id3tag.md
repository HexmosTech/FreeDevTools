---
title: "ID3 Tag Editor - Manipulate MP3 Tags | Online Free DevTools by Hexmos"
name: id3tag
path: "/freedevtools/tldr/common/id3tag/"
canonical: "https://hexmos.com/freedevtools/tldr/common/id3tag/"
description: "Manipulate MP3 tags with ID3 Tag Editor. Edit artist, song title, and album information for MP3 files. Free online tool, no registration required."
category: common
keywords:
- mp3 tag editor
- id3 tag editor
- mp3 metadata editor
- id3 metadata editor
- mp3 tag writer
- id3 tag writer
- mp3 tag manipulator
- linux mp3 tag
- macos mp3 tag
- command line mp3 tag editor
features:
- Set artist and song title tags
- Set album title tags
- Read ID3v1 tags
- Write ID3v2 tags
- Manipulate MP3 file metadata
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# id3tag

> Read, write, and manipulate ID3v1 and ID3v2 tags of MP3 files.
> More information: <https://manned.org/id3tag>.

- Set artist and song title tag of an MP3 file:

`id3tag --artist {{artist}} --song {{song_title}} {{path/to/file.mp3}}`

- Set album title of all MP3 files in the current directory:

`id3tag --album {{album}} {{*.mp3}}`

- Display help:

`id3tag --help`
