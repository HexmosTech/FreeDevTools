---
title: "Generate PBM Image - Render Text as PBM | Online Free DevTools by Hexmos"
name: pbmtext
path: /freedevtools/tldr/common/pbmtext
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtext/"
description: "Generate PBM image with pbmtext. Create bitmap images from text input and customize fonts and spacing. Free online tool, no registration required."
category: common
keywords:
- PBM image generator
- Text to PBM converter
- Bitmap image creator
- Netpbm image tool
- Command line image tool
- PBM image rendering
- Image generation from text
- Linux image tools
- MacOS image tools
- Unix image processing
features:
- Render text as a PBM image
- Support multi-line text rendering
- Customize font using PBM files
- Adjust character and line spacing
- Create bitmap images from command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmtext

> Render text as a PBM image.
> See also: `pbmtextps`.
> More information: <https://netpbm.sourceforge.net/doc/pbmtext.html>.

- Render a single line of text as a PBM image:

`pbmtext "{{Hello World!}}" > {{path/to/output.pbm}}`

- Render multiple lines of text as a PBM image:

`echo "{{Hello\nWorld!}}" | pbmtext > {{path/to/output.pbm}}`

- Render text using a custom font supplied as a PBM file:

`pbmtext {{[-f|-font]}} {{path/to/font.pbm}} "{{Hello World!}}" > {{path/to/output.pbm}}`

- Specify the number of pixels between characters and lines:

`echo "{{Hello\nWorld!}}" | pbmtext {{[-s|-space]}} {{3}} {{[-ls|-lspace]}} {{10}} > {{path/to/output.pbm}}`
