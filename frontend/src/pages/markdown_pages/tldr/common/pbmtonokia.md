---
title: "Convert PBM Image - Format Nokia Graphics | Online Free DevTools by Hexmos"
name: pbmtonokia
path: /freedevtools/tldr/common/pbmtonokia
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtonokia/"
description: "Format PBM images for Nokia devices with pbmtonokia. Convert to Operator Logos, Group Graphics, and Picture Messages. Free online tool, no registration required."
category: common
keywords:
- PBM image format
- Nokia graphic converter
- PBM to NOL conversion
- PBM to NGG conversion
- PBM to NPM conversion
- Nokia smart messaging
- Operator logo generator
- Group graphic generator
- Picture message encoder
- Image format conversion
features:
- Convert PBM images to Nokia Operator Logos.
- Convert PBM images to Nokia Group Graphics.
- Convert PBM images to Nokia Picture Messages.
- Generate Nokia-compatible hex code from PBM images.
- Create NOL, NGG, and NPM files from PBM images.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmtonokia

> Convert a PBM image to one of Nokia's Smart Messaging Formats .
> More information: <https://netpbm.sourceforge.net/doc/pbmtonokia.html>.

- Convert a PBM image into a Nokia Operator Logo as hexcode:

`pbmtonokia {{[-f|-fmt]}} NEX_NOL -net {{network_operator_code}} {{path/to/image.pbm}} > {{path/to/output.hex}}`

- Convert a PBM image into a Nokia Group Graphic as hexcode:

`pbmtonokia {{[-f|-fmt]}} NEX_NGG {{path/to/image.pbm}} > {{path/to/output.hex}}`

- Convert a PBM image into a Nokia Picture Message with the specified text as hexcode:

`pbmtonokia {{[-f|-fmt]}} NEX_NPM -txt {{text_message}} {{path/to/image.pbm}} > {{path/to/output.hex}}`

- Convert a PBM image into a Nokia Operator Logo as a NOL file:

`pbmtonokia {{[-f|-fmt]}} NOL {{path/to/image.pbm}} > {{path/to/output.nol}}`

- Convert a PBM image into a Nokia Group Graphic as an NGG file:

`pbmtonokia {{[-f|-fmt]}} NGG {{path/to/image.pbm}} > {{path/to/output.ngg}}`

- Convert a PBM image into a Nokia Picture Message as an NPM file:

`pbmtonokia {{[-f|-fmt]}} NPM {{path/to/image.pbm}} > {{path/to/output.npm}}`
