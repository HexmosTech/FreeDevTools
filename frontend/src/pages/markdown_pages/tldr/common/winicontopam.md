---
title: "ICO to PAM Converter - Convert Images | Online Free DevTools by Hexmos"
name: winicontopam
path: /freedevtools/tldr/common/winicontopam
canonical: "https://hexmos.com/freedevtools/tldr/common/winicontopam/"
description: "Convert ICO files to PAM images with ICO to PAM Converter. Extract specific images, handle transparency, and streamline image processing. Free online tool, no registration required."
category: common
keywords:
- ico to pam conversion
- windows icon to pam
- image format conversion
- ico file converter
- pam image generator
- convert ico image
- netpbm image tools
- windows ico tool
- icon extraction tool
- transparency handling tool
features:
- Convert Windows ICO files to PAM format
- Extract specific images from ICO files
- Handle graded transparency data with AND masks
- Convert all images within an ICO file
- Write AND masks to PAM file's fifth channel
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# winicontopam

> Convert a Windows ICO file to a PAM file.
> More information: <https://netpbm.sourceforge.net/doc/winicontopam.html>.

- Read an ICO file and convert the best quality image contained therein to the PAM format:

`winicontopam {{path/to/input_file.ico}} > {{path/to/output.pam}}`

- Convert all images in the input file to PAM:

`winicontopam {{[-al|-allimages]}} {{path/to/input_file.ico}} > {{path/to/output.pam}}`

- Convert the n'th image in the input file to PAM:

`winicontopam {{[-i|-image]}} {{n}} {{path/to/input_file.ico}} > {{path/to/output.pam}}`

- If the image(s) to be extracted contain graded transparency data and an AND mask, write the AND mask into the fifth channel of the output PAM file:

`winicontopam {{[-an|-andmasks]}} {{path/to/input_file.ico}} > {{path/to/output.pam}}`
