---
title: "Convert CD Images - bchunk to ISO/CDR | Online Free DevTools by Hexmos"
name: bchunk
path: /freedevtools/tldr/linux/bchunk
canonical: "https://hexmos.com/freedevtools/tldr/linux/bchunk/"
description: "Convert CD images to ISO and CDR formats with bchunk. Extract audio tracks and create standard image files effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - CD image converter
  - BIN to ISO converter
  - CUE to ISO converter
  - CD audio extractor
  - ISO image creation
  - CDR image creation
  - CD image splitting
  - Binary CD conversion
  - Audio track extraction
  - bchunk command line
features:
  - Convert BIN/CUE CD images to ISO/CDR format.
  - Extract audio tracks from CD images.
  - Create standard ISO9660 image files.
  - Convert binary CD images.
  - Support for verbose mode during conversion.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bchunk

> Convert CD images to a set of `.iso` and `.cdr` tracks.
> More information: <https://manned.org/bchunk>.

- Convert binary CD into a standard iso9960 image file:

`bchunk {{path/to/image.bin}} {{path/to/image.cue}} {{path/to/output}}`

- Convert with verbose mode:

`bchunk -v {{path/to/image.bin}} {{path/to/image.cue}} {{path/to/output}}`

- Output audio files in WAV format:

`bchunk -w {{path/to/image.bin}} {{path/to/image.cue}} {{path/to/output}}`
