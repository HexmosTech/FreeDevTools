---
title: "Manage ID3 Tags - Convert & List ID3v1/v2 | Free DevTools"
name: id3v2
path: /freedevtools/tldr/unknown/id3v2
canonical: "https://hexmos.com/freedevtools/tldr/unknown/id3v2/"
description: "Manage ID3 tags with id3v2. Convert ID3v1 to ID3v2, list tag information, and delete tags easily. Free online tool, no registration required."
category: unknown
keywords:
- id3 tag manager
- mp3 tag editor
- id3v2 tag editor
- id3v1 to id3v2 converter
- audio metadata editor
- id3 tag remover
- command line id3 editor
- linux id3 tag
- macos id3 tag
- mp3 metadata viewer
features:
- List all available ID3 genres
- Display all tags within specified audio files
- Delete ID3v1 tags from audio files
- Delete ID3v2 tags from audio files
- Show the installed id3v2 version
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# id3v2

> Manage id3v2 tags, converts and lists id3v1.
> More information: <https://manned.org/id3v2.1>.

- List all genres:

`id3v2 {{[-L|--list-genres]}}`

- List all tags of specific files:

`id3v2 {{[-l|--list]}} {{path/to/file1 path/to/file2 ...}}`

- Delete all `id3v2` or `id3v1` tags of specific files:

`id3v2 {{--delete-v2|--delete-v1}} {{path/to/file1 path/to/file2 ...}}`

- Display help:

`id3v2 {{[-h|--help]}}`

- Display version:

`id3v2 {{[-v|--version]}}`
