---
title: "Recompress FLAC - Compress Audio Files with Reflac | Online Free DevTools by Hexmos"
name: reflac
path: /freedevtools/tldr/common/reflac
canonical: "https://hexmos.com/freedevtools/tldr/common/reflac/"
description: "Recompress audio files with Reflac. Reduce FLAC file sizes while preserving metadata. Improve storage efficiency and audio quality using lossless compression. Free online tool, no registration required."
category: common
keywords:
- flac recompress
- flac compression
- audio compression
- lossless compression
- audio file optimization
- flac file re-encoding
- audio file converter
- flac metadata preservation
- command line audio tools
- audio archiving
features:
- Recompresses FLAC files in-place
- Preserves metadata during recompression
- Offers variable compression levels
- Supports recursive directory processing
- Maintains file modification timestamps
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reflac

> Recompress FLAC files in-place while preserving metadata.
> More information: <https://github.com/chungy/reflac>.

- Recompress a directory of FLAC files:

`reflac {{path/to/directory}}`

- Enable maximum compression (very slow):

`reflac {{[-8|--best]}} {{path/to/directory}}`

- Display filenames as they are processed:

`reflac {{[-v|--verbose]}} {{path/to/directory}}`

- Recurse into subdirectories:

`reflac {{[-r|--recursive]}} {{path/to/directory}}`

- Preserve file modification times:

`reflac --preserve {{path/to/directory}}`
