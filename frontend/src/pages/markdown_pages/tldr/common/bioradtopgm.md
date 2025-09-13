---
title: "Convert Biorad to PGM - Image Format Converter | Free DevTools"
name: bioradtopgm
path: /freedevtools/tldr/common/bioradtopgm
canonical: "https://hexmos.com/freedevtools/tldr/common/bioradtopgm/"
description: "Convert Biorad files to PGM format with Bioradtopgm. Extract image data and create PGM files from confocal microscopy files. Free online tool, no registration required."
category: common
keywords:
- biorad to pgm converter
- biorad file converter
- pgm image converter
- confocal image conversion
- image format conversion
- image processing tool
- file conversion utility
- bio-rad pic converter
- netpbm converter
- image sequence extraction
features:
- Convert Biorad confocal files to PGM image format
- Extract specific images from Biorad files by index
- Output the number of images contained in a Biorad file
- Process Biorad (.pic) files from the command line
- Display the version of the bioradtopgm tool
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bioradtopgm

> Convert a Biorad confocal file into a PGM file.
> More information: <https://netpbm.sourceforge.net/doc/bioradtopgm.html>.

- Read a Biorad confocal file and store the n'th image contained in it to as a PGM file:

`bioradtopgm -{{n}} {{path/to/file.pic}} > {{path/to/file.pgm}}`

- Read a Biorad confocal file and print the number of images it contains:

`bioradtopgm {{path/to/file.pic}}`

- Display version:

`bioradtopgm {{[-v|-version]}}`
