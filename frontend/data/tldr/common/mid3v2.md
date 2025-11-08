---
title: "Mid3v2 - Edit Audio Tags | Online Free DevTools by Hexmos"
name: mid3v2
path: "/freedevtools/tldr/common/mid3v2/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mid3v2/"
description: "Edit audio tags with Mid3v2. Modify artist, album, song information and set picture, year, or date information on MP3 files. Free online tool, no registration required."
category: common
keywords:
- audio tag editor
- mp3 tag editor
- id3 tag editor
- id3v2 tag editor
- mutagen audio tagging
- linux audio tags
- macos audio tags
- command line tagger
- audio metadata editor
- mp3 metadata editor
features:
- List supported ID3v2 frames and genres.
- List all tags within specific MP3 files.
- Set artist, album, and song information.
- Set picture information for audio files.
- Set year or date information for audio files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mid3v2

> Edit audio tags.
> See also: `id3v2`.
> More information: <https://mutagen.readthedocs.io/en/latest/man/mid3v2.html>.

- List all supported ID3v2.3 or ID3v2.4 frames and their meanings:

`mid3v2 --list-frames {{path/to/file1.mp3 path/to/file2.mp3 ...}}`

- List all supported ID3v1 numeric genres:

`mid3v2 --list-genres {{path/to/file1.mp3 path/to/file2.mp3 ...}}`

- List all tags in specific files:

`mid3v2 --list {{path/to/file1.mp3 path/to/file2.mp3 ...}}`

- Set specific artist, album, or song information:

`mid3v2 {{--artist|--album|--song}}={{string}} {{path/to/file1.mp3 path/to/file2.mp3 ...}}`

- Set specific picture information:

`mid3v2 --picture={{filename:description:image_type:mime_type}} {{path/to/file1.mp3 path/to/file2.mp3 ...}}`

- Set specific year information:

`mid3v2 --year={{YYYY}} {{path/to/file1.mp3 path/to/file2.mp3 ...}}`

- Set specific date information:

`mid3v2 --date={{YYYY-MM-DD}} {{path/to/file1.mp3 path/to/file2.mp3 ...}}`
