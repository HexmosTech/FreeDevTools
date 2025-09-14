---
title: "AFInfo - Parse Audio Metadata | Free DevTools"
name: afinfo
path: /freedevtools/tldr/osx/afinfo
canonical: "https://hexmos.com/freedevtools/tldr/osx/afinfo/"
description: "Parse audio metadata with AFInfo, the built-in OSX audio file information tool. Analyze file data, extract info dictionaries, and validate audio files. Free online tool, no registration required."
category: osx
keywords:
- osx audio metadata parser
- mac audio file analyzer
- afinfo command line tool
- audio info dictionary extractor
- osx audio file validator
- audio metadata reader
- audio file format inspector
- command line audio tools
- audio file properties viewer
- macos audio analysis
features:
- Display audio file metadata
- Print audio file info dictionaries
- Output audio data in XML format
- Check audio files for warnings
- Show brief audio file descriptions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# afinfo

> Audio file metadata parser for OS X.
> Built-in command of OS X.
> More information: <https://keith.github.io/xcode-man-pages/afinfo.1.html>.

- Display info of a given audio file:

`afinfo {{path/to/file}}`

- Print a one line description of the audio file:

`afinfo --brief {{path/to/file}}`

- Print metadata info and contents of the audio file's InfoDictionary:

`afinfo --info {{path/to/file}}`

- Print output in XML format:

`afinfo --xml {{path/to/file}}`

- Print warnings for the audio file if any:

`afinfo --warnings {{path/to/file}}`

- Display help:

`afinfo --help`
