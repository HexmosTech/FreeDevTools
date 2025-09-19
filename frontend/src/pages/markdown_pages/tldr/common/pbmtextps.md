---
title: "Generate PBM Image - Text to PBM with PostScript | Online Free DevTools by Hexmos"
name: pbmtextps
path: /freedevtools/tldr/common/pbmtextps
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtextps/"
description: "Generate PBM image with pbmtextps using PostScript fonts. Convert text to PBM images online effortlessly. Free online tool, no registration required."
category: common
keywords:
- pbm image generator
- text to pbm converter
- postscript pbm rendering
- command line image generation
- netpbm pbm tools
- pbm image from text
- linux pbm tools
- macos pbm tools
- pbm image creator
- ascii art generator
features:
- Render text into a PBM image format
- Specify font type and size for text rendering
- Define custom left and top margins for output
- Output PostScript code instead of PBM image
- Control the appearance of text in PBM format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmtextps

> Render text as a PBM image using PostScript.
> See also: `pbmtext`.
> More information: <https://netpbm.sourceforge.net/doc/pbmtextps.html>.

- Render a single line of text as a PBM image:

`pbmtextps "{{Hello World!}}" > {{path/to/output.pbm}}`

- Specify the font and font size:

`pbmtextps -font {{Times-Roman}} -fontsize {{30}} "{{Hello World!}}" > {{path/to/output.pbm}}`

- Specify the desired left and top margins:

`pbmtextps {{[-l|-leftmargin]}} {{70}} {{[-t|-topmargin]}} {{162}} "{{Hello World!}}" > {{path/to/output.pbm}}`

- Do not output the rendered text as a PBM image, but a PostScript program that would create this image:

`pbmtextps {{[-du|-dump-ps]}} "{{Hello World!}}" > {{path/to/output.ps}}`
