---
title: "eyeD3 - Control MP3 Metadata | Online Free DevTools by Hexmos"
name: eyed3
path: "/freedevtools/tldr/linux/eyed3/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/eyed3/"
description: "Control MP3 metadata with eyeD3. Set titles, albums, and cover art for your audio files. Free online tool, no registration required."
category: linux
keywords:
- mp3 metadata editor
- audio tag editor
- linux mp3 tagger
- eyed3 mp3 tool
- mp3 album art
- mp3 title editor
- mp3 tag manager
- audio metadata linux
- mp3 metadata linux
- id3 tag editor
features:
- View MP3 file information
- Set the title of an MP3
- Set the album for multiple MP3 files
- Add front cover art to an MP3 file
- Manipulate MP3 metadata from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eyeD3

> Read and manipulate metadata of MP3 files.
> More information: <https://manned.org/eyeD3>.

- View information about an MP3 file:

`eyeD3 {{filename.mp3}}`

- Set the title of an MP3 file:

`eyeD3 {{[-t|--title]}} "{{A Title}}" {{filename.mp3}}`

- Set the album of all the MP3 files in a directory:

`eyeD3 {{[-A|--album]}} "{{Album Name}}" {{*.mp3}}`

- Set the front cover art for an MP3 file:

`eyeD3 --add-image {{front_cover.jpeg}}:FRONT_COVER: {{filename.mp3}}`
