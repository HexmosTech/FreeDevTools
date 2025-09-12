---
title: "Convert PBM to LaserJet - Format Images | Free DevTools"
name: pbmtolj
path: "/freedevtools/tldr/common/pbmtolj"
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtolj/"
description: "Format PBM images to HP LaserJet format with pbmtolj. Achieve desired resolution and compression. Free online tool, no registration required."
category: common
keywords:
- PBM to LaserJet conversion
- Image format conversion
- pbmtolj command
- Netpbm tools
- Command line image converter
- PBM image processing
- HP LaserJet file generation
- Image resolution control
- Image compression techniques
- Linux image utilities
features:
- Convert PBM image files to HP LaserJet format
- Compress output LaserJet files using various methods (packbits, delta, compress)
- Specify the resolution for the output image
- Support for multiple resolutions (75, 100, 150, 300, 600 dpi)
- Command-line image formatting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmtolj

> Convert a PBM file to an HP LaserJet file.
> More information: <https://netpbm.sourceforge.net/doc/pbmtolj.html>.

- Convert a PBM file to an HP LaserJet file:

`pbmtolj {{path/to/input.pbm}} > {{path/to/output.lj}}`

- Compress the output file using the specified method:

`pbmtolj -{{packbits|delta|compress}} {{path/to/input.pbm}} > {{path/to/output.lj}}`

- Specify the required resolution:

`pbmtolj {{[-r|-resolution]}} {{75|100|150|300|600}} {{path/to/input.pbm}} > {{path/to/output.lj}}`
